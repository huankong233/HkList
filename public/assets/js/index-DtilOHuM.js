import{c as K,L as j,a as E}from"./copy-CzdQA9L2.js";import{f as P}from"./format-BdR9u1hy.js";import{u as G,_ as J,A as O}from"./Aria2Dialog.vue_vue_type_script_setup_true_lang-C_VYiCNf.js";import{v as Q,l as W,r as b,d as X,s as Y,q as Z,h as L,e,b as o,F as S,M as h,o as R,f as l,g as n,j as y,i as tt,a as et,t as z}from"./index-BXtOGv6Q.js";import{u as ot}from"./useCommonStore-BqfMRGM9.js";import{C as lt,I as nt,S as st}from"./index-CGO3Jvk9.js";import{l as B}from"./link-DnAcWoem.js";import{L as I}from"./index-BCgCs9jE.js";import{F as at,a as it}from"./index-GHIRlKwr.js";import{B as rt}from"./useResizeObserver-BFihYt-r.js";import{T as ut}from"./index-Blo8uw3G.js";import{T as mt}from"./index-YWjaZBAu.js";import"./dep-b315df3e-D1p_saOo.js";import"./useVirtualScrollNew-vpDyZbsk.js";import"./index-B2s6Pqa4.js";import"./index-DgibZqP6.js";import"./index-C-FZf90I.js";import"./fake-arrow-B3Zre1Jk.js";import"./dep-0df090f8-CGFj1a8w.js";import"./index-CFJOgvGk.js";import"./add-BMvvYsGZ.js";import"./helper-DiIXodi3.js";const pt=d=>Q.request("get","/user/history",{params:d}),dt=W("history",()=>{const[d,i,r,s]=ot(pt),f=b([]),c=b([]);return{selectReq:d,pagination:i,historyList:r,getHistory:s,selectedRowKeys:f,selectedRows:c,handleSelectChange:(k,C)=>{f.value=k,c.value=C.selectedRowData.map(u=>({filename:u.file.filename,urls:u.urls,ua:u.ua}))}}}),qt=X({__name:"index",setup(d){const i=G(),r=dt(),{selectReq:s,pagination:f,historyList:c,selectedRowKeys:v,selectedRows:k}=Y(r),C={token:[{required:!0,message:"请输入卡密"}]},u=b([{colKey:"row-select",type:"multiple",width:50,fixed:"left"},{colKey:"file.filename",title:"文件名",ellipsis:!0},{colKey:"ua",title:"下载UA",cell:(_,{row:t})=>e(I,{onClick:()=>K(t.ua)},{default:()=>[e(B,null,null),t.ua]}),ellipsis:!0},{colKey:"created_at",title:"解析时间",ellipsis:!0},{colKey:"size",title:"文件大小",cell:(_,{row:t})=>e(S,null,[P(t.file.size)]),ellipsis:!0}]),w=async({validateResult:_})=>{_===!0&&(await r.getHistory(),localStorage.setItem("token",s.value.token),h.success("查询成功"))};return Z(()=>{s.value.token=localStorage.getItem("token")??"guest",w({validateResult:!0})}),(_,t)=>{const F=nt,x=at,m=rt,p=st,T=it,A=lt,V=I,q=O,H=mt,M=E,$=j,U=ut;return R(),L(S,null,[e(A,null,{default:o(()=>[e(T,{data:l(s),rules:C,onSubmit:w},{default:o(()=>[e(x,{name:"token",label:"卡密"},{default:o(()=>[e(F,{modelValue:l(s).token,"onUpdate:modelValue":t[0]||(t[0]=a=>l(s).token=a)},null,8,["modelValue"])]),_:1}),e(x,null,{default:o(()=>[e(p,{size:"small"},{default:o(()=>[e(m,{type:"submit"},{default:o(()=>t[2]||(t[2]=[n(" 查询 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1}),e(A,null,{default:o(()=>[e(p,{direction:"vertical"},{default:o(()=>[e(q,null,{default:o(()=>[t[6]||(t[6]=n(" 下载请推荐使用Aria2下载器,如 ")),e(V,{href:"https://motrix.app/",target:"_blank"},{"prefix-icon":o(()=>[e(l(B))]),default:o(()=>[t[3]||(t[3]=n(" Motrix "))]),_:1}),t[7]||(t[7]=y("p",null,"IDM下载需要手动指定UA,点击即可复制",-1)),t[8]||(t[8]=y("p",null,"如果当前链接下载失败,请尝试更换链接,如果全部不可用可重新解析该文件",-1)),t[9]||(t[9]=y("br",null,null,-1)),e(p,null,{default:o(()=>[e(m,{onClick:l(i).showAria2Config},{default:o(()=>t[4]||(t[4]=[n(" 修改Aria2配置 ")])),_:1},8,["onClick"]),e(m,{onClick:t[1]||(t[1]=a=>l(i).downloadLinks(l(k)))},{default:o(()=>t[5]||(t[5]=[n("批量发送")])),_:1})]),_:1})]),_:1}),e(U,{"row-key":"id",resizable:"","lazy-load":"",bordered:!0,data:l(c),pagination:l(f),columns:u.value,"select-on-row-click":!0,selectedRowKeys:l(v),onSelectChange:l(r).handleSelectChange},{expandedRow:o(({row:a})=>[e($,{split:"",size:"large"},{default:o(()=>[(R(!0),L(S,null,tt(a.urls,(g,D)=>(R(),et(M,{key:g},{default:o(()=>[e(p,{direction:"vertical"},{default:o(()=>[e(p,null,{default:o(()=>[e(H,{size:"large"},{default:o(()=>[n(" 第 "+z(D+1)+" 条 ",1)]),_:2},1024),e(m,{onClick:N=>l(K)(g)},{default:o(()=>t[10]||(t[10]=[n("复制")])),_:2},1032,["onClick"]),e(m,{onClick:N=>l(i).addAria2Url(g,a.filename,a.ua,16)},{default:o(()=>t[11]||(t[11]=[n("发送到Aria2下载器")])),_:2},1032,["onClick"])]),_:2},1024),y("p",null,z(g),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:1},8,["data","pagination","columns","selectedRowKeys","onSelectChange"])]),_:1})]),_:1}),e(J)],64)}}});export{qt as default};
