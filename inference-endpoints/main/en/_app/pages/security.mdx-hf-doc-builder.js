import{S as Ne,i as qe,s as xe,e as r,k as p,w as Ae,t as l,M as Oe,c as o,d as t,m as h,a,x as we,h as c,b as s,N as He,G as n,g as u,y as $e,L as We,q as Le,o as ke,B as Ie,v as Ce}from"../chunks/vendor-hf-doc-builder.js";import{I as Te}from"../chunks/IconCopyLink-hf-doc-builder.js";function Ge(fe){let d,W,v,y,I,g,U,T,j,C,_,K,b,Q,V,G,A,X,F,m,E,N,P,Y,q,Z,M,f,w,x,ee,te,ne,$,O,re,oe,ae,L,H,ie,se,R,S,pe,z;return g=new Te({}),P=new Te({}),{c(){d=r("meta"),W=p(),v=r("h1"),y=r("a"),I=r("span"),Ae(g.$$.fragment),U=p(),T=r("span"),j=l("Security & Compliance"),C=p(),_=r("p"),K=l("Security and secure inference are one of the key principles for Hugging Face Inference Endpoints. We are currently offering three different levels of security: "),b=r("a"),Q=l("Public, Protected and Private"),V=l("."),G=p(),A=r("p"),X=l("Public and Protected Endpoints do not require any additional configuration, but to be able to create a Private Endpoint for a secure intra-region connection you need to provide the AWS Account ID of the Account, which also should have access to the Inference Endpoints."),F=p(),m=r("h2"),E=r("a"),N=r("span"),Ae(P.$$.fragment),Y=p(),q=r("span"),Z=l("Endpoint Types"),M=p(),f=r("ol"),w=r("li"),x=r("strong"),ee=l("Public: "),te=l("A Public Endpoint is available from the internet, secured with TLS/SSL, and requires NO Authentication."),ne=p(),$=r("li"),O=r("strong"),re=l("Protected"),oe=l(": A Protected Endpoint is available from the internet, secured with TLS/SSL, and requires a valid Hugging Face Token for Authentication."),ae=p(),L=r("li"),H=r("strong"),ie=l("Private"),se=l(": A Private Endpoint is only available through an intra-region secured AWS or Azure PrivateLink connection. Private Endpoints are not accessible from the Internet."),R=p(),S=r("img"),this.h()},l(e){const i=Oe('[data-svelte="svelte-1phssyn"]',document.head);d=o(i,"META",{name:!0,content:!0}),i.forEach(t),W=h(e),v=o(e,"H1",{class:!0});var D=a(v);y=o(D,"A",{id:!0,class:!0,href:!0});var he=a(y);I=o(he,"SPAN",{});var de=a(I);we(g.$$.fragment,de),de.forEach(t),he.forEach(t),U=h(D),T=o(D,"SPAN",{});var ve=a(T);j=c(ve,"Security & Compliance"),ve.forEach(t),D.forEach(t),C=h(e),_=o(e,"P",{});var B=a(_);K=c(B,"Security and secure inference are one of the key principles for Hugging Face Inference Endpoints. We are currently offering three different levels of security: "),b=o(B,"A",{href:!0});var me=a(b);Q=c(me,"Public, Protected and Private"),me.forEach(t),V=c(B,"."),B.forEach(t),G=h(e),A=o(e,"P",{});var ye=a(A);X=c(ye,"Public and Protected Endpoints do not require any additional configuration, but to be able to create a Private Endpoint for a secure intra-region connection you need to provide the AWS Account ID of the Account, which also should have access to the Inference Endpoints."),ye.forEach(t),F=h(e),m=o(e,"H2",{class:!0});var J=a(m);E=o(J,"A",{id:!0,class:!0,href:!0});var _e=a(E);N=o(_e,"SPAN",{});var Ee=a(N);we(P.$$.fragment,Ee),Ee.forEach(t),_e.forEach(t),Y=h(J),q=o(J,"SPAN",{});var ge=a(q);Z=c(ge,"Endpoint Types"),ge.forEach(t),J.forEach(t),M=h(e),f=o(e,"OL",{});var k=a(f);w=o(k,"LI",{});var le=a(w);x=o(le,"STRONG",{});var Pe=a(x);ee=c(Pe,"Public: "),Pe.forEach(t),te=c(le,"A Public Endpoint is available from the internet, secured with TLS/SSL, and requires NO Authentication."),le.forEach(t),ne=h(k),$=o(k,"LI",{});var ce=a($);O=o(ce,"STRONG",{});var Se=a(O);re=c(Se,"Protected"),Se.forEach(t),oe=c(ce,": A Protected Endpoint is available from the internet, secured with TLS/SSL, and requires a valid Hugging Face Token for Authentication."),ce.forEach(t),ae=h(k),L=o(k,"LI",{});var ue=a(L);H=o(ue,"STRONG",{});var be=a(H);ie=c(be,"Private"),be.forEach(t),se=c(ue,": A Private Endpoint is only available through an intra-region secured AWS or Azure PrivateLink connection. Private Endpoints are not accessible from the Internet."),ue.forEach(t),k.forEach(t),R=h(e),S=o(e,"IMG",{src:!0,alt:!0}),this.h()},h(){s(d,"name","hf:doc:metadata"),s(d,"content",JSON.stringify(Fe)),s(y,"id","security-compliance"),s(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(y,"href","#security-compliance"),s(v,"class","relative group"),s(b,"href","/docs/inference-endpoints//guides/secruity"),s(E,"id","endpoint-types"),s(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(E,"href","#endpoint-types"),s(m,"class","relative group"),He(S.src,pe="https://raw.githubusercontent.com/huggingface/hf-endpoints-documentation/main/assets/endpoint_types.png")||s(S,"src",pe),s(S,"alt","endpoint types")},m(e,i){n(document.head,d),u(e,W,i),u(e,v,i),n(v,y),n(y,I),$e(g,I,null),n(v,U),n(v,T),n(T,j),u(e,C,i),u(e,_,i),n(_,K),n(_,b),n(b,Q),n(_,V),u(e,G,i),u(e,A,i),n(A,X),u(e,F,i),u(e,m,i),n(m,E),n(E,N),$e(P,N,null),n(m,Y),n(m,q),n(q,Z),u(e,M,i),u(e,f,i),n(f,w),n(w,x),n(x,ee),n(w,te),n(f,ne),n(f,$),n($,O),n(O,re),n($,oe),n(f,ae),n(f,L),n(L,H),n(H,ie),n(L,se),u(e,R,i),u(e,S,i),z=!0},p:We,i(e){z||(Le(g.$$.fragment,e),Le(P.$$.fragment,e),z=!0)},o(e){ke(g.$$.fragment,e),ke(P.$$.fragment,e),z=!1},d(e){t(d),e&&t(W),e&&t(v),Ie(g),e&&t(C),e&&t(_),e&&t(G),e&&t(A),e&&t(F),e&&t(m),Ie(P),e&&t(M),e&&t(f),e&&t(R),e&&t(S)}}}const Fe={local:"security-compliance",sections:[{local:"endpoint-types",title:"Endpoint Types"}],title:"Security & Compliance"};function Me(fe){return Ce(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class De extends Ne{constructor(d){super();qe(this,d,Me,Ge,xe,{})}}export{De as default,Fe as metadata};
