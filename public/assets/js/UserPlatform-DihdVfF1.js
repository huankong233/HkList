import{u as w,r as P,_ as j,a as k,k as V,M,b as D}from"./useSelectMenu-D5cLRtUB.js";import{d as y,c,u as x,s as H,o as B,a as N,w as a,r as $,b as s,e as p,i as A,f as g,t as E,g as d}from"./index-BrogXIyH.js";import{L as R,A as F,C as I}from"./index-BjwETDbB.js";import"./dep-0df090f8-CmIrGLIn.js";import"./dep-b315df3e-B5DWW-tz.js";import"./fake-arrow-BQ9mFyFj.js";import"./useResizeObserver-CrmIqf6F.js";import"./add-WtetHkRT.js";import"./helper-DeHNcuS0.js";function _(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,e)}return n}function O(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?_(Object(n),!0).forEach(function(e){j(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var L={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h9v9H2V2zm2 2v5h5V4H4zm13.5 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM13 6.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM2 13h9v9H2v-9zm2 2v5h5v-5H4zm9-2h9v9h-9v-9zm2 2v5h5v-5h-5z"}}]},K=y({name:"AppIcon",props:{size:{type:String},onClick:{type:Function}},setup(t,r){var{attrs:n}=r,e=c(()=>t.size),{className:l,style:m}=w(e),o=c(()=>["t-icon","t-icon-app",l.value]),u=c(()=>O(O({},m.value),n.style)),v=c(()=>({class:o.value,style:u.value,onClick:f=>{var i;return(i=t.onClick)===null||i===void 0?void 0:i.call(t,{e:f})}}));return()=>P(L,v.value)}});function h(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,e)}return n}function b(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?h(Object(n),!0).forEach(function(e){j(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var T={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M22.5 12a10.5 10.5 0 00-19-6.17V2.5h-2v7h7v-2H4.79a8.55 8.55 0 017.21-4 8.5 8.5 0 11-8.45 9.4l-.1-1-2 .21.1 1A10.5 10.5 0 0022.5 12zM11 6v6.41l3.5 3.5 1.41-1.41L13 11.59V6h-2z"}}]},U=y({name:"HistoryIcon",props:{size:{type:String},onClick:{type:Function}},setup(t,r){var{attrs:n}=r,e=c(()=>t.size),{className:l,style:m}=w(e),o=c(()=>["t-icon","t-icon-history",l.value]),u=c(()=>b(b({},m.value),n.style)),v=c(()=>({class:o.value,style:u.value,onClick:f=>{var i;return(i=t.onClick)===null||i===void 0?void 0:i.call(t,{e:f})}}));return()=>P(T,v.value)}});const q=["src"],G={class:"logo-text"},re=y({__name:"UserPlatform",setup(t){const r=x(),{config:n}=H(r),[e,l]=k("user","parse");return(m,o)=>{const u=M,v=D,f=F,i=$("RouterView"),C=I,z=R;return B(),N(z,null,{default:a(()=>[s(f,null,{default:a(()=>[s(v,{modelValue:p(e),"onUpdate:modelValue":o[0]||(o[0]=S=>A(e)?e.value=S:null),onChange:p(l)},{logo:a(()=>[g("img",{height:"28",src:p(n).logo,alt:"logo"},null,8,q),g("p",G,E(p(n).name),1)]),default:a(()=>[s(u,{value:"parse"},{icon:a(()=>[s(p(K))]),default:a(()=>[o[1]||(o[1]=d(" 解析中心 "))]),_:1}),s(u,{value:"token"},{icon:a(()=>[s(p(V))]),default:a(()=>[o[2]||(o[2]=d(" 卡密查询 "))]),_:1}),s(u,{value:"history"},{icon:a(()=>[s(p(U))]),default:a(()=>[o[3]||(o[3]=d(" 记录查询 "))]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1}),s(C,null,{default:a(()=>[s(i)]),_:1})]),_:1})}}});export{re as default};
