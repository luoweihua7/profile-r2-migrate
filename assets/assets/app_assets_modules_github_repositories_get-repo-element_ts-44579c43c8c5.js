"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_repositories_get-repo-element_ts"],{97416:(e,t,o)=>{o.d(t,{$S:()=>r,Fk:()=>a,sz:()=>i});var n=o(19963);function r(e,t,o){let r={hydroEventPayload:e,hydroEventHmac:t,visitorPayload:"",visitorHmac:"",hydroClientContext:o},a=document.querySelector("meta[name=visitor-payload]");a instanceof HTMLMetaElement&&(r.visitorPayload=a.content);let i=document.querySelector("meta[name=visitor-hmac]")||"";i instanceof HTMLMetaElement&&(r.visitorHmac=i.content),(0,n.b)(r,!0)}function a(e){r(e.getAttribute("data-hydro-view")||"",e.getAttribute("data-hydro-view-hmac")||"",e.getAttribute("data-hydro-client-context")||"")}function i(e){r(e.getAttribute("data-hydro-click-payload")||"",e.getAttribute("data-hydro-click-hmac")||"",e.getAttribute("data-hydro-client-context")||"")}},82162:(e,t,o)=>{function n(){return/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null}o.d(t,{X:()=>n}),(0,o(36071).N7)(".js-remove-unless-platform",function(e){!function(e){let t=(e.getAttribute("data-platforms")||"").split(","),o=n();return!!(o&&t.includes(o))}(e)&&e.remove()})},14604:(e,t,o)=>{o.d(t,{b:()=>GetRepoElement});var n=o(76006),r=o(82162),a=o(31248),i=o(97416);function s(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i}let{getItem:l,setItem:c}=(0,a.Z)("localStorage"),d="code-button-default-tab";let GetRepoElement=class GetRepoElement extends HTMLElement{showDownloadMessage(){let e=this.findPlatform();e&&this.showPlatform(e)}showCodespaces(){let e=this.findPlatform();e&&(this.showPlatform(e),this.loadAndUpdateContent())}showCodespaceSelector(){let e=this.findPlatform();e&&(this.showPlatform(e),this.codespaceSelector&&(this.codespaceSelector.hidden=!1))}showOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&(this.openOrCreateInCodespace.hidden=!1)}removeOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&this.openOrCreateInCodespace.remove()}refreshList(){this.shouldRefreshList&&(this.shouldRefreshList=!1,this.loadAndUpdateContent())}trackDelete(){this.shouldRefreshList=!0}hideSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!0),this.codespaceList&&(this.codespaceList.hidden=!1)}showSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!1),this.codespaceList&&(this.codespaceList.hidden=!0)}onDetailsToggle(e){for(let e of(this.modal.hidden=!1,this.platforms))e.hidden=!0;let t=e.target;if(t&&t.open){!this.hasForcedCodespaceTabDefault&&this.forceCodespaceTabDefault?(this.hasForcedCodespaceTabDefault=!0,this.selectDefaultTab(!0)):this.selectDefaultTab(!1);let e=this.copilotTip;e&&(0,i.Fk)(e)}}onDetailsKeydown(e){if("Escape"===e.key){this.modal.hidden=!0;let t=e.target;t?.closest("details")?.removeAttribute("open")}}showPlatform(e){for(let t of(this.modal.hidden=!0,this.platforms))t.hidden=t.getAttribute("data-platform")!==e}findPlatform(){return(0,r.X)()}refreshOnError(){window.location.reload()}pollForVscode(e){this.showPlatform("vscode");let t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}backToCodespacesFromVscodePolling(){this.loadAndUpdateContent(),this.showPlatform("codespaces")}localTabSelected(){c(d,"local")}cloudTabSelected(){c(d,"cloud"),this.codespaceList?.id==="lazyLoadedCodespacesList"&&this.loadAndUpdateContent()}copilotTabSelected(){c(d,"copilot")}selectDefaultTab(e){let t=e?"cloud":l(d);if(!t)return;let o=this.querySelector(`button[data-tab="${t}"`);o&&o.click()}loadAndUpdateContent(){this.codespaceList?.setAttribute("src",this.codespaceList.getAttribute("data-src"))}constructor(...e){super(...e),this.forceCodespaceTabDefault=!1,this.shouldRefreshList=!1,this.hasForcedCodespaceTabDefault=!1}};s([n.Lj],GetRepoElement.prototype,"forceCodespaceTabDefault",void 0),s([n.fA],GetRepoElement.prototype,"modal",void 0),s([n.fA],GetRepoElement.prototype,"codespaceForm",void 0),s([n.fA],GetRepoElement.prototype,"codespaceLoadingMenu",void 0),s([n.fA],GetRepoElement.prototype,"codespaceList",void 0),s([n.fA],GetRepoElement.prototype,"codespaceSelector",void 0),s([n.fA],GetRepoElement.prototype,"openOrCreateInCodespace",void 0),s([n.fA],GetRepoElement.prototype,"vscodePoller",void 0),s([n.GO],GetRepoElement.prototype,"platforms",void 0),s([n.fA],GetRepoElement.prototype,"copilotTip",void 0),GetRepoElement=s([n.Ih],GetRepoElement)},21951:(e,t,o)=>{let n;function r(){if(!n)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return n}function a(){return n?.locale??"en-US"}o.d(t,{Kd:()=>a,dU:()=>r}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{n=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},37083:(e,t,o)=>{o.d(t,{C:()=>a,x:()=>r});var n=o(930);let r=n.n4?.readyState==="interactive"||n.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),a=n.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.iG?.addEventListener("load",e)})},14203:(e,t,o)=>{o.d(t,{$m:()=>c,KM:()=>s,cr:()=>l});var n=o(15205),r=o(21951);function a(){return new Set((0,r.dU)().featureFlags.map(e=>e.toLowerCase()))}let i=o(930).W6?a:(0,n.Z)(a);function s(){return Array.from(i())}function l(e){return i().has(e.toLowerCase())}let c={isFeatureEnabled:l}},2992:(e,t,o)=>{o.d(t,{A:()=>s,k:()=>i});var n=o(15205),r=o(930);let a=(0,n.Z)(function(){return r.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),i=(0,n.Z)(function(){return"enterprise"===a()}),s="webpack"},31248:(e,t,o)=>{o.d(t,{Z:()=>i,_:()=>s});var n=o(930),r=o(19963);let a=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function i(e,t={throwQuotaErrorsOnSet:!1},o=n.iG,i=e=>e,s=e=>e){let l;try{if(!o)throw Error();l=o[e]||new a}catch{l=new a}let{throwQuotaErrorsOnSet:c}=t;function d(e){t.sendCacheStats&&(0,r.b)({incrementKey:e})}function u(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let o=l.getItem(e);if(!o)return null;let n=`${e}:expiry`,r=Number(l.getItem(n));if(r&&t>r)return u(e),u(n),d("SAFE_STORAGE_VALUE_EXPIRED"),null;return d("SAFE_STORAGE_VALUE_WITHIN_TTL"),i(o)}catch(e){return null}},setItem:function(e,o,n=new Date().getTime()){try{if(l.setItem(e,s(o)),t.ttl){let o=`${e}:expiry`,r=n+t.ttl;l.setItem(o,r.toString())}}catch(e){if(c&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:u,clear:l.clear,key:l.key,get length(){return l.length}}}function s(e){return i(e,{throwQuotaErrorsOnSet:!1},n.iG,JSON.parse,JSON.stringify)}},930:(e,t,o)=>{o.d(t,{Qg:()=>n.Qg,W6:()=>n.W6,cF:()=>n.cF,iG:()=>r.iG,n4:()=>r.n4,ssrSafeLocation:()=>r.jX,zu:()=>r.zu});var n=o(6577),r=o(3864)},3864:(e,t,o)=>{o.d(t,{iG:()=>r,jX:()=>i,n4:()=>n,zu:()=>a});let n="undefined"==typeof document?void 0:document,r="undefined"==typeof window?void 0:window,a="undefined"==typeof history?void 0:history,i="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},6577:(e,t,o)=>{o.d(t,{Qg:()=>a,W6:()=>r,cF:()=>i});var n=o(3864);let r=void 0===n.n4,a=!r;function i(){return!!r||!!n.n4.querySelector('react-app[data-ssr="true"]')}},19963:(e,t,o)=>{o.d(t,{B:()=>p,b:()=>c});var n=o(930),r=o(37083),a=o(2992),i=o(14203),s=o(46263);let l=[];function c(e,t=!1,o=.5){if(!0!==(0,i.cr)("BROWSER_STATS_DISABLED")){if(o<0||o>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!n.n4?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=p(),e.bundler=a.A,Math.random()<o&&l.push(e),t?h():u()}}let d=null,u=(0,s.P)(async function(){await r.C,null==d&&(d=window.requestIdleCallback(h))},5e3);function h(){if(d=null,!l.length)return;let e=n.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(e){for(let t of function(e){let t=[],o=e.map(e=>JSON.stringify(e));for(;o.length>0;)t.push(function(e){let t=e.shift(),o=[t],n=t.length;for(;e.length>0&&n<=65536;){let t=e[0].length;if(n+t<=65536){let r=e.shift();o.push(r),n+=t}else break}return o}(o));return t}(l))!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${t.join(",")}] }`);l=[]}}function p(){return!!n.n4?.head?.querySelector('meta[name="user-staff"]')?.content}n.n4?.addEventListener("pagehide",h),n.n4?.addEventListener("visibilitychange",h)}}]);
//# sourceMappingURL=app_assets_modules_github_repositories_get-repo-element_ts-2b1e158a8486.js.map