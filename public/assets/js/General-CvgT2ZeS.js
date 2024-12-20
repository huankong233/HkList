import{C as _,d as v,a as C,b as U,z as S,e as x,g as n,o as y,h as e,l as F,M as q,B}from"./index-oOsh6Yp-.js";import{C as L,I as M,S as T}from"./index-BhO2Ilwz.js";import{F as I,a as k}from"./index-DZkpM1t2.js";import{S as z}from"./index-B_yVaMyO.js";import{T as N}from"./index-CfiH0Xvj.js";import"./useResizeObserver-PaY5eqjE.js";import"./helper-GPcm8NCZ.js";const R=()=>_.request("get","/admin/config/general"),D=m=>_.request("patch","/admin/config/general",{data:m}),K=v({__name:"General",setup(m){const i=C(),a=U({new_admin_password:"",parse_password:"",show_announce:!1,announce:"",custom_button:"",debug:!1,name:"",logo:""}),f={name:[{required:!0,message:"请输入站点名称"}],logo:[{required:!0,message:"请输入站点Logo"}]},d=async()=>{const u=await R();a.value={...u.data,new_admin_password:u.data.admin_password}};S(d);const g=async({validateResult:u})=>{u===!0&&(await D(a.value),q.success("保存成功"),await i.getConfig(),await d())};return(u,o)=>{const s=M,t=I,r=z,p=N,w=B,V=T,c=k,b=L;return y(),x(b,null,{default:n(()=>[e(c,{data:a.value,rules:f,onSubmit:g},{default:n(()=>[e(t,{name:"new_admin_password",label:"新管理员密码"},{default:n(()=>[e(s,{modelValue:a.value.new_admin_password,"onUpdate:modelValue":o[0]||(o[0]=l=>a.value.new_admin_password=l),type:"password"},null,8,["modelValue"])]),_:1}),e(t,{name:"parse_password",label:"解析密码"},{default:n(()=>[e(s,{modelValue:a.value.parse_password,"onUpdate:modelValue":o[1]||(o[1]=l=>a.value.parse_password=l),type:"password"},null,8,["modelValue"])]),_:1}),e(t,{name:"show_announce",label:"显示公告"},{default:n(()=>[e(r,{modelValue:a.value.show_announce,"onUpdate:modelValue":o[2]||(o[2]=l=>a.value.show_announce=l)},null,8,["modelValue"])]),_:1}),e(t,{name:"announce",label:"公告",help:"支持HTML"},{default:n(()=>[e(p,{modelValue:a.value.announce,"onUpdate:modelValue":o[3]||(o[3]=l=>a.value.announce=l)},null,8,["modelValue"])]),_:1}),e(t,{name:"custom_button",label:"自定义按钮",help:"按钮名称|点击跳转的链接 每行一个"},{default:n(()=>[e(p,{modelValue:a.value.custom_button,"onUpdate:modelValue":o[4]||(o[4]=l=>a.value.custom_button=l)},null,8,["modelValue"])]),_:1}),e(t,{name:"debug",label:"启用调试模式"},{default:n(()=>[e(r,{modelValue:a.value.debug,"onUpdate:modelValue":o[5]||(o[5]=l=>a.value.debug=l)},null,8,["modelValue"])]),_:1}),e(t,{name:"name",label:"站点名称"},{default:n(()=>[e(s,{modelValue:a.value.name,"onUpdate:modelValue":o[6]||(o[6]=l=>a.value.name=l)},null,8,["modelValue"])]),_:1}),e(t,{name:"logo",label:"站点Logo",help:"请填写正确的URL"},{default:n(()=>[e(s,{modelValue:a.value.logo,"onUpdate:modelValue":o[7]||(o[7]=l=>a.value.logo=l)},null,8,["modelValue"])]),_:1}),e(t,null,{default:n(()=>[e(V,{size:"small"},{default:n(()=>[e(w,{type:"submit"},{default:n(()=>o[8]||(o[8]=[F(" 提交 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1})}}});export{K as default};