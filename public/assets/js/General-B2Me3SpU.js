import{x as f,d as x,u as U,r as v,v as C,a as j,b as t,o as S,e,g as k,M as q}from"./index-BygjqHYh.js";import{C as h,I as F,S as B}from"./index-v4f7V93P.js";import{F as L,a as M}from"./index-CQXL_kbm.js";import{S as T}from"./index-CZhruBQq.js";import{T as D}from"./index-B-5nXRlf.js";import{B as I}from"./useResizeObserver-9SToBxFp.js";import"./helper-ByEokoKS.js";const N=()=>f.request("get","/admin/config/general"),P=i=>f.request("patch","/admin/config/general",{data:i}),R="hklist-frontend",z="2.0.18",G="module",H={dev:"vite",build:"run-s type-check lint build:modify build-only build:recovery","build:modify":"tsx build/modify.ts","build:recovery":"tsx build/recovery.ts",preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --build","lint:oxlint":"oxlint . --fix -D correctness --ignore-path .oxlintignore","lint:eslint":"eslint . --fix",lint:"run-s lint:*",format:"prettier --write src/"},J={"@fingerprintjs/fingerprintjs":"^4.5.1",axios:"^1.7.9",dayjs:"^1.11.13","js-sha1":"^0.7.0",nprogress:"^0.2.0",pinia:"^2.2.6",qs:"^6.13.1","tdesign-icons-vue-next":"^0.3.3","tdesign-vue-next":"^1.10.4",vue:"^3.5.13","vue-i18n":"^10.0.5","vue-router":"^4.4.5"},A={"@tsconfig/node22":"^22.0.0","@types/node":"^22.9.3","@types/nprogress":"^0.2.3","@types/qs":"^6.9.17","@vitejs/plugin-vue":"^5.2.1","@vitejs/plugin-vue-jsx":"^4.1.1","@vue/eslint-config-prettier":"^10.1.0","@vue/eslint-config-typescript":"^14.1.3","@vue/tsconfig":"^0.7.0",eslint:"^9.14.0","eslint-plugin-oxlint":"^0.11.0","eslint-plugin-vue":"^9.30.0","npm-run-all2":"^7.0.1",oxlint:"^0.11.0",prettier:"^3.3.3","sass-embedded":"^1.82.0",tsx:"^4.19.2",typescript:"~5.6.3","unplugin-auto-import":"^0.18.6","unplugin-vue-components":"^0.27.5",vite:"^6.0.1","vite-plugin-compression":"^0.5.1","vue-tsc":"^2.1.10"},E={name:R,version:z,type:G,scripts:H,dependencies:J,devDependencies:A},$=x({__name:"General",setup(i){const _=U(),o=v({new_admin_password:"",parse_password:"",show_announce:!1,announce:"",custom_button:"",debug:!1,show_hero:!1,name:"",logo:""}),d=v({admin_password:"",version:"",frontend_version:"",parse_password:"",show_announce:!1,announce:"",custom_button:"",debug:!1,show_hero:!1,name:"",logo:""}),g={name:[{required:!0,message:"请输入站点名称"}],logo:[{required:!0,message:"请输入站点Logo"}]},m=async()=>{const s=await N();o.value={...s.data,new_admin_password:s.data.admin_password},d.value={...s.data,frontend_version:E.version}};C(m);const c=async({validateResult:s})=>{s===!0&&(await P(o.value),q.success("保存成功"),await _.getConfig(),await m())};return(s,n)=>{const u=F,a=L,r=T,p=D,b=I,w=B,V=M,y=h;return S(),j(y,null,{default:t(()=>[e(V,{data:o.value,rules:g,onSubmit:c},{default:t(()=>[e(a,{name:"frontend_version",label:"前端版本"},{default:t(()=>[e(u,{modelValue:d.value.frontend_version,"onUpdate:modelValue":n[0]||(n[0]=l=>d.value.frontend_version=l),disabled:""},null,8,["modelValue"])]),_:1}),e(a,{name:"version",label:"后端版本"},{default:t(()=>[e(u,{modelValue:d.value.version,"onUpdate:modelValue":n[1]||(n[1]=l=>d.value.version=l),disabled:""},null,8,["modelValue"])]),_:1}),e(a,{name:"new_admin_password",label:"新管理员密码"},{default:t(()=>[e(u,{modelValue:o.value.new_admin_password,"onUpdate:modelValue":n[2]||(n[2]=l=>o.value.new_admin_password=l),type:"password"},null,8,["modelValue"])]),_:1}),e(a,{name:"parse_password",label:"解析密码"},{default:t(()=>[e(u,{modelValue:o.value.parse_password,"onUpdate:modelValue":n[3]||(n[3]=l=>o.value.parse_password=l),type:"password"},null,8,["modelValue"])]),_:1}),e(a,{name:"show_announce",label:"显示公告"},{default:t(()=>[e(r,{modelValue:o.value.show_announce,"onUpdate:modelValue":n[4]||(n[4]=l=>o.value.show_announce=l)},null,8,["modelValue"])]),_:1}),e(a,{name:"announce",label:"公告",help:"支持HTML"},{default:t(()=>[e(p,{modelValue:o.value.announce,"onUpdate:modelValue":n[5]||(n[5]=l=>o.value.announce=l)},null,8,["modelValue"])]),_:1}),e(a,{name:"custom_button",label:"自定义按钮",help:"按钮名称|点击跳转的链接 每行一个"},{default:t(()=>[e(p,{modelValue:o.value.custom_button,"onUpdate:modelValue":n[6]||(n[6]=l=>o.value.custom_button=l)},null,8,["modelValue"])]),_:1}),e(a,{name:"debug",label:"启用调试模式"},{default:t(()=>[e(r,{modelValue:o.value.debug,"onUpdate:modelValue":n[7]||(n[7]=l=>o.value.debug=l)},null,8,["modelValue"])]),_:1}),e(a,{name:"name",label:"站点名称"},{default:t(()=>[e(u,{modelValue:o.value.name,"onUpdate:modelValue":n[8]||(n[8]=l=>o.value.name=l)},null,8,["modelValue"])]),_:1}),e(a,{name:"logo",label:"站点Logo",help:"请填写正确的URL"},{default:t(()=>[e(u,{modelValue:o.value.logo,"onUpdate:modelValue":n[9]||(n[9]=l=>o.value.logo=l)},null,8,["modelValue"])]),_:1}),e(a,{name:"show_hero",label:"显示站点信息"},{default:t(()=>[e(r,{modelValue:o.value.show_hero,"onUpdate:modelValue":n[10]||(n[10]=l=>o.value.show_hero=l)},null,8,["modelValue"])]),_:1}),e(a,null,{default:t(()=>[e(w,{size:"small"},{default:t(()=>[e(b,{type:"submit"},{default:t(()=>n[11]||(n[11]=[k(" 保存 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1})}}});export{$ as default};