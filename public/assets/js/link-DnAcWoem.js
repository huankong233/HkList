import{u as O,r as m,_ as y}from"./index-DgibZqP6.js";import{d,c as a}from"./index-BXtOGv6Q.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13.3 3.96a4.77 4.77 0 116.74 6.75l-3.03 3.03-1.41-1.42 3.03-3.03a2.77 2.77 0 10-3.92-3.92L11.68 8.4 10.26 7l3.03-3.03zM15.4 10L10 15.41 8.58 14 14 8.59 15.4 10zm-7 1.68L5.36 14.7a2.77 2.77 0 103.92 3.92l3.03-3.03L13.74 17l-3.03 3.03a4.77 4.77 0 11-6.75-6.75l3.03-3.03 1.41 1.42z"}}]},j=d({name:"LinkIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-link",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{j as l};