"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_repos-file-tree-view_repos-file-tree-view_ts-ui_packages_react-core_JsonRoute_tsx"],{84598:(e,t,r)=>{r.d(t,{Z:()=>n});function n({appendQuery:e,retainScrollPosition:t,returnTarget:r}){window.dispatchEvent(new CustomEvent("blackbird_monolith_append_and_focus_input",{detail:{appendQuery:e,retainScrollPosition:t,returnTarget:r}}))}},60333:(e,t,r)=>{r.d(t,{z:()=>WebWorker});let WebWorker=class WebWorker{set onmessage(e){this.worker.onmessage=e}postMessage(e){this.worker.postMessage(e)}terminate(){this.worker.terminate()}constructor(e,t){try{this.worker=new Worker(e)}catch(e){console.warn("Web workers are not available. Please enable web workers to benefit from the improved performance."),this.worker=new MainThreadWorker(t)}}};let MainThreadWorker=class MainThreadWorker{async postMessage(e){if(this.terminated)return;let t={data:this.job({data:e})};this.onmessage?.(t)}terminate(){this.terminated=!0}constructor(e){this.job=e,this.terminated=!1}}},32246:(e,t,r)=>{function n(e){return a(e)[0]}function a(e){let t=[];for(let r of function(){try{return document.cookie.split(";")}catch{return[]}}()){let[n,a]=r.trim().split("=");e===n&&void 0!==a&&t.push({key:n,value:a})}return t}function i(e,t,r=null,n=!1,a="lax"){let i=document.domain;if(null==i)throw Error("Unable to get document domain");i.endsWith(".github.com")&&(i="github.com");let o="https:"===location.protocol?"; secure":"",l=r?`; expires=${r}`:"";!1===n&&(i=`.${i}`);try{document.cookie=`${e}=${t}; path=/; domain=${i}${l}${o}; samesite=${a}`}catch{}}function o(e,t=!1){let r=document.domain;if(null==r)throw Error("Unable to get document domain");r.endsWith(".github.com")&&(r="github.com");let n=new Date(new Date().getTime()-1).toUTCString(),a="https:"===location.protocol?"; secure":"",i=`; expires=${n}`;!1===t&&(r=`.${r}`);try{document.cookie=`${e}=''; path=/; domain=${r}${i}${a}`}catch{}}r.d(t,{OR:()=>a,Ri:()=>n,TV:()=>i,Yj:()=>o})},79584:(e,t,r)=>{r.d(t,{Nq:()=>M,H:()=>h,c2:()=>ea,Uy:()=>P,qn:()=>eh});var n=r(74848),a=r(36560),i=r(64469),o=r(44819),l=r(6978),s=r(59857),c=r(55847),d=r(96540);let u=d.forwardRef(({expanded:e,onToggleExpanded:t,className:r,ariaControls:d,textAreaId:u,useFilesButtonBreakpoint:m=!0,variant:h},p)=>{let{toggleTreeShortcut:f}=(0,o.wk)(),[x]=(0,l.I)(()=>!1,!0,[]);return(0,n.jsxs)(n.Fragment,{children:[m&&(!e||x)&&(0,n.jsx)(c.Q,{"aria-label":"Expand file tree",leadingVisual:s.ArrowLeftIcon,"data-hotkey":f.hotkey,"data-testid":"expand-file-tree-button-mobile",ref:p,onClick:t,variant:h??"invisible",sx:{color:"fg.muted",px:2,display:"none","@media screen and (max-width: 768px)":{display:"block"}},children:"Files"}),(0,n.jsx)(i.L,{dataHotkey:f.hotkey,className:r,expanded:e,alignment:"left",ariaLabel:e?"Collapse file tree":"Expand file tree",tooltipDirection:"se",testid:"file-tree-button",ariaControls:d,ref:p,variant:h,onToggleExpanded:t,sx:{height:"32px",position:"relative",...m?{"@media screen and (max-width: 768px)":{display:!e||x?"none":"flex"}}:{display:"flex"}}}),(0,n.jsx)(a._,{buttonFocusId:u,buttonHotkey:f.hotkey,onButtonClick:t,onlyAddHotkeyScopeButton:!0})]})});u.displayName="ExpandFileTreeButton";var m=r(63702);function h({inputRef:e,onFindFilesShortcut:t,textAreaId:r}){let{sendRepoKeyDownEvent:i}=(0,m.T)(),{findFilesShortcut:l}=(0,o.wk)();return(0,n.jsx)(a._,{buttonFocusId:r,buttonHotkey:l.hotkey,onButtonClick:()=>{t?.(),e?.current?.focus(),i("GO_TO_FILE")}})}try{h.displayName||(h.displayName="FindFilesShortcut")}catch{}var p=r(52666),f=r(34001),x=r(87714),g=r(84626),y=r(60358),w=r(502),b=r(22726),v=r(8104),C=r(52294),j=r(68042),R=r(78478),k=r(56265),I=r(75177),E=r(94977),F=r(87330),S=r(30729),T=r(93653),N=r(42141),A=r(27104);let D=(0,d.createContext)({knownFolders:new Map,dispatchKnownFolders:()=>{}});try{D.displayName||(D.displayName="FileTreeContext")}catch{}var O=r(24660),$=r(15638),L=r(28786),W=r(2474),_=r(72512),G=r(38553);let V=d.createContext({expandAllFolders:{},refreshTree:{},shouldFetchFolders:{}});function M({expandAllFolders:e,refreshTree:t,shouldFetchFolders:r,children:a}){let i=(0,d.useMemo)(()=>({expandAllFolders:e,refreshTree:t,shouldFetchFolders:r}),[e,t,r]);return(0,n.jsx)(V.Provider,{value:i,children:a})}function P(){return d.useContext(V)}try{V.displayName||(V.displayName="FileTreeControlContext")}catch{}try{M.displayName||(M.displayName="FileTreeControlProvider")}catch{}var H=r(65556);function z(e,t,r){e.data.name=e.data.name.slice(e.data.name.lastIndexOf("/")+1,e.data.name.length);let n=t.name.slice(0,t.name.lastIndexOf("/")),a=n.indexOf("/")>-1,i={path:t.path.slice(0,t.path.lastIndexOf("/")),contentType:t.contentType,name:n,hasSimplifiedPath:a},o={items:[e],data:i};return(r.set(i.path,o),a)?z(o,{...i},r):o}function B(e,t,r){if(!e)return{newRootItems:r,rootItemsUpdated:!1};let n=!!e[""]&&U("",t,r,e[""].items);for(let r of Object.keys(e).sort())if(r){let n=t.get(r);n&&(U(r,t,n.items,e[r].items),n.data.totalCount=e[r].totalCount)}return{newRootItems:r,rootItemsUpdated:n}}function U(e,t,r,n){let a=!1;for(let i of n){let n=e?`${e}/${i.name}`:i.name;if(!t.get(n)){let e={items:[],data:{...i}};if(t.set(n,e),i.hasSimplifiedPath){let n=z(e,i,t),o=r.findIndex(e=>e.data.path===n.data.path);-1!==o?n.items.length>r[o].items.length&&(r[o]=n,a=!0):r.push(n)}else r.push(e)}}return a}function q({isActive:e,file:t,onItemSelected:r,getItemUrl:a,selectedItemRef:i,navigate:o,onRenderRow:l,getFileTrailingVisual:c,getFileIcon:u}){let{sendRepoClickEvent:h}=(0,m.T)(),p=d.useRef(null),f=(0,L.Z)({focusRowRef:p,mouseRowRef:p}),x="submodule"===t.data.contentType,g=c?.(t.data),y=d.useCallback(n=>{x?(n.preventDefault(),t.data.submoduleUrl&&(window.location.href=t.data.submoduleUrl)):n.metaKey||n.ctrlKey||1===n.button?(window.open(a(t.data),"_blank"),n.preventDefault()):e?n.preventDefault():(r?.(),h("FILES_TREE.ITEM",{item_path:t.data.path}),o(a(t.data)),n.stopPropagation())},[t.data,a,e,x,o,r,h]);return l?.(),(0,n.jsxs)(_.G.Item,{ref:p,onSelect:y,current:e,id:`${t.data.path}-item`,containIntrinsicSize:e?void 0:"auto 2rem",children:[(0,n.jsx)(_.G.LeadingVisual,{children:u?u(t.data):x?(0,n.jsx)(s.FileSubmoduleIcon,{}):(0,n.jsx)(s.FileIcon,{})}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{ref:i,style:{color:x?"var(--fgColor-accent, var(--color-accent-fg))":void 0},children:t.data.name}),f&&(0,n.jsx)($.m,{"data-testid":`${t.data.name}-item-tooltip`,id:`${t.data.name}-item-tooltip`,contentRef:p,"aria-label":t.data.name,open:!0,direction:"ne"})]}),!!g?.screenReaderText&&(0,n.jsx)("span",{className:"sr-only",children:g.screenReaderText}),!!g?.trailingVisual&&(0,n.jsx)(_.G.TrailingVisual,{children:g.trailingVisual})]})}let K=d.memo(q);function Z({directory:e,isActive:t,isAncestorOfActive:r,leadingPath:a="",onItemSelected:i,dispatchKnownFolders:o,getItemUrl:l,getFetchUrl:s,selectedItemRef:c,navigate:u,onRenderRow:h,getFileTrailingVisual:p,getFileIcon:f,navigateOnClick:x=!0}){let{expandAllFolders:g,shouldFetchFolders:y}=P(),[w,b]=(0,d.useState)(g?.current||r),{sendRepoClickEvent:v}=(0,m.T)(),C=d.useRef(null),j=d.useRef(null),k=(0,L.Z)({focusRowRef:j,mouseRowRef:C}),[I,E,F,S,T,N,A]=function(e,t,r){let[n,a]=d.useState(e.items),[i,o]=d.useState(e.data.totalCount||0),[l,s]=d.useState(!1),[c,u]=d.useState(!1),{safeSetTimeout:m}=(0,H.A)();d.useEffect(()=>{a(e.items)},[e.items]),d.useEffect(()=>{void 0!==e.data.totalCount&&o(e.data.totalCount)},[e.data.totalCount]);let h=d.useCallback(()=>{u(!1)},[]),p=d.useCallback((e,t)=>{let r=e||[...n];a(r.slice(0,100)),m(()=>{a(r),void 0!==t&&o(t)},1)},[n,m]);return[d.useCallback(async()=>{let n=r(e.data),i=new Map;u(!1),s(!0);let l=Date.now(),c=await (0,R.lS)(`${n}?noancestors=1`);try{if(c.ok){let r=await c.json(),n=r.payload.tree.items.map(e=>{let t={items:[],data:{...e},autoExpand:"directory"===e.contentType&&1===r.payload.tree.items.length};return(i.set(e.path,t),e.hasSimplifiedPath)?z(t,e,i):t});t({type:"add",folders:i,processingTime:Date.now()-l}),e.items=n,e.data.totalCount=r.payload.tree.totalCount,n.length>100?p(n,r.payload.tree.totalCount):(a(n),o(r.payload.tree.totalCount))}else u(!0)}catch{u(!0)}s(!1)},[r,e,t,p]),p,n,l,c,h,i]}(e,o,s),D=A-F.length,O=a?`${a}/`:"";(0,d.useEffect)(()=>{g?.current&&!w&&b(!0)},[e,g,w]);let W=d.useCallback(n=>{g?.current&&(g.current=!1),!n||w||S||T||(e.items.length>100?E():0!==e.items.length||t||r||y?.current===!1||I()),n!==w&&b(n)},[g,w,S,T,e.items.length,t,r,y,E,I]),G=d.useCallback(r=>{r.metaKey||r.ctrlKey||1===r.button&&x?(window.open(l(e.data),"_blank"),r.preventDefault()):t?r.preventDefault():(i?.(),v("FILES_TREE.ITEM",{item_path:e.data.path}),x?u(l(e.data)):W?.(!w),r.stopPropagation())},[e.data,l,t,w,u,x,i,W,v]);d.useEffect(()=>{r&&!w&&W?.(!0)},[r]),d.useEffect(()=>{0===e.items.length&&w?W?.(!1):!w&&e.autoExpand&&W?.(!0)},[e.items.length]);let V=d.useCallback(e=>{c&&t&&c(e),C.current=e},[c,t]);return 1===e.items.length&&"directory"===e.items[0].data.contentType?(0,n.jsx)(J,{directoryItems:e.items,leadingPath:O+e.data.name,inheritsActive:t,dispatchKnownFolders:o,onItemSelected:i,selectedItemRef:c,getItemUrl:l,directoryNavigateOnClick:x,getFileTrailingVisual:p,getFileIcon:f}):(h?.(),(0,n.jsxs)(_.G.Item,{ref:j,expanded:w,onExpandedChange:W,current:t,onSelect:G,id:`${e.data.path}-item`,containIntrinsicSize:t?void 0:"auto 2rem",children:[(0,n.jsx)(_.G.LeadingVisual,{children:(0,n.jsx)(_.G.DirectoryIcon,{})}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("span",{ref:V,children:[O,e.data.name]}),k&&(0,n.jsx)($.m,{"data-testid":`${e.data.name}-directory-item-tooltip`,id:`${e.data.name}-directory-item-tooltip`,contentRef:j,"aria-label":`${O}${e.data.name}`,open:!0,direction:"ne"})]}),(0,n.jsx)(_.G.SubTree,{state:S?"loading":T?"error":"done",children:T?(0,n.jsx)(_.G.ErrorDialog,{onRetry:I,onDismiss:N,children:"There was an error loading the folder contents."}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(J,{directoryItems:F,dispatchKnownFolders:o,onItemSelected:i,selectedItemRef:c,getItemUrl:l,directoryNavigateOnClick:x,getFileTrailingVisual:p,getFileIcon:f}),D>0&&(0,n.jsx)(ee,{message:`${D} entries not shown`})]})})]}))}let X=d.memo(Z);function Y({directoryItems:e,leadingPath:t,inheritsActive:r,onItemSelected:a,dispatchKnownFolders:i,selectedItemRef:o,onRenderRow:l,getItemUrl:s,getFileTrailingVisual:c,getFileIcon:u,directoryNavigateOnClick:m=!0}){let{path:h}=(0,O.eu)(),p=(0,y.Z)(),f=(0,W.Z)(),x=d.useRef(f);return(0,n.jsx)(n.Fragment,{children:e.map(e=>{let d=h===e.data.path,f=d||h.startsWith(`${e.data.path}/`);return"directory"===e.data.contentType?(0,n.jsx)(X,{isActive:r||d,isAncestorOfActive:f,onItemSelected:a,leadingPath:t,directory:e,dispatchKnownFolders:i,getItemUrl:s,getFetchUrl:p.getItemUrl,selectedItemRef:f?o:void 0,navigate:x.current,onRenderRow:l,navigateOnClick:m,getFileTrailingVisual:c,getFileIcon:u},e.data.name):(0,n.jsx)(K,{onItemSelected:a,file:e,isActive:d,getItemUrl:s,selectedItemRef:d?o:void 0,navigate:x.current,onRenderRow:l,getFileTrailingVisual:c,getFileIcon:u},e.data.name)})})}let J=d.memo(Y);function Q(e){let{data:t,rootItems:r,setRootItems:a,fetchError:i,processingTime:o,loading:l,onRenderRow:s,getItemUrl:c,getFileTrailingVisual:u,getFileIcon:m}=e,{knownFolders:h,dispatchKnownFolders:p}=(0,d.useContext)(D),{refreshTree:f}=P();d.useEffect(()=>{if(l)return;let e=new Map,n=[];f?.current||(e=new Map(h),n=r.slice());let{newRootItems:i,rootItemsUpdated:s}=B(t,e,n);(i.length>r.length||s||f?.current)&&a(i),(e.size>h.size||f?.current)&&p({type:"set",folders:e,processingTime:o}),f?.current&&(f.current=!1)},[t,l]);let x=d.useCallback(e=>{1===e.button&&e.preventDefault()},[]);return(0,n.jsx)(I.A,{onMouseDown:x,sx:{px:3,pb:2,...e.sx},"data-testid":"repos-file-tree-container",children:l?(0,n.jsx)(I.A,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,n.jsx)(G.A,{"aria-label":"Loading file tree"})}):(0,n.jsx)("nav",{"aria-label":"File Tree Navigation",children:(0,n.jsxs)(_.G,{"aria-label":"Files",children:[i&&(0,n.jsx)(ee,{message:"Some files could not be loaded."}),(0,n.jsx)(J,{directoryItems:r,onItemSelected:e.onItemSelected,dispatchKnownFolders:p,selectedItemRef:e.selectedItemRef,onRenderRow:s,directoryNavigateOnClick:e.directoryNavigateOnClick,getItemUrl:c,getFileTrailingVisual:u,getFileIcon:m})]})})})}function ee({message:e}){return(0,n.jsxs)(_.G.Item,{id:"error-tree-row",children:[(0,n.jsx)(_.G.LeadingVisual,{children:(0,n.jsx)(S.A,{icon:s.AlertFillIcon,sx:{color:"attention.fg"}})}),(0,n.jsx)(I.A,{sx:{color:"fg.muted"},children:e||"Couldn't load."})]})}try{q.displayName||(q.displayName="WrappedFileTreeRow")}catch{}try{K.displayName||(K.displayName="FileTreeRow")}catch{}try{Z.displayName||(Z.displayName="WrappedDirectoryTreeRow")}catch{}try{X.displayName||(X.displayName="DirectoryTreeRow")}catch{}try{Y.displayName||(Y.displayName="WrappedDirectoryContents")}catch{}try{J.displayName||(J.displayName="DirectoryContents")}catch{}try{Q.displayName||(Q.displayName="ReposFileTreeView")}catch{}try{ee.displayName||(ee.displayName="ErrorTreeRow")}catch{}var et=r(84598);function er({sx:e,onClick:t,textAreaId:r}){let{searchShortcut:i}=(0,o.wk)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(F.K,{unsafeDisableTooltip:!0,"aria-label":"Search this repository",icon:s.SearchIcon,"data-hotkey":i.hotkey,sx:{color:"fg.subtle",fontSize:14,fontWeight:"normal",flexShrink:0,...e},size:"medium",onClick:e=>{t?.(),(0,et.Z)({retainScrollPosition:!0,returnTarget:e.target.closest("button")})}}),(0,n.jsx)(a._,{buttonFocusId:r,buttonHotkey:i.hotkey,onButtonClick:()=>{let e=document.getElementById(r);t?.(),(0,et.Z)({retainScrollPosition:!0,returnTarget:e??void 0})},onlyAddHotkeyScopeButton:!0})]})}try{er.displayName||(er.displayName="SearchButton")}catch{}let en=C.Gy.xxxlarge;function ea({collapseTree:e,showTree:t,fileTree:r,treeToggleElement:a,treeToggleRef:i,onItemSelected:o,processingTime:c,searchBoxRef:u,repo:m,path:w,refInfo:O,isFilePath:$,foldersToFetch:L,id:W,onFindFilesShortcut:_,textAreaId:G,getItemUrlOverride:V,headerSx:M,paneSx:P,paneContentsSx:H,treeContainerSx:z,findFileWorkerPath:U,headerContent:q,getFileTrailingVisual:K,getFileIcon:Z,showFindFile:X=!0,directoryNavigateOnClick:Y=!0,showRefSelectorRow:J=!0}){if(X&&void 0===U)throw Error("findFileWorkerPath must be provided when showFindFile is true");let{openPanel:ee}=(0,g.A)(),[et,ea]=d.useState(L.length>0),[el,es]=d.useState(!1),ec=d.useRef([]),ed=d.useRef(null),eu=d.useRef(!1),em=d.useRef(!1),eh=d.useRef(null),{query:ep}=(0,x.JS)(),{codeCenterOption:ef}=(0,j.ud)(),ex=d.useRef(ee),[eg]=(0,l.I)(()=>!1,!0,[]),{getItemUrl:ey}=(0,y.Z)();V&&(ey=V);let ew=[],eb=new Map,ev=d.useRef(et);!ev.current&&r&&(ew=B(r,eb,[]).newRootItems),ev.current=!0;let[eC,ej]=d.useReducer(ei,eb),[eR,ek]=d.useState(ew);d.useEffect(()=>{t&&(!ep||window.innerWidth>=C.Gy.large)||(eh.current=null)},[t,ep]),d.useEffect(()=>{ee&&ex.current!==ee&&window.innerWidth<en&&e({setCookie:!1}),ex.current=ee},[e,ee]);let eI=d.useCallback(async e=>{let t=ey({contentType:"directory",path:e,name:e});try{let n=await (0,R.lS)(`${t}?noancestors=1`);if(n.ok){let t=await n.json(),a={items:t.payload.tree.items,totalCount:t.payload.tree.totalCount};r[e]=a}else es(!0)}catch{es(!0)}ec.current.push(e),ec.current.length===L.length&&ea(!1)},[r,L.length,ey]);d.useEffect(()=>{if(L&&!eu.current)for(let e of L)eI(e);eu.current=!0},[eI,L,eC.size]);let eE=d.useCallback(e=>{t&&(!ep||window.innerWidth>=C.Gy.large)&&ed.current&&e&&(0,k.R)(e,ed.current,{endMargin:window.innerHeight/2,startMargin:window.innerHeight/2,behavior:"auto"})},[ep,t]),eF=d.useCallback(e=>{e&&em.current?em.current=!1:eh.current!==e&&eE(e),eh.current=e},[eE]),eS=d.useCallback(e=>{ed.current=e,window.innerWidth>=en&&eE(eh.current)},[eE]),eT=d.useCallback(e=>{e&&eE(eh.current)},[eE]),{screenSize:eN}=(0,C.lm)(),eA=!eg&&(ee&&eN<en||eN<C.Gy.xlarge)&&eN>=C.Gy.large,eD=d.useCallback(()=>{eA||o(),em.current=!0},[o,eA]),eO=t?{}:{display:"none"},e$=$?w.substring(0,w.lastIndexOf("/")):w,eL=(0,d.useMemo)(()=>({knownFolders:eC,dispatchKnownFolders:ej}),[eC]),eW=d.useMemo(()=>eg?null:(0,A.KF)(),[eg]),e_=d.useCallback(()=>{window.innerWidth>C.Gy.large&&window.innerWidth<C.Gy.xxxxlarge&&e({setCookie:!1})},[e]),eG=(0,n.jsxs)(I.A,{id:W,sx:{maxHeight:"100%",height:"100%",display:"flex",flexDirection:"column","@media screen and (max-width: 768px)":eg?{display:"none"}:void 0,"@media screen and (min-width: 768px)":{maxHeight:"100vh",height:"100vh"},...H},children:[(0,n.jsxs)(I.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",px:3,pb:2,pt:3,...M},children:[q,J&&(0,n.jsxs)(I.A,{sx:{mx:4,display:"flex",width:"100%"},children:[(0,n.jsx)(I.A,{sx:{flexGrow:1},children:(0,n.jsx)(f.R,{buttonClassName:"react-repos-tree-pane-ref-selector width-full ref-selector-class",allowResizing:!0})}),(0,n.jsxs)(I.A,{sx:{ml:2,whiteSpace:"nowrap","&:hover button:not(:hover)":{borderLeftColor:"var(--button-default-borderColor-hover, var(--color-btn-hover-border))"}},children:[O.canEdit&&(0,n.jsx)(E.A,{"aria-label":"Add file",direction:"s",children:(0,n.jsx)(F.K,{unsafeDisableTooltip:!0,"aria-label":"Add file",as:v.N,sx:{color:"fg.subtle",borderTopRightRadius:0,borderBottomRightRadius:0,borderRight:0},icon:s.PlusIcon,to:(0,b.IO)({repo:m,path:e$,commitish:O.name,action:"new"}),onClick:eD})}),(0,n.jsx)(er,{sx:O.canEdit?{borderTopLeftRadius:0,borderBottomLeftRadius:0}:void 0,onClick:e_,textAreaId:G})]})]})]}),O.currentOid&&X&&U&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.default,{commitOid:O.currentOid,findFileWorkerPath:U,onItemSelected:o,searchBoxRef:u,sx:{ml:3,mr:3,mb:"12px","@media screen and (max-width: 768px)":eg?{display:"none"}:void 0}}),(0,n.jsx)(h,{inputRef:u,onFindFilesShortcut:_,textAreaId:G})]}),(0,n.jsx)(eo,{scrollingRef:ed}),(0,n.jsxs)(I.A,{ref:eS,sx:{flexGrow:1,maxHeight:"100% !important",overflowY:"auto","@media screen and (max-width: 768px)":eg?{display:"none"}:void 0,scrollbarGutter:"stable"},children:[eg?O.currentOid&&(0,n.jsx)("div",{className:ep?"react-tree-show-tree-items-on-large-screen":"react-tree-show-tree-items",children:(0,n.jsx)(Q,{data:r,rootItems:eR,selectedItemRef:eF,setRootItems:ek,onItemSelected:eD,processingTime:c,loading:et,fetchError:el,directoryNavigateOnClick:Y,getItemUrl:ey,sx:z,getFileTrailingVisual:K,getFileIcon:Z})}):eW&&(0,n.jsx)(A.bL,{node:eW}),!O.currentOid&&!m.isEmpty&&(0,n.jsxs)(I.A,{sx:{mt:2,mx:4,mb:"12px",fontSize:1,alignItems:"center",color:"danger.fg"},children:[(0,n.jsx)(S.A,{icon:s.AlertFillIcon}),"\xa0Ref is invalid"]})]})]}),eV=eA||ee?{"@media print, screen and (max-width: 1349px) and (min-width: 768px)":{display:"none"}}:{"@media print, screen and (max-width: 1011px) and (min-width: 768px)":{display:"none"}};return(0,n.jsxs)(D.Provider,{value:eL,children:[eW&&(0,n.jsx)(A.oj,{node:eW,children:O.currentOid&&(0,n.jsx)("div",{className:ep?"react-tree-show-tree-items-on-large-screen":"react-tree-show-tree-items",children:(0,n.jsx)(Q,{data:r,directoryNavigateOnClick:Y,rootItems:eR,selectedItemRef:eF,setRootItems:ek,onItemSelected:eD,processingTime:c,loading:et,fetchError:el,getItemUrl:ey,sx:z,getFileTrailingVisual:K,getFileIcon:Z})})}),!t&&ef.enabled&&a&&(0,n.jsx)(I.A,{sx:{position:"absolute",p:3,display:"none","@media screen and (min-width: 1360px)":{display:"block"}},children:a}),(0,n.jsx)(T.O7.Pane,{position:"start",sticky:!0,sx:{minWidth:0,...eO,flexDirection:["column","column","inherit"],"@media screen and (min-width: 768px)":{height:"100vh",maxHeight:"100vh !important"},...eV,...P},padding:"none",width:"large",resizable:!0,widthStorageKey:"codeView.tree-pane-width",divider:{regular:"line",narrow:"none"},children:t&&!eA&&(0,n.jsx)(I.A,{className:eg?ee?"react-tree-pane-contents-3-panel":"react-tree-pane-contents":void 0,children:(0,n.jsx)(n.Fragment,{children:eG})})}),t&&eA&&ex.current===ee&&(0,n.jsx)(N.Ay,{className:eg?ee?"react-tree-pane-overlay-3-panel":"react-tree-pane-overlay":void 0,ref:eT,returnFocusRef:i,onClickOutside:e_,onEscape:e_,top:0,position:"fixed",sx:{...eO,width:"440px",height:"100vh",maxHeight:"100vh",borderTopLeftRadius:0,borderBottomLeftRadius:0},children:(0,n.jsx)(n.Fragment,{children:eG})})]})}function ei(e,t){switch(t.type){case"set":{let r=e?.size>0;return(0,w.BI)("file-tree",{"fetch-count":r?t.folders.size-e.size:t.folders.size,"file-count":t.folders.size,"nav-type":r?"soft":"hard","processing-time":t.processingTime}),t.folders}case"add":{let r=new Map([...e,...t.folders]);return(0,w.BI)("file-tree",{"fetch-count":t.folders.size,"file-count":r.size,"nav-type":"fetch","processing-time":t.processingTime}),r}default:throw Error(`Unknown action type: ${t.type}`)}}function eo({scrollingRef:e}){let[t,r]=d.useState(e.current&&e.current.scrollTop>0);return d.useEffect(()=>{if(e.current){let t=e.current,n=()=>{t&&t.scrollTop>0?r(!0):r(!1)};return t.addEventListener("scroll",n),()=>{t.removeEventListener("scroll",n)}}},[e]),t?(0,n.jsx)(I.A,{sx:{borderBottom:"1px solid",borderColor:"border.default",boxShadow:"0 3px 8px rgba(0, 0, 0, 0.3)"}}):null}try{ea.displayName||(ea.displayName="ReposFileTreePane")}catch{}try{eo.displayName||(eo.displayName="TreeBorder")}catch{}var el=r(22507),es=r(32246),ec=r(80654),ed=r(94686),eu=r(65482),em=r(73729);function eh(e,t,r,a,i,o="fileTreeExpanded",l){let{sendRepoClickEvent:s}=(0,m.T)(),c=(0,ec.i)(),h=(0,es.Ri)(o),p=!(void 0!==ed.XC),f=!c&&h&&"false"!==h.value||c&&r;void 0===f&&(f=!1);let x=(0,d.useRef)(null),g=(0,d.useRef)(null),{screenSize:y}=(0,C.lm)(),[w,b]=(0,d.useState)(f),v=(0,d.useRef)(f),j=(0,d.useRef)(!1),R=(0,d.useRef)(!1),k=(0,d.useCallback)(()=>!(t.current&&window.innerWidth>=en||!t.current&&window.innerWidth>=C.Gy.xlarge),[t]);(0,eu.N)(()=>{let e=k();e||(j.current=!1),b((0,el.q)()&&y<C.Gy.large&&!R.current||(!e||j.current)&&(c&&w||!c&&h?.value!=="false"))},[j,h?.value,y,t,k,c]),(0,eu.N)(()=>{let e=!t.current&&window.innerWidth<C.Gy.xlarge,r=!t.current&&window.innerWidth>=C.Gy.xlarge;e&&v.current&&!(0,el.q)()&&w&&b(!1),r&&v.current&&!w&&b(!0)},[t,y]),(0,eu.N)(()=>{let e=t.current&&window.innerWidth<en,r=t.current&&window.innerWidth>=en;e&&v.current&&!(0,el.q)()&&w&&b(!1),r&&v.current&&!w&&b(!0)},[t]);let I=(0,d.useCallback)(e=>{if(b(!0),k()&&(j.current=!0),e?.setCookie){i?.(!0),v.current=!0;let e=new Date(new Date().getTime()+2592e6).toUTCString();(0,es.TV)(o,"true",e)}e?.focus==="toggleButton"?requestAnimationFrame(()=>x.current?.focus()):e?.focus==="search"&&requestAnimationFrame(()=>g.current?.focus())},[o,2592e6,k,i]),E=(0,d.useCallback)(e=>{if(b(!1),j.current=!1,R.current=!0,e?.setCookie){i?.(!1),v.current=!1;let e=new Date(new Date().getTime()+2592e6).toUTCString();(0,es.TV)(o,"false",e)}e?.focus==="toggleButton"&&requestAnimationFrame(()=>x.current?.focus())},[o,2592e6,i]),F=(0,d.useCallback)(e=>e&&window.innerWidth>=en||!t.current&&window.innerWidth>=C.Gy.xlarge,[t]),S=(0,d.useMemo)(()=>(0,n.jsx)(em.A,{as:"h2",sx:{display:"flex",fontSize:1},children:(0,n.jsx)(u,{expanded:w,ariaControls:e,onToggleExpanded:()=>{s(w?"FILES_TREE.HIDE":"FILES_TREE.SHOW"),w?E({focus:"toggleButton",setCookie:F(t.current)}):I({focus:"toggleButton",setCookie:F(t.current)})},className:void 0!==h||w||p?void 0:"react-tree-toggle-button-with-indicator",ref:x,textAreaId:a,...l})}),[w,e,h,p,a,l,s,E,F,t,I]);return{isTreeExpanded:w,expandTree:I,collapseTree:E,treeToggleElement:S,treeToggleRef:x,searchBoxRef:g}}},28786:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(96540);function a({focusRowRef:e,mouseRowRef:t}){let[r,a]=n.useState(!1);return n.useEffect(()=>{if(e.current&&t.current){let r=()=>{let t=e.current?.querySelector(".PRIVATE_TreeView-item-content-text");t?.scrollWidth!==t?.offsetWidth&&a(!0)};e.current.onfocus=()=>{r()},e.current.onblur=()=>{a(!1)},t.current.onmouseenter=()=>{r()},t.current.onmouseleave=()=>{a(!1)}}},[e,t]),r}},36560:(e,t,r)=>{r.d(t,{_:()=>a});var n=r(74848);function a({buttonFocusId:e,buttonHotkey:t,onButtonClick:r,buttonTestLabel:a,onlyAddHotkeyScopeButton:i}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{hidden:!0,"data-testid":a||"","data-hotkey":t,onClick:r,"data-hotkey-scope":e}),!i&&(0,n.jsx)("button",{hidden:!0,"data-hotkey":t,onClick:r})]})}try{a.displayName||(a.displayName="DuplicateOnKeydownButton")}catch{}},64469:(e,t,r)=>{r.d(t,{L:()=>l});var n=r(74848),a=r(59857),i=r(94977),o=r(87330);let l=r(96540).forwardRef(({expanded:e,testid:t,ariaLabel:r,ariaControls:l,onToggleExpanded:s,sx:c,alignment:d,dataHotkey:u,className:m,tooltipDirection:h,variant:p},f)=>(0,n.jsx)(i.A,{"aria-label":r,id:`expand-button-${t}`,direction:h,children:(0,n.jsx)(o.K,{unsafeDisableTooltip:!0,ref:f,"data-testid":e?`collapse-${t}`:`expand-${t}`,"aria-labelledby":`expand-button-${t}`,"aria-expanded":e,"aria-controls":l,icon:e?"left"===d?a.SidebarExpandIcon:a.SidebarCollapseIcon:"left"===d?a.SidebarCollapseIcon:a.SidebarExpandIcon,sx:{color:"fg.muted",...c},"data-hotkey":u,onClick:e=>{s(e)},variant:p??"invisible",className:m})}));l.displayName="ExpandButton"},52666:(e,t,r)=>{r.r(t),r.d(t,{FileResultRow:()=>V,default:()=>_});var n=r(74848),a=r(87714),i=r(24660),o=r(63702),l=r(60358),s=r(53470),c=r(71518),d=r(22726),u=r(8104),m=r(52294),h=r(2474),p=r(94120),f=r(56265),x=r(59857),g=r(82678),y=r(75177),w=r(65481),b=r(17909),v=r(86519),C=r(85349),j=r(38553),R=r(30729),k=r(69909),I=r(91385),E=r(96540),F=r(60333),S=r(5225);let T=(0,S.A)(I.fN);function N({data:e}){let{query:t,baseList:r,startTime:n}=e,a=t.replaceAll("\\","");return{query:t,list:r.filter(e=>""===a||(0,I.qA)(a,e)&&T(a,e)>0).sort((e,t)=>T(a,t)-T(a,e)),baseCount:r.length,startTime:n}}var A=r(22507),D=r(78478);async function O(e){let t=await (0,D.lS)(e);return t.ok?await t.json():void 0}let $=new Map,L=(0,S.A)(O,{cache:$}),W={excludeDirectories:!1,excludeSeeAllResults:!1};function _({actionListSx:e={},commitOid:t,config:r=W,findFileWorkerPath:u,getItemUrl:x,onRenderRow:j,onItemSelected:R,searchBoxRef:k,sx:I={}}){let{excludeDirectories:S,excludeSeeAllResults:T}=r,{query:D,setQuery:O}=(0,a.JS)(),$=(0,s.t)(),_=E.useRef(null),V=k??_,[M,P]=E.useState(D.length>0),[z,B]=E.useState(!!D),{list:U,directories:q,loading:K,error:Z}=function(e,t,r){let n=(0,s.t)(),[a,i]=(0,E.useState)({list:[],directories:[],loading:!0}),o=(0,d.Cl)({repo:n,commitOid:e,includeDirectories:!r});return(0,E.useEffect)(()=>{let e=!1,r=async()=>{i({list:[],directories:[],loading:!0});let t=await L(o);if(e)return;let r=t?.paths||[],n=t?.directories||[];i({list:r.concat(n).sort(),directories:n,error:!t})};return t&&r(),function(){e=!0}},[o,t,r]),a}(t,M,!!S),{path:X}=(0,i.eu)(),{getUrl:Y}=(0,l.Z)(),{queryText:J,queryLine:Q}=function(e){let t=(e=e.replaceAll(" ","")).indexOf(":");return t>=0?{queryText:e.substring(0,t),queryLine:parseInt(e.substring(t+1),10)}:{queryText:e,queryLine:void 0}}(D),{matches:ee,clearMatches:et}=function(e,t,r,n){let[a,i]=E.useState(),l=E.useRef(""),s=E.useRef(),{sendStats:c}=(0,o.T)(),d=E.useRef(!1),u=E.useCallback(()=>{let e=new F.z(r,N);e.onmessage=({data:e})=>{d.current=!1,i(e.list),l.current=e.query,e.startTime&&c("repository.find-file",{"find-file-base-count":e.baseCount,"find-file-results-count":e.list.length,"find-file-duration-ms":performance.now()-e.startTime})},s.current=e},[c,r]);return E.useEffect(()=>{if(n)return u(),function(){s.current?.terminate()}},[u,n]),E.useEffect(()=>{if(e.length&&t){d.current&&(s.current?.terminate(),u());let r=l.current&&t.startsWith(l.current);d.current=!0,s.current?.postMessage({baseList:r&&a||e,query:t,startTime:performance.now()})}},[e,t,u]),{matches:a,clearMatches:()=>i(void 0)}}(U,J,u,M),{sendRepoClickEvent:er}=(0,o.T)(),en=(0,h.Z)(),[ea,ei]=E.useState(0),[eo,el]=E.useState((0,A.q)()),es=E.useRef(null),ec=E.useRef(null),ed="file-results-list",{sendRepoKeyDownEvent:eu}=(0,o.T)(),{screenSize:em}=(0,m.lm)(),eh=r.useOverlay??em>=m.Gy.large,ep=E.useCallback(()=>{er("FILE_TREE.SEARCH_RESULT_CLICK"),R?.(),B(!1)},[er,R]),ef=(e,t,r)=>x?x(e,t,r):Y({path:e,action:t?"tree":"blob",hash:r}),{containerRef:ex}=(0,g.G)({bindKeys:p.z0.ArrowVertical|p.z0.HomeAndEnd,focusInStrategy:"previous"},[K,Z]);E.useEffect(()=>{D||B(!1)},[D]),E.useEffect(()=>{document.activeElement!==V.current&&eh&&B(!1)},[X,V,eh]);let eg=ee?.slice(0,40)||[],ey=ee&&ee.length>eg.length,ew=(0,n.jsx)(y.A,{sx:{maxHeight:eh?"60vh":"100% !important",overflowY:"auto",scrollbarGutter:"stable",maxWidth:"100vw","@media (max-width: 768px)":{ml:3,mr:2}},children:Z?(0,n.jsx)(w.A,{variant:"danger",className:"m-3",children:"Failed to search"}):(0,n.jsxs)(b.l,{ref:ex,sx:{overflow:"auto",p:eh?2:3,width:"100%",pr:eh?3:0,pt:eh?3:"2px !important",...e},role:"listbox",children:[!K&&eg.map((e,t)=>{let r=q.includes(e),a=ef(e,r,Q?`L${Q}`:"");return(0,n.jsx)(H,{active:e===X,index:t,focused:eo&&ea===t,match:e,onRender:j,query:J,onClick:ep,isDirectory:r,to:a,useOverlay:eh,listRef:ex},e)}),(0,n.jsxs)("div",{className:"m-3 text-center",children:[(0,n.jsx)(G,{loading:K||!ee,visibleResultCount:eg.length,truncated:!!ey}),ey&&!T&&(0,n.jsxs)(n.Fragment,{children:["\xa0",(0,n.jsx)(v.A,{id:"see-all-results-link",className:"focus-visible",ref:es,href:(0,d.Y8)({owner:$.ownerLogin,repo:$.name,searchTerm:`path:${J}`}),sx:eo&&ea===eg.length?{outline:"2px solid var(--focus-outlineColor, var(--color-accent-fg))",outlineOffset:"-2px",boxShadow:"none"}:{},children:"See all results"})]})]})]})});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.A,{ref:ec,sx:{mx:2,ml:3,...I},children:(0,n.jsx)(A.Z,{ariaActiveDescendant:(!eh&&D||eh&&z)&&eo&&ea>-1?ey&&ea===eg.length?"see-all-results-link":`file-result-${ea}`:void 0,ariaExpanded:eh?z:void 0,ariaHasPopup:eh,ariaControls:eh?ed:void 0,ref:V,query:D,onKeyDown:e=>{let{key:t,shiftKey:r,metaKey:n,altKey:a,ctrlKey:i}=e;if(!r&&!n&&!a){if("Escape"===t)D?(eu("FILE_TREE.CANCEL_SEARCH"),O(""),et()):document.activeElement&&document.activeElement.blur();else if(!D)return;else if("Enter"===t)!T&&ey&&ea===eg.length?(en((0,d.Y8)({owner:$.ownerLogin,repo:$.name,searchTerm:`path:${J}`})),R?.()):eg[ea]&&(en(ef(eg[ea],!1,Q?`L${Q}`:"")),B(!1),R?.());else if("ArrowDown"===t||i&&"n"===t){if(!T&&ey&&ea>=eg.length-1){if(ei(eg.length),es.current&&ex.current){let e=(0,c.U)(ex.current);(0,f.R)(es.current,e,{behavior:"instant"})}}else ei(Math.min(ea+1,eg.length-1));e.preventDefault();return}else if("ArrowUp"===t||i&&"p"===t){ei(Math.max(ea-1,0)),e.preventDefault();return}}},onPreload:()=>P(!0),onSearch:e=>{O(e),e?B(!0):(et(),B(!1)),ei(0)},onBlur:e=>{ex.current?.contains(e.relatedTarget)||(B(!1),el(!1))},onFocus:()=>{D&&B(!0),el(!0)},sx:{minWidth:"160px"}})}),eh&&(0,n.jsx)(C.T,{anchorRef:ec,open:eh&&z,renderAnchor:null,onClose:()=>{B(!1)},focusZoneSettings:{disabled:!0},focusTrapSettings:{disabled:!0},width:"xlarge",align:"end",overlayProps:{id:ed,role:"dialog"},children:ew}),!eh&&D&&ew]})}function G({visibleResultCount:e,truncated:t,loading:r}){return(0,n.jsx)("span",{role:"status",className:r||t||0===e?void 0:"sr-only","aria-label":r?"Loading":void 0,children:r?(0,n.jsx)(j.A,{size:"large"}):0===e?"No matches found":t?`First ${e} files shown.`:`Showing ${e} files.`},"results-count-status")}let V=({active:e,focused:t,index:r,match:a,query:i,to:o,isDirectory:l,onClick:s,onRender:d,useOverlay:m,listRef:h})=>{let p=(0,I.Xq)(i,a);d?.();let x=E.useRef(null),g=l?M:P;E.useEffect(()=>{if(t&&x.current&&h?.current){let e=(0,c.U)(h.current);(0,f.R)(x.current,e,{behavior:"instant"})}},[t,h]);let w={};return t&&(w={outline:"none",border:"2 solid",boxShadow:"0 0 0 2px #0969da"}),(0,n.jsx)(b.l.Item,{id:`file-result-${r}`,ref:x,as:u.N,onSelect:s,to:o,active:e,sx:{fontWeight:"normal",":hover":{textDecoration:"none"},mx:"2px",width:"calc(100% - 4px)",...w},role:"option","data-focus-visible-added":t||void 0,tabIndex:m?-1:0,children:(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)("div",{className:"d-flex flex-1 flex-column overflow-hidden",children:(0,n.jsx)(z,{text:a,positionsList:p,sx:{color:"fg.muted"},LeadingIcon:g})}),t&&(0,n.jsx)(y.A,{sx:{pl:1,whiteSpace:"nowrap",color:"fg.muted"},children:`Go to ${l?"folder":"file"}`})]})},a)},M=()=>(0,n.jsx)(R.A,{"aria-label":"Directory",icon:x.FileDirectoryFillIcon,sx:{color:"var(--treeViewItem-leadingVisual-iconColor-rest, var(--color-icon-directory))",mr:2},size:"small"}),P=()=>(0,n.jsx)(R.A,{"aria-label":"File",icon:x.FileIcon,className:"fgColor-muted mr-2",size:"small"}),H=E.memo(V);function z({text:e,positionsList:t,sx:r,LeadingIcon:a}){let i=[],o=0;for(let r of t){if(Number(r)!==r||r<o||r>e.length)continue;let t=e.slice(o,r);t&&i.push(B(t)),o=r+1,i.push((0,n.jsx)(k.A,{as:"mark",className:"text-bold bgColor-transparent fgColor-default",children:e[r]},r))}return i.push(B(e.slice(o))),(0,n.jsx)(y.A,{sx:r,children:(0,n.jsxs)(n.Fragment,{children:[a&&(0,n.jsx)(a,{}),i]})})}function B(e){return e.replaceAll("/","/\u200B")}try{_.displayName||(_.displayName="FileResultsList")}catch{}try{G.displayName||(G.displayName="FileResultsStatus")}catch{}try{V.displayName||(V.displayName="FileResultRow")}catch{}try{M.displayName||(M.displayName="DirectoryIcon")}catch{}try{P.displayName||(P.displayName="FileResultIcon")}catch{}try{H.displayName||(H.displayName="MemoizedFileResultRow")}catch{}try{z.displayName||(z.displayName="HighlightMatch")}catch{}},22507:(e,t,r)=>{r.d(t,{Z:()=>m,q:()=>h});var n=r(74848),a=r(70170),i=r(93748),o=r(63702),l=r(94686),s=r(59857),c=r(44981),d=r(75177),u=r(96540);let m=u.forwardRef(({ariaActiveDescendant:e,ariaControls:t,ariaExpanded:r,ariaHasPopup:l,onBlur:m,onFocus:p,onKeyDown:f,onPreload:x,onSearch:g,query:y,sx:w={}},b)=>{let{sendRepoClickEvent:v}=(0,o.T)(),[C,j]=u.useState(y),R=u.useRef((0,a.s)(e=>g(e),250));u.useEffect(()=>{j(y)},[y]);let k=y?(0,n.jsx)(c.A.Action,{onClick:()=>{v("FILE_TREE.CANCEL_SEARCH"),g("")},icon:s.XCircleFillIcon,"aria-label":"Clear",className:"fgColor-muted"}):void 0;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.A,{autoFocus:h(),ref:b,value:C,onKeyDown:f,onChange:e=>{j(e.target.value),x(),R.current(e.target.value)},sx:{display:"flex",...w},"aria-label":"Go to file","aria-activedescendant":e,role:l?"combobox":void 0,"aria-controls":t,"aria-expanded":r,"aria-haspopup":l?"dialog":void 0,autoCorrect:"off",spellCheck:"false",placeholder:"Go to file",leadingVisual:s.SearchIcon,trailingAction:k,trailingVisual:k?void 0:()=>(0,n.jsx)(i.E,{children:(0,n.jsx)(d.A,{sx:{mr:"-6px"},children:(0,n.jsx)("kbd",{children:"t"})})}),onFocus:e=>{x(),e.target.select(),p?.(e)},onBlur:m,onClick:()=>v("FILE_TREE.SEARCH_BOX")})})});function h(){return"1"===new URLSearchParams(l.fV.search).get("search")}m.displayName="FilesSearchBox"},84626:(e,t,r)=>{r.d(t,{A:()=>m,c:()=>u});var n=r(74848),a=r(23419),i=r(80654),o=r(55202),l=r(52294),s=r(96540);let c=(0,o.A)("localStorage"),d=(0,s.createContext)({openPanel:void 0,setOpenPanel:()=>void 0});function u({children:e,payload:t,openPanelRef:r}){let o="blame"in t,u=(0,a.Hf)(t),m=(0,i.i)(),h=(0,s.useRef)(),[p,f]=(0,s.useState)(()=>{let e=c.getItem("codeNavOpen");if(!m&&""!==e&&null!==e||m&&t.symbolsExpanded)return"codeNav"}),x=(o||u)&&"codeNav"===p?void 0:p;s.useEffect(()=>{r.current=x},[x,r]);let g=(0,s.useCallback)((e,t)=>{f(r=>(r&&h.current&&h.current.focus(),h.current=t,o||u&&"codeNav"===e?void 0:e))},[o,u]);!function(e){let{screenSize:t}=(0,l.lm)(),r=(0,s.useRef)(t);(0,s.useEffect)(()=>{let n=r.current>=l.Gy.large,a=r.current===t;t<l.Gy.large&&(n||a)&&e(void 0),r.current=t},[t,e])}(g);let y=(0,s.useMemo)(()=>({openPanel:x,setOpenPanel:g}),[x,g]);return(0,n.jsx)(d.Provider,{value:y,children:e})}function m(){return(0,s.useContext)(d)}try{d.displayName||(d.displayName="OpenPanelContext")}catch{}try{u.displayName||(u.displayName="OpenPanelProvider")}catch{}},72603:(e,t,r)=>{r.d(t,{a:()=>n});function n({path:e,Component:t,shouldNavigateOnError:r,transitionType:n,children:a}){return{path:e,Component:t,coreLoader:async function({location:e}){let t;try{let r=`${e.pathname}${e.search}`;t=await window.fetch(r,{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest","X-GitHub-Target":"dotcom"}})}catch(e){return{type:r?"route-handled-error":"error",error:{type:"fetchError"}}}if(t.redirected)return{type:"redirect",url:t.url};if(!t.ok)return{type:r?"route-handled-error":"error",error:{type:"httpError",httpStatus:t.status}};try{let e=await t.json();return{type:"loaded",data:e,title:e.title}}catch(e){return{type:r?"route-handled-error":"error",error:{type:"badResponseError"}}}},loadFromEmbeddedData:function({embeddedData:e}){return{data:e,title:e.title}},transitionType:n,children:a}}},68042:(e,t,r)=>{r.d(t,{T2:()=>s,cp:()=>h,ud:()=>f});var n=r(74848),a=r(55202),i=r(96540);let o=(0,a.A)("localStorage"),l="codeView.codeFolding",s="codeView.codeWrapping",c="codeView.centerView",d="codeView.openSymbolsOnClick",u=new Map([[l,"Show code folding buttons"],[s,"Wrap lines"],[c,"Center content"],[d,"Open symbols on click"]]),m=(0,i.createContext)({codeFoldingOption:{},codeWrappingOption:{},codeCenterOption:{},openSymbolsOption:{}}),h=({children:e})=>{let t=p(l,!0),r=p(s,!1),a=p(c,!1),o=p(d,!0),u=(0,i.useMemo)(()=>({codeFoldingOption:t,codeWrappingOption:r,codeCenterOption:a,openSymbolsOption:o}),[t,r,a,o]);return(0,n.jsx)(m.Provider,{value:u,children:e})};function p(e,t){let r=o.getItem(e),[n,a]=(0,i.useState)(()=>r?"true"===r:t),l=u.get(e)||"";return{name:e,enabled:n,setEnabled:a,label:l}}function f(){return(0,i.useContext)(m)}try{m.displayName||(m.displayName="CodeViewOptionsContext")}catch{}try{h.displayName||(h.displayName="CodeViewOptionsProvider")}catch{}}}]);
//# sourceMappingURL=ui_packages_repos-file-tree-view_repos-file-tree-view_ts-ui_packages_react-core_JsonRoute_tsx-9cfed68730c6.js.map