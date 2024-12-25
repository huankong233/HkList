import{D as _,d as c,a as U,b as C,A as S,e as x,g as n,o as y,h as e,m as F,M as q,B}from"./index-CbTStCTl.js";import{C as L,I as M}from"./index-BXsaYnEj.js";import{F as T,a as I}from"./index-DdTTUxBA.js";import{S as h}from"./index-CHPI_mhF.js";import{T as k}from"./index-5__bE4v5.js";import{S as D}from"./useResizeObserver-CP_6mhRt.js";import"./helper-BmLuHwHM.js";const N=()=>_.request("get","/admin/config/general"),R=d=>_.request("patch","/admin/config/general",{data:d}),J=c({__name:"General",setup(d){const i=U(),a=C({new_admin_password:"",parse_password:"",show_announce:!1,announce:"",custom_button:"",debug:!1,show_hero:!1,name:"",logo:""}),f={name:[{required:!0,message:"请输入站点名称"}],logo:[{required:!0,message:"请输入站点Logo"}]},r=async()=>{const u=await N();a.value={...u.data,new_admin_password:u.data.admin_password}};S(r);const w=async({validateResult:u})=>{u===!0&&(await R(a.value),q.success("保存成功"),await i.getConfig(),await r())};return(u,o)=>{const s=M,t=T,m=h,p=k,g=B,V=D,b=I,v=L;return y(),x(v,null,{default:n(()=>[e(b,{data:a.value,rules:f,onSubmit:w},{default:n(()=>[e(t,{name:"new_admin_password",label:"新管理员密码"},{default:n(()=>[e(s,{modelValue:a.value.new_admin_password,"onUpdate:modelValue":o[0]||(o[0]=l=>a.value.new_admin_password=l),type:"password"},null,8,["modelValue"])]),_:1}),e(t,{name:"parse_password",label:"解析密码"},{default:n(()=>[e(s,{modelValue:a.value.parse_password,"onUpdate:modelValue":o[1]||(o[1]=l=>a.value.parse_password=l),type:"password"},null,8,["modelValue"])]),_:1}),e(t,{name:"show_announce",label:"显示公告"},{default:n(()=>[e(m,{modelValue:a.value.show_announce,"onUpdate:modelValue":o[2]||(o[2]=l=>a.value.show_announce=l)},null,8,["modelValue"])]),_:1}),e(t,{name:"announce",label:"公告",help:"支持HTML"},{default:n(()=>[e(p,{modelValue:a.value.announce,"onUpdate:modelValue":o[3]||(o[3]=l=>a.value.announce=l)},null,8,["modelValue"])]),_:1}),e(t,{name:"custom_button",label:"自定义按钮",help:"按钮名称|点击跳转的链接 每行一个"},{default:n(()=>[e(p,{modelValue:a.value.custom_button,"onUpdate:modelValue":o[4]||(o[4]=l=>a.value.custom_button=l)},null,8,["modelValue"])]),_:1}),e(t,{name:"debug",label:"启用调试模式"},{default:n(()=>[e(m,{modelValue:a.value.debug,"onUpdate:modelValue":o[5]||(o[5]=l=>a.value.debug=l)},null,8,["modelValue"])]),_:1}),e(t,{name:"name",label:"站点名称"},{default:n(()=>[e(s,{modelValue:a.value.name,"onUpdate:modelValue":o[6]||(o[6]=l=>a.value.name=l)},null,8,["modelValue"])]),_:1}),e(t,{name:"logo",label:"站点Logo",help:"请填写正确的URL"},{default:n(()=>[e(s,{modelValue:a.value.logo,"onUpdate:modelValue":o[7]||(o[7]=l=>a.value.logo=l)},null,8,["modelValue"])]),_:1}),e(t,{name:"show_hero",label:"显示站点信息"},{default:n(()=>[e(m,{modelValue:a.value.show_hero,"onUpdate:modelValue":o[8]||(o[8]=l=>a.value.show_hero=l)},null,8,["modelValue"])]),_:1}),e(t,null,{default:n(()=>[e(V,{size:"small"},{default:n(()=>[e(g,{type:"submit"},{default:n(()=>o[9]||(o[9]=[F(" 保存 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1})}}});export{J as default};
