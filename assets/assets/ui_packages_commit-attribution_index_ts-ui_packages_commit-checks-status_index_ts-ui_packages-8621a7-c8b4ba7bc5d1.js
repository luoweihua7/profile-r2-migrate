"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-8621a7"],{80472:(e,t,a)=>{a.d(t,{h:()=>b,j:()=>T});var r=a(74848),o=a(22868),n=a(83056),i=a(75177),l=a(34614);function s(e){return e.path?.startsWith("/apps/")??!1}var c=a(32799);function d({renderTooltip:e,author:t,children:a}){return!1===e?(0,r.jsx)(r.Fragment,{children:a}):(0,r.jsx)(c.m,{text:`commits by ${t.login}`,direction:"se",children:a})}try{d.displayName||(d.displayName="AuthorTooltip")}catch{}var u=a(14744),h=a.n(u),m=a(96540);let p={fontWeight:"bold",fontColor:"fg.default",includeTooltip:!1,avatarSize:void 0},x=(0,m.createContext)(p);function f({authorSettings:e,children:t}){let a=h()(p,e??{});return(0,r.jsx)(x.Provider,{value:a,children:t})}function g(){return(0,m.useContext)(x)||p}try{x.displayName||(x.displayName="AuthorSettingsContext")}catch{}try{f.displayName||(f.displayName="AuthorSettingsProvider")}catch{}var y=a(30631),j=a(52464);let v=["150px","150px","200px"];function C({displayName:e,authorSettings:t}){return(0,r.jsx)(y.A,{title:e,maxWidth:v,inline:!0,children:(0,r.jsx)(j.A,{sx:{fontWeight:t.fontWeight,whiteSpace:"nowrap",color:t.fontColor},children:e})})}try{C.displayName||(C.displayName="AuthorDisplayName")}catch{}function b({author:e,repo:t,sx:a={}}){let c=g();if(!e)return null;let u=(0,r.jsx)(o.r,{"aria-label":`${e.login||"author"}`,src:e.avatarUrl,alt:`${e.login||"author"}`,sx:{mr:2,mt:"-1px",ml:"1px"},size:c.avatarSize,square:s(e)});return(0,r.jsxs)(i.A,{sx:{display:"flex",flexDirection:"row",alignItems:"center",...a},"data-testid":"author-avatar",children:[e.path?(0,r.jsx)(l.A,{href:e.path,"data-testid":"avatar-icon-link","data-hovercard-url":e.login?(0,n.dC)({owner:e.login}):void 0,children:u}):u,e.login?(0,r.jsx)(d,{author:e,renderTooltip:c.includeTooltip,children:(0,r.jsx)(l.A,{muted:!0,href:(0,n.jQ)({repo:t,author:e.login}),"aria-label":`commits by ${e.login}`,"data-hovercard-url":(0,n.dC)({owner:e.login}),sx:{fontWeight:c.fontWeight,whiteSpace:"nowrap",color:c.fontColor,"&:hover":{color:c.fontColor,textDecoration:"underline"}},children:e.login})}):(0,r.jsx)(C,{displayName:e.displayName,authorSettings:c})]})}try{b.displayName||(b.displayName="AuthorAvatar")}catch{}var N=a(16823),k=a(86079);function A({authors:e,repo:t}){let a=e.length,[o,n]=(0,m.useState)(!1),i=(0,m.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.A,{as:"button","aria-label":`Show ${a} authors`,"data-testid":"authors-dialog-anchor",onClick:()=>{n(!0)},sx:{mx:1},ref:i,muted:!0,children:[a," ","people"]}),o&&(0,r.jsx)(k.l,{title:`${a} authors`,onClose:()=>{n(!1),setTimeout(()=>i.current?.focus(),25)},width:"medium",height:a>=12?"small":"auto",renderBody:()=>(0,r.jsx)(N.l,{sx:{overflowY:"auto",py:2},"data-testid":"contributor-dialog-list",children:e.map((e,a)=>(0,r.jsx)(S,{author:e,repo:t},`${e.login}_${a}`))})})]})}function S({author:e,repo:t}){return(0,r.jsxs)(N.l.LinkItem,{sx:{display:"flex",flexDirection:"row",fontSize:1,py:2,color:"fg.default","&:hover":{backgroundColor:"canvas.subtle"}},"data-testid":"contributor-dialog-row",href:(0,n.jQ)({repo:t,author:e.login??""}),children:[(0,r.jsx)(o.r,{src:e.avatarUrl,alt:e.login??e.displayName,sx:{mr:2},"aria-hidden":"true",square:s(e)}),(0,r.jsx)(y.A,{inline:!0,title:e.login??e.displayName??"",children:e.login??e.displayName})]})}try{A.displayName||(A.displayName="AuthorsDialog")}catch{}try{S.displayName||(S.displayName="AuthorRow")}catch{}var w=a(90305);function I({authors:e,onBehalfOf:t}){let a=g();return(0,r.jsxs)(w.A,{children:[e.slice(0,5).map((e,t)=>(0,r.jsx)(o.r,{"data-testid":"commit-stack-avatar",src:e.avatarUrl,alt:e.login??e.displayName,"data-hovercard-url":(0,n.dC)({owner:e.login??""}),square:s(e),size:a.avatarSize},`${e.login}_${t}`)),t&&(0,r.jsx)(o.r,{"data-testid":"commit-stack-avatar",src:t.avatarUrl,alt:t.login??t.displayName,"data-hovercard-url":(0,n.qs)({owner:t.login??""}),square:!0,size:a.avatarSize},`${t.login}_on_behalf_of`)]})}try{I.displayName||(I.displayName="CommitAuthorStack")}catch{}function _({author:e,repo:t,sx:a={}}){let o=g();return e?(0,r.jsx)(i.A,{sx:{display:"flex",flexDirection:"row",alignItems:"center",...a},"data-testid":"author-link",children:e.login?(0,r.jsx)(d,{author:e,renderTooltip:o.includeTooltip,children:(0,r.jsx)(l.A,{muted:!0,href:(0,n.jQ)({repo:t,author:e.login}),"aria-label":`commits by ${e.login}`,"data-hovercard-url":(0,n.dC)({owner:e.login}),sx:{fontWeight:o.fontWeight,whiteSpace:"nowrap",color:o.fontColor,"&:hover":{color:o.fontColor,textDecoration:"underline"}},children:e.login})}):(0,r.jsx)(C,{displayName:e.displayName,authorSettings:o})}):null}try{_.displayName||(_.displayName="AuthorLink")}catch{}var B=a(20053);let D={orgLink:"OrgLink-module__orgLink--pOGLv"};function O({org:e,className:t}){return e?(0,r.jsx)("div",{className:(0,B.$)("d-flex flex-row flex-items-center",t),children:(0,r.jsx)(l.A,{muted:!0,href:e.path,"aria-label":`${e.login}'s org home page`,"data-hovercard-url":(0,n.qs)({owner:e.login}),className:D.orgLink,children:e.login})}):null}try{O.displayName||(O.displayName="OrgLink")}catch{}function W({author:e,repo:t}){return(0,r.jsx)(b,{author:e,repo:t})}function z({author:e,committer:t,committerAttribution:a,onBehalfOf:o,repo:n}){let i=[e];return t&&a&&i.push(t),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{authors:i,onBehalfOf:o}),(0,r.jsx)(_,{author:e,repo:n,sx:{pl:1}})]})}function $({authors:e,onBehalfOf:t,repo:a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{authors:e,onBehalfOf:t}),e.map((t,o)=>(0,r.jsxs)(m.Fragment,{children:[(0,r.jsx)(_,{author:t,repo:a,sx:{pl:1}}),o!==e.length-1&&(0,r.jsx)("span",{className:"pl-1",children:"and"})]},`${t.login}_${o}`))]})}function F({authors:e,onBehalfOf:t,repo:a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{authors:e,onBehalfOf:t}),(0,r.jsx)(A,{authors:e,repo:a})]})}function T({authors:e,committer:t,committerAttribution:a,onBehalfOf:o,repo:n,children:l,includeVerbs:s=!0,authorSettings:c,textVariant:d="default"}){let u=1===e.length&&!a&&!o,h=1===e.length&&(a||o),m=2===e.length&&!a,p=e[0];return(0,r.jsx)(i.A,{sx:{display:"flex",flexDirection:"row",flexWrap:["wrap","wrap","wrap","nowrap"],alignItems:"center"},className:"muted"===d?"color-fg-muted":"",children:(0,r.jsxs)(f,{authorSettings:c,children:[u&&p&&(0,r.jsx)(W,{author:p,repo:n}),h&&p&&(0,r.jsx)(z,{author:p,committer:t,committerAttribution:a,onBehalfOf:o,repo:n}),m&&(0,r.jsx)($,{authors:e,onBehalfOf:o,repo:n}),!u&&!h&&!m&&(0,r.jsx)(F,{authors:e,onBehalfOf:o,repo:n}),(0,r.jsx)(L,{committer:t,committerAttribution:a||!1,includeVerbs:s,repo:n,verbClass:s?"pl-1":""}),o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"pl-1",children:"on behalf of"}),(0,r.jsx)(O,{org:o,className:"pl-1"})]}),l]})})}function L({committer:e,committerAttribution:t,includeVerbs:a,repo:o,verbClass:n}){return e&&e.isGitHub?(0,r.jsx)("span",{className:n,children:a&&"authored"}):t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"pl-1",children:a?"authored and":"and"}),(0,r.jsx)(_,{author:e,repo:o,sx:{pl:1}}),(0,r.jsx)("span",{className:n,children:a&&"committed"})]}):(0,r.jsx)("span",{className:n,children:a&&"committed"})}try{W.displayName||(W.displayName="SingleAuthor")}catch{}try{z.displayName||(z.displayName="AuthorByline")}catch{}try{$.displayName||($.displayName="TwoAuthors")}catch{}try{F.displayName||(F.displayName="MultipleAuthors")}catch{}try{T.displayName||(T.displayName="CommitAttribution")}catch{}try{L.displayName||(L.displayName="AuthoredOrCommitted")}catch{}},1946:(e,t,a)=>{a.d(t,{xC:()=>v,B6:()=>N,ym:()=>S});var r=a(74848),o=a(38621),n=a(55847),i=a(87330),l=a(30729),s=a(94977),c=a(96540),d=a(20053),u=a(75177),h=a(38553),m=a(86079),p=a(22868),x=a(34614),f=a(52464);function g({checkRun:e}){let{icon:t,iconColor:a}=function(e){switch(e){case"check":return{icon:o.CheckIcon,iconColor:"success.fg"};case"dot-fill":return{icon:o.DotFillIcon,iconColor:"attention.fg"};case"stop":return{icon:o.StopIcon,iconColor:"muted.fg"};case"issue-reopened":return{icon:o.IssueReopenedIcon,iconColor:"muted.fg"};case"clock":return{icon:o.ClockIcon,iconColor:"attention.fg"};case"square-fill":return{icon:o.SquareFillIcon,iconColor:"fg.default"};case"skip":return{icon:o.SkipIcon,iconColor:"muted.fg"};case"alert":return{icon:o.AlertIcon,iconColor:"danger.fg"};default:return{icon:o.XIcon,iconColor:"danger.fg"}}}(e.icon),n="in_progress"===e.state;return(0,r.jsxs)(u.A,{"data-testid":"check-run-item",as:"li",sx:{display:"flex",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"border.default",backgroundColor:"canvas.subtle",py:2,pr:3,pl:"12px",alignItems:"center"},children:[(0,r.jsxs)(u.A,{sx:{alignSelf:"center",display:"flex"},children:[n?(0,r.jsx)(u.A,{sx:{height:"16px",width:"16px",minWidth:"16px",alignSelf:"center",mx:"7px"},children:(0,r.jsxs)("svg",{fill:"none",viewBox:"0 0 16 16",className:"anim-rotate","aria-hidden":"true",role:"img",children:[(0,r.jsx)("path",{opacity:".5",d:"M8 15A7 7 0 108 1a7 7 0 000 14v0z",stroke:"#dbab0a",strokeWidth:"2"}),(0,r.jsx)("path",{d:"M15 8a7 7 0 01-7 7",stroke:"#dbab0a",strokeWidth:"2"}),(0,r.jsx)("path",{d:"M8 12a4 4 0 100-8 4 4 0 000 8z",fill:"#dbab0a"})]})}):(0,r.jsx)(l.A,{icon:t,sx:{color:a,margin:"0px 7px",alignSelf:"center"}}),(0,r.jsx)(s.A,{"aria-label":e.avatarDescription,direction:"e",children:(0,r.jsx)(x.A,{href:e.avatarUrl,sx:{mr:2},"aria-label":"Avatar",children:(0,r.jsx)(p.r,{square:!0,src:e.avatarLogo,sx:{backgroundColor:e.avatarBackgroundColor}})})})]}),(0,r.jsxs)(f.A,{sx:{fontSize:"13px",color:"fg.muted"},children:[(0,r.jsxs)(f.A,{sx:{fontWeight:"bold",color:"fg.default",mr:"2px"},children:[e.name," "]}),e.pending?(0,r.jsx)(f.A,{sx:{fontStyle:"italic"},children:e.additionalContext}):e.additionalContext,e.description&&(0,r.jsxs)("span",{children:[" ","- ",e.pending?(0,r.jsx)(f.A,{sx:{fontStyle:"italic"},children:e.description}):e.description]})]}),(0,r.jsx)(x.A,{href:e.targetUrl,sx:{pl:"12px",fontSize:"13px",marginLeft:"auto"},children:"Details"})]})}try{g.displayName||(g.displayName="CheckRunItem")}catch{}function y({checkRuns:e}){return(0,r.jsx)(u.A,{as:"ul",sx:{display:"flex",flexDirection:"column",maxHeight:["230px","380px"],overflow:"auto"},children:e.map((e,t)=>(0,r.jsx)(g,{checkRun:e},t))})}try{y.displayName||(y.displayName="ChecksStatusBadgeFooter")}catch{}function j({checksHeaderState:e}){switch(e){case"SUCCEEDED":return(0,r.jsx)(f.A,{sx:{fontWeight:"bold",fontSize:2},children:"All checks have passed"});case"FAILED":return(0,r.jsx)(f.A,{sx:{color:"var(--fgColor-danger, var(--color-danger-fg))",fontWeight:"bold",fontSize:2},children:"All checks have failed"});case"PENDING":return(0,r.jsx)(f.A,{sx:{color:"var(--fgColor-attention, var(--color-attention-fg))",fontWeight:"bold",fontSize:2},children:"Some checks haven\u2019t completed yet"});default:return(0,r.jsx)(f.A,{sx:{color:"var(--fgColor-danger, var(--color-danger-fg))",fontWeight:"bold",fontSize:2},children:"Some checks were not successful"})}}try{j.displayName||(j.displayName="HeaderState")}catch{}function v(e){let{combinedStatus:t,isOpen:a,onDismiss:o}=e,n=t?(0,r.jsx)(j,{checksHeaderState:t.checksHeaderState}):"Loading...";return a?(0,r.jsx)(m.l,{onClose:o,sx:{overflowY:"auto",backgroundColor:"canvas.default",boxShadow:"none",border:"1px solid",borderColor:"border.default",borderBottom:0},title:n,subtitle:t?t.checksStatusSummary:void 0,width:"xlarge",renderBody:()=>(0,r.jsx)(m.l.Body,{sx:{padding:0},children:t?(0,r.jsx)(y,{checkRuns:t.checkRuns}):(0,r.jsx)(u.A,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,r.jsx)(h.A,{size:"medium"})})})}):null}try{v.displayName||(v.displayName="CheckStatusDialog")}catch{}let C={success:{circled:o.CheckCircleIcon,filled:o.CheckCircleFillIcon,default:o.CheckIcon,color:"var(--bgColor-success-emphasis, var(--color-success-emphasis))"},pending:{circled:o.CircleIcon,filled:o.DotFillIcon,default:o.DotFillIcon,color:"var(--bgColor-attention-emphasis, var(--color-scale-yellow-4))"},failure:{circled:o.XCircleIcon,filled:o.XCircleFillIcon,default:o.XIcon,color:"var(--bgColor-danger-emphasis, var(--color-scale-red-4))"},error:{circled:o.QuestionIcon,filled:o.QuestionIcon,default:o.QuestionIcon,color:"var(--fgColor-muted, var(--color-canvas-subtle))"}};function b({className:e,descriptionText:t,icon:a,iconColor:o,tooltipText:n}){let i=(0,c.useId)(),u=(0,r.jsx)(l.A,{"aria-labelledby":n?i:void 0,icon:a,"aria-label":n?void 0:t||"See all checks",sx:{color:o}});return n&&(u=(0,r.jsx)(s.A,{id:i,"aria-label":n,direction:"e",children:u})),(0,r.jsxs)("span",{className:(0,d.$)(e,"d-flex flex-items-center gap-1"),"data-testid":"checks-status-badge-icon-only",children:[u,t&&(0,r.jsxs)("span",{children:[" ",t]})]})}function N(e){let{statusRollup:t,combinedStatus:a,variant:o="default",disablePopover:l,buttonSx:d,size:u="medium",descriptionText:h="",onWillOpenPopup:m}=e,[p,x]=(0,c.useState)(!1),f=(0,c.useId)(),g=(0,c.useRef)(null),y=C[t],{icon:j,iconColor:N}={icon:y?.[o]||C.error[o],iconColor:y?.color||C.error.color};return"error"===t?(0,r.jsx)(b,{className:l?void 0:"p-1",descriptionText:"?/?",icon:j,iconColor:N,tooltipText:"There was an error retrieving checks status"}):l?(0,r.jsx)(b,{descriptionText:h,icon:j,iconColor:N}):(0,r.jsxs)(r.Fragment,{children:[h?(0,r.jsx)(n.Q,{"data-testid":"checks-status-badge-button",leadingVisual:j,variant:"invisible",size:u,"aria-label":a?.checksStatusSummary??`Status checks: ${t}`,sx:{p:1,color:"fg.default",fontWeight:"normal",svg:{color:N},...d},ref:g,onClick:()=>{m?.(),x(!0)},children:h}):(0,r.jsx)(s.A,{id:f,"aria-label":a?.checksStatusSummary??t,direction:"se",sx:{mr:2},children:(0,r.jsx)(i.K,{unsafeDisableTooltip:!0,"data-testid":"checks-status-badge-icon",icon:j,variant:"invisible",size:u,"aria-labelledby":f,sx:{py:0,px:0,svg:{color:N},":hover:not([disabled])":{bg:"pageHeaderBg"},...d},ref:g,onClick:()=>{m?.(),x(!0)}})}),p&&(0,r.jsx)(v,{combinedStatus:a,isOpen:p,onDismiss:()=>{x(!1),setTimeout(()=>{g.current?.focus()},0)}})]})}try{b.displayName||(b.displayName="IconOnlyStatus")}catch{}try{N.displayName||(N.displayName="ChecksStatusBadge")}catch{}var k=a(83056),A=a(28784);function S(e,t){let[a,r]=(0,c.useState)(),[o,n]=(0,c.useState)();return[a,(0,c.useCallback)(async()=>{if(o!==e&&(n(e),r(void 0),e)){let a=(0,k.vk)(t,e),o=await (0,A.lS)(a);r(await o.json())}},[e,o,t])]}},51848:(e,t,a)=>{let r;a.d(t,{BI:()=>m,Ti:()=>p,lA:()=>h});var o=a(70837),n=a(18679),i=a(74572),l=a(51528);let{getItem:s}=(0,i.A)("localStorage"),c="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.O)("octolytics");delete e.baseContext,r=new n.s(e)}catch(e){}function u(e){let t=(0,o.O)("octolytics").baseContext||{};if(t)for(let[e,a]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=a,delete t[e]);let a=document.querySelector("meta[name=visitor-payload]");for(let[e,r]of(a&&Object.assign(t,JSON.parse(atob(a.content))),new URLSearchParams(window.location.search)))d.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,l.X)().toString(),Object.assign(t,e)}function h(e){r?.sendPageView(u(e))}function m(e,t={}){let a=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=a?{service:a}:{};for(let[e,a]of Object.entries(t))null!=a&&(o[e]=`${a}`);r&&(u(o),r.sendEvent(e||"unknown",u(o)))}function p(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},71312:(e,t,a)=>{a.d(t,{S:()=>l,s:()=>i});var r=a(96540),o=a(51848),n=a(31481);function i(){let e=(0,r.useContext)(n.I);if(!e)throw Error("useAnalytics must be used within an AnalyticsContext");let{appName:t,category:a,metadata:i}=e;return{sendAnalyticsEvent:(0,r.useCallback)((e,r,n={})=>{let l={react:!0,app_name:t,category:a,...i};(0,o.BI)(e,{...l,...n,target:r})},[t,a,i])}}function l(){let{sendAnalyticsEvent:e}=i();return{sendClickAnalyticsEvent:(0,r.useCallback)((t={})=>{e("analytics.click",void 0,t)},[e])}}},92836:(e,t,a)=>{a.d(t,{X:()=>o});var r=a(59008);function o(e){let t=e.join(","),[a]=(0,r.I)(()=>{let e=/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null;return!!e&&t.includes(e)},!1,[t]);return a}},89504:(e,t,a)=>{a.d(t,{d:()=>i,t:()=>l});var r=a(74848),o=a(96540);let n=o.createContext({});function i({repository:e,children:t}){return(0,r.jsxs)(n.Provider,{value:e,children:[" ",t," "]})}function l(){return o.useContext(n)}try{n.displayName||(n.displayName="CurrentRepositoryContext")}catch{}try{i.displayName||(i.displayName="CurrentRepositoryProvider")}catch{}},86584:(e,t,a)=>{a.d(t,{Q:()=>i,i:()=>l});var r=a(74848),o=a(96540);let n=o.createContext(void 0);function i({user:e,children:t}){return(0,r.jsxs)(n.Provider,{value:e,children:[" ",t," "]})}function l(){return o.useContext(n)}try{n.displayName||(n.displayName="CurrentUserContext")}catch{}try{i.displayName||(i.displayName="CurrentUserProvider")}catch{}},56226:(e,t,a)=>{a.d(t,{N:()=>d});var r=a(74848),o=a(96540),n=a(45588),i=a(84976),l=a(92812),s=a(97156),c=a(99523);let d=(0,o.forwardRef)(({to:e,reloadDocument:t,preventAutofocus:a,...d},u)=>{let{routes:h}=(0,o.useContext)(l.B),m=(0,n.o1)(e,s.fV.pathname).pathname;return t=t??!(0,n.ue)(h,m),(0,r.jsx)(i.N_,{to:e,...d,state:a?{[c.V]:!0,...d.state}:d.state,reloadDocument:t,ref:u})});d.displayName="Link";let u=(0,o.forwardRef)(function({to:e,reloadDocument:t,preventAutofocus:a,...d},u){let{routes:h}=(0,o.useContext)(l.B),m=(0,n.o1)(e,s.fV.pathname).pathname;return t=t??!(0,n.ue)(h,m),(0,r.jsx)(i.k2,{to:e,...d,state:a?{[c.V]:!0,...d.state}:d.state,reloadDocument:t,ref:u})});try{u.displayName||(u.displayName="NavLink")}catch{}}}]);
//# sourceMappingURL=ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-8621a7-1a6064db735c.js.map