import{v as P,l as te,r as U,M as f,d as z,s as F,o as A,a as K,b as a,e,f as o,S as T,h as X,F as $,k as le,g as p,q as oe,j as ae,i as ne,t as ue}from"./index-C3wxJ-Zt.js";import{a as G,f as H}from"./format-CIBOUphW.js";import{u as se}from"./useCommonStore-KDPhLcc9.js";import{g as ie}from"./getUrlId-C6EUnTTr.js";import{O,S as L}from"./index-CUg2CudF.js";import{F as M,a as J}from"./index-D4P_06xV.js";import{I as W,S as N,C as de}from"./index-D6lIC7tq.js";import{T as re}from"./index-ByREHG1i.js";import{B}from"./useResizeObserver-BSsH2PXN.js";import{D as j}from"./index-DJEb95Wr.js";import{S as ce}from"./index-CSMTpfuk.js";import{a as me,D as pe}from"./index-Deut65Jf.js";import{T as _e}from"./index-B2ZVhCce.js";import"./dep-b315df3e-DTrBxfMW.js";import"./fake-arrow-WYGXrZol.js";import"./index-CudzI4LV.js";import"./helper-DIJhXpUd.js";import"./dep-0df090f8-CEZpFJqT.js";import"./index-stA1_DWP.js";import"./add-ttRL20ON.js";import"./useVirtualScrollNew-KOwHHpxq.js";const ve=_=>P.request("get","/admin/account",{params:_}),fe=_=>P.request("post","/admin/account",{data:_}),be=_=>P.request("post","/admin/account/update_info",{data:_}),Q=_=>P.request("patch","/admin/account",{data:_}),ke=_=>P.request("delete","/admin/account",{data:_}),we=_=>P.request("post","/admin/account/check_ban_status",{data:_}),E=te("accounts",()=>{const[_,u,r,s]=se(ve,()=>{n.value=[]}),n=U([]),h=C=>{n.value=C},V=async()=>{if(n.value.length===0)return f.error("请选择账号");await be({id:n.value}),f.success("更新成功"),await s()},b=async()=>{if(n.value.length===0)return f.error("请选择账号");await ke({id:n.value}),n.value=[],f.success("删除成功"),await s()},l=U(!1),t=U({id:[],switch:!1}),c=()=>l.value=!0,m=()=>l.value=!1,d=async()=>{if(n.value.length===0)return f.error("请选择账号");await Q({...t.value,id:n.value}),f.success("更新成功"),await s()},v=U(!1),g=()=>v.value=!0,y=()=>v.value=!1,w=U({id:[],prov:null}),k=async()=>{if(n.value.length===0)return f.error("请选择账号");await Q({...w.value,id:n.value}),f.success("更新省份成功"),await s()},D=U(!1),i=()=>D.value=!0,Y=async()=>D.value=!1,R=U("cookie"),S=U({cookie:"",refresh_token:"",url:"",surl:"",pwd:"",dir:"",save_cookie:"",download_cookie:""});return{pagination:u,selectReq:_,accountList:r,getAccounts:s,selectedRowKeys:n,handleSelectChange:h,updateInfoSelection:V,deleteSelection:b,isUpdateSwitch:l,updateSwitchReq:t,showUpdateSwitchDialog:c,hideUpdateSwitchDialog:m,updateSwitch:d,isUpdateProvDialog:v,updateProvReq:w,showUpdateProvDialog:g,hideUpdateProvDialog:y,updateProvSelection:k,isAddAccount:D,addAccountType:R,addAccountInput:S,showAddAccountDialog:i,hideAddAccountDialog:Y,addAccount:async()=>{const C={account_type:R.value,account_data:[]};R.value==="cookie"?C.account_data=[{cookie:S.value.cookie}]:R.value==="enterprise_cokie"?C.account_data=[{cookie:S.value.cookie}]:R.value==="open_platform"?C.account_data=[{refresh_token:S.value.refresh_token}]:R.value==="download_ticket"&&(C.account_data=[{surl:S.value.surl,pwd:S.value.pwd,dir:S.value.dir,save_cookie:S.value.save_cookie,download_cookie:S.value.download_cookie}]),await fe(C),f.success("插入成功~"),S.value={cookie:"",refresh_token:"",url:"",surl:"",pwd:"",dir:"",save_cookie:"",download_cookie:""},await s()},checkAccountBanStatus:async(C,Z)=>{C.stopPropagation(),(await we({id:[Z]})).data.forEach(x=>{x.status.forEach((q,ee)=>{let I="账号";if(x.account_type==="download_ticket"&&(I=ee===0?"企业账号":"普通账号"),q.code!==200)return f.error(`${I}(${x.id})${q.message}`);if(!q.data.ban_status)return f.success(`${I}(${x.id})未被封禁`);f.warning(`${I}(${x.id})已被封禁`),f.warning(`原因: ${q.data.ban_reason}`),f.warning(`消息: ${q.data.ban_msg}`),f.warning(`开始时间: ${G(q.data.start_time)}`),f.warning(`结束时间: ${G(q.data.end_time)}`)})})}}}),ge=z({__name:"AddAccount",setup(_){const u=E(),{isAddAccount:r,addAccountType:s,addAccountInput:n}=F(u),h={cookie:[{required:!0,message:"Cookie不能为空"}],refresh_token:[{required:!0,message:"RefreshToken不能为空"}],surl:[{required:!0,message:"Surl不能为空"}],url:[{required:!0,message:"分享链接不能为空"}],pwd:[{required:!0,message:"链接密码不能为空"}],dir:[{required:!0,message:"盘内路径不能为空"}],save_cookie:[{required:!0,message:"企业号CK不能为空"}],download_cookie:[{required:!0,message:"普通号CK不能为空"}]},V=async({validateResult:l})=>{l===!0&&await u.addAccount()},b=()=>{const l=ie(n.value.url);if(!l)return;const{surl:t,pwd:c,url:m}=l;n.value.surl=t,n.value.url=m,n.value.dir="/",c&&(n.value.pwd=c,f.success("已自动填写密码~"))};return(l,t)=>{const c=O,m=L,d=M,v=W,g=re,y=B,w=N,k=J,D=j;return A(),K(D,{visible:o(r),"onUpdate:visible":t[9]||(t[9]=i=>T(r)?r.value=i:null),header:"添加账号",footer:!1,width:800},{default:a(()=>[e(k,{data:o(n),rules:h,onSubmit:V,labelWidth:130},{default:a(()=>[e(d,{label:"账号类型"},{default:a(()=>[e(m,{modelValue:o(s),"onUpdate:modelValue":t[0]||(t[0]=i=>T(s)?s.value=i:null)},{default:a(()=>[e(c,{label:"Cookie",value:"cookie"}),e(c,{label:"企业",value:"enterprise_cokie"}),e(c,{label:"开放平台",value:"open_platform"}),e(c,{label:"下载卷",value:"download_ticket"})]),_:1},8,["modelValue"])]),_:1}),o(s)==="cookie"||o(s)==="enterprise_cokie"?(A(),K(d,{key:0,label:"Cookie",name:"cookie"},{default:a(()=>[e(v,{modelValue:o(n).cookie,"onUpdate:modelValue":t[1]||(t[1]=i=>o(n).cookie=i)},null,8,["modelValue"])]),_:1})):o(s)==="open_platform"?(A(),K(d,{key:1,label:"RefreshToken",name:"refresh_token"},{default:a(()=>[e(v,{modelValue:o(n).refresh_token,"onUpdate:modelValue":t[2]||(t[2]=i=>o(n).refresh_token=i)},null,8,["modelValue"])]),_:1})):o(s)==="download_ticket"?(A(),X($,{key:2},[e(d,{label:"分享链接",name:"url",help:"链接需要对应下方填入的文件夹名称"},{default:a(()=>[e(v,{modelValue:o(n).url,"onUpdate:modelValue":t[3]||(t[3]=i=>o(n).url=i),onBlur:b},null,8,["modelValue"])]),_:1}),e(d,{label:"Surl",name:"surl"},{default:a(()=>[e(v,{modelValue:o(n).surl,"onUpdate:modelValue":t[4]||(t[4]=i=>o(n).surl=i),disabled:""},null,8,["modelValue"])]),_:1}),e(d,{label:"提取码",name:"pwd"},{default:a(()=>[e(v,{modelValue:o(n).pwd,"onUpdate:modelValue":t[5]||(t[5]=i=>o(n).pwd=i)},null,8,["modelValue"])]),_:1}),e(d,{label:"文件夹名称",name:"dir",help:"以/打头,需要提前创建该文件夹"},{default:a(()=>[e(v,{modelValue:o(n).dir,"onUpdate:modelValue":t[6]||(t[6]=i=>o(n).dir=i)},null,8,["modelValue"])]),_:1}),e(d,{label:"企业号CK",name:"save_cookie"},{default:a(()=>[e(g,{modelValue:o(n).save_cookie,"onUpdate:modelValue":t[7]||(t[7]=i=>o(n).save_cookie=i)},null,8,["modelValue"])]),_:1}),e(d,{label:"普通号CK",name:"download_cookie"},{default:a(()=>[e(g,{modelValue:o(n).download_cookie,"onUpdate:modelValue":t[8]||(t[8]=i=>o(n).download_cookie=i)},null,8,["modelValue"])]),_:1})],64)):le("",!0),e(d,null,{default:a(()=>[e(w,{size:"small"},{default:a(()=>[e(y,{theme:"default",onClick:o(u).hideAddAccountDialog},{default:a(()=>t[10]||(t[10]=[p(" 取消 ")])),_:1},8,["onClick"]),e(y,{type:"submit"},{default:a(()=>t[11]||(t[11]=[p(" 提交 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])}}}),ye=z({__name:"UpdateProv",setup(_){const u=E(),{isUpdateProvDialog:r,updateProvReq:s,selectedRowKeys:n}=F(u),h={},V=async({validateResult:b})=>{b===!0&&(await u.updateProvSelection(),u.hideUpdateProvDialog())};return(b,l)=>{const t=O,c=L,m=M,d=W,v=B,g=N,y=J,w=j;return A(),K(w,{visible:o(r),"onUpdate:visible":l[1]||(l[1]=k=>T(r)?r.value=k:null),header:"更新账号省份",footer:!1},{default:a(()=>[e(y,{onSubmit:V,data:o(s),rules:h,labelWidth:130},{default:a(()=>[e(m,{label:"省份",name:"prov"},{default:a(()=>[e(c,{modelValue:o(s).prov,"onUpdate:modelValue":l[0]||(l[0]=k=>o(s).prov=k)},{default:a(()=>[e(t,{label:"未分配",value:null}),e(t,{label:"北京市",value:"北京市"}),e(t,{label:"天津市",value:"天津市"}),e(t,{label:"上海市",value:"上海市"}),e(t,{label:"重庆市",value:"重庆市"}),e(t,{label:"河北省",value:"河北省"}),e(t,{label:"山西省",value:"山西省"}),e(t,{label:"内蒙古自治区",value:"内蒙古自治区"}),e(t,{label:"辽宁省",value:"辽宁省"}),e(t,{label:"吉林省",value:"吉林省"}),e(t,{label:"黑龙江省",value:"黑龙江省"}),e(t,{label:"江苏省",value:"江苏省"}),e(t,{label:"浙江省",value:"浙江省"}),e(t,{label:"安徽省",value:"安徽省"}),e(t,{label:"福建省",value:"福建省"}),e(t,{label:"江西省",value:"江西省"}),e(t,{label:"山东省",value:"山东省"}),e(t,{label:"河南省",value:"河南省"}),e(t,{label:"湖北省",value:"湖北省"}),e(t,{label:"湖南省",value:"湖南省"}),e(t,{label:"广东省",value:"广东省"}),e(t,{label:"广西壮族自治区",value:"广西壮族自治区"}),e(t,{label:"海南省",value:"海南省"}),e(t,{label:"四川省",value:"四川省"}),e(t,{label:"贵州省",value:"贵州省"}),e(t,{label:"云南省",value:"云南省"}),e(t,{label:"西藏自治区",value:"西藏自治区"}),e(t,{label:"陕西省",value:"陕西省"}),e(t,{label:"甘肃省",value:"甘肃省"}),e(t,{label:"青海省",value:"青海省"}),e(t,{label:"宁夏回族自治区",value:"宁夏回族自治区"}),e(t,{label:"新疆维吾尔自治区",value:"新疆维吾尔自治区"}),e(t,{label:"香港特别行政区",value:"香港特别行政区"}),e(t,{label:"澳门特别行政区",value:"澳门特别行政区"}),e(t,{label:"台湾省",value:"台湾省"})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"选中的账号"},{default:a(()=>[e(d,{value:JSON.stringify(o(n)),disabled:""},null,8,["value"])]),_:1}),e(m,null,{default:a(()=>[e(g,{size:"small"},{default:a(()=>[e(v,{theme:"default",onClick:o(u).hideUpdateProvDialog},{default:a(()=>l[2]||(l[2]=[p(" 取消 ")])),_:1},8,["onClick"]),e(v,{type:"submit"},{default:a(()=>l[3]||(l[3]=[p(" 提交 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])}}}),Se=z({__name:"UpdateSwitch",setup(_){const u=E(),{isUpdateSwitch:r,updateSwitchReq:s,selectedRowKeys:n}=F(u),h={},V=async({validateResult:b})=>{b===!0&&(await u.updateSwitch(),u.hideUpdateSwitchDialog())};return(b,l)=>{const t=ce,c=M,m=W,d=B,v=N,g=J,y=j;return A(),K(y,{visible:o(r),"onUpdate:visible":l[1]||(l[1]=w=>T(r)?r.value=w:null),header:"更新账号",footer:!1},{default:a(()=>[e(g,{onSubmit:V,data:o(s),rules:h},{default:a(()=>[e(c,{label:"启用",name:"switch"},{default:a(()=>[e(t,{modelValue:o(s).switch,"onUpdate:modelValue":l[0]||(l[0]=w=>o(s).switch=w)},null,8,["modelValue"])]),_:1}),e(c,{label:"选中的账号"},{default:a(()=>[e(m,{value:JSON.stringify(o(n)),disabled:""},null,8,["value"])]),_:1}),e(c,null,{default:a(()=>[e(v,{size:"small"},{default:a(()=>[e(d,{theme:"default",onClick:o(u).hideUpdateSwitchDialog},{default:a(()=>l[2]||(l[2]=[p(" 取消 ")])),_:1},8,["onClick"]),e(d,{type:"submit"},{default:a(()=>l[3]||(l[3]=[p(" 提交 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])}}}),he={class:"buttons"},Ge=z({__name:"index",setup(_){const u=E(),{selectReq:r,accountList:s,pagination:n,selectedRowKeys:h}=F(u);oe(u.getAccounts);const V=U([{colKey:"row-select",type:"multiple",width:50,fixed:"left"},{colKey:"id",title:"ID",ellipsis:!0},{colKey:"baidu_name",title:"用户名",ellipsis:!0},{colKey:"uk",title:"用户标识",ellipsis:!0},{colKey:"account_type",title:"账号类型",ellipsis:!0},{colKey:"today_count",title:"今日解析",cell:(b,{row:l})=>e($,null,[l.today_count,p(" ("),H(l.today_size??0),p(")")]),width:150,ellipsis:!0},{colKey:"total_count",title:"总计解析",cell:(b,{row:l})=>e($,null,[l.total_count,p(" ("),H(l.total_size??0),p(")")]),width:150,ellipsis:!0},{colKey:"prov",title:"省份",cell:(b,{row:l})=>e($,null,[l.prov===null?"未分配":l.prov]),ellipsis:!0},{colKey:"switch",title:"账号状态",cell:(b,{row:l})=>e($,null,[l.switch?"启用":`禁用 (${l.reason})`]),ellipsis:!0},{colKey:"created_at",title:"创建时间",width:175,ellipsis:!0},{colKey:"updated_at",title:"更新时间",width:175,ellipsis:!0},{colKey:"operation",title:"操作",cell:(b,{row:l})=>e(B,{theme:"primary",onClick:t=>u.checkAccountBanStatus(t,l.id)},{default:()=>[p("检查封禁状态")]}),width:150,fixed:"right"}]);return(b,l)=>{const t=O,c=L,m=B,d=N,v=pe,g=me,y=_e,w=de;return A(),K(w,null,{default:a(()=>[ae("div",he,[e(d,{size:"small"},{default:a(()=>[e(c,{modelValue:o(r).column,"onUpdate:modelValue":l[0]||(l[0]=k=>o(r).column=k),onChange:o(u).getAccounts},{default:a(()=>[e(t,{label:"按 id 排序",value:"id"}),e(t,{label:"按 baidu_name 排序",value:"baidu_name"}),e(t,{label:"按 uk 排序",value:"uk"}),e(t,{label:"按 account_type 排序",value:"account_type"}),e(t,{label:"按 account_data 排序",value:"account_data"}),e(t,{label:"按 switch 排序",value:"switch"}),e(t,{label:"按 reason 排序",value:"reason"}),e(t,{label:"按 prov 排序",value:"prov"}),e(t,{label:"按 created_at 排序",value:"created_at"}),e(t,{label:"按 updated_at 排序",value:"updated_at"}),e(t,{label:"按 deleted_at 排序",value:"deleted_at"})]),_:1},8,["modelValue","onChange"]),e(c,{modelValue:o(r).direction,"onUpdate:modelValue":l[1]||(l[1]=k=>o(r).direction=k),onChange:o(u).getAccounts},{default:a(()=>[e(t,{label:"正序",value:"asc"}),e(t,{label:"倒序",value:"desc"})]),_:1},8,["modelValue","onChange"]),e(m,{onClick:o(u).getAccounts},{default:a(()=>l[2]||(l[2]=[p(" 刷新列表 ")])),_:1},8,["onClick"]),e(m,{onClick:o(u).showAddAccountDialog},{default:a(()=>l[3]||(l[3]=[p(" 添加账号 ")])),_:1},8,["onClick"]),e(m,{theme:"danger",onClick:o(u).deleteSelection},{default:a(()=>l[4]||(l[4]=[p(" 批量删除 ")])),_:1},8,["onClick"]),e(m,{onClick:o(u).updateInfoSelection},{default:a(()=>l[5]||(l[5]=[p(" 批量更新账户信息 ")])),_:1},8,["onClick"]),e(m,{onClick:o(u).showUpdateSwitchDialog},{default:a(()=>l[6]||(l[6]=[p(" 批量启用/禁用 ")])),_:1},8,["onClick"]),e(m,{onClick:o(u).showUpdateProvDialog},{default:a(()=>l[7]||(l[7]=[p(" 批量更新省份 ")])),_:1},8,["onClick"])]),_:1})]),e(ge),e(Se),e(ye),e(y,{"row-key":"id",resizable:"","lazy-load":"",bordered:!0,data:o(s),pagination:o(n),columns:V.value,"select-on-row-click":!0,selectedRowKeys:o(h),onSelectChange:o(u).handleSelectChange},{expandedRow:a(({row:k})=>[e(g,{bordered:"",colon:"",layout:"vertical"},{default:a(()=>[(A(!0),X($,null,ne(k.account_data,(D,i)=>(A(),K(v,{key:i,label:i},{default:a(()=>[p(ue(D),1)]),_:2},1032,["label"]))),128))]),_:2},1024)]),_:1},8,["data","pagination","columns","selectedRowKeys","onSelectChange"])]),_:1})}}});export{Ge as default};
