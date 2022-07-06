import{S as Ee,i as qe,s as Ae,e as o,k as h,w as f,t as i,M as Pe,c as l,d as e,m as c,a as r,x as g,h as p,b as m,G as s,g as n,y as x,L as Se,q as w,o as v,B as $,v as De}from"../chunks/vendor-hf-doc-builder.js";import{I as oe}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as H}from"../chunks/CodeBlock-hf-doc-builder.js";function Te(le){let b,lt,j,k,V,D,Dt,X,Tt,rt,d,It,K,Nt,Ct,L,Gt,zt,it,E,Bt,T,Ft,Mt,pt,I,ht,y,q,Z,N,Yt,tt,Ht,ct,u,Kt,O,Lt,Ot,et,Ut,Wt,mt,C,dt,A,Jt,st,Rt,Qt,ut,G,ft,U,Vt,gt,z,xt,W,Xt,wt,B,vt,J,Zt,$t,F,bt,_,P,at,M,te,nt,ee,jt,S,se,ot,ae,ne,yt,Y,_t;return D=new oe({}),I=new H({props:{code:`from datasets import load_dataset

dataset = load_dataset("rotten_tomatoes", split="train")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;rotten_tomatoes&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)`}}),N=new oe({}),C=new H({props:{code:"dataset[0]",highlighted:`<span class="hljs-comment"># Get the first row in the dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">1</span>,
 <span class="hljs-string">&#x27;text&#x27;</span>: <span class="hljs-string">&#x27;the rock is destined to be the 21st century\\&#x27;s new &quot; conan &quot; and that he\\&#x27;s going to make a splash even greater than arnold schwarzenegger , jean-claud van damme or steven segal .&#x27;</span>}`}}),G=new H({props:{code:"dataset[-1]",highlighted:`<span class="hljs-comment"># Get the last row in the dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[-<span class="hljs-number">1</span>]
{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">0</span>,
 <span class="hljs-string">&#x27;text&#x27;</span>: <span class="hljs-string">&#x27;things really get weird , though not particularly scary : the movie is all portent and no content .&#x27;</span>}`}}),z=new H({props:{code:'dataset["text"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-string">&quot;text&quot;</span>]
[<span class="hljs-string">&#x27;the rock is destined to be the 21st century\\&#x27;s new &quot; conan &quot; and that he\\&#x27;s going to make a splash even greater than arnold schwarzenegger , jean-claud van damme or steven segal .&#x27;</span>,
 <span class="hljs-string">&#x27;the gorgeously elaborate continuation of &quot; the lord of the rings &quot; trilogy is so huge that a column of words cannot adequately describe co-writer/director peter jackson\\&#x27;s expanded vision of j . r . r . tolkien\\&#x27;s middle-earth .&#x27;</span>,
 <span class="hljs-string">&#x27;effective but too-tepid biopic&#x27;</span>,
 ...,
 <span class="hljs-string">&#x27;things really get weird , though not particularly scary : the movie is all portent and no content .&#x27;</span>]`}}),B=new H({props:{code:'dataset[0]["text"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>]
<span class="hljs-string">&#x27;the rock is destined to be the 21st century\\&#x27;s new &quot; conan &quot; and that he\\&#x27;s going to make a splash even greater than arnold schwarzenegger , jean-claud van damme or steven segal .&#x27;</span>`}}),F=new H({props:{code:`with Timer():
   dataset[0]['text']

with Timer():
  dataset["text"][0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> Timer():
<span class="hljs-meta">... </span>   dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&#x27;text&#x27;</span>]
Elapsed time: <span class="hljs-number">0.0031</span> seconds

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> Timer():
<span class="hljs-meta">... </span>  dataset[<span class="hljs-string">&quot;text&quot;</span>][<span class="hljs-number">0</span>]
Elapsed time: <span class="hljs-number">0.0094</span> seconds`}}),M=new oe({}),Y=new H({props:{code:`dataset[:3]

dataset[3:6]`,highlighted:`<span class="hljs-comment"># Get the first three rows</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[:<span class="hljs-number">3</span>]
{<span class="hljs-string">&#x27;label&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
 <span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;the rock is destined to be the 21st century\\&#x27;s new &quot; conan &quot; and that he\\&#x27;s going to make a splash even greater than arnold schwarzenegger , jean-claud van damme or steven segal .&#x27;</span>,
  <span class="hljs-string">&#x27;the gorgeously elaborate continuation of &quot; the lord of the rings &quot; trilogy is so huge that a column of words cannot adequately describe co-writer/director peter jackson\\&#x27;s expanded vision of j . r . r . tolkien\\&#x27;s middle-earth .&#x27;</span>,
  <span class="hljs-string">&#x27;effective but too-tepid biopic&#x27;</span>]}

<span class="hljs-comment"># Get rows between three and six</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">3</span>:<span class="hljs-number">6</span>]
{<span class="hljs-string">&#x27;label&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
 <span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;if you sometimes like to go to the movies to have fun , wasabi is a good place to start .&#x27;</span>,
  <span class="hljs-string">&quot;emerges as something rare , an issue movie that&#x27;s so honest and keenly observed that it doesn&#x27;t feel like one .&quot;</span>,
  <span class="hljs-string">&#x27;the film provides some great insight into the neurotic mindset of all comics -- even those who have reached the absolute top of the game .&#x27;</span>]}`}}),{c(){b=o("meta"),lt=h(),j=o("h1"),k=o("a"),V=o("span"),f(D.$$.fragment),Dt=h(),X=o("span"),Tt=i("Know your dataset"),rt=h(),d=o("p"),It=i("When you load a dataset split, you\u2019ll get a "),K=o("a"),Nt=i("Dataset"),Ct=i(" object. You can do many things with a "),L=o("a"),Gt=i("Dataset"),zt=i(" object, which is why it\u2019s important to learn how to manipulate and interact with the data stored inside."),it=h(),E=o("p"),Bt=i("This tutorial uses the "),T=o("a"),Ft=i("rotten_tomatoes"),Mt=i(" dataset, but feel free to load any dataset you\u2019d like and follow along!"),pt=h(),f(I.$$.fragment),ht=h(),y=o("h2"),q=o("a"),Z=o("span"),f(N.$$.fragment),Yt=h(),tt=o("span"),Ht=i("Indexing"),ct=h(),u=o("p"),Kt=i("A "),O=o("a"),Lt=i("Dataset"),Ot=i(" contains columns of data, and each column can be a different type of data. The "),et=o("em"),Ut=i("index"),Wt=i(", or axis label, is used to access examples from the dataset. For example, indexing by the row returns a dictionary of an example from the dataset:"),mt=h(),f(C.$$.fragment),dt=h(),A=o("p"),Jt=i("Use the "),st=o("code"),Rt=i("-"),Qt=i(" operator to start from the end of the dataset:"),ut=h(),f(G.$$.fragment),ft=h(),U=o("p"),Vt=i("Indexing by the column name returns a list of all the values in the column:"),gt=h(),f(z.$$.fragment),xt=h(),W=o("p"),Xt=i("You can combine row and column name indexing to return a specific value at a position:"),wt=h(),f(B.$$.fragment),vt=h(),J=o("p"),Zt=i("But it is important to remember that indexing order matters, especially when working with large audio and image datasets. Indexing by the column name returns all the values in the column first, then loads the value at that position. For large datasets, it may be slower to index by the column name first."),$t=h(),f(F.$$.fragment),bt=h(),_=o("h2"),P=o("a"),at=o("span"),f(M.$$.fragment),te=h(),nt=o("span"),ee=i("Slicing"),jt=h(),S=o("p"),se=i("Slicing returns a slice - or subset - of the dataset, which is useful for viewing several rows at once. To slice a dataset, use the "),ot=o("code"),ae=i(":"),ne=i(" operator to specify a range of positions."),yt=h(),f(Y.$$.fragment),this.h()},l(t){const a=Pe('[data-svelte="svelte-1phssyn"]',document.head);b=l(a,"META",{name:!0,content:!0}),a.forEach(e),lt=c(t),j=l(t,"H1",{class:!0});var kt=r(j);k=l(kt,"A",{id:!0,class:!0,href:!0});var re=r(k);V=l(re,"SPAN",{});var ie=r(V);g(D.$$.fragment,ie),ie.forEach(e),re.forEach(e),Dt=c(kt),X=l(kt,"SPAN",{});var pe=r(X);Tt=p(pe,"Know your dataset"),pe.forEach(e),kt.forEach(e),rt=c(t),d=l(t,"P",{});var R=r(d);It=p(R,"When you load a dataset split, you\u2019ll get a "),K=l(R,"A",{href:!0});var he=r(K);Nt=p(he,"Dataset"),he.forEach(e),Ct=p(R," object. You can do many things with a "),L=l(R,"A",{href:!0});var ce=r(L);Gt=p(ce,"Dataset"),ce.forEach(e),zt=p(R," object, which is why it\u2019s important to learn how to manipulate and interact with the data stored inside."),R.forEach(e),it=c(t),E=l(t,"P",{});var Et=r(E);Bt=p(Et,"This tutorial uses the "),T=l(Et,"A",{href:!0,rel:!0});var me=r(T);Ft=p(me,"rotten_tomatoes"),me.forEach(e),Mt=p(Et," dataset, but feel free to load any dataset you\u2019d like and follow along!"),Et.forEach(e),pt=c(t),g(I.$$.fragment,t),ht=c(t),y=l(t,"H2",{class:!0});var qt=r(y);q=l(qt,"A",{id:!0,class:!0,href:!0});var de=r(q);Z=l(de,"SPAN",{});var ue=r(Z);g(N.$$.fragment,ue),ue.forEach(e),de.forEach(e),Yt=c(qt),tt=l(qt,"SPAN",{});var fe=r(tt);Ht=p(fe,"Indexing"),fe.forEach(e),qt.forEach(e),ct=c(t),u=l(t,"P",{});var Q=r(u);Kt=p(Q,"A "),O=l(Q,"A",{href:!0});var ge=r(O);Lt=p(ge,"Dataset"),ge.forEach(e),Ot=p(Q," contains columns of data, and each column can be a different type of data. The "),et=l(Q,"EM",{});var xe=r(et);Ut=p(xe,"index"),xe.forEach(e),Wt=p(Q,", or axis label, is used to access examples from the dataset. For example, indexing by the row returns a dictionary of an example from the dataset:"),Q.forEach(e),mt=c(t),g(C.$$.fragment,t),dt=c(t),A=l(t,"P",{});var At=r(A);Jt=p(At,"Use the "),st=l(At,"CODE",{});var we=r(st);Rt=p(we,"-"),we.forEach(e),Qt=p(At," operator to start from the end of the dataset:"),At.forEach(e),ut=c(t),g(G.$$.fragment,t),ft=c(t),U=l(t,"P",{});var ve=r(U);Vt=p(ve,"Indexing by the column name returns a list of all the values in the column:"),ve.forEach(e),gt=c(t),g(z.$$.fragment,t),xt=c(t),W=l(t,"P",{});var $e=r(W);Xt=p($e,"You can combine row and column name indexing to return a specific value at a position:"),$e.forEach(e),wt=c(t),g(B.$$.fragment,t),vt=c(t),J=l(t,"P",{});var be=r(J);Zt=p(be,"But it is important to remember that indexing order matters, especially when working with large audio and image datasets. Indexing by the column name returns all the values in the column first, then loads the value at that position. For large datasets, it may be slower to index by the column name first."),be.forEach(e),$t=c(t),g(F.$$.fragment,t),bt=c(t),_=l(t,"H2",{class:!0});var Pt=r(_);P=l(Pt,"A",{id:!0,class:!0,href:!0});var je=r(P);at=l(je,"SPAN",{});var ye=r(at);g(M.$$.fragment,ye),ye.forEach(e),je.forEach(e),te=c(Pt),nt=l(Pt,"SPAN",{});var _e=r(nt);ee=p(_e,"Slicing"),_e.forEach(e),Pt.forEach(e),jt=c(t),S=l(t,"P",{});var St=r(S);se=p(St,"Slicing returns a slice - or subset - of the dataset, which is useful for viewing several rows at once. To slice a dataset, use the "),ot=l(St,"CODE",{});var ke=r(ot);ae=p(ke,":"),ke.forEach(e),ne=p(St," operator to specify a range of positions."),St.forEach(e),yt=c(t),g(Y.$$.fragment,t),this.h()},h(){m(b,"name","hf:doc:metadata"),m(b,"content",JSON.stringify(Ie)),m(k,"id","know-your-dataset"),m(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(k,"href","#know-your-dataset"),m(j,"class","relative group"),m(K,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Dataset"),m(L,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Dataset"),m(T,"href","https://huggingface.co/datasets/rotten_tomatoes"),m(T,"rel","nofollow"),m(q,"id","indexing"),m(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(q,"href","#indexing"),m(y,"class","relative group"),m(O,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Dataset"),m(P,"id","slicing"),m(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(P,"href","#slicing"),m(_,"class","relative group")},m(t,a){s(document.head,b),n(t,lt,a),n(t,j,a),s(j,k),s(k,V),x(D,V,null),s(j,Dt),s(j,X),s(X,Tt),n(t,rt,a),n(t,d,a),s(d,It),s(d,K),s(K,Nt),s(d,Ct),s(d,L),s(L,Gt),s(d,zt),n(t,it,a),n(t,E,a),s(E,Bt),s(E,T),s(T,Ft),s(E,Mt),n(t,pt,a),x(I,t,a),n(t,ht,a),n(t,y,a),s(y,q),s(q,Z),x(N,Z,null),s(y,Yt),s(y,tt),s(tt,Ht),n(t,ct,a),n(t,u,a),s(u,Kt),s(u,O),s(O,Lt),s(u,Ot),s(u,et),s(et,Ut),s(u,Wt),n(t,mt,a),x(C,t,a),n(t,dt,a),n(t,A,a),s(A,Jt),s(A,st),s(st,Rt),s(A,Qt),n(t,ut,a),x(G,t,a),n(t,ft,a),n(t,U,a),s(U,Vt),n(t,gt,a),x(z,t,a),n(t,xt,a),n(t,W,a),s(W,Xt),n(t,wt,a),x(B,t,a),n(t,vt,a),n(t,J,a),s(J,Zt),n(t,$t,a),x(F,t,a),n(t,bt,a),n(t,_,a),s(_,P),s(P,at),x(M,at,null),s(_,te),s(_,nt),s(nt,ee),n(t,jt,a),n(t,S,a),s(S,se),s(S,ot),s(ot,ae),s(S,ne),n(t,yt,a),x(Y,t,a),_t=!0},p:Se,i(t){_t||(w(D.$$.fragment,t),w(I.$$.fragment,t),w(N.$$.fragment,t),w(C.$$.fragment,t),w(G.$$.fragment,t),w(z.$$.fragment,t),w(B.$$.fragment,t),w(F.$$.fragment,t),w(M.$$.fragment,t),w(Y.$$.fragment,t),_t=!0)},o(t){v(D.$$.fragment,t),v(I.$$.fragment,t),v(N.$$.fragment,t),v(C.$$.fragment,t),v(G.$$.fragment,t),v(z.$$.fragment,t),v(B.$$.fragment,t),v(F.$$.fragment,t),v(M.$$.fragment,t),v(Y.$$.fragment,t),_t=!1},d(t){e(b),t&&e(lt),t&&e(j),$(D),t&&e(rt),t&&e(d),t&&e(it),t&&e(E),t&&e(pt),$(I,t),t&&e(ht),t&&e(y),$(N),t&&e(ct),t&&e(u),t&&e(mt),$(C,t),t&&e(dt),t&&e(A),t&&e(ut),$(G,t),t&&e(ft),t&&e(U),t&&e(gt),$(z,t),t&&e(xt),t&&e(W),t&&e(wt),$(B,t),t&&e(vt),t&&e(J),t&&e($t),$(F,t),t&&e(bt),t&&e(_),$(M),t&&e(jt),t&&e(S),t&&e(yt),$(Y,t)}}}const Ie={local:"know-your-dataset",sections:[{local:"indexing",title:"Indexing"},{local:"slicing",title:"Slicing"}],title:"Know your dataset"};function Ne(le){return De(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Be extends Ee{constructor(b){super();qe(this,b,Ne,Te,Ae,{})}}export{Be as default,Ie as metadata};
