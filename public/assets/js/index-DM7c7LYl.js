import{d as I,u as N,s as T,f as t,o as F,a as G,b as s,j as K,k as U,l as te,r as w,m as le,n as se,M as S,p as oe,q as ae,v as ne,e,g as C,t as A,h as P,F as z,w as ie,i as re}from"./index-BygjqHYh.js";import{C as E,S as Q,I as ue}from"./index-v4f7V93P.js";import{f as X,a as de}from"./format-Bs2LGFOW.js";import{g as ce}from"./getUrlId-C6EUnTTr.js";import{A as Y,u as me,_ as _e}from"./Aria2Dialog.vue_vue_type_script_setup_true_lang-CsCFjQ3E.js";import{F as pe,a as fe}from"./index-CQXL_kbm.js";import{B as q}from"./useResizeObserver-9SToBxFp.js";import{_ as ge}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as Z}from"./index-CI37gPSP.js";import{c as j,L as ve,a as we}from"./copy-B3CdJDtO.js";import{l as W}from"./link-oBMT2hG8.js";import{L as J}from"./index-DsAyL5mS.js";import{T as ke}from"./index-hph4CpVI.js";import"./index-D3PQS1_N.js";import"./index-C0fF67Ad.js";import"./dep-b315df3e-B2WzJNs2.js";import"./fake-arrow-DQMEmm_I.js";import"./dep-0df090f8-Dsz5MSis.js";import"./index-D6sQRzhI.js";import"./add-KYmva3pa.js";import"./useVirtualScrollNew-CgCJW7Jl.js";import"./helper-ByEokoKS.js";import"./index-voFSrPHV.js";const Le=["innerHTML"],ye=I({__name:"Announce",setup(k){const r=N(),{config:m}=T(r);return(g,a)=>{const x=E;return t(m).show_announce?(F(),G(x,{key:0,title:"公告"},{default:s(()=>[K("div",{innerHTML:t(m).announce},null,8,Le)]),_:1})):U("",!0)}}}),O=N(),H=te("fileList",()=>{const k=w({url:"",surl:"",pwd:"",dir:"/",parse_password:""}),r=w(),m=()=>{const i=k.value.dir.split("/");i.pop();const h=i.join("/");return h===""?"/":h},g=async()=>{n.value=[];const i=await le(k.value);r.value=i.data,k.value.dir!=="/"&&r.value.list.unshift({category:-1,fs_id:0,is_dir:!0,local_ctime:0,local_mtime:0,server_ctime:0,server_mtime:0,size:0,md5:"",path:m(),server_filename:"返回上一层",dlink:""})},a=w({token:"guest"}),x=w({count:0,size:0,expires_at:"1970-01-01 08:00:00"}),L=w(""),d=async()=>{var i,h;try{const c=await se(a.value);x.value=c.data,L.value=""}catch(c){const o=(h=(i=c==null?void 0:c.response)==null?void 0:i.data)==null?void 0:h.message;o&&(L.value=o)}},n=w([]),y=w([]),v=(i,h)=>{n.value=i,y.value=h.selectedRowData},l=w({hit_captcha:!1,vcode_str:"",vcode_img:"",vcode_input:""}),u=w(!1),D=w([]);return{GetFileListReq:k,GetFileListRes:r,getFileList:g,GetLimitReq:a,GetLimitRes:x,GetLimitError:L,getLimit:d,selectedRowKeys:n,handleSelectChange:v,getDownloadLinks:async(i,h)=>{var _,M,B;if(u.value)return S.error("正在解析中,请稍后再试"),!1;const{config:c}=O;i&&typeof i!="number"&&h&&(i.stopPropagation(),y.value=[h]);const o=y.value.filter(b=>b&&!b.is_dir);o.length!==y.value.length&&S.warning("文件夹不会进行解析,已忽略");const R=o.filter(b=>b.size>c.min_single_filesize);R.length!==o.length&&S.warning("文件过小不会被解析");const V=R.filter(b=>b.size<c.max_single_filesize);V.length!==R.length&&S.warning("文件过大不会被解析");const f=V;if(f.length>c.max_once){S.error(`单次最多解析${c.max_once}个文件`);return}if(f.length===0){S.error("满足要求的文件数量为0");return}try{u.value=!0;const b=await oe({randsk:r.value.randsk,uk:r.value.uk,shareid:r.value.shareid,fs_id:typeof i=="number"?[i]:f.map(p=>p.fs_id),surl:k.value.surl,dir:k.value.dir,pwd:k.value.pwd,token:a.value.token,parse_password:k.value.parse_password,...l.value.hit_captcha?{vcode_str:l.value.vcode_str,vcode_input:l.value.vcode_input}:{}});if(typeof i=="number")return S.success("重新解析成功"),b.data;S.success("解析成功,下滑查看解析结果"),D.value=b.data,l.value.hit_captcha=!1}catch(b){const p=b;if((B=(M=(_=p==null?void 0:p.response)==null?void 0:_.data)==null?void 0:M.message)!=null&&B.includes("-20")){const ee=await ae({parse_password:k.value.parse_password});l.value={hit_captcha:!0,...ee.data,vcode_input:""}}else S.error("解析可能失败或超时了,请稍后前往历史记录中尝试查询是否成功")}finally{u.value=!1,await d(),await O.getConfig()}},GetDownLoadLinksRes:D,vcode:l}}),he={key:1},Ce=["src"],be=I({__name:"Form",setup(k){const r=N(),{config:m}=T(r),g=H(),{GetFileListReq:a,GetLimitReq:x,GetLimitRes:L,GetLimitError:d,GetFileListRes:n,GetDownLoadLinksRes:y,vcode:v}=T(g),l=()=>{const c=ce(a.value.url);if(!c)return;const{surl:o,pwd:R,url:V}=c;a.value.surl=o,a.value.url=V,a.value.dir="/",R&&(a.value.pwd=R,S.success("已自动填写密码~"))},u=()=>{a.value.dir="",n.value=void 0,y.value=[]},D={url:[{required:!0,message:"链接不能为空"}],parse_password:[{required:!0,message:"解析密码不能为空"}],vcode_input:[{required:!0,message:"验证码不能为空"}]};ne(()=>{g.getLimit(),r.getConfig()});const $=async({validateResult:c})=>{c===!0&&(a.value.dir="/",await g.getFileList(),S.success("获取成功"))},i=w(Date.now()),h=()=>{i.value=Date.now()};return(c,o)=>{const R=Y,V=Q,f=ue,_=pe,M=q,B=fe,b=E;return F(),G(b,null,{default:s(()=>[e(V,{direction:"vertical",class:"space"},{default:s(()=>[e(R,{theme:t(m).have_account?"success":"error"},{default:s(()=>[C(A(t(m).have_account?"当前中转账号充足":"当前中转账号不足"),1)]),_:1},8,["theme"]),t(m).debug?(F(),G(R,{key:0,theme:"error"},{default:s(()=>o[6]||(o[6]=[C(" 当前网站开启了DEBUG模式,非调试请关闭!!!! ")])),_:1})):U("",!0),e(R,{theme:t(d).length===0?"success":"error"},{default:s(()=>[t(d).length===0?(F(),G(V,{key:0},{default:s(()=>[K("span",null,"剩余可解析文件数: "+A(t(L).count),1),K("span",null,"剩余可解析大小: "+A(t(X)(t(L).size)),1),K("span",null,"到期时间: "+A(t(L).expires_at),1)]),_:1})):(F(),P("span",he,A(t(d)),1))]),_:1},8,["theme"]),e(B,{data:t(a),rules:D,labelWidth:120,onSubmit:$},{default:s(()=>[e(_,{name:"url",label:"链接"},{default:s(()=>[e(f,{modelValue:t(a).url,"onUpdate:modelValue":o[0]||(o[0]=p=>t(a).url=p),modelModifiers:{trim:!0},onBlur:l,onChange:u},null,8,["modelValue"])]),_:1}),e(_,{name:"surl",label:"提取到的链接"},{default:s(()=>[e(f,{value:t(a).surl,disabled:""},null,8,["value"])]),_:1}),e(_,{name:"pwd",label:"提取码"},{default:s(()=>[e(f,{modelValue:t(a).pwd,"onUpdate:modelValue":o[1]||(o[1]=p=>t(a).pwd=p),modelModifiers:{trim:!0},onChange:u},null,8,["modelValue"])]),_:1}),t(m).need_password?(F(),G(_,{key:0,name:"parse_password",label:"解析密码"},{default:s(()=>[e(f,{modelValue:t(a).parse_password,"onUpdate:modelValue":o[2]||(o[2]=p=>t(a).parse_password=p),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1})):U("",!0),e(_,{name:"token",label:"卡密"},{default:s(()=>[e(f,{modelValue:t(x).token,"onUpdate:modelValue":o[3]||(o[3]=p=>t(x).token=p),modelModifiers:{trim:!0},onBlur:t(g).getLimit},null,8,["modelValue","onBlur"])]),_:1}),e(_,{name:"dir",label:"路径"},{default:s(()=>[e(f,{modelValue:t(a).dir,"onUpdate:modelValue":o[4]||(o[4]=p=>t(a).dir=p),modelModifiers:{trim:!0},disabled:""},null,8,["modelValue"])]),_:1}),t(v).hit_captcha?(F(),P(z,{key:1},[e(_,{label:"验证码图片",name:"vcode_img"},{default:s(()=>[K("img",{src:`${t(v).vcode_img}&t=${i.value}`,onClick:h},null,8,Ce)]),_:1}),e(_,{label:"验证码字符",name:"vcode_input"},{default:s(()=>[e(f,{modelValue:t(v).vcode_input,"onUpdate:modelValue":o[5]||(o[5]=p=>t(v).vcode_input=p)},null,8,["modelValue"])]),_:1})],64)):U("",!0),e(_,null,{default:s(()=>[e(V,{size:"small"},{default:s(()=>[e(M,{type:"submit"},{default:s(()=>o[7]||(o[7]=[C(" 获取文件列表 ")])),_:1}),e(M,{onClick:t(g).getDownloadLinks},{default:s(()=>o[8]||(o[8]=[C(" 批量解析 ")])),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})}}}),Re=ge(be,[["__scopeId","data-v-64272d66"]]),Fe=I({__name:"FilesList",setup(k){const r=H(),{GetFileListReq:m,GetFileListRes:g,selectedRowKeys:a}=T(r),x=w([{colKey:"row-select",type:"multiple",width:50,fixed:"left"},{colKey:"server_filename",title:"文件名",cell:(d,{row:n})=>e(z,null,[e("div",{class:"filename"},[e("img",{class:"ico",src:n.is_dir?"/images/folder.png":"/images/file.png"},null),e("span",null,[n.server_filename])])]),ellipsis:!0},{colKey:"server_mtime",title:"修改时间",cell:(d,{row:n})=>e(z,null,[de(n.server_mtime)]),ellipsis:!0},{colKey:"size",title:"文件大小",cell:(d,{row:n})=>e(z,null,[X(n.size)]),ellipsis:!0},{colKey:"operation",title:"操作",cell:(d,{row:n})=>n.is_dir?e(z,null,[e(q,{theme:"primary",onClick:y=>L(y,n.path)},{default:()=>[C("打开文件夹")]})]):e(z,null,[e(q,{theme:"primary",onClick:y=>r.getDownloadLinks(y,n)},{default:()=>[C("解析")]})]),width:130,align:"center",fixed:"right"}]),L=async(d,n)=>{d.stopPropagation(),m.value.dir=n,await r.getFileList()};return(d,n)=>{const y=Z,v=E;return t(g)?(F(),G(v,{key:0},{default:s(()=>[e(y,{"row-key":"fs_id",resizable:"","lazy-load":"",bordered:!0,data:t(g).list,maxHeight:500,columns:x.value,"select-on-row-click":!0,selectedRowKeys:t(a),onSelectChange:t(r).handleSelectChange},null,8,["data","columns","selectedRowKeys","onSelectChange"])]),_:1})):U("",!0)}}}),xe=I({__name:"LinksList",setup(k){const r=H(),{GetDownLoadLinksRes:m}=T(r),g=me(),a=w([{colKey:"row-select",type:"multiple",width:50,fixed:"left"},{colKey:"message",title:"状态"},{colKey:"filename",title:"文件名"},{colKey:"ua",title:"UA",cell:(v,{row:l})=>e(J,{onClick:()=>j(l.ua)},{default:()=>[e(W,null,null),l.ua]})},{colKey:"fs_id",title:"文件ID"},{colKey:"operation",title:"操作",cell:(v,{row:l,rowIndex:u})=>e(z,null,[e(q,{onClick:()=>x(l,u)},{default:()=>[C("重新解析")]})])}]),x=async(v,l)=>{const u=await r.getDownloadLinks(v.fs_id);u&&(m.value[l]=u[0])},L=w([]),d=w([]),n=(v,l)=>{L.value=v,d.value=l.selectedRowData.filter(u=>u.urls).map(u=>({filename:u.filename,urls:u.urls,ua:u.ua}))};ie(m,()=>{L.value=[],d.value=[]});const y=()=>{L.value=[],d.value=[]};return(v,l)=>{const u=J,D=q,$=Q,i=Y,h=ke,c=we,o=ve,R=Z,V=E;return t(m).length>0?(F(),G(V,{key:0},{default:s(()=>[e($,{direction:"vertical"},{default:s(()=>[e(i,null,{default:s(()=>[l[4]||(l[4]=C(" 下载请推荐使用Aria2下载器,如 ")),e(u,{href:"https://motrix.app/",target:"_blank"},{"prefix-icon":s(()=>[e(t(W))]),default:s(()=>[l[1]||(l[1]=C(" Motrix "))]),_:1}),l[5]||(l[5]=K("p",null,"IDM下载需要手动指定UA,点击即可复制",-1)),l[6]||(l[6]=K("p",null,"如果当前链接下载失败,请尝试更换链接,如果全部不可用可重新解析该文件",-1)),l[7]||(l[7]=K("br",null,null,-1)),e($,null,{default:s(()=>[e(D,{onClick:t(g).showAria2Config},{default:s(()=>l[2]||(l[2]=[C(" 修改Aria2配置 ")])),_:1},8,["onClick"]),e(D,{onClick:l[0]||(l[0]=f=>t(g).downloadLinks(d.value))},{default:s(()=>l[3]||(l[3]=[C("批量发送")])),_:1})]),_:1})]),_:1}),e(R,{"row-key":"fs_id",resizable:"","lazy-load":"",bordered:!0,data:t(m),columns:a.value,"select-on-row-click":!0,selectedRowKeys:L.value,onSelectChange:n,onPageChange:y},{expandedRow:s(({row:f})=>[e(o,{split:"",size:"large"},{default:s(()=>[(F(!0),P(z,null,re(f.urls,(_,M)=>(F(),G(c,{key:_},{default:s(()=>[e($,{direction:"vertical"},{default:s(()=>[e($,null,{default:s(()=>[e(h,{size:"large"},{default:s(()=>[C(" 第 "+A(M+1)+" 条 ",1)]),_:2},1024),e(D,{onClick:B=>t(j)(_)},{default:s(()=>l[8]||(l[8]=[C("复制")])),_:2},1032,["onClick"]),e(D,{onClick:B=>t(g).addAria2Url(_,f.filename,f.ua,16)},{default:s(()=>l[9]||(l[9]=[C("发送到Aria2下载器")])),_:2},1032,["onClick"])]),_:2},1024),K("p",null,A(_),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:1},8,["data","columns","selectedRowKeys"])]),_:1})]),_:1})):U("",!0)}}}),Xe=I({__name:"index",setup(k){return(r,m)=>(F(),P(z,null,[e(ye),e(Re),e(Fe),e(xe),e(_e)],64))}});export{Xe as default};