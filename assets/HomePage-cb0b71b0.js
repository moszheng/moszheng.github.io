import{r as u,a as p,o as g,c as h,b as s,w as a,T as f,d as e,e as i,g as c,f as v,v as x}from"./index-5297b21b.js";const b={class:"Home"},y={class:"index-loading"},w=e("div",{class:"container d-flex justify-content-center align-items-center h-100"},[e("svg",{id:"mos-logo"},[e("use",{"xlink:href":"#icon-mosLogo"})])],-1),k=[w],C={class:"index-bgcover"},E={class:"index-info"},L={class:"container d-flex justify-content-end align-items-center h-100"},B={class:"mx-lg-5 px-lg-5 text-white"},D=e("h5",{class:"mb-2"},"Freelance 3D Generalist",-1),S=e("h1",{class:"mb-5"},"Sheng Wen (Mos) Cheng",-1),T=e("div",{class:"mb-5"},[e("p",null,"A 3D Generalist and Motion Designer based in Taiwan."),e("p",null,[i("Offering professional design services for digital arts and product motion design, "),e("br"),i("catering to companies and brands.")])],-1),H=e("button",{type:"button",class:"btn btn-primary index-btn"},"Explore",-1),O={__name:"HomePage",setup(M){const n=u(!1);function l(){console.log("loading finished"),n.value=!0,console.log(n.value)}const r=o=>{o.style.opacity=0},d=(o,t)=>{c.to(o,{opacity:1,duration:1,ease:"power3.Out",onComplete:t})},_=(o,t)=>{c.to(o,{opacity:0,delay:1.5,duration:.75,ease:"power3.Out",onComplete:t})};return(o,t)=>{const m=p("router-link");return g(),h("main",b,[s(f,{name:"move",mode:"out-in",onBeforeEnter:r,onEnter:d,onLeave:_},{default:a(()=>[v(e("div",y,k,512),[[x,!n.value]])]),_:1}),e("div",C,[e("iframe",{src:"https://player.vimeo.com/video/881388756?background=1&muted=1&loop=3",allow:"autoplay",onLoad:l},null,32)]),e("div",E,[e("div",L,[e("div",B,[D,S,T,s(m,{to:{name:"WorksPage"}},{default:a(()=>[H]),_:1})])])])])}}};export{O as default};
