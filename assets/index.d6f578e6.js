import{o as d,c as f,u as c,R as v,a as b,b as r,d as l,w as u,e as p,r as y,f as x,g as C,h as O,i as k}from"./vendor.d2bc9e9c.js";const L=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};L();const P={setup(a){return(s,i)=>(d(),f(c(v)))}},E="modulepreload",_={},$="/",m=function(s,i){return!i||i.length===0?s():Promise.all(i.map(t=>{if(t=`${$}${t}`,t in _)return;_[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":E,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e)return new Promise((h,g)=>{n.addEventListener("load",h),n.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>s())};var V="/assets/MoonCakeLogo.6c3ceb3e.png",w="/assets/user.f0f528d6.svg",M="/assets/cookie.1be825b0.svg";const R={class:"general-index-cotainer"},A=r("div",{class:"logo-imag-general-container"},[r("div",{class:"logo-imag-container"},[r("img",{src:V,alt:"Logo MoonCake",class:"logo-img"})])],-1),S={class:"options-index"},z=r("div",null,[r("div",{class:"icon-container"},[r("img",{src:w,alt:"user icon",class:"logo-img"})]),r("h2",{class:"option-text"},"Chef")],-1),K=r("div",null,[r("div",{class:"icon-container"},[r("img",{src:M,alt:"cookie icon",class:"logo-img"})]),r("h2",{class:"option-text"},"Cliente")],-1),N={name:"OptionMenu"},B=Object.assign(N,{setup(a){return(s,i)=>(d(),b("div",R,[A,r("div",S,[l(c(p),{to:"/chef",class:"index-option-container"},{default:u(()=>[z]),_:1}),l(c(p),{to:"/cliente",class:"index-option-container"},{default:u(()=>[K]),_:1})])]))}});var I=(a,s)=>{const i=a.__vccOpts||a;for(const[t,e]of s)i[t]=e;return i};const q={name:"MenuView",components:{OptionMenu:B}};function D(a,s,i,t,e,o){const n=y("OptionMenu");return d(),f(n)}var F=I(q,[["render",D]]);const T=x({history:C("/"),routes:[{path:"/",name:"home",component:F},{path:"/chef",name:"chef",component:()=>m(()=>import("./ChefView.0ba7c50f.js"),["assets/ChefView.0ba7c50f.js","assets/vendor.d2bc9e9c.js"])},{path:"/cliente",name:"cliente",component:()=>m(()=>import("./ClienteView.f2f717c6.js"),["assets/ClienteView.f2f717c6.js","assets/vendor.d2bc9e9c.js"])}]});var W=O({state:{sabores:[{nombre:"Chocolate",precio:150,catidad:10,unidades:"Kg"},{nombre:"Vainilla",precio:100,catidad:5,unidades:"Kg"},{nombre:"Fresa",precio:130,catidad:7,unidades:"Kg"},{nombre:"Caf\xE9",precio:180,catidad:8,unidades:"Kg"}],decoraciones:[{nombre:"Estrellas de Chocolate",precio:10,catidad:100,unidades:"Piezas"},{nombre:"Vacas astronautas",precio:20,catidad:50,unidades:"Piezas"},{nombre:"Cohetes",precio:25,catidad:70,unidades:"Piezas"},{nombre:"Asteroides de nuez",precio:30,catidad:150,unidades:"Piezas"}],pedidos:[]},getters:{},mutations:{setPedidos:(a,s)=>{a.pedidos.push(s)}},actions:{},modules:{}});k(P).use(W).use(T).mount("#app");export{I as _,V as a};
