import{C as N,d as T,b as y,z as M,m as z,h as t,g as e,e as _,p as P,F as I,M as w,o as r,l as o,t as l,i as c,n as R,B as q,k as E}from"./index-oOsh6Yp-.js";import{L as U,c as $,a as j}from"./copy-BLdbJLLO.js";import{f as C}from"./format-nPyW6ozd.js";import{C as A,I as G,S as H}from"./index-BhO2Ilwz.js";import{F as J,a as K}from"./index-DZkpM1t2.js";import{D as O,a as Q}from"./index-BmusmLNU.js";import{T as W}from"./index-CmdcfFKe.js";import"./useVirtualScrollNew-DHNj1tvi.js";import"./useResizeObserver-PaY5eqjE.js";import"./dep-1296ed3e-CVicF3e5.js";const X=d=>N.request("get","/user/token",{params:d}),re=T({__name:"index",setup(d){const u=y({token:localStorage.getItem("token")??""}),a=y({token:"",count:0,size:0,remaining_count:0,remaining_size:0,ip:[],created_at:"",expires_at:""}),x={},p=async({validateResult:f})=>{if(f!==!0)return;u.value.token===""&&(u.value.token="guest");const n=await X(u.value);a.value=n.data,localStorage.setItem("token",u.value.token),w.success("查询成功")};return M(()=>{p({validateResult:!0})}),(f,n)=>{const B=G,k=J,v=q,m=H,V=K,g=A,s=O,b=W,F=j,S=U,D=Q;return r(),z(I,null,[t(g,null,{default:e(()=>[t(V,{data:u.value,rules:x,onSubmit:p},{default:e(()=>[t(k,{name:"token",label:"卡密"},{default:e(()=>[t(B,{modelValue:u.value.token,"onUpdate:modelValue":n[0]||(n[0]=i=>u.value.token=i)},null,8,["modelValue"])]),_:1}),t(k,null,{default:e(()=>[t(m,{size:"small"},{default:e(()=>[t(v,{type:"submit"},{default:e(()=>n[1]||(n[1]=[o(" 查询 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1}),a.value.token!==""?(r(),_(g,{key:0},{default:e(()=>[t(D,{layout:"vertical",bordered:"",colon:""},{default:e(()=>[t(s,{label:"卡密"},{default:e(()=>[o(l(a.value.token),1)]),_:1}),t(s,{label:"计划下载配额"},{default:e(()=>[o(l(a.value.count),1)]),_:1}),t(s,{label:"剩余下载配额"},{default:e(()=>[o(l(a.value.remaining_count),1)]),_:1}),t(s,{label:"计划下载大小"},{default:e(()=>[o(l(c(C)(a.value.size)),1)]),_:1}),t(s,{label:"剩余下载大小"},{default:e(()=>[o(l(c(C)(a.value.remaining_size)),1)]),_:1}),t(s,{label:"IP"},{default:e(()=>[a.value.ip.length===0?(r(),_(b,{key:0,size:"large"},{default:e(()=>n[2]||(n[2]=[o(" 没有绑定的IP ")])),_:1})):(r(),_(S,{key:1,stripe:"",split:"",size:"large"},{default:e(()=>[(r(!0),z(I,null,R(a.value.ip,(i,L)=>(r(),_(F,{key:i},{default:e(()=>[t(m,{direction:"vertical"},{default:e(()=>[t(m,null,{default:e(()=>[t(b,{size:"large"},{default:e(()=>[o(" 第 "+l(L+1)+" 条 ",1)]),_:2},1024),t(v,{onClick:Y=>c($)(i)},{default:e(()=>n[3]||(n[3]=[o("复制")])),_:2},1032,["onClick"])]),_:2},1024),E("p",null,l(i),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}))]),_:1}),t(s,{label:"使用日期"},{default:e(()=>[o(l(a.value.created_at),1)]),_:1}),t(s,{label:"过期日期"},{default:e(()=>[o(l(a.value.expires_at),1)]),_:1})]),_:1})]),_:1})):P("",!0)],64)}}});export{re as default};
