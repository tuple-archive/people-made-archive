"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[982],{256:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(5955),o=0,i={},u=function(t,e){var n,r=o++;if(i[e])i[e].listeners[r]=t;else{var u=setInterval(function(){for(var t,n=i[e].listeners,r=!1,o=0,u=Object.values(n);o<u.length;o++){var c=u[o];try{c()}catch(e){r=!0,t=e}}if(r)throw t},e);i[e]={ms:e,timer:u,listeners:((n={})[r]=t,n)}}return{bucket:i[e],id:r}},c=function(t){var e=t.bucket,n=t.id;delete e.listeners[n];var r=!1;for(var o in e.listeners){r=!0;break}r||(clearInterval(e.timer),delete i[e.ms])},a=function(t,e){void 0===e&&(e=0);var n=(0,r.useRef)(function(){});(0,r.useEffect)(function(){n.current=t}),(0,r.useEffect)(function(){if(null!==e){var t=u(function(){return n.current()},e);return function(){return c(t)}}},[e])}},7085:function(t,e,n){e.Z=function(){for(var t,e,n=0,r="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=function t(e){var n,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e){if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(r=t(e[n]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r)}return o}(t))&&(r&&(r+=" "),r+=e);return r}},5547:function(t,e,n){n.d(e,{Z:function(){return j}});var r=n(5955);function o(t){return"[object Object]"===Object.prototype.toString.call(t)||Array.isArray(t)}function i(t,e){let n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&JSON.stringify(Object.keys(t.breakpoints||{}))===JSON.stringify(Object.keys(e.breakpoints||{}))&&n.every(n=>{let r=t[n],u=e[n];return"function"==typeof r?`${r}`==`${u}`:o(r)&&o(u)?i(r,u):r===u})}function u(t){return t.concat().sort((t,e)=>t.name>e.name?1:-1).map(t=>t.options)}function c(t){return"number"==typeof t}function a(t){return"string"==typeof t}function l(t){return"boolean"==typeof t}function f(t){return"[object Object]"===Object.prototype.toString.call(t)}function s(t){return Math.abs(t)}function d(t){return Math.sign(t)}function p(t){return y(t).map(Number)}function g(t){return t[m(t)]}function m(t){return Math.max(0,t.length-1)}function v(t,e=0){return Array.from(Array(t),(t,n)=>e+n)}function y(t){return Object.keys(t)}function h(t,e){return void 0!==e.MouseEvent&&t instanceof e.MouseEvent}function b(){let t=[],e={add:function(n,r,o,i={passive:!0}){let u;return"addEventListener"in n?(n.addEventListener(r,o,i),u=()=>n.removeEventListener(r,o,i)):(n.addListener(o),u=()=>n.removeListener(o)),t.push(u),e},clear:function(){t=t.filter(t=>t())}};return e}function x(t=0,e=0){let n=s(t-e);function r(n){return n<t||n>e}return{length:n,max:e,min:t,constrain:function(n){return r(n)?n<t?t:e:n},reachedAny:r,reachedMax:function(t){return t>e},reachedMin:function(e){return e<t},removeOffset:function(t){return n?t-n*Math.ceil((t-e)/n):t}}}function O(t){let e=t;function n(t){return c(t)?t:t.get()}return{get:function(){return e},set:function(t){e=n(t)},add:function(t){e+=n(t)},subtract:function(t){e-=n(t)}}}function S(t,e){let n="x"===t.scroll?function(t){return`translate3d(${t}px,0px,0px)`}:function(t){return`translate3d(0px,${t}px,0px)`},r=e.style,o=!1;return{clear:function(){o||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(e){o||(r.transform=n(t.direction(e)))},toggleActive:function(t){o=!t}}}let w={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function E(t,e,n){let r,o,i,u,j;let k=t.ownerDocument,A=k.defaultView,I=function(t){function e(t,e){return function t(e,n){return[e,n].reduce((e,n)=>(y(n).forEach(r=>{let o=e[r],i=n[r],u=f(o)&&f(i);e[r]=u?t(o,i):i}),e),{})}(t,e||{})}return{mergeOptions:e,optionsAtMedia:function(n){let r=n.breakpoints||{},o=y(r).filter(e=>t.matchMedia(e).matches).map(t=>r[t]).reduce((t,n)=>e(t,n),{});return e(n,o)},optionsMediaQueries:function(e){return e.map(t=>y(t.breakpoints||{})).reduce((t,e)=>t.concat(e),[]).map(t.matchMedia)}}}(A),Z=(j=[],{init:function(t,e){return(j=e.filter(({options:t})=>!1!==I.optionsAtMedia(t).active)).forEach(e=>e.init(t,I)),e.reduce((t,e)=>Object.assign(t,{[e.name]:e}),{})},destroy:function(){j=j.filter(t=>t.destroy())}}),D=b(),M=function(){let t;let e={},n={init:function(e){t=e},emit:function(r){return(e[r]||[]).forEach(e=>e(t,r)),n},off:function(t,r){return e[t]=(e[t]||[]).filter(t=>t!==r),n},on:function(t,r){return e[t]=(e[t]||[]).concat([r]),n}};return n}(),{mergeOptions:F,optionsAtMedia:L,optionsMediaQueries:P}=I,{on:T,off:$,emit:N}=M,_=!1,H=F(w,E.globalOptions),V=F(H),z=[];function R(e,n){!_&&(V=L(H=F(H,e)),z=n||z,function(){let{container:e,slides:n}=V;i=(a(e)?t.querySelector(e):e)||t.children[0];let r=a(n)?i.querySelectorAll(n):n;u=[].slice.call(r||i.children)}(),r=function e(n){let r=function(t,e,n,r,o,i,u){let f,w;let{align:E,axis:j,direction:k,startIndex:A,loop:I,duration:Z,dragFree:D,dragThreshold:M,inViewThreshold:F,slidesToScroll:L,skipSnaps:P,containScroll:T,watchResize:$,watchSlides:N,watchDrag:_}=i,H={measure:function(t){let{offsetTop:e,offsetLeft:n,offsetWidth:r,offsetHeight:o}=t;return{top:e,right:n+r,bottom:e+o,left:n,width:r,height:o}}},V=H.measure(e),z=n.map(H.measure),R=function(t,e){let n="rtl"===e,r="y"===t,o=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(t){let{height:e,width:n}=t;return r?e:n},direction:function(t){return t*o}}}(j,k),C=R.measureSize(V),q={measure:function(t){return t/100*C}},B=function(t,e){let n={start:function(){return 0},center:function(t){return(e-t)/2},end:function(t){return e-t}};return{measure:function(r,o){return a(t)?n[t](r):t(e,r,o)}}}(E,C),U=!I&&!!T,{slideSizes:J,slideSizesWithGaps:X,startGap:Y,endGap:G}=function(t,e,n,r,o,i){let{measureSize:u,startEdge:c,endEdge:a}=t,l=n[0]&&o,f=function(){if(!l)return 0;let t=n[0];return s(e[c]-t[c])}(),d=l?parseFloat(i.getComputedStyle(g(r)).getPropertyValue(`margin-${a}`)):0,p=n.map(u),v=n.map((t,e,n)=>{let r=e===m(n);return e?r?p[e]+d:n[e+1][c]-t[c]:p[e]+f}).map(s);return{slideSizes:p,slideSizesWithGaps:v,startGap:f,endGap:d}}(R,V,z,n,I||!!T,o),K=function(t,e,n,r,o,i,u,a,l){let{startEdge:f,endEdge:d,direction:v}=t,y=c(n);return{groupSlides:function(t){return y?p(t).filter(t=>t%n==0).map(e=>t.slice(e,e+n)):t.length?p(t).reduce((n,c,l)=>{let p=g(n)||0,y=c===m(t),h=o[f]-i[p][f],b=o[f]-i[c][d],x=r||0!==p?0:v(u),O=s(b-(!r&&y?v(a):0)-(h+x));return l&&O>e+2&&n.push(c),y&&n.push(t.length),n},[]).map((e,n,r)=>{let o=Math.max(r[n-1]||0);return t.slice(o,e)}):[]}}}(R,C,L,I,V,z,Y,G,0),{snaps:Q,snapsAligned:W}=function(t,e,n,r,o){let{startEdge:i,endEdge:u}=t,{groupSlides:c}=o,a=c(r).map(t=>g(t)[u]-t[0][i]).map(s).map(e.measure),l=r.map(t=>n[i]-t[i]).map(t=>-s(t)),f=c(l).map(t=>t[0]).map((t,e)=>t+a[e]);return{snaps:l,snapsAligned:f}}(R,B,V,z,K),tt=-g(Q)+g(X),{snapsContained:te,scrollContainLimit:tn}=function(t,e,n,r,o){let i=x(-e+t,0),u=n.map((t,e)=>{let{min:r,max:o}=i,u=i.constrain(t),c=e===m(n);return e?c||1>s(r-u)?r:1>s(o-u)?o:u:o}).map(t=>parseFloat(t.toFixed(3))),c=function(){let t=u[0],e=g(u);return x(u.lastIndexOf(t),u.indexOf(e)+1)}();return{snapsContained:function(){if(e<=t+2)return[i.max];if("keepSnaps"===r)return u;let{min:n,max:o}=c;return u.slice(n,o)}(),scrollContainLimit:c}}(C,tt,W,T,0),tr=U?te:W,{limit:to}=function(t,e,n){let r=e[0];return{limit:x(n?r-t:g(e),r)}}(tt,tr,I),ti=function t(e,n,r){let{constrain:o}=x(0,e),i=e+1,u=c(n);function c(t){return r?s((i+t)%i):o(t)}function a(){return t(e,u,r)}let l={get:function(){return u},set:function(t){return u=c(t),l},add:function(t){return a().set(u+t)},clone:a};return l}(m(tr),A,I),tu=ti.clone(),tc=p(n),ta=({dragHandler:t,scrollBody:e,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(t.pointerDown()),e.seek()},tl=({scrollBody:t,translate:e,location:n,offsetLocation:r,scrollLooper:o,slideLooper:i,dragHandler:u,animation:c,eventHandler:a,options:{loop:l}},f)=>{let s=t.velocity(),d=t.settled();d&&!u.pointerDown()&&(c.stop(),a.emit("settle")),d||a.emit("scroll"),r.set(n.get()-s+s*f),l&&(o.loop(t.direction()),i.loop()),e.to(r.get())},tf=function(t,e,n,r){let o=b(),i=1e3/60,u=null,c=0,a=0;function l(t){if(!a)return;u||(u=t);let o=t-u;for(u=t,c+=o;c>=i;)n(),c-=i;r(s(c/i)),a&&e.requestAnimationFrame(l)}function f(){e.cancelAnimationFrame(a),u=null,c=0,a=0}return{init:function(){o.add(t,"visibilitychange",()=>{t.hidden&&(u=null,c=0)})},destroy:function(){f(),o.clear()},start:function(){a||(a=e.requestAnimationFrame(l))},stop:f,update:n,render:r}}(r,o,()=>ta(tw),t=>tl(tw,t)),ts=tr[ti.get()],td=O(ts),tp=O(ts),tg=O(ts),tm=function(t,e,n,r,o){let i=0,u=0,c=r,a=.68,l=t.get(),f=0;function p(t){return c=t,m}function g(t){return a=t,m}let m={direction:function(){return u},duration:function(){return c},velocity:function(){return i},seek:function(){let e=n.get()-t.get(),r=0;return c?(i+=e/c,i*=a,l+=i,t.add(i),r=l-f):(i=0,t.set(n),r=e),u=d(r),f=l,m},settled:function(){return .001>s(n.get()-e.get())},useBaseFriction:function(){return g(.68)},useBaseDuration:function(){return p(r)},useFriction:g,useDuration:p};return m}(td,tp,tg,Z,0),tv=function(t,e,n,r,o){let{reachedAny:i,removeOffset:u,constrain:c}=r;function a(t){return t.concat().sort((t,e)=>s(t)-s(e))[0]}function l(e,r){let o=[e,e+n,e-n];if(!t)return o[0];if(!r)return a(o);let i=o.filter(t=>d(t)===r);return i.length?a(i):g(o)-n}return{byDistance:function(n,r){let a=o.get()+n,{index:f,distance:d}=function(n){let r=t?u(n):c(n),{index:o}=e.map((t,e)=>({diff:l(t-r,0),index:e})).sort((t,e)=>s(t.diff)-s(e.diff))[0];return{index:o,distance:r}}(a),p=!t&&i(a);if(!r||p)return{index:f,distance:n};let g=n+l(e[f]-d,0);return{index:f,distance:g}},byIndex:function(t,n){let r=l(e[t]-o.get(),n);return{index:t,distance:r}},shortcut:l}}(I,tr,tt,to,tg),ty=function(t,e,n,r,o,i,u){function c(o){let c=o.distance,a=o.index!==e.get();i.add(c),c&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),a&&(n.set(e.get()),e.set(o.index),u.emit("select"))}return{distance:function(t,e){c(o.byDistance(t,e))},index:function(t,n){let r=e.clone().set(t);c(o.byIndex(r.get(),n))}}}(tf,ti,tu,tm,tv,tg,u),th=function(t){let{max:e,length:n}=t;return{get:function(t){return n?-((t-e)/n):0}}}(to),tb=b(),tx=function(t,e,n,r){let o;let i={},u=null,c=null,a=!1;return{init:function(){o=new IntersectionObserver(t=>{a||(t.forEach(t=>{i[e.indexOf(t.target)]=t}),u=null,c=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(t=>o.observe(t))},destroy:function(){o&&o.disconnect(),a=!0},get:function(t=!0){if(t&&u)return u;if(!t&&c)return c;let e=y(i).reduce((e,n)=>{let r=parseInt(n),{isIntersecting:o}=i[r];return(t&&o||!t&&!o)&&e.push(r),e},[]);return t&&(u=e),t||(c=e),e}}}(e,n,u,F),{slideRegistry:tO}=function(t,e,n,r,o,i){let{groupSlides:u}=o,{min:c,max:a}=r;return{slideRegistry:function(){let r=u(i);return 1===n.length?[i]:t&&"keepSnaps"!==e?r.slice(c,a).map((t,e,n)=>{let r=e===m(n);return e?r?v(m(i)-g(n)[0]+1,g(n)[0]):t:v(g(n[0])+1)}):r}()}}(U,T,tr,tn,K,tc),tS=function(t,e,n,r,o,i){let u=0;function a(t){"Tab"===t.code&&(u=new Date().getTime())}function l(a){i.add(a,"focus",()=>{if(new Date().getTime()-u>10)return;t.scrollLeft=0;let i=e.indexOf(a),l=n.findIndex(t=>t.includes(i));c(l)&&(o.useDuration(0),r.index(l,0))},{passive:!0,capture:!0})}return{init:function(){i.add(document,"keydown",a,!1),e.forEach(l)}}}(t,n,tO,ty,tm,tb),tw={ownerDocument:r,ownerWindow:o,eventHandler:u,containerRect:V,slideRects:z,animation:tf,axis:R,dragHandler:function(t,e,n,r,o,i,u,c,a,f,p,g,m,v,y,O,S,w,E){let{cross:j,direction:k}=t,A=["INPUT","SELECT","TEXTAREA"],I={passive:!1},Z=b(),D=b(),M=x(50,225).constrain(v.measure(20)),F={mouse:300,touch:400},L={mouse:500,touch:600},P=y?43:25,T=!1,$=0,N=0,_=!1,H=!1,V=!1,z=!1;function R(t){let e=i.readPoint(t),n=i.readPoint(t,j),r=s(e-$),u=s(n-N);if(!H&&!z&&(!t.cancelable||!(H=r>u)))return C(t);let a=i.pointerMove(t);r>O&&(V=!0),f.useFriction(.3).useDuration(1),c.start(),o.add(k(a)),t.preventDefault()}function C(t){let e=p.byDistance(0,!1).index!==g.get(),n=i.pointerUp(t)*(y?L:F)[z?"mouse":"touch"],r=function(t,e){let n=g.add(-1*d(t)),r=p.byDistance(t,!y).distance;return y||s(t)<M?r:S&&e?.5*r:p.byIndex(n.get(),0).distance}(k(n),e),o=function(t,e){var n,r;if(0===t||0===e||s(t)<=s(e))return 0;let o=(n=s(t),r=s(e),s(n-r));return s(o/t)}(n,r);H=!1,_=!1,D.clear(),f.useDuration(P-10*o).useFriction(.68+o/50),a.distance(r,!y),z=!1,m.emit("pointerUp")}function q(t){V&&(t.stopPropagation(),t.preventDefault(),V=!1)}return{init:function(t){E&&Z.add(e,"dragstart",t=>t.preventDefault(),I).add(e,"touchmove",()=>void 0,I).add(e,"touchend",()=>void 0).add(e,"touchstart",c).add(e,"mousedown",c).add(e,"touchcancel",C).add(e,"contextmenu",C).add(e,"click",q,!0);function c(c){(l(E)||E(t,c))&&function(t){let c=h(t,r);z=c,V=y&&c&&!t.buttons&&T,T=s(o.get()-u.get())>=2,c&&0!==t.button||function(t){let e=t.nodeName||"";return A.includes(e)}(t.target)||(_=!0,i.pointerDown(t),f.useFriction(0).useDuration(0),o.set(u),function(){let t=z?n:e;D.add(t,"touchmove",R,I).add(t,"touchend",C).add(t,"mousemove",R,I).add(t,"mouseup",C)}(),$=i.readPoint(t),N=i.readPoint(t,j),m.emit("pointerDown"))}(c)}},pointerDown:function(){return _},destroy:function(){Z.clear(),D.clear()}}}(R,t,r,o,tg,function(t,e){let n,r;function o(t){return t.timeStamp}function i(n,r){let o=r||t.scroll,i=`client${"x"===o?"X":"Y"}`;return(h(n,e)?n:n.touches[0])[i]}return{pointerDown:function(t){return n=t,r=t,i(t)},pointerMove:function(t){let e=i(t)-i(r),u=o(t)-o(n)>170;return r=t,u&&(n=t),e},pointerUp:function(t){if(!n||!r)return 0;let e=i(r)-i(n),u=o(t)-o(n),c=o(t)-o(r)>170,a=e/u;return u&&!c&&s(a)>.1?a:0},readPoint:i}}(R,o),td,tf,ty,tm,tv,ti,u,q,D,M,P,0,_),eventStore:tb,percentOfView:q,index:ti,indexPrevious:tu,limit:to,location:td,offsetLocation:tp,options:i,resizeHandler:function(t,e,n,r,o,i,u){let c,a;let f=[],d=!1;function p(t){return o.measureSize(u.measure(t))}return{init:function(o){i&&(a=p(t),f=r.map(p),c=new ResizeObserver(u=>{!d&&(l(i)||i(o,u))&&function(i){for(let u of i){let i=u.target===t,c=r.indexOf(u.target),l=i?a:f[c];if(s(p(i?t:r[c])-l)>=.5){n.requestAnimationFrame(()=>{o.reInit(),e.emit("resize")});break}}}(u)}),[t].concat(r).forEach(t=>c.observe(t)))},destroy:function(){c&&c.disconnect(),d=!0}}}(e,u,o,n,R,$,H),scrollBody:tm,scrollBounds:function(t,e,n,r,o){let i=o.measure(10),u=o.measure(50),c=x(.1,.99),a=!1;return{constrain:function(o){if(!(!a&&t.reachedAny(n.get())&&t.reachedAny(e.get())))return;let l=t.reachedMin(e.get())?"min":"max",f=s(t[l]-e.get()),d=n.get()-e.get(),p=c.constrain(f/u);n.subtract(d*p),!o&&s(d)<i&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(t){a=!t}}}(to,tp,tg,tm,q),scrollLooper:function(t,e,n,r){let{reachedMin:o,reachedMax:i}=x(e.min+.1,e.max+.1);return{loop:function(e){if(!(1===e?i(n.get()):-1===e&&o(n.get())))return;let u=-1*e*t;r.forEach(t=>t.add(u))}}}(tt,to,tp,[td,tp,tg]),scrollProgress:th,scrollSnapList:tr.map(th.get),scrollSnaps:tr,scrollTarget:tv,scrollTo:ty,slideLooper:function(t,e,n,r,o,i,u,c,a){let l=p(o),f=g(d(p(o).reverse(),u[0]),n,!1).concat(g(d(l,e-u[0]-1),-n,!0));function s(t,e){return t.reduce((t,e)=>t-o[e],e)}function d(t,e){return t.reduce((t,n)=>s(t,e)>0?t.concat([n]):t,[])}function g(o,u,l){let f=i.map((t,n)=>({start:t-r[n]+.5+u,end:t+e-.5+u}));return o.map(e=>{let r=l?0:-n,o=l?n:0,i=f[e][l?"end":"start"];return{index:e,loopPoint:i,slideLocation:O(-1),translate:S(t,a[e]),target:()=>c.get()>i?r:o}})}return{canLoop:function(){return f.every(({index:t})=>.1>=s(l.filter(e=>e!==t),e))},clear:function(){f.forEach(t=>t.translate.clear())},loop:function(){f.forEach(t=>{let{target:e,translate:n,slideLocation:r}=t,o=e();o!==r.get()&&(n.to(o),r.set(o))})},loopPoints:f}}(R,C,tt,J,X,Q,tr,tp,n),slideFocus:tS,slidesHandler:(w=!1,{init:function(t){N&&(f=new MutationObserver(e=>{!w&&(l(N)||N(t,e))&&function(e){for(let n of e)if("childList"===n.type){t.reInit(),u.emit("slidesChanged");break}}(e)})).observe(e,{childList:!0})},destroy:function(){f&&f.disconnect(),w=!0}}),slidesInView:tx,slideIndexes:tc,slideRegistry:tO,slidesToScroll:K,target:tg,translate:S(R,e)};return tw}(t,i,u,k,A,n,M);return n.loop&&!r.slideLooper.canLoop()?e(Object.assign({},n,{loop:!1})):r}(V),P([H,...z.map(({options:t})=>t)]).forEach(t=>D.add(t,"change",C)),V.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(),r.eventHandler.init(J),r.resizeHandler.init(J),r.slidesHandler.init(J),r.options.loop&&r.slideLooper.loop(),i.offsetParent&&u.length&&r.dragHandler.init(J),o=Z.init(J,z)))}function C(t,e){let n=U();q(),R(F({startIndex:n},t),e),M.emit("reInit")}function q(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),Z.destroy(),D.clear()}function B(t,e,n){V.active&&!_&&(r.scrollBody.useBaseFriction().useDuration(!0===e?0:V.duration),r.scrollTo.index(t,n||0))}function U(){return r.index.get()}let J={canScrollNext:function(){return r.index.add(1).get()!==U()},canScrollPrev:function(){return r.index.add(-1).get()!==U()},containerNode:function(){return i},internalEngine:function(){return r},destroy:function(){_||(_=!0,D.clear(),q(),M.emit("destroy"))},off:$,on:T,emit:N,plugins:function(){return o},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:C,rootNode:function(){return t},scrollNext:function(t){B(r.index.add(1).get(),t,-1)},scrollPrev:function(t){B(r.index.add(-1).get(),t,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:B,selectedScrollSnap:U,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return R(e,n),setTimeout(()=>M.emit("init"),0),J}function j(t={},e=[]){let n=(0,r.useRef)(t),o=(0,r.useRef)(e),[c,a]=(0,r.useState)(),[l,f]=(0,r.useState)(),s=(0,r.useCallback)(()=>{c&&c.reInit(n.current,o.current)},[c]);return(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&l){E.globalOptions=j.globalOptions;let t=E(l,n.current,o.current);return a(t),()=>t.destroy()}a(void 0)},[l,a]),(0,r.useEffect)(()=>{i(n.current,t)||(n.current=t,s())},[t,s]),(0,r.useEffect)(()=>{!function(t,e){if(t.length!==e.length)return!1;let n=u(t),r=u(e);return n.every((t,e)=>i(t,r[e]))}(o.current,e)&&(o.current=e,s())},[e,s]),[f,c]}E.globalOptions=void 0,j.globalOptions=void 0},9678:function(t,e,n){n.d(e,{I:function(){return o}});var r=n(3061);function o(t,e,n){var o;if("string"==typeof t){let i=document;e&&((0,r.k)(!!e.current,"Scope provided, but no element detected."),i=e.current),n?(null!==(o=n[t])&&void 0!==o||(n[t]=i.querySelectorAll(t)),t=n[t]):t=i.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}},3061:function(t,e,n){n.d(e,{K:function(){return o},k:function(){return i}});var r=n(8988);let o=r.Z,i=r.Z},8988:function(t,e,n){n.d(e,{Z:function(){return r}});let r=t=>t},5642:function(t,e,n){n.d(e,{Y:function(){return u}});var r=n(5955),o=n(9678);let i={some:0,all:1};function u(t,{root:e,margin:n,amount:u,once:c=!1}={}){let[a,l]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!t.current||c&&a)return;let r={root:e&&e.current||void 0,margin:n,amount:u};return function(t,e,{root:n,margin:r,amount:u="some"}={}){let c=(0,o.I)(t),a=new WeakMap,l=new IntersectionObserver(t=>{t.forEach(t=>{let n=a.get(t.target);if(!!n!==t.isIntersecting){if(t.isIntersecting){let n=e(t);"function"==typeof n?a.set(t.target,n):l.unobserve(t.target)}else n&&(n(t),a.delete(t.target))}})},{root:n,rootMargin:r,threshold:"number"==typeof u?u:i[u]});return c.forEach(t=>l.observe(t)),()=>l.disconnect()}(t.current,()=>(l(!0),c?void 0:()=>l(!1)),r)},[e,t,n,c,u]),a}},6805:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(6431).Z.Symbol,o=Object.prototype,i=o.hasOwnProperty,u=o.toString,c=r?r.toStringTag:void 0,a=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o},l=Object.prototype.toString,f=r?r.toStringTag:void 0,s=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":f&&f in Object(t)?a(t):l.call(t)}},6431:function(t,e,n){n.d(e,{Z:function(){return i}});var r="object"==typeof global&&global&&global.Object===Object&&global,o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")()},55:function(t,e,n){n.d(e,{Z:function(){return E}});var r=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(o);++r<o;)i[r]=t[r+e];return i},o=n(8869),i=/^(?:0|[1-9]\d*)$/,u=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&i.test(t))&&t>-1&&t%1==0&&t<e},c=n(8071),a=function(t,e,n){if(!(0,c.Z)(n))return!1;var r,i=typeof e;return("number"==i?!!((0,o.Z)(n)&&u(e,n.length)):"string"==i&&e in n)&&((r=n[e])===t||r!=r&&t!=t)},l=/\s/,f=function(t){for(var e=t.length;e--&&l.test(t.charAt(e)););return e},s=/^\s+/,d=n(6805),p=n(6361),g=0/0,m=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,y=/^0o[0-7]+$/i,h=parseInt,b=function(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||(0,p.Z)(e)&&"[object Symbol]"==(0,d.Z)(e))return g;if((0,c.Z)(t)){var e,n,r="function"==typeof t.valueOf?t.valueOf():t;t=(0,c.Z)(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=(n=t)?n.slice(0,f(n)+1).replace(s,""):n;var o=v.test(t);return o||y.test(t)?h(t.slice(2),o?2:8):m.test(t)?g:+t},x=1/0,O=function(t){var e,n=(e=t)?(e=b(e))===x||e===-x?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0,r=n%1;return n==n?r?n-r:n:0},S=Math.ceil,w=Math.max,E=function(t,e,n){e=(n?a(t,e,n):void 0===e)?1:w(O(e),0);var o=null==t?0:t.length;if(!o||e<1)return[];for(var i=0,u=0,c=Array(S(o/e));i<o;)c[u++]=r(t,i,i+=e);return c}},8869:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(1338),o=function(t){var e;return null!=t&&"number"==typeof(e=t.length)&&e>-1&&e%1==0&&e<=9007199254740991&&!(0,r.Z)(t)}},1338:function(t,e,n){var r=n(6805),o=n(8071);e.Z=function(t){if(!(0,o.Z)(t))return!1;var e=(0,r.Z)(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},8071:function(t,e){e.Z=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},6361:function(t,e){e.Z=function(t){return null!=t&&"object"==typeof t}},2260:function(t,e,n){n.d(e,{Z:function(){return P}});var r,o,i,u,c,a,l,f=function(t){return t},s=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},d=Math.max,p=n(1338),g=n(6431).Z["__core-js_shared__"],m=(r=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",v=n(8071),y=Function.prototype.toString,h=function(t){if(null!=t){try{return y.call(t)}catch(t){}try{return t+""}catch(t){}}return""},b=/^\[object .+?Constructor\]$/,x=Object.prototype,O=Function.prototype.toString,S=x.hasOwnProperty,w=RegExp("^"+O.call(S).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),E=function(t,e){var n,r=null==t?void 0:t[e];return(n=r,(0,v.Z)(n)&&(!m||!(m in n))&&((0,p.Z)(n)?w:b).test(h(n)))?r:void 0},j=function(){try{var t=E(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),k=Date.now,A=(o=j?function(t,e){return j(t,"toString",{configurable:!0,enumerable:!1,value:function(){return e},writable:!0})}:f,i=0,u=0,function(){var t=k(),e=16-(t-u);if(u=t,e>0){if(++i>=800)return arguments[0]}else i=0;return o.apply(void 0,arguments)}),I=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var u=t[n];e(u,n,t)&&(i[o++]=u)}return i},Z=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o},D=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},M=n(8869),F=n(6361),L=Math.max,P=A((a=c=function(t){if(!(t&&t.length))return[];var e=0;return t=I(t,function(t){if((0,F.Z)(t)&&(0,M.Z)(t))return e=L(t.length,e),!0}),D(e,function(e){return Z(t,function(t){return null==t?void 0:t[e]})})},l=d((l=void 0,a.length-1),0),function(){for(var t=arguments,e=-1,n=d(t.length-l,0),r=Array(n);++e<n;)r[e]=t[l+e];e=-1;for(var o=Array(l+1);++e<l;)o[e]=t[e];return o[l]=f(r),s(a,this,o)}),c+"")}}]);