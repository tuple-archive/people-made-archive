(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647,301,877,761,18,931,83,469,609,775,798],{214:function(e,t,s){Promise.resolve().then(s.bind(s,6766)),Promise.resolve().then(s.bind(s,9625)),Promise.resolve().then(s.bind(s,831)),Promise.resolve().then(s.bind(s,5146)),Promise.resolve().then(s.bind(s,7640)),Promise.resolve().then(s.t.bind(s,9463,23))},9625:function(e,t,s){"use strict";s.d(t,{default:function(){return c}});var r=s(8850),i=s(7085),l=s(5642),a=s(5146),n=s(5955);function c(e){let{altText:t,className:s,fill:c,posterImage:o,priority:d,video:u,...h}=e,g=(0,n.useRef)(),m=(0,l.Y)(g,{margin:"-200px",once:!0}),v=o.asset.metadata,f=v.dimensions.width,p=v.dimensions.height,x=v.lqip,b=(0,i.Z)("aspect-var w-full bg-cover object-cover object-center",s),y={"--ratio-x":f,"--ratio-y":p};return d||m?(0,r.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:b,style:y,...h,children:[(0,r.jsx)("div",{className:"sr-only",children:t}),(0,r.jsx)("source",{src:u.asset.url.replaceAll("/","_").replace("https:__","/static/videos/")})]}):(0,r.jsx)(a.default,{ref:g,src:x,alt:null!=t?t:"",width:f,height:p,className:b,style:y,priority:!0,...h})}},831:function(e,t,s){"use strict";s.d(t,{default:function(){return l}});var r=s(8850),i=s(5547);function l(e){let{children:t,...s}=e,[l]=(0,i.Z)({align:"start",slidesToScroll:1,breakpoints:{"(min-width:640px)":{slidesToScroll:2},"(min-width:1024px)":{active:!1}}});return(0,r.jsx)("div",{...s,children:(0,r.jsx)("div",{ref:l,className:"cursor-grab overflow-hidden px-page active:cursor-grabbing lg:cursor-auto lg:px-0 lg:active:cursor-auto",children:(0,r.jsx)("div",{className:"grid auto-cols-[100%] grid-flow-col gap-gutter sm:auto-cols-[calc(50%-var(--space-gutter)/2)] lg:grid-cols-3",children:t})})})}},6766:function(e,t,s){"use strict";s.d(t,{default:function(){return o}});var r=s(8850),i=s(7085),l=s(55),a=s(2260),n=s(5955),c=s(256);function o(e){let{children:t,divisor:s}=e,o=n.Children.toArray(t),d=Math.ceil(o.length/s),u=(0,l.Z)(o,Math.ceil(o.length/d)),h=(0,a.Z)(...u),[g,m]=(0,n.useState)(0);return(0,c.Z)(()=>{m(e=>e+1>d-1?0:e+1)},5e3),(0,r.jsx)("div",{className:"grid grid-cols-3 gap-gutter sm:grid-cols-4 md:grid-cols-6",children:h.map((e,t)=>(0,r.jsx)("div",{className:"grid",children:e.map((e,s)=>(0,r.jsx)("div",{className:(0,i.Z)("col-start-1 row-start-1 transition delay-[var(--delay)] duration-700 [&>*]:w-full",g!==s&&"opacity-0"),style:{"--delay":"".concat(g===s?600+80*t:80*t,"ms")},children:e},s))},t))})}}},function(e){e.O(0,[519,146,982,530,801,744],function(){return e(e.s=214)}),_N_E=e.O()}]);