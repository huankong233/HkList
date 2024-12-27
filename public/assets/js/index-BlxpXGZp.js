import{d as de,I as L,c as y,W as fe,X as me,r as O,a2 as ge,w as S,af as he,ag as pe,a4 as H,q as ye,a1 as be,e as w,a7 as U,_ as p,ah as C,ai as X,Q as xe,R as Se}from"./index-DxT_05GM.js";import{u as we,F as _e,a as Te,i as ze}from"./index-DQbFxpGN.js";import{o as Ve}from"./helper-BeSYYrjv.js";import{u as Oe,c as Ce}from"./useResizeObserver-CAs_OzJI.js";/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */var s,Pe=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow-y:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`,je=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Ie(n){if(!(typeof window>"u"||!n)){var e=window.getComputedStyle(n),r=e.getPropertyValue("box-sizing")||e.getPropertyValue("-moz-box-sizing")||e.getPropertyValue("-webkit-box-sizing"),o=parseFloat(e.getPropertyValue("padding-bottom"))+parseFloat(e.getPropertyValue("padding-top")),d=parseFloat(e.getPropertyValue("border-bottom-width"))+parseFloat(e.getPropertyValue("border-top-width")),f=je.map(function(l){return"".concat(l,":").concat(e.getPropertyValue(l))}).join(";");return{sizingStyle:f,paddingSize:o,borderSize:d,boxSizing:r}}}function k(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;s||(s=document.createElement("textarea"),document.body.appendChild(s));var o=Ie(n),d=o.paddingSize,f=o.borderSize,l=o.boxSizing,P=o.sizingStyle;s.setAttribute("style","".concat(P,";").concat(Pe)),s.value=n.value||n.placeholder||"";var m=s.scrollHeight,b={};l==="border-box"?m+=f:l==="content-box"&&(m-=d),s.value="";var V=s.scrollHeight-d;if(e!==null){var x=V*e;l==="border-box"&&(x=x+d+f),m=Math.max(x,m),b.minHeight="".concat(x,"px")}if(r!==null){var _=V*r;l==="border-box"&&(_=_+d+f),m=Math.min(_,m)}return b.height="".concat(m,"px"),s.parentNode&&s.parentNode.removeChild(s),s=null,b}/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */var Fe={allowInputOverMax:Boolean,autofocus:Boolean,autosize:{type:[Boolean,Object],default:!1},disabled:{type:Boolean,default:void 0},maxcharacter:{type:Number},maxlength:{type:[String,Number]},name:{type:String,default:""},placeholder:{type:String,default:void 0},readonly:{type:Boolean,default:void 0},status:{type:String,default:"default",validator:function(e){return e?["default","success","warning","error"].includes(e):!0}},tips:{type:[String,Function]},value:{type:[String,Number],default:void 0},modelValue:{type:[String,Number],default:void 0},defaultValue:{type:[String,Number]},onBlur:Function,onChange:Function,onFocus:Function,onKeydown:Function,onKeypress:Function,onKeyup:Function,onValidate:Function};/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */function $(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,o)}return r}function Ne(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?$(Object(r),!0).forEach(function(o){p(n,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(r,o))})}return n}function J(n){var e={};return Object.keys(n).forEach(function(r){ze(n[r])||(e[r]=n[r])}),e}var Ee=de({name:"TTextarea",inheritAttrs:!1,props:Ne({},Fe),setup:function(e,r){var o=r.attrs,d=r.expose,f=L(),l=L("textarea"),P=y(function(){return"".concat(l.value,"__tips")}),m=y(function(){return"".concat(l.value,"__limit")}),b=fe(e),V=b.value,x=b.modelValue,_=Oe(V,x,e.defaultValue,e.onChange),A=me(_,2),c=A[0],q=A[1],T=Ce(),K=we(),z=O({}),v=O(),j=O(!1),I=O(!1),G=function(){var a;return(a=v.value)===null||a===void 0?void 0:a.focus()},Q=function(){var a;return(a=v.value)===null||a===void 0?void 0:a.blur()},g=function(){var a;if(e.autosize===!0)z.value=k(v.value);else if(e.autosize&&C(e.autosize)==="object"){var u=e.autosize,i=u.minRows,h=u.maxRows;z.value=k(v.value,i,h)}else o.rows?z.value={height:"auto",minHeight:"auto"}:o.style&&(a=v.value)!==null&&a!==void 0&&(a=a.style)!==null&&a!==void 0&&a.height&&(z.value={height:v.value.style.height})},W=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",u=v.value,i=String(a);u&&u.value!==i&&(u.value=i,c.value=i)},R=function(a){var u=a.target,i=u.value;if(e.maxcharacter&&e.maxcharacter>=0){var h=X(i,e.maxcharacter);i=C(h)==="object"&&h.characters}!I.value&&q(i,{e:a}),H(function(){return W(i)}),g()},Y=function(a){R(a)},Z=function(){I.value=!0},ee=function(a){I.value=!1,R(a)},F=function(a,u){var i;if(!T.value){var h="on".concat(a[0].toUpperCase()).concat(a.slice(1));(i=e[h])===null||i===void 0||i.call(e,c.value,{e:u})}},ae=function(a){F("keydown",a)},te=function(a){F("keyup",a)},ne=function(a){F("keypress",a)},re=function(a){var u;g(),!T.value&&(j.value=!0,(u=e.onFocus)===null||u===void 0||u.call(e,c.value,{e:a}))},N=ge(_e,void 0),oe=function(a){var u;a.target&&(g(),j.value=!1,(u=e.onBlur)===null||u===void 0||u.call(e,c.value,{e:a}),N==null||N.handleBlur())},ue=y(function(){return[l.value,p(p({},"".concat(f.value,"-is-disabled"),T.value),"".concat(f.value,"-is-readonly"),K.value)]}),ie=y(function(){return J({autofocus:e.autofocus,disabled:T.value,readonly:K.value,placeholder:e.placeholder,maxlength:!e.allowInputOverMax&&e.maxlength||void 0,name:e.name||void 0})}),le=y(function(){var t=X(String(c.value||""));return C(t)==="object"?t.length:t}),ce=y(function(){return{value:[void 0,null].includes(c.value)?void 0:String(c.value),status:e.status,maxlength:Number(e.maxlength),maxcharacter:e.maxcharacter,allowInputOverMax:e.allowInputOverMax,onValidate:e.onValidate}}),se=Te(ce),B=se.tStatus;S(function(){return c.value},function(){return g()}),S(v,function(t){t&&g()}),S(function(){return e.autofocus},function(t){t&&v.value.focus()}),S(z,function(t){var a=o.style;he(v.value,pe(a,t))}),S(c,function(){H(function(){return g()})}),S(function(){return e.autosize},g,{deep:!0}),d({focus:G,blur:Q}),ye(function(){g()});var ve=xe();return function(){var t,a=J({onFocus:re,onBlur:oe,onKeydown:ae,onKeyup:te,onKeypress:ne}),u=be(),i=u.STATUS,h=y(function(){return["".concat(l.value,"__inner"),p(p(p(p({},"".concat(f.value,"-is-").concat(B.value),B.value),i.value.disabled,T.value),i.value.focused,j.value),"".concat(f.value,"-resize-none"),C(e.autosize)==="object"),"narrow-scrollbar"]}),D=ve("tips"),E=D&&w("div",{class:"".concat(P.value," ").concat(l.value,"__tips--").concat(e.status||"normal")},[D]),M=e.maxcharacter&&w("span",{class:m.value},["".concat(le.value,"/").concat(e.maxcharacter)])||!e.maxcharacter&&e.maxlength&&w("span",{class:m.value},["".concat(c.value?(t=String(c.value))===null||t===void 0?void 0:t.length:0,"/").concat(e.maxlength)]);return w("div",U({class:ue.value},Ve(o,["style"])),[w("textarea",U({onInput:Y,onCompositionstart:Z,onCompositionend:ee,ref:v,value:c.value,class:h.value},a,ie.value),null),E||M?w("div",{class:["".concat(l.value,"__info_wrapper"),p({},"".concat(l.value,"__info_wrapper_align"),!E)]},[E,M]):null])}}});/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */var De=Se(Ee);export{De as T};