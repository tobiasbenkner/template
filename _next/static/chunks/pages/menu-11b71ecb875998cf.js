(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{6447:function(e,t,n){"use strict";var r=n(3366),i=n(7462),o=n(7294),c=n(5408),a=n(8700),u=n(9707),s=n(9766),l=n(1496),d=n(3616),g=n(5893);const f=["component","direction","spacing","divider","children"];function h(e,t){const n=o.Children.toArray(e).filter(Boolean);return n.reduce(((e,r,i)=>(e.push(r),i<n.length-1&&e.push(o.cloneElement(t,{key:`separator-${i}`})),e)),[])}const b=(0,l.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,i.Z)({display:"flex"},(0,c.k9)({theme:t},(0,c.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,a.hB)(t),i=Object.keys(t.breakpoints.values).reduce(((t,n)=>(null==e.spacing[n]&&null==e.direction[n]||(t[n]=!0),t)),{}),o=(0,c.P$)({values:e.direction,base:i}),u=(0,c.P$)({values:e.spacing,base:i}),l=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${i=n?o[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,a.NA)(r,t)}};var i};n=(0,s.Z)(n,(0,c.k9)({theme:t},u,l))}return n})),m=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiStack"}),o=(0,u.Z)(n),{component:c="div",direction:a="column",spacing:s=0,divider:l,children:m}=o,p=(0,r.Z)(o,f),v={direction:a,spacing:s};return(0,g.jsx)(b,(0,i.Z)({as:c,ownerState:v,ref:t},p,{children:l?h(m,l):m}))}));t.Z=m},3150:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menu",function(){return n(2135)}])},2162:function(e,t,n){"use strict";var r=n(5893),i=n(7357),o=n(7948),c=n(7294),a=function(e){var t=(0,c.createRef)();return(0,c.useEffect)((function(){if(0!==e.backgroundImages.length){var n=0;if(t.current.style.backgroundImage="url(".concat(e.backgroundImages[n],")"),1!==e.backgroundImages.length){for(var r=++n;r<e.backgroundImages.length;r++){(new Image).src=e.backgroundImages[r]}var i=setInterval((function(){var r=e.backgroundImages[n%e.backgroundImages.length];t.current&&(t.current.style.backgroundImage="url(".concat(r,")"),n++)}),3e3);return function(){clearInterval(i)}}}}),[]),(0,r.jsx)(i.Z,{style:{backgroundColor:e.backgroundColor,borderBottom:e.borderBottom,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",transition:"background-image 2s ease-in-out"},height:e.height,ref:t,children:(0,r.jsx)(o.Z,{maxWidth:e.maxWidth,style:{height:"100%",padding:e.padding},children:e.children})})};t.Z=a,a.defaultProps={backgroundColor:"",maxWidth:"lg",py:3,height:"auto",borderBottom:0,backgroundImages:[],padding:"25px",margin:0}},7344:function(e,t,n){"use strict";var r=n(5893),i=(n(7294),n(6447)),o=n(1664),c=n(3321),a=n(15);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}var l=function(e){return(0,r.jsx)(i.Z,{height:e.height,direction:"column",justifyContent:e.justifyContent,alignItems:e.alignItems,spacing:0,children:e.items.map((function(e,t){var n=e.image,i=e.title,u=e.description,l=e.link;return(0,r.jsxs)("div",{style:{width:"100%",textAlign:"center"},children:[n&&(0,r.jsx)("div",{children:(0,r.jsx)("div",{style:{textAlign:n.textAlign,paddingTop:-50},children:(0,r.jsx)("img",{src:n.src,height:n.height,width:n.width})})}),i&&(0,r.jsx)(a.Z,s({},i)),u&&(0,r.jsx)("p",{children:u}),l&&(0,r.jsx)(o.default,{href:l.href,children:(0,r.jsx)(c.Z,{variant:"contained",children:l.label.es})})]},"index-".concat(t))}))})};t.Z=l,l.defaultProps={height:"100%",justifyContent:"space-between",alignItems:"center",items:[]}},15:function(e,t,n){"use strict";var r=n(5893),i=n(5861),o=(n(7294),n(2959));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}var u=function(e){var t=(0,o.Z)().t;return(0,r.jsx)("div",{style:a({width:"100%",textAlign:e.textAlign},e.shadow?{textShadow:"0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black"}:{}),children:(0,r.jsx)(i.Z,{variant:e.variant,color:e.color,children:t(e.text)})})};t.Z=u,u.defaultProps={shadow:!1,color:"",text:{},variant:"h4",textAlign:"center"}},2135:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),i=n(2162),o=function(e){var t=e.title;return(0,r.jsx)("h1",{children:t})},c=n(7344);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function s(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.Z,{borderBottom:1,children:[(0,r.jsx)(o,{title:"This is me!"}),(0,r.jsx)(o,{title:"And this is my cat"}),(0,r.jsx)(c.Z,u({},void 0))]}),(0,r.jsx)(i.Z,{backgroundColor:"red",children:(0,r.jsx)(o,{title:"This is me!"})})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=3150,e(e.s=t);var t}));var t=e.O();_N_E=t}]);