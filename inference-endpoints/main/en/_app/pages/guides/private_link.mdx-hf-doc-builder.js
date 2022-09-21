import{S as Pe,i as _e,s as Ee,e as o,k as l,w as Ae,t as p,M as be,c as a,d as t,m as c,a as u,x as ge,h as f,b as s,N as J,G as r,g as i,y as Ce,L as Se,q as Ie,o as ke,B as Ve,v as We}from"../../chunks/vendor-hf-doc-builder.js";import{I as Le}from"../../chunks/IconCopyLink-hf-doc-builder.js";function $e(oe){let d,L,h,m,V,w,O,W,j,$,v,z,A,K,Q,x,b,X,N,y,ae,M,g,Z,U,P,re,q,C,ee,G,S,te,R,_,se,T,I,ne,D,E,le,B,k,ie,H;return w=new Le({}),{c(){d=o("meta"),L=l(),h=o("h1"),m=o("a"),V=o("span"),Ae(w.$$.fragment),O=l(),W=o("span"),j=p("Create a Private Endpoint with AWS PrivateLink"),$=l(),v=o("p"),z=p("Security and secure inference are one of the key principles for Hugging Face Inference Endpoints. We are currently offering three different levels of security: "),A=o("a"),K=p("Public, Protected and Private"),Q=p("."),x=l(),b=o("p"),X=p("Public and Protected Endpoints do not require any additional configuration, but to be able to create a Private Endpoint for a secure intra-region connection you need to provide the AWS Account ID of the Account, which also should have access to the Inference Endpoints."),N=l(),y=o("img"),M=l(),g=o("p"),Z=p("After you provide your AWS Account ID and click create Endpoint the Inference Service will create the VPC Endpoint. After some time you should see a VPC Service Name on the overview."),U=l(),P=o("img"),q=l(),C=o("p"),ee=p("This VPC Service Name will be used to create the VPC Interface Endpoint in your (customer) Cloud account."),G=l(),S=o("p"),te=p("Below you will see an example of the VPC Endpoint configuration for our endpoint. You will need to select the VPC and subnets, as well as the security groups you want to use."),R=l(),_=o("img"),T=l(),I=o("p"),ne=p("At this point, your Inference Endpoint has been created successfully, and when it is up and running you can go to the corresponding AWS Account and add the VPC Endpoint for the Endpoint."),D=l(),E=o("img"),B=l(),k=o("p"),ie=p("After your VPC Endpoint changed its status from \u201CPending\u201D to \u201Cavailable\u201D you should see a URL in the UI. This URL can now be used inside your VPC to access your endpoint in a secure, protected way ensuring that the traffic is only between the two endpoints and will never leave AWS."),this.h()},l(e){const n=be('[data-svelte="svelte-1phssyn"]',document.head);d=a(n,"META",{name:!0,content:!0}),n.forEach(t),L=c(e),h=a(e,"H1",{class:!0});var F=u(h);m=a(F,"A",{id:!0,class:!0,href:!0});var ce=u(m);V=a(ce,"SPAN",{});var ue=u(V);ge(w.$$.fragment,ue),ue.forEach(t),ce.forEach(t),O=c(F),W=a(F,"SPAN",{});var pe=u(W);j=f(pe,"Create a Private Endpoint with AWS PrivateLink"),pe.forEach(t),F.forEach(t),$=c(e),v=a(e,"P",{});var Y=u(v);z=f(Y,"Security and secure inference are one of the key principles for Hugging Face Inference Endpoints. We are currently offering three different levels of security: "),A=a(Y,"A",{href:!0});var fe=u(A);K=f(fe,"Public, Protected and Private"),fe.forEach(t),Q=f(Y,"."),Y.forEach(t),x=c(e),b=a(e,"P",{});var de=u(b);X=f(de,"Public and Protected Endpoints do not require any additional configuration, but to be able to create a Private Endpoint for a secure intra-region connection you need to provide the AWS Account ID of the Account, which also should have access to the Inference Endpoints."),de.forEach(t),N=c(e),y=a(e,"IMG",{src:!0,alt:!0}),M=c(e),g=a(e,"P",{});var he=u(g);Z=f(he,"After you provide your AWS Account ID and click create Endpoint the Inference Service will create the VPC Endpoint. After some time you should see a VPC Service Name on the overview."),he.forEach(t),U=c(e),P=a(e,"IMG",{src:!0,alt:!0}),q=c(e),C=a(e,"P",{});var me=u(C);ee=f(me,"This VPC Service Name will be used to create the VPC Interface Endpoint in your (customer) Cloud account."),me.forEach(t),G=c(e),S=a(e,"P",{});var ve=u(S);te=f(ve,"Below you will see an example of the VPC Endpoint configuration for our endpoint. You will need to select the VPC and subnets, as well as the security groups you want to use."),ve.forEach(t),R=c(e),_=a(e,"IMG",{src:!0,alt:!0}),T=c(e),I=a(e,"P",{});var we=u(I);ne=f(we,"At this point, your Inference Endpoint has been created successfully, and when it is up and running you can go to the corresponding AWS Account and add the VPC Endpoint for the Endpoint."),we.forEach(t),D=c(e),E=a(e,"IMG",{src:!0,alt:!0}),B=c(e),k=a(e,"P",{});var ye=u(k);ie=f(ye,"After your VPC Endpoint changed its status from \u201CPending\u201D to \u201Cavailable\u201D you should see a URL in the UI. This URL can now be used inside your VPC to access your endpoint in a secure, protected way ensuring that the traffic is only between the two endpoints and will never leave AWS."),ye.forEach(t),this.h()},h(){s(d,"name","hf:doc:metadata"),s(d,"content",JSON.stringify(xe)),s(m,"id","create-a-private-endpoint-with-aws-privatelink"),s(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(m,"href","#create-a-private-endpoint-with-aws-privatelink"),s(h,"class","relative group"),s(A,"href","/docs/guides/secruity"),J(y.src,ae="https://raw.githubusercontent.com/huggingface/hf-endpoints-documentation/main/assets/6_private_type.png")||s(y,"src",ae),s(y,"alt","select private link"),J(P.src,re="https://raw.githubusercontent.com/huggingface/hf-endpoints-documentation/main/assets/6_service_name.png")||s(P,"src",re),s(P,"alt","service link"),J(_.src,se="https://raw.githubusercontent.com/huggingface/hf-endpoints-documentation/main/assets/6_aws.png")||s(_,"src",se),s(_,"alt","aws management console"),J(E.src,le="https://raw.githubusercontent.com/huggingface/hf-endpoints-documentation/main/assets/6_private_with_url.png")||s(E,"src",le),s(E,"alt","endpoint url")},m(e,n){r(document.head,d),i(e,L,n),i(e,h,n),r(h,m),r(m,V),Ce(w,V,null),r(h,O),r(h,W),r(W,j),i(e,$,n),i(e,v,n),r(v,z),r(v,A),r(A,K),r(v,Q),i(e,x,n),i(e,b,n),r(b,X),i(e,N,n),i(e,y,n),i(e,M,n),i(e,g,n),r(g,Z),i(e,U,n),i(e,P,n),i(e,q,n),i(e,C,n),r(C,ee),i(e,G,n),i(e,S,n),r(S,te),i(e,R,n),i(e,_,n),i(e,T,n),i(e,I,n),r(I,ne),i(e,D,n),i(e,E,n),i(e,B,n),i(e,k,n),r(k,ie),H=!0},p:Se,i(e){H||(Ie(w.$$.fragment,e),H=!0)},o(e){ke(w.$$.fragment,e),H=!1},d(e){t(d),e&&t(L),e&&t(h),Ve(w),e&&t($),e&&t(v),e&&t(x),e&&t(b),e&&t(N),e&&t(y),e&&t(M),e&&t(g),e&&t(U),e&&t(P),e&&t(q),e&&t(C),e&&t(G),e&&t(S),e&&t(R),e&&t(_),e&&t(T),e&&t(I),e&&t(D),e&&t(E),e&&t(B),e&&t(k)}}}const xe={local:"create-a-private-endpoint-with-aws-privatelink",title:"Create a Private Endpoint with AWS PrivateLink"};function Ne(oe){return We(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qe extends Pe{constructor(d){super();_e(this,d,Ne,$e,Ee,{})}}export{qe as default,xe as metadata};
