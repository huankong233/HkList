import{h as d,d as U,j as x,l as S,o as B,a as y,w as s,b as e,g as f,M as m}from"./index-D_e8F7w3.js";import{I as h,B as A,S as F}from"./form-model-B5UeREqF.js";import{F as M,a as q}from"./index-Bo65_XdH.js";import{O as I,S as W}from"./index-BOGHR9gk.js";import{S as z}from"./index-CdbolhUg.js";import{C as G}from"./index-D2qLX_da.js";import"./useResizeObserver-DpG4jxLQ.js";import"./fake-arrow-B67j7q7r.js";const J=()=>d.request("get","/admin/config/parse"),N=p=>d.request("patch","/admin/config/parse",{data:p}),O=()=>d.request("post","/admin/config/parse/test_auth"),H=U({__name:"Parse",setup(p){const a=x({parser_server:"",parser_password:"",parse_mode:1,user_agent:"",use_exploit:!1}),v={user_agent:[{required:!0,message:"请输入下载UA"}]},i=async()=>{const o=await J();a.value=o.data};S(i);const g=async({validateResult:o})=>{o===!0&&(await N(a.value),m.success("保存成功"),await i())},_=()=>{switch(a.value.parse_mode){case 1:case 2:case 6:a.value.user_agent="netdisk;P2SP;3.0.20.63;netdisk;4.36.2;PC;PC-Windows;10.0.19045;UniBaiduYunGuanJia";break;case 3:a.value.user_agent="pan.baidu.com";break;case 4:a.value.user_agent="Mozilla/5.0 (94list-laravel;netdisk;svip)";break;case 5:a.value.user_agent="netdisk;hklist";break;default:a.value.user_agent="netdisk;P2SP;3.0.20.63;netdisk;4.36.2;PC;PC-Windows;10.0.19045;UniBaiduYunGuanJia";break}},b=async()=>{const o=await O();o.data.valid?m.success(`测试通过,有效期至: ${o.data.expires_at}`):m.error("测试失败,请检查授权服务器和授权密钥")};return(o,t)=>{const u=h,n=M,r=I,V=W,k=z,c=A,w=F,C=q,P=G;return B(),y(P,null,{default:s(()=>[e(C,{data:a.value,rules:v,onSubmit:g,labelWidth:130},{default:s(()=>[e(n,{name:"parser_server",label:"授权服务器"},{default:s(()=>[e(u,{modelValue:a.value.parser_server,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value.parser_server=l)},null,8,["modelValue"])]),_:1}),e(n,{name:"parser_password",label:"授权密钥"},{default:s(()=>[e(u,{modelValue:a.value.parser_password,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value.parser_password=l)},null,8,["modelValue"])]),_:1}),e(n,{name:"parse_mode",label:"解析模式"},{default:s(()=>[e(V,{modelValue:a.value.parse_mode,"onUpdate:modelValue":t[2]||(t[2]=l=>a.value.parse_mode=l),onChange:_,onBlur:_},{default:s(()=>[e(r,{label:"V1盘内",value:1}),e(r,{label:"V2盘外",value:2}),e(r,{label:"V3开放平台",value:3}),e(r,{label:"V4开放平台",value:4}),e(r,{label:"V5企业模式",value:5}),e(r,{label:"V6下载卷",value:6})]),_:1},8,["modelValue"])]),_:1}),e(n,{name:"user_agent",label:"下载UA"},{default:s(()=>[e(u,{modelValue:a.value.user_agent,"onUpdate:modelValue":t[3]||(t[3]=l=>a.value.user_agent=l)},null,8,["modelValue"])]),_:1}),e(n,{name:"use_exploit",label:"启用漏洞模式",help:"仅限小于100M的文件, 需要准备无会员的CK账号"},{default:s(()=>[e(k,{modelValue:a.value.use_exploit,"onUpdate:modelValue":t[4]||(t[4]=l=>a.value.use_exploit=l)},null,8,["modelValue"])]),_:1}),e(n,null,{default:s(()=>[e(w,{size:"small"},{default:s(()=>[e(c,{theme:"primary",type:"submit"},{default:s(()=>t[5]||(t[5]=[f(" 提交 ")])),_:1}),e(c,{theme:"primary",onClick:b},{default:s(()=>t[6]||(t[6]=[f(" 测试授权 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1})}}});export{H as default};