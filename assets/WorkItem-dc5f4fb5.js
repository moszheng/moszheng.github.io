import{_ as T,g as _,S as W,r as h,W as p,i as z,j as L,k as B,l as E,a as M,o as a,c as n,d as e,t as i,F as m,m as u,b as j,w as X,n as A,p as $,f as D}from"./index-660701db.js";const l=d=>($("data-v-e58716d1"),d=d(),D(),d),F={class:"WorksItem"},U={class:"mt-5 pt-5"},q={class:"ratio ratio-16x9 mb-5","data-scroll-section":""},N=["src"],R={class:"workitem-info row mb-5 mx-md-3 mx-2 px-xl-5 px-3"},V={class:"col-md-9 mb-md-0 mb-5"},H={class:"hero-1 mb-4"},K={class:"hero-2 mb-3"},G={class:"hero-2 mb-4"},J=["href"],Q=l(()=>e("svg",{id:"icon_social"},[e("use",{"xlink:href":"#icon-behance"})],-1)),Y=[Q],Z=["href"],ee=l(()=>e("svg",{id:"icon_social"},[e("use",{"xlink:href":"#icon-vimeo"})],-1)),te=[ee],oe={class:"col-md-3 justify-content-end"},se=l(()=>e("h3",{class:"hero-3 mb-4"},"Roles",-1)),re=l(()=>e("hr",{class:"mt-5 hero-sep"},null,-1)),ce={class:"workitem-content mx-md-3 mx-1 mb-5 px-xl-5 px-3"},ae={class:"row mb-md-0 mb-5"},ne={class:"col-xxl-7 mb-md-4 mb-5"},le={class:"head-img-container img-container d-flex-center"},ie=["src"],de={class:"col-xxl-5"},_e={class:"content-context-container"},me={class:"mb-3"},ue=["src"],he=l(()=>e("hr",{class:"mt-5"},null,-1)),pe={class:"workitem-credit row mx-md-3 mx-1 mb-5 px-xl-5 px-3"},ve=l(()=>e("div",{class:"col-xl-5"},null,-1)),fe={class:"col-xl-7"},ge=l(()=>e("h4",{class:"mb-5"},"Credit",-1)),xe={class:"col-lg-4 col"},ye={class:"col-lg-8 col"},be={class:"workitem-end container-fluid text-center"},we=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",class:"bi bi-chevron-compact-up",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"})],-1)),ke=l(()=>e("p",null,"BACK TO TOP",-1)),je=[we,ke],Ie={class:"container-fluid workitem-otherprj d-flex-center px-md-5 px-1","data-scroll-section":""},Pe={class:"container"},Se=l(()=>e("h3",{class:"text-white my-4"},"Other Project",-1)),Oe={class:"py-md-3 pl-md-5 px-xl-3 bd-content"},Ce={class:"row"},Te={class:"card mb-4 text-white"},We=["src"],ze=l(()=>e("div",{class:"works-black"},null,-1)),Le={class:"works-text text-white px-4"},Be={class:"card-title"},Ee={class:"card-text"},Me={__name:"WorkItem",props:{projecturl:String},setup(d){const I=d;_.registerPlugin(W);const r=h("null"),v=h("null");r.value=p.project.find(t=>t.url_name==I.projecturl),v.value=p.project.filter(t=>t.url_name!==r.value.url_name).sort(()=>Math.random()-.5).slice(0,3);const P=t=>`https://vimeo.com/${t[1]}`,S=t=>{if(t[0]=="vimeo")return`https://player.vimeo.com/video/${t[1]}?h=6ea64f06ea&color=ffffff&title=0&byline=0&portrait=0`;if(t[0]=="youtube")return`https://www.youtube.com/embed/${t[1]}?si=S_7EpUA151r9khLz`},f=t=>"../src/img/"+t,b=z(()=>r.value.img_md.slice(1)),w=h(document.querySelectorAll(".lazy")),k=h();let g,x=_.matchMedia();L(()=>{w.value=document.querySelectorAll(".lazy");function t(s){s instanceof HTMLImageElement?s.classList.add("loaded"):s.target.classList.add("loaded")}w.value.forEach(function(s){s.complete?t(s):s.addEventListener("load",t)}),x.add("(min-width: 768px)",s=>{_.to(".head-img-container-img",{scrollTrigger:{trigger:".head-img-container",start:"clamp(top bottom)",end:"bottom 50px",scrub:!0},yPercent:-7.5})}),g=_.context(s=>{const c=_.timeline({scrollTrigger:{trigger:".workitem-info",start:"top 80%",end:"bottom 30%"}});c.from(".hero-1",{opacity:0,yPercent:50,rotationX:90,ease:"back.inOut(1.7)",duration:.8}),c.from(".hero-2",{opacity:0,yPercent:40,rotationX:90,ease:"back.inOut(1.7)",duration:.8,stagger:.25},.1),c.from(".hero-social",{opacity:0,yPercent:30,scale:.1,ease:"back.inOut(1.7)",duration:.5,stagger:.25},.65),c.from(".hero-3",{opacity:0,yPercent:50,rotationX:90,ease:"back.inOut(1.7)",duration:.8},.6),c.from(".hero-4",{opacity:0,yPercent:25,rotationX:90,ease:"power3.Out(1.7)",duration:.8,stagger:.25},.65),c.from(".hero-sep",{scaleX:0,ease:"power3.Out(1.7)",duration:.5,stagger:.25},.8),c.from(".head-img-container",{opacity:0,yPercent:25,ease:"power3.Out(1.7)",duration:.8},1),c.from("#content-context",{opacity:0,yPercent:25,ease:"power3.Out(1.7)",duration:.5,stagger:.1},1.1)},k.value)});const O=t=>new Promise((s,c)=>{setTimeout(()=>{s(p.project.find(o=>o.url_name==t))},0)});B(async(t,s)=>{g.revert(),x.revert(),t.params.projecturl!==s.params.projecturl&&(r.value=await O(t.params.projecturl),v.value=p.project.filter(c=>c.url_name!==r.value.url_name).sort(()=>Math.random()-.5).slice(0,3))}),E(()=>{g.revert(),x.revert()});function C(){window.scrollTo(0,0)}return(t,s)=>{const c=M("router-link");return a(),n("div",F,[e("main",U,[e("div",q,[e("iframe",{src:S(r.value.video),allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""},null,8,N)]),e("div",{class:"container",ref_key:"imgContainer",ref:k},[e("div",R,[e("div",V,[e("h3",H,i(r.value.en_name),1),e("h6",K,"@"+i(r.value.company),1),e("p",G,i(r.value.date),1),e("div",null,[e("a",{class:"hero-social me-3",href:r.value.behance,target:"_blank",rel:"noopener"},Y,8,J),e("a",{class:"hero-social",href:P(r.value.video),target:"_blank",rel:"noopener"},te,8,Z)])]),e("div",oe,[se,(a(!0),n(m,null,u(r.value.roles,o=>(a(),n("p",{class:"hero-4 mb-2",key:o},i(o),1))),128))]),re]),e("section",ce,[e("div",ae,[e("div",ne,[e("div",le,[e("img",{src:f(r.value.img_md[0]),class:"head-img-container-img d-flex-center img-fluid lazy",alt:"firstImg"},null,8,ie)])]),e("div",de,[e("div",_e,[(a(!0),n(m,null,u(r.value.msg,o=>(a(),n("p",{key:o,id:"content-context"},i(o),1))),128))])])]),e("div",null,[e("div",me,[(a(!0),n(m,null,u(b.value,(o,y)=>(a(),n("div",{class:"img-container d-flex-center mb-3",key:o},[e("img",{src:f(b.value[y]),class:"d-flex-center col img-fluid lazy",alt:"contextImg"},null,8,ue)]))),128))])]),he]),e("div",pe,[ve,e("div",fe,[ge,(a(!0),n(m,null,u(r.value.credit,(o,y)=>(a(),n("div",{class:"row",key:o},[e("p",xe,i(y),1),e("p",ye,i(o),1)]))),128))])]),e("div",be,[e("a",{onClick:s[0]||(s[0]=o=>C()),class:"nav-link p-2"},je)])],512),e("section",Ie,[e("div",Pe,[Se,e("div",Oe,[e("div",Ce,[(a(!0),n(m,null,u(v.value,o=>(a(),n("div",{class:"col-xl-4",key:o.url_name},[e("div",Te,[j(c,{to:{name:"WorksItem",params:{projecturl:o.url_name}},title:o.name},{default:X(()=>[e("img",{src:f(o.img_md[0]),class:"card-img lazy",alt:"otherprjImg"},null,8,We),ze,e("div",Le,[e("h4",Be,i(o.en_name),1),e("p",Ee,i(o.date),1)])]),_:2},1032,["to","title"])])]))),128))])])])])]),j(A)])}}},Ae=T(Me,[["__scopeId","data-v-e58716d1"]]);export{Ae as default};
