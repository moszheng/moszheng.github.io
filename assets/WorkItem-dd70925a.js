import{_ as C,g as m,S as T,r as h,W as p,i as W,j as z,k as L,l as B,a as E,o as a,c as n,d as e,t as i,F as _,m as u,b,w as M,n as X,p as A,f as $}from"./index-e197195e.js";const l=d=>(A("data-v-fe876601"),d=d(),$(),d),D={class:"WorksItem mt-5 pt-5"},F={class:"ratio ratio-16x9 mb-5","data-scroll-section":""},U=["src"],q={class:"workitem-info row mb-5 mx-md-3 mx-2 px-xl-5 px-3"},N={class:"col-9"},R={class:"hero-1 mb-4"},V={class:"hero-2 mb-3"},H={class:"hero-2 mb-4"},K=["href"],G=l(()=>e("svg",{id:"icon_social"},[e("use",{"xlink:href":"#icon-behance"})],-1)),J=[G],Q=["href"],Y=l(()=>e("svg",{id:"icon_social"},[e("use",{"xlink:href":"#icon-vimeo"})],-1)),Z=[Y],ee={class:"col-3 justify-content-end"},te=l(()=>e("h3",{class:"hero-3 mb-4"},"Roles",-1)),oe=l(()=>e("hr",{class:"mt-5 hero-sep"},null,-1)),se={class:"workitem-content mx-md-3 mx-1 mb-5 px-xl-5 px-3"},re={class:"row"},ce={class:"col-xxl-7 mb-md-4 mb-5"},ae={class:"head-img-container img-container d-flex-center"},ne=["src"],le={class:"col-xxl-5"},ie={class:"content-context-container"},de={class:"mb-3"},_e=["src"],ue=l(()=>e("hr",{class:"mt-5"},null,-1)),me={class:"workitem-credit row mx-md-3 mx-1 mb-5 px-xl-5 px-3"},he=l(()=>e("div",{class:"col-xl-5"},null,-1)),pe={class:"col-xl-7"},ve=l(()=>e("h4",{class:"mb-5"},"Credit",-1)),fe={class:"col-lg-4 col"},ge={class:"col-lg-8 col"},xe={class:"workitem-end container-fluid text-center"},ye=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",class:"bi bi-chevron-compact-up",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"})],-1)),ke=l(()=>e("p",null,"BACK TO TOP",-1)),we=[ye,ke],be={class:"container-fluid workitem-otherprj d-flex-center px-md-5 px-1","data-scroll-section":""},je={class:"container"},Ie=l(()=>e("h3",{class:"text-white my-4"},"Other Project",-1)),Pe={class:"py-md-3 pl-md-5 px-xl-3 bd-content"},Se={class:"row"},Oe={class:"card mb-4 text-white"},Ce=["src"],Te=l(()=>e("div",{class:"works-black"},null,-1)),We={class:"works-text text-white px-4"},ze={class:"card-title"},Le={class:"card-text"},Be={__name:"WorkItem",props:{projecturl:String},setup(d){const j=d;m.registerPlugin(T);const s=h("null"),v=h("null");s.value=p.project.find(t=>t.url_name==j.projecturl),v.value=p.project.filter(t=>t.url_name!==s.value.url_name).sort(()=>Math.random()-.5).slice(0,3);const I=t=>`https://vimeo.com/${t[1]}`,P=t=>{if(t[0]=="vimeo")return`https://player.vimeo.com/video/${t[1]}?h=6ea64f06ea&color=ffffff&title=0&byline=0&portrait=0`;if(t[0]=="youtube")return`https://www.youtube.com/embed/${t[1]}?si=S_7EpUA151r9khLz`},f=t=>"../src/img/"+t,y=W(()=>s.value.img_md.slice(1)),S=t=>new Promise((r,c)=>{setTimeout(()=>{r(p.project.find(o=>o.url_name==t))},0)});z(async(t,r)=>{g.revert(),t.params.projecturl!==r.params.projecturl&&(s.value=await S(t.params.projecturl),v.value=p.project.filter(c=>c.url_name!==s.value.url_name).sort(()=>Math.random()-.5).slice(0,3))});const k=h(document.querySelectorAll(".lazy")),w=h();let g;L(()=>{k.value=document.querySelectorAll(".lazy");function t(r){r instanceof HTMLImageElement?r.classList.add("loaded"):r.target.classList.add("loaded")}k.value.forEach(function(r){r.complete?t(r):r.addEventListener("load",t)}),g=m.context(r=>{const c=m.timeline({scrollTrigger:{trigger:".workitem-info",start:"top 80%",end:"bottom 30%"}});c.from(".hero-1",{opacity:0,yPercent:50,rotationX:90,ease:"back.inOut(1.7)",duration:.8}),c.from(".hero-2",{opacity:0,yPercent:40,rotationX:90,ease:"back.inOut(1.7)",duration:.8,stagger:.25},.1),c.from(".hero-social",{opacity:0,yPercent:30,scale:.1,ease:"back.inOut(1.7)",duration:.5,stagger:.25},.65),c.from(".hero-3",{opacity:0,yPercent:50,rotationX:90,ease:"back.inOut(1.7)",duration:.8},.6),c.from(".hero-4",{opacity:0,yPercent:25,rotationX:90,ease:"power3.Out(1.7)",duration:.8,stagger:.25},.65),c.from(".hero-sep",{scaleX:0,ease:"power3.Out(1.7)",duration:.5,stagger:.25},.8),c.from(".head-img-container",{opacity:0,yPercent:25,ease:"power3.Out(1.7)",duration:.8},1),c.from("#content-context",{opacity:0,yPercent:25,ease:"power3.Out(1.7)",duration:.5,stagger:.1},1.1),m.to(".head-img-container-img",{scrollTrigger:{trigger:".head-img-container",start:"clamp(top bottom)",end:"bottom 50px",scrub:!0},yPercent:-7.5})},w.value)}),B(()=>{g.revert()});function O(){window.scrollTo(0,0)}return(t,r)=>{const c=E("router-link");return a(),n("div",D,[e("div",F,[e("iframe",{src:P(s.value.video),allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""},null,8,U)]),e("main",{class:"container",ref_key:"imgContainer",ref:w},[e("div",q,[e("div",N,[e("h3",R,i(s.value.en_name),1),e("h6",V,"@"+i(s.value.company),1),e("p",H,i(s.value.date),1),e("div",null,[e("a",{class:"hero-social me-3",href:s.value.behance,target:"_blank",rel:"noopener"},J,8,K),e("a",{class:"hero-social",href:I(s.value.video),target:"_blank",rel:"noopener"},Z,8,Q)])]),e("div",ee,[te,(a(!0),n(_,null,u(s.value.roles,o=>(a(),n("p",{class:"hero-4 mb-2",key:o},i(o),1))),128))]),oe]),e("section",se,[e("div",re,[e("div",ce,[e("div",ae,[e("img",{src:f(s.value.img_md[0]),class:"head-img-container-img d-flex-center img-fluid lazy",alt:"firstImg"},null,8,ne)])]),e("div",le,[e("div",ie,[(a(!0),n(_,null,u(s.value.msg,o=>(a(),n("p",{key:o,id:"content-context"},i(o),1))),128))])])]),e("div",null,[e("div",de,[(a(!0),n(_,null,u(y.value,(o,x)=>(a(),n("div",{class:"img-container d-flex-center mb-3",key:o},[e("img",{src:f(y.value[x]),class:"d-flex-center col img-fluid lazy",alt:"contextImg"},null,8,_e)]))),128))])]),ue]),e("div",me,[he,e("div",pe,[ve,(a(!0),n(_,null,u(s.value.credit,(o,x)=>(a(),n("div",{class:"row",key:o},[e("p",fe,i(x),1),e("p",ge,i(o),1)]))),128))])]),e("div",xe,[e("a",{onClick:r[0]||(r[0]=o=>O()),class:"nav-link p-2"},we)])],512),e("section",be,[e("div",je,[Ie,e("div",Pe,[e("div",Se,[(a(!0),n(_,null,u(v.value,o=>(a(),n("div",{class:"col-xl-4",key:o.url_name},[e("div",Oe,[b(c,{to:{name:"WorksItem",params:{projecturl:o.url_name}},title:o.name},{default:M(()=>[e("img",{src:f(o.img_md[0]),class:"card-img lazy",alt:"otherprjImg"},null,8,Ce),Te,e("div",We,[e("h4",ze,i(o.en_name),1),e("p",Le,i(o.date),1)])]),_:2},1032,["to","title"])])]))),128))])])])]),b(X)])}}},Me=C(Be,[["__scopeId","data-v-fe876601"]]);export{Me as default};
