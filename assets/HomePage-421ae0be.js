import{_ as f,r as h,a as g,o as v,c as x,b as i,w as c,T as b,d as e,g as d,e as y,v as w,p as k,f as S,h as l}from"./index-794c7d1e.js";const t=s=>(k("data-v-d800f4f9"),s=s(),S(),s),C={class:"Home"},E={class:"index-loading"},L=t(()=>e("div",{class:"container d-flex justify-content-center align-items-center h-100"},[e("svg",{id:"mos-logo"},[e("use",{"xlink:href":"#icon-mosLogo"})])],-1)),B=[L],D={class:"index-bgcover"},H={class:"index-info"},I={class:"container d-flex justify-content-end align-items-center h-100"},P={class:"mx-lg-5 px-lg-5 text-white"},T=t(()=>e("h5",{class:"mb-2"},"Freelance 3D Generalist",-1)),M=t(()=>e("h1",{class:"mb-5"},"Sheng Wen (Mos) Cheng",-1)),N=t(()=>e("div",{class:"mb-5"},[e("p",null,"A 3D Generalist and Motion Designer based in Taiwan."),e("p",null,[l("Offering professional design services for digital arts and product motion design, "),e("br"),l("catering to companies and brands.")])],-1)),O=t(()=>e("button",{type:"button",class:"btn btn-primary index-btn"},"Explore",-1)),V={__name:"HomePage",setup(s){const a=h(!1);function r(){console.log("loading finished"),a.value=!0,console.log(a.value)}const _=o=>{o.style.opacity=0},p=(o,n)=>{d.to(o,{opacity:1,duration:1,ease:"power3.Out",onComplete:n})},m=(o,n)=>{d.to(o,{opacity:0,delay:1.5,duration:.75,ease:"power3.Out",onComplete:n})};return(o,n)=>{const u=g("router-link");return v(),x("main",C,[i(b,{name:"move",mode:"out-in",onBeforeEnter:_,onEnter:p,onLeave:m},{default:c(()=>[y(e("div",E,B,512),[[w,!a.value]])]),_:1}),e("div",D,[e("iframe",{src:"https://player.vimeo.com/video/881388756?background=1&muted=1&loop=3",allow:"autoplay",onLoad:r},null,32)]),e("div",H,[e("div",I,[e("div",P,[T,M,N,i(u,{to:{name:"WorksPage"}},{default:c(()=>[O]),_:1})])])])])}}},j=f(V,[["__scopeId","data-v-d800f4f9"]]);export{j as default};
