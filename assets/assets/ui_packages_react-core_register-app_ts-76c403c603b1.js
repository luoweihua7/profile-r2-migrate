"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_react-core_register-app_ts"],{4034:(t,e,r)=>{r.d(e,{N:()=>i,x:()=>s});var n=r(930),a=r(14203),o=r(28907);function i(t,e){(0,a.cr)("primer_live_region_element")&&e?.element===void 0?(0,o.Nz)(t,{politeness:e?.assertive?"assertive":"polite"}):s((t.getAttribute("aria-label")||t.innerText||"").trim(),e)}function s(t,e){let{assertive:r,element:i}=e??{};(0,a.cr)("primer_live_region_element")&&void 0===i?(0,o.xQ)(t,{politeness:r?"assertive":"polite"}):function(t,e,r){let a=r??n.n4?.querySelector(e?"#js-global-screen-reader-notice-assertive":"#js-global-screen-reader-notice");a&&(a.textContent===t?a.textContent=`${t}\u00A0`:a.textContent=t)}(t,r,i)}},89953:(t,e,r)=>{r.d(e,{T:()=>o});var n=r(4034),a=r(930);function o(t){if(!a.n4)return;let e=a.n4.querySelector("title"),r=a.n4.createElement("title");r.textContent=t,e?e.textContent!==t&&(e.replaceWith(r),(0,n.x)(t)):(a.n4.head.appendChild(r),(0,n.x)(t))}},27295:(t,e,r)=>{let n;r.d(e,{YT:()=>h,qP:()=>p,yM:()=>f});var a=r(88149),o=r(64307),i=r(31248),s=r(19963);let{getItem:c}=(0,i.Z)("localStorage"),l="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let t=(0,a.n)("octolytics");delete t.baseContext,n=new o.R(t)}catch(t){}function d(t){let e=(0,a.n)("octolytics").baseContext||{};if(e)for(let[t,r]of(delete e.app_id,delete e.event_url,delete e.host,Object.entries(e)))t.startsWith(l)&&(e[t.replace(l,"")]=r,delete e[t]);let r=document.querySelector("meta[name=visitor-payload]");for(let[t,n]of(r&&Object.assign(e,JSON.parse(atob(r.content))),new URLSearchParams(window.location.search)))u.includes(t.toLowerCase())&&(e[t]=n);return e.staff=(0,s.B)().toString(),Object.assign(e,t)}function h(t){n?.sendPageView(d(t))}function p(t,e={}){let r=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,a=r?{service:r}:{};for(let[t,r]of Object.entries(e))null!=r&&(a[t]=`${r}`);n&&(d(a),n.sendEvent(t||"unknown",d(a)))}function f(t){return Object.fromEntries(Object.entries(t).map(([t,e])=>[t,JSON.stringify(e)]))}},92531:(t,e,r)=>{var n;r.d(e,{x:()=>n}),function(t){t.FETCH_THEN_TRANSITION="fetch-then-transition",t.TRANSITION_WHILE_FETCHING="transition-while-fetch",t.TRANSITION_WITHOUT_FETCH="transition-without-fetch"}(n||(n={}))},37428:(t,e,r)=>{r.d(e,{e:()=>DeferredRegistry});let DeferredRegistry=class DeferredRegistry{register(t,e){let r=this.registrationEntries[t];r?r.resolve?.(e):this.registrationEntries[t]={promise:Promise.resolve(e)}}getRegistration(t){var e;return(e=this.registrationEntries)[t]||(e[t]=new n),this.registrationEntries[t].promise}constructor(){this.registrationEntries={}}};let n=class Deferred{constructor(){this.promise=new Promise(t=>{this.resolve=t})}}},86423:(t,e,r)=>{r.d(e,{X:()=>o});var n=r(14203),a=r(67294);function o(t){return(0,n.cr)("react_start_transition_for_navigations")?(0,a.startTransition)(t):t()}},63390:(t,e,r)=>{r.d(e,{g:()=>U});let n=new(r(37428)).e;async function a(t){return(await n.getRegistration(t))()}var o=r(85893),i=r(76006),s=r(56163),c=r(930),l=r(67294),u=r(12599),d=r(92531),h=r(86423),p=r(89953);let f=(t,e)=>null!==t&&null!==e&&t.pathname===e.pathname&&t.search===e.search&&!!e.hash,m=t=>v(404===t.httpStatus?"404 Page not found":500===t.httpStatus?"500 Internal server error":t.httpStatus?`Error ${t.httpStatus}`:"Error");function v(t){return document.body.classList.contains("logged-out")?`${t} \xb7 GitHub`:t}let E=class Navigator{setAppNavigationStateCallback(t){this.appNavigationStateCallback=t}update(t){Object.assign(this.state,t);let e=this.getAppNavigationState();this.appNavigationStateCallback?.(e)}getAppNavigationState(){let{location:t,error:e,navigateOnError:r,routeStateMap:n,appPayload:a,pendingNavigation:o}=this.state;return{location:t,error:e,navigateOnError:r,routeStateMap:n,appPayload:a,isLoading:!!o}}async handleHistoryUpdate(t){if("POP"!==t.action||history.state?.turboCount===this.state.turboCount){if(this.isHashNavigation(t)){this.navigateWithCurrentPayload(t);return}if("POP"!==t.action&&(0,s.LD)("react"),void 0!==this.state.routeStateMap[t.location.key])this.navigateFromHistory(t);else{let e=this.matchLocation(t.location);if(!e)throw Error("handleHistoryUpdate should only be called for matching routes");if(e.route.transitionType===d.x.TRANSITION_WHILE_FETCHING&&this.navigateWithoutPayload(t),e.route.transitionType===d.x.TRANSITION_WITHOUT_FETCH){this.navigateWithoutPayload(t);return}this.enterLoadingState(t);let r=await e.route.coreLoader({location:t.location,pathParams:e.params});if(t.location!==this.state.pendingNavigation?.update.location)return;if(history.state&&"POP"!==t.action){let{turbo:t,...e}=history.state;history.replaceState({...e,skipTurbo:!0},"",location.href)}switch(r.type){case"loaded":this.leaveLoadingStateWithRouteData(t,r.data,r.title);break;case"error":this.leaveLoadingStateWithError(t,r.error,!1);break;case"redirect":window.location.replace(r.url+location.hash);break;case"route-handled-error":this.leaveLoadingStateWithError(t,r.error,!0);break;default:throw Error(`Unexpected loader result type: ${r.type}`)}}}}matchLocation(t){return u.fp(this.routes,t.pathname)?.[0]}isHashNavigation(t){return f(this.state.location,t.location)}navigateFromHistory(t){this.update({location:t.location,pendingNavigation:null,error:null})}enterLoadingState(t){this.update({pendingNavigation:{update:t}})}leaveLoadingStateWithError(t,e,r){this.update({location:t.location,error:e,pendingNavigation:null,navigateOnError:r})}navigateWithoutPayload(t){this.update({location:t.location,error:null})}navigateWithCurrentPayload(t){let e=this.state.location.key,r=e+t.location.hash,n={...t.location,key:r},a={...this.state.routeStateMap,[r]:this.state.routeStateMap[e]};this.update({...t,location:n,routeStateMap:a,error:null})}leaveLoadingStateWithRouteData(t,e,r){this.update({location:t.location,pendingNavigation:null,routeStateMap:e?{...this.state.routeStateMap,[t.location.key]:{type:"loaded",data:e,title:r}}:this.state.routeStateMap,error:null})}getRoutesText(){return this.routes.map(t=>t.path).join(", ")}constructor(t,e,r,n){this.routes=n;let a=this.matchLocation(t);if(!a)throw Error(`No route found for initial location: ${t.pathname} in [${this.getRoutesText()}]`);let{data:o,title:i}=a.route.loadFromEmbeddedData({embeddedData:e,location:t,pathParams:a.params});this.state={location:t,routeStateMap:{[t.key]:{type:"loaded",data:o,title:i}},appPayload:r,pendingNavigation:null,error:null,navigateOnError:!1,turboCount:c.zu?.state?.turboCount}}};var g=r(25469),y=r(89250),S=r(39795),R=r(28234),b=r(63817),N=r(19963),w=r(27295),T=r(14220);let x=(t,e,r,n)=>{(0,l.useEffect)(()=>{e||(t.key,(0,w.YT)({react_app:n}))},[n,t.key,e]);let a=(0,l.useRef)(void 0);(0,l.useEffect)(()=>{e||void 0!==a.current&&a.current===t.key||((0,T.sj)()?A(r):C(r),a.current=t.key)},[t.key,e,r])},A=t=>{t?(0,s.r_)():((0,s.TL)(),(0,s.BT)())},C=t=>{if(t)return;let e=function(){window.performance.measure(_);let t=window.performance.getEntriesByName(_).pop();return t?t.duration:null}();e&&(0,N.b)({requestUrl:window.location.href,distributionKey:"REACT_NAV_DURATION",distributionValue:Math.round(e),distributionTags:["REACT_NAV_HARD"]})},_="react_nav_duration";var j=r(52698);let L=new Map,k=!1;async function I(){let{session:t}=await r.e("vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js").then(r.bind(r,67852));window.addEventListener("popstate",()=>{let{scrollPosition:e}=t.history.getRestorationDataForIdentifier(t.history.restorationIdentifier)||{};e&&L.set(window.location.href,e)})}let O=c.iG?function(){(0,g.b)(()=>{let t=window.location.href,e=L.get(t);if(!e)return;let r=setTimeout(()=>{window.scrollTo(e.x,e.y)},0);return()=>{clearTimeout(r)}})}:j.Z;"function"==typeof afterEach&&afterEach(()=>{L.clear(),k=!1});var P=r(48827),D=r(10833);function W({appName:t,initialPath:e,embeddedData:r,routes:n,App:a,wasServerRendered:i,ssrError:s}){let c=(0,l.useRef)(),u=globalThis.window,{pathname:d,search:N,hash:w}=new URL(`${e}${u?.location.hash??""}`,u?.location.href??"https://github.com");c.current||(c.current=(0,P.l)({window:u,v5Compat:!0}));let T=c.current,{key:A,state:C}=T.location,[{location:_,error:j,routeStateMap:L,appPayload:k,navigateOnError:I,isLoading:W},{handleHistoryUpdate:H}]=function({initialLocation:t,embeddedData:e,routes:r}){let[n]=(0,l.useState)(()=>{let{appPayload:n,...a}=e;return new E(t,{...a,enabled_features:n?.enabled_features?n.enabled_features:{}},n,r)}),[a,o]=(0,l.useState)(()=>n.getAppNavigationState()),i=(0,l.useRef)(!1);return i.current||(n.setAppNavigationStateCallback(o),i.current=!0),[a,{handleHistoryUpdate:(0,l.useCallback)(t=>{(0,h.X)(()=>{n.handleHistoryUpdate(t)})},[n])}]}({initialLocation:{pathname:d,search:N,hash:w,key:A,state:C},appName:t,embeddedData:r,routes:n});return!function(t,e,r){let n=(0,l.useRef)(null);(0,l.useEffect)(()=>{if(n.current||(n.current=r),!f(n.current,r)&&(e||t)){if(e){let t=m(e);(0,p.T)(t)}else t?.type==="loaded"&&t.title&&(0,p.T)(v(t.title))}n.current?.key!==r.key&&(n.current=r)},[e,t,r])}(L[_.key],j,_),!function(t,e){let r=(0,l.useRef)(void 0);(0,l.useEffect)(()=>{let n=e.pathname+e.search;if(void 0===r.current)r.current=n;else if(r.current!==n&&!t){let t=document.querySelector("[data-react-autofocus]");!t&&(t=document.querySelector("react-app h1"))&&!t.hasAttribute("tabindex")&&t.setAttribute("tabindex","-1"),t?.focus(),r.current=n}},[t,e.pathname,e.search])}(W,_),x(_,W,j,t),O(),(0,g.b)(()=>T.listen(H),[T,H]),(0,o.jsx)(R.R,{appName:t,wasServerRendered:i,children:(0,o.jsx)(S.S,{children:(0,o.jsx)(D.W,{App:a,appPayload:k,error:j,history:T,location:_,navigateOnError:I,Router:y.F0,routes:n,routeStateMap:L,children:(0,o.jsx)(b.P,{ssrError:s})})})})}c.iG&&(k||(I(),k=!0));try{W.displayName||(W.displayName="ClientEntry")}catch{}var H=r(338);let ReactAppElement=class ReactAppElement extends H.S{async getReactNode(t){let e=this.name,r=this.getAttribute("initial-path"),{App:n,routes:i}=await a(e);if(this.isLazy){let e=await fetch(r,{mode:"no-cors",cache:"no-cache",credentials:"include"}),{payload:n}=await e.json();t.payload=n}return(0,o.jsx)(W,{appName:e,initialPath:r,embeddedData:t,routes:i,App:n,wasServerRendered:this.hasSSRContent,ssrError:this.ssrError})}get isLazy(){return"true"===this.getAttribute("data-lazy")}constructor(...t){super(...t),this.nameAttribute="app-name"}};function U(t,e){n.register(t,e)}ReactAppElement=function(t,e,r,n){var a,o=arguments.length,i=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,r,i):a(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i}([i.Ih],ReactAppElement)},27286:(t,e,r)=>{r.d(e,{A:()=>n});let n=(0,r(67294).createContext)({})},92869:(t,e,r)=>{r.d(e,{E:()=>a,M:()=>o});var n=r(67294);let a=(0,n.createContext)(void 0);function o(){return(0,n.useContext)(a)}},62755:(t,e,r)=>{r.d(e,{V:()=>i});var n=r(67294),a=r(89250),o=r(27286);function i(){return(0,n.useContext)(o.A)[(0,a.TH)().key]}},69445:(t,e,r)=>{r.d(e,{T:()=>a});var n=r(62755);function a(){let t=(0,n.V)(),e=t&&"loaded"===t.type?t.data:void 0;return e?.payload}},68453:(t,e,r)=>{r.d(e,{Z:()=>s});let{getItem:n,setItem:a,removeItem:o}=(0,r(31248).Z)("localStorage"),i="REACT_PROFILING_ENABLED",s={enable:()=>a(i,"true"),disable:()=>o(i),isEnabled:()=>!!n(i)}},69149:(t,e,r)=>{r.d(e,{LS:()=>a,cl:()=>o,rV:()=>n});let{getItem:n,setItem:a,removeItem:o}=(0,r(31248).Z)("sessionStorage")},29669:(t,e,r)=>{r.d(e,{$g:()=>SoftNavSuccessEvent,OV:()=>SoftNavStartEvent,QW:()=>SoftNavErrorEvent,Xr:()=>SoftNavEndEvent});var n=r(21118);let a=class SoftNavEvent extends Event{constructor(t,e){super(e),this.mechanism=t}};let SoftNavStartEvent=class SoftNavStartEvent extends a{constructor(t){super(t,n.Q.START)}};let SoftNavSuccessEvent=class SoftNavSuccessEvent extends a{constructor(t,e){super(t,n.Q.SUCCESS),this.visitCount=e}};let SoftNavErrorEvent=class SoftNavErrorEvent extends a{constructor(t,e){super(t,n.Q.ERROR),this.error=e}};let SoftNavEndEvent=class SoftNavEndEvent extends a{constructor(t){super(t,n.Q.END)}}},56163:(t,e,r)=>{r.d(e,{BT:()=>u,FP:()=>h,LD:()=>l,TL:()=>p,Yl:()=>c,r_:()=>d,u5:()=>f});var n=r(21118),a=r(29669),o=r(15815),i=r(14220);let s=0;function c(){s=0,document.dispatchEvent(new Event(n.Q.INITIAL)),(0,i.XL)()}function l(t){(0,i.sj)()||(document.dispatchEvent(new Event(n.Q.PROGRESS_BAR.START)),document.dispatchEvent(new a.OV(t)),(0,i.U6)(t),(0,i.J$)(),(0,i.Nt)(),(0,o.hY)())}function u(t={}){v(t)&&(s+=1,document.dispatchEvent(new a.$g((0,i.Gj)(),s)),h(t))}function d(t={}){if(!v(t))return;s=0;let e=(0,i.Wl)()||i.jN;document.dispatchEvent(new a.QW((0,i.Gj)(),e)),m(),(0,o.t3)(e),(0,i.XL)()}function h(t={}){if(!v(t))return;let e=(0,i.Gj)();m(),document.dispatchEvent(new a.Xr(e)),(0,i.pS)(),(0,i.vu)(e)}function p(t={}){v(t)&&((0,o.mr)(),document.dispatchEvent(new Event(n.Q.RENDER)))}function f(){document.dispatchEvent(new Event(n.Q.FRAME_UPDATE))}function m(){document.dispatchEvent(new Event(n.Q.PROGRESS_BAR.END))}function v({skipIfGoingToReactApp:t,allowedMechanisms:e=[]}={}){return(0,i.sj)()&&(0===e.length||e.includes((0,i.Gj)()))&&(!t||!(0,i.Nb)())}},21118:(t,e,r)=>{r.d(e,{Q:()=>n});let n=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}})},15815:(t,e,r)=>{r.d(e,{CF:()=>i,aq:()=>o,hY:()=>s,mr:()=>l,t3:()=>c});var n=r(19963),a=r(14220);let o="stats:soft-nav-duration",i={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME",ui:"UI",hard:"HARD"};function s(){performance.clearResourceTimings(),performance.mark(o)}function c(t){(0,n.b)({turboFailureReason:t,turboStartUrl:(0,a.wP)(),turboEndUrl:window.location.href})}function l(){let t=function(){if(0===performance.getEntriesByName(o).length)return null;performance.measure(o,o);let t=performance.getEntriesByName(o).pop();return t?t.duration:null}();if(!t)return;let e=i[(0,a.Gj)()],r=Math.round(t);e===i.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:r}})),(0,n.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:e,destination:(0,a.Nb)()||"rails",duration:r,initiator:(0,a.CI)()||"rails"}})}},14220:(t,e,r)=>{r.d(e,{Ak:()=>g,CI:()=>b,Gj:()=>m,J$:()=>R,Nb:()=>N,Nt:()=>y,OE:()=>v,U6:()=>h,Wl:()=>E,XL:()=>d,jN:()=>a,pS:()=>p,sj:()=>f,vu:()=>w,wG:()=>T,wP:()=>S});var n=r(69149);let a="reload",o="soft-nav:fail",i="soft-nav:fail-referrer",s="soft-nav:referrer",c="soft-nav:marker",l="soft-nav:react-app-name",u="soft-nav:latest-mechanism";function d(){(0,n.LS)(c,"0"),(0,n.cl)(s),(0,n.cl)(o),(0,n.cl)(i),(0,n.cl)(l),(0,n.cl)(u)}function h(t){(0,n.LS)(c,t)}function p(){(0,n.LS)(c,"0")}function f(){let t=(0,n.rV)(c);return t&&"0"!==t}function m(){return(0,n.rV)(c)}function v(){return!!E()}function E(){return(0,n.rV)(o)}function g(t){(0,n.LS)(o,t||a),(0,n.LS)(i,window.location.href)}function y(){(0,n.LS)(s,window.location.href)}function S(){return(0,n.rV)(s)||document.referrer}function R(){let t=N();t?(0,n.LS)(l,t):(0,n.cl)(l)}function b(){return(0,n.rV)(l)}function N(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}function w(t){(0,n.LS)(u,t)}function T(){return(0,n.rV)(u)}},25469:(t,e,r)=>{r.d(e,{b:()=>o});var n=r(930),a=r(67294);let o=void 0!==n.iG?.document?.createElement?a.useLayoutEffect:a.useEffect},10833:(t,e,r)=>{r.d(e,{W:()=>f,h:()=>p});var n=r(85893),a=r(74747),o=r(89250),i=r(67294),s=r(21118),c=r(92869),l=r(69445);function u({App:t}){return!function(){let t=(0,l.T)(),e=(0,c.M)();(0,i.useEffect)(()=>{function r(){document.dispatchEvent(new CustomEvent("soft-nav:payload",{detail:{payload:t,appPayload:e}}))}return document.addEventListener(s.Q.INITIAL,r),()=>{document.removeEventListener(s.Q.INITIAL,r)}},[]),(0,i.useEffect)(()=>{document.dispatchEvent(new CustomEvent("soft-nav:payload",{detail:{payload:t,appPayload:e}}))},[e,t])}(),t?(0,n.jsx)(t,{children:(0,n.jsx)(o.j3,{})}):(0,n.jsx)(o.j3,{})}try{u.displayName||(u.displayName="AppWrapper")}catch{}var d=r(81153),h=r(27286);let p=(0,i.createContext)(null);function f({App:t,appPayload:e,children:r,error:o,history:i,location:s,navigateOnError:l,Router:u,routes:f,routeStateMap:v}){return(0,n.jsx)(a.i,{routes:f,history:i,children:o&&!l?(0,n.jsx)(d.m,{...o}):(0,n.jsx)(c.E.Provider,{value:e,children:(0,n.jsx)(p.Provider,{value:o,children:(0,n.jsx)(h.A.Provider,{value:v,children:(0,n.jsxs)(u,{location:s,navigator:i,children:[(0,n.jsx)(m,{routes:f,App:t}),r]})})})})})}function m({App:t,routes:e}){return(0,o.V$)([{element:(0,n.jsx)(u,{App:t}),children:e}])}try{p.displayName||(p.displayName="NavigationErrorContext")}catch{}try{f.displayName||(f.displayName="AppRouter")}catch{}try{m.displayName||(m.displayName="AppRoutes")}catch{}},39795:(t,e,r)=>{r.d(e,{S:()=>ErrorBoundary});var n=r(85893),a=r(81153),o=r(67294);let ErrorBoundary=class ErrorBoundary extends o.Component{static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t){"function"==typeof this.props.onError?this.props.onError(t):setTimeout(()=>{throw t})}render(){return this.state.error?void 0===this.props.fallback?(0,n.jsx)(a.m,{type:"httpError"}):this.props.fallback:this.props.children}constructor(t){super(t),this.state={error:null}}}},81153:(t,e,r)=>{r.d(e,{m:()=>s});var n=r(85893),a=r(75308),o=r(42483);let i={404:"Didn\u2019t find anything here!",500:"Looks like something went wrong!"};function s({httpStatus:t,type:e}){let r="fetchError"===e?"Looks like network is down!":i[t||500];return(0,n.jsxs)(a.Z,{as:"h1",tabIndex:-1,sx:{display:"flex",flexDirection:"column",minWidth:"100%",minHeight:"100%",alignItems:"center",justifyContent:"center"},children:["Error",t?(0,n.jsx)(o.Z,{sx:{fontSize:"144px",fontWeight:"bold",lineHeight:1},children:t}):null,(0,n.jsx)(o.Z,{sx:{fontSize:4,pt:2},children:r})]})}try{s.displayName||(s.displayName="ErrorPage")}catch{}},338:(t,e,r)=>{r.d(e,{S:()=>ReactBaseElement});var n=r(85893),a=r(76006),o=r(20745),i=r(67294),s=r(68453),c=r(86469),l=r(19963);function u(t,e,r,n){var a,o=arguments.length,i=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,r,i):a(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i}let d=RegExp("Minified React error #(?<invariant>\\d+)");let ReactBaseElement=class ReactBaseElement extends HTMLElement{get name(){return this.getAttribute(this.nameAttribute)}get embeddedDataText(){let t=this.embeddedData?.textContent;if(!t)throw Error(`No embedded data provided for react element ${this.name}`);return t}get hasSSRContent(){return"true"===this.getAttribute("data-ssr")}connectedCallback(){this.renderReact()}disconnectedCallback(){this.root?.unmount(),this.root=void 0}async renderReact(){if(!this.reactRoot)throw Error("No react root provided");let t={createRoot:o.s,hydrateRoot:o.a};s.Z.isEnabled()&&(t=await this.getReactDomWithProfiling());let e=JSON.parse(this.embeddedDataText),r=this.ssrError?.textContent,a=await this.getReactNode(e),c=(0,n.jsx)(i.StrictMode,{children:a});if(r&&this.logSSRError(r),this.hasSSRContent){let e=this.querySelector('style[data-styled="true"]');e&&document.head.appendChild(e),this.root=t.hydrateRoot(this.reactRoot,c,{onRecoverableError:t=>{if(!(t instanceof Error))return;let e=d.exec(t.message),r=String(e?.groups?.invariant);(0,l.b)({incrementKey:"REACT_HYDRATION_ERROR",incrementTags:{appName:this.name,invariant:r}})}}),e&&requestIdleCallback(()=>{e.parentElement?.removeChild(e)})}else this.root=t.createRoot(this.reactRoot),this.root.render(c);this.classList.add("loaded")}getReactDomWithProfiling(){return r.e("react-profiling").then(r.t.bind(r,62518,19))}logSSRError(t){if(c.t[t])return console.error("SSR failed with an expected error:",c.t[t]);try{let e=JSON.parse(t),r=function(t){if(!t.stacktrace)return"";let e="\n ";return t.stacktrace.map(t=>{let{function:r,filename:n,lineno:a,colno:o}=t,i=`${e} at ${r} (${n}:${a}:${o})`;return e=" ",i}).join("\n")}(e);console.error("Error During Alloy SSR:",`${e.type}: ${e.value}
`,e,r)}catch{console.error("Error During Alloy SSR:",t,"unable to parse as json")}}};u([a.fA],ReactBaseElement.prototype,"embeddedData",void 0),u([a.fA],ReactBaseElement.prototype,"ssrError",void 0),u([a.fA],ReactBaseElement.prototype,"reactRoot",void 0);try{d.displayName||(d.displayName="REACT_INVARIANT_ERROR_REGEX")}catch{}}}]);
//# sourceMappingURL=ui_packages_react-core_register-app_ts-cda4d1b0fc37.js.map