import{B as l}from"./index.c47da06a.js";import{d as o,j as s,c as n,e,F as t,i as a,L as c,M as u,O as r,N as p,b as i,P as m,E as d,p as f}from"./index.e94de0b2.js";import"./LoadingOutlined.c050385d.js";var g=o({name:"Test-slot",props:{name:String,number:Number,onEvent:Function},setup(l,o){const{attrs:c,emit:u,slots:r={}}=o;s((()=>{console.log("props:",l),console.log("attrs:",c),console.log("emit:",u),console.log("slots:",r)}));const p=a("testProvide",1);console.log("inject",p);const i=()=>{console.log("tsx click"),u("event")};return()=>n(t,null,[n("p",{onClick:i},[e("slot tsx：")]),n("p",null,[e("slot 标签："),n("slot",null,null),e("、"),n("slot",{name:"name"},null)]),n("p",null,[e("context.slot："),r.default&&r.default(),e("、"),r.name&&r.name()])])}});const v={props:{number:Number},setup(l,o){const{attrs:n,emit:e,slots:t={}}=o;s((()=>{console.log("sfc props:",l),console.log("sfc attrs:",n),console.log("sfc emit:",e),console.log("sfc slots:",t)}));return{click:()=>{console.log("sfc click"),e("event")}}}},k=p("data-v-6147d7e7")(((l,o,s,e,a,p)=>(c(),u(t,null,[n("span",{onClick:o[1]||(o[1]=(...l)=>e.click&&e.click(...l))},"slot 单文件组件："),r(l.$slots,"default"),r(l.$slots,"name")],64))));v.render=k,v.__scopeId="data-v-6147d7e7";var b=o({name:"Test",setup(){const o=i({count:0}),s=()=>{o.count+=1};return f("testProvide",0),console.log("isRef:",m(o)),d((()=>{console.log("watchEffect:",o.count)})),()=>n("div",null,[e("只有在子组件中声明了 props ， 才会作为 props 传入"),n("hr",null,null),n(v,{name:"sfc slot",number:1,onEvent:()=>{console.log("slot sfc parent click")}},{default:()=>n("span",null,[e("default slot")]),name:()=>n("span",null,[e("name slot")])}),n("hr",null,null),n(g,{name:"slot",number:1,onEvent:()=>{console.log("slot parent click")}},{default:()=>n("span",null,[e("default slot")]),name:()=>n("span",null,[e("name slot")])}),n("hr",null,null),n(l,{type:"danger",onClick:s},{default:()=>[e("喜加一")]})])}});export default b;