/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';
import type {Protocol} from 'devtools-protocol';

import type {CDPSession} from '../api/CDPSession.js';
import type {
  ContinueRequestOverrides,
  ResponseForRequest,
} from '../api/HTTPRequest.js';
import {
  HTTPRequest,
  STATUS_TEXTS,
  type ResourceType,
  handleError,
} from '../api/HTTPRequest.js';
import {PageEvent} from '../api/Page.js';
import {UnsupportedOperation} from '../common/Errors.js';
import {stringToBase64} from '../util/encoding.js';

import type {Request} from './core/Request.js';
import type {BidiFrame} from './Frame.js';
import {BidiHTTPResponse} from './HTTPResponse.js';

export const requests = new WeakMap<Request, BidiHTTPRequest>();

/**
 * @internal
 */
export class BidiHTTPRequest extends HTTPRequest {
  static from(
    bidiRequest: Request,
    frame: BidiFrame,
    redirect?: BidiHTTPRequest,
  ): BidiHTTPRequest {
    const request = new BidiHTTPRequest(bidiRequest, frame, redirect);
    request.#initialize();
    return request;
  }

  #redirectChain: BidiHTTPRequest[];
  #response: BidiHTTPResponse | null = null;
  override readonly id: string;
  readonly #frame: BidiFrame;
  readonly #request: Request;

  private constructor(
    request: Request,
    frame: BidiFrame,
    redirect?: BidiHTTPRequest,
  ) {
    super();
    requests.set(request, this);

    this.interception.enabled = request.isBlocked;

    this.#request = request;
    this.#frame = frame;
    this.#redirectChain = redirect ? redirect.#redirectChain : [];
    this.id = request.id;
  }

  override get client(): CDPSession {
    return this.#frame.client;
  }

  #initialize() {
    this.#request.on('redirect', request => {
      const httpRequest = BidiHTTPRequest.from(request, this.#frame, this);
      this.#redirectChain.push(this);

      request.once('success', () => {
        this.#frame
          .page()
          .trustedEmitter.emit(PageEvent.RequestFinished, httpRequest);
      });

      request.once('error', () => {
        this.#frame
          .page()
          .trustedEmitter.emit(PageEvent.RequestFailed, httpRequest);
      });
      void httpRequest.finalizeInterceptions();
    });
    this.#request.once('success', data => {
      this.#response = BidiHTTPResponse.from(
        data,
        this,
        this.#frame.page().browser().cdpSupported,
      );
    });
    this.#request.on('authenticate', this.#handleAuthentication);

    this.#frame.page().trustedEmitter.emit(PageEvent.Request, this);

    if (this.#hasInternalHeaderOverwrite) {
      this.interception.handlers.push(async () => {
        await this.continue(
          {
            headers: this.headers(),
          },
          0,
        );
      });
    }
  }

  override url(): string {
    return this.#request.url;
  }

  override resourceType(): ResourceType {
    if (!this.#frame.page().browser().cdpSupported) {
      throw new UnsupportedOperation();
    }
    return (
      this.#request.resourceType || 'other'
    ).toLowerCase() as ResourceType;
  }

  override method(): string {
    return this.#request.method;
  }

  override postData(): string | undefined {
    if (!this.#frame.page().browser().cdpSupported) {
      throw new UnsupportedOperation();
    }
    return this.#request.postData;
  }

  override hasPostData(): boolean {
    if (!this.#frame.page().browser().cdpSupported) {
      throw new UnsupportedOperation();
    }
    return this.#request.hasPostData;
  }

  override async fetchPostData(): Promise<string | undefined> {
    throw new UnsupportedOperation();
  }

  get #hasInternalHeaderOverwrite(): boolean {
    return Boolean(
      Object.keys(this.#extraHTTPHeaders).length ||
        Object.keys(this.#userAgentHeaders).length,
    );
  }

  get #extraHTTPHeaders(): Record<string, string> {
    return this.#frame?.page()._extraHTTPHeaders ?? {};
  }

  get #userAgentHeaders(): Record<string, string> {
    return this.#frame?.page()._userAgentHeaders ?? {};
  }

  override headers(): Record<string, string> {
    const headers: Record<string, string> = {};
    for (const header of this.#request.headers) {
      headers[header.name.toLowerCase()] = header.value.value;
    }
    return {
      ...headers,
      ...this.#extraHTTPHeaders,
      ...this.#userAgentHeaders,
    };
  }

  override response(): BidiHTTPResponse | null {
    return this.#response;
  }

  override failure(): {errorText: string} | null {
    if (this.#request.error === undefined) {
      return null;
    }
    return {errorText: this.#request.error};
  }

  override isNavigationRequest(): boolean {
    return this.#request.navigation !== undefined;
  }

  override initiator(): Protocol.Network.Initiator | undefined {
    return {
      ...this.#request.initiator,
      type: this.#request.initiator?.type ?? 'other',
    };
  }

  override redirectChain(): BidiHTTPRequest[] {
    return this.#redirectChain.slice();
  }

  override frame(): BidiFrame {
    return this.#frame;
  }

  override async continue(
    overrides?: ContinueRequestOverrides,
    priority?: number | undefined,
  ): Promise<void> {
    return await super.continue(
      {
        headers: this.#hasInternalHeaderOverwrite ? this.headers() : undefined,
        ...overrides,
      },
      priority,
    );
  }

  override async _continue(
    overrides: ContinueRequestOverrides = {},
  ): Promise<void> {
    const headers: Bidi.Network.Header[] = getBidiHeaders(overrides.headers);
    this.interception.handled = true;

    return await this.#request
      .continueRequest({
        url: overrides.url,
        method: overrides.method,
        body: overrides.postData
          ? {
              type: 'base64',
              value: stringToBase64(overrides.postData),
            }
          : undefined,
        headers: headers.length > 0 ? headers : undefined,
      })
      .catch(error => {
        this.interception.handled = false;
        return handleError(error);
      });
  }

  override async _abort(): Promise<void> {
    this.interception.handled = true;
    return await this.#request.failRequest().catch(error => {
      this.interception.handled = false;
      throw error;
    });
  }

  override async _respond(
    response: Partial<ResponseForRequest>,
    _priority?: number,
  ): Promise<void> {
    this.interception.handled = true;

    let parsedBody:
      | {
          contentLength: number;
          base64: string;
        }
      | undefined;
    if (response.body) {
      parsedBody = HTTPRequest.getResponse(response.body);
    }

    const headers: Bidi.Network.Header[] = getBidiHeaders(response.headers);
    const hasContentLength = headers.some(header => {
      return header.name === 'content-length';
    });

    if (response.contentType) {
      headers.push({
        name: 'content-type',
        value: {
          type: 'string',
          value: response.contentType,
        },
      });
    }

    if (parsedBody?.contentLength && !hasContentLength) {
      headers.push({
        name: 'content-length',
        value: {
          type: 'string',
          value: String(parsedBody.contentLength),
        },
      });
    }
    const status = response.status || 200;

    return await this.#request
      .provideResponse({
        statusCode: status,
        headers: headers.length > 0 ? headers : undefined,
        reasonPhrase: STATUS_TEXTS[status],
        body: parsedBody?.base64
          ? {
              type: 'base64',
              value: parsedBody?.base64,
            }
          : undefined,
      })
      .catch(error => {
        this.interception.handled = false;
        throw error;
      });
  }

  #authenticationHandled = false;
  #handleAuthentication = async () => {
    if (!this.#frame) {
      return;
    }
    const credentials = this.#frame.page()._credentials;
    if (credentials && !this.#authenticationHandled) {
      this.#authenticationHandled = true;
      void this.#request.continueWithAuth({
        action: 'provideCredentials',
        credentials: {
          type: 'password',
          username: credentials.username,
          password: credentials.password,
        },
      });
    } else {
      void this.#request.continueWithAuth({
        action: 'cancel',
      });
    }
  };

  timing(): Bidi.Network.FetchTimingInfo {
    return this.#request.timing();
  }

  getResponseContent(): Promise<Uint8Array> {
    return this.#request.getResponseContent();
  }
}

function getBidiHeaders(rawHeaders?: Record<string, unknown>) {
  const headers: Bidi.Network.Header[] = [];
  for (const [name, value] of Object.entries(rawHeaders ?? [])) {
    if (!Object.is(value, undefined)) {
      const values = Array.isArray(value) ? value : [value];

      for (const value of values) {
        headers.push({
          name: name.toLowerCase(),
          value: {
            type: 'string',
            value: String(value),
          },
        });
      }
    }
  }

  return headers;
}
