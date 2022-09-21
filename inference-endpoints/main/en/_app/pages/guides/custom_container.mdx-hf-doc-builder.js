import{S as Se,i as Re,s as ze,e as n,k as C,w as ke,t as a,M as Ge,c as l,d as o,m as M,a as c,x as Ie,h as r,b as i,N as He,G as t,g as f,y as xe,L as je,q as Te,o as qe,B as Pe,v as Be}from"../../chunks/vendor-hf-doc-builder.js";import{I as De}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Fe}from"../../chunks/CodeBlock-hf-doc-builder.js";function Ne(he){let p,z,d,g,T,v,L,q,O,G,s,W,k,J,K,P,Q,V,y,X,Y,w,Z,ee,E,te,oe,b,ae,re,H,A,pe,j,_,se,I,ne,le,B,h,ie,S,ce,ue,R,me,fe,D,$,F;return v=new De({}),$=new Fe({props:{code:`tensorflow_model_server \\
  --rest_api_port=5000 \\
  --model_name=my_model \\
  --model_base_path="/repository"`,highlighted:`tensorflow_model_server \\
  <span class="hljs-attribute">--rest_api_port</span>=5000 \\
  <span class="hljs-attribute">--model_name</span>=my_model \\
  <span class="hljs-attribute">--model_base_path</span>=<span class="hljs-string">&quot;/repository&quot;</span>`}}),{c(){p=n("meta"),z=C(),d=n("h1"),g=n("a"),T=n("span"),ke(v.$$.fragment),L=C(),q=n("span"),O=a("Use a custom Container Image"),G=C(),s=n("p"),W=a("Hugging Face Endpoints not only allows you to "),k=n("a"),J=a("customize your inference handler"),K=a(", it also allows you to provide a custom container image. Those can be public images, e.g "),P=n("em"),Q=a("tensorflow/serving:2.7.3,"),V=a(" or private Images hosted on "),y=n("a"),X=a("Docker hub"),Y=a(", "),w=n("a"),Z=a("AWS ECR"),ee=a(", "),E=n("a"),te=a("Azure ACR"),oe=a(", or "),b=n("a"),ae=a("Google GCR"),re=a("."),H=C(),A=n("img"),j=C(),_=n("p"),se=a("The "),I=n("a"),ne=a("creation flow"),le=a(" of your Image artifacts will stay the same way on how your custom image is used as the base image. This means that Hugging Face Endpoints will create a unique image artifact derived from your provided image including all Model Artifacts."),B=C(),h=n("p"),ie=a("The Model Artifacts (weights) are stored under "),S=n("code"),ce=a("/repository"),ue=a(". Meaning if you use"),R=n("code"),me=a("tensorflow/serving"),fe=a(" as your custom image you have to set model_base_path to /repository. Below is an example:"),D=C(),ke($.$$.fragment),this.h()},l(e){const u=Ge('[data-svelte="svelte-1phssyn"]',document.head);p=l(u,"META",{name:!0,content:!0}),u.forEach(o),z=M(e),d=l(e,"H1",{class:!0});var N=c(d);g=l(N,"A",{id:!0,class:!0,href:!0});var de=c(g);T=l(de,"SPAN",{});var ge=c(T);Ie(v.$$.fragment,ge),ge.forEach(o),de.forEach(o),L=M(N),q=l(N,"SPAN",{});var _e=c(q);O=r(_e,"Use a custom Container Image"),_e.forEach(o),N.forEach(o),G=M(e),s=l(e,"P",{});var m=c(s);W=r(m,"Hugging Face Endpoints not only allows you to "),k=l(m,"A",{href:!0});var ve=c(k);J=r(ve,"customize your inference handler"),ve.forEach(o),K=r(m,", it also allows you to provide a custom container image. Those can be public images, e.g "),P=l(m,"EM",{});var ye=c(P);Q=r(ye,"tensorflow/serving:2.7.3,"),ye.forEach(o),V=r(m," or private Images hosted on "),y=l(m,"A",{href:!0,rel:!0});var we=c(y);X=r(we,"Docker hub"),we.forEach(o),Y=r(m,", "),w=l(m,"A",{href:!0,rel:!0});var Ee=c(w);Z=r(Ee,"AWS ECR"),Ee.forEach(o),ee=r(m,", "),E=l(m,"A",{href:!0,rel:!0});var be=c(E);te=r(be,"Azure ACR"),be.forEach(o),oe=r(m,", or "),b=l(m,"A",{href:!0,rel:!0});var Ae=c(b);ae=r(Ae,"Google GCR"),Ae.forEach(o),re=r(m,"."),m.forEach(o),H=M(e),A=l(e,"IMG",{src:!0,alt:!0}),j=M(e),_=l(e,"P",{});var U=c(_);se=r(U,"The "),I=l(U,"A",{href:!0});var $e=c(I);ne=r($e,"creation flow"),$e.forEach(o),le=r(U," of your Image artifacts will stay the same way on how your custom image is used as the base image. This means that Hugging Face Endpoints will create a unique image artifact derived from your provided image including all Model Artifacts."),U.forEach(o),B=M(e),h=l(e,"P",{});var x=c(h);ie=r(x,"The Model Artifacts (weights) are stored under "),S=l(x,"CODE",{});var Ce=c(S);ce=r(Ce,"/repository"),Ce.forEach(o),ue=r(x,". Meaning if you use"),R=l(x,"CODE",{});var Me=c(R);me=r(Me,"tensorflow/serving"),Me.forEach(o),fe=r(x," as your custom image you have to set model_base_path to /repository. Below is an example:"),x.forEach(o),D=M(e),Ie($.$$.fragment,e),this.h()},h(){i(p,"name","hf:doc:metadata"),i(p,"content",JSON.stringify(Ue)),i(g,"id","use-a-custom-container-image"),i(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(g,"href","#use-a-custom-container-image"),i(d,"class","relative group"),i(k,"href","/docs/inference-endpoints/guides/custom_handler"),i(y,"href","https://hub.docker.com/"),i(y,"rel","nofollow"),i(w,"href","https://aws.amazon.com/ecr/?nc1=h_ls"),i(w,"rel","nofollow"),i(E,"href","https://azure.microsoft.com/de-de/services/container-registry/"),i(E,"rel","nofollow"),i(b,"href","https://cloud.google.com/container-registry?hl=de"),i(b,"rel","nofollow"),He(A.src,pe="https://raw.githubusercontent.com/huggingface/hf-endpoints-documentation/main/assets/custom_container.png")||i(A,"src",pe),i(A,"alt","custom container config"),i(I,"href","/docs/inference-endpoints/guides/")},m(e,u){t(document.head,p),f(e,z,u),f(e,d,u),t(d,g),t(g,T),xe(v,T,null),t(d,L),t(d,q),t(q,O),f(e,G,u),f(e,s,u),t(s,W),t(s,k),t(k,J),t(s,K),t(s,P),t(P,Q),t(s,V),t(s,y),t(y,X),t(s,Y),t(s,w),t(w,Z),t(s,ee),t(s,E),t(E,te),t(s,oe),t(s,b),t(b,ae),t(s,re),f(e,H,u),f(e,A,u),f(e,j,u),f(e,_,u),t(_,se),t(_,I),t(I,ne),t(_,le),f(e,B,u),f(e,h,u),t(h,ie),t(h,S),t(S,ce),t(h,ue),t(h,R),t(R,me),t(h,fe),f(e,D,u),xe($,e,u),F=!0},p:je,i(e){F||(Te(v.$$.fragment,e),Te($.$$.fragment,e),F=!0)},o(e){qe(v.$$.fragment,e),qe($.$$.fragment,e),F=!1},d(e){o(p),e&&o(z),e&&o(d),Pe(v),e&&o(G),e&&o(s),e&&o(H),e&&o(A),e&&o(j),e&&o(_),e&&o(B),e&&o(h),e&&o(D),Pe($,e)}}}const Ue={local:"use-a-custom-container-image",title:"Use a custom Container Image"};function Le(he){return Be(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ke extends Se{constructor(p){super();Re(this,p,Le,Ne,ze,{})}}export{Ke as default,Ue as metadata};
