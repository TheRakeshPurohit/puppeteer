/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {ConnectionTransport} from '../common/ConnectionTransport.js';
import type {ConnectOptions} from '../common/ConnectOptions.js';
import {debugError, DEFAULT_VIEWPORT} from '../common/util.js';

import {CdpBrowser} from './Browser.js';
import {Connection} from './Connection.js';

/**
 * Users should never call this directly; it's called when calling
 * `puppeteer.connect` with `protocol: 'cdp'`.
 *
 * @internal
 */
export async function _connectToCdpBrowser(
  connectionTransport: ConnectionTransport,
  url: string,
  options: ConnectOptions,
): Promise<CdpBrowser> {
  const {
    acceptInsecureCerts = false,
    defaultViewport = DEFAULT_VIEWPORT,
    downloadBehavior,
    targetFilter,
    _isPageTarget: isPageTarget,
    slowMo = 0,
    protocolTimeout,
  } = options;

  const connection = new Connection(
    url,
    connectionTransport,
    slowMo,
    protocolTimeout,
  );

  const {browserContextIds} = await connection.send(
    'Target.getBrowserContexts',
  );
  const browser = await CdpBrowser._create(
    connection,
    browserContextIds,
    acceptInsecureCerts,
    defaultViewport,
    downloadBehavior,
    undefined,
    () => {
      return connection.send('Browser.close').catch(debugError);
    },
    targetFilter,
    isPageTarget,
  );
  return browser;
}
