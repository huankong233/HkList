import{C as w,d as D,b as H,z as E,m as C,h as e,g as o,F as f,M as P,o as _,i as l,l as a,k as p,n as j,B as G,e as J,t as b}from"./index-oOsh6Yp-.js";import{c as v,L as O,a as Q}from"./copy-BLdbJLLO.js";import{u as W}from"./useCommonStore-DBHr6vy6.js";import{f as X}from"./format-nPyW6ozd.js";import{u as Y,_ as Z,A as h}from"./Aria2Dialog.vue_vue_type_script_setup_true_lang-Bja4_Xr_.js";import{C as tt,I as et,S as ot}from"./index-BhO2Ilwz.js";import{l as A}from"./link-CEnqzPvx.js";import{L as x}from"./index-B4K4XrRJ.js";import{F as lt,a as nt}from"./index-DZkpM1t2.js";import{T as at}from"./index-Cxg5a5ue.js";import{T as st}from"./index-CmdcfFKe.js";import"./useVirtualScrollNew-DHNj1tvi.js";import"./useResizeObserver-PaY5eqjE.js";import"./dep-1296ed3e-CVicF3e5.js";import"./index-BPJ4iUQr.js";import"./fake-arrow-eSZcvc17.js";import"./index-DwsXfZcz.js";import"./index-BB1kvMsX.js";import"./add-BqxXqSof.js";import"./helper-GPcm8NCZ.js";const it=d=>w.request("get","/user/history",{params:d}),Lt=D({__name:"index",setup(d){const c=Y(),[n,S,z,B]=W(it),I={},L=H([{colKey:"file.filename",title:"文件名",ellipsis:!0},{colKey:"ua",title:"下载UA",cell:(i,{row:t})=>e(x,{onClick:()=>v(t.ua)},{default:()=>[e(A,null,null),t.ua]}),ellipsis:!0},{colKey:"created_at",title:"解析时间",ellipsis:!0},{colKey:"size",title:"文件大小",cell:(i,{row:t})=>e(f,null,[X(t.file.size)]),ellipsis:!0}]),k=async({validateResult:i})=>{i===!0&&(n.value.token||(n.value.token="guest"),await B(),localStorage.setItem("token",n.value.token),P.success("查询成功"))};return E(()=>{n.value.token=localStorage.getItem("token")??"guest",k({validateResult:!0})}),(i,t)=>{const F=et,g=lt,r=G,u=ot,V=nt,y=tt,M=x,T=h,K=st,R=Q,U=O,$=at;return _(),C(f,null,[e(y,null,{default:o(()=>[e(V,{data:l(n),rules:I,onSubmit:k},{default:o(()=>[e(g,{name:"token",label:"卡密"},{default:o(()=>[e(F,{modelValue:l(n).token,"onUpdate:modelValue":t[0]||(t[0]=s=>l(n).token=s)},null,8,["modelValue"])]),_:1}),e(g,null,{default:o(()=>[e(u,{size:"small"},{default:o(()=>[e(r,{type:"submit"},{default:o(()=>t[1]||(t[1]=[a(" 查询 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1}),e(y,null,{default:o(()=>[e(u,{direction:"vertical"},{default:o(()=>[e(T,null,{default:o(()=>[t[4]||(t[4]=a(" 下载请推荐使用Aria2下载器,如 ")),e(M,{href:"https://motrix.app/",target:"_blank"},{"prefix-icon":o(()=>[e(l(A))]),default:o(()=>[t[2]||(t[2]=a(" Motrix "))]),_:1}),t[5]||(t[5]=p("p",null,"IDM下载需要手动指定UA,点击即可复制",-1)),t[6]||(t[6]=p("p",null,"如果当前链接下载失败,请尝试更换链接,如果全部不可用可重新解析该文件",-1)),t[7]||(t[7]=p("br",null,null,-1)),e(r,{onClick:l(c).showAria2Config},{default:o(()=>t[3]||(t[3]=[a(" 修改Aria2配置 ")])),_:1},8,["onClick"])]),_:1}),e($,{"row-key":"fs_id",resizable:"","lazy-load":"",bordered:!0,data:l(z),pagination:l(S),columns:L.value},{expandedRow:o(({row:s})=>[e(U,{split:"",size:"large"},{default:o(()=>[(_(!0),C(f,null,j(s.urls,(m,N)=>(_(),J(R,{key:m},{default:o(()=>[e(u,{direction:"vertical"},{default:o(()=>[e(u,null,{default:o(()=>[e(K,{size:"large"},{default:o(()=>[a(" 第 "+b(N+1)+" 条 ",1)]),_:2},1024),e(r,{onClick:q=>l(v)(m)},{default:o(()=>t[8]||(t[8]=[a("复制")])),_:2},1032,["onClick"]),e(r,{onClick:q=>l(c).addAria2Url(m,s.filename,s.ua,16)},{default:o(()=>t[9]||(t[9]=[a("发送到Aria2下载器")])),_:2},1032,["onClick"])]),_:2},1024),p("p",null,b(m),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:1},8,["data","pagination","columns"])]),_:1})]),_:1}),e(Z)],64)}}});export{Lt as default};
