import{D as v,d as C,a as V,s as x,b as y,e as B,g as o,a0 as I,o as k,h as t,l as e,i as u,t as F,m as L,M as D,B as N,C as R}from"./index-CQNaPwWs.js";import{L as M}from"./index-BfaFYfUc.js";import{I as P,S as T,C as q}from"./index-BJ3ACpST.js";import{F as z,a as U}from"./index-D3Tw08DD.js";import"./useResizeObserver-nOc0QERr.js";const j=n=>v.request("post","/admin/check_password",{data:n}),A=["src"],E=C({__name:"Login",setup(n){const _=V(),{config:r}=x(_),d=I(),a=y({admin_password:""}),c={},p=async({validateResult:l})=>{l===!0&&(await j({admin_password:a.value.admin_password}),localStorage.setItem("admin_password",a.value.admin_password),D.success("登陆成功"),d.push("/admin"))};return(l,s)=>{const i=P,m=z,f=N,g=T,w=U,S=q,b=M;return k(),B(b,null,{default:o(()=>[t(S,{class:"login"},{default:o(()=>[e("h1",null,[e("img",{src:u(r).logo,alt:"logo"},null,8,A)]),e("h2",null,"登陆 | "+F(u(r).name),1),t(w,{data:a.value,rules:c,onSubmit:p},{default:o(()=>[t(m,{name:"admin_password",label:"管理员密码"},{default:o(()=>[t(i,{modelValue:a.value.admin_password,"onUpdate:modelValue":s[0]||(s[0]=h=>a.value.admin_password=h)},null,8,["modelValue"])]),_:1}),t(m,null,{default:o(()=>[t(g,{size:"small"},{default:o(()=>[t(f,{type:"submit"},{default:o(()=>s[1]||(s[1]=[L(" 提交 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})}}}),Q=R(E,[["__scopeId","data-v-0721a15d"]]);export{Q as default};
