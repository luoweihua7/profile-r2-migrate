"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_code-view-shared_hooks_use-canonical-object_ts-ui_packages_code-view-shared_hooks-6c8816"],{41968:(e,t,o)=>{o.d(t,{bx:()=>l,ln:()=>u,tW:()=>s});var i=o(30236),r=o(5666);let n={cursorNavigationHopWordLeft:{hotkey:"Alt+ArrowLeft,Ctrl+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["ArrowLeft"],modifierRequired:!0},cursorNavigationHopWordRight:{hotkey:"Alt+ArrowRight,Ctrl+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["ArrowRight"],modifierRequired:!0},cursorNavigationTopOfPage:{hotkey:"Meta+ArrowUp",useWhileBlobFocused:!0,noModifierHotkey:["ArrowUp"],modifierRequired:!0},cursorNavigationBottomOfPage:{hotkey:"Meta+ArrowDown",useWhileBlobFocused:!0,noModifierHotkey:["ArrowDown"],modifierRequired:!0},cursorNavigationEnd:{hotkey:"End,Meta+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["End"]},cursorNavigationHome:{hotkey:"Home,Meta+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["Home"]},cursorNavigationPageUp:{hotkey:"PageUp",useWhileBlobFocused:!0,noModifierHotkey:["PageUp"]},cursorNavigationPageDown:{hotkey:"PageDown",useWhileBlobFocused:!0,noModifierHotkey:["PageDown"]},cursorNavigationArrowDown:{hotkey:"ArrowDown",useWhileBlobFocused:!0,noModifierHotkey:["ArrowDown"]},cursorNavigationArrowUp:{hotkey:"ArrowUp",useWhileBlobFocused:!0,noModifierHotkey:["ArrowUp"]},cursorNavigationArrowLeft:{hotkey:"ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["ArrowLeft"]},cursorNavigationArrowRight:{hotkey:"ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["ArrowRight"]},cursorNavigationShiftHopWordLeft:{hotkey:"Alt+Shift+ArrowLeft,Ctrl+Shift+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["ArrowLeft"],modifierRequired:!0},cursorNavigationShiftHopWordRight:{hotkey:"Alt+Shift+ArrowRight,Ctrl+Shift+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["ArrowRight"],modifierRequired:!0},cursorNavigationShiftTopOfPage:{hotkey:"Meta+Shift+ArrowUp",useWhileBlobFocused:!0,noModifierHotkey:["ArrowUp"],modifierRequired:!0},cursorNavigationShiftBottomOfPage:{hotkey:"Meta+Shift+ArrowDown",useWhileBlobFocused:!0,noModifierHotkey:["ArrowDown"],modifierRequired:!0},cursorNavigationShiftEnd:{hotkey:"Shift+End,Meta+Shift+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["End"],modifierRequired:!0},cursorNavigationShiftHome:{hotkey:"Shift+Home,Meta+Shift+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["Home"],modifierRequired:!0},cursorNavigationShiftPageUp:{hotkey:"Shift+PageUp",useWhileBlobFocused:!0,noModifierHotkey:["PageUp"],modifierRequired:!0},cursorNavigationShiftPageDown:{hotkey:"Shift+PageDown",useWhileBlobFocused:!0,noModifierHotkey:["PageDown"],modifierRequired:!0},cursorNavigationShiftArrowDown:{hotkey:"Shift+ArrowDown",useWhileBlobFocused:!0,noModifierHotkey:["ArrowDown"],modifierRequired:!0},cursorNavigationShiftArrowUp:{hotkey:"Shift+ArrowUp",useWhileBlobFocused:!0,noModifierHotkey:["ArrowUp"],modifierRequired:!0},cursorNavigationShiftArrowLeft:{hotkey:"Shift+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["ArrowLeft"],modifierRequired:!0},cursorNavigationShiftArrowRight:{hotkey:"Shift+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["ArrowRight"],modifierRequired:!0},cursorNavigationHighlightLine:{text:"J",hotkey:"Shift+J",useWhileBlobFocused:!0,noModifierHotkey:["J"],modifierRequired:!0},cursorNavigationGoLineUp:{hotkey:"Ctrl+p",useWhileBlobFocused:!0,noModifierHotkey:["p"],modifierRequired:!0},cursorNavigationOpenHelpDialog:{hotkey:"Alt+F1,Control+Alt+\u02D9,Control+Alt+h",useWhileBlobFocused:!0,noModifierHotkey:["F1","h","\u02D9"],modifierRequired:!0},cursorNavigationGoLineDown:{hotkey:"Ctrl+n",useWhileBlobFocused:!0,noModifierHotkey:["n"],modifierRequired:!0},cursorNavigationEnter:{text:"\u2318 Enter",hotkey:"Meta+Enter",useWhileBlobFocused:!0,noModifierHotkey:["Enter"],modifierRequired:!0},cursorNavigationSpace:{hotkey:" ",useWhileBlobFocused:!0,noModifierHotkey:[" "],modifierRequired:!1},cursorNavigationShiftSpace:{hotkey:"Shift+ ",useWhileBlobFocused:!0,noModifierHotkey:[" "],modifierRequired:!0},expandAndFocusLineContextMenu:{text:"Shift Alt C",hotkey:"Alt+Shift+C,Alt+Shift+\xc7",useWhileBlobFocused:!0,noModifierHotkey:["C"],modifierRequired:!0},copyFilePathShortcut:{text:"\u2318 shift .",hotkey:"Meta+Shift+>",useWhileBlobFocused:!0,noModifierHotkey:["."],modifierRequired:!0},copyPermalinkShortcut:{text:"\u2318 shift ,",hotkey:"Meta+Shift+<",useWhileBlobFocused:!0,noModifierHotkey:[","],modifierRequired:!0},copyRawContentShortcut:{text:"\u2318 shift c",hotkey:"Meta+Shift+C",useWhileBlobFocused:!0,noModifierHotkey:["c"],modifierRequired:!0},downloadRawContentShortcut:{text:"\u2318 shift s",hotkey:"Meta+Shift+S",useWhileBlobFocused:!0,noModifierHotkey:["s"],modifierRequired:!0},editFileShortcut:{hotkey:"e,Shift+E",useWhileBlobFocused:!0,noModifierHotkey:["e","E"]},goToLineShortcut:{text:"l",hotkey:"l,Shift+L",ariaKeyShortcuts:"l",useWhileBlobFocused:!0,noModifierHotkey:["l","L"]},alternativeGoToLineShortcut:{hotkey:"Mod+Alt+g",ariaKeyShortcuts:"Mod+Alt+g",useWhileBlobFocused:!0,noModifierHotkey:["g","G"]},findInFileShortcut:{hotkey:"Meta+f, F3",text:"\u2318 f",ariaKeyShortcuts:"Meta+F",useWhileBlobFocused:!0,noModifierHotkey:["f","F3"],modifierRequired:!0},findFilesShortcut:{hotkey:"t,Shift+T",useWhileBlobFocused:!0,noModifierHotkey:["t","T"]},findSelectionShortcut:{hotkey:"Meta+e",useWhileBlobFocused:!0,noModifierHotkey:["e"],modifierRequired:!0},findNextShortcut:{hotkey:"Mod+g"},findPrevShortcut:{hotkey:"Mod+Shift+G"},openWithGitHubDevShortcut:{hotkey:"., Meta+Shift+/",useWhileBlobFocused:!0,noModifierHotkey:["."]},openWithGitHubDevInNewWindowShortcut:{hotkey:"Shift+.,Shift+>,>",useWhileBlobFocused:!0,noModifierHotkey:[">"]},permalinkShortcut:{hotkey:"y,Shift+Y",useWhileBlobFocused:!0,noModifierHotkey:["y","Y"]},searchShortcut:{hotkey:"/",useWhileBlobFocused:!0,noModifierHotkey:["/"]},selectAllShortcut:{hotkey:"Meta+a",useWhileBlobFocused:!0,noModifierHotkey:["a"],modifierRequired:!0},selectEditTabShortcut:{hotkey:"Mod+Shift+P"},submitCommitDialogShortcut:{hotkey:"Mod+Enter"},refSelectorShortcut:{hotkey:"w",text:"w",useWhileBlobFocused:!0,noModifierHotkey:["w"]},escapeRightClickMenu:{hotkey:"Escape",useWhileBlobFocused:!0,noModifierHotkey:["Escape"]},toggleFocusedPaneShortcut:{hotkey:"Meta+F6,Meta+Shift+F6",useWhileBlobFocused:!0,noModifierHotkey:["F6"],modifierRequired:!0},toggleSymbolsShortcut:{hotkey:"Meta+i",useWhileBlobFocused:!0,noModifierHotkey:["i"],modifierRequired:!0},toggleTreeShortcut:{hotkey:"Meta+b",useWhileBlobFocused:!0,noModifierHotkey:["b"],modifierRequired:!0},viewBlameShortcut:{hotkey:"b,Shift+B,Meta+/ Meta+b",useWhileBlobFocused:!0,noModifierHotkey:["b"]},viewCodeShortcut:{hotkey:"Meta+/ Meta+c",useWhileBlobFocused:!0,modifierRequired:!0},viewPreviewShortcut:{hotkey:"Meta+/ Meta+p"},viewRawContentShortcut:{text:"\u2318 / \u2318 r",hotkey:"Meta+/ Meta+r",useWhileBlobFocused:!0,noModifierHotkey:["r"],modifierRequired:!0},findSymbolShortcut:{hotkey:"r,Shift+R",useWhileBlobFocused:!0,noModifierHotkey:["r","R"],modifierRequired:!1}},a=new Map;function l(){let e=(0,r.f)(["mac"]),[t]=(0,i.D)(()=>!1,!0,[]),o=0;if(e?o=1:t||(o=2),!a.has(o)){var l,u;let i=n;e||t||(i=Object.keys(l=i).reduce((e,t)=>{let o=l[t];return e[t]={hotkey:o.hotkey?.replace(/Meta/g,"Control"),text:o.text?.replace(/⌘/g,"Ctrl").replace(/⇧/g,"Shift"),ariaKeyShortcuts:o.ariaKeyShortcuts?.replace(/Meta/g,"Control"),useWhileBlobFocused:o.useWhileBlobFocused,modifierRequired:o.modifierRequired,noModifierHotkey:o.noModifierHotkey},e},{})),t&&(i=Object.keys(u=i).reduce((e,t)=>{let o=u[t];return e[t]={hotkey:void 0,text:o.text?.replace(/⌘/g,"Ctrl").replace(/⇧/g,"Shift"),ariaKeyShortcuts:o.ariaKeyShortcuts?.replace(/Meta/g,"Control"),useWhileBlobFocused:o.useWhileBlobFocused,modifierRequired:o.modifierRequired,noModifierHotkey:o.noModifierHotkey},e},{})),a.set(o,i)}return a.get(o)}function u(){let e=l();return Object.keys(e).reduce((t,o)=>{let i=e[o];if(i.useWhileBlobFocused&&i.noModifierHotkey&&i.modifierRequired)for(let e of i.noModifierHotkey)t.includes(e)||t.push(e);return t},[])}function s(){let e=l();return Object.keys(e).reduce((t,o)=>{let i=e[o];if(i.useWhileBlobFocused&&i.noModifierHotkey&&!i.modifierRequired)for(let e of i.noModifierHotkey)t.includes(e)||t.push(e);return t},[])}},75696:(e,t,o)=>{o.d(t,{f:()=>r});var i=o(67294);function r(e){let t=(0,i.useRef)([]);for(let o of t.current)if(e===o||function e(t,o){if(t===o)return!0;if("object"!=typeof t||typeof t!=typeof o||!t||!o)return!1;if(Array.isArray(t)){if(!Array.isArray(o)||t.length!==o.length)return!1;for(let i=0;i<t.length;i++)if(!e(t[i],o[i]))return!1;return!0}let i=Object.keys(t),r=Object.keys(o);if(i.length!==r.length)return!1;for(let r of i)if(!e(t[r],o[r]))return!1;return!0}(o,e))return o;return t.current.unshift(e),t.current.length>5&&t.current.pop(),e}},37227:(e,t,o)=>{o.d(t,{a:()=>d});var i=o(52171),r=o(34430),n=o(74062),a=o(91248),l=o(26415),u=o(67294),s=o(14916);function d(){let{sendAnalyticsEvent:e}=(0,a.z)(),t=function(){let e=function(){let e=(0,i.H)(),t=(0,s.x)();return(0,u.useMemo)(()=>({react_app:"code-view",repository_id:e.id,repository_nwo:`${e.ownerLogin}/${e.name}`,repository_public:e.public,repository_is_fork:e.isFork,actor_id:t?.id,actor_login:t?.login}),[e,t])}(),t=(0,i.H)(),o=(0,r.Mf)(r.V6,{owner:t.ownerLogin,repo:t.name});return(0,u.useCallback)((t,i,r)=>{let n={target:t,interaction:i,context:r,...e,url:window.location.href,user_agent:window.navigator.userAgent,browser_width:window.innerWidth,browser_languages:window.navigator.languages.join(",")};(0,l.v5)(o,{method:"POST",body:n})},[e,o])}(),o=(0,n.y)("code_nav_ui_events");return{sendRepoClickEvent:(0,u.useCallback)((i,r={})=>{e("repository.click",i,r),o&&t(i,"click",r)},[e,t,o]),sendRepoKeyDownEvent:(0,u.useCallback)((i,r={})=>{e("repository.keydown",i,r),o&&t(i,"keydown",r)},[e,t,o]),sendStats:(0,u.useCallback)((i,r={})=>{e(i,"",r),o&&t(i,"stats",r)},[e,t,o]),sendMarketplaceActionEvent:(0,u.useCallback)((t,o={})=>{e("marketplace.action.click",t,o)},[e])}}},63625:(e,t,o)=>{o.d(t,{B:()=>u});var i=o(40961),r=o(52171),n=o(34430),a=o(30236),l=o(67294);function u(){let e=(0,r.H)(),{path:t,action:o,refInfo:u}=(0,i.Br)(),[s]=(0,a.D)(()=>!1,!0,[]);function d(e){return e?`?${e}`:""}function c(e){return s?"":void 0===e?window.location.hash:e?`#${e}`:""}return{getItemUrl:l.useCallback(t=>(0,n.Qi)({repo:e,commitish:u.name,action:"directory"===t.contentType?"tree":"blob",path:t.path}),[e.ownerLogin,e.name,u.name]),getUrl(i={}){let r=(0,n.Qi)({repo:e,commitish:i.commitish||u.name,action:i.action||o,path:i.path||t})+function({params:e,hash:t}){return d(e)+c(t)}(i);return i.absolute?new URL(r,window.location.origin).href:r},createPermalink(i={}){let r=(0,n.Qi)({repo:e,commitish:u.currentOid,action:i.action||o,path:i.path||t})+function({params:e,hash:t}){return d(e)+c(t)}(i);return i.absolute?new URL(r,window.location.origin).href:r},isCurrentPagePermalink:()=>!s&&u.name===u.currentOid&&window.location.pathname.includes(u.currentOid)}}},57111:(e,t,o)=>{var i,r;function n(e){return"blob"in e}function a(e){return n(e)&&"blame"in e}function l(e){return"deleteInfo"in e&&"webCommitInfo"in e}function u(e){return"editInfo"in e&&"webCommitInfo"in e}function s(e){return"tree"in e}o.d(t,{kl:()=>r,K$:()=>a,Kg:()=>n,XU:()=>l,OH:()=>u,g6:()=>s}),function(e){e.FALSE_POSITIVE="false_positive",e.USED_IN_TESTS="used_in_tests",e.WILL_FIX_LATER="will_fix_later"}(i||(i={})),function(e){e.README="readme",e.CODE_OF_CONDUCT="code_of_conduct",e.LICENSE="license",e.SECURITY="security"}(r||(r={}))},26888:(e,t,o)=>{o.d(t,{M:()=>n});let i=e=>{let t=getComputedStyle(e,null);return["overflow","overflow-y","overflow-x"].some(e=>{let o=t.getPropertyValue(e);return"auto"===o||"scroll"===o})},r=(e,t)=>e&&null!==e.parentNode?r(e.parentNode,t.concat([e])):t;function n(e){if(e instanceof HTMLElement||e instanceof SVGElement){for(let t of r(e.parentNode,[]))if((t instanceof HTMLElement||t instanceof SVGElement)&&i(t))return t;return document.scrollingElement||document.documentElement}}},54568:(e,t,o)=>{o.d(t,{Z:()=>i});let i=(e,t)=>{let o=new URL(e,window.location.origin),i=new URL(t,window.location.origin);return i.href.includes("#")&&o.host===i.host&&o.pathname===i.pathname&&o.search===i.search}},74062:(e,t,o)=>{o.d(t,{g:()=>r,y:()=>n});var i=o(92869);let r=()=>i.M()?.enabled_features??{},n=e=>!!r()[e]},91248:(e,t,o)=>{o.d(t,{w:()=>l,z:()=>a});var i=o(67294),r=o(27295),n=o(1389);function a(){let e=(0,i.useContext)(n.f);if(!e)throw Error("useAnalytics must be used within an AnalyticsContext");let{appName:t,category:o,metadata:a}=e;return{sendAnalyticsEvent:(0,i.useCallback)((e,i,n={})=>{let l={react:!0,app_name:t,category:o,...a};(0,r.qP)(e,{...l,...n,target:i})},[t,o,a])}}function l(){let{sendAnalyticsEvent:e}=a();return{sendClickAnalyticsEvent:(0,i.useCallback)((t={})=>{e("analytics.click",void 0,t)},[e])}}},5666:(e,t,o)=>{o.d(t,{f:()=>r});var i=o(30236);function r(e){let t=e.join(","),[o]=(0,i.D)(()=>{let e=/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null;return!!e&&t.includes(e)},!1,[t]);return o}},10800:(e,t,o)=>{o.d(t,{l:()=>f,s:()=>c});var i=o(67294),r=o(89250),n=o(12599),a=o(79655),l=o(54568),u=o(52136),s=o(56163),d=o(86423);let c=()=>{let{routes:e,history:t}=i.useContext(u.I),a=(0,r.s0)();return i.useCallback((i,r)=>{let u=(0,n.i3)(i).pathname;if((0,n.fp)(e,u))(0,l.Z)(location.href,i.toString())||(0,s.LD)("react"),(0,d.X)(()=>{a(i,r);let{turbo:e,...t}=window.history.state;window.history.replaceState({...t,skipTurbo:!0},"",location.href)});else{let e=t.createHref(i);(async()=>{let{softNavigate:t}=await Promise.all([o.e("vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js"),o.e("ui_packages_soft-navigate_soft-navigate_ts")]).then(o.bind(o,70229));t(e)})()}},[t,a,e])},f=()=>{let[e]=(0,a.lr)(),t=c(),{pathname:o}=(0,r.TH)(),n=i.useCallback((i,r)=>{t({pathname:o,search:(0,a.fW)("function"==typeof i?i(e):i).toString()},r)},[e,t,o]);return[e,n]}},26415:(e,t,o)=>{function i(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let o={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:o})}function r(e,t){let o={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},r=t?.body?JSON.stringify(t.body):void 0;return i(e,{...t,body:r,headers:o})}function n(e,t={}){let o={...t.headers,IS_REACT:"true"};return i(e,{...t,headers:o})}o.d(t,{QG:()=>i,aU:()=>n,v5:()=>r})},79693:(e,t,o)=>{o.d(t,{I:()=>n});var i=o(85893),r=o(77534);function n({children:e}){return(0,r.n)()?(0,i.jsx)(i.Fragment,{children:e}):null}try{n.displayName||(n.displayName="AllShortcutsEnabled")}catch{}},96478:(e,t,o)=>{o.d(t,{S:()=>f});var i=o(85893),r=o(52171),n=o(34430),a=o(50258),l=o(23010),u=o(67294),s=o(40961),d=o(41968),c=o(37227);function f({size:e,buttonClassName:t,allowResizing:o,idEnding:f}){let h=(0,r.H)(),{refInfo:y,path:p,action:m}=(0,s.Br)(),g=function(){let{addToast:e}=(0,l.V6)();return(0,u.useCallback)(t=>e({type:"error",message:t}),[e])}(),{sendRepoClickEvent:k}=(0,c.a)(),{refSelectorShortcut:w}=(0,d.bx)();return(0,i.jsx)(a.cq,{currentCommitish:y.name,defaultBranch:h.defaultBranch,owner:h.ownerLogin,repo:h.name,canCreate:h.currentUserCanPush,cacheKey:y.listCacheKey,selectedRefType:y.refType,getHref:e=>`${(0,n.Qi)({repo:h,commitish:e,action:m,path:p})}${window.location.search}`,hotKey:w.hotkey,onBeforeCreate:e=>k("REF_SELECTOR_MENU.CREATE_BRANCH",{ref_name:e}),onCreateError:g,onOpenChange:e=>e&&k("REF_SELECTOR_MENU"),size:e,buttonClassName:t,allowResizing:o,idEnding:f||"repos-header-ref-selector",useFocusZone:!0})}try{f.displayName||(f.displayName="ReposHeaderRefSelector")}catch{}},77534:(e,t,o)=>{o.d(t,{K:()=>a,n:()=>l});var i=o(85893),r=o(67294);let n=r.createContext(!0);function a({allShortcutsEnabled:e,children:t}){return(0,i.jsxs)(n.Provider,{value:e,children:[" ",t," "]})}function l(){return r.useContext(n)}try{n.displayName||(n.displayName="AllShortcutsEnabledContext")}catch{}try{a.displayName||(a.displayName="AllShortcutsEnabledProvider")}catch{}},56875:(e,t,o)=>{o.d(t,{aM:()=>a,ve:()=>l});var i=o(85893),r=o(67294);let n=(0,r.createContext)({query:"",setQuery:()=>void 0});function a(){return(0,r.useContext)(n)}function l({children:e}){let[t,o]=(0,r.useState)(""),a=(0,r.useMemo)(()=>({query:t,setQuery:o}),[o,t]);return(0,i.jsx)(n.Provider,{value:a,children:e})}try{n.displayName||(n.displayName="FileQueryContext")}catch{}try{l.displayName||(l.displayName="FileQueryProvider")}catch{}},40961:(e,t,o)=>{o.d(t,{Br:()=>u,Ou:()=>s,Tv:()=>l});var i=o(85893),r=o(92869),n=o(67294);let a=n.createContext({});function l({children:e,...t}){return(0,i.jsx)(a.Provider,{value:t,children:e})}function u(){return n.useContext(a)}function s(){return(0,r.M)()}try{a.displayName||(a.displayName="FilesPageInfoContext")}catch{}try{l.displayName||(l.displayName="FilesPageInfoProvider")}catch{}},20795:(e,t,o)=>{o.d(t,{h:()=>h});var i=o(85893),r=o(52116),n=o(15173),a=o(41905),l=o(86010),u=o(67294);let s=o(71893).ZP.span.withConfig({displayName:"ControlledTooltip__TooltipBase",componentId:"sc-d73eef01-0"})(["&::after{position:absolute;z-index:1000000;display:none;padding:0.5em 0.75em;font:normal normal 11px/1.5 ",";-webkit-font-smoothing:subpixel-antialiased;color:",";text-align:center;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-wrap:break-word;white-space:pre;pointer-events:none;content:attr(data-visible-text);background:",";border-radius:",";opacity:0;}@keyframes tooltip-appear{from{opacity:0;}to{opacity:1;}}&.tooltipped-open,&:hover,&:active,&:focus{&::after{display:inline-block;text-decoration:none;animation-name:tooltip-appear;animation-duration:0.1s;animation-fill-mode:forwards;animation-timing-function:ease-in;animation-delay:0s;}}&.tooltipped-no-delay.tooltipped-open,&.tooltipped-no-delay:hover,&.tooltipped-no-delay:active,&.tooltipped-no-delay:focus{&::after{animation-delay:0s;}}&.tooltipped-s,&.tooltipped-se,&.tooltipped-sw{&::after{top:100%;right:50%;margin-top:6px;}}&.tooltipped-se{&::after{right:auto;left:50%;margin-left:-",";}}&.tooltipped-sw::after{margin-right:-",";}&.tooltipped-n,&.tooltipped-ne,&.tooltipped-nw{&::after{right:50%;bottom:100%;margin-bottom:6px;}}&.tooltipped-ne{&::after{right:auto;left:50%;margin-left:-",";}}&.tooltipped-nw::after{margin-right:-",";}&.tooltipped-s::after,&.tooltipped-n::after{transform:translateX(50%);}&.tooltipped-w{&::after{right:100%;bottom:50%;margin-right:6px;transform:translateY(50%);}}&.tooltipped-e{&::after{bottom:50%;left:100%;margin-left:6px;transform:translateY(50%);}}&.tooltipped-align-right-2::after{right:0;margin-right:0;}&.tooltipped-align-left-2::after{left:0;margin-left:0;}",";"],(0,r.U2)("fonts.normal"),(0,r.U2)("colors.fg.onEmphasis"),(0,r.U2)("colors.neutral.emphasisPlus"),(0,r.U2)("radii.2"),(0,r.U2)("space.3"),(0,r.U2)("space.3"),(0,r.U2)("space.3"),(0,r.U2)("space.3"),n.Z),d=()=>()=>void 0,c=()=>!1,f=()=>!0,h=(0,u.forwardRef)(function({direction:e="n",className:t,text:o,noDelay:r,align:n,wrap:h,open:y=!1,portalProps:p={},...m},g){let k=(0,u.useSyncExternalStore)(d,f,c),w=(0,l.W)(t,`tooltipped-${e}`,n&&`tooltipped-align-${n}-2`,r&&"tooltipped-no-delay",h&&"tooltipped-multiline",y&&"tooltipped-open");return k?(0,i.jsx)(a.h,{...p,children:(0,i.jsx)(s,{ref:g,role:"tooltip","aria-label":o,"data-visible-text":o||m["aria-label"],...m,sx:{position:"fixed",zIndex:1,...m.sx},className:w})}):null});try{h.displayName||(h.displayName="ControlledTooltip")}catch{}},38457:(e,t,o)=>{o.d(t,{u:()=>u});var i=o(85893),r=o(48030),n=o(67294),a=o(20795),l=o(26888);let u=(0,n.forwardRef)(function({contentRef:e,open:t,anchoredPositionAlignment:o,anchorSide:u,anchorOffset:s,alignmentOffset:d,allowOutOfBounds:c,...f},h){let y=(0,n.useRef)(null);(0,n.useImperativeHandle)(h,()=>y.current);let p=(0,n.useRef)({left:0,top:0}),m=(0,n.useSyncExternalStore)((0,n.useCallback)(o=>{if(!y.current||!e.current||!t)return()=>void 0;let i=(0,l.M)(e.current);return i?.addEventListener("scroll",o),()=>{i?.removeEventListener("scroll",o)}},[e,t]),(0,n.useCallback)(()=>{if(!y.current||!e.current)return p.current;let t=(0,r.N)(y.current,e.current,{align:o??"center",side:u??"outside-top",alignmentOffset:d??0,anchorOffset:s??0,allowOutOfBounds:c});return(t.left!==p.current.left||t.top!==p.current.top)&&(p.current=t),p.current},[e,d,s,o,u,c]),(0,n.useCallback)(()=>p.current,[]));return(0,i.jsx)(a.h,{...f,ref:y,open:t,style:{position:"absolute",...m,...f.style}})});try{u.displayName||(u.displayName="PortalTooltip")}catch{}},12733:(e,t,o)=>{o.d(t,{WZ:()=>f,sF:()=>y,wB:()=>c});var i,r=o(85893),n=o(42483),a=o(97011),l=o(27856),u=o.n(l),s=o(67294);function d(e){if("html"in e&&void 0!==e.html){let{html:t,...o}=e;return{safeHTML:t,props:o}}let{unverifiedHTML:t,unverifiedHTMLConfig:o,...i}=e,r={...o,RETURN_DOM:!1,RETURN_DOM_FRAGMENT:!1};return{safeHTML:u().sanitize(t,r),props:i}}let c=h(n.Z);c.displayName="SafeHTMLBox";let f=h(a.Z);function h(e){return(0,s.forwardRef)((t,o)=>{let{safeHTML:i,props:n}=d(t);return(0,r.jsx)(e,{ref:o,...n,dangerouslySetInnerHTML:i?{__html:i}:void 0})})}f.displayName="SafeHTMLText";let y=(0,s.forwardRef)((e,t)=>{let{safeHTML:o,props:i}=d(e);return(0,r.jsx)("div",{ref:t,...i,dangerouslySetInnerHTML:o?{__html:o}:void 0})});y.displayName="SafeHTMLDiv";try{(i=SafeHTMLComponent).displayName||(i.displayName="SafeHTMLComponent")}catch{}},80222:(e,t,o)=>{o.d(t,{ZV:()=>c,_G:()=>i,eI:()=>s,xp:()=>d});var i,r=o(85893),n=o(46263),a=o(67294);!function(e){e[e.small=1]="small",e[e.medium=544]="medium",e[e.large=768]="large",e[e.xlarge=1012]="xlarge",e[e.xxlarge=1280]="xxlarge",e[e.xxxlarge=1350]="xxxlarge",e[e.xxxxlarge=1440]="xxxxlarge"}(i||(i={}));let l=[1440,1350,1280,1012,768,544,1],u=a.createContext({screenSize:1});function s(){return a.useContext(u)}function d({children:e,initialValue:t}){let o=(0,a.useSyncExternalStore)(()=>()=>{},()=>t??c(window.innerWidth),()=>t??1),i=(0,a.useRef)(o),[l,s]=(0,a.useState)(o),d=(0,a.useCallback)(()=>{let e=c(window.innerWidth);i.current!==e&&(i.current=e,s(e))},[]);(0,a.useEffect)(()=>{let e=new ResizeObserver((0,n.D)(d));return e.observe(document.documentElement),()=>e.disconnect()},[d]);let f=(0,a.useMemo)(()=>({screenSize:l}),[l]);return(0,r.jsx)(u.Provider,{value:f,children:e})}function c(e){for(let t of l)if(e>=t)return t;return 1}try{u.displayName||(u.displayName="ScreenContext")}catch{}try{d.displayName||(d.displayName="ScreenSizeProvider")}catch{}}}]);
//# sourceMappingURL=ui_packages_code-view-shared_hooks_use-canonical-object_ts-ui_packages_code-view-shared_hooks-6c8816-ef126af10fe8.js.map