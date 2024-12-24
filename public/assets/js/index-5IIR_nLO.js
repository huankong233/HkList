import{D as P,d as j,b as _,A as G,n as S,h as e,g as o,F as c,M as J,o as k,i as l,m as n,l as d,p as O,B as Q,e as W,t as x}from"./index-BJn9XbFk.js";import{c as w,L as X,a as Y}from"./copy-DmdRfEwW.js";import{u as Z}from"./useCommonStore-yA7Pv4Ag.js";import{f as h}from"./format-BO7uzgKe.js";import{u as tt,_ as et,A as ot}from"./Aria2Dialog.vue_vue_type_script_setup_true_lang-DTvEXn_B.js";import{C as lt,I as nt,S as at}from"./index-1apc2-bA.js";import{l as R}from"./link-Bl0kCzLR.js";import{L as K}from"./index-ICivzAa1.js";import{F as st,a as it}from"./index-CV8xjUnp.js";import{T as rt}from"./index-CjZRkPar.js";import{T as ut}from"./index-DYT2NKLM.js";import"./useVirtualScrollNew-_rbULzbx.js";import"./useResizeObserver-CJcLPaer.js";import"./dep-1296ed3e-CQkP3NVi.js";import"./index-CznTkyZJ.js";import"./fake-arrow-Bzg6eqIq.js";import"./index-Bjr3KbpV.js";import"./index-B57J6DKx.js";import"./add-B4WlbNF_.js";import"./helper-BoCLEQ3_.js";const mt=g=>P.request("get","/user/history",{params:g}),It=j({__name:"index",setup(g){const f=tt(),[a,L,z,B]=Z(mt),I={},F=_([{colKey:"row-select",type:"multiple",width:50,fixed:"left"},{colKey:"file.filename",title:"文件名",ellipsis:!0},{colKey:"ua",title:"下载UA",cell:(s,{row:t})=>e(K,{onClick:()=>w(t.ua)},{default:()=>[e(R,null,null),t.ua]}),ellipsis:!0},{colKey:"created_at",title:"解析时间",ellipsis:!0},{colKey:"size",title:"文件大小",cell:(s,{row:t})=>e(c,null,[h(t.file.size)]),ellipsis:!0}]),y=async({validateResult:s})=>{s===!0&&(a.value.token||(a.value.token="guest"),await B(),localStorage.setItem("token",a.value.token),J.success("查询成功"))};G(()=>{a.value.token=localStorage.getItem("token")??"guest",y({validateResult:!0})});const C=_([]),v=_([]),V=(s,t)=>{C.value=s,v.value=t.selectedRowData.map(r=>({filename:r.file.filename,urls:r.urls,ua:r.ua}))};return(s,t)=>{const r=nt,b=st,u=Q,m=at,M=it,A=lt,T=K,$=ot,D=ut,U=Y,N=X,q=rt;return k(),S(c,null,[e(A,null,{default:o(()=>[e(M,{data:l(a),rules:I,onSubmit:y},{default:o(()=>[e(b,{name:"token",label:"卡密"},{default:o(()=>[e(r,{modelValue:l(a).token,"onUpdate:modelValue":t[0]||(t[0]=i=>l(a).token=i)},null,8,["modelValue"])]),_:1}),e(b,null,{default:o(()=>[e(m,{size:"small"},{default:o(()=>[e(u,{type:"submit"},{default:o(()=>t[2]||(t[2]=[n(" 查询 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1}),e(A,null,{default:o(()=>[e(m,{direction:"vertical"},{default:o(()=>[e($,null,{default:o(()=>[t[6]||(t[6]=n(" 下载请推荐使用Aria2下载器,如 ")),e(T,{href:"https://motrix.app/",target:"_blank"},{"prefix-icon":o(()=>[e(l(R))]),default:o(()=>[t[3]||(t[3]=n(" Motrix "))]),_:1}),t[7]||(t[7]=d("p",null,"IDM下载需要手动指定UA,点击即可复制",-1)),t[8]||(t[8]=d("p",null,"如果当前链接下载失败,请尝试更换链接,如果全部不可用可重新解析该文件",-1)),t[9]||(t[9]=d("br",null,null,-1)),e(m,null,{default:o(()=>[e(u,{onClick:l(f).showAria2Config},{default:o(()=>t[4]||(t[4]=[n(" 修改Aria2配置 ")])),_:1},8,["onClick"]),e(u,{onClick:t[1]||(t[1]=i=>l(f).downloadLinks(v.value))},{default:o(()=>t[5]||(t[5]=[n("批量发送")])),_:1})]),_:1})]),_:1}),e(q,{"row-key":"id",resizable:"","lazy-load":"",bordered:!0,data:l(z),pagination:l(L),columns:F.value,"select-on-row-click":!0,selectedRowKeys:C.value,onSelectChange:V},{expandedRow:o(({row:i})=>[e(N,{split:"",size:"large"},{default:o(()=>[(k(!0),S(c,null,O(i.urls,(p,H)=>(k(),W(U,{key:p},{default:o(()=>[e(m,{direction:"vertical"},{default:o(()=>[e(m,null,{default:o(()=>[e(D,{size:"large"},{default:o(()=>[n(" 第 "+x(H+1)+" 条 ",1)]),_:2},1024),e(u,{onClick:E=>l(w)(p)},{default:o(()=>t[10]||(t[10]=[n("复制")])),_:2},1032,["onClick"]),e(u,{onClick:E=>l(f).addAria2Url(p,i.filename,i.ua,16)},{default:o(()=>t[11]||(t[11]=[n("发送到Aria2下载器")])),_:2},1032,["onClick"])]),_:2},1024),d("p",null,x(p),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:1},8,["data","pagination","columns","selectedRowKeys"])]),_:1})]),_:1}),e(et)],64)}}});export{It as default};