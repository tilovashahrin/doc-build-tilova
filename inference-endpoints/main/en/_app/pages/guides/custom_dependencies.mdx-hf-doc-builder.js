import{S as xe,i as be,s as qe,e as o,k as w,w as Ae,t as s,M as Pe,c as a,d as t,m as g,a as r,x as $e,h as i,b as d,G as n,g as c,y as ke,L as Ie,q as Se,o as He,B as Oe,v as Te}from"../../chunks/vendor-hf-doc-builder.js";import{I as Fe}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Ce(ie){let f,C,m,h,k,_,W,I,B,D,u,J,x,j,K,S,Q,V,L,p,X,H,v,Y,Z,O,ee,te,M,b,T,ne,N,q,F,E,oe,R,y,ae,A,re,se,z;return _=new Fe({}),{c(){f=o("meta"),C=w(),m=o("h1"),h=o("a"),k=o("span"),Ae(_.$$.fragment),W=w(),I=o("span"),B=s("Add custom Dependencies"),D=w(),u=o("p"),J=s("Hugging Face Endpoints\u2019 base image includes all required libraries to run inference on transformers models, but sometimes that can be too limited. For example, you want to "),x=o("a"),j=s("customize your inference pipeline"),K=s(" and need additional python dependencies or you want to run a model which requires special dependencies or the newest/a fixed version of a library, e.g. tapas (torch-scatter). Therefore Endpoints support "),S=o("strong"),Q=s("custom dependencies"),V=s("."),L=w(),p=o("p"),X=s("To add custom dependencies add a "),H=o("code"),v=o("a"),Y=s("requirements.txt"),Z=s(" file to your model repository on the Hugging Face Hub with the Python dependencies you want to install. When your Endpoint and Image artifacts are created, Inference Endpoints will check if the Model Repository contains a "),O=o("code"),ee=s("requirements.txt "),te=s("file and installs the dependencies."),M=w(),b=o("p"),T=o("strong"),ne=s("Examples:"),N=w(),q=o("ul"),F=o("li"),E=o("a"),oe=s("Optimum and onnxruntime"),R=w(),y=o("p"),ae=s("If you need further customization you can "),A=o("a"),re=s("use your own custom container"),se=s(" for inference."),this.h()},l(e){const l=Pe('[data-svelte="svelte-1phssyn"]',document.head);f=a(l,"META",{name:!0,content:!0}),l.forEach(t),C=g(e),m=a(e,"H1",{class:!0});var G=r(m);h=a(G,"A",{id:!0,class:!0,href:!0});var le=r(h);k=a(le,"SPAN",{});var de=r(k);$e(_.$$.fragment,de),de.forEach(t),le.forEach(t),W=g(G),I=a(G,"SPAN",{});var ce=r(I);B=i(ce,"Add custom Dependencies"),ce.forEach(t),G.forEach(t),D=g(e),u=a(e,"P",{});var P=r(u);J=i(P,"Hugging Face Endpoints\u2019 base image includes all required libraries to run inference on transformers models, but sometimes that can be too limited. For example, you want to "),x=a(P,"A",{href:!0});var ue=r(x);j=i(ue,"customize your inference pipeline"),ue.forEach(t),K=i(P," and need additional python dependencies or you want to run a model which requires special dependencies or the newest/a fixed version of a library, e.g. tapas (torch-scatter). Therefore Endpoints support "),S=a(P,"STRONG",{});var pe=r(S);Q=i(pe,"custom dependencies"),pe.forEach(t),V=i(P,"."),P.forEach(t),L=g(e),p=a(e,"P",{});var $=r(p);X=i($,"To add custom dependencies add a "),H=a($,"CODE",{});var fe=r(H);v=a(fe,"A",{href:!0,rel:!0});var me=r(v);Y=i(me,"requirements.txt"),me.forEach(t),fe.forEach(t),Z=i($," file to your model repository on the Hugging Face Hub with the Python dependencies you want to install. When your Endpoint and Image artifacts are created, Inference Endpoints will check if the Model Repository contains a "),O=a($,"CODE",{});var he=r(O);ee=i(he,"requirements.txt "),he.forEach(t),te=i($,"file and installs the dependencies."),$.forEach(t),M=g(e),b=a(e,"P",{});var ye=r(b);T=a(ye,"STRONG",{});var _e=r(T);ne=i(_e,"Examples:"),_e.forEach(t),ye.forEach(t),N=g(e),q=a(e,"UL",{});var ve=r(q);F=a(ve,"LI",{});var Ee=r(F);E=a(Ee,"A",{href:!0,rel:!0});var we=r(E);oe=i(we,"Optimum and onnxruntime"),we.forEach(t),Ee.forEach(t),ve.forEach(t),R=g(e),y=a(e,"P",{});var U=r(y);ae=i(U,"If you need further customization you can "),A=a(U,"A",{href:!0});var ge=r(A);re=i(ge,"use your own custom container"),ge.forEach(t),se=i(U," for inference."),U.forEach(t),this.h()},h(){d(f,"name","hf:doc:metadata"),d(f,"content",JSON.stringify(De)),d(h,"id","add-custom-dependencies"),d(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(h,"href","#add-custom-dependencies"),d(m,"class","relative group"),d(x,"href","/guides/custom_handler"),d(v,"href","https://huggingface.co/philschmid/distilbert-onnx-banking77/main/requirements.txt"),d(v,"rel","nofollow"),d(E,"href","https://huggingface.co/philschmid/distilbert-onnx-banking77/main/requirements.txt"),d(E,"rel","nofollow"),d(A,"href","/guides/custom_handler")},m(e,l){n(document.head,f),c(e,C,l),c(e,m,l),n(m,h),n(h,k),ke(_,k,null),n(m,W),n(m,I),n(I,B),c(e,D,l),c(e,u,l),n(u,J),n(u,x),n(x,j),n(u,K),n(u,S),n(S,Q),n(u,V),c(e,L,l),c(e,p,l),n(p,X),n(p,H),n(H,v),n(v,Y),n(p,Z),n(p,O),n(O,ee),n(p,te),c(e,M,l),c(e,b,l),n(b,T),n(T,ne),c(e,N,l),c(e,q,l),n(q,F),n(F,E),n(E,oe),c(e,R,l),c(e,y,l),n(y,ae),n(y,A),n(A,re),n(y,se),z=!0},p:Ie,i(e){z||(Se(_.$$.fragment,e),z=!0)},o(e){He(_.$$.fragment,e),z=!1},d(e){t(f),e&&t(C),e&&t(m),Oe(_),e&&t(D),e&&t(u),e&&t(L),e&&t(p),e&&t(M),e&&t(b),e&&t(N),e&&t(q),e&&t(R),e&&t(y)}}}const De={local:"add-custom-dependencies",title:"Add custom Dependencies"};function Le(ie){return Te(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Re extends xe{constructor(f){super();be(this,f,Le,Ce,qe,{})}}export{Re as default,De as metadata};
