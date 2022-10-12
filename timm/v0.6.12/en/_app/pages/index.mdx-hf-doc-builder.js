import{S as as,i as ns,s as rs,e as a,k as p,w as g,t as m,M as ls,c as n,d as t,m as h,a as l,x as $,h as c,b as o,G as s,g as i,y as w,q as _,o as y,B as b,v as os}from"../chunks/vendor-hf-doc-builder.js";import{T as is}from"../chunks/Tip-hf-doc-builder.js";import{I as pe}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as $e}from"../chunks/CodeBlock-hf-doc-builder.js";function ps(Ce){let d,A,u,k,L,x,C,N,J,S,v,P;return{c(){d=a("ul"),A=a("li"),u=a("p"),k=m("All development and testing has been done in Conda Python 3 environments on Linux x86-64 systems, specifically 3.7, 3.8, 3.9, 3.10"),L=p(),x=a("li"),C=a("p"),N=m("Little to no care has been taken to be Python 2.x friendly and will not support it. If you run into any challenges running on Windows, or other OS, I\u2019m definitely open to looking into those issues so long as it\u2019s in a reproducible (read Conda) environment."),J=p(),S=a("li"),v=a("p"),P=m("PyTorch versions 1.9, 1.10, 1.11 have been tested with the latest versions of this code.")},l(j){d=n(j,"UL",{});var f=l(d);A=n(f,"LI",{});var he=l(A);u=n(he,"P",{});var O=l(u);k=c(O,"All development and testing has been done in Conda Python 3 environments on Linux x86-64 systems, specifically 3.7, 3.8, 3.9, 3.10"),O.forEach(t),he.forEach(t),L=h(f),x=n(f,"LI",{});var me=l(x);C=n(me,"P",{});var z=l(C);N=c(z,"Little to no care has been taken to be Python 2.x friendly and will not support it. If you run into any challenges running on Windows, or other OS, I\u2019m definitely open to looking into those issues so long as it\u2019s in a reproducible (read Conda) environment."),z.forEach(t),me.forEach(t),J=h(f),S=n(f,"LI",{});var E=l(S);v=n(E,"P",{});var ce=l(v);P=c(ce,"PyTorch versions 1.9, 1.10, 1.11 have been tested with the latest versions of this code."),ce.forEach(t),E.forEach(t),f.forEach(t)},m(j,f){i(j,d,f),s(d,A),s(A,u),s(u,k),s(d,L),s(d,x),s(x,C),s(C,N),s(d,J),s(d,S),s(S,v),s(v,P)},d(j){j&&t(d)}}}function hs(Ce){let d,A,u,k,L,x,C,N,J,S,v,P,j,f,he,O,me,z,E,ce,we,at,nt,_e,rt,lt,Ne,I,ot,K,it,pt,Q,ht,mt,Te,T,q,ye,V,ct,be,dt,We,de,ft,Me,X,He,fe,ut,Ge,Y,Oe,W,D,xe,Z,vt,Ee,gt,qe,B,De,ue,$t,Be,ee,Fe,M,F,ke,te,wt,Pe,_t,Re,se,yt,je,bt,Ue,ae,Je,H,R,Ae,ne,xt,Se,Et,ze,re,Ke,G,U,Ie,le,kt,Le,Pt,Qe,oe,Ve;return x=new pe({}),f=new pe({}),V=new pe({}),X=new $e({props:{code:"pip install timm",highlighted:'pip <span class="hljs-keyword">install</span> timm'}}),Y=new $e({props:{code:"pip install git+https://github.com/rwightman/pytorch-image-models.git",highlighted:'pip install git+https:<span class="hljs-regexp">//gi</span>thub.com<span class="hljs-regexp">/rwightman/</span>pytorch-image-models.git'}}),Z=new pe({}),B=new is({props:{$$slots:{default:[ps]},$$scope:{ctx:Ce}}}),ee=new $e({props:{code:`conda create -n torch-env
conda activate torch-env
conda install pytorch torchvision cudatoolkit=11.3 -c pytorch
conda install pyyaml`,highlighted:`conda create -n torch-env
conda activate torch-env
conda install pytorch torchvision cudatoolkit=11.3 -c pytorch
conda install pyyaml`}}),te=new pe({}),ae=new $e({props:{code:`import timm

m = timm.create_model('mobilenetv3_large_100', pretrained=True)
m.eval()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> timm

<span class="hljs-meta">&gt;&gt;&gt; </span>m = timm.create_model(<span class="hljs-string">&#x27;mobilenetv3_large_100&#x27;</span>, pretrained=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>m.<span class="hljs-built_in">eval</span>()`}}),ne=new pe({}),re=new $e({props:{code:`import timm
from pprint import pprint
model_names = timm.list_models(pretrained=True)
pprint(model_names)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> timm
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pprint <span class="hljs-keyword">import</span> pprint
<span class="hljs-meta">&gt;&gt;&gt; </span>model_names = timm.list_models(pretrained=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pprint(model_names)
[
    <span class="hljs-string">&#x27;adv_inception_v3&#x27;</span>,
    <span class="hljs-string">&#x27;cspdarknet53&#x27;</span>,
    <span class="hljs-string">&#x27;cspresnext50&#x27;</span>,
    <span class="hljs-string">&#x27;densenet121&#x27;</span>,
    <span class="hljs-string">&#x27;densenet161&#x27;</span>,
    <span class="hljs-string">&#x27;densenet169&#x27;</span>,
    <span class="hljs-string">&#x27;densenet201&#x27;</span>,
    <span class="hljs-string">&#x27;densenetblur121d&#x27;</span>,
    <span class="hljs-string">&#x27;dla34&#x27;</span>,
    <span class="hljs-string">&#x27;dla46_c&#x27;</span>,
]`}}),le=new pe({}),oe=new $e({props:{code:`import timm
from pprint import pprint
model_names = timm.list_models('*resne*t*')
pprint(model_names)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> timm
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pprint <span class="hljs-keyword">import</span> pprint
<span class="hljs-meta">&gt;&gt;&gt; </span>model_names = timm.list_models(<span class="hljs-string">&#x27;*resne*t*&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pprint(model_names)
[
    <span class="hljs-string">&#x27;cspresnet50&#x27;</span>,
    <span class="hljs-string">&#x27;cspresnet50d&#x27;</span>,
    <span class="hljs-string">&#x27;cspresnet50w&#x27;</span>,
    <span class="hljs-string">&#x27;cspresnext50&#x27;</span>,
    ...
]`}}),{c(){d=a("meta"),A=p(),u=a("h1"),k=a("a"),L=a("span"),g(x.$$.fragment),C=p(),N=a("span"),J=m("Getting Started"),S=p(),v=a("h2"),P=a("a"),j=a("span"),g(f.$$.fragment),he=p(),O=a("span"),me=m("Welcome"),z=p(),E=a("p"),ce=m("Welcome to the "),we=a("code"),at=m("timm"),nt=m(" documentation, a lean set of docs that covers the basics of "),_e=a("code"),rt=m("timm"),lt=m("."),Ne=p(),I=a("p"),ot=m("For a more comprehensive set of docs (currently under development), please visit "),K=a("a"),it=m("timmdocs"),pt=m(" by "),Q=a("a"),ht=m("Aman Arora"),mt=m("."),Te=p(),T=a("h2"),q=a("a"),ye=a("span"),g(V.$$.fragment),ct=p(),be=a("span"),dt=m("Install"),We=p(),de=a("p"),ft=m("The library can be installed with pip:"),Me=p(),g(X.$$.fragment),He=p(),fe=a("p"),ut=m("I update the PyPi (pip) packages when I\u2019m confident there are no significant model regressions from previous releases. If you want to pip install the bleeding edge from GitHub, use:"),Ge=p(),g(Y.$$.fragment),Oe=p(),W=a("h3"),D=a("a"),xe=a("span"),g(Z.$$.fragment),vt=p(),Ee=a("span"),gt=m("Conda Environment"),qe=p(),g(B.$$.fragment),De=p(),ue=a("p"),$t=m("I\u2019ve tried to keep the dependencies minimal, the setup is as per the PyTorch default install instructions for Conda:"),Be=p(),g(ee.$$.fragment),Fe=p(),M=a("h2"),F=a("a"),ke=a("span"),g(te.$$.fragment),wt=p(),Pe=a("span"),_t=m("Load a Pretrained Model"),Re=p(),se=a("p"),yt=m("Pretrained models can be loaded using "),je=a("code"),bt=m("timm.create_model"),Ue=p(),g(ae.$$.fragment),Je=p(),H=a("h2"),R=a("a"),Ae=a("span"),g(ne.$$.fragment),xt=p(),Se=a("span"),Et=m("List Models with Pretrained Weights"),ze=p(),g(re.$$.fragment),Ke=p(),G=a("h2"),U=a("a"),Ie=a("span"),g(le.$$.fragment),kt=p(),Le=a("span"),Pt=m("List Model Architectures by Wildcard"),Qe=p(),g(oe.$$.fragment),this.h()},l(e){const r=ls('[data-svelte="svelte-1phssyn"]',document.head);d=n(r,"META",{name:!0,content:!0}),r.forEach(t),A=h(e),u=n(e,"H1",{class:!0});var ie=l(u);k=n(ie,"A",{id:!0,class:!0,href:!0});var At=l(k);L=n(At,"SPAN",{});var St=l(L);$(x.$$.fragment,St),St.forEach(t),At.forEach(t),C=h(ie),N=n(ie,"SPAN",{});var It=l(N);J=c(It,"Getting Started"),It.forEach(t),ie.forEach(t),S=h(e),v=n(e,"H2",{class:!0});var Xe=l(v);P=n(Xe,"A",{id:!0,class:!0,href:!0});var Lt=l(P);j=n(Lt,"SPAN",{});var Ct=l(j);$(f.$$.fragment,Ct),Ct.forEach(t),Lt.forEach(t),he=h(Xe),O=n(Xe,"SPAN",{});var Nt=l(O);me=c(Nt,"Welcome"),Nt.forEach(t),Xe.forEach(t),z=h(e),E=n(e,"P",{});var ve=l(E);ce=c(ve,"Welcome to the "),we=n(ve,"CODE",{});var Tt=l(we);at=c(Tt,"timm"),Tt.forEach(t),nt=c(ve," documentation, a lean set of docs that covers the basics of "),_e=n(ve,"CODE",{});var Wt=l(_e);rt=c(Wt,"timm"),Wt.forEach(t),lt=c(ve,"."),ve.forEach(t),Ne=h(e),I=n(e,"P",{});var ge=l(I);ot=c(ge,"For a more comprehensive set of docs (currently under development), please visit "),K=n(ge,"A",{href:!0,rel:!0});var Mt=l(K);it=c(Mt,"timmdocs"),Mt.forEach(t),pt=c(ge," by "),Q=n(ge,"A",{href:!0,rel:!0});var Ht=l(Q);ht=c(Ht,"Aman Arora"),Ht.forEach(t),mt=c(ge,"."),ge.forEach(t),Te=h(e),T=n(e,"H2",{class:!0});var Ye=l(T);q=n(Ye,"A",{id:!0,class:!0,href:!0});var Gt=l(q);ye=n(Gt,"SPAN",{});var Ot=l(ye);$(V.$$.fragment,Ot),Ot.forEach(t),Gt.forEach(t),ct=h(Ye),be=n(Ye,"SPAN",{});var qt=l(be);dt=c(qt,"Install"),qt.forEach(t),Ye.forEach(t),We=h(e),de=n(e,"P",{});var Dt=l(de);ft=c(Dt,"The library can be installed with pip:"),Dt.forEach(t),Me=h(e),$(X.$$.fragment,e),He=h(e),fe=n(e,"P",{});var Bt=l(fe);ut=c(Bt,"I update the PyPi (pip) packages when I\u2019m confident there are no significant model regressions from previous releases. If you want to pip install the bleeding edge from GitHub, use:"),Bt.forEach(t),Ge=h(e),$(Y.$$.fragment,e),Oe=h(e),W=n(e,"H3",{class:!0});var Ze=l(W);D=n(Ze,"A",{id:!0,class:!0,href:!0});var Ft=l(D);xe=n(Ft,"SPAN",{});var Rt=l(xe);$(Z.$$.fragment,Rt),Rt.forEach(t),Ft.forEach(t),vt=h(Ze),Ee=n(Ze,"SPAN",{});var Ut=l(Ee);gt=c(Ut,"Conda Environment"),Ut.forEach(t),Ze.forEach(t),qe=h(e),$(B.$$.fragment,e),De=h(e),ue=n(e,"P",{});var Jt=l(ue);$t=c(Jt,"I\u2019ve tried to keep the dependencies minimal, the setup is as per the PyTorch default install instructions for Conda:"),Jt.forEach(t),Be=h(e),$(ee.$$.fragment,e),Fe=h(e),M=n(e,"H2",{class:!0});var et=l(M);F=n(et,"A",{id:!0,class:!0,href:!0});var zt=l(F);ke=n(zt,"SPAN",{});var Kt=l(ke);$(te.$$.fragment,Kt),Kt.forEach(t),zt.forEach(t),wt=h(et),Pe=n(et,"SPAN",{});var Qt=l(Pe);_t=c(Qt,"Load a Pretrained Model"),Qt.forEach(t),et.forEach(t),Re=h(e),se=n(e,"P",{});var jt=l(se);yt=c(jt,"Pretrained models can be loaded using "),je=n(jt,"CODE",{});var Vt=l(je);bt=c(Vt,"timm.create_model"),Vt.forEach(t),jt.forEach(t),Ue=h(e),$(ae.$$.fragment,e),Je=h(e),H=n(e,"H2",{class:!0});var tt=l(H);R=n(tt,"A",{id:!0,class:!0,href:!0});var Xt=l(R);Ae=n(Xt,"SPAN",{});var Yt=l(Ae);$(ne.$$.fragment,Yt),Yt.forEach(t),Xt.forEach(t),xt=h(tt),Se=n(tt,"SPAN",{});var Zt=l(Se);Et=c(Zt,"List Models with Pretrained Weights"),Zt.forEach(t),tt.forEach(t),ze=h(e),$(re.$$.fragment,e),Ke=h(e),G=n(e,"H2",{class:!0});var st=l(G);U=n(st,"A",{id:!0,class:!0,href:!0});var es=l(U);Ie=n(es,"SPAN",{});var ts=l(Ie);$(le.$$.fragment,ts),ts.forEach(t),es.forEach(t),kt=h(st),Le=n(st,"SPAN",{});var ss=l(Le);Pt=c(ss,"List Model Architectures by Wildcard"),ss.forEach(t),st.forEach(t),Qe=h(e),$(oe.$$.fragment,e),this.h()},h(){o(d,"name","hf:doc:metadata"),o(d,"content",JSON.stringify(ms)),o(k,"id","getting-started"),o(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(k,"href","#getting-started"),o(u,"class","relative group"),o(P,"id","welcome"),o(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(P,"href","#welcome"),o(v,"class","relative group"),o(K,"href","http://timm.fast.ai"),o(K,"rel","nofollow"),o(Q,"href","https://github.com/amaarora"),o(Q,"rel","nofollow"),o(q,"id","install"),o(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(q,"href","#install"),o(T,"class","relative group"),o(D,"id","conda-environment"),o(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(D,"href","#conda-environment"),o(W,"class","relative group"),o(F,"id","load-a-pretrained-model"),o(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(F,"href","#load-a-pretrained-model"),o(M,"class","relative group"),o(R,"id","list-models-with-pretrained-weights"),o(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(R,"href","#list-models-with-pretrained-weights"),o(H,"class","relative group"),o(U,"id","list-model-architectures-by-wildcard"),o(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(U,"href","#list-model-architectures-by-wildcard"),o(G,"class","relative group")},m(e,r){s(document.head,d),i(e,A,r),i(e,u,r),s(u,k),s(k,L),w(x,L,null),s(u,C),s(u,N),s(N,J),i(e,S,r),i(e,v,r),s(v,P),s(P,j),w(f,j,null),s(v,he),s(v,O),s(O,me),i(e,z,r),i(e,E,r),s(E,ce),s(E,we),s(we,at),s(E,nt),s(E,_e),s(_e,rt),s(E,lt),i(e,Ne,r),i(e,I,r),s(I,ot),s(I,K),s(K,it),s(I,pt),s(I,Q),s(Q,ht),s(I,mt),i(e,Te,r),i(e,T,r),s(T,q),s(q,ye),w(V,ye,null),s(T,ct),s(T,be),s(be,dt),i(e,We,r),i(e,de,r),s(de,ft),i(e,Me,r),w(X,e,r),i(e,He,r),i(e,fe,r),s(fe,ut),i(e,Ge,r),w(Y,e,r),i(e,Oe,r),i(e,W,r),s(W,D),s(D,xe),w(Z,xe,null),s(W,vt),s(W,Ee),s(Ee,gt),i(e,qe,r),w(B,e,r),i(e,De,r),i(e,ue,r),s(ue,$t),i(e,Be,r),w(ee,e,r),i(e,Fe,r),i(e,M,r),s(M,F),s(F,ke),w(te,ke,null),s(M,wt),s(M,Pe),s(Pe,_t),i(e,Re,r),i(e,se,r),s(se,yt),s(se,je),s(je,bt),i(e,Ue,r),w(ae,e,r),i(e,Je,r),i(e,H,r),s(H,R),s(R,Ae),w(ne,Ae,null),s(H,xt),s(H,Se),s(Se,Et),i(e,ze,r),w(re,e,r),i(e,Ke,r),i(e,G,r),s(G,U),s(U,Ie),w(le,Ie,null),s(G,kt),s(G,Le),s(Le,Pt),i(e,Qe,r),w(oe,e,r),Ve=!0},p(e,[r]){const ie={};r&2&&(ie.$$scope={dirty:r,ctx:e}),B.$set(ie)},i(e){Ve||(_(x.$$.fragment,e),_(f.$$.fragment,e),_(V.$$.fragment,e),_(X.$$.fragment,e),_(Y.$$.fragment,e),_(Z.$$.fragment,e),_(B.$$.fragment,e),_(ee.$$.fragment,e),_(te.$$.fragment,e),_(ae.$$.fragment,e),_(ne.$$.fragment,e),_(re.$$.fragment,e),_(le.$$.fragment,e),_(oe.$$.fragment,e),Ve=!0)},o(e){y(x.$$.fragment,e),y(f.$$.fragment,e),y(V.$$.fragment,e),y(X.$$.fragment,e),y(Y.$$.fragment,e),y(Z.$$.fragment,e),y(B.$$.fragment,e),y(ee.$$.fragment,e),y(te.$$.fragment,e),y(ae.$$.fragment,e),y(ne.$$.fragment,e),y(re.$$.fragment,e),y(le.$$.fragment,e),y(oe.$$.fragment,e),Ve=!1},d(e){t(d),e&&t(A),e&&t(u),b(x),e&&t(S),e&&t(v),b(f),e&&t(z),e&&t(E),e&&t(Ne),e&&t(I),e&&t(Te),e&&t(T),b(V),e&&t(We),e&&t(de),e&&t(Me),b(X,e),e&&t(He),e&&t(fe),e&&t(Ge),b(Y,e),e&&t(Oe),e&&t(W),b(Z),e&&t(qe),b(B,e),e&&t(De),e&&t(ue),e&&t(Be),b(ee,e),e&&t(Fe),e&&t(M),b(te),e&&t(Re),e&&t(se),e&&t(Ue),b(ae,e),e&&t(Je),e&&t(H),b(ne),e&&t(ze),b(re,e),e&&t(Ke),e&&t(G),b(le),e&&t(Qe),b(oe,e)}}}const ms={local:"getting-started",sections:[{local:"welcome",title:"Welcome"},{local:"install",sections:[{local:"conda-environment",title:"Conda Environment"}],title:"Install"},{local:"load-a-pretrained-model",title:"Load a Pretrained Model"},{local:"list-models-with-pretrained-weights",title:"List Models with Pretrained Weights"},{local:"list-model-architectures-by-wildcard",title:"List Model Architectures by Wildcard"}],title:"Getting Started"};function cs(Ce){return os(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class gs extends as{constructor(d){super();ns(this,d,cs,hs,rs,{})}}export{gs as default,ms as metadata};
