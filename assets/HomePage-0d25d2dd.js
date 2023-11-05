import{r as c,c as C,o as L,a as j,b as v,d as f,e as d,w as u,T as B,f as T,g as t,h,i as _,j as y,v as b,F as V,k as z,n as A}from"./index-3b552a1c.js";const D={class:"Home"},G={class:"index-loading"},I=t("div",{class:"container d-flex justify-content-center align-items-center h-100"},[t("svg",{id:"mos-logo"},[t("use",{"xlink:href":"#icon-mosLogo"})])],-1),M=[I],W=["src"],F={class:"index-info"},H={class:"container d-flex justify-content-end align-items-center h-100"},N={class:"mx-lg-5 px-lg-5 text-white"},O=t("h5",{class:"mb-2"},"Freelance 3D Generalist",-1),P=t("h1",{class:"mb-5"},"Sheng Wen (Mos) Cheng",-1),K=t("div",{class:"mb-5"},[t("p",null,"A 3D Generalist and Motion Designer based in Taiwan."),t("p",null,[h("Offering professional design services for digital arts and product motion design, "),t("br"),h("catering to companies and brands.")])],-1),q=t("button",{type:"button",class:"btn btn-primary index-btn"},"Explore",-1),J={__name:"HomePage",setup(X){const s=["../src/img/01_gma29.jpg","../src/img/03_SWSX_01.jpg","../src/img/05_GMA32_01.png","../src/img/04_KK_01.png","../src/img/07_VIVA_01.jpg","../src/img/02_gha56_01.png"],a=c(0),g=c(0),x=C(()=>g.value===s.length);L(()=>{s.forEach(o=>{const r=new Image;r.src=o});const e=document.querySelectorAll(".lazy");function n(o){g.value++}e.forEach(function(o){o.complete?n():o.addEventListener("load",n)})});const i=c([!0,!0,!0,!0,!0,!0]);function E(e){return`z-index:${6-e};`}setInterval(()=>{const e=a.value;a.value=(a.value+1)%s.length,a.value==0?i.value=[!0,!0,!0,!0,!0,!0]:(i.value[a.value]=!0,i.value[e]=!1)},4e3);const m=e=>{e.style.opacity=0},p=(e,n)=>{_.to(e,{opacity:1,duration:1,ease:"power3.Out",onComplete:n})},w=e=>{e.style.opacity=1},S=(e,n)=>{_.to(e,{opacity:0,duration:1.2,onComplete:n})},k=(e,n)=>{_.to(e,{opacity:0,delay:1.5,duration:.8,ease:"power3.Out",onComplete:n})};return(e,n)=>{const o=j("router-link");return v(),f("main",D,[d(B,{name:"move",mode:"out-in",onBeforeEnter:m,onEnter:p,onLeave:k},{default:u(()=>[y(t("div",G,M,512),[[b,!x.value]])]),_:1}),d(T,{name:"move",mode:"out-in",onBeforeEnter:m,onEnter:p,onBeforeLeave:w,onLeave:S},{default:u(()=>[(v(),f(V,null,z(s,(r,l)=>y(t("img",{key:r,src:s[l],alt:"image",style:A(E(l)),class:"index-bgcover lazy"},null,12,W),[[b,i.value[l]]])),64))]),_:1}),t("div",F,[t("div",H,[t("div",N,[O,P,K,d(o,{to:{name:"WorksPage"}},{default:u(()=>[q]),_:1})])])])])}}};export{J as default};
