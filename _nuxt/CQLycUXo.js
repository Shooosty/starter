const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CuLp_cTZ.js","./Byi9u-oz.js","./Dyv2xkVm.js","./B1amIzBU.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{u as f}from"./BtDrP6IP.js";import{s as v,O as p,_ as g,a as d,P as l,Q as h,q as _,D as y,G as r}from"./Byi9u-oz.js";import{q as C,w as m,e as w,s as P,j as $,u as N}from"./Dyv2xkVm.js";import{u as j}from"./B1amIzBU.js";import{_ as D}from"./DS1ZjPcf.js";const T=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await g(()=>import("./CuLp_cTZ.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(D,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),R=E;export{R as default};
