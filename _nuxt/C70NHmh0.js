import m from"./DKGzZC_N.js";import u from"./CtMiYK-N.js";import{d as f,S as p,c as n,e as r,n as a,a9 as o,i as s,f as g,t as y,h as b,M as v}from"./CJD-Iqip.js";const _=f({__name:"ProseCode",props:{code:{type:String,required:!0},icon:{type:String,default:void 0},language:{type:String,default:void 0},hideHeader:{type:Boolean,default:!1},filename:{type:String,default:void 0},highlights:{type:Array,default:void 0},meta:{type:String,default:void 0}},setup(e){const d={wrapper:"[&>pre]:!rounded-t-none [&>pre]:!my-0 my-5",header:"flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 border-b-0 relative rounded-t-md px-4 py-3 not-prose",icon:{base:""},button:{base:"absolute top-2.5 right-2.5"},filename:"text-gray-700 dark:text-gray-200 text-sm/6"},{ui:t}=p("content.prose.code",void 0,d,void 0,!0);return(i,h)=>{const c=m,l=u;return n(),r("div",{class:a(["relative",!!e.filename&&o(t).wrapper])},[e.filename&&!e.hideHeader?(n(),r("div",{key:0,class:a(o(t).header)},[s(c,{icon:e.icon,filename:e.filename,class:a(o(t).icon.base)},null,8,["icon","filename","class"]),g("span",{class:a(o(t).filename)},y(e.filename),3)],2)):b("",!0),s(l,{code:e.code,class:a(o(t).button.base)},null,8,["code","class"]),v(i.$slots,"default")],2)}}}),k=Object.assign(_,{__name:"ProseCode"});export{k as default};
