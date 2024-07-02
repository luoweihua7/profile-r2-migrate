"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["notifications-subscriptions-menu","vendors-node_modules_primer_react_lib-esm_FeatureFlags_FeatureFlags_js-node_modules_primer_re-bae5990","vendors-node_modules_primer_react_lib-esm_FeatureFlags_FeatureFlags_js-node_modules_primer_re-abc8bf","vendors-node_modules_primer_react_lib-esm_FeatureFlags_FeatureFlags_js-node_modules_primer_re-bae5991"],{79903:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(58081),a=r(71893),o=r(50919),i=r(42483),s=r(15173),l=r(31171),c=r(52116),d=r(24189),u=r(97011),p=r(77047);function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let m=()=>null,f=a.ZP.div.withConfig({displayName:"Dialog__DialogBase",componentId:"sc-13rdxb7-0"})(["box-shadow:",";border-radius:",";position:fixed;top:0;left:50%;transform:translateX(-50%);max-height:80vh;z-index:999;margin:10vh auto;background-color:",";width:",";outline:none;@media screen and (max-width:750px){width:100dvw;margin:0;border-radius:0;height:100dvh;}",";"],(0,c.U2)("shadows.shadow.large"),(0,c.U2)("radii.2"),(0,c.U2)("colors.canvas.default"),e=>e.narrow?"320px":e.wide?"640px":"440px",s.Z),b=(0,a.ZP)(i.Z).withConfig({displayName:"Dialog__DialogHeaderBase",componentId:"sc-13rdxb7-1"})(["border-radius:"," "," 0px 0px;border-bottom:1px solid ",";display:flex;@media screen and (max-width:750px){border-radius:0px;}",";"],(0,c.U2)("radii.2"),(0,c.U2)("radii.2"),(0,c.U2)("colors.border.default"),s.Z);function g({theme:e,children:t,backgroundColor:r="canvas.subtle",...a}){return n.Children.toArray(t).every(e=>"string"==typeof e)&&(t=n.createElement(u.Z,{fontSize:1,fontWeight:"bold"},t)),n.createElement(b,h({theme:e,p:3,backgroundColor:r},a),t)}g.displayName="DialogHeader";let y=a.ZP.span.withConfig({displayName:"Dialog__Overlay",componentId:"sc-13rdxb7-2"})(["&:before{position:fixed;top:0;right:0;bottom:0;left:0;display:block;cursor:default;content:' ';background:transparent;z-index:99;background:",";}"],(0,c.U2)("colors.primer.canvas.backdrop")),v=(0,n.forwardRef)(({children:e,onDismiss:t=m,isOpen:r,initialFocusRef:a,returnFocusRef:i,...s},c)=>{let u=(0,n.useRef)(null),b=(0,n.useRef)(null);(0,l.z)(c,b);let g=(0,n.useRef)(null),v=()=>{t(),i&&i.current&&i.current.focus()},{getDialogProps:x}=(0,d.Z)({modalRef:b,onDismiss:v,isOpen:r,initialFocusRef:a,closeButtonRef:g,returnFocusRef:i,overlayRef:u});return r?n.createElement(n.Fragment,null,n.createElement(y,{ref:u}),n.createElement(f,h({tabIndex:-1,ref:b,role:"dialog","aria-modal":"true"},s,x()),n.createElement(o.h,{icon:p.b0D,ref:g,onClick:v,sx:{position:"absolute",top:"8px",right:"16px"},"aria-label":"Close",variant:"invisible"}),e)):null});g.propTypes={...i.Z.propTypes},g.displayName="Dialog.Header",v.displayName="Dialog";var x=Object.assign(v,{Header:g})},12485:(e,t,r)=>{r.d(t,{T:()=>s});var n=r(58081),a=r(60536),o=r(83253),i=r(32604);function s({children:e,flags:t}){let r=(0,n.useMemo)(()=>o.D.merge(i.N,o.D.create(t)),[t]);return n.createElement(a.p.Provider,{value:r},e)}s.displayName="FeatureFlags"},75308:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(58081),a=r(71893),o=r(52116),i=r(31171),s=r(15173);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let c=a.ZP.h2.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-1c1dgg0-0"})(["font-weight:",";font-size:",";margin:0;",";"],(0,o.U2)("fontWeights.bold"),(0,o.U2)("fontSizes.5"),s.Z),d=(0,n.forwardRef)(({as:e="h2",...t},r)=>{let a=n.useRef(null);return(0,i.z)(r,a),n.createElement(c,l({as:e},t,{ref:a}))});d.displayName="Heading"},73290:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(58081),a=r(71893),o=r(99278),i=r(52116),s=r(31171),l=r(15173);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let d=(0,o.system)({hoverColor:{property:"color",scale:"colors"}}),u=a.ZP.a.withConfig({displayName:"Link__StyledLink",componentId:"sc-14289xe-0"})(["color:",";text-decoration:none;text-decoration:",";[data-a11y-link-underlines='true'] &[data-inline='true']{text-decoration:underline;}&:hover{text-decoration:",";",";}&:is(button){display:inline-block;padding:0;font-size:inherit;white-space:nowrap;cursor:pointer;user-select:none;background-color:transparent;border:0;appearance:none;}",";"],e=>e.muted?(0,i.U2)("colors.fg.muted")(e):(0,i.U2)("colors.accent.fg")(e),e=>e.underline?"underline":void 0,e=>e.muted?"none":"underline",e=>e.hoverColor?d:e.muted?`color: ${(0,i.U2)("colors.accent.fg")(e)}`:"",l.Z),p=(0,n.forwardRef)(({as:e="a",...t},r)=>{let a=n.useRef(null);return(0,s.z)(r,a),n.createElement(u,c({as:e,"data-inline":t.inline},t,{ref:a}))});p.displayName="Link"},8677:(e,t,r)=>{r.d(t,{ZP:()=>b,qK:()=>h,qs:()=>f});var n=r(71893),a=r(58081),o=r(69848),i=r(52116),s=r(10791),l=r(31171),c=r(41905),d=r(15173),u=r(8386);function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let h={xsmall:"192px",small:"256px",medium:"320px",large:"432px",xlarge:"600px",auto:"auto",initial:"auto","fit-content":"fit-content"},m={small:"256px",medium:"320px",large:"480px",xlarge:"640px",xxlarge:"960px",auto:"auto"},f=n.ZP.div.withConfig({displayName:"Overlay__StyledOverlay",componentId:"sc-51280t-0"})(["background-color:",";box-shadow:",";position:absolute;min-width:192px;max-width:",";height:",";max-height:",";width:",";border-radius:12px;overflow:",";animation:overlay-appear ","ms ",";@keyframes overlay-appear{0%{opacity:0;}100%{opacity:1;}}visibility:var(--styled-overlay-visibility);:focus{outline:none;}@media (forced-colors:active){outline:solid 1px transparent;}",";"],(0,i.U2)("colors.canvas.overlay"),(0,i.U2)("shadows.overlay.shadow"),e=>e.maxWidth&&m[e.maxWidth],e=>h[e.height||"auto"],e=>e.maxHeight&&h[e.maxHeight],e=>m[e.width||"auto"],e=>e.overflow?e.overflow:"hidden",200,(0,i.U2)("animation.easeOutCubic"),d.Z),b=a.forwardRef(({onClickOutside:e,role:t="none",initialFocusRef:r,returnFocusRef:n,ignoreClickRefs:d,onEscape:h,visibility:m="visible",height:b="auto",width:g="auto",top:y,left:v,right:x,bottom:_,anchorSide:w,portalContainerName:C,preventFocusOnOpen:S,position:j,...E},R)=>{let k=(0,a.useRef)(null);(0,l.z)(R,k);let{theme:N}=(0,u.Fg)(),A=parseInt((0,i.U2)("space.2")(N).replace("px","")),O=(0,i.U2)("animation.easeOutCubic")(N);return(0,s.I)({overlayRef:k,returnFocusRef:n,onEscape:h,ignoreClickRefs:d,onClickOutside:e,initialFocusRef:r,preventFocusOnOpen:S}),(0,a.useEffect)(()=>{var e;"initial"===b&&null!==(e=k.current)&&void 0!==e&&e.clientHeight&&(k.current.style.height=`${k.current.clientHeight}px`)},[b]),(0,o.Z)(()=>{var e;let{x:t,y:r}=function(e){return null!=e&&e.endsWith("bottom")?{x:0,y:-1}:null!=e&&e.endsWith("top")?{x:0,y:1}:null!=e&&e.endsWith("right")?{x:-1,y:0}:null!=e&&e.endsWith("left")?{x:1,y:0}:{x:0,y:0}}(w);(t||r)&&null!==(e=k.current)&&void 0!==e&&e.animate&&"hidden"!==m&&k.current.animate({transform:[`translate(${A*t}px, ${A*r}px)`,"translate(0, 0)"]},{duration:200,easing:O})},[w,A,O,m]),a.createElement(c.h,{containerName:C},a.createElement(f,p({height:b,width:g,role:t},E,{ref:k,style:{...void 0===v&&void 0===x?{left:0}:{left:v},right:x,top:y,bottom:_,position:j,"--styled-overlay-visibility":m}})))})},74121:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(58081),a=r(71893),o=r(15173),i=r(67215),s=r(42483),l=r(14543);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let d={small:"16px",medium:"32px",large:"64px"};function u({size:e="medium",srText:t="Loading","aria-label":r,...a}){let o=d[e],u=null!==t&&void 0===r,p=(0,l.M)();return n.createElement(s.Z,{as:"span",sx:{display:"inline-flex"}},n.createElement("svg",c({height:o,width:o,viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,"aria-label":null!=r?r:void 0,"aria-labelledby":u?p:void 0},a),n.createElement("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"2",vectorEffect:"non-scaling-stroke"}),n.createElement("path",{d:"M15 8a7.002 7.002 0 00-7-7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"})),u?n.createElement(i.T,{as:"span",id:p},t):null)}u.displayName="Spinner";let p=(0,a.ZP)(u).withConfig({displayName:"Spinner__StyledSpinner",componentId:"sc-1knt686-0"})(["@keyframes rotate-keyframes{100%{transform:rotate(360deg);}}animation:rotate-keyframes 1s linear infinite;",""],o.Z);p.displayName="Spinner"},52116:(e,t,r)=>{r.d(t,{CW:()=>d,U2:()=>c,l$:()=>p});var n=r(50056),a=r(99278),o=r(65575);let{get:i,compose:s,system:l}=a,c=e=>(0,n.R)(e,i(o.Z,e)),d=s(a.Dh,a.$_,a.jf),u=l({whiteSpace:{property:"whiteSpace"}}),p=s(a.cp,u);s(a.Cg,a.AF),a.bK},24189:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(58081),a=r(35048);let o=()=>null;function i(e){var t;return e.tabIndex>=0&&!e.disabled&&!(t=e).hidden&&(!t.type||"hidden"!==t.type)&&(t.offsetWidth>0||t.offsetHeight>0)}function s({modalRef:e,overlayRef:t,isOpen:r,onDismiss:s=o,initialFocusRef:l,closeButtonRef:c}){let d=(0,n.useCallback)(r=>{e.current&&t.current&&r.target instanceof Node&&!e.current.contains(r.target)&&t.current.contains(r.target)&&s()},[s,e,t]);(0,n.useEffect)(()=>{if(r)return document.addEventListener("click",d),()=>{document.removeEventListener("click",d)}},[r,d]),(0,n.useEffect)(()=>{r&&(l&&l.current?l.current.focus():c&&c.current&&c.current.focus())},[r,l,c]);let u=(0,n.useCallback)((t,r)=>{if(e.current){let n=Array.from(e.current.querySelectorAll("*")).filter(i);if(0===n.length)return;t.preventDefault();let a=document.activeElement;if(!a)return;let o=n.indexOf(a),s=1===r?0:n.length-1;return n[o+r]||n[s]}},[e]),p=(0,n.useCallback)(e=>{let t=e.shiftKey?-1:1,r=u(e,t);r&&r.focus()},[u]),h=(0,n.useCallback)(e=>{"Tab"===e.key&&p(e)},[p]);return(0,a.o)(e=>{r&&(s(),e.preventDefault())},[r,s]),{getDialogProps:()=>({onKeyDown:h})}}},31171:(e,t,r)=>{r.d(t,{z:()=>a});var n=r(58081);function a(e,t){(0,n.useImperativeHandle)(e,()=>t.current)}},67215:(e,t,r)=>{r.d(t,{T:()=>o});var n=r(71893),a=r(15173);let o=n.ZP.div.withConfig({displayName:"VisuallyHidden",componentId:"sc-1sffg7y-0"})(["&:not(:focus):not(:active):not(:focus-within){clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}",""],a.Z)},50056:(e,t,r)=>{r.d(t,{R:()=>a});var n=r(44547),a=function(e,t){return void 0===t&&(t=null),function(r){return(0,n.U2)(r.theme,e,t)}}},87197:(e,t,r)=>{let n;var a,o,i=r(71901),s=r(48055),l=r(58081),c=r(35732),d=r(79903),u=r(85529),p=r(4675);let h=(n="/notifications/subscribe",async e=>{try{let t=await (0,p.QG)(n,{method:"POST",body:e});if(t.ok)return t;return Error("Failed to update")}catch(e){return e}});var m=r(52972),f=r(97011);!function(e){e.NONE="none",e.WATCHING="watching",e.IGNORING="ignoring",e.CUSTOM="custom"}(a||(a={}));let b={none:"Participating and @mentions",watching:"All Activity",ignoring:"Ignore",custom:"Custom"},g={...b,none:"Participating"},y={none:"Watch",watching:"Unwatch",ignoring:"Stop ignoring",custom:"Unwatch"},v=[{name:b.none,description:"Only receive notifications from this repository when participating or @mentioned.",subscriptionType:"none"},{name:b.watching,description:"Notified of all notifications on this repository.",subscriptionType:"watching"},{name:b.ignoring,description:"Never be notified.",subscriptionType:"ignoring"},{name:b.custom,description:"Select events you want to be notified of in addition to participating and @mentions.",trailingIcon:(0,l.createElement)(u.ArrowRightIcon),subscriptionType:"custom"}],x=e=>e in y?y[e]:"",_=(e,t)=>{let r=x(e),n=g[e];return"ignoring"===e?`${r} in ${t}`:`${r}: ${n} in ${t}`};function w(e){return(0,s.jsx)(m.S,{selectionVariant:"single",children:v.map((t,r)=>(0,s.jsxs)(l.Fragment,{children:[(0,s.jsxs)(m.S.Item,{selected:t.subscriptionType===e.selected,onSelect:()=>e.onSelect(t.subscriptionType),children:[(0,s.jsx)(f.Z,{sx:{fontWeight:"bold"},children:t.name}),(0,s.jsx)(m.S.Description,{variant:"block",children:t.description}),t.trailingIcon?(0,s.jsx)(m.S.TrailingVisual,{children:t.trailingIcon}):null]}),r!==v.length-1?(0,s.jsx)(m.S.Divider,{}):""]},r))})}try{w.displayName||(w.displayName="SubscriptionList")}catch{}var C=r(39752),S=r(99782),j=r(6873),E=r(65379),R=r(88216),k=r(74121);let N={footerContainer:"FooterActions-module__footerContainer--Z9ixI",buttonsContainer:"FooterActions-module__buttonsContainer--lkkwg"};function A(e){let[t,r]=(0,l.useState)(!1),n=(0,l.useCallback)(()=>(e.nextFocusRef?.current?.focus(),!0),[e.nextFocusRef]),a=(0,l.useCallback)(()=>{r(!0)},[]),o=(0,l.useCallback)(()=>{e.onApply(),setTimeout(()=>{e?.checkStatus&&e.checkStatus(a)},600)},[e,a]);return(0,s.jsxs)("div",{className:N.footerContainer,children:[e.showError?(0,s.jsx)(f.Z,{sx:{py:3,pl:3,color:"var(--fgColor-muted, var(--color-fg-muted))"},children:"Error. Please try again."}):null,(0,s.jsxs)("div",{className:N.buttonsContainer,style:e.overrideButtonStyles??{padding:"var(--base-size-16)"},children:[!e.showError&&t?(0,s.jsx)(k.Z,{size:"small",sx:{mr:2}}):null,(0,s.jsx)(R.r,{size:"small",onClick:()=>e.onCancel(),onBlur:t=>{e.disabled&&n(t)},children:"Cancel"}),(0,s.jsx)(R.r,{disabled:e.disabled,variant:"primary",size:"small",onClick:()=>o(),onBlur:n,sx:{ml:2},children:"Apply"})]})]})}try{A.displayName||(A.displayName="FooterActions")}catch{}function O(e){let[t,r]=(0,l.useState)(!1),[n,a]=(0,l.useState)(""),o=e.items.filter(e=>e?.text?.toLowerCase().startsWith(n.toLowerCase())),i=(0,l.useCallback)(()=>{e.applyLabels(),r(!1)},[e]),c=(0,l.useCallback)(()=>{e.resetLabels(),r(!1)},[e]),d=l.memo(T);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(j.b,{title:"Select labels",renderAnchor:t=>0===e.items.length?(0,s.jsx)(E.Z,{text:"Add labels to this repository to filter on them.",direction:"s",children:(0,s.jsx)(d,{anchorProps:t,itemsLength:e.items.length,labelsText:e.labelsText})}):(0,s.jsx)(d,{anchorProps:t,itemsLength:e.items.length,labelsText:e.labelsText}),placeholderText:"Filter labels",open:t,onOpenChange:r,items:o,selected:e.selectedLabels,onSelectedChange:e.onChangeLabels,onFilterChange:a,showItemDividers:!0,overlayProps:{width:"small",height:"medium",maxHeight:"medium"},footer:(0,s.jsx)("div",{style:{width:"100%"},children:(0,s.jsx)(A,{onCancel:c,onApply:i,overrideButtonStyles:{padding:"var(--base-size-8)"}})})})})}let T=({anchorProps:e,itemsLength:t,labelsText:r})=>(0,s.jsx)(R.r,{leadingVisual:u.TagIcon,trailingAction:u.TriangleDownIcon,...e,"aria-label":"Filter labels","aria-describedby":"select-labels","aria-haspopup":"dialog",size:"small",disabled:0===t,children:0===t?"No labels available":(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"color-fg-muted",children:"Labels: "}),(0,s.jsx)("span",{id:"select-labels",children:r})]})});try{O.displayName||(O.displayName="FilterLabels")}catch{}try{(o=ButtonFilter).displayName||(o.displayName="ButtonFilter")}catch{}let P=e=>{let t=I(e,2);if(e.length>=2){if(2===e.length)return L(e);let r=I(e,3);if(r.length>30)return`${t.slice(0,30)}... +${e.length-2} more`;{let t=e.length>3?` +${e.length-3} more`:"";return`${r}${t}`}}if(1!==e.length)return"All";{let t=e[0]?.text||"";return t.length>30?`${t.slice(0,30)}...`:t}},L=e=>{let t=e[0]?.text||"",r=I(e,2);return r.length>30?t.length>25?`${t.slice(0,25)}... +1 more`:`${r.slice(0,30)}...`:r},I=(e,t)=>e.slice(0,t).map(e=>e.text).join(", "),F=e=>{switch(e){case"PullRequest":return"Pull requests";case"SecurityAlert":return"Security alerts";default:return`${e}s`}},$={filterContainer:"ThreadList-module__filterContainer--eNebD",threadContent:"ThreadList-module__threadContent--Ry8II",threadRow:"ThreadList-module__threadRow--lx6FW"};function D(e){let[t,r]=(0,l.useState)(e.appliedThreads),[n,a]=(0,l.useState)(e.appliedLabels),[o,i]=(0,l.useState)(e.appliedLabels),[c,d]=(0,l.useState)(P(e.appliedLabels));(0,l.useEffect)(()=>{e.appliedLabels.length>0&&!t.includes("Issue")&&r([...t,"Issue"])},[]);let u=(0,l.useCallback)(e=>{t&&t.includes(e)?r(t.filter(t=>t!==e)):r([...t,e])},[t]),p=(0,l.useCallback)(()=>{e.applyThreads(t)},[e,t]),h=(0,l.useCallback)(e=>{i(e),d(P(e))},[]),m=(0,l.useCallback)(()=>{a(o)},[o]),b=(0,l.useCallback)(()=>{i(n),d(P(n))},[n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:$.threadContent,children:e.subscribableThreadTypes.map((r,n)=>(0,s.jsxs)("div",{className:$.threadRow,style:n===e.subscribableThreadTypes.length-1?{}:{borderBottom:"1px solid var(--borderColor-default, var(--color-border-default))"},children:[(0,s.jsxs)(C.Z,{children:[(0,s.jsx)(S.Z,{checked:t.includes(r.name),onChange:()=>u(r.name)}),(0,s.jsx)(C.Z.Label,{children:F(r.name)})]}),r.enabled?null:(0,s.jsxs)(f.Z,{as:"p",sx:{fontSize:"12px",m:0,color:"var(--fgColor-muted)",ml:"var(--base-size-24)"},children:[F(r.name)," are not enabled for this repository"]}),(0,s.jsx)("div",{"aria-live":"polite",children:"Issue"===r.name&&e.showLabelSubscriptions&&t.includes("Issue")?(0,s.jsx)("div",{className:$.filterContainer,children:(0,s.jsx)(O,{filterAction:p,items:e.repoLabels,labelsText:c,onChangeLabels:h,selectedLabels:o,applyLabels:m,resetLabels:b})}):null})]},n))}),(0,s.jsx)(A,{onCancel:e.cancelMenuCallback,onApply:()=>e.saveThreads(t,o),showError:e.showError,disabled:0===t.length||e.isSavingThreads})]})}try{D.displayName||(D.displayName="ThreadList")}catch{}let Z={watchCounter:"NotificationsSubscriptionsMenu-module__watchCounter--nAbhU",watchButton:"NotificationsSubscriptionsMenu-module__watchButton--ifxlS"};function M({repositoryId:e,repositoryName:t,watchersCount:r,subscriptionType:n,subscribableThreadTypes:o,repositoryLabels:i,showLabelSubscriptions:p}){let m=(0,l.useMemo)(()=>i.map(e=>({id:e.id,text:e.name,selected:e.subscribed})),[i]),f=m.filter(e=>e.selected),b=(0,l.useMemo)(()=>o.map(e=>e.subscribed||"Issue"===e.name&&p&&f.length>0?e.name:null).filter(e=>null!==e),[o,p,f]),[g,y]=(0,l.useState)(!1),[v,C]=(0,l.useState)(!1),[S,j]=(0,l.useState)(b.length>0?a.CUSTOM:n),[E,R]=(0,l.useState)(S),[k,N]=(0,l.useState)(b),[A,O]=(0,l.useState)(f),[T,P]=(0,l.useState)(!1),L=(0,l.createRef)(),I=(0,l.useCallback)(()=>{C(!1),j(E)},[E]),F=(0,l.useCallback)(async(t,r)=>{P(!0),N(t),O(r),R(a.CUSTOM);let n=new FormData;n.set("do","custom"),n.set("repository_id",e),t.map(e=>{n.append("thread_types[]",e)}),r.map(e=>{e.id&&n.append("labels[]",e.id.toString())}),(await h(n)).ok?(C(!1),P(!1)):y(!0)},[e]),$=(0,l.useCallback)(async t=>{let r=new FormData;t===a.IGNORING?r.set("do","ignore"):t===a.WATCHING?r.set("do","subscribed"):(t===a.NONE||t===a.CUSTOM&&0===k.length)&&r.set("do","included"),r.append("thread_types[]",""),r.set("repository_id",e),await h(r)},[e,k]),M=(0,l.useCallback)(e=>{e===a.CUSTOM?(C(!0),j(a.CUSTOM)):(j(e),R(e),$(e),N([]))},[j]),U=(0,l.useCallback)(e=>{N(e)},[N]),B=(0,l.useMemo)(()=>_(S,t),[S,t]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"d-md-none",children:(0,s.jsxs)(c.P,{children:[(0,s.jsx)(c.P.Button,{"data-testid":"notifications-subscriptions-menu-button-desktop",leadingVisual:S===a.IGNORING?u.BellSlashIcon:u.EyeIcon,trailingAction:null,className:Z.watchButton,"aria-label":B,children:(0,s.jsx)(s.Fragment,{})}),(0,s.jsx)(c.P.Overlay,{width:"medium",children:(0,s.jsx)(w,{selected:S,onSelect:M})})]})}),(0,s.jsx)("div",{className:"d-none d-md-block",children:(0,s.jsxs)(c.P,{children:[(0,s.jsxs)(c.P.Button,{"data-testid":"notifications-subscriptions-menu-button-mobile",size:"small",leadingVisual:S===a.IGNORING?u.BellSlashIcon:u.EyeIcon,sx:{'&& [data-component="leadingVisual"]':{color:"var(--fgColor-muted, var(--color-fg-muted))"}},"aria-label":B,children:[x(S),(0,s.jsx)("span",{className:`ml-2 Counter rounded-3 ${Z.watchCounter}`,children:r})]}),(0,s.jsx)(c.P.Overlay,{width:"medium",children:(0,s.jsx)(w,{selected:S,onSelect:M})})]})}),(0,s.jsx)(d.Z,{returnFocusRef:L,isOpen:v,onDismiss:()=>I(),"aria-labelledby":"header",children:(0,s.jsxs)("div",{"data-testid":"inner",children:[(0,s.jsxs)(d.Z.Header,{id:"header",children:["Subscribe to events for ",t]}),(0,s.jsx)(D,{subscribableThreadTypes:o,showLabelSubscriptions:p,cancelMenuCallback:I,appliedThreads:k,repoLabels:m,subscribedThreads:b,applyThreads:U,appliedLabels:A,saveThreads:F,showError:g,isSavingThreads:T})]})})]})}try{M.displayName||(M.displayName="NotificationsSubscriptionsMenu")}catch{}(0,i.t)("notifications-subscriptions-menu",{Component:M})},42842:(e,t,r)=>{r.d(t,{e:()=>DeferredRegistry});let DeferredRegistry=class DeferredRegistry{register(e,t){let r=this.registrationEntries[e];r?r.resolve?.(t):this.registrationEntries[e]={promise:Promise.resolve(t)}}getRegistration(e){var t;return(t=this.registrationEntries)[e]||(t[e]=new n),this.registrationEntries[e].promise}constructor(){this.registrationEntries={}}};let n=class Deferred{constructor(){this.promise=new Promise(e=>{this.resolve=e})}}},85392:(e,t,r)=>{r.d(t,{Ac:()=>o,Z_:()=>i,ev:()=>a});var n=r(58081);function a(e){return((0,n.useEffect)(()=>{let t=e?.anchor;t&&("disabled"in t&&(t.disabled=!1),t.classList.remove("cursor-wait"))},[e]),e)?{reactPartialAnchor:{__wrapperElement:e}}:{}}function o(e){let t=(0,n.useRef)(e.__wrapperElement.anchor||null),[r,a]=(0,n.useState)(!1),o=(0,n.useCallback)(()=>{a(!r)},[r,a]);return(0,n.useEffect)(()=>{t.current&&(t.current.setAttribute("aria-expanded",r.toString()),t.current.setAttribute("aria-haspopup","true"))},[t,r]),i(e,o),{ref:t,open:r,setOpen:a}}function i(e,t){let r=(0,n.useRef)(e.__wrapperElement.anchor);(0,n.useEffect)(()=>{let e=r.current;if(e)return e.addEventListener("click",t),()=>e.removeEventListener("click",t)},[r,t])}},71901:(e,t,r)=>{r.d(t,{t:()=>c});let n=new(r(42842)).e;var a=r(48055),o=r(76006),i=r(46e3),s=r(99611);let l=class ReactPartialElement extends i.S{async getReactNode(e){var t;let{Component:r}=await (t=this.name,n.getRegistration(t)),o=this.closest("react-partial-anchor");return(0,a.jsx)(s.S,{partialName:this.name,embeddedData:e,Component:r,wasServerRendered:this.hasSSRContent,ssrError:this.ssrError,anchorElement:o})}constructor(...e){super(...e),this.nameAttribute="partial-name"}};function c(e,t){n.register(e,t)}l=function(e,t,r,n){var a,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}([o.Ih],l)},50543:(e,t,r)=>{r.d(t,{Z:()=>s});let{getItem:n,setItem:a,removeItem:o}=(0,r(83376).Z)("localStorage"),i="REACT_PROFILING_ENABLED",s={enable:()=>a(i,"true"),disable:()=>o(i),isEnabled:()=>!!n(i)}},4675:(e,t,r)=>{function n(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let r={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:r})}function a(e,t){let r={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},a=t?.body?JSON.stringify(t.body):void 0;return n(e,{...t,body:a,headers:r})}function o(e,t={}){let r={...t.headers,IS_REACT:"true"};return n(e,{...t,headers:r})}r.d(t,{QG:()=>n,aU:()=>o,v5:()=>a})},99611:(e,t,r)=>{r.d(t,{S:()=>m});var n=r(48055),a=r(58081),o=r(90534),i=r(12599),s=r(71964),l=r(89250),c=r(79438);function d({children:e,history:t}){let[r,o]=(0,a.useState)({location:t.location});return(0,c.g)(()=>t.listen(o),[t]),(0,n.jsx)(l.F0,{location:r.location,navigator:t,children:e})}try{d.displayName||(d.displayName="PartialRouter")}catch{}var u=r(69415),p=r(23832),h=r(85392);function m({partialName:e,embeddedData:t,Component:r,wasServerRendered:l,ssrError:c,anchorElement:m}){let f=a.useRef(),b=globalThis.window;f.current||(f.current=b?(0,p.l)({window:b}):(0,i.PP)({initialEntries:[{pathname:"/"}]}));let g=f.current,y=(0,h.ev)(m);return(0,n.jsx)(o.R,{appName:e,wasServerRendered:l,children:(0,n.jsx)(s.i,{history:g,routes:[],children:(0,n.jsxs)(d,{history:g,children:[(0,n.jsx)(r,{...t.props,...y}),(0,n.jsx)(u.P,{ssrError:c})]})})})}try{m.displayName||(m.displayName="PartialEntry")}catch{}},46e3:(e,t,r)=>{r.d(t,{S:()=>ReactBaseElement});var n=r(48055),a=r(76006),o=r(27876),i=r(58081),s=r(50543),l=r(14993),c=r(49437);function d(e,t,r,n){var a,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}let u=RegExp("Minified React error #(?<invariant>\\d+)");let ReactBaseElement=class ReactBaseElement extends HTMLElement{get name(){return this.getAttribute(this.nameAttribute)}get embeddedDataText(){let e=this.embeddedData?.textContent;if(!e)throw Error(`No embedded data provided for react element ${this.name}`);return e}get hasSSRContent(){return"true"===this.getAttribute("data-ssr")}connectedCallback(){this.renderReact()}disconnectedCallback(){this.root?.unmount(),this.root=void 0}async renderReact(){if(!this.reactRoot)throw Error("No react root provided");let e={createRoot:o.s,hydrateRoot:o.a};s.Z.isEnabled()&&(e=await this.getReactDomWithProfiling());let t=JSON.parse(this.embeddedDataText),r=this.ssrError?.textContent,a=await this.getReactNode(t),l=(0,n.jsx)(i.StrictMode,{children:a});if(r&&this.logSSRError(r),this.hasSSRContent){let t=this.querySelector('style[data-styled="true"]');t&&document.head.appendChild(t),this.root=e.hydrateRoot(this.reactRoot,l,{onRecoverableError:e=>{if(!(e instanceof Error))return;let t=u.exec(e.message),r=String(t?.groups?.invariant);(0,c.b)({incrementKey:"REACT_HYDRATION_ERROR",incrementTags:{appName:this.name,invariant:r}})}}),t&&requestIdleCallback(()=>{t.parentElement?.removeChild(t)})}else this.root=e.createRoot(this.reactRoot),this.root.render(l);this.classList.add("loaded")}getReactDomWithProfiling(){return r.e("react-profiling").then(r.t.bind(r,19547,19))}logSSRError(e){if(l.t[e])return console.error("SSR failed with an expected error:",l.t[e]);try{let t=JSON.parse(e),r=function(e){if(!e.stacktrace)return"";let t="\n ";return e.stacktrace.map(e=>{let{function:r,filename:n,lineno:a,colno:o}=e,i=`${t} at ${r} (${n}:${a}:${o})`;return t=" ",i}).join("\n")}(t);console.error("Error During Alloy SSR:",`${t.type}: ${t.value}
`,t,r)}catch{console.error("Error During Alloy SSR:",e,"unable to parse as json")}}};d([a.fA],ReactBaseElement.prototype,"embeddedData",void 0),d([a.fA],ReactBaseElement.prototype,"ssrError",void 0),d([a.fA],ReactBaseElement.prototype,"reactRoot",void 0);try{u.displayName||(u.displayName="REACT_INVARIANT_ERROR_REGEX")}catch{}},76006:(e,t,r)=>{let n;r.d(t,{Lj:()=>f,Ih:()=>w,P4:()=>u,nW:()=>N,fA:()=>x,GO:()=>_});let a=new WeakSet,o=new WeakMap;function i(e=document){if(o.has(e))return o.get(e);let t=!1,r=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&t.target instanceof Element)d(t.target);else if("childList"===t.type&&t.addedNodes.length)for(let e of t.addedNodes)e instanceof Element&&s(e)});r.observe(e,{childList:!0,subtree:!0,attributeFilter:["data-action"]});let n={get closed(){return t},unsubscribe(){t=!0,o.delete(e),r.disconnect()}};return o.set(e,n),n}function s(e){for(let t of e.querySelectorAll("[data-action]"))d(t);e instanceof Element&&e.hasAttribute("data-action")&&d(e)}function l(e){let t=e.currentTarget;for(let r of c(t))if(e.type===r.type){let n=t.closest(r.tag);a.has(n)&&"function"==typeof n[r.method]&&n[r.method](e);let o=t.getRootNode();if(o instanceof ShadowRoot&&a.has(o.host)&&o.host.matches(r.tag)){let t=o.host;"function"==typeof t[r.method]&&t[r.method](e)}}}function*c(e){for(let t of(e.getAttribute("data-action")||"").trim().split(/\s+/)){let e=t.lastIndexOf(":"),r=Math.max(0,t.lastIndexOf("#"))||t.length;yield{type:t.slice(0,e),tag:t.slice(e+1,r),method:t.slice(r+1)||"handleEvent"}}}function d(e){for(let t of c(e))e.addEventListener(t.type,l)}function u(e,t){let r=e.tagName.toLowerCase();if(e.shadowRoot){for(let n of e.shadowRoot.querySelectorAll(`[data-target~="${r}.${t}"]`))if(!n.closest(r))return n}for(let n of e.querySelectorAll(`[data-target~="${r}.${t}"]`))if(n.closest(r)===e)return n}let p=e=>String("symbol"==typeof e?e.description:e).replace(/([A-Z]($|[a-z]))/g,"-$1").replace(/--/g,"-").replace(/^-|-$/,"").toLowerCase(),h=(e,t="property")=>{let r=p(e);if(!r.includes("-"))throw new DOMException(`${t}: ${String(e)} is not a valid ${t} name`,"SyntaxError");return r},m="attr";function f(e,t){v(e,m).add(t)}let b=new WeakSet;function g(e,t){if(b.has(e))return;b.add(e);let r=Object.getPrototypeOf(e),n=r?.constructor?.attrPrefix??"data-";for(let a of(t||(t=v(r,m)),t)){let t=e[a],r=h(`${n}${a}`),o={configurable:!0,get(){return this.getAttribute(r)||""},set(e){this.setAttribute(r,e||"")}};"number"==typeof t?o={configurable:!0,get(){return Number(this.getAttribute(r)||0)},set(e){this.setAttribute(r,e)}}:"boolean"==typeof t&&(o={configurable:!0,get(){return this.hasAttribute(r)},set(e){this.toggleAttribute(r,e)}}),Object.defineProperty(e,a,o),a in e&&!e.hasAttribute(r)&&o.set.call(e,t)}}let y=Symbol.for("catalyst");let CatalystDelegate=class CatalystDelegate{constructor(e){let t=this,r=e.prototype.connectedCallback;e.prototype.connectedCallback=function(){t.connectedCallback(this,r)};let n=e.prototype.disconnectedCallback;e.prototype.disconnectedCallback=function(){t.disconnectedCallback(this,n)};let a=e.prototype.attributeChangedCallback;e.prototype.attributeChangedCallback=function(e,r,n){t.attributeChangedCallback(this,e,r,n,a)};let o=e.observedAttributes||[];Object.defineProperty(e,"observedAttributes",{configurable:!0,get(){return t.observedAttributes(this,o)},set(e){o=e}}),function(e){let t=e.observedAttributes||[],r=e.attrPrefix??"data-",n=e=>h(`${r}${e}`);Object.defineProperty(e,"observedAttributes",{configurable:!0,get:()=>[...v(e.prototype,m)].map(n).concat(t),set(e){t=e}})}(e),function(e){let t=p(e.name).replace(/-element$/,"");try{window.customElements.define(t,e),window[e.name]=customElements.get(t)}catch(e){if(!(e instanceof DOMException&&"NotSupportedError"===e.name))throw e}}(e)}observedAttributes(e,t){return t}connectedCallback(e,t){var r,n;e.toggleAttribute("data-catalyst",!0),customElements.upgrade(e),!function(e){for(let t of e.querySelectorAll("template[data-shadowroot]"))t.parentElement===e&&e.attachShadow({mode:"closed"===t.getAttribute("data-shadowroot")?"closed":"open"}).append(t.content.cloneNode(!0))}(e),g(e),a.add(e),e.shadowRoot&&(s(n=e.shadowRoot),i(n)),s(e),i(e.ownerDocument),t?.call(e),e.shadowRoot&&(s(r=e.shadowRoot),i(r))}disconnectedCallback(e,t){t?.call(e)}attributeChangedCallback(e,t,r,n,a){g(e),"data-catalyst"!==t&&a&&a.call(e,t,r,n)}};function v(e,t){if(!Object.prototype.hasOwnProperty.call(e,y)){let t=e[y],r=e[y]=new Map;if(t)for(let[e,n]of t)r.set(e,new Set(n))}let r=e[y];return r.has(t)||r.set(t,new Set),r.get(t)}function x(e,t){v(e,"target").add(t),Object.defineProperty(e,t,{configurable:!0,get(){return u(this,t)}})}function _(e,t){v(e,"targets").add(t),Object.defineProperty(e,t,{configurable:!0,get(){return function(e,t){let r=e.tagName.toLowerCase(),n=[];if(e.shadowRoot)for(let a of e.shadowRoot.querySelectorAll(`[data-targets~="${r}.${t}"]`))a.closest(r)||n.push(a);for(let a of e.querySelectorAll(`[data-targets~="${r}.${t}"]`))a.closest(r)===e&&n.push(a);return n}(this,t)}})}function w(e){new CatalystDelegate(e)}let C=new Map,S=new Promise(e=>{"loading"!==document.readyState?e():document.addEventListener("readystatechange",()=>e(),{once:!0})}),j=new Promise(e=>{let t=new AbortController;t.signal.addEventListener("abort",()=>e());let r={once:!0,passive:!0,signal:t.signal},n=()=>t.abort();document.addEventListener("mousedown",n,r),document.addEventListener("touchstart",n,r),document.addEventListener("keydown",n,r),document.addEventListener("pointerdown",n,r)}),E={ready:()=>S,firstInteraction:()=>j,visible:e=>new Promise(t=>{let r=new IntersectionObserver(e=>{for(let n of e)if(n.isIntersecting){t(),r.disconnect();return}},{rootMargin:"0px 0px 256px 0px",threshold:.01});for(let t of document.querySelectorAll(e))r.observe(t)})},R=new WeakMap;function k(e){cancelAnimationFrame(R.get(e)||0),R.set(e,requestAnimationFrame(()=>{for(let t of C.keys()){let r=e.matches(t)?e:e.querySelector(t);if(customElements.get(t)||r){let n=r?.getAttribute("data-load-on")||"ready",a=n in E?E[n]:E.ready;for(let e of C.get(t)||[])a(t).then(e);C.delete(t),R.delete(e)}}}))}function N(e,t){C.has(e)||C.set(e,new Set),C.get(e).add(t),k(document.body),n||(n=new MutationObserver(e=>{if(C.size)for(let t of e)for(let e of t.addedNodes)e instanceof Element&&k(e)})).observe(document,{subtree:!0,childList:!0})}}},e=>{var t=t=>e(e.s=t);e.O(0,["react-lib","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_primer_octicons-react_di-b40d97","vendors-node_modules_primer_react_lib-esm_Box_Box_js","vendors-node_modules_primer_react_lib-esm_Button_Button_js","vendors-node_modules_primer_react_lib-esm_TooltipV2_Tooltip_js","vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js","vendors-node_modules_clsx_dist_clsx_m_js-node_modules_primer_react_node_modules_primer_octico-c56103","vendors-node_modules_primer_react_lib-esm_ActionList_index_js","vendors-node_modules_primer_react_lib-esm_Text_Text_js-node_modules_primer_react_lib-esm_Text-7845da","vendors-node_modules_primer_react_lib-esm_FormControl_FormControl_js","vendors-node_modules_primer_react_lib-esm_ActionMenu_ActionMenu_js-node_modules_primer_react_-5b2420","vendors-node_modules_primer_react_lib-esm_SelectPanel_SelectPanel_js","ui_packages_react-core_create-browser-history_ts-ui_packages_safe-storage_safe-storage_ts-ui_-682c2c"],()=>t(87197)),e.O()}]);
//# sourceMappingURL=notifications-subscriptions-menu-52e457f37ff7.js.map