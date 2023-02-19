"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,y=d["".concat(o,".").concat(c)]||d[c]||s[c]||l;return n?r.createElement(y,p(p({ref:t},m),{},{components:n})):r.createElement(y,p({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>m});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={sidebar_label:"ElementHandle.type"},i="ElementHandle.type() method",o={unversionedId:"api/puppeteer.elementhandle.type",id:"api/puppeteer.elementhandle.type",title:"ElementHandle.type() method",description:"Focuses the element, and then sends a keydown, keypress/input, and keyup event for each character in the text.",source:"@site/../docs/api/puppeteer.elementhandle.type.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.type",permalink:"/next/api/puppeteer.elementhandle.type",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ElementHandle.type"},sidebar:"api",previous:{title:"ElementHandle.touchStart",permalink:"/next/api/puppeteer.elementhandle.touchstart"},next:{title:"ElementHandle.uploadFile",permalink:"/next/api/puppeteer.elementhandle.uploadfile"}},u={},m=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}],s={toc:m};function d(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"elementhandletype-method"}),"ElementHandle.type() method"),(0,r.kt)("p",null,"Focuses the element, and then sends a ",(0,r.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"input"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),(0,r.kt)("p",null,"To press a special key, like ",(0,r.kt)("inlineCode",{parentName:"p"},"Control")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",(0,r.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.elementhandle.press"}),"ElementHandle.press()"),"."),(0,r.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class ElementHandle {\n  type(\n    text: string,\n    options?: {\n      delay: number;\n    }\n  ): Promise<void>;\n}\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"{ delay: number; }"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("i",null,"(Optional)"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","void",">"),(0,r.kt)("h2",a({},{id:"example-1"}),"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"await elementHandle.type('Hello'); // Types instantly\nawait elementHandle.type('World', {delay: 100}); // Types slower, like a user\n")),(0,r.kt)("h2",a({},{id:"example-2"}),"Example 2"),(0,r.kt)("p",null,"An example of typing into a text field and then submitting the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const elementHandle = await page.$('input');\nawait elementHandle.type('some text');\nawait elementHandle.press('Enter');\n")))}d.isMDXComponent=!0}}]);