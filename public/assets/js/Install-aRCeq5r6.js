import{h as y,d as c,j as g,o as M,a as I,w as l,A as w,b as a,f as n,g as U,M as x}from"./index-BrogXIyH.js";import{L as B}from"./index-BjwETDbB.js";import{I as C,B as F,S as N}from"./form-model-CALRRR2O.js";import{F as k,a as L}from"./index-CB8cFtmw.js";import{I as S}from"./index-B3944tmz.js";import{C as R}from"./index-C_NOUe_1.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useResizeObserver-CrmIqf6F.js";import"./add-WtetHkRT.js";const z="/favicon.ico",A=d=>y.request("post","/install",{data:d}),D=c({__name:"Install",setup(d){const r=w(),t=g({app_name:"",db_host:"",db_port:3306,db_database:"",db_username:"",db_password:""}),_={app_name:[{required:!0,message:"请输入网站名称"}],db_host:[{required:!0,message:"请输入Mysql地址"}],db_port:[{required:!0,message:"请输入Mysql端口"}],db_database:[{required:!0,message:"请输入Mysql数据库"}],db_username:[{required:!0,message:"请输入Mysql用户名"}]},p=async({validateResult:m})=>{m===!0&&(await A(t.value),x.success("安装成功"),r.push("/admin"))};return(m,e)=>{const u=C,s=k,b=S,i=F,f=N,V=L,v=R,q=B;return M(),I(q,null,{default:l(()=>[a(v,{class:"login"},{default:l(()=>[e[7]||(e[7]=n("h1",null,[n("img",{src:z,alt:"logo"})],-1)),e[8]||(e[8]=n("h2",null,"安装 | HkList",-1)),a(V,{data:t.value,rules:_,onSubmit:p},{default:l(()=>[a(s,{name:"app_name",label:"网站名称"},{default:l(()=>[a(u,{modelValue:t.value.app_name,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value.app_name=o)},null,8,["modelValue"])]),_:1}),a(s,{name:"db_host",label:"Mysql地址"},{default:l(()=>[a(u,{modelValue:t.value.db_host,"onUpdate:modelValue":e[1]||(e[1]=o=>t.value.db_host=o)},null,8,["modelValue"])]),_:1}),a(s,{name:"db_port",label:"Mysql端口"},{default:l(()=>[a(b,{modelValue:t.value.db_port,"onUpdate:modelValue":e[2]||(e[2]=o=>t.value.db_port=o)},null,8,["modelValue"])]),_:1}),a(s,{name:"db_database",label:"Mysql数据库"},{default:l(()=>[a(u,{modelValue:t.value.db_database,"onUpdate:modelValue":e[3]||(e[3]=o=>t.value.db_database=o)},null,8,["modelValue"])]),_:1}),a(s,{name:"db_username",label:"Mysql用户名"},{default:l(()=>[a(u,{modelValue:t.value.db_username,"onUpdate:modelValue":e[4]||(e[4]=o=>t.value.db_username=o)},null,8,["modelValue"])]),_:1}),a(s,{name:"db_password",label:"Mysql密码"},{default:l(()=>[a(u,{modelValue:t.value.db_password,"onUpdate:modelValue":e[5]||(e[5]=o=>t.value.db_password=o)},null,8,["modelValue"])]),_:1}),a(s,null,{default:l(()=>[a(f,{size:"small"},{default:l(()=>[a(i,{type:"submit"},{default:l(()=>e[6]||(e[6]=[U(" 提交 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})}}}),W=j(D,[["__scopeId","data-v-88a38fec"]]);export{W as default};
