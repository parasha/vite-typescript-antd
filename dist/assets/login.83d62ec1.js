import{d as a,b as e,c as s,e as l,R as t,F as o,Q as r}from"./index.422cab0a.js";import{B as n}from"./index.729c12cb.js";import{I as i}from"./index.0adcc182.js";import{s as c}from"./index.module.87c94b46.js";import{U as d,K as u}from"./UserOutlined.81d9603b.js";import"./LoadingOutlined.cb4f7b12.js";import"./SearchOutlined.7d6a2d88.js";import"./vnode.3bcc371a.js";var p=a({name:"login",setup(){const a=e({username:"",password:""}),p=r(),m=()=>{p.dispatch("login",a)};return()=>s(o,null,[s("p",{class:c["account-window-title"]},[l("账号登录")]),s(i,{type:"text",placeholder:"请输入账号(随便写)",value:a.username,onChange:e=>{a.username=e.target.value},class:c["input-line"],allowClear:!0},{prefix:()=>s(d,{class:"label-icon"},null)}),s(i,{type:"password",placeholder:"请输入密码(随便写)",value:a.password,onChange:e=>{a.password=e.target.value},class:c["input-line"],allowClear:!0},{prefix:()=>s(u,{class:"label-icon"},null)}),s(n,{size:"large",type:"primary",onClick:m,class:c["submit-button"]},{default:()=>[l("登录")]}),s("div",{class:c.others+" flex"},[s(t,{to:"/account/register",class:c["link-button"],replace:!0},{default:()=>[l("账号注册")]}),s(t,{to:"/account/reset-password",class:c["link-button"]},{default:()=>[l("忘记密码")]})])])}});export default p;