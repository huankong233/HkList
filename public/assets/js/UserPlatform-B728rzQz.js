import{u as x,k as B,M as H,a as $}from"./useSelectMenu-CLsxG5GS.js";import{d as _,c as p,u as E,s as F,r as N,w as A,a as h,b as L,o as g,e as o,f as s,g as c,i as R,h as O,t as b,j as y,k as I,l as K,F as T}from"./index-C5Ad9MSy.js";import{u as k,r as z,_ as S}from"./index-DqD-7P6i.js";import{A as U,C as q,L as G}from"./index-DO4lXw3-.js";import{l as J}from"./link-BFKmsZvj.js";import"./dep-0df090f8-DUI5xG0U.js";import"./dep-b315df3e-BM3NQ3bZ.js";import"./fake-arrow-CoNNSefR.js";import"./useResizeObserver-J7s6DlTb.js";import"./add-rWhgnYzd.js";import"./helper-lmZs_t81.js";function w(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),e.push.apply(e,n)}return e}function j(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?w(Object(e),!0).forEach(function(n){S(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}var Q={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h9v9H2V2zm2 2v5h5V4H4zm13.5 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM13 6.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM2 13h9v9H2v-9zm2 2v5h5v-5H4zm9-2h9v9h-9v-9zm2 2v5h5v-5h-5z"}}]},W=_({name:"AppIcon",props:{size:{type:String},onClick:{type:Function}},setup(t,r){var{attrs:e}=r,n=p(()=>t.size),{className:l,style:m}=k(n),v=p(()=>["t-icon","t-icon-app",l.value]),a=p(()=>j(j({},m.value),e.style)),u=p(()=>({class:v.value,style:a.value,onClick:f=>{var i;return(i=t.onClick)===null||i===void 0?void 0:i.call(t,{e:f})}}));return()=>z(Q,u.value)}});function P(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),e.push.apply(e,n)}return e}function C(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?P(Object(e),!0).forEach(function(n){S(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}var X={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M22.5 12a10.5 10.5 0 00-19-6.17V2.5h-2v7h7v-2H4.79a8.55 8.55 0 017.21-4 8.5 8.5 0 11-8.45 9.4l-.1-1-2 .21.1 1A10.5 10.5 0 0022.5 12zM11 6v6.41l3.5 3.5 1.41-1.41L13 11.59V6h-2z"}}]},Y=_({name:"HistoryIcon",props:{size:{type:String},onClick:{type:Function}},setup(t,r){var{attrs:e}=r,n=p(()=>t.size),{className:l,style:m}=k(n),v=p(()=>["t-icon","t-icon-history",l.value]),a=p(()=>C(C({},m.value),e.style)),u=p(()=>({class:v.value,style:a.value,onClick:f=>{var i;return(i=t.onClick)===null||i===void 0?void 0:i.call(t,{e:f})}}));return()=>z(X,u.value)}});const Z=["src"],ee={class:"logo-text"},ve=_({__name:"UserPlatform",setup(t){const r=E(),{config:e}=F(r),n=N([]);A(e,()=>n.value=e.value.custom_button.split(`
`).map(v=>v.split("|")));const[l,m]=x("user","parse");return(v,a)=>{const u=H,f=$,i=U,V=L("RouterView"),M=q,D=G;return g(),h(D,null,{default:o(()=>[s(i,null,{default:o(()=>[s(f,{modelValue:c(l),"onUpdate:modelValue":a[0]||(a[0]=d=>R(l)?l.value=d:null),onChange:c(m)},{logo:o(()=>[O("img",{height:"28",src:c(e).logo,alt:"logo"},null,8,Z),O("p",ee,b(c(e).name),1)]),default:o(()=>[s(u,{value:"parse"},{icon:o(()=>[s(c(W))]),default:o(()=>[a[1]||(a[1]=y(" 解析中心 "))]),_:1}),s(u,{value:"token"},{icon:o(()=>[s(c(B))]),default:o(()=>[a[2]||(a[2]=y(" 卡密查询 "))]),_:1}),s(u,{value:"history"},{icon:o(()=>[s(c(Y))]),default:o(()=>[a[3]||(a[3]=y(" 记录查询 "))]),_:1}),(g(!0),I(T,null,K(n.value,d=>(g(),h(u,{key:d[1],value:`link-${d[1]}`},{icon:o(()=>[s(c(J))]),default:o(()=>[y(" "+b(d[0]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),s(M,null,{default:o(()=>[s(V)]),_:1})]),_:1})}}});export{ve as default};