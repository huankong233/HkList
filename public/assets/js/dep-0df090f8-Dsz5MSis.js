import{d as h,c as i,am as M,an as I,ao as k,r as v,Z as B,aY as F,b2 as K,v as E,a6 as U,X as J,Y,J as Z,_ as N,y as q,w as G,e as H,a8 as Q,A as W,R as ee,a4 as te,S as ne,bd as re}from"./index-BygjqHYh.js";import{o as ae}from"./dep-b315df3e-B2WzJNs2.js";import{p as oe,P as le}from"./fake-arrow-DQMEmm_I.js";import{u as ie}from"./useResizeObserver-9SToBxFp.js";function S(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,t)}return r}function _(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?S(Object(r),!0).forEach(function(t){k(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}var ue={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M15.91 17.5l-5.5-5.5 5.5-5.5-1.41-1.41L7.59 12l6.91 6.91 1.41-1.41z"}}]},Oe=h({name:"ChevronLeftIcon",props:{size:{type:String},onClick:{type:Function}},setup(n,e){var{attrs:r}=e,t=i(()=>n.size),{className:a,style:u}=M(t),d=i(()=>["t-icon","t-icon-chevron-left",a.value]),y=i(()=>_(_({},u.value),r.style)),m=i(()=>({class:d.value,style:y.value,onClick:f=>{var s;return(s=n.onClick)===null||s===void 0?void 0:s.call(n,{e:f})}}));return()=>I(ue,m.value)}});function T(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,t)}return r}function V(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?T(Object(r),!0).forEach(function(t){k(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}var se={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8.09 17.5l5.5-5.5-5.5-5.5L9.5 5.09 16.41 12 9.5 18.91 8.09 17.5z"}}]},he=h({name:"ChevronRightIcon",props:{size:{type:String},onClick:{type:Function}},setup(n,e){var{attrs:r}=e,t=i(()=>n.size),{className:a,style:u}=M(t),d=i(()=>["t-icon","t-icon-chevron-right",a.value]),y=i(()=>V(V({},u.value),r.style)),m=i(()=>({class:d.value,style:y.value,onClick:f=>{var s;return(s=n.onClick)===null||s===void 0?void 0:s.call(n,{e:f})}}));return()=>I(se,m.value)}});/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */var ce="t-display-none-element-refresh";function we(){var n=v(0);B(ce,n),F(function(){n.value+=1})}/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */var ve={delay:{type:Number},destroyOnClose:{type:Boolean,default:!0},duration:{type:Number},placement:{type:String,default:"top"},showArrow:{type:Boolean,default:!0},theme:{type:String,default:"default",validator:function(e){return e?["default","primary","success","danger","warning","light"].includes(e):!0}}};/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */var fe=function(){var e=v(0),r=v(0),t=function(u){e.value=u.clientX,r.value=u.clientY};return K||(E(function(){window.addEventListener("mousemove",t,{passive:!0})}),U(function(){window.removeEventListener("mousemove",t)})),{x:e,y:r}};/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */function D(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,t)}return r}function p(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?D(Object(r),!0).forEach(function(t){N(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}var pe=h({name:"TTooltip",props:p(p({},oe),ve),setup:function(e,r){var t=v(null),a=v(null),u=J(e),d=u.visible,y=u.modelValue,m=ie(d,y,e.defaultVisible,e.onVisibleChange,"visible"),f=Y(m,2),s=f[0],w=f[1],b=W(),g=v(e.visible||e.defaultVisible),P=Z(),$=ee(),j=te(),R=fe(),C=R.x,O=v(C.value);E(function(){e.duration&&g.value&&(t.value=setTimeout(function(){w(!1,{}),clearTimeout(t.value),t.value=null},e.duration))});var z=function(o,l){t.value&&(l==null?void 0:l.trigger)!=="document"||(o&&(O.value=C.value),w(o,l))},x=i(function(){return["".concat(P.value,"-tooltip"),N({},"".concat(P.value,"-tooltip--").concat(e.theme),e.theme),e.overlayClassName]}),L=i(function(){return p(p({},(b==null?void 0:b.vnode.props)||{}),{},{placement:e.placement==="mouse"?"bottom-left":e.placement,showArrow:e.placement==="mouse"?!1:e.showArrow,overlayClassName:x.value,onVisibleChange:z,disabled:e.disabled})}),X=i(function(){if(e.placement!=="mouse"||O.value===0)return e.overlayInnerStyle;var c=function(l){return{transform:"translateX(".concat(O.value-l.getBoundingClientRect().left,"px)")}};return e.overlayInnerStyle?function(o,l){return p(p({},c(o)),q(e.overlayInnerStyle)?e.overlayInnerStyle(o,l):e.overlayInnerStyle)}:c});G(function(){return g.value},function(){t.value&&!g.value&&(clearTimeout(t.value),t.value=null)});var A=function(){var o,l;(o=a.value)===null||o===void 0||(l=o.update)===null||l===void 0||l.call(o)};return r.expose({updatePopper:A}),function(){var c=$("content");return!c&&!e.content?j("default","triggerElement"):H(le,Q(ae(L.value,["content","default"]),{ref:a,overlayInnerStyle:X.value,visible:s.value}),{default:function(){return[j("default","triggerElement")]},content:function(){return c}})}}});/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */var Pe=ne(pe);/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */function je(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function de(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,re(t.key),t)}}function Ce(n,e,r){return e&&de(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}export{Pe as T,Ce as _,je as a,he as b,Oe as c,we as u};