import{v as q,l as I,d as U,s as w,q as N,r as F,a as k,b as t,o as b,j as y,e,f as o,g as n,t as r,h as O,i as P,F as C}from"./index-BXtOGv6Q.js";import{u as $}from"./useCommonStore-BqfMRGM9.js";import{f as j}from"./format-BdR9u1hy.js";import{c as R,L as E,a as M}from"./copy-CzdQA9L2.js";import{C as A,S as G}from"./index-CGO3Jvk9.js";import{O as H,S as J}from"./index-C-FZf90I.js";import{B as Q}from"./useResizeObserver-BFihYt-r.js";import{D as W,a as X}from"./index-BMLiTiEq.js";import{L as Y}from"./index-BCgCs9jE.js";import{T as Z}from"./index-Blo8uw3G.js";import{T as ee}from"./index-YWjaZBAu.js";import"./dep-b315df3e-D1p_saOo.js";import"./useVirtualScrollNew-vpDyZbsk.js";import"./fake-arrow-B3Zre1Jk.js";import"./dep-0df090f8-CGFj1a8w.js";import"./index-CFJOgvGk.js";import"./add-BMvvYsGZ.js";import"./helper-DiIXodi3.js";const te=c=>q.request("get","/admin/record",{params:c}),le=I("records",()=>{const[c,i,_,m]=$(te);return{pagination:i,selectReq:c,recordList:_,getRecords:m}}),oe={class:"buttons"},Se=U({__name:"index",setup(c){const i=le(),{recordList:_,pagination:m,selectReq:d}=w(i);N(i.getRecords);const S=F([{colKey:"id",title:"ID",ellipsis:!0},{colKey:"ip",title:"IP",ellipsis:!0},{colKey:"fingerprint",title:"指纹",ellipsis:!0},{colKey:"file.filename",title:"文件名称",ellipsis:!0},{colKey:"file.size",title:"文件大小",cell:(K,{row:a})=>e(C,null,[j(a.file.size)]),ellipsis:!0},{colKey:"token.token",title:"卡密",ellipsis:!0},{colKey:"account.baidu_name",title:"解析账号名称",ellipsis:!0},{colKey:"created_at",title:"创建时间",width:175,ellipsis:!0},{colKey:"updated_at",title:"更新时间",width:175,ellipsis:!0}]);return(K,a)=>{const l=H,g=J,v=Q,f=G,u=W,V=Y,L=ee,z=M,B=E,x=X,T=Z,D=A;return b(),k(D,null,{default:t(()=>[y("div",oe,[e(f,{size:"small"},{default:t(()=>[e(g,{modelValue:o(d).column,"onUpdate:modelValue":a[0]||(a[0]=s=>o(d).column=s),onChange:o(i).getRecords},{default:t(()=>[e(l,{label:"按 id 排序",value:"id"}),e(l,{label:"按 ip 排序",value:"ip"}),e(l,{label:"按 fingerprint 排序",value:"fingerprint"}),e(l,{label:"按 fs_id 排序",value:"fs_id"}),e(l,{label:"按 urls 排序",value:"urls"}),e(l,{label:"按 ua 排序",value:"ua"}),e(l,{label:"按 token_id 排序",value:"token_id"}),e(l,{label:"按 account_id 排序",value:"account_id"}),e(l,{label:"按 created_at 排序",value:"created_at"}),e(l,{label:"按 updated_at 排序",value:"updated_at"})]),_:1},8,["modelValue","onChange"]),e(g,{modelValue:o(d).direction,"onUpdate:modelValue":a[1]||(a[1]=s=>o(d).direction=s),onChange:o(i).getRecords},{default:t(()=>[e(l,{label:"正序",value:"asc"}),e(l,{label:"倒序",value:"desc"})]),_:1},8,["modelValue","onChange"]),e(v,{onClick:o(i).getRecords},{default:t(()=>a[2]||(a[2]=[n(" 刷新列表 ")])),_:1},8,["onClick"])]),_:1})]),e(T,{"row-key":"id",resizable:"","lazy-load":"",bordered:!0,data:o(_),pagination:o(m),columns:S.value},{expandedRow:t(({row:s})=>[e(x,{bordered:"",colon:"",layout:"vertical"},{default:t(()=>[e(u,{label:"Surl"},{default:t(()=>[n(r(s.file.surl),1)]),_:2},1024),e(u,{label:"Pwd"},{default:t(()=>[n(r(s.file.pwd),1)]),_:2},1024),e(u,{label:"Ua"},{default:t(()=>[e(V,{onClick:p=>o(R)(s.ua)},{default:t(()=>[n(r(s.ua),1)]),_:2},1032,["onClick"])]),_:2},1024),e(u,{label:"Urls"},{default:t(()=>[e(B,{split:"",size:"large"},{default:t(()=>[(b(!0),O(C,null,P(s.urls,(p,h)=>(b(),k(z,{key:p},{default:t(()=>[e(f,{direction:"vertical"},{default:t(()=>[e(f,null,{default:t(()=>[e(L,{size:"large"},{default:t(()=>[n(" 第 "+r(h+1)+" 条 ",1)]),_:2},1024),e(v,{onClick:ae=>o(R)(p)},{default:t(()=>a[3]||(a[3]=[n("复制")])),_:2},1032,["onClick"])]),_:2},1024),y("p",null,r(p),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1},8,["data","pagination","columns"])]),_:1})}}});export{Se as default};
