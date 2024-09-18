"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_ref-selector_RefSelector_tsx"],{50736:(e,t,r)=>{r.d(t,{_:()=>a,d:()=>SearchIndex});var a,n=r(74572),i=r(51528);let{getItem:s,setItem:c,removeItem:l}=(0,n.A)("localStorage",{throwQuotaErrorsOnSet:!0});!function(e){e.Branch="branch",e.Tag="tag"}(a||(a={}));let SearchIndex=class SearchIndex{render(){this.selector.render()}async fetchData(){try{if(!this.isLoading||this.fetchInProgress)return;if(!this.bootstrapFromLocalStorage()){this.fetchInProgress=!0,this.fetchFailed=!1;let e=await fetch(`${this.refEndpoint}?type=${this.refType}`,{headers:{Accept:"application/json"}});await this.processResponse(e)}this.isLoading=!1,this.fetchInProgress=!1,this.render()}catch(e){this.fetchInProgress=!1,this.fetchFailed=!0}}async processResponse(e){if(this.emitStats(e),!e.ok){this.fetchFailed=!0;return}let t=e.clone(),r=await e.json();this.knownItems=r.refs,this.cacheKey=r.cacheKey,this.flushToLocalStorage(await t.text())}emitStats(e){if(!e.ok){(0,i.i)({incrementKey:"REF_SELECTOR_BOOT_FAILED"},!0);return}switch(e.status){case 200:(0,i.i)({incrementKey:"REF_SELECTOR_BOOTED_FROM_UNCACHED_HTTP"});break;case 304:(0,i.i)({incrementKey:"REF_SELECTOR_BOOTED_FROM_HTTP_CACHE"});break;default:(0,i.i)({incrementKey:"REF_SELECTOR_UNEXPECTED_RESPONSE"})}}search(e){let t;if(this.searchTerm=e,""===e){this.currentSearchResult=this.knownItems;return}let r=[],a=[];for(let n of(this.exactMatchFound=!1,this.knownItems))if(!((t=n.indexOf(e))<0)){if(0===t){e===n?(a.unshift(n),this.exactMatchFound=!0):a.push(n);continue}r.push(n)}this.currentSearchResult=[...a,...r]}bootstrapFromLocalStorage(){let e=s(this.localStorageKey);if(!e)return!1;let t=JSON.parse(e);return t.cacheKey===this.cacheKey&&"refs"in t?(this.knownItems=t.refs,this.isLoading=!1,(0,i.i)({incrementKey:"REF_SELECTOR_BOOTED_FROM_LOCALSTORAGE"}),!0):(l(this.localStorageKey),!1)}async flushToLocalStorage(e){try{c(this.localStorageKey,e)}catch(t){if(t.message.toLowerCase().includes("quota")){this.clearSiblingLocalStorage(),(0,i.i)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_OVERFLOWED"});try{c(this.localStorageKey,e)}catch(e){e.message.toLowerCase().includes("quota")&&(0,i.i)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_GAVE_UP"})}}else throw t}}clearSiblingLocalStorage(){for(let e of Object.keys(localStorage))e.startsWith(SearchIndex.LocalStoragePrefix)&&l(e)}clearLocalStorage(){l(this.localStorageKey)}get localStorageKey(){return`${SearchIndex.LocalStoragePrefix}:${this.nameWithOwner}:${this.refType}`}constructor(e,t,r,a,n){this.knownItems=[],this.currentSearchResult=[],this.exactMatchFound=!1,this.searchTerm="",this.isLoading=!0,this.fetchInProgress=!1,this.fetchFailed=!1,this.refType=e,this.selector=t,this.refEndpoint=r,this.cacheKey=a,this.nameWithOwner=n}};SearchIndex.LocalStoragePrefix="ref-selector"},59008:(e,t,r)=>{r.d(t,{I:()=>s});var a=r(96540),n=r(59840),i=r(47831);function s(e,t,r=[]){let s=(0,a.useCallback)(e,r),c=(0,a.useContext)(i.xd),l=(0,a.useRef)(c===i.O8.ClientRender),[o,h]=(0,a.useState)(()=>c===i.O8.ClientRender?s():t),d=(0,a.useCallback)(()=>{h(s)},[s]);return(0,n.m)(()=>{l.current||h(s),l.current=!1},[s,...r]),[o,d]}},76024:(e,t,r)=>{r.d(t,{F:()=>l});var a,n=r(74848),i=r(75177),s=r(96540),c=r(35822);function l({items:e,itemHeight:t,sx:r,renderItem:a,makeKey:i}){let l=(0,s.useRef)(null),d=(0,s.useCallback)(()=>t,[t]),u=(0,c.z)({parentRef:l,size:e.length,estimateSize:d});return(0,n.jsx)(o,{ref:l,sx:r,virtualizer:u,children:u.virtualItems.map(t=>(0,n.jsx)(h,{virtualRow:t,children:a(e[t.index])},i(e[t.index])))})}let o=s.forwardRef(function({children:e,sx:t,virtualizer:r},a){return(0,n.jsx)(i.A,{ref:a,sx:t,children:(0,n.jsx)(i.A,{sx:{height:r.totalSize,width:"100%",position:"relative"},children:e})})});function h({children:e,virtualRow:t}){return(0,n.jsx)(i.A,{sx:{position:"absolute",top:0,left:0,width:"100%",height:`${t.size}px`,transform:`translateY(${t.start}px)`},children:e})}try{l.displayName||(l.displayName="FixedSizeVirtualList")}catch{}try{(a=VirtualListContainerInner).displayName||(a.displayName="VirtualListContainerInner")}catch{}try{h.displayName||(h.displayName="ItemContainer")}catch{}},32906:(e,t,r)=>{r.d(t,{z:()=>i});var a=r(74848),n=r(75177);function i({text:e,search:t,hideOverflow:r=!1,overflowWidth:i=0}){let s=(function(e,t){if(!t)return[e];let r=e.toLowerCase().split(t.toLowerCase());if(r.length<2)return[e];let a=0,n=[];for(let i of r)n.push(e.substring(a,a+i.length)),a+=i.length,n.push(e.substring(a,a+t.length)),a+=t.length;return n})(e,t).map((e,t)=>t%2==1?(0,a.jsx)("strong",{className:"color-fg-default",children:e},t):e),c=i?`${i}px`:void 0;return(0,a.jsx)(n.A,{sx:{maxWidth:c,overflow:r?"hidden":"visible",textOverflow:"ellipsis",whiteSpace:"nowrap",color:t.length?"fg.muted":"fg.default"},children:s})}try{i.displayName||(i.displayName="HighlightedText")}catch{}},58143:(e,t,r)=>{r.d(t,{aH:()=>q,PI:()=>Y,Qe:()=>Z,JJ:()=>X});var a=r(74848),n=r(60499),i=r(55847),s=r(65481),c=r(83056),l=r(59857),o=r(16823),h=r(75177),d=r(117),u=r(87330),f=r(67749),x=r(38553),m=r(30729),p=r(58354),y=r(96540),g=r(97156),b=r(59008),j=r(26886),C=r(40961);function S({isOpen:e,onDismiss:t,onConfirm:r}){let[n]=(0,b.I)(()=>document.body,null,[g.XC?.body]);return n?(0,C.createPortal)((0,a.jsxs)(j.A,{isOpen:e,onDismiss:t,children:[(0,a.jsx)(j.A.Header,{children:"Create branch"}),(0,a.jsxs)(h.A,{sx:{p:3},children:[(0,a.jsx)("span",{children:"A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?"}),(0,a.jsxs)(h.A,{sx:{display:"flex",justifyContent:"flex-end",mt:3},children:[(0,a.jsx)(i.Q,{onClick:t,children:"Cancel"}),(0,a.jsx)(i.Q,{variant:"danger",onClick:r,sx:{ml:2},children:"Create"})]})]})]}),document.body):null}try{S.displayName||(S.displayName="CheckTagNameDialog")}catch{}var R=r(28784);async function w(e,t){let r=new FormData;r.set("value",t);let a=await (0,R.DI)(e,{method:"POST",body:r,headers:{Accept:"application/json"}});return!!a.ok&&!!await a.text()}async function T(e,t,r){let a=new FormData;a.set("name",t),a.set("branch",r);let n=await (0,R.DI)(e,{method:"POST",body:a,headers:{Accept:"application/json"}});if(n.ok)return{success:!0,name:(await n.json()).name};try{let{error:e}=await n.json();if(e)return{success:!1,error:e};throw Error("Unknown response from create branch API")}catch{return{success:!1,error:"Something went wrong."}}}var A=r(85349),k=r(51452);function N(e){let{hotKey:t,onOpenChange:r,size:n,displayCommitish:s,refType:c,children:o,preventClosing:d,inputRef:u,overlayOpen:f,onOverlayChange:x,focusTrapEnabled:m=!0,buttonClassName:g,allowResizing:b,useFocusZone:j}=e,C=e.idEnding?`-${e.idEnding}`:`-${Date.now()}`,S=(0,y.useRef)(`branch-picker${C}`),R=(0,y.useCallback)(e=>{x(e),r?.(e)},[r,x]),w=(0,y.useMemo)(()=>m?{initialFocusRef:u}:{initialFocusRef:u,disabled:!0},[m,u]);return(0,a.jsx)(A.T,{open:f,overlayProps:{role:"dialog",width:"medium"},onOpen:()=>R(!0),onClose:()=>!d&&R(!1),renderAnchor:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Q,{...e,"data-hotkey":t,size:n,sx:{svg:{color:"fg.muted"},display:"flex",minWidth:b?0:void 0,"> span":{width:"inherit"}},trailingVisual:l.TriangleDownIcon,"aria-label":`${s} ${c}`,"data-testid":"anchor-button",id:S.current,className:g,children:(0,a.jsxs)(h.A,{sx:{display:"flex",width:"100%"},children:[(0,a.jsx)(h.A,{sx:{mr:1,color:"fg.muted"},children:"tag"===c?(0,a.jsx)(l.TagIcon,{size:"small"}):(0,a.jsx)(l.GitBranchIcon,{size:"small"})}),(0,a.jsx)(h.A,{sx:{fontSize:1,minWidth:0,maxWidth:b?void 0:125,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},className:"ref-selector-button-text-container",children:(0,a.jsxs)(p.A,{sx:{minWidth:0},children:["\xa0",s]})})]})}),(0,a.jsx)("button",{hidden:!0,"data-hotkey":t,onClick:()=>R(!0),"data-hotkey-scope":"read-only-cursor-text-area"})]}),focusTrapSettings:w,focusZoneSettings:j?{bindKeys:k.z0.ArrowAll|k.z0.Tab}:{disabled:!0},children:(0,a.jsx)("div",{"data-testid":"overlay-content","aria-labelledby":S.current,id:"selectPanel",children:o})})}try{N.displayName||(N.displayName="RefSelectorAnchoredOverlay")}catch{}function I({text:e,onClick:t,href:r,sx:n}){let i=!!r,s=(0,a.jsx)(h.A,{sx:{...n},children:e}),c={sx:{minWidth:0}};return i?(0,a.jsx)(o.l.LinkItem,{role:"link",href:r,onClick:()=>t?.(),...c,children:s}):(0,a.jsx)(o.l.Item,{role:"button",onSelect:()=>t?.(),...c,children:s})}try{I.displayName||(I.displayName="RefSelectorFooter")}catch{}var L=r(76024),O=r(67606),v=r(32906);let E=y.memo(function({isCurrent:e,isDefault:t,href:r,gitRef:n,filterText:i,ariaPosInSet:s,ariaSetSize:c,onSelect:l,onClick:h}){let d=!!r,u=(0,a.jsx)(F,{gitRef:n,isDefault:t,isCurrent:e,filterText:i}),f={"aria-checked":e,"aria-posinset":s,"aria-setsize":c,sx:{minWidth:0},onSelect:()=>l?.(n),onClick:()=>h?.(n)};return d?(0,a.jsx)(o.l.LinkItem,{href:r,role:"menuitemradio",...f,children:u}):(0,a.jsx)(o.l.Item,{...f,children:u})}),F=y.memo(function({isCurrent:e,isDefault:t,gitRef:r,filterText:n,showLeadingVisual:i=!0}){return(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsxs)("div",{style:{display:"flex",minWidth:0,alignItems:"flex-end"},children:[i&&(0,a.jsx)(m.A,{icon:l.CheckIcon,"aria-hidden":!0,sx:{pr:1,visibility:e?void 0:"hidden"}}),(0,a.jsx)(v.z,{hideOverflow:!0,search:n,text:r},r)]}),t&&(0,a.jsx)(O.A,{children:"default"})]})});try{E.displayName||(E.displayName="RefItem")}catch{}try{F.displayName||(F.displayName="RefItemContent")}catch{}function _(e){return e.refs.length>20?(0,a.jsx)(z,{...e}):(0,a.jsx)(D,{...e})}function D({refs:e,defaultBranch:t,currentCommitish:r,getHref:n,filterText:i,onSelectItem:s}){return(0,a.jsx)(h.A,{sx:{maxHeight:330,overflowY:"auto"},children:e.map(c=>(0,a.jsx)(E,{href:n?.(c),isCurrent:r===c,isDefault:t===c,filterText:i,gitRef:c,onSelect:s,onClick:s,ariaPosInSet:e.indexOf(c)+1,ariaSetSize:e.length},c))})}function z({refs:e,defaultBranch:t,currentCommitish:r,getHref:n,filterText:i,onSelectItem:s}){return(0,a.jsx)(L.F,{items:e,itemHeight:32,sx:{maxHeight:330,overflowY:"auto"},makeKey:e=>e,renderItem:c=>(0,a.jsx)(E,{href:n?.(c),isCurrent:r===c,isDefault:t===c,filterText:i,gitRef:c,onSelect:s,onClick:s,ariaPosInSet:e.indexOf(c)+1,ariaSetSize:e.length},c)})}try{_.displayName||(_.displayName="RefsList")}catch{}try{D.displayName||(D.displayName="FullRefsList")}catch{}try{z.displayName||(z.displayName="VirtualRefsList")}catch{}var P=r(50736);function B(e,t,r,a,n){return new P.d("branch"===a?P._.Branch:P._.Tag,n,(0,c.SH)({owner:t,repo:r,action:"refs"}),e,`${t}/${r}`)}function K(e,t){return{status:e.fetchFailed?"failed":e.isLoading?"loading":"loaded",refs:e.currentSearchResult,showCreateAction:e.refType===P._.Branch&&t&&e.searchTerm.length>0&&!e.exactMatchFound,searchIndex:e}}function W(e){let t=(0,y.useRef)();return t.current||(t.current=e()),t}function $(e){let{cacheKey:t,owner:r,repo:n,canCreate:i,types:s,hotKey:l,onOpenChange:o,size:h,getHref:d,onBeforeCreate:u,onRefTypeChanged:f,currentCommitish:x,onCreateError:m,onSelectItem:p,closeOnSelect:g,selectedRefType:b,customFooterItemProps:j,buttonClassName:C,allowResizing:R,idEnding:A,useFocusZone:k}=e,[I,L]=(0,y.useState)(""),O=(0,y.useRef)(null),v=(0,y.useRef)(null),E="tree"===b?x.slice(0,7):x,[F,_]=(0,y.useState)(!1),[D,z]=(0,y.useState)(!0),[P,$]=(0,y.useState)(!1),[V,M]=(0,y.useState)(("tree"===b?"branch":b)??(s??X)[0]),G=function(e,t,r,a,n,i){let[s,c]=(0,y.useState)({status:"uninitialized",refs:[],showCreateAction:!1,searchIndex:null}),l=(0,y.useRef)({render:()=>{c(K(h.current,i))}}),o=(0,y.useRef)({render:()=>{c(K(d.current,i))}}),h=W(()=>B(e,t,r,"branch",l.current)),d=W(()=>B(e,t,r,"tag",o.current));return(0,y.useEffect)(()=>{let n=`${t}/${r}`;h.current.nameWithOwner!==n&&(h.current=B(e,t,r,"branch",l.current)),d.current.nameWithOwner!==n&&(d.current=B(e,t,r,"tag",o.current)),async function(){let e="branch"===a?h.current:d.current;e.render(),await e.fetchData(),e.search(""),e.render()}()},[e,t,r,a,h,d]),(0,y.useEffect)(()=>{let e="branch"===a?h.current:d.current;e.search(n),e.render()},[n,a,h,d]),s}(t,r,n,V,I,i),Q=(0,c.SH)({owner:r,repo:n,action:"branches"}),U=(0,c.Fe)({owner:r,repo:n}),J=(0,y.useCallback)(async()=>{u?.(I);let e=await T(Q,I,x);e.success?d&&(G.searchIndex?.clearLocalStorage(),window.location.href=d(e.name)):m?.(e.error)},[u,I,Q,x,d,m,G.searchIndex]),Y=(0,y.useCallback)(async()=>{if(await w(U,I)){$(!0),z(!1);return}$(!1),z(!1),J()},[U,I,J,$]),Z=(0,y.useCallback)(e=>{M(e),f?.(e)},[M,f]);function q(){_(!1)}let ee=(0,y.useCallback)((e,t)=>{p?.(e,t),q()},[p]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N,{refType:V,displayCommitish:E,focusTrapEnabled:D,preventClosing:P,size:h,onOpenChange:o,hotKey:l,inputRef:O,overlayOpen:F,onOverlayChange:_,buttonClassName:C,allowResizing:R,idEnding:A,useFocusZone:k,children:(0,a.jsx)(H,{filterText:I,displayCommitish:E,onFilterChange:L,refType:V,onRefTypeChange:Z,refsState:G,onCreateError:e.onCreateError,showTagWarningDialog:P,setShowTagWarningDialog:$,onCreateBranch:Y,inputRef:O,createButtonRef:v,onSelectItem:ee,closeOnSelect:g,closeRefSelector:q,customFooterItemProps:j,...e,selectedRefType:V})}),P&&(0,a.jsx)(S,{isOpen:P,onDismiss:()=>{$(!1),v.current?.focus()},onConfirm:J})]})}function H({canCreate:e,currentCommitish:t,displayCommitish:r,defaultBranch:n,filterText:i,getHref:s,hideShowAll:c,onSelectItem:f,closeOnSelect:x,closeRefSelector:m,onFilterChange:p,onRefTypeChange:y,owner:g,selectedRefType:b,refsState:j,refType:C,repo:S,types:R,onCreateBranch:w,inputRef:T,createButtonRef:A,customFooterItemProps:k,viewAllJustify:N}){var L;let{refs:O,showCreateAction:v,status:E}=j;return(0,a.jsxs)(o.l,{showDividers:!0,children:[(0,a.jsxs)(h.A,{sx:{borderBottom:"1px solid",borderColor:"border.subtle",pb:2},children:[(0,a.jsxs)(h.A,{sx:{display:"flex",pb:2,px:2,justifyContent:"space-between",alignItems:"center"},children:[(0,a.jsx)(d.A,{as:"h5",sx:{pl:2,fontSize:"inherit"},children:(L=R??X).includes("branch")&&L.includes("tag")?"Switch branches/tags":L.includes("branch")?"Switch branches":L.includes("tag")?"Switch tags":void 0}),(0,a.jsx)(u.K,{unsafeDisableTooltip:!0,"aria-label":"Cancel",variant:"invisible",icon:l.XIcon,sx:{color:"fg.muted"},onClick:m})]}),(0,a.jsx)(V,{defaultText:i,refType:C,canCreate:e,onFilterChange:p,ref:T})]}),(0,a.jsxs)(h.A,{sx:{pt:2,pb:v&&0===O.length?0:2},children:[(R??X).length>1&&(0,a.jsx)(h.A,{sx:{px:2,pb:2},children:(0,a.jsx)(Z,{refType:C,onRefTypeChanged:y,sx:{mx:-2,borderBottom:"1px solid",borderColor:"border.muted","> nav":{borderBottom:"none"}}})}),"loading"===E||"uninitialized"===E?(0,a.jsx)(G,{refType:C}):"failed"===E?(0,a.jsx)(q,{refType:C}):0!==O.length||v?(0,a.jsx)(_,{filterText:i,refs:O,defaultBranch:"branch"===C?n:"",currentCommitish:C===b?t:"",getHref:s,onSelectItem:e=>{f?.(e,C),x&&m()}}):(0,a.jsx)(Q,{})]}),v&&(0,a.jsxs)(a.Fragment,{children:[O.length>0&&(0,a.jsx)(o.l.Divider,{sx:{marginTop:0,backgroundColor:"border.subtle"}}),(0,a.jsx)(J,{displayCommitish:r,newRefName:i,onCreateBranch:w,createButtonRef:A})]}),(!c||k)&&(0,a.jsx)(o.l.Divider,{sx:{marginTop:v?2:0,backgroundColor:"border.subtle"}}),!c&&(0,a.jsx)(U,{justify:N,refType:C,owner:g,repo:S,onClick:m}),k&&(0,a.jsx)(I,{...k,onClick:function(){k?.onClick?.(),m()}})]})}let V=(0,y.forwardRef)(M);function M({refType:e,canCreate:t,onFilterChange:r,defaultText:n},i){return(0,a.jsx)(h.A,{sx:{px:2},children:(0,a.jsx)(f.A,{leadingVisual:l.SearchIcon,value:n,sx:{width:"100%"},placeholder:"tag"===e?"Find a tag...":t?"Find or create a branch...":"Find a branch...",ref:i,onInput:e=>{let t=e.target;t instanceof HTMLInputElement&&r(t.value)}})})}function G({refType:e}){return(0,a.jsx)(h.A,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,a.jsx)(x.A,{size:"medium","aria-label":`Loading ${"branch"===e?"branches":"tags"}...`})})}function Q(){return(0,a.jsx)(h.A,{sx:{p:3,display:"flex",justifyContent:"center"},children:"Nothing to show"})}function U({refType:e,owner:t,repo:r,onClick:n,justify:i="start"}){let s="branch"===e?"branches":"tags";return(0,a.jsx)(o.l.LinkItem,{role:"link",href:(0,c.SH)({owner:t,repo:r,action:s}),onClick:n,sx:{display:"flex",justifyContent:"center"},children:(0,a.jsxs)(h.A,{sx:{display:"flex",justifyContent:i},children:["View all ",s]})})}function J({displayCommitish:e,newRefName:t,onCreateBranch:r,createButtonRef:n}){return(0,a.jsxs)(o.l.Item,{role:"button",onSelect:r,ref:n,children:[(0,a.jsx)(m.A,{icon:l.GitBranchIcon,sx:{mr:2,color:"fg.muted"}}),(0,a.jsx)("span",{children:"Create branch\xa0"}),(0,a.jsx)(p.A,{sx:{fontWeight:600,fontFamily:"monospace"},children:t}),(0,a.jsx)("span",{children:"\xa0from\xa0"}),(0,a.jsx)(p.A,{sx:{fontWeight:600,fontFamily:"monospace"},children:e})]})}try{$.displayName||($.displayName="RefSelectorV1")}catch{}try{H.displayName||(H.displayName="RefSelectorActionList")}catch{}try{V.displayName||(V.displayName="RefTextFilter")}catch{}try{M.displayName||(M.displayName="RefTextFilterWithRef")}catch{}try{G.displayName||(G.displayName="Loading")}catch{}try{Q.displayName||(Q.displayName="RefsZeroState")}catch{}try{U.displayName||(U.displayName="ViewAllRefsAction")}catch{}try{J.displayName||(J.displayName="CreateRefAction")}catch{}let X=["branch","tag"];function Y(e){return(0,a.jsx)($,{...e})}function Z({refType:e,onRefTypeChanged:t,sx:r}){return(0,a.jsxs)(n.A,{sx:{pl:2,...r},"aria-label":"Ref type",children:[(0,a.jsx)(n.A.Link,{as:i.Q,id:"branch-button","aria-controls":"branches",selected:"branch"===e,onClick:()=>t("branch"),sx:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:"Branches"}),(0,a.jsx)(n.A.Link,{as:i.Q,id:"tag-button","aria-controls":"tags",selected:"tag"===e,onClick:()=>t("tag"),sx:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:"Tags"})]})}function q({refType:e}){return(0,a.jsxs)(s.A,{variant:"danger",children:["Could not load ","branch"===e?"branches":"tags"]})}try{Y.displayName||(Y.displayName="RefSelector")}catch{}try{Z.displayName||(Z.displayName="RefTypeTabs")}catch{}try{q.displayName||(q.displayName="LoadingFailed")}catch{}}}]);
//# sourceMappingURL=ui_packages_ref-selector_RefSelector_tsx-d55ac27c89b8.js.map