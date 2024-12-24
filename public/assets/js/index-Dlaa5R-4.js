import{D as P,v as Z,b as A,M as _,d as I,s as z,o as U,e as D,g as a,h as e,i as o,j as T,n as Q,F as R,q as ee,m as r,B as x,$ as E,A as te,l as le,p as oe,t as ae}from"./index-BJn9XbFk.js";import{a as j,f as G}from"./format-BO7uzgKe.js";import{u as ne}from"./useCommonStore-yA7Pv4Ag.js";import{O,S as L}from"./index-CznTkyZJ.js";import{F as M,a as J}from"./index-CV8xjUnp.js";import{I as W,S as F,C as ue}from"./index-1apc2-bA.js";import{T as se}from"./index-lx9-e02W.js";import{S as ie}from"./index-5igb4RaP.js";import{a as de,D as ce}from"./index-tYDi5xGB.js";import{T as re}from"./index-CjZRkPar.js";import"./dep-1296ed3e-CQkP3NVi.js";import"./fake-arrow-Bzg6eqIq.js";import"./useResizeObserver-CJcLPaer.js";import"./index-DYT2NKLM.js";import"./helper-BoCLEQ3_.js";import"./index-Bjr3KbpV.js";import"./index-B57J6DKx.js";import"./add-B4WlbNF_.js";import"./useVirtualScrollNew-_rbULzbx.js";const pe=p=>P.request("get","/admin/account",{params:p}),me=p=>P.request("post","/admin/account",{data:p}),_e=p=>P.request("post","/admin/account/update_info",{data:p}),H=p=>P.request("patch","/admin/account",{data:p}),ve=p=>P.request("delete","/admin/account",{data:p}),fe=p=>P.request("post","/admin/account/check_ban_status",{data:p}),N=Z("accounts",()=>{const[p,u,c,s]=ne(pe),n=A([]),h=V=>{n.value=V},S=async()=>{if(n.value.length===0)return _.error("请选择账号");await _e({id:n.value}),_.success("更新成功"),await s()},m=async()=>{if(n.value.length===0)return _.error("请选择账号");await ve({id:n.value}),_.success("删除成功"),await s()},t=A(!1),l=A({id:[],switch:!1}),k=()=>t.value=!0,i=()=>t.value=!1,v=async()=>{if(n.value.length===0)return _.error("请选择账号");await H({...l.value,id:n.value}),_.success("更新成功"),await s()},f=A(!1),g=()=>f.value=!0,C=()=>f.value=!1,w=A({id:[],prov:null}),b=async()=>{if(n.value.length===0)return _.error("请选择账号");await H({...w.value,id:n.value}),_.success("更新省份成功"),await s()},d=A(!1),B=()=>d.value=!0,X=async()=>d.value=!1,K=A("cookie"),y=A({cookie:"",refresh_token:"",surl:"",pwd:"",dir:"",save_cookie:"",download_cookie:""});return{pagination:u,selectReq:p,accountList:c,getAccounts:s,selectedRowKeys:n,handleSelectChange:h,updateInfoSelection:S,deleteSelection:m,isUpdateSwitch:t,updateSwitchReq:l,showUpdateSwitchDialog:k,hideUpdateSwitchDialog:i,updateSwitch:v,isUpdateProvDialog:f,updateProvReq:w,showUpdateProvDialog:g,hideUpdateProvDialog:C,updateProvSelection:b,isAddAccount:d,addAccountType:K,addAccountInput:y,showAddAccountDialog:B,hideAddAccountDialog:X,addAccount:async()=>{const V={account_type:K.value,account_data:[]};K.value==="cookie"?V.account_data=[{cookie:y.value.cookie}]:K.value==="enterprise_cokie"?V.account_data=[{cookie:y.value.cookie}]:K.value==="open_platform"?V.account_data=[{refresh_token:y.value.refresh_token}]:K.value==="download_ticket"&&(V.account_data=[{surl:y.value.surl,pwd:y.value.pwd,dir:y.value.dir,save_cookie:y.value.save_cookie,download_cookie:y.value.download_cookie}]),await me(V),_.success("插入成功~"),y.value={cookie:"",refresh_token:"",surl:"",pwd:"",dir:"",save_cookie:"",download_cookie:""},await s()},checkAccountBanStatus:async(V,Y)=>{V.stopPropagation(),(await fe({id:[Y]})).data.forEach($=>{$.status.forEach(q=>{if(q.code!==200)return _.error(`账号(${$.id})状态请求失败`);if(!q.data.ban_status)return _.success(`账号(${$.id})未被封禁`);_.warning(`账号(${$.id})已被封禁`),_.warning(`原因: ${q.data.ban_reason}`),_.warning(`消息: ${q.data.ban_msg}`),_.warning(`开始时间: ${j(q.data.start_time)}`),_.warning(`结束时间: ${j(q.data.end_time)}`)})})}}}),be=I({__name:"AddAccount",setup(p){const u=N(),{isAddAccount:c,addAccountType:s,addAccountInput:n}=z(u),h={cookie:[{required:!0,message:"Cookie不能为空"}],refresh_token:[{required:!0,message:"RefreshToken不能为空"}],surl:[{required:!0,message:"分享链接不能为空"}],pwd:[{required:!0,message:"链接密码不能为空"}],dir:[{required:!0,message:"盘内路径不能为空"}],save_cookie:[{required:!0,message:"企业号CK不能为空"}],download_cookie:[{required:!0,message:"普通号CK不能为空"}]},S=async({validateResult:m})=>{m===!0&&await u.addAccount()};return(m,t)=>{const l=O,k=L,i=M,v=W,f=se,g=x,C=F,w=J,b=E;return U(),D(b,{visible:o(c),"onUpdate:visible":t[8]||(t[8]=d=>T(c)?c.value=d:null),header:"添加账号",footer:!1},{default:a(()=>[e(w,{data:o(n),rules:h,onSubmit:S,labelWidth:130},{default:a(()=>[e(i,{label:"账号类型"},{default:a(()=>[e(k,{modelValue:o(s),"onUpdate:modelValue":t[0]||(t[0]=d=>T(s)?s.value=d:null)},{default:a(()=>[e(l,{label:"Cookie",value:"cookie"}),e(l,{label:"企业",value:"enterprise_cokie"}),e(l,{label:"开放平台",value:"open_platform"}),e(l,{label:"下载卷",value:"download_ticket"})]),_:1},8,["modelValue"])]),_:1}),o(s)==="cookie"||o(s)==="enterprise_cokie"?(U(),D(i,{key:0,label:"Cookie",name:"cookie"},{default:a(()=>[e(v,{modelValue:o(n).cookie,"onUpdate:modelValue":t[1]||(t[1]=d=>o(n).cookie=d)},null,8,["modelValue"])]),_:1})):o(s)==="open_platform"?(U(),D(i,{key:1,label:"RefreshToken",name:"refresh_token"},{default:a(()=>[e(v,{modelValue:o(n).refresh_token,"onUpdate:modelValue":t[2]||(t[2]=d=>o(n).refresh_token=d)},null,8,["modelValue"])]),_:1})):o(s)==="download_ticket"?(U(),Q(R,{key:2},[e(i,{label:"Surl",name:"surl",help:"分享链接"},{default:a(()=>[e(v,{modelValue:o(n).surl,"onUpdate:modelValue":t[3]||(t[3]=d=>o(n).surl=d)},null,8,["modelValue"])]),_:1}),e(i,{label:"Pwd",name:"pwd",help:"链接密码"},{default:a(()=>[e(v,{modelValue:o(n).pwd,"onUpdate:modelValue":t[4]||(t[4]=d=>o(n).pwd=d)},null,8,["modelValue"])]),_:1}),e(i,{label:"Dir",name:"dir",help:"盘内路径"},{default:a(()=>[e(v,{modelValue:o(n).dir,"onUpdate:modelValue":t[5]||(t[5]=d=>o(n).dir=d)},null,8,["modelValue"])]),_:1}),e(i,{label:"SaveCookie",name:"save_cookie",help:"企业号CK"},{default:a(()=>[e(f,{modelValue:o(n).save_cookie,"onUpdate:modelValue":t[6]||(t[6]=d=>o(n).save_cookie=d)},null,8,["modelValue"])]),_:1}),e(i,{label:"DownloadCookie",name:"download_cookie",help:"普通号CK"},{default:a(()=>[e(f,{modelValue:o(n).download_cookie,"onUpdate:modelValue":t[7]||(t[7]=d=>o(n).download_cookie=d)},null,8,["modelValue"])]),_:1})],64)):ee("",!0),e(i,null,{default:a(()=>[e(C,{size:"small"},{default:a(()=>[e(g,{theme:"default",onClick:o(u).hideAddAccountDialog},{default:a(()=>t[9]||(t[9]=[r(" 取消 ")])),_:1},8,["onClick"]),e(g,{type:"submit"},{default:a(()=>t[10]||(t[10]=[r(" 提交 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])}}}),ke=I({__name:"UpdateProv",setup(p){const u=N(),{isUpdateProvDialog:c,updateProvReq:s,selectedRowKeys:n}=z(u),h={},S=async({validateResult:m})=>{m===!0&&(await u.updateProvSelection(),u.hideUpdateProvDialog())};return(m,t)=>{const l=O,k=L,i=M,v=W,f=x,g=F,C=J,w=E;return U(),D(w,{visible:o(c),"onUpdate:visible":t[1]||(t[1]=b=>T(c)?c.value=b:null),header:"更新账号省份",footer:!1},{default:a(()=>[e(C,{onSubmit:S,data:o(s),rules:h,labelWidth:130},{default:a(()=>[e(i,{label:"省份",name:"prov"},{default:a(()=>[e(k,{modelValue:o(s).prov,"onUpdate:modelValue":t[0]||(t[0]=b=>o(s).prov=b)},{default:a(()=>[e(l,{label:"未分配",value:null}),e(l,{label:"北京市",value:"北京市"}),e(l,{label:"天津市",value:"天津市"}),e(l,{label:"上海市",value:"上海市"}),e(l,{label:"重庆市",value:"重庆市"}),e(l,{label:"河北省",value:"河北省"}),e(l,{label:"山西省",value:"山西省"}),e(l,{label:"内蒙古自治区",value:"内蒙古自治区"}),e(l,{label:"辽宁省",value:"辽宁省"}),e(l,{label:"吉林省",value:"吉林省"}),e(l,{label:"黑龙江省",value:"黑龙江省"}),e(l,{label:"江苏省",value:"江苏省"}),e(l,{label:"浙江省",value:"浙江省"}),e(l,{label:"安徽省",value:"安徽省"}),e(l,{label:"福建省",value:"福建省"}),e(l,{label:"江西省",value:"江西省"}),e(l,{label:"山东省",value:"山东省"}),e(l,{label:"河南省",value:"河南省"}),e(l,{label:"湖北省",value:"湖北省"}),e(l,{label:"湖南省",value:"湖南省"}),e(l,{label:"广东省",value:"广东省"}),e(l,{label:"广西壮族自治区",value:"广西壮族自治区"}),e(l,{label:"海南省",value:"海南省"}),e(l,{label:"四川省",value:"四川省"}),e(l,{label:"贵州省",value:"贵州省"}),e(l,{label:"云南省",value:"云南省"}),e(l,{label:"西藏自治区",value:"西藏自治区"}),e(l,{label:"陕西省",value:"陕西省"}),e(l,{label:"甘肃省",value:"甘肃省"}),e(l,{label:"青海省",value:"青海省"}),e(l,{label:"宁夏回族自治区",value:"宁夏回族自治区"}),e(l,{label:"新疆维吾尔自治区",value:"新疆维吾尔自治区"}),e(l,{label:"香港特别行政区",value:"香港特别行政区"}),e(l,{label:"澳门特别行政区",value:"澳门特别行政区"}),e(l,{label:"台湾省",value:"台湾省"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"选中的账号"},{default:a(()=>[e(v,{value:JSON.stringify(o(n)),disabled:""},null,8,["value"])]),_:1}),e(i,null,{default:a(()=>[e(g,{size:"small"},{default:a(()=>[e(f,{theme:"default",onClick:o(u).hideUpdateProvDialog},{default:a(()=>t[2]||(t[2]=[r(" 取消 ")])),_:1},8,["onClick"]),e(f,{type:"submit"},{default:a(()=>t[3]||(t[3]=[r(" 提交 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])}}}),we=I({__name:"UpdateSwitch",setup(p){const u=N(),{isUpdateSwitch:c,updateSwitchReq:s,selectedRowKeys:n}=z(u),h={},S=async({validateResult:m})=>{m===!0&&(await u.updateSwitch(),u.hideUpdateSwitchDialog())};return(m,t)=>{const l=ie,k=M,i=W,v=x,f=F,g=J,C=E;return U(),D(C,{visible:o(c),"onUpdate:visible":t[1]||(t[1]=w=>T(c)?c.value=w:null),header:"更新账号",footer:!1},{default:a(()=>[e(g,{onSubmit:S,data:o(s),rules:h},{default:a(()=>[e(k,{label:"启用",name:"switch"},{default:a(()=>[e(l,{modelValue:o(s).switch,"onUpdate:modelValue":t[0]||(t[0]=w=>o(s).switch=w)},null,8,["modelValue"])]),_:1}),e(k,{label:"选中的账号"},{default:a(()=>[e(i,{value:JSON.stringify(o(n)),disabled:""},null,8,["value"])]),_:1}),e(k,null,{default:a(()=>[e(f,{size:"small"},{default:a(()=>[e(v,{theme:"default",onClick:o(u).hideUpdateSwitchDialog},{default:a(()=>t[2]||(t[2]=[r(" 取消 ")])),_:1},8,["onClick"]),e(v,{type:"submit"},{default:a(()=>t[3]||(t[3]=[r(" 提交 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])}}}),ge={class:"buttons"},Le=I({__name:"index",setup(p){const u=N(),{selectReq:c,accountList:s,pagination:n,selectedRowKeys:h}=z(u);te(u.getAccounts);const S=A([{colKey:"row-select",type:"multiple",width:50,fixed:"left"},{colKey:"id",title:"ID",ellipsis:!0},{colKey:"baidu_name",title:"用户名",ellipsis:!0},{colKey:"uk",title:"用户标识",ellipsis:!0},{colKey:"account_type",title:"账号类型",ellipsis:!0},{colKey:"today_count",title:"今日解析",cell:(m,{row:t})=>e(R,null,[t.today_count,r(" ("),G(t.today_size??0),r(")")]),width:150,ellipsis:!0},{colKey:"total_count",title:"总计解析",cell:(m,{row:t})=>e(R,null,[t.total_count,r(" ("),G(t.total_size??0),r(")")]),width:150,ellipsis:!0},{colKey:"prov",title:"省份",cell:(m,{row:t})=>e(R,null,[t.prov===null?"未分配":t.prov]),ellipsis:!0},{colKey:"switch",title:"账号状态",cell:(m,{row:t})=>e(R,null,[t.switch?"启用":`禁用 (${t.reason})`]),ellipsis:!0},{colKey:"created_at",title:"创建时间",width:175,ellipsis:!0},{colKey:"updated_at",title:"更新时间",width:175,ellipsis:!0},{colKey:"operation",title:"操作",cell:(m,{row:t})=>e(x,{theme:"primary",onClick:l=>u.checkAccountBanStatus(l,t.id)},{default:()=>[r("检查封禁状态")]}),width:150,fixed:"right"}]);return(m,t)=>{const l=O,k=L,i=x,v=F,f=ce,g=de,C=re,w=ue;return U(),D(w,null,{default:a(()=>[le("div",ge,[e(v,{size:"small"},{default:a(()=>[e(k,{modelValue:o(c).column,"onUpdate:modelValue":t[0]||(t[0]=b=>o(c).column=b),onChange:o(u).getAccounts},{default:a(()=>[e(l,{label:"按 id 排序",value:"id"}),e(l,{label:"按 baidu_name 排序",value:"baidu_name"}),e(l,{label:"按 uk 排序",value:"uk"}),e(l,{label:"按 account_type 排序",value:"account_type"}),e(l,{label:"按 account_data 排序",value:"account_data"}),e(l,{label:"按 switch 排序",value:"switch"}),e(l,{label:"按 reason 排序",value:"reason"}),e(l,{label:"按 prov 排序",value:"prov"}),e(l,{label:"按 created_at 排序",value:"created_at"}),e(l,{label:"按 updated_at 排序",value:"updated_at"}),e(l,{label:"按 deleted_at 排序",value:"deleted_at"})]),_:1},8,["modelValue","onChange"]),e(k,{modelValue:o(c).direction,"onUpdate:modelValue":t[1]||(t[1]=b=>o(c).direction=b),onChange:o(u).getAccounts},{default:a(()=>[e(l,{label:"正序",value:"asc"}),e(l,{label:"倒序",value:"desc"})]),_:1},8,["modelValue","onChange"]),e(i,{onClick:o(u).getAccounts},{default:a(()=>t[2]||(t[2]=[r(" 刷新列表 ")])),_:1},8,["onClick"]),e(i,{onClick:o(u).showAddAccountDialog},{default:a(()=>t[3]||(t[3]=[r(" 添加账号 ")])),_:1},8,["onClick"]),e(i,{theme:"danger",onClick:o(u).deleteSelection},{default:a(()=>t[4]||(t[4]=[r(" 批量删除 ")])),_:1},8,["onClick"]),e(i,{onClick:o(u).updateInfoSelection},{default:a(()=>t[5]||(t[5]=[r(" 批量更新账户信息 ")])),_:1},8,["onClick"]),e(i,{onClick:o(u).showUpdateSwitchDialog},{default:a(()=>t[6]||(t[6]=[r(" 批量启用/禁用 ")])),_:1},8,["onClick"]),e(i,{onClick:o(u).showUpdateProvDialog},{default:a(()=>t[7]||(t[7]=[r(" 批量更新省份 ")])),_:1},8,["onClick"])]),_:1})]),e(be),e(we),e(ke),e(C,{"row-key":"id",resizable:"","lazy-load":"",bordered:!0,data:o(s),pagination:o(n),columns:S.value,"select-on-row-click":!0,selectedRowKeys:o(h),onSelectChange:o(u).handleSelectChange},{expandedRow:a(({row:b})=>[e(g,{bordered:"",colon:"",layout:"vertical"},{default:a(()=>[(U(!0),Q(R,null,oe(b.account_data,(d,B)=>(U(),D(f,{key:B,label:B},{default:a(()=>[r(ae(d),1)]),_:2},1032,["label"]))),128))]),_:2},1024)]),_:1},8,["data","pagination","columns","selectedRowKeys","onSelectChange"])]),_:1})}}});export{Le as default};