import{S as Ht,i as Mt,s as Ft,e as s,k as h,w as Z,t as n,M as Lt,c as o,d as t,m as u,a as l,x as ee,h as r,b as c,G as a,g as p,y as te,L as Bt,q as ae,o as se,B as oe,v as Gt}from"../chunks/vendor-hf-doc-builder.js";import{I as mt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Ot}from"../chunks/CodeBlock-hf-doc-builder.js";function Rt(ft){let d,ne,b,y,H,A,Ie,M,Ne,le,g,qe,S,Pe,De,re,w,_,F,I,Se,L,Ce,ie,$,Oe,N,He,Me,pe,v,k,B,q,Fe,G,Le,he,E,Be,C,Ge,Re,ue,j,R,Ue,Je,U,Ke,ce,z,Qe,J,Ve,We,me,m,Xe,K,Ye,Ze,Q,et,tt,V,at,st,W,ot,nt,fe,x,lt,X,rt,it,de,T,pt,Y,ht,ut,be,P,we,O,ct,ve,D,ye;return A=new mt({}),I=new mt({}),q=new mt({}),P=new Ot({props:{code:`from datasets import Dataset
dataset = Dataset.from_dict({"a": [0, 1, 2]})
dataset.map(lambda batch: {"b": batch["a"] * 2}, batched=True)  # new column with 6 elements: [0, 1, 2, 0, 1, 2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> Dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = Dataset.from_dict({<span class="hljs-string">&quot;a&quot;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>]})
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.<span class="hljs-built_in">map</span>(<span class="hljs-keyword">lambda</span> batch: {<span class="hljs-string">&quot;b&quot;</span>: batch[<span class="hljs-string">&quot;a&quot;</span>] * <span class="hljs-number">2</span>}, batched=<span class="hljs-literal">True</span>)  <span class="hljs-comment"># new column with 6 elements: [0, 1, 2, 0, 1, 2]</span>
<span class="hljs-string">&#x27;ArrowInvalid: Column 1 named b expected length 3 but got length 6&#x27;</span>`}}),D=new Ot({props:{code:`from datasets import Dataset
dataset = Dataset.from_dict({"a": [0, 1, 2]})
dataset_with_duplicates = dataset.map(lambda batch: {"b": batch["a"] * 2}, remove_columns=["a"], batched=True)
len(dataset_with_duplicates)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> Dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = Dataset.from_dict({<span class="hljs-string">&quot;a&quot;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>]})
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_with_duplicates = dataset.<span class="hljs-built_in">map</span>(<span class="hljs-keyword">lambda</span> batch: {<span class="hljs-string">&quot;b&quot;</span>: batch[<span class="hljs-string">&quot;a&quot;</span>] * <span class="hljs-number">2</span>}, remove_columns=[<span class="hljs-string">&quot;a&quot;</span>], batched=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">len</span>(dataset_with_duplicates)
<span class="hljs-number">6</span>`}}),{c(){d=s("meta"),ne=h(),b=s("h1"),y=s("a"),H=s("span"),Z(A.$$.fragment),Ie=h(),M=s("span"),Ne=n("Batch mapping"),le=h(),g=s("p"),qe=n("Combining the utility of "),S=s("a"),Pe=n("Dataset.map()"),De=n(" with batch mode is very powerful. It allows you to speed up processing, and freely control the size of the generated dataset."),re=h(),w=s("h2"),_=s("a"),F=s("span"),Z(I.$$.fragment),Se=h(),L=s("span"),Ce=n("Need for speed"),ie=h(),$=s("p"),Oe=n("The primary objective of batch mapping is to speed up processing. Often times, it is faster to work with batches of data instead of single examples. Naturally, batch mapping lends itself to tokenization. For example, the \u{1F917} "),N=s("a"),He=n("Tokenizers"),Me=n(" library works faster with batches because it parallelizes the tokenization of all the examples in a batch."),pe=h(),v=s("h2"),k=s("a"),B=s("span"),Z(q.$$.fragment),Fe=h(),G=s("span"),Le=n("Input size != output size"),he=h(),E=s("p"),Be=n("The ability to control the size of the generated dataset can be leveraged for many interesting use-cases. In the How-to "),C=s("a"),Ge=n("map"),Re=n(" section, there are examples of using batch mapping to:"),ue=h(),j=s("ul"),R=s("li"),Ue=n("Split long sentences into shorter chunks."),Je=h(),U=s("li"),Ke=n("Augment a dataset with additional tokens."),ce=h(),z=s("p"),Qe=n("It is helpful to understand how this works, so you can come up with your own ways to use batch mapping. At this point, you may be wondering how you can control the size of the generated dataset. The answer is: "),J=s("strong"),Ve=n("the mapped function does not have to return an output batch of the same size"),We=n("."),me=h(),m=s("p"),Xe=n("In other words, your mapped function input can be a batch of size "),K=s("code"),Ye=n("N"),Ze=n(" and return a batch of size "),Q=s("code"),et=n("M"),tt=n(". The output "),V=s("code"),at=n("M"),st=n(" can be greater than or less than "),W=s("code"),ot=n("N"),nt=n(". This means you can concatenate your examples, divide it up, and even add more examples!"),fe=h(),x=s("p"),lt=n("However, remember that all values in the output dictionary must contain the "),X=s("strong"),rt=n("same number of elements"),it=n(" as the other fields in the output dictionary. Otherwise, it is not possible to define the number of examples in the output returned by the mapped function. The number can vary between successive batches processed by the mapped function. For a single batch though, all values of the output dictionary should have the same length (i.e., the number of elements)."),de=h(),T=s("p"),pt=n("For example, from a dataset of 1 column and 3 rows, if you use "),Y=s("code"),ht=n("map"),ut=n(` to return a new column with twice as many rows, then you will have an error.
In this case, you end up with one column with 3 rows, and one column with 6 rows. As you can see, the table will not be valid:`),be=h(),Z(P.$$.fragment),we=h(),O=s("p"),ct=n("To make it valid, you have to drop one of the columns:"),ve=h(),Z(D.$$.fragment),this.h()},l(e){const i=Lt('[data-svelte="svelte-1phssyn"]',document.head);d=o(i,"META",{name:!0,content:!0}),i.forEach(t),ne=u(e),b=o(e,"H1",{class:!0});var ge=l(b);y=o(ge,"A",{id:!0,class:!0,href:!0});var dt=l(y);H=o(dt,"SPAN",{});var bt=l(H);ee(A.$$.fragment,bt),bt.forEach(t),dt.forEach(t),Ie=u(ge),M=o(ge,"SPAN",{});var wt=l(M);Ne=r(wt,"Batch mapping"),wt.forEach(t),ge.forEach(t),le=u(e),g=o(e,"P",{});var _e=l(g);qe=r(_e,"Combining the utility of "),S=o(_e,"A",{href:!0});var vt=l(S);Pe=r(vt,"Dataset.map()"),vt.forEach(t),De=r(_e," with batch mode is very powerful. It allows you to speed up processing, and freely control the size of the generated dataset."),_e.forEach(t),re=u(e),w=o(e,"H2",{class:!0});var $e=l(w);_=o($e,"A",{id:!0,class:!0,href:!0});var yt=l(_);F=o(yt,"SPAN",{});var gt=l(F);ee(I.$$.fragment,gt),gt.forEach(t),yt.forEach(t),Se=u($e),L=o($e,"SPAN",{});var _t=l(L);Ce=r(_t,"Need for speed"),_t.forEach(t),$e.forEach(t),ie=u(e),$=o(e,"P",{});var ke=l($);Oe=r(ke,"The primary objective of batch mapping is to speed up processing. Often times, it is faster to work with batches of data instead of single examples. Naturally, batch mapping lends itself to tokenization. For example, the \u{1F917} "),N=o(ke,"A",{href:!0,rel:!0});var $t=l(N);He=r($t,"Tokenizers"),$t.forEach(t),Me=r(ke," library works faster with batches because it parallelizes the tokenization of all the examples in a batch."),ke.forEach(t),pe=u(e),v=o(e,"H2",{class:!0});var Ee=l(v);k=o(Ee,"A",{id:!0,class:!0,href:!0});var kt=l(k);B=o(kt,"SPAN",{});var Et=l(B);ee(q.$$.fragment,Et),Et.forEach(t),kt.forEach(t),Fe=u(Ee),G=o(Ee,"SPAN",{});var jt=l(G);Le=r(jt,"Input size != output size"),jt.forEach(t),Ee.forEach(t),he=u(e),E=o(e,"P",{});var je=l(E);Be=r(je,"The ability to control the size of the generated dataset can be leveraged for many interesting use-cases. In the How-to "),C=o(je,"A",{href:!0});var zt=l(C);Ge=r(zt,"map"),zt.forEach(t),Re=r(je," section, there are examples of using batch mapping to:"),je.forEach(t),ue=u(e),j=o(e,"UL",{});var ze=l(j);R=o(ze,"LI",{});var xt=l(R);Ue=r(xt,"Split long sentences into shorter chunks."),xt.forEach(t),Je=u(ze),U=o(ze,"LI",{});var Tt=l(U);Ke=r(Tt,"Augment a dataset with additional tokens."),Tt.forEach(t),ze.forEach(t),ce=u(e),z=o(e,"P",{});var xe=l(z);Qe=r(xe,"It is helpful to understand how this works, so you can come up with your own ways to use batch mapping. At this point, you may be wondering how you can control the size of the generated dataset. The answer is: "),J=o(xe,"STRONG",{});var At=l(J);Ve=r(At,"the mapped function does not have to return an output batch of the same size"),At.forEach(t),We=r(xe,"."),xe.forEach(t),me=u(e),m=o(e,"P",{});var f=l(m);Xe=r(f,"In other words, your mapped function input can be a batch of size "),K=o(f,"CODE",{});var It=l(K);Ye=r(It,"N"),It.forEach(t),Ze=r(f," and return a batch of size "),Q=o(f,"CODE",{});var Nt=l(Q);et=r(Nt,"M"),Nt.forEach(t),tt=r(f,". The output "),V=o(f,"CODE",{});var qt=l(V);at=r(qt,"M"),qt.forEach(t),st=r(f," can be greater than or less than "),W=o(f,"CODE",{});var Pt=l(W);ot=r(Pt,"N"),Pt.forEach(t),nt=r(f,". This means you can concatenate your examples, divide it up, and even add more examples!"),f.forEach(t),fe=u(e),x=o(e,"P",{});var Te=l(x);lt=r(Te,"However, remember that all values in the output dictionary must contain the "),X=o(Te,"STRONG",{});var Dt=l(X);rt=r(Dt,"same number of elements"),Dt.forEach(t),it=r(Te," as the other fields in the output dictionary. Otherwise, it is not possible to define the number of examples in the output returned by the mapped function. The number can vary between successive batches processed by the mapped function. For a single batch though, all values of the output dictionary should have the same length (i.e., the number of elements)."),Te.forEach(t),de=u(e),T=o(e,"P",{});var Ae=l(T);pt=r(Ae,"For example, from a dataset of 1 column and 3 rows, if you use "),Y=o(Ae,"CODE",{});var St=l(Y);ht=r(St,"map"),St.forEach(t),ut=r(Ae,` to return a new column with twice as many rows, then you will have an error.
In this case, you end up with one column with 3 rows, and one column with 6 rows. As you can see, the table will not be valid:`),Ae.forEach(t),be=u(e),ee(P.$$.fragment,e),we=u(e),O=o(e,"P",{});var Ct=l(O);ct=r(Ct,"To make it valid, you have to drop one of the columns:"),Ct.forEach(t),ve=u(e),ee(D.$$.fragment,e),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Ut)),c(y,"id","batch-mapping"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#batch-mapping"),c(b,"class","relative group"),c(S,"href","/docs/datasets/v2.3.0/en/package_reference/main_classes#datasets.Dataset.map"),c(_,"id","need-for-speed"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#need-for-speed"),c(w,"class","relative group"),c(N,"href","https://huggingface.co/docs/tokenizers/python/latest/"),c(N,"rel","nofollow"),c(k,"id","input-size-output-size"),c(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(k,"href","#input-size-output-size"),c(v,"class","relative group"),c(C,"href","#map")},m(e,i){a(document.head,d),p(e,ne,i),p(e,b,i),a(b,y),a(y,H),te(A,H,null),a(b,Ie),a(b,M),a(M,Ne),p(e,le,i),p(e,g,i),a(g,qe),a(g,S),a(S,Pe),a(g,De),p(e,re,i),p(e,w,i),a(w,_),a(_,F),te(I,F,null),a(w,Se),a(w,L),a(L,Ce),p(e,ie,i),p(e,$,i),a($,Oe),a($,N),a(N,He),a($,Me),p(e,pe,i),p(e,v,i),a(v,k),a(k,B),te(q,B,null),a(v,Fe),a(v,G),a(G,Le),p(e,he,i),p(e,E,i),a(E,Be),a(E,C),a(C,Ge),a(E,Re),p(e,ue,i),p(e,j,i),a(j,R),a(R,Ue),a(j,Je),a(j,U),a(U,Ke),p(e,ce,i),p(e,z,i),a(z,Qe),a(z,J),a(J,Ve),a(z,We),p(e,me,i),p(e,m,i),a(m,Xe),a(m,K),a(K,Ye),a(m,Ze),a(m,Q),a(Q,et),a(m,tt),a(m,V),a(V,at),a(m,st),a(m,W),a(W,ot),a(m,nt),p(e,fe,i),p(e,x,i),a(x,lt),a(x,X),a(X,rt),a(x,it),p(e,de,i),p(e,T,i),a(T,pt),a(T,Y),a(Y,ht),a(T,ut),p(e,be,i),te(P,e,i),p(e,we,i),p(e,O,i),a(O,ct),p(e,ve,i),te(D,e,i),ye=!0},p:Bt,i(e){ye||(ae(A.$$.fragment,e),ae(I.$$.fragment,e),ae(q.$$.fragment,e),ae(P.$$.fragment,e),ae(D.$$.fragment,e),ye=!0)},o(e){se(A.$$.fragment,e),se(I.$$.fragment,e),se(q.$$.fragment,e),se(P.$$.fragment,e),se(D.$$.fragment,e),ye=!1},d(e){t(d),e&&t(ne),e&&t(b),oe(A),e&&t(le),e&&t(g),e&&t(re),e&&t(w),oe(I),e&&t(ie),e&&t($),e&&t(pe),e&&t(v),oe(q),e&&t(he),e&&t(E),e&&t(ue),e&&t(j),e&&t(ce),e&&t(z),e&&t(me),e&&t(m),e&&t(fe),e&&t(x),e&&t(de),e&&t(T),e&&t(be),oe(P,e),e&&t(we),e&&t(O),e&&t(ve),oe(D,e)}}}const Ut={local:"batch-mapping",sections:[{local:"need-for-speed",title:"Need for speed"},{local:"input-size-output-size",title:"Input size != output size"}],title:"Batch mapping"};function Jt(ft){return Gt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Wt extends Ht{constructor(d){super();Mt(this,d,Jt,Rt,Ft,{})}}export{Wt as default,Ut as metadata};
