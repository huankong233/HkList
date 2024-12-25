import{av as C,ba as M,bk as W,bl as p,bm as G,bn as B,bo as K,bp as U,S as w,aJ as D,bq as q,br as H,bd as F,bs as J,bt as X,bc as Y,an as z,bu as Q}from"./index-DDOnw_dn.js";/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */var V=/\s/;function Z(n){for(var e=n.length;e--&&V.test(n.charAt(e)););return e}var j=Z,nn=j,en=/^\s+/;function tn(n){return n&&n.slice(0,nn(n)+1).replace(en,"")}var rn=tn,an=rn,S=C,sn=M,x=NaN,fn=/^[-+]0x[0-9a-f]+$/i,un=/^0b[01]+$/i,ln=/^0o[0-7]+$/i,on=parseInt;function mn(n){if(typeof n=="number")return n;if(sn(n))return x;if(S(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=S(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=an(n);var t=un.test(n);return t||ln.test(n)?on(n.slice(2),t?2:8):fn.test(n)?x:+n}var cn=mn;/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */var dn=W,bn=function(){return dn.Date.now()},vn=bn,_n=C,y=vn,I=cn,gn="Expected a function",yn=Math.max,Tn=Math.min;function On(n,e,t){var s,i,f,u,a,o,m=0,T=!1,c=!1,v=!0;if(typeof n!="function")throw new TypeError(gn);e=I(e)||0,_n(t)&&(T=!!t.leading,c="maxWait"in t,f=c?yn(I(t.maxWait)||0,e):f,v="trailing"in t?!!t.trailing:v);function _(r){var l=s,d=i;return s=i=void 0,m=r,u=n.apply(d,l),u}function N(r){return m=r,a=setTimeout(b,e),T?_(r):u}function P(r){var l=r-o,d=r-m,h=e-l;return c?Tn(h,f-d):h}function O(r){var l=r-o,d=r-m;return o===void 0||l>=e||l<0||c&&d>=f}function b(){var r=y();if(O(r))return $(r);a=setTimeout(b,P(r))}function $(r){return a=void 0,v&&s?_(r):(s=i=void 0,u)}function R(){a!==void 0&&clearTimeout(a),m=0,s=o=i=a=void 0}function k(){return a===void 0?u:$(y())}function g(){var r=y(),l=O(r);if(s=arguments,i=this,o=r,l){if(a===void 0)return N(o);if(c)return clearTimeout(a),a=setTimeout(b,e),_(o)}return a===void 0&&(a=setTimeout(b,e)),u}return g.cancel=R,g.flush=k,g}var oe=On;/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */function $n(n){var e=n==null?0:n.length;return e?n[e-1]:void 0}var hn=$n;/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */var E=p,Sn=U,xn=w,A=E?E.isConcatSpreadable:void 0;function In(n){return xn(n)||Sn(n)||!!(A&&n&&n[A])}var En=In,An=K,Cn=En;function L(n,e,t,s,i){var f=-1,u=n.length;for(t||(t=Cn),i||(i=[]);++f<u;){var a=n[f];e>0&&t(a)?e>1?L(a,e-1,t,s,i):An(i,a):s||(i[i.length]=a)}return i}var Fn=L,Ln=Fn;function Nn(n){var e=n==null?0:n.length;return e?Ln(n,1):[]}var Pn=Nn,Rn=Pn,kn=G,Mn=B;function Wn(n){return Mn(kn(n,void 0,Rn),n+"")}var pn=Wn;/**
 * tdesign v1.10.4
 * (c) 2024 tdesign
 * @license MIT
 */var Gn=Y,Bn=z;function Kn(n,e){return e.length<2?n:Gn(n,Bn(e,0,-1))}var Un=Kn,wn=F,Dn=hn,qn=Un,Hn=J;function Jn(n,e){return e=wn(e,n),n=qn(n,e),n==null||delete n[Hn(Dn(e))]}var Xn=Jn,Yn=Q;function zn(n){return Yn(n)?void 0:n}var Qn=zn,Vn=D,Zn=X,jn=Xn,ne=F,ee=q,te=Qn,re=pn,ae=H,ie=1,se=2,fe=4,ue=re(function(n,e){var t={};if(n==null)return t;var s=!1;e=Vn(e,function(f){return f=ne(f,n),s||(s=f.length>1),f}),ee(n,ae(n),t),s&&(t=Zn(t,ie|se|fe,te));for(var i=e.length;i--;)jn(t,e[i]);return t}),me=ue;export{Fn as _,pn as a,oe as d,hn as l,me as o,cn as t};
