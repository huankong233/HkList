import{D as d,d as U,b as S,A as P,e as A,g as s,o as B,h as e,m as f,M as m,B as F}from"./index-CQNaPwWs.js";import{C as M,I as q,S as y}from"./index-BJ3ACpST.js";import{F as h,a as I}from"./index-D3Tw08DD.js";import{O as z,S as D}from"./index-BQzYU7VN.js";import{S as N}from"./index-mwZCsa2t.js";import"./useResizeObserver-nOc0QERr.js";import"./dep-1296ed3e-DR5KeVn-.js";import"./fake-arrow-DX6H7nFG.js";import"./index-DqGqNvi5.js";const O=()=>d.request("get","/admin/config/parse"),T=p=>d.request("patch","/admin/config/parse",{data:p}),W=()=>d.request("post","/admin/config/parse/test_auth"),L=U({__name:"Parse",setup(p){const a=S({parser_server:"",parser_password:"",parse_mode:1,user_agent:"",use_exploit:!1}),v={user_agent:[{required:!0,message:"请输入下载UA"}]},_=async()=>{const n=await O();a.value=n.data};P(_);const b=async({validateResult:n})=>{n===!0&&(await T(a.value),m.success("保存成功"),await _())},i=()=>{switch(a.value.parse_mode){case 0:a.value.user_agent="netdisk;7.42.0.5;PC";break;case 1:case 2:case 6:a.value.user_agent="netdisk;P2SP;3.0.20.63;netdisk;4.36.2;PC;PC-Windows;10.0.19045;UniBaiduYunGuanJia";break;case 3:a.value.user_agent="pan.baidu.com";break;case 4:a.value.user_agent="Mozilla/5.0 (94list-laravel;netdisk;svip)";break;case 5:a.value.user_agent="netdisk;hklist";break;default:m.error("未知解析模式");break}},g=async()=>{const n=await W();m.success(`测试通过,有效期至: ${n.data.expires_at}`)};return(n,t)=>{const u=q,r=h,o=z,V=D,k=N,c=F,w=y,C=I,x=M;return B(),A(x,null,{default:s(()=>[e(C,{data:a.value,rules:v,onSubmit:b,labelWidth:130},{default:s(()=>[e(r,{name:"parser_server",label:"授权服务器"},{default:s(()=>[e(u,{modelValue:a.value.parser_server,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value.parser_server=l)},null,8,["modelValue"])]),_:1}),e(r,{name:"parser_password",label:"授权密钥"},{default:s(()=>[e(u,{modelValue:a.value.parser_password,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value.parser_password=l)},null,8,["modelValue"])]),_:1}),e(r,{name:"parse_mode",label:"解析模式"},{default:s(()=>[e(V,{modelValue:a.value.parse_mode,"onUpdate:modelValue":t[2]||(t[2]=l=>a.value.parse_mode=l),onChange:i,onBlur:i},{default:s(()=>[e(o,{label:"V0免费",value:0}),e(o,{label:"V1盘内",value:1}),e(o,{label:"V2盘外",value:2}),e(o,{label:"V3开放平台",value:3}),e(o,{label:"V4开放平台",value:4}),e(o,{label:"V5企业模式",value:5}),e(o,{label:"V6下载卷",value:6})]),_:1},8,["modelValue"])]),_:1}),e(r,{name:"user_agent",label:"下载UA"},{default:s(()=>[e(u,{modelValue:a.value.user_agent,"onUpdate:modelValue":t[3]||(t[3]=l=>a.value.user_agent=l)},null,8,["modelValue"])]),_:1}),e(r,{name:"use_exploit",label:"启用漏洞模式",help:"小于100M的文件使用漏洞模式, 需要准备无会员的CK账号, 不支持V0"},{default:s(()=>[e(k,{modelValue:a.value.use_exploit,"onUpdate:modelValue":t[4]||(t[4]=l=>a.value.use_exploit=l)},null,8,["modelValue"])]),_:1}),e(r,null,{default:s(()=>[e(w,{size:"small"},{default:s(()=>[e(c,{type:"submit"},{default:s(()=>t[5]||(t[5]=[f(" 保存 ")])),_:1}),e(c,{onClick:g},{default:s(()=>t[6]||(t[6]=[f(" 测试授权 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1})}}});export{L as default};
