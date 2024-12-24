import{E as R,G as B,h as l,H as q,d as U,I as G,J as W,K as X,L as j,N as z,O as K,P as Q,Q as Y,b as S,A as E,R as Z,S as ee,T as ne,U as ae,V as oe,W as le,X as te,Y as re,Z as ie,v as se,M as y,s as ce,o as ue,e as de,g as C,i as m,m as w,j as fe,B as ve,$ as Ce}from"./index-CV3fu6i-.js";import{I as me,S as ge}from"./index-CdgF-B5O.js";import{F as pe,a as _e}from"./index-1SfUu0_F.js";/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */function he(){var f=q();return function(c,s){var v;if(R(f.props[c]))v=f.props[c](B);else if(f.slots[c])v=f.slots[c]&&f.slots[c](null)[0];else if(s){var a=s[f.props.theme];v=l(a,null,null)}return v}}/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */var Ie={close:{type:[String,Boolean,Function],default:!1},default:{type:[String,Function]},icon:{type:Function},maxLine:{type:Number,default:0},message:{type:[String,Function]},operation:{type:Function},theme:{type:String,default:"info",validator:function(e){return["success","info","warning","error"].includes(e)}},title:{type:[String,Function]},onClose:Function,onClosed:Function};/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */var Fe=U({name:"TAlert",props:Ie,setup:function(e){var c=G("alert"),s=c.globalConfig,v=c.classPrefix,a=W({CheckCircleFilledIcon:X,CloseIcon:j,ErrorCircleFilledIcon:z,HelpCircleFilledIcon:K,InfoCircleFilledIcon:Q}),A=a.CheckCircleFilledIcon,r=a.CloseIcon,p=a.ErrorCircleFilledIcon,_=a.HelpCircleFilledIcon,u=a.InfoCircleFilledIcon,t=Y("alert"),d=re(),g=he(),i=S(null),h=S(null),b=S(0),I=S(!0),V=S(!0),H=function(){var n={info:u,success:A,warning:p,error:p,question:_},o=g("icon",n);return o?l("div",{class:"".concat(t.value,"__icon")},[o]):null},L=function(){var n=e.close,o=null;return n===!0||n===""?o=l(r,null,null):oe(n)?o=n:o=g("close"),o?l("div",{class:"".concat(t.value,"__close"),onClick:M},[o]):null},O=function(){var n=d("title");return n?l("div",{class:"".concat(t.value,"__title")},[" ",n]):null},$=function(){var n=d("operation");return l("div",{class:"".concat(t.value,"__message")},[D(),n?l("div",{class:"".concat(t.value,"__operation")},[n]):null])},D=function(){var n,o;o=d("default"),o||(o=d("message"));var k=te(o)?o.length:1,x=e.maxLine>0&&e.maxLine<k,N=(n=h.value)===null||n===void 0||(n=n.children[0])===null||n===void 0?void 0:n.offsetHeight;return x&&V.value?(o=o.slice(0,e.maxLine),N&&(h.value.style.height="".concat(b.value,"px"))):x&&N&&(h.value.style.height="".concat(N*(k-e.maxLine)+b.value,"px")),l("div",{class:"".concat(t.value,"__description"),ref:h},[x?o.map(function(P){return l("div",null,[P])}):o,x?l("div",{class:"".concat(t.value,"__collapse"),onClick:function(){V.value=!V.value}},[V.value?s.value.expandText:s.value.collapseText]):null])},J=function(){return l("div",{class:"".concat(t.value,"__content")},[O(),$()])},M=function(n){var o;(o=e.onClose)===null||o===void 0||o.call(e,{e:n}),le(i.value,"".concat(t.value,"--closing"))},T=function(n){var o=n.target===i.value;if(n.propertyName==="opacity"&&o){var k;I.value=!1,(k=e.onClosed)===null||k===void 0||k.call(e,{e:n})}};return E(function(){Z(i.value,"transitionend",T),b.value=h.value.offsetHeight}),ee(function(){ne(i.value,"transitionend",T)}),function(){return l("div",{ref:i,class:["".concat(t.value),"".concat(t.value,"--").concat(e.theme),ae({},"".concat(v.value,"-is-hidden"),!I.value)]},[H(),J(),L()])}}});/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */var ye=ie(Fe);const Se=se("aria2Store",()=>{const f=S(!1),e=S({host:"http://localhost:16800/jsonrpc",token:"",dir:""});E(()=>{const u=localStorage.getItem("aria2Config");u&&(e.value=JSON.parse(u))});const c=()=>f.value=!0,s=()=>f.value=!1,v=()=>localStorage.setItem("aria2Config",JSON.stringify(e.value));let a=null;const A=()=>new Promise((u,t)=>{a&&(a.close(),a=null);try{a=new WebSocket(e.value.host),a.onopen=()=>u(a),a.onerror=d=>{y.error("链接到Aria2下载器出错"),t(d)}}catch(d){y.error("链接到Aria2下载器出错"),t(d)}}),r=async(u,t=[])=>((!a||a.readyState!==WebSocket.OPEN)&&(a=await A()),new Promise((d,g)=>{a=a;const i="HkList"+Date.now().toString(),h={jsonrpc:"2.0",method:u,id:i,params:[`token:${e.value.token}`,...t]};a.onmessage=b=>{const I=JSON.parse(b.data);I.id===i&&(I.error?g(I.error):d(I.result))},a.send(JSON.stringify(h))}));return{aria2ConfigDialogVisible:f,showAria2Config:c,hideAria2Config:s,aria2ConfigForm:e,saveAria2Config:v,getAria2Version:async()=>{await r("aria2.getVersion"),y.success("测试连接成功")},addAria2Url:async(u,t,d,g)=>{await r("aria2.addUri",[[u],{out:t,dir:e.value.dir===""?null:e.value.dir,header:[`User-Agent: ${d}`],split:g.toString()}]),y.success("添加链接成功")}}}),Ve=U({__name:"Aria2Dialog",setup(f){const e=Se(),{aria2ConfigDialogVisible:c,aria2ConfigForm:s}=ce(e),v={},a=async({validateResult:A})=>{A===!0&&(e.saveAria2Config(),e.hideAria2Config(),y.success("保存成功"))};return(A,r)=>{const p=me,_=pe,u=ve,t=ge,d=_e,g=Ce;return ue(),de(g,{visible:m(c),"onUpdate:visible":r[3]||(r[3]=i=>fe(c)?c.value=i:null),header:"Aria2配置调整",footer:!1},{default:C(()=>[l(d,{data:m(s),rules:v,onSubmit:a},{default:C(()=>[l(_,{label:"主机地址",name:"host",help:"需要包括协议,端口,地址"},{default:C(()=>[l(p,{modelValue:m(s).host,"onUpdate:modelValue":r[0]||(r[0]=i=>m(s).host=i)},null,8,["modelValue"])]),_:1}),l(_,{label:"密钥",name:"token"},{default:C(()=>[l(p,{modelValue:m(s).token,"onUpdate:modelValue":r[1]||(r[1]=i=>m(s).token=i)},null,8,["modelValue"])]),_:1}),l(_,{label:"保存路径",name:"dir"},{default:C(()=>[l(p,{modelValue:m(s).dir,"onUpdate:modelValue":r[2]||(r[2]=i=>m(s).dir=i)},null,8,["modelValue"])]),_:1}),l(_,null,{default:C(()=>[l(t,{size:"small"},{default:C(()=>[l(u,{theme:"default",onClick:m(e).hideAria2Config},{default:C(()=>r[4]||(r[4]=[w(" 取消 ")])),_:1},8,["onClick"]),l(u,{onClick:m(e).getAria2Version},{default:C(()=>r[5]||(r[5]=[w(" 测试连接 ")])),_:1},8,["onClick"]),l(u,{type:"submit"},{default:C(()=>r[6]||(r[6]=[w(" 保存 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])}}});export{ye as A,Ve as _,Se as u};
