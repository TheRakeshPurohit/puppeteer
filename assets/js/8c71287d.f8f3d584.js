"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),o=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(r),c=n,k=m["".concat(i,".").concat(c)]||m[c]||d[c]||p;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var o=2;o<p;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75582:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={sidebar_label:"HTTPResponse"},s="HTTPResponse class",i={unversionedId:"api/puppeteer.httpresponse",id:"version-19.7.1/api/puppeteer.httpresponse",title:"HTTPResponse class",description:"The HTTPResponse class represents responses which are received by the Page class.",source:"@site/versioned_docs/version-19.7.1/api/puppeteer.httpresponse.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse",permalink:"/api/puppeteer.httpresponse",draft:!1,tags:[],version:"19.7.1",frontMatter:{sidebar_label:"HTTPResponse"},sidebar:"api",previous:{title:"HTTPRequest.url",permalink:"/api/puppeteer.httprequest.url"},next:{title:"HTTPResponse.buffer",permalink:"/api/puppeteer.httpresponse.buffer"}},o={},u=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],d={toc:u};function m(e){var{components:t}=e,r=p(e,["components"]);return(0,a.kt)("wrapper",n({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"httpresponse-class"}),"HTTPResponse class"),(0,a.kt)("p",null,"The HTTPResponse class represents responses which are received by the ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.page"}),"Page")," class."),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"export declare class HTTPResponse\n")),(0,a.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPResponse")," class."),(0,a.kt)("h2",n({},{id:"methods"}),"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Method"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.buffer"}),"buffer()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.frame"}),"frame()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.fromcache"}),"fromCache()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.fromserviceworker"}),"fromServiceWorker()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.headers"}),"headers()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.json"}),"json()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.ok"}),"ok()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.remoteaddress"}),"remoteAddress()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.request"}),"request()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.securitydetails"}),"securityDetails()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.status"}),"status()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.statustext"}),"statusText()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.text"}),"text()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.timing"}),"timing()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.url"}),"url()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))))}m.isMDXComponent=!0}}]);