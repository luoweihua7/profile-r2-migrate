"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_code-view-shared_hooks_shortcuts_ts-ui_packages_code-view-shared_utilities_web-wo-02859b"],{29881:(e,t,o)=>{o.d(t,{bx:()=>l,ln:()=>d,tW:()=>a});var i=o(49667),r=o(20679);let n={cursorNavigationHopWordLeft:{hotkey:"Alt+ArrowLeft,Ctrl+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["ArrowLeft"],modifierRequired:!0},cursorNavigationHopWordRight:{hotkey:"Alt+ArrowRight,Ctrl+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["ArrowRight"],modifierRequired:!0},cursorNavigationTopOfPage:{hotkey:"Meta+ArrowUp",useWhileBlobFocused:!0,noModifierHotkey:["ArrowUp"],modifierRequired:!0},cursorNavigationBottomOfPage:{hotkey:"Meta+ArrowDown",useWhileBlobFocused:!0,noModifierHotkey:["ArrowDown"],modifierRequired:!0},cursorNavigationEnd:{hotkey:"End,Meta+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["End"]},cursorNavigationHome:{hotkey:"Home,Meta+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["Home"]},cursorNavigationPageUp:{hotkey:"PageUp",useWhileBlobFocused:!0,noModifierHotkey:["PageUp"]},cursorNavigationPageDown:{hotkey:"PageDown",useWhileBlobFocused:!0,noModifierHotkey:["PageDown"]},cursorNavigationArrowDown:{hotkey:"ArrowDown",useWhileBlobFocused:!0,noModifierHotkey:["ArrowDown"]},cursorNavigationArrowUp:{hotkey:"ArrowUp",useWhileBlobFocused:!0,noModifierHotkey:["ArrowUp"]},cursorNavigationArrowLeft:{hotkey:"ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["ArrowLeft"]},cursorNavigationArrowRight:{hotkey:"ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["ArrowRight"]},cursorNavigationShiftHopWordLeft:{hotkey:"Alt+Shift+ArrowLeft,Ctrl+Shift+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["ArrowLeft"],modifierRequired:!0},cursorNavigationShiftHopWordRight:{hotkey:"Alt+Shift+ArrowRight,Ctrl+Shift+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["ArrowRight"],modifierRequired:!0},cursorNavigationShiftTopOfPage:{hotkey:"Meta+Shift+ArrowUp",useWhileBlobFocused:!0,noModifierHotkey:["ArrowUp"],modifierRequired:!0},cursorNavigationShiftBottomOfPage:{hotkey:"Meta+Shift+ArrowDown",useWhileBlobFocused:!0,noModifierHotkey:["ArrowDown"],modifierRequired:!0},cursorNavigationShiftEnd:{hotkey:"Shift+End,Meta+Shift+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["End"],modifierRequired:!0},cursorNavigationShiftHome:{hotkey:"Shift+Home,Meta+Shift+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["Home"],modifierRequired:!0},cursorNavigationShiftPageUp:{hotkey:"Shift+PageUp",useWhileBlobFocused:!0,noModifierHotkey:["PageUp"],modifierRequired:!0},cursorNavigationShiftPageDown:{hotkey:"Shift+PageDown",useWhileBlobFocused:!0,noModifierHotkey:["PageDown"],modifierRequired:!0},cursorNavigationShiftArrowDown:{hotkey:"Shift+ArrowDown",useWhileBlobFocused:!0,noModifierHotkey:["ArrowDown"],modifierRequired:!0},cursorNavigationShiftArrowUp:{hotkey:"Shift+ArrowUp",useWhileBlobFocused:!0,noModifierHotkey:["ArrowUp"],modifierRequired:!0},cursorNavigationShiftArrowLeft:{hotkey:"Shift+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["ArrowLeft"],modifierRequired:!0},cursorNavigationShiftArrowRight:{hotkey:"Shift+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["ArrowRight"],modifierRequired:!0},cursorNavigationHighlightLine:{text:"J",hotkey:"Shift+J",useWhileBlobFocused:!0,noModifierHotkey:["J"],modifierRequired:!0},cursorNavigationGoLineUp:{hotkey:"Ctrl+p",useWhileBlobFocused:!0,noModifierHotkey:["p"],modifierRequired:!0},cursorNavigationOpenHelpDialog:{hotkey:"Alt+F1,Control+Alt+\u02D9,Control+Alt+h",useWhileBlobFocused:!0,noModifierHotkey:["F1","h","\u02D9"],modifierRequired:!0},cursorNavigationGoLineDown:{hotkey:"Ctrl+n",useWhileBlobFocused:!0,noModifierHotkey:["n"],modifierRequired:!0},cursorNavigationEnter:{text:"\u2318 Enter",hotkey:"Meta+Enter",useWhileBlobFocused:!0,noModifierHotkey:["Enter"],modifierRequired:!0},cursorNavigationSpace:{hotkey:" ",useWhileBlobFocused:!0,noModifierHotkey:[" "],modifierRequired:!1},cursorNavigationShiftSpace:{hotkey:"Shift+ ",useWhileBlobFocused:!0,noModifierHotkey:[" "],modifierRequired:!0},expandAndFocusLineContextMenu:{text:"Shift Alt C",hotkey:"Alt+Shift+C,Alt+Shift+\xc7",useWhileBlobFocused:!0,noModifierHotkey:["C"],modifierRequired:!0},copyFilePathShortcut:{text:"\u2318 shift .",hotkey:"Meta+Shift+>",useWhileBlobFocused:!0,noModifierHotkey:["."],modifierRequired:!0},copyPermalinkShortcut:{text:"\u2318 shift ,",hotkey:"Meta+Shift+<",useWhileBlobFocused:!0,noModifierHotkey:[","],modifierRequired:!0},copyRawContentShortcut:{text:"\u2318 shift c",hotkey:"Meta+Shift+C",useWhileBlobFocused:!0,noModifierHotkey:["c"],modifierRequired:!0},downloadRawContentShortcut:{text:"\u2318 shift s",hotkey:"Meta+Shift+S",useWhileBlobFocused:!0,noModifierHotkey:["s"],modifierRequired:!0},editFileShortcut:{hotkey:"e,Shift+E",useWhileBlobFocused:!0,noModifierHotkey:["e","E"]},goToLineShortcut:{text:"l",hotkey:"l,Shift+L",ariaKeyShortcuts:"l",useWhileBlobFocused:!0,noModifierHotkey:["l","L"]},alternativeGoToLineShortcut:{hotkey:"Mod+Alt+g",ariaKeyShortcuts:"Mod+Alt+g",useWhileBlobFocused:!0,noModifierHotkey:["g","G"]},findInFileShortcut:{hotkey:"Meta+f, F3",text:"\u2318 f",ariaKeyShortcuts:"Meta+F",useWhileBlobFocused:!0,noModifierHotkey:["f","F3"],modifierRequired:!0},findFilesShortcut:{hotkey:"t,Shift+T",useWhileBlobFocused:!0,noModifierHotkey:["t","T"]},findSelectionShortcut:{hotkey:"Meta+e",useWhileBlobFocused:!0,noModifierHotkey:["e"],modifierRequired:!0},findNextShortcut:{hotkey:"Mod+g"},findPrevShortcut:{hotkey:"Mod+Shift+G"},openWithGitHubDevShortcut:{hotkey:"., Meta+Shift+/",useWhileBlobFocused:!0,noModifierHotkey:["."]},openWithGitHubDevInNewWindowShortcut:{hotkey:"Shift+.,Shift+>,>",useWhileBlobFocused:!0,noModifierHotkey:[">"]},permalinkShortcut:{hotkey:"y,Shift+Y",useWhileBlobFocused:!0,noModifierHotkey:["y","Y"]},searchShortcut:{hotkey:"/",useWhileBlobFocused:!0,noModifierHotkey:["/"]},selectAllShortcut:{hotkey:"Meta+a",useWhileBlobFocused:!0,noModifierHotkey:["a"],modifierRequired:!0},selectEditTabShortcut:{hotkey:"Mod+Shift+P"},submitCommitDialogShortcut:{hotkey:"Mod+Enter"},refSelectorShortcut:{hotkey:"w",text:"w",useWhileBlobFocused:!0,noModifierHotkey:["w"]},escapeRightClickMenu:{hotkey:"Escape",useWhileBlobFocused:!0,noModifierHotkey:["Escape"]},toggleFocusedPaneShortcut:{hotkey:"Meta+F6,Meta+Shift+F6",useWhileBlobFocused:!0,noModifierHotkey:["F6"],modifierRequired:!0},toggleSymbolsShortcut:{hotkey:"Meta+i",useWhileBlobFocused:!0,noModifierHotkey:["i"],modifierRequired:!0},toggleTreeShortcut:{hotkey:"Meta+b",useWhileBlobFocused:!0,noModifierHotkey:["b"],modifierRequired:!0},viewBlameShortcut:{hotkey:"b,Shift+B,Meta+/ Meta+b",useWhileBlobFocused:!0,noModifierHotkey:["b"]},viewCodeShortcut:{hotkey:"Meta+/ Meta+c",useWhileBlobFocused:!0,modifierRequired:!0},viewPreviewShortcut:{hotkey:"Meta+/ Meta+p"},viewRawContentShortcut:{text:"\u2318 / \u2318 r",hotkey:"Meta+/ Meta+r",useWhileBlobFocused:!0,noModifierHotkey:["r"],modifierRequired:!0},findSymbolShortcut:{hotkey:"r,Shift+R",useWhileBlobFocused:!0,noModifierHotkey:["r","R"],modifierRequired:!1}},s=new Map;function l(){let e=(0,r.f)(["mac"]),[t]=(0,i.D)(()=>!1,!0,[]),o=0;if(e?o=1:t||(o=2),!s.has(o)){var l,d;let i=n;e||t||(i=Object.keys(l=i).reduce((e,t)=>{let o=l[t];return e[t]={hotkey:o.hotkey?.replace(/Meta/g,"Control"),text:o.text?.replace(/⌘/g,"Ctrl").replace(/⇧/g,"Shift"),ariaKeyShortcuts:o.ariaKeyShortcuts?.replace(/Meta/g,"Control"),useWhileBlobFocused:o.useWhileBlobFocused,modifierRequired:o.modifierRequired,noModifierHotkey:o.noModifierHotkey},e},{})),t&&(i=Object.keys(d=i).reduce((e,t)=>{let o=d[t];return e[t]={hotkey:void 0,text:o.text?.replace(/⌘/g,"Ctrl").replace(/⇧/g,"Shift"),ariaKeyShortcuts:o.ariaKeyShortcuts?.replace(/Meta/g,"Control"),useWhileBlobFocused:o.useWhileBlobFocused,modifierRequired:o.modifierRequired,noModifierHotkey:o.noModifierHotkey},e},{})),s.set(o,i)}return s.get(o)}function d(){let e=l();return Object.keys(e).reduce((t,o)=>{let i=e[o];if(i.useWhileBlobFocused&&i.noModifierHotkey&&i.modifierRequired)for(let e of i.noModifierHotkey)t.includes(e)||t.push(e);return t},[])}function a(){let e=l();return Object.keys(e).reduce((t,o)=>{let i=e[o];if(i.useWhileBlobFocused&&i.noModifierHotkey&&!i.modifierRequired)for(let e of i.noModifierHotkey)t.includes(e)||t.push(e);return t},[])}},28114:(e,t,o)=>{o.d(t,{V:()=>WebWorker});let WebWorker=class WebWorker{set onmessage(e){this.worker.onmessage=e}postMessage(e){this.worker.postMessage(e)}terminate(){this.worker.terminate()}constructor(e,t){try{this.worker=new Worker(e)}catch(e){console.warn("Web workers are not available. Please enable web workers to benefit from the improved performance."),this.worker=new MainThreadWorker(t)}}};let MainThreadWorker=class MainThreadWorker{async postMessage(e){if(this.terminated)return;let t={data:this.job({data:e})};this.onmessage?.(t)}terminate(){this.terminated=!0}constructor(e){this.job=e,this.terminated=!1}}},4382:(e,t,o)=>{o.d(t,{d:()=>DebouncedWorkerManager});let DebouncedWorkerManager=class DebouncedWorkerManager{post(e){if(this.debounceOverrideCondition&&this.debounceOverrideCondition(e))return this.delayId&&clearTimeout(this.delayId),this.postNow(e);this.idle()?(this.delayId&&clearTimeout(this.delayId),this.delayId=setTimeout(()=>{this.postNow(e)},this.delayMs)):this.nextRequest=e}postNow(e){this.currentRequest=e,this.worker.postMessage(e)}idle(){return!this.currentRequest}terminate(){this.worker.terminate()}constructor(e,t=200,o){this.worker=e,this.delayMs=t,this.debounceOverrideCondition=o,this.currentRequest=void 0,this.nextRequest=void 0,this.worker.onmessage=({data:e})=>{this.onResponse&&this.onResponse(e),this.nextRequest?(this.postNow(this.nextRequest),this.nextRequest=void 0):this.currentRequest=void 0}}}},51927:(e,t,o)=>{o.d(t,{$1:()=>d,Aq:()=>l,L4:()=>i,YZ:()=>n,aF:()=>SymbolChangedEvent,cw:()=>r,d0:()=>s});let OpenCopilotChatEvent=class OpenCopilotChatEvent extends Event{constructor(e){super("open-copilot-chat",{bubbles:!1,cancelable:!0}),this.payload=e}};let AddCopilotChatReferenceEvent=class AddCopilotChatReferenceEvent extends Event{constructor(e,t=!1,o){super("add-copilot-chat-reference",{bubbles:!1,cancelable:!0}),this.reference=e,this.openPanel=t,this.id=o}};let SymbolChangedEvent=class SymbolChangedEvent extends Event{constructor(e){super("symbol-changed",{bubbles:!1,cancelable:!0}),this.context=e}};function i(e){window.dispatchEvent(new OpenCopilotChatEvent(e))}function r(e,t=!1,o){window.dispatchEvent(new AddCopilotChatReferenceEvent(e,t,o))}function n(e){return window.addEventListener("open-copilot-chat",e),()=>{window.removeEventListener("open-copilot-chat",e)}}function s(e){return window.addEventListener("add-copilot-chat-reference",e),()=>{window.removeEventListener("add-copilot-chat-reference",e)}}function l(e){return window.addEventListener("search-copilot-chat",e),()=>{window.removeEventListener("search-copilot-chat",e)}}function d(e){return window.addEventListener("symbol-changed",e),()=>{window.removeEventListener("symbol-changed",e)}}},85355:(e,t,o)=>{o.d(t,{A9:()=>r,af:()=>i,cR:()=>s,uF:()=>n});let i="tree-comparison",r={explain:"explain",conversation:"conversation",suggest:"suggest",askDocs:"ask-docs",discussFileDiff:"discuss-file-diff",explainFileDiff:"explain-file-diff",reviewPr:"review-pull-request"},n=["exception","filtered","contentTooLarge","rateLimit","agentUnauthorized","agentRequest","networkError","multipleAgentsAttempt"],s=["bing-search","codesearch","knowledge-base-search","pathsearch","show-symbol-definition","getissue","getprcommits","getcommit","getrelease","getrepo","getdiff","get-diff-by-range","getfile","getfilechanges","getdiscussion","get-actions-job-logs"]},3966:(e,t,o)=>{o.d(t,{p:()=>i});function i(e,t){let o,i,r;let n=e.slice(1).search(/\S/)||0;return e.includes("	")&&(o=e.split(RegExp("	")).length-1),{getPaddingLeft:function(){return i||(i=o?`${t*o*7}px`:n<1?"0px":`${7*n}px`)},getTextIndent:function(){return r||(r=o?`-${t*o*7+t}px`:n<1?"0px":`-${7*n+.5}px`)}}}},46455:(e,t,o)=>{function i(e){return`line-${e}`}function r(e,t,o){return`${e}${"left"===t?"L":"R"}${o}`}function n(e){return"DELETION"===e?"left":"right"}function s(e,t=!1,o=!1){if(o)return"var(--bgColor-attention-muted, var(--color-attention-subtle))";switch(e){case"ADDITION":return t?"var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg))":"var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg))";case"DELETION":return t?"var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg))":"var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg))";case"HUNK":case"EMPTY":return t?"var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg))":"var(--bgColor-accent-muted, var(--color-accent-subtle))";default:return}}function l(e){let t=0;if(e)for(let o of e)t=Math.max(t,o?.left??0,o?.right??0);return Math.max(8*t.toString().length+20,40).toString()}o.d(t,{Gi:()=>l,Jn:()=>n,_N:()=>r,dF:()=>s,x1:()=>i})},52071:(e,t,o)=>{o.d(t,{Cp:()=>s.C,G7:()=>r.G,Gt:()=>d.G,Sv:()=>n.S,Yj:()=>i.Y,_2:()=>h._,fx:()=>l.f,iZ:()=>a.i,pE:()=>u.p,wj:()=>c.w});var i=o(52843),r=o(69723),n=o(82842),s=o(99805),l=o(99818),d=o(29580),a=o(42274),c=o(62651),u=o(3966),h=o(72202)},72202:(e,t,o)=>{function i(e){return"LEFT"===e?"-":"RIGHT"===e?"+":""}function r({startDiffSide:e,endDiffSide:t,originalStartLine:o,originalEndLine:r}){return e&&t&&"number"==typeof o&&"number"==typeof r?0===o&&1===r&&e===t?"-1 to +1":e===t&&o===r?`${i(e)}${o}`:`${i(e)}${o} to ${i(t)}${r}`:""}o.d(t,{_:()=>r})},91534:(e,t,o)=>{o.d(t,{Z:()=>i});let i=(e,t)=>{let o=new URL(e,window.location.origin),i=new URL(t,window.location.origin);return i.href.includes("#")&&o.host===i.host&&o.pathname===i.pathname&&o.search===i.search}},29065:(e,t,o)=>{o.d(t,{a:()=>r});var i=o(58081);function r({focusRowRef:e,mouseRowRef:t}){let[o,r]=i.useState(!1);return i.useEffect(()=>{if(e.current&&t.current){let o=()=>{let t=e.current?.querySelector(".PRIVATE_TreeView-item-content-text");t?.scrollWidth!==t?.offsetWidth&&r(!0)};e.current.onfocus=()=>{o()},e.current.onblur=()=>{r(!1)},t.current.onmouseenter=()=>{o()},t.current.onmouseleave=()=>{r(!1)}}},[e,t]),o}},19343:(e,t,o)=>{o.d(t,{V:()=>r});var i=o(58081);function r(e){(0,i.useEffect)(()=>{if(!e)return;let t=document.querySelector(".footer");if(t)return t.hidden=!0,()=>{t.hidden=!1}},[e])}},20679:(e,t,o)=>{o.d(t,{f:()=>r});var i=o(49667);function r(e){let t=e.join(","),[o]=(0,i.D)(()=>{let e=/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null;return!!e&&t.includes(e)},!1,[t]);return o}},85193:(e,t,o)=>{o.d(t,{l:()=>h,s:()=>u});var i=o(58081),r=o(89250),n=o(12599),s=o(79655),l=o(91534),d=o(40940),a=o(10394),c=o(42439);let u=()=>{let{routes:e,history:t}=i.useContext(d.I),s=(0,r.s0)();return i.useCallback((i,r)=>{let d=(0,n.i3)(i).pathname;if((0,n.fp)(e,d))(0,l.Z)(location.href,i.toString())||(0,a.LD)("react"),(0,c.X)(()=>{s(i,r);let{turbo:e,...t}=window.history.state;window.history.replaceState({...t,skipTurbo:!0},"",location.href)});else{let e=t.createHref(i);(async()=>{let{softNavigate:t}=await Promise.all([o.e("vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js"),o.e("ui_packages_soft-navigate_soft-navigate_ts")]).then(o.bind(o,12272));t(e)})()}},[t,s,e])},h=()=>{let[e]=(0,s.lr)(),t=u(),{pathname:o}=(0,r.TH)(),n=i.useCallback((i,r)=>{t({pathname:o,search:(0,s.fW)("function"==typeof i?i(e):i).toString()},r)},[e,t,o]);return[e,n]}},34603:(e,t,o)=>{o.d(t,{A:()=>s,F:()=>d});var i=o(58081),r=o(78720);let n=e=>e;function s(e){let t=i.useRef({}),o=i.useRef({}),s=(e,o)=>{t.current[e](o)},l=i.useRef(s);l.current=s;let d=i.useRef(new ResizeObserver(e=>{for(let t of e){let e=t.target,o="data-key",i=e.getAttribute(o);if(null===i)throw Error(`Value not found, for '${o}' attribute`);l.current(i,e)}}));i.useEffect(()=>{let e=d.current;return()=>{e.disconnect()}},[]);let{size:a,keyExtractor:c=n}=e,u=i.useMemo(()=>{let e=e=>t=>{o.current[e]&&d.current.unobserve(o.current[e]),t&&(l.current(e,t),d.current.observe(t)),o.current[e]=t},t={};for(let o=0;o<a;o++){let i=c(o);t[i]=e(i)}return t},[a,c]),h=(0,r.o)(e),f=h.virtualItems.map(e=>(t.current[e.key]=e.measureRef,{...e,measureRef:u[e.key]}));return{...h,virtualItems:f}}var l=o(63451);function d({additionalScrollOffset:e=0,scrollToFn:t,horizontal:o,parentRef:n,useVirtualImpl:s=r.o,...d}){let a=(0,i.useRef)(window),c=(0,i.useCallback)(()=>{let e=n.current?.getBoundingClientRect(),t=e?.top??0,i=e?.left??0;return o?-1*i:-1*t},[o,n]),u=(0,i.useCallback)(t=>{let i=t+((n.current?.getBoundingClientRect().top??0)+window.scrollY)+e;a.current?.scroll({top:o?0:i,left:o?i:0})},[e,o,n]);return s({...d,horizontal:o,parentRef:n,scrollToFn:t||u,onScrollElement:a,scrollOffsetFn:c,useObserver:()=>(function(e){let[t,o]=(0,i.useState)({height:0,width:0}),r=e.current;return(0,l.b)(()=>{if(!r)return;let e=()=>{let e={height:r.innerHeight,width:r.innerWidth};o(t=>t.height!==e.height||t.width!==e.width?e:t)};return e(),r.addEventListener("resize",e),()=>{r.removeEventListener("resize",e)}},[r]),t})(a)})}},52843:(e,t,o)=>{o.d(t,{Y:()=>s});var i=o(48055),r=o(83925),n=o(3838);let s=({dragging:e,isHighlighted:t,isLeftColumn:o,isSplit:s,lineAnchor:l,line:d,lineChild:a,onLineNumberClick:c})=>{let u="CONTEXT"===d.type||"INJECTED_CONTEXT"===d.type,h="ADDITION"!==d.type,f=h||!s,y="DELETION"!==d.type,g=y&&!u||!s,p=s&&u?o?d.left:d.right:d.left;return(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsx)(n._,{ariaLabel:`Line ${h?d.left?.toString():d.right?.toString()}`,lineType:d.type,interactiveProps:c?{onClick:c}:null,isHighlighted:t,children:h&&p}),g&&(0,i.jsx)(n._,{ariaLabel:`Line ${y?d.right?.toString():d.left?.toString()}`,lineType:d.type,interactiveProps:c?{onClick:c}:null,isHighlighted:t,children:y&&d.right}),(0,i.jsx)(r.o,{dragging:e,isHighlighted:t,isLeftColumn:o,line:d,lineAnchor:l,lineChild:a})]})};try{s.displayName||(s.displayName="DiffLinePart")}catch{}},69723:(e,t,o)=>{o.d(t,{G:()=>n});var i=o(48055),r=o(42483);function n(){return(0,i.jsx)(r.Z,{"aria-hidden":"true",as:"svg",version:"1.1",viewBox:"0 0 340 84",xmlns:"http://www.w3.org/2000/svg",sx:{bottom:"0 !important",clip:"rect(1px, 1px, 1px, 1px)",clipPath:"inset(50%)",height:"84px",position:"absolute",width:"320px"},children:(0,i.jsxs)("defs",{children:[(0,i.jsxs)("clipPath",{id:"diff-placeholder",children:[(0,i.jsx)("rect",{height:"11.9298746",rx:"2",width:"67.0175439",x:"0",y:"0"}),(0,i.jsx)("rect",{height:"11.9298746",rx:"2",width:"100.701754",x:"18.9473684",y:"47.7194983"}),(0,i.jsx)("rect",{height:"11.9298746",rx:"2",width:"37.8947368",x:"0",y:"71.930126"}),(0,i.jsx)("rect",{height:"11.9298746",rx:"2",width:"53.3333333",x:"127.017544",y:"48.0703769"}),(0,i.jsx)("rect",{height:"11.9298746",rx:"2",width:"72.9824561",x:"187.719298",y:"48.0703769"}),(0,i.jsx)("rect",{height:"11.9298746",rx:"2",width:"140.350877",x:"76.8421053",y:"0"}),(0,i.jsx)("rect",{height:"11.9298746",rx:"2",width:"140.350877",x:"17.8947368",y:"23.8597491"}),(0,i.jsx)("rect",{height:"11.9298746",rx:"2",width:"173.684211",x:"166.315789",y:"23.8597491"})]}),(0,i.jsxs)("linearGradient",{id:"animated-diff-gradient",spreadMethod:"reflect",x1:"0",x2:"0",y1:"0",y2:"1",children:[(0,i.jsx)("stop",{offset:"0",stopColor:"#eee"}),(0,i.jsx)("stop",{offset:"0.2",stopColor:"#eee"}),(0,i.jsx)("stop",{offset:"0.5",stopColor:"#ddd"}),(0,i.jsx)("stop",{offset:"0.8",stopColor:"#eee"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#eee"}),(0,i.jsx)("animateTransform",{attributeName:"y1",dur:"1s",repeatCount:"3",values:"0%; 100%; 0"}),(0,i.jsx)("animateTransform",{attributeName:"y2",dur:"1s",repeatCount:"3",values:"100%; 200%; 0"})]})]})})}try{n.displayName||(n.displayName="DiffPlaceholder")}catch{}},82842:(e,t,o)=>{o.d(t,{S:()=>s});var i=o(48055),r=o(42483);let n={addition:"diffstat.additionBg",deletion:"danger.emphasis",neutral:"neutral.bg"};function s({squares:e}){return(0,i.jsx)(r.Z,{sx:{display:"flex"},children:e.map((e,t)=>(0,i.jsx)(r.Z,{"data-testid":`${e} diffstat`,sx:{backgroundColor:n[e],width:"8px",height:"8px",marginLeft:"1px",outlineOffset:"-1px",borderStyle:"solid",borderColor:"border.subtle",borderWidth:"1px"}},t))})}try{s.displayName||(s.displayName="DiffSquares")}catch{}},83925:(e,t,o)=>{o.d(t,{o:()=>l});var i=o(48055),r=o(86010),n=o(75299),s=o(46455);let l=e=>{let{dragging:t,isHighlighted:o,isLeftColumn:l,colSpan:d,line:a,lineAnchor:c}=e,u=a.html,h="";return["ADDITION","DELETION"].includes(a.type)&&["+","-"].includes(u[0])&&(h=u[0],u=u.slice(1)),(0,i.jsx)("td",{className:(0,r.W)("diff-text-cell",{"border-left color-border-accent-emphasis":t&&o,"border-right":l&&"HUNK"!==a.type}),colSpan:d,id:c?(0,s.x1)(c):void 0,style:{backgroundColor:(0,s.dF)(a.type,!1,o)},children:(0,i.jsxs)("code",{"data-code-marker":h,className:(0,r.W)("diff-text syntax-highlighted-line",{addition:"ADDITION"===a.type,deletion:"DELETION"===a.type}),children:[e.lineChild,(0,i.jsx)(n.sF,{className:(0,r.W)("diff-text-inner",{"color-fg-muted":"HUNK"===a.type}),html:u,style:{marginLeft:"CONTEXT"===a.type?"-7px":void 0}})]})})};try{l.displayName||(l.displayName="DiffText")}catch{}},29580:(e,t,o)=>{o.d(t,{G:()=>s});var i=o(48055),r=o(86010),n=o(3838);function s({isLeftColumn:e}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n._,{lineType:"EMPTY"}),(0,i.jsx)("td",{className:(0,r.W)("empty-diff-line",{"border-right":e}),colSpan:1})]})}try{s.displayName||(s.displayName="EmptyDiffLine")}catch{}},99805:(e,t,o)=>{o.d(t,{C:()=>l});var i=o(48055),r=o(85529),n=o(3838),s=o(83925);function l({currentLine:e,hunkButton:t,isLeftColumn:o,isSplit:l}){return l&&!o?null:(0,i.jsxs)(i.Fragment,{children:[t?(0,i.jsx)(n._,{colSpan:l?1:2,hasExpanderButton:!0,lineType:e.type,children:t}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n._,{lineType:e.type,children:(0,i.jsx)(r.KebabHorizontalIcon,{})}),!l&&(0,i.jsx)(n._,{lineType:e.type,children:(0,i.jsx)(r.KebabHorizontalIcon,{})})]}),(0,i.jsx)(s.o,{isHighlighted:!1,isLeftColumn:!0,colSpan:l?3:void 0,line:e})]})}try{l.displayName||(l.displayName="HunkHeaderDiffLine")}catch{}},99818:(e,t,o)=>{o.d(t,{f:()=>n});var i=o(48055),r=o(85529);function n(){return(0,i.jsx)("div",{className:"hunk-kebab-icon pr-2 pb-1",children:(0,i.jsx)(r.KebabHorizontalIcon,{})})}try{n.displayName||(n.displayName="HunkKebabIcon")}catch{}},3838:(e,t,o)=>{o.d(t,{_:()=>s});var i=o(48055),r=o(86010),n=o(46455);let s=({ariaLabel:e,children:t,hasExpanderButton:o,lineType:s,colSpan:l,interactiveProps:d,isHighlighted:a,...c})=>{let u=(0,i.jsx)("code",{className:"pr-2",children:t});return d&&(u=(0,i.jsx)("button",{className:"diff-line-number-button",...d,"aria-label":e,children:u})),(0,i.jsx)("td",{"aria-label":d?void 0:e,"data-line-number":!0,className:(0,r.W)("diff-line-number",{"has-expander":o,clickable:!!d}),colSpan:l||1,style:{backgroundColor:(0,n.dF)(s,!0,a)},...c,children:u})};try{s.displayName||(s.displayName="LineNumber")}catch{}},42274:(e,t,o)=>{o.d(t,{i:()=>r});var i=o(48055);function r(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("thead",{className:"sr-only",children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"col",children:"Original file line number"}),(0,i.jsx)("th",{scope:"col",children:"Original file line"}),(0,i.jsx)("th",{scope:"col",children:"Diff line number"}),(0,i.jsx)("th",{scope:"col",children:"Diff line change"})]})}),(0,i.jsxs)("colgroup",{children:[(0,i.jsx)("col",{width:e.lineWidth}),(0,i.jsx)("col",{}),(0,i.jsx)("col",{width:e.lineWidth}),(0,i.jsx)("col",{})]}),(0,i.jsx)("tbody",{children:e.children})]})}try{r.displayName||(r.displayName="SplitDiffTable")}catch{}},62651:(e,t,o)=>{o.d(t,{w:()=>r});var i=o(48055);function r(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("thead",{className:"sr-only",children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"col",children:"Original file line number"}),(0,i.jsx)("th",{scope:"col",children:"Diff line number"}),(0,i.jsx)("th",{scope:"col",children:"Diff line change"})]})}),(0,i.jsxs)("colgroup",{children:[(0,i.jsx)("col",{width:e.lineWidth}),(0,i.jsx)("col",{width:e.lineWidth}),(0,i.jsx)("col",{width:"100%"})]}),(0,i.jsx)("tbody",{children:e.children})]})}try{r.displayName||(r.displayName="UnifiedDiffTable")}catch{}},51952:(e,t,o)=>{o.d(t,{ZV:()=>u,_G:()=>i,eI:()=>a,xp:()=>c});var i,r=o(48055),n=o(46263),s=o(58081);!function(e){e[e.small=1]="small",e[e.medium=544]="medium",e[e.large=768]="large",e[e.xlarge=1012]="xlarge",e[e.xxlarge=1280]="xxlarge",e[e.xxxlarge=1350]="xxxlarge",e[e.xxxxlarge=1440]="xxxxlarge"}(i||(i={}));let l=[1440,1350,1280,1012,768,544,1],d=s.createContext({screenSize:1});function a(){return s.useContext(d)}function c({children:e,initialValue:t}){let o=(0,s.useSyncExternalStore)(()=>()=>{},()=>t??u(window.innerWidth),()=>t??1),i=(0,s.useRef)(o),[l,a]=(0,s.useState)(o),c=(0,s.useCallback)(()=>{let e=u(window.innerWidth);i.current!==e&&(i.current=e,a(e))},[]);(0,s.useEffect)(()=>{let e=new ResizeObserver((0,n.D)(c));return e.observe(document.documentElement),()=>e.disconnect()},[c]);let h=(0,s.useMemo)(()=>({screenSize:l}),[l]);return(0,r.jsx)(d.Provider,{value:h,children:e})}function u(e){for(let t of l)if(e>=t)return t;return 1}try{d.displayName||(d.displayName="ScreenContext")}catch{}try{c.displayName||(c.displayName="ScreenSizeProvider")}catch{}}}]);
//# sourceMappingURL=ui_packages_code-view-shared_hooks_shortcuts_ts-ui_packages_code-view-shared_utilities_web-wo-02859b-e6fbcb70050b.js.map