import{S as $a,i as Pa,s as Aa,e as o,k as h,w as St,t as n,L as La,c as r,d as a,m as d,a as l,x as Gt,h as s,b as i,J as e,g as p,y as jt,K as Ca,q as Nt,o as Dt,B as Bt}from"../../../chunks/vendor-b1433968.js";import{I as ka}from"../../../chunks/IconCopyLink-7029626d.js";import{C as Ia}from"../../../chunks/CodeBlock-a320dbd7.js";import"../../../chunks/CopyButton-f65cb278.js";function Oa(De){let _,R,v,m,Q,A,Be,W,Ue,we,x,y,X,L,qe,Y,Fe,Ee,T,Re,C,Ve,He,be,V,Je,xe,I,ye,H,Ke,Te,c,Z,O,Me,S,ze,Qe,We,ee,te,Xe,Ye,ae,oe,Ze,et,re,le,tt,at,ne,g,ot,se,rt,lt,ie,nt,st,fe,it,ft,ke,k,pt,G,ht,dt,$e,J,ct,Pe,u,pe,he,j,ut,vt,de,ce,N,mt,gt,ue,ve,D,_t,wt,me,ge,B,Et,bt,_e,K,U,xt,yt,Ae,$,Tt,M,kt,$t,Le,w,Pt,q,At,Lt,F,Ct,It,Ce;return A=new ka({}),L=new ka({}),I=new Ia({props:{code:`from transformers import T5ForConditionalGeneration

model = T5ForConditionalGeneration.from_pretrained('google/t5-v1_1-base'),`,highlighted:`from transformers import T5ForConditionalGeneration

model = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">T5ForConditionalGeneration</span>.</span></span>from<span class="hljs-constructor">_pretrained(&#x27;<span class="hljs-params">google</span><span class="hljs-operator">/</span><span class="hljs-params">t5</span>-<span class="hljs-params">v1_1</span>-<span class="hljs-params">base</span>&#x27;)</span>`}}),{c(){_=o("meta"),R=h(),v=o("h1"),m=o("a"),Q=o("span"),St(A.$$.fragment),Be=h(),W=o("span"),Ue=n("T5v1.1"),we=h(),x=o("h2"),y=o("a"),X=o("span"),St(L.$$.fragment),qe=h(),Y=o("span"),Fe=n("Overview"),Ee=h(),T=o("p"),Re=n("T5v1.1 was released in the "),C=o("a"),Ve=n("google-research/text-to-text-transfer-transformer"),He=n(`
repository by Colin Raffel et al. It\u2019s an improved version of the original T5 model.`),be=h(),V=o("p"),Je=n("One can directly plug in the weights of T5v1.1 into a T5 model, like so:"),xe=h(),St(I.$$.fragment),ye=h(),H=o("p"),Ke=n("T5 Version 1.1 includes the following improvements compared to the original T5 model:"),Te=h(),c=o("ul"),Z=o("li"),O=o("p"),Me=n("GEGLU activation in the feed-forward hidden layer, rather than ReLU. See "),S=o("a"),ze=n("this paper"),Qe=n("."),We=h(),ee=o("li"),te=o("p"),Xe=n("Dropout was turned off in pre-training (quality win). Dropout should be re-enabled during fine-tuning."),Ye=h(),ae=o("li"),oe=o("p"),Ze=n("Pre-trained on C4 only without mixing in the downstream tasks."),et=h(),re=o("li"),le=o("p"),tt=n("No parameter sharing between the embedding and classifier layer."),at=h(),ne=o("li"),g=o("p"),ot=n("\u201Cxl\u201D and \u201Cxxl\u201D replace \u201C3B\u201D and \u201C11B\u201D. The model shapes are a bit different - larger "),se=o("code"),rt=n("d_model"),lt=n(` and smaller
`),ie=o("code"),nt=n("num_heads"),st=n(" and "),fe=o("code"),it=n("d_ff"),ft=n("."),ke=h(),k=o("p"),pt=n("Note: T5 Version 1.1 was only pre-trained on "),G=o("a"),ht=n("C4"),dt=n(` excluding any supervised
training. Therefore, this model has to be fine-tuned before it is useable on a downstream task, unlike the original T5
model. Since t5v1.1 was pre-trained unsupervisedly, there\u2019s no real advantage to using a task prefix during single-task
fine-tuning. If you are doing multi-task fine-tuning, you should use a prefix.`),$e=h(),J=o("p"),ct=n("Google has released the following variants:"),Pe=h(),u=o("ul"),pe=o("li"),he=o("p"),j=o("a"),ut=n("google/t5-v1_1-small"),vt=h(),de=o("li"),ce=o("p"),N=o("a"),mt=n("google/t5-v1_1-base"),gt=h(),ue=o("li"),ve=o("p"),D=o("a"),_t=n("google/t5-v1_1-large"),wt=h(),me=o("li"),ge=o("p"),B=o("a"),Et=n("google/t5-v1_1-xl"),bt=h(),_e=o("li"),K=o("p"),U=o("a"),xt=n("google/t5-v1_1-xxl"),yt=n("."),Ae=h(),$=o("p"),Tt=n("One can refer to "),M=o("a"),kt=n("T5\u2019s documentation page"),$t=n(" for all tips, code examples and notebooks."),Le=h(),w=o("p"),Pt=n("This model was contributed by "),q=o("a"),At=n("patrickvonplaten"),Lt=n(`. The original code can be
found `),F=o("a"),Ct=n("here"),It=n("."),this.h()},l(t){const f=La('[data-svelte="svelte-1phssyn"]',document.head);_=r(f,"META",{name:!0,content:!0}),f.forEach(a),R=d(t),v=r(t,"H1",{class:!0});var Ie=l(v);m=r(Ie,"A",{id:!0,class:!0,href:!0});var Ut=l(m);Q=r(Ut,"SPAN",{});var qt=l(Q);Gt(A.$$.fragment,qt),qt.forEach(a),Ut.forEach(a),Be=d(Ie),W=r(Ie,"SPAN",{});var Ft=l(W);Ue=s(Ft,"T5v1.1"),Ft.forEach(a),Ie.forEach(a),we=d(t),x=r(t,"H2",{class:!0});var Oe=l(x);y=r(Oe,"A",{id:!0,class:!0,href:!0});var Rt=l(y);X=r(Rt,"SPAN",{});var Vt=l(X);Gt(L.$$.fragment,Vt),Vt.forEach(a),Rt.forEach(a),qe=d(Oe),Y=r(Oe,"SPAN",{});var Ht=l(Y);Fe=s(Ht,"Overview"),Ht.forEach(a),Oe.forEach(a),Ee=d(t),T=r(t,"P",{});var Se=l(T);Re=s(Se,"T5v1.1 was released in the "),C=r(Se,"A",{href:!0,rel:!0});var Jt=l(C);Ve=s(Jt,"google-research/text-to-text-transfer-transformer"),Jt.forEach(a),He=s(Se,`
repository by Colin Raffel et al. It\u2019s an improved version of the original T5 model.`),Se.forEach(a),be=d(t),V=r(t,"P",{});var Kt=l(V);Je=s(Kt,"One can directly plug in the weights of T5v1.1 into a T5 model, like so:"),Kt.forEach(a),xe=d(t),Gt(I.$$.fragment,t),ye=d(t),H=r(t,"P",{});var Mt=l(H);Ke=s(Mt,"T5 Version 1.1 includes the following improvements compared to the original T5 model:"),Mt.forEach(a),Te=d(t),c=r(t,"UL",{});var E=l(c);Z=r(E,"LI",{});var zt=l(Z);O=r(zt,"P",{});var Ge=l(O);Me=s(Ge,"GEGLU activation in the feed-forward hidden layer, rather than ReLU. See "),S=r(Ge,"A",{href:!0,rel:!0});var Qt=l(S);ze=s(Qt,"this paper"),Qt.forEach(a),Qe=s(Ge,"."),Ge.forEach(a),zt.forEach(a),We=d(E),ee=r(E,"LI",{});var Wt=l(ee);te=r(Wt,"P",{});var Xt=l(te);Xe=s(Xt,"Dropout was turned off in pre-training (quality win). Dropout should be re-enabled during fine-tuning."),Xt.forEach(a),Wt.forEach(a),Ye=d(E),ae=r(E,"LI",{});var Yt=l(ae);oe=r(Yt,"P",{});var Zt=l(oe);Ze=s(Zt,"Pre-trained on C4 only without mixing in the downstream tasks."),Zt.forEach(a),Yt.forEach(a),et=d(E),re=r(E,"LI",{});var ea=l(re);le=r(ea,"P",{});var ta=l(le);tt=s(ta,"No parameter sharing between the embedding and classifier layer."),ta.forEach(a),ea.forEach(a),at=d(E),ne=r(E,"LI",{});var aa=l(ne);g=r(aa,"P",{});var P=l(g);ot=s(P,"\u201Cxl\u201D and \u201Cxxl\u201D replace \u201C3B\u201D and \u201C11B\u201D. The model shapes are a bit different - larger "),se=r(P,"CODE",{});var oa=l(se);rt=s(oa,"d_model"),oa.forEach(a),lt=s(P,` and smaller
`),ie=r(P,"CODE",{});var ra=l(ie);nt=s(ra,"num_heads"),ra.forEach(a),st=s(P," and "),fe=r(P,"CODE",{});var la=l(fe);it=s(la,"d_ff"),la.forEach(a),ft=s(P,"."),P.forEach(a),aa.forEach(a),E.forEach(a),ke=d(t),k=r(t,"P",{});var je=l(k);pt=s(je,"Note: T5 Version 1.1 was only pre-trained on "),G=r(je,"A",{href:!0,rel:!0});var na=l(G);ht=s(na,"C4"),na.forEach(a),dt=s(je,` excluding any supervised
training. Therefore, this model has to be fine-tuned before it is useable on a downstream task, unlike the original T5
model. Since t5v1.1 was pre-trained unsupervisedly, there\u2019s no real advantage to using a task prefix during single-task
fine-tuning. If you are doing multi-task fine-tuning, you should use a prefix.`),je.forEach(a),$e=d(t),J=r(t,"P",{});var sa=l(J);ct=s(sa,"Google has released the following variants:"),sa.forEach(a),Pe=d(t),u=r(t,"UL",{});var b=l(u);pe=r(b,"LI",{});var ia=l(pe);he=r(ia,"P",{});var fa=l(he);j=r(fa,"A",{href:!0,rel:!0});var pa=l(j);ut=s(pa,"google/t5-v1_1-small"),pa.forEach(a),fa.forEach(a),ia.forEach(a),vt=d(b),de=r(b,"LI",{});var ha=l(de);ce=r(ha,"P",{});var da=l(ce);N=r(da,"A",{href:!0,rel:!0});var ca=l(N);mt=s(ca,"google/t5-v1_1-base"),ca.forEach(a),da.forEach(a),ha.forEach(a),gt=d(b),ue=r(b,"LI",{});var ua=l(ue);ve=r(ua,"P",{});var va=l(ve);D=r(va,"A",{href:!0,rel:!0});var ma=l(D);_t=s(ma,"google/t5-v1_1-large"),ma.forEach(a),va.forEach(a),ua.forEach(a),wt=d(b),me=r(b,"LI",{});var ga=l(me);ge=r(ga,"P",{});var _a=l(ge);B=r(_a,"A",{href:!0,rel:!0});var wa=l(B);Et=s(wa,"google/t5-v1_1-xl"),wa.forEach(a),_a.forEach(a),ga.forEach(a),bt=d(b),_e=r(b,"LI",{});var Ea=l(_e);K=r(Ea,"P",{});var Ot=l(K);U=r(Ot,"A",{href:!0,rel:!0});var ba=l(U);xt=s(ba,"google/t5-v1_1-xxl"),ba.forEach(a),yt=s(Ot,"."),Ot.forEach(a),Ea.forEach(a),b.forEach(a),Ae=d(t),$=r(t,"P",{});var Ne=l($);Tt=s(Ne,"One can refer to "),M=r(Ne,"A",{href:!0});var xa=l(M);kt=s(xa,"T5\u2019s documentation page"),xa.forEach(a),$t=s(Ne," for all tips, code examples and notebooks."),Ne.forEach(a),Le=d(t),w=r(t,"P",{});var z=l(w);Pt=s(z,"This model was contributed by "),q=r(z,"A",{href:!0,rel:!0});var ya=l(q);At=s(ya,"patrickvonplaten"),ya.forEach(a),Lt=s(z,`. The original code can be
found `),F=r(z,"A",{href:!0,rel:!0});var Ta=l(F);Ct=s(Ta,"here"),Ta.forEach(a),It=s(z,"."),z.forEach(a),this.h()},h(){i(_,"name","hf:doc:metadata"),i(_,"content",JSON.stringify(Sa)),i(m,"id","t5v11"),i(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(m,"href","#t5v11"),i(v,"class","relative group"),i(y,"id","overview"),i(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(y,"href","#overview"),i(x,"class","relative group"),i(C,"href","https://github.com/google-research/text-to-text-transfer-transformer/blob/main/released_checkpoints.md#t511"),i(C,"rel","nofollow"),i(S,"href","https://arxiv.org/abs/2002.05202"),i(S,"rel","nofollow"),i(G,"href","https://huggingface.co/datasets/c4"),i(G,"rel","nofollow"),i(j,"href","https://huggingface.co/google/t5-v1_1-small"),i(j,"rel","nofollow"),i(N,"href","https://huggingface.co/google/t5-v1_1-base"),i(N,"rel","nofollow"),i(D,"href","https://huggingface.co/google/t5-v1_1-large"),i(D,"rel","nofollow"),i(B,"href","https://huggingface.co/google/t5-v1_1-xl"),i(B,"rel","nofollow"),i(U,"href","https://huggingface.co/google/t5-v1_1-xxl"),i(U,"rel","nofollow"),i(M,"href","/docs/transformers/v4.15.0/en/t5"),i(q,"href","https://huggingface.co/patrickvonplaten"),i(q,"rel","nofollow"),i(F,"href","https://github.com/google-research/text-to-text-transfer-transformer/blob/main/released_checkpoints.md#t511"),i(F,"rel","nofollow")},m(t,f){e(document.head,_),p(t,R,f),p(t,v,f),e(v,m),e(m,Q),jt(A,Q,null),e(v,Be),e(v,W),e(W,Ue),p(t,we,f),p(t,x,f),e(x,y),e(y,X),jt(L,X,null),e(x,qe),e(x,Y),e(Y,Fe),p(t,Ee,f),p(t,T,f),e(T,Re),e(T,C),e(C,Ve),e(T,He),p(t,be,f),p(t,V,f),e(V,Je),p(t,xe,f),jt(I,t,f),p(t,ye,f),p(t,H,f),e(H,Ke),p(t,Te,f),p(t,c,f),e(c,Z),e(Z,O),e(O,Me),e(O,S),e(S,ze),e(O,Qe),e(c,We),e(c,ee),e(ee,te),e(te,Xe),e(c,Ye),e(c,ae),e(ae,oe),e(oe,Ze),e(c,et),e(c,re),e(re,le),e(le,tt),e(c,at),e(c,ne),e(ne,g),e(g,ot),e(g,se),e(se,rt),e(g,lt),e(g,ie),e(ie,nt),e(g,st),e(g,fe),e(fe,it),e(g,ft),p(t,ke,f),p(t,k,f),e(k,pt),e(k,G),e(G,ht),e(k,dt),p(t,$e,f),p(t,J,f),e(J,ct),p(t,Pe,f),p(t,u,f),e(u,pe),e(pe,he),e(he,j),e(j,ut),e(u,vt),e(u,de),e(de,ce),e(ce,N),e(N,mt),e(u,gt),e(u,ue),e(ue,ve),e(ve,D),e(D,_t),e(u,wt),e(u,me),e(me,ge),e(ge,B),e(B,Et),e(u,bt),e(u,_e),e(_e,K),e(K,U),e(U,xt),e(K,yt),p(t,Ae,f),p(t,$,f),e($,Tt),e($,M),e(M,kt),e($,$t),p(t,Le,f),p(t,w,f),e(w,Pt),e(w,q),e(q,At),e(w,Lt),e(w,F),e(F,Ct),e(w,It),Ce=!0},p:Ca,i(t){Ce||(Nt(A.$$.fragment,t),Nt(L.$$.fragment,t),Nt(I.$$.fragment,t),Ce=!0)},o(t){Dt(A.$$.fragment,t),Dt(L.$$.fragment,t),Dt(I.$$.fragment,t),Ce=!1},d(t){a(_),t&&a(R),t&&a(v),Bt(A),t&&a(we),t&&a(x),Bt(L),t&&a(Ee),t&&a(T),t&&a(be),t&&a(V),t&&a(xe),Bt(I,t),t&&a(ye),t&&a(H),t&&a(Te),t&&a(c),t&&a(ke),t&&a(k),t&&a($e),t&&a(J),t&&a(Pe),t&&a(u),t&&a(Ae),t&&a($),t&&a(Le),t&&a(w)}}}const Sa={local:"t5v11",sections:[{local:"overview",title:"Overview"}],title:"T5v1.1"};function Ga(De,_,R){let{fw:v}=_;return De.$$set=m=>{"fw"in m&&R(0,v=m.fw)},[v]}class Ua extends $a{constructor(_){super();Pa(this,_,Ga,Oa,Aa,{fw:0})}}export{Ua as default,Sa as metadata};
