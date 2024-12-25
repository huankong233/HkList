import{D as r,d as V,b as w,A as z,e as b,g as i,o as y,h as a,m as B,M as q,B as C}from"./index-CbTStCTl.js";import{G as m}from"./format-DHjyyIVF.js";import{C as U}from"./index-BXsaYnEj.js";import{I as F}from"./index-XHJDC89q.js";import{F as G,a as S}from"./index-DdTTUxBA.js";import{S as I}from"./index-CHPI_mhF.js";import{S as M}from"./useResizeObserver-CP_6mhRt.js";import"./add-Cqva-xJC.js";const N=()=>r.request("get","/admin/config/limit"),k=u=>r.request("patch","/admin/config/limit",{data:u}),E=V({__name:"Limit",setup(u){const e=w({max_once:0,min_single_filesize:0,max_single_filesize:0,max_download_daily_pre_account:0,limit_cn:!1,limit_prov:!1}),f={max_once:[{required:!0,message:"请输入单次最大能解析多少文件"}],min_single_filesize:[{required:!0,message:"请输入单次最小能解析的文件大小"}],max_single_filesize:[{required:!0,message:"请输入单次最大能解析的文件大小"}],max_download_daily_pre_account:[{required:!0,message:"请输入单个账号每日最大解析量"}]},s=async()=>{const n=await N();n.data.min_single_filesize=n.data.min_single_filesize/m,n.data.max_single_filesize=n.data.max_single_filesize/m,n.data.max_download_daily_pre_account=n.data.max_download_daily_pre_account/m,e.value=n.data};z(s);const p=async({validateResult:n})=>{n===!0&&(await k({...e.value,min_single_filesize:e.value.min_single_filesize*m,max_single_filesize:e.value.max_single_filesize*m,max_download_daily_pre_account:e.value.max_download_daily_pre_account*m}),q.success("保存成功"),await s())};return(n,l)=>{const _=F,o=G,d=I,c=C,g=M,x=S,v=U;return y(),b(v,null,{default:i(()=>[a(x,{data:e.value,rules:f,onSubmit:p,labelWidth:230},{default:i(()=>[a(o,{name:"max_once",label:"单次最大能解析多少文件"},{default:i(()=>[a(_,{min:0,modelValue:e.value.max_once,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value.max_once=t),"auto-width":""},null,8,["modelValue"])]),_:1}),a(o,{name:"min_single_filesize",label:"单次最小能解析的文件大小 (GB)"},{default:i(()=>[a(_,{min:0,modelValue:e.value.min_single_filesize,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value.min_single_filesize=t),"auto-width":""},null,8,["modelValue"])]),_:1}),a(o,{name:"max_single_filesize",label:"单次最大能解析的文件大小 (GB)"},{default:i(()=>[a(_,{min:0,modelValue:e.value.max_single_filesize,"onUpdate:modelValue":l[2]||(l[2]=t=>e.value.max_single_filesize=t),"auto-width":""},null,8,["modelValue"])]),_:1}),a(o,{name:"max_download_daily_pre_account",label:"单个账号每日最大解析量 (GB)",help:"不是用户,是后台设置的解析账号"},{default:i(()=>[a(_,{min:0,modelValue:e.value.max_download_daily_pre_account,"onUpdate:modelValue":l[3]||(l[3]=t=>e.value.max_download_daily_pre_account=t),"auto-width":""},null,8,["modelValue"])]),_:1}),a(o,{name:"limit_cn",label:"仅限中国用户使用"},{default:i(()=>[a(d,{modelValue:e.value.limit_cn,"onUpdate:modelValue":l[4]||(l[4]=t=>e.value.limit_cn=t)},null,8,["modelValue"])]),_:1}),a(o,{name:"limit_prov",label:"对解析账号做市级分组"},{default:i(()=>[a(d,{modelValue:e.value.limit_prov,"onUpdate:modelValue":l[5]||(l[5]=t=>e.value.limit_prov=t)},null,8,["modelValue"])]),_:1}),a(o,null,{default:i(()=>[a(g,{size:"small"},{default:i(()=>[a(c,{type:"submit"},{default:i(()=>l[6]||(l[6]=[B(" 保存 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1})}}});export{E as default};
