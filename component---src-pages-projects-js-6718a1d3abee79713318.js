"use strict";(self.webpackChunkempathy_bytes_2023=self.webpackChunkempathy_bytes_2023||[]).push([[853],{2623:function(e,t,a){var n=a(7462),o=a(3366),r=a(7294),i=a(512),l=a(4780),s=a(948),c=a(1657),d=a(1987),m=a(975),u=a(5893);const v=["className","raised"],p=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),Z=r.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiCard"}),{className:r,raised:s=!1}=a,d=(0,o.Z)(a,v),Z=(0,n.Z)({},a,{raised:s}),g=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},m.y,t)})(Z);return(0,u.jsx)(p,(0,n.Z)({className:(0,i.Z)(g.root,r),elevation:s?8:void 0,ref:t,ownerState:Z},d))}));t.Z=Z},975:function(e,t,a){a.d(t,{y:function(){return r}});var n=a(1588),o=a(4867);function r(e){return(0,o.Z)("MuiCard",e)}const i=(0,n.Z)("MuiCard",["root"]);t.Z=i},8492:function(e,t,a){var n=a(7462),o=a(3366),r=a(7294),i=a(512),l=a(4780),s=a(948),c=a(1657),d=a(567),m=a(5893);const u=["className","component"],v=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),p=r.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:r,component:s="div"}=a,p=(0,o.Z)(a,u),Z=(0,n.Z)({},a,{component:s}),g=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},d.N,t)})(Z);return(0,m.jsx)(v,(0,n.Z)({as:s,className:(0,i.Z)(g.root,r),ownerState:Z,ref:t},p))}));t.Z=p},567:function(e,t,a){a.d(t,{N:function(){return r}});var n=a(1588),o=a(4867);function r(e){return(0,o.Z)("MuiCardContent",e)}const i=(0,n.Z)("MuiCardContent",["root"]);t.Z=i},4781:function(e,t,a){var n=a(3366),o=a(7462),r=a(7294),i=a(512),l=a(4780),s=a(1657),c=a(948),d=a(3639),m=a(5893);const u=["children","className","component","image","src","style"],v=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e,{isMediaComponent:n,isImageComponent:o}=a;return[t.root,n&&t.media,o&&t.img]}})((({ownerState:e})=>(0,o.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),p=["video","audio","picture","iframe","img"],Z=["picture","img"],g=r.forwardRef((function(e,t){const a=(0,s.Z)({props:e,name:"MuiCardMedia"}),{children:r,className:c,component:g="div",image:f,src:h,style:C}=a,b=(0,n.Z)(a,u),w=-1!==p.indexOf(g),y=!w&&f?(0,o.Z)({backgroundImage:`url("${f}")`},C):C,E=(0,o.Z)({},a,{component:g,isMediaComponent:w,isImageComponent:-1!==Z.indexOf(g)}),M=(e=>{const{classes:t,isMediaComponent:a,isImageComponent:n}=e,o={root:["root",a&&"media",n&&"img"]};return(0,l.Z)(o,d.a,t)})(E);return(0,m.jsx)(v,(0,o.Z)({className:(0,i.Z)(M.root,c),as:g,role:!w&&f?"img":void 0,ref:t,style:y,ownerState:E,src:w?f||h:void 0},b,{children:r}))}));t.Z=g},3639:function(e,t,a){a.d(t,{a:function(){return r}});var n=a(1588),o=a(4867);function r(e){return(0,o.Z)("MuiCardMedia",e)}const i=(0,n.Z)("MuiCardMedia",["root","media","img"]);t.Z=i},1987:function(e,t,a){var n=a(3366),o=a(7462),r=a(7294),i=a(512),l=a(4780),s=a(1796),c=a(948),d=a(2029),m=a(1657),u=a(3160),v=a(5893);const p=["className","component","elevation","square","variant"],Z=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],!a.square&&t.rounded,"elevation"===a.variant&&t[`elevation${a.elevation}`]]}})((({theme:e,ownerState:t})=>{var a;return(0,o.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,o.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",(0,d.Z)(t.elevation))}, ${(0,s.Fq)("#fff",(0,d.Z)(t.elevation))})`},e.vars&&{backgroundImage:null==(a=e.vars.overlays)?void 0:a[t.elevation]}))})),g=r.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiPaper"}),{className:r,component:s="div",elevation:c=1,square:d=!1,variant:g="elevation"}=a,f=(0,n.Z)(a,p),h=(0,o.Z)({},a,{component:s,elevation:c,square:d,variant:g}),C=(e=>{const{square:t,elevation:a,variant:n,classes:o}=e,r={root:["root",n,!t&&"rounded","elevation"===n&&`elevation${a}`]};return(0,l.Z)(r,u.J,o)})(h);return(0,v.jsx)(Z,(0,o.Z)({as:s,ownerState:h,className:(0,i.Z)(C.root,r),ref:t},f))}));t.Z=g},3160:function(e,t,a){a.d(t,{J:function(){return r}});var n=a(1588),o=a(4867);function r(e){return(0,o.Z)("MuiPaper",e)}const i=(0,n.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);t.Z=i},2029:function(e,t){t.Z=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)}},8607:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(7294),o=a(1360),r=a(2623),i=a(4781),l=a(8492),s=a(1623),c=a(8396),d=a(4160);function m(e){return(0,c.Z)("(min-width:600px)")?n.createElement(r.Z,{sx:{maxWidth:"40vw"}},n.createElement(d.rU,{style:{textDecoration:"none"},to:"/projects"+e.url},n.createElement(s.Z,null,n.createElement(i.Z,{component:"img",img:!0,height:"240",width:"350",objectFit:"cover",src:"https://empathybytes.library.gatech.edu"+e.image,alt:"img"}),n.createElement(l.Z,{className:"collectionCard"},n.createElement("h5",{className:"collectionTitle"},e.title),n.createElement("div",{className:"collectionText",dangerouslySetInnerHTML:{__html:e.body}}))))):n.createElement(r.Z,{sx:{width:"80vw",margin:2}},n.createElement(d.rU,{style:{textDecoration:"none"},to:"/projects"+e.url},n.createElement(s.Z,null,n.createElement(i.Z,{component:"img",img:!0,height:"240",width:"350",objectFit:"cover",src:"https://empathybytes.library.gatech.edu"+e.image,alt:"img"}),n.createElement(l.Z,{className:"collectionCard"},n.createElement("h5",{className:"collectionTitle"},e.title),n.createElement("div",{className:"collectionText",dangerouslySetInnerHTML:{__html:e.body}})))))}var u=a(6651);var v=e=>{let{data:t}=e;const a=(0,c.Z)("only screen and (max-width:700px) and (-webkit-device-pixel-ratio: 2)"),r=t.collections.nodes;return a?n.createElement("div",{className:"gradient_bg"},n.createElement(o.Z,null,n.createElement("div",{className:"projectsContainer"},n.createElement("h1",{className:"projectsTitle"},"Interview Collections"),n.createElement(u.ZP,{container:!0,spacing:2},r.map((e=>n.createElement(m,{title:e.title,image:e.relationships.field_image.uri.url,url:e.path.alias}))))))):n.createElement("div",{className:"gradient_bg"},n.createElement(o.Z,null,n.createElement("div",{className:"projectsContainer"},n.createElement("h1",{className:"projectsTitle"},"Interview Collections"),n.createElement(u.ZP,{container:!0,spacing:4},r.map((e=>n.createElement(u.ZP,{item:!0,xs:6},n.createElement(m,{title:e.title,image:e.relationships.field_image.uri.url,url:e.path.alias,body:e.body.summary}))))))))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-6718a1d3abee79713318.js.map