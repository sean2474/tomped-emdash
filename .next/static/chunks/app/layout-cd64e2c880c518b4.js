(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1228:function(e,t,n){Promise.resolve().then(n.t.bind(n,3015,23)),Promise.resolve().then(n.t.bind(n,3222,23)),Promise.resolve().then(n.t.bind(n,4712,23)),Promise.resolve().then(n.t.bind(n,2471,23)),Promise.resolve().then(n.t.bind(n,7640,23))},3453:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return l},default:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let l=r[e]||e.toLowerCase();"script"===t&&("async"===l||"defer"===l||"noModule"===l)?o[l]=!!n[e]:o.setAttribute(l,n[e])}let{children:l,dangerouslySetInnerHTML:a}=n;return a?o.innerHTML=a.__html||"":l&&(o.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):""),o}function l(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&i.push(n)}let f=t.map(o).filter(e=>{for(let t=0,n=i.length;t<n;t++){let n=i[t];if(l(n,e))return i.splice(t,1),!1}return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),f.forEach(e=>n.insertBefore(e,r)),r.content=(a-i.length+f.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8043:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return y},initScriptLoader:function(){return h},default:function(){return b}});let r=n(1024),o=n(8533),l=r._(n(4887)),a=o._(n(2265)),i=n(1330),u=n(3453),f=n(8043),c=new Map,s=new Set,d=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},_=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:l,children:a="",strategy:i="afterInteractive",onError:f,stylesheets:_}=e,y=n||t;if(y&&s.has(y))return;if(c.has(t)){s.add(y),c.get(t).then(r,f);return}let h=()=>{o&&o(),s.add(y)},m=document.createElement("script"),b=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),h()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){f&&f(e)});for(let[n,r]of(l?(m.innerHTML=l.__html||"",h()):a?(m.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",h()):t&&(m.src=t,c.set(t,b)),Object.entries(e))){if(void 0===r||d.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();m.setAttribute(e,r)}"worker"===i&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",i),_&&p(_),document.body.appendChild(m)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>_(e))}):_(e)}function h(e){e.forEach(y),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");s.add(t)})}()}function m(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:u="afterInteractive",onError:c,stylesheets:d,...p}=e,{updateScripts:y,scripts:h,getIsSsr:m,appDir:b,nonce:v}=(0,a.useContext)(i.HeadManagerContext),g=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;g.current||(o&&e&&s.has(e)&&o(),g.current=!0)},[o,t,n]);let E=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!E.current&&("afterInteractive"===u?_(e):"lazyOnload"===u&&("complete"===document.readyState?(0,f.requestIdleCallback)(()=>_(e)):window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>_(e))})),E.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(y?(h[u]=(h[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:c,...p}]),y(h)):m&&m()?s.add(t||n):m&&!m()&&_(e)),b){if(d&&d.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(l.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),a.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),a.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===u&&n&&l.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(m,"__nextScript",{value:!0});let b=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2471:function(){},7640:function(e){e.exports={footer:"footer_footer__KDdEv",footerTexts:"footer_footerTexts__Es8F8",footer1:"footer_footer1__8qRjc",footer2:"footer_footer2__jeHWR",footer3:"footer_footer3__1I1TS",footerText:"footer_footerText__hMIQC"}},4712:function(e){e.exports={style:{fontFamily:"'__Ubuntu_328e4e', '__Ubuntu_Fallback_328e4e'",fontWeight:400,fontStyle:"normal"},className:"__className_328e4e"}}},function(e){e.O(0,[222,971,596,744],function(){return e(e.s=1228)}),_N_E=e.O()}]);