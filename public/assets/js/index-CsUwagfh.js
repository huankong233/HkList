import{v as F,l as ne,r as U,M as h,d as E,s as B,o as V,a as C,b as o,e,f as l,g as r,S as M,k as ae,q as ie,j as H,h as se,i as ue,F as z,t as Q}from"./index-Ulp6C0v5.js";import{c as L,L as de,a as re}from"./copy-DtcfACOX.js";import{G as A,f as I,b as me}from"./format-Dr7dGTPx.js";import{u as pe}from"./useCommonStore-DTAF-EDx.js";import{O as X,S as Z,T as ce}from"./index-CwicGRnJ.js";import{F as G,a as O}from"./index-Dq7eCV1L.js";import{I as Y,S as N,C as _e}from"./index-BYt7tsOP.js";import{I as ee}from"./index-DnPAYRqg.js";import{B as R}from"./useResizeObserver-MQnC3-JE.js";import{D as j}from"./index-DcqWcnUY.js";import{V as fe,D as ge}from"./validates-CLLrYb7f.js";import{S as te}from"./index-C46ugM83.js";import{T as ke}from"./index-DJBSYtFE.js";import{D as ye,a as ve}from"./index-BPAzgWRX.js";import{T as be}from"./index-0O9G8uWf.js";import"./dep-b315df3e-SzkKAuga.js";import"./useVirtualScrollNew-RQKjpSru.js";import"./fake-arrow-CV02EVwU.js";import"./add-CiZv80Ih.js";import"./dep-0df090f8-CUGFyhJM.js";import"./helper-7z4_9nrr.js";const we=g=>F.request("get","/admin/token",{params:g}),Ve=g=>F.request("post","/admin/token",{data:g}),W=g=>F.request("patch","/admin/token",{data:g}),Se=g=>F.request("delete","/admin/token",{data:g}),P=ne("tokens",()=>{const[g,u,c,n]=pe(we),f=U([]),v=U([]),S=(w,K)=>{f.value=w,v.value=K.selectedRowData},a=U(!1),t=()=>a.value=!0,d=()=>a.value=!1,s=U({count:100,size:1e3,day:100,can_use_ip_count:5,type:"generate",generate_count:10}),p=async()=>{await Ve({...s.value,size:s.value.size*A}),h.success("添加成功"),await n()},_=U(!1),b=()=>_.value=!0,D=()=>_.value=!1,y=U({id:[],switch:!0,reason:"手动操作"}),k=async()=>{if(f.value.length===0)return h.error("请选择卡密");await W({...y.value,id:f.value}),h.success(`${y.value.switch?"启用":"禁用"}成功`),await n()},m=async()=>{if(f.value.length===0)return h.error("请选择卡密");await Se({id:f.value}),h.success("删除成功"),await n()},T=U(!1),i=U({id:[],count:100,size:1e3,day:100,can_use_ip_count:5,ip:[],expires_at:null,switch:!0,reason:"",token:void 0});return{tokenList:c,pagination:u,selectReq:g,getTokens:n,selectedRowKeys:f,handleSelectChange:S,isAddingToken:a,showAddingTokenDialog:t,hideAddingTokenDialog:d,addingTokenReq:s,addToken:p,isUpdateSwitchDialog:_,showUpdateSwitchDialog:b,hideUpdateSwitchDialog:D,updateSwitchReq:y,updateSwitchSelection:k,deleteSelection:m,isEditDialog:T,updateReq:i,showEditDialog:(w,K)=>{if(w&&K?(w.stopPropagation(),i.value.id=[K]):i.value={id:f.value,count:100,size:1e3,day:100,can_use_ip_count:5,ip:[],expires_at:null,switch:!0,reason:"",token:void 0},i.value.id.length===1){const $=c.value.find(oe=>oe.id===i.value.id[0]);$&&(i.value={...$,size:$.size/A,id:i.value.id})}T.value=!0},hideEditDialog:()=>T.value=!1,updateSelection:async()=>{if(i.value.id.length===0)return h.error("请选择卡密");await W({...i.value,size:(i.value.size??0)*A,token:i.value.id.length===1&&i.value.token==="guest"?void 0:i.value.token}),h.success("更新成功~"),await n()},copySelection:()=>{L(v.value.map(w=>`${w.token} | ${I(w.size)} | ${w.count} 次 | ${w.day} 天`).join(`
`))},copySelectionNoFormat:()=>{L(v.value.map(w=>w.token).join(`
`))}}}),Ce=E({__name:"AddToken",setup(g){const u=P(),{isAddingToken:c,addingTokenReq:n}=B(u),f={token:[{required:!0,message:"卡密不能为空"}],generate_count:[{required:!0,message:"生成数量不能为空"}],count:[{required:!0,message:"次数配额不能为空"}],size:[{required:!0,message:"大小配额不能为空"}],day:[{required:!0,message:"时间配额不能为空"}],can_use_ip_count:[{required:!0,message:"IP配额不能为空"}]},v=async({validateResult:S})=>{S===!0&&(await u.addToken(),u.hideAddingTokenDialog())};return(S,a)=>{const t=X,d=Z,s=G,p=Y,_=ee,b=R,D=N,y=O,k=j;return V(),C(k,{visible:l(c),"onUpdate:visible":a[7]||(a[7]=m=>M(c)?c.value=m:null),header:"添加卡密",footer:!1},{default:o(()=>[e(y,{onSubmit:v,data:l(n),rules:f},{default:o(()=>[e(s,{name:"type",label:"添加方式"},{default:o(()=>[e(d,{modelValue:l(n).type,"onUpdate:modelValue":a[0]||(a[0]=m=>l(n).type=m)},{default:o(()=>[e(t,{label:"手动添加",value:"set"}),e(t,{label:"自动添加",value:"generate"})]),_:1},8,["modelValue"])]),_:1}),l(n).type==="set"?(V(),C(s,{key:0,name:"token",label:"卡密"},{default:o(()=>[e(p,{modelValue:l(n).token,"onUpdate:modelValue":a[1]||(a[1]=m=>l(n).token=m)},null,8,["modelValue"])]),_:1})):(V(),C(s,{key:1,name:"generate_count",label:"生成数量"},{default:o(()=>[e(_,{min:1,modelValue:l(n).generate_count,"onUpdate:modelValue":a[2]||(a[2]=m=>l(n).generate_count=m)},null,8,["modelValue"])]),_:1})),e(s,{name:"count",label:"次数配额"},{default:o(()=>[e(_,{min:1,modelValue:l(n).count,"onUpdate:modelValue":a[3]||(a[3]=m=>l(n).count=m)},null,8,["modelValue"])]),_:1}),e(s,{name:"size",label:"大小配额(GB)"},{default:o(()=>[e(_,{min:1,modelValue:l(n).size,"onUpdate:modelValue":a[4]||(a[4]=m=>l(n).size=m)},null,8,["modelValue"])]),_:1}),e(s,{name:"day",label:"时间配额"},{default:o(()=>[e(_,{min:1,modelValue:l(n).day,"onUpdate:modelValue":a[5]||(a[5]=m=>l(n).day=m)},null,8,["modelValue"])]),_:1}),e(s,{name:"can_use_ip_count",label:"IP配额"},{default:o(()=>[e(_,{min:1,modelValue:l(n).can_use_ip_count,"onUpdate:modelValue":a[6]||(a[6]=m=>l(n).can_use_ip_count=m)},null,8,["modelValue"])]),_:1}),e(s,null,{default:o(()=>[e(D,{size:"small"},{default:o(()=>[e(b,{theme:"default",onClick:l(u).hideUpdateSwitchDialog},{default:o(()=>a[8]||(a[8]=[r(" 取消 ")])),_:1},8,["onClick"]),e(b,{type:"submit"},{default:o(()=>a[9]||(a[9]=[r(" 提交 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])}}}),De=E({__name:"UpdateToken",setup(g){const u=P(),{isEditDialog:c,updateReq:n}=B(u),f={count:[{required:!0,message:"次数配额不能为空"}],size:[{required:!0,message:"大小配额不能为空"}],day:[{required:!0,message:"时间配额不能为空"}],can_use_ip_count:[{required:!0,message:"IP配额不能为空"}]},v=async({validateResult:a})=>{a===!0&&(await u.updateSelection(),u.hideEditDialog())},S=(a,t)=>{if(!(!t.item||typeof t.item=="number")){if(!fe(t.item)){h.error("请输入正确的 ip 地址");return}n.value.ip=a}};return(a,t)=>{const d=Y,s=G,p=ee,_=ce,b=ge,D=te,y=R,k=N,m=O,T=j;return V(),C(T,{visible:l(c),"onUpdate:visible":t[8]||(t[8]=i=>M(c)?c.value=i:null),header:"更新卡密",footer:!1},{default:o(()=>[e(m,{onSubmit:v,data:l(n),rules:f},{default:o(()=>[l(n).id.length===1&&l(n).token!=="guest"?(V(),C(s,{key:0,name:"token",label:"卡密"},{default:o(()=>[e(d,{modelValue:l(n).token,"onUpdate:modelValue":t[0]||(t[0]=i=>l(n).token=i)},null,8,["modelValue"])]),_:1})):ae("",!0),e(s,{name:"count",label:"次数配额"},{default:o(()=>[e(p,{min:1,modelValue:l(n).count,"onUpdate:modelValue":t[1]||(t[1]=i=>l(n).count=i)},null,8,["modelValue"])]),_:1}),e(s,{name:"size",label:"大小配额(GB)"},{default:o(()=>[e(p,{min:1,modelValue:l(n).size,"onUpdate:modelValue":t[2]||(t[2]=i=>l(n).size=i)},null,8,["modelValue"])]),_:1}),e(s,{name:"day",label:"时间配额"},{default:o(()=>[e(p,{min:1,modelValue:l(n).day,"onUpdate:modelValue":t[3]||(t[3]=i=>l(n).day=i)},null,8,["modelValue"])]),_:1}),e(s,{name:"can_use_ip_count",label:"IP配额"},{default:o(()=>[e(p,{min:1,modelValue:l(n).can_use_ip_count,"onUpdate:modelValue":t[4]||(t[4]=i=>l(n).can_use_ip_count=i)},null,8,["modelValue"])]),_:1}),e(s,{name:"ip",label:"已绑IP",help:"回车添加"},{default:o(()=>[e(_,{value:l(n).ip,onChange:S},null,8,["value"])]),_:1}),e(s,{name:"expires_at",label:"过期时间"},{default:o(()=>[e(b,{modelValue:l(n).expires_at,"onUpdate:modelValue":t[5]||(t[5]=i=>l(n).expires_at=i),"enable-time-picker":"","allow-input":"",clearable:"",format:"YYYY-MM-DD hh:mm:ss"},null,8,["modelValue"])]),_:1}),e(s,{name:"switch",label:"启用"},{default:o(()=>[e(D,{modelValue:l(n).switch,"onUpdate:modelValue":t[6]||(t[6]=i=>l(n).switch=i)},null,8,["modelValue"])]),_:1}),e(s,{name:"reason",label:"原因"},{default:o(()=>[e(d,{modelValue:l(n).reason,"onUpdate:modelValue":t[7]||(t[7]=i=>l(n).reason=i)},null,8,["modelValue"])]),_:1}),e(s,{label:"选中的卡密"},{default:o(()=>[e(d,{value:JSON.stringify(l(n).id),disabled:""},null,8,["value"])]),_:1}),e(s,null,{default:o(()=>[e(k,{size:"small"},{default:o(()=>[e(y,{theme:"default",onClick:l(u).hideEditDialog},{default:o(()=>t[9]||(t[9]=[r(" 取消 ")])),_:1},8,["onClick"]),e(y,{type:"submit"},{default:o(()=>t[10]||(t[10]=[r(" 提交 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])}}}),ze=E({__name:"UpdateSwitch",setup(g){const u=P(),{isUpdateSwitchDialog:c,updateSwitchReq:n,selectedRowKeys:f}=B(u),v={},S=async({validateResult:a})=>{a===!0&&(await u.updateSwitchSelection(),u.hideUpdateSwitchDialog())};return(a,t)=>{const d=te,s=G,p=Y,_=R,b=N,D=O,y=j;return V(),C(y,{visible:l(c),"onUpdate:visible":t[2]||(t[2]=k=>M(c)?c.value=k:null),header:"启用/禁用卡密",footer:!1},{default:o(()=>[e(D,{onSubmit:S,data:l(n),rules:v},{default:o(()=>[e(s,{label:"启用",name:"switch"},{default:o(()=>[e(d,{modelValue:l(n).switch,"onUpdate:modelValue":t[0]||(t[0]=k=>l(n).switch=k)},null,8,["modelValue"])]),_:1}),e(s,{label:"原因",name:"reason"},{default:o(()=>[e(p,{modelValue:l(n).reason,"onUpdate:modelValue":t[1]||(t[1]=k=>l(n).reason=k)},null,8,["modelValue"])]),_:1}),e(s,{label:"选中的账号"},{default:o(()=>[e(p,{value:JSON.stringify(l(f)),disabled:""},null,8,["value"])]),_:1}),e(s,null,{default:o(()=>[e(b,{size:"small"},{default:o(()=>[e(_,{theme:"default",onClick:l(u).hideUpdateSwitchDialog},{default:o(()=>t[3]||(t[3]=[r(" 取消 ")])),_:1},8,["onClick"]),e(_,{type:"submit"},{default:o(()=>t[4]||(t[4]=[r(" 提交 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])}}}),Ue={class:"buttons"},Qe=E({__name:"index",setup(g){const u=P(),{selectReq:c,tokenList:n,pagination:f,selectedRowKeys:v}=B(u);ie(u.getTokens);const S=U([{colKey:"row-select",type:"multiple",width:50,fixed:"left"},{colKey:"id",title:"ID"},{colKey:"token",title:"卡密",width:200,ellipsis:!0},{colKey:"switch",title:"状态",cell:(a,{row:t})=>e(z,null,[t.switch?"启用":`禁用 (${t.reason})`]),ellipsis:!0},{colKey:"today_count",title:"今日解析",cell:(a,{row:t})=>e(z,null,[t.today_count,r(" ("),I(t.today_size??0),r(")")]),width:150,ellipsis:!0},{colKey:"total_count",title:"总计解析",cell:(a,{row:t})=>e(z,null,[t.total_count,r(" ("),I(t.total_size??0),r(")")]),width:150,ellipsis:!0},{colKey:"size",title:"大小配额",cell:(a,{row:t})=>e(z,null,[I(t.size)]),width:90,ellipsis:!0},{colKey:"count",title:"次数配额",cell:(a,{row:t})=>e(z,null,[t.count,r(" 次")]),width:90,ellipsis:!0},{colKey:"day",title:"时间配额",cell:(a,{row:t})=>e(z,null,[t.day,r(" 天")]),width:90,ellipsis:!0},{colKey:"can_use_ip_count",title:"IP配额",cell:(a,{row:t})=>e(z,null,[t.can_use_ip_count,r(" 个")]),ellipsis:!0},{colKey:"expires_at",title:"过期时间",cell:(a,{row:t})=>e(z,null,[t.expires_at===null?"未使用":me(t.expires_at)]),width:175,ellipsis:!0},{colKey:"created_at",title:"创建时间",width:175,ellipsis:!0},{colKey:"updated_at",title:"更新时间",width:175,ellipsis:!0},{colKey:"operation",title:"操作",cell:(a,{row:t})=>e(R,{theme:"primary",onClick:d=>u.showEditDialog(d,t.id)},{default:()=>[r("编辑")]}),width:90,fixed:"right"}]);return(a,t)=>{const d=X,s=Z,p=R,_=N,b=ke,D=re,y=de,k=ye,m=ve,T=be,i=_e;return V(),C(i,null,{default:o(()=>[H("div",Ue,[e(_,{size:"small"},{default:o(()=>[e(s,{modelValue:l(c).column,"onUpdate:modelValue":t[0]||(t[0]=q=>l(c).column=q),onChange:l(u).getTokens},{default:o(()=>[e(d,{label:"按 id 排序",value:"id"}),e(d,{label:"按 token 排序",value:"token"}),e(d,{label:"按 count 排序",value:"count"}),e(d,{label:"按 size 排序",value:"size"}),e(d,{label:"按 day 排序",value:"day"}),e(d,{label:"按 can_use_ip_count 排序",value:"can_use_ip_count"}),e(d,{label:"按 ip 排序",value:"ip"}),e(d,{label:"按 expires_at 排序",value:"expires_at"}),e(d,{label:"按 created_at 排序",value:"created_at"}),e(d,{label:"按 updated_at 排序",value:"updated_at"}),e(d,{label:"按 deleted_at 排序",value:"deleted_at"})]),_:1},8,["modelValue","onChange"]),e(s,{modelValue:l(c).direction,"onUpdate:modelValue":t[1]||(t[1]=q=>l(c).direction=q),onChange:l(u).getTokens},{default:o(()=>[e(d,{label:"正序",value:"asc"}),e(d,{label:"倒序",value:"desc"})]),_:1},8,["modelValue","onChange"]),e(p,{onClick:l(u).getTokens},{default:o(()=>t[2]||(t[2]=[r(" 刷新列表 ")])),_:1},8,["onClick"]),e(p,{onClick:l(u).showAddingTokenDialog},{default:o(()=>t[3]||(t[3]=[r(" 添加卡密 ")])),_:1},8,["onClick"]),e(p,{onClick:l(u).deleteSelection},{default:o(()=>t[4]||(t[4]=[r(" 批量删除 ")])),_:1},8,["onClick"]),e(p,{onClick:l(u).showUpdateSwitchDialog},{default:o(()=>t[5]||(t[5]=[r(" 批量启用/禁用 ")])),_:1},8,["onClick"]),e(p,{onClick:l(u).showEditDialog},{default:o(()=>t[6]||(t[6]=[r(" 批量更新 ")])),_:1},8,["onClick"]),e(p,{onClick:l(u).copySelection},{default:o(()=>t[7]||(t[7]=[r(" 批量复制 ")])),_:1},8,["onClick"]),e(p,{onClick:l(u).copySelectionNoFormat},{default:o(()=>t[8]||(t[8]=[r(" 无格式批量复制 ")])),_:1},8,["onClick"])]),_:1})]),e(Ce),e(ze),e(De),e(T,{"row-key":"id",resizable:"","lazy-load":"",bordered:!0,data:l(n),pagination:l(f),columns:S.value,"select-on-row-click":!0,selectedRowKeys:l(v),onSelectChange:l(u).handleSelectChange},{expandedRow:o(({row:q})=>[e(m,{bordered:"",colon:"",layout:"vertical"},{default:o(()=>[e(k,{label:"已绑定的ip"},{default:o(()=>[q.ip.length===0?(V(),C(b,{key:0,size:"large"},{default:o(()=>t[9]||(t[9]=[r(" 没有绑定的IP ")])),_:1})):(V(),C(y,{key:1,stripe:"",split:"",size:"large"},{default:o(()=>[(V(!0),se(z,null,ue(q.ip,(x,J)=>(V(),C(D,{key:x},{default:o(()=>[e(_,{direction:"vertical"},{default:o(()=>[e(_,null,{default:o(()=>[e(b,{size:"large"},{default:o(()=>[r(" 第 "+Q(J+1)+" 条 ",1)]),_:2},1024),e(p,{onClick:le=>l(L)(x)},{default:o(()=>t[10]||(t[10]=[r("复制")])),_:2},1032,["onClick"])]),_:2},1024),H("p",null,Q(x),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024))]),_:2},1024)]),_:2},1024)]),_:1},8,["data","pagination","columns","selectedRowKeys","onSelectChange"])]),_:1})}}});export{Qe as default};
