import{S as _a,i as ka,s as $a,e as t,k as p,w as W,t as c,M as ja,c as r,d as a,m,a as o,x as R,h,b as n,G as e,g as i,y as D,L as Aa,q as C,o as F,B as H,v as Ea}from"../chunks/vendor-hf-doc-builder.js";import{I as ks}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ba}from"../chunks/CodeBlock-hf-doc-builder.js";function Pa(Ks){let d,ts,w,b,U,j,$s,Y,js,rs,g,_,J,A,As,O,Es,os,E,P,Ps,qs,ls,f,q,Ms,M,Is,zs,Ts,Z,xs,Ss,K,Ns,Bs,Q,Gs,Ls,V,Ws,is,v,k,X,I,Rs,ss,Ds,ns,S,Cs,ps,N,Fs,ms,z,cs,B,Hs,hs,y,$,as,T,Us,es,Ys,fs,G,Js,us,x,ds,L,Os,ws;return j=new ks({}),A=new ks({}),I=new ks({}),z=new ba({props:{code:`import os; import psutil; import timeit
from datasets import load_dataset

mem_before = psutil.Process(os.getpid()).memory_info().rss / (1024 * 1024)
wiki = load_dataset("wikipedia", "20220301.en", split="train")
mem_after = psutil.Process(os.getpid()).memory_info().rss / (1024 * 1024)

print(f"RAM memory used: {(mem_after - mem_before)} MB")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> os; <span class="hljs-keyword">import</span> psutil; <span class="hljs-keyword">import</span> timeit
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-comment"># Process.memory_info is expressed in bytes, so convert to megabytes </span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mem_before = psutil.Process(os.getpid()).memory_info().rss / (<span class="hljs-number">1024</span> * <span class="hljs-number">1024</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>wiki = load_dataset(<span class="hljs-string">&quot;wikipedia&quot;</span>, <span class="hljs-string">&quot;20220301.en&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>mem_after = psutil.Process(os.getpid()).memory_info().rss / (<span class="hljs-number">1024</span> * <span class="hljs-number">1024</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;RAM memory used: <span class="hljs-subst">{(mem_after - mem_before)}</span> MB&quot;</span>)
RAM memory used: <span class="hljs-number">50</span> MB`}}),T=new ks({}),x=new ba({props:{code:`s = """batch_size = 1000
for i in range(0, len(wiki), batch_size):
    batch = wiki[i:i + batch_size]
"""

time = timeit.timeit(stmt=s, number=1, globals=globals())
print(f"Time to iterate over the {wiki.dataset_size >> 30} GB dataset: {time:.1f} sec, "
      f"ie. {float(wiki.dataset_size >> 27)/time:.1f} Gb/s")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>s = <span class="hljs-string">&quot;&quot;&quot;batch_size = 1000
<span class="hljs-meta">... </span>for i in range(0, len(wiki), batch_size):
<span class="hljs-meta">... </span>    batch = wiki[i:i + batch_size]
<span class="hljs-meta">... </span>&quot;&quot;&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>time = timeit.timeit(stmt=s, number=<span class="hljs-number">1</span>, <span class="hljs-built_in">globals</span>=<span class="hljs-built_in">globals</span>())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Time to iterate over the <span class="hljs-subst">{wiki.dataset_size &gt;&gt; <span class="hljs-number">30</span>}</span> GB dataset: <span class="hljs-subst">{time:<span class="hljs-number">.1</span>f}</span> sec, &quot;</span>
<span class="hljs-meta">... </span>      <span class="hljs-string">f&quot;ie. <span class="hljs-subst">{<span class="hljs-built_in">float</span>(wiki.dataset_size &gt;&gt; <span class="hljs-number">27</span>)/time:<span class="hljs-number">.1</span>f}</span> Gb/s&quot;</span>)
Time to iterate over the <span class="hljs-number">18</span> GB dataset: <span class="hljs-number">70.5</span> sec, ie. <span class="hljs-number">2.1</span> Gb/s`}}),{c(){d=t("meta"),ts=p(),w=t("h1"),b=t("a"),U=t("span"),W(j.$$.fragment),$s=p(),Y=t("span"),js=c("Datasets \u{1F91D} Arrow"),rs=p(),g=t("h2"),_=t("a"),J=t("span"),W(A.$$.fragment),As=p(),O=t("span"),Es=c("What is Arrow?"),os=p(),E=t("p"),P=t("a"),Ps=c("Arrow"),qs=c(" enables large amounts of data to be processed and moved quickly. It is a specific data format that stores data in a columnar memory layout. This provides several significant advantages:"),ls=p(),f=t("ul"),q=t("li"),Ms=c("Arrow\u2019s standard format allows "),M=t("a"),Is=c("zero-copy reads"),zs=c(" which removes virtually all serialization overhead."),Ts=p(),Z=t("li"),xs=c("Arrow is language-agnostic so it supports different programming languages."),Ss=p(),K=t("li"),Ns=c("Arrow is column-oriented so it is faster at querying and processing slices or columns of data."),Bs=p(),Q=t("li"),Gs=c("Arrow allows for copy-free hand-offs to standard machine learning tools such as NumPy, Pandas, PyTorch, and TensorFlow."),Ls=p(),V=t("li"),Ws=c("Arrow supports many, possibly nested, column types."),is=p(),v=t("h2"),k=t("a"),X=t("span"),W(I.$$.fragment),Rs=p(),ss=t("span"),Ds=c("Memory-mapping"),ns=p(),S=t("p"),Cs=c(`\u{1F917} Datasets uses Arrow for its local caching system. It allows datasets to be backed by an on-disk cache, which is memory-mapped for fast lookup.
This architecture allows for large datasets to be used on machines with relatively small device memory.`),ps=p(),N=t("p"),Fs=c("For example, loading the full English Wikipedia dataset only takes a few MB of RAM:"),ms=p(),W(z.$$.fragment),cs=p(),B=t("p"),Hs=c(`This is possible because the Arrow data is actually memory-mapped from disk, and not loaded in memory.
Memory-mapping allows access to data on disk, and leverages virtual memory capabilities for fast lookups.`),hs=p(),y=t("h2"),$=t("a"),as=t("span"),W(T.$$.fragment),Us=p(),es=t("span"),Ys=c("Performance"),fs=p(),G=t("p"),Js=c("Iterating over a memory-mapped dataset using Arrow is fast. Iterating over Wikipedia on a laptop gives you speeds of 1-3 Gbit/s:"),us=p(),W(x.$$.fragment),ds=p(),L=t("p"),Os=c("You can obtain the best performance by accessing slices of data (or \u201Cbatches\u201D), in order to reduce the amount of lookups on disk."),this.h()},l(s){const l=ja('[data-svelte="svelte-1phssyn"]',document.head);d=r(l,"META",{name:!0,content:!0}),l.forEach(a),ts=m(s),w=r(s,"H1",{class:!0});var gs=o(w);b=r(gs,"A",{id:!0,class:!0,href:!0});var Qs=o(b);U=r(Qs,"SPAN",{});var Vs=o(U);R(j.$$.fragment,Vs),Vs.forEach(a),Qs.forEach(a),$s=m(gs),Y=r(gs,"SPAN",{});var Xs=o(Y);js=h(Xs,"Datasets \u{1F91D} Arrow"),Xs.forEach(a),gs.forEach(a),rs=m(s),g=r(s,"H2",{class:!0});var vs=o(g);_=r(vs,"A",{id:!0,class:!0,href:!0});var sa=o(_);J=r(sa,"SPAN",{});var aa=o(J);R(A.$$.fragment,aa),aa.forEach(a),sa.forEach(a),As=m(vs),O=r(vs,"SPAN",{});var ea=o(O);Es=h(ea,"What is Arrow?"),ea.forEach(a),vs.forEach(a),os=m(s),E=r(s,"P",{});var Zs=o(E);P=r(Zs,"A",{href:!0,rel:!0});var ta=o(P);Ps=h(ta,"Arrow"),ta.forEach(a),qs=h(Zs," enables large amounts of data to be processed and moved quickly. It is a specific data format that stores data in a columnar memory layout. This provides several significant advantages:"),Zs.forEach(a),ls=m(s),f=r(s,"UL",{});var u=o(f);q=r(u,"LI",{});var ys=o(q);Ms=h(ys,"Arrow\u2019s standard format allows "),M=r(ys,"A",{href:!0,rel:!0});var ra=o(M);Is=h(ra,"zero-copy reads"),ra.forEach(a),zs=h(ys," which removes virtually all serialization overhead."),ys.forEach(a),Ts=m(u),Z=r(u,"LI",{});var oa=o(Z);xs=h(oa,"Arrow is language-agnostic so it supports different programming languages."),oa.forEach(a),Ss=m(u),K=r(u,"LI",{});var la=o(K);Ns=h(la,"Arrow is column-oriented so it is faster at querying and processing slices or columns of data."),la.forEach(a),Bs=m(u),Q=r(u,"LI",{});var ia=o(Q);Gs=h(ia,"Arrow allows for copy-free hand-offs to standard machine learning tools such as NumPy, Pandas, PyTorch, and TensorFlow."),ia.forEach(a),Ls=m(u),V=r(u,"LI",{});var na=o(V);Ws=h(na,"Arrow supports many, possibly nested, column types."),na.forEach(a),u.forEach(a),is=m(s),v=r(s,"H2",{class:!0});var bs=o(v);k=r(bs,"A",{id:!0,class:!0,href:!0});var pa=o(k);X=r(pa,"SPAN",{});var ma=o(X);R(I.$$.fragment,ma),ma.forEach(a),pa.forEach(a),Rs=m(bs),ss=r(bs,"SPAN",{});var ca=o(ss);Ds=h(ca,"Memory-mapping"),ca.forEach(a),bs.forEach(a),ns=m(s),S=r(s,"P",{});var ha=o(S);Cs=h(ha,`\u{1F917} Datasets uses Arrow for its local caching system. It allows datasets to be backed by an on-disk cache, which is memory-mapped for fast lookup.
This architecture allows for large datasets to be used on machines with relatively small device memory.`),ha.forEach(a),ps=m(s),N=r(s,"P",{});var fa=o(N);Fs=h(fa,"For example, loading the full English Wikipedia dataset only takes a few MB of RAM:"),fa.forEach(a),ms=m(s),R(z.$$.fragment,s),cs=m(s),B=r(s,"P",{});var ua=o(B);Hs=h(ua,`This is possible because the Arrow data is actually memory-mapped from disk, and not loaded in memory.
Memory-mapping allows access to data on disk, and leverages virtual memory capabilities for fast lookups.`),ua.forEach(a),hs=m(s),y=r(s,"H2",{class:!0});var _s=o(y);$=r(_s,"A",{id:!0,class:!0,href:!0});var da=o($);as=r(da,"SPAN",{});var wa=o(as);R(T.$$.fragment,wa),wa.forEach(a),da.forEach(a),Us=m(_s),es=r(_s,"SPAN",{});var ga=o(es);Ys=h(ga,"Performance"),ga.forEach(a),_s.forEach(a),fs=m(s),G=r(s,"P",{});var va=o(G);Js=h(va,"Iterating over a memory-mapped dataset using Arrow is fast. Iterating over Wikipedia on a laptop gives you speeds of 1-3 Gbit/s:"),va.forEach(a),us=m(s),R(x.$$.fragment,s),ds=m(s),L=r(s,"P",{});var ya=o(L);Os=h(ya,"You can obtain the best performance by accessing slices of data (or \u201Cbatches\u201D), in order to reduce the amount of lookups on disk."),ya.forEach(a),this.h()},h(){n(d,"name","hf:doc:metadata"),n(d,"content",JSON.stringify(qa)),n(b,"id","datasets-arrow"),n(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(b,"href","#datasets-arrow"),n(w,"class","relative group"),n(_,"id","what-is-arrow"),n(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(_,"href","#what-is-arrow"),n(g,"class","relative group"),n(P,"href","https://arrow.apache.org/"),n(P,"rel","nofollow"),n(M,"href","https://en.wikipedia.org/wiki/Zero-copy"),n(M,"rel","nofollow"),n(k,"id","memorymapping"),n(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(k,"href","#memorymapping"),n(v,"class","relative group"),n($,"id","performance"),n($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n($,"href","#performance"),n(y,"class","relative group")},m(s,l){e(document.head,d),i(s,ts,l),i(s,w,l),e(w,b),e(b,U),D(j,U,null),e(w,$s),e(w,Y),e(Y,js),i(s,rs,l),i(s,g,l),e(g,_),e(_,J),D(A,J,null),e(g,As),e(g,O),e(O,Es),i(s,os,l),i(s,E,l),e(E,P),e(P,Ps),e(E,qs),i(s,ls,l),i(s,f,l),e(f,q),e(q,Ms),e(q,M),e(M,Is),e(q,zs),e(f,Ts),e(f,Z),e(Z,xs),e(f,Ss),e(f,K),e(K,Ns),e(f,Bs),e(f,Q),e(Q,Gs),e(f,Ls),e(f,V),e(V,Ws),i(s,is,l),i(s,v,l),e(v,k),e(k,X),D(I,X,null),e(v,Rs),e(v,ss),e(ss,Ds),i(s,ns,l),i(s,S,l),e(S,Cs),i(s,ps,l),i(s,N,l),e(N,Fs),i(s,ms,l),D(z,s,l),i(s,cs,l),i(s,B,l),e(B,Hs),i(s,hs,l),i(s,y,l),e(y,$),e($,as),D(T,as,null),e(y,Us),e(y,es),e(es,Ys),i(s,fs,l),i(s,G,l),e(G,Js),i(s,us,l),D(x,s,l),i(s,ds,l),i(s,L,l),e(L,Os),ws=!0},p:Aa,i(s){ws||(C(j.$$.fragment,s),C(A.$$.fragment,s),C(I.$$.fragment,s),C(z.$$.fragment,s),C(T.$$.fragment,s),C(x.$$.fragment,s),ws=!0)},o(s){F(j.$$.fragment,s),F(A.$$.fragment,s),F(I.$$.fragment,s),F(z.$$.fragment,s),F(T.$$.fragment,s),F(x.$$.fragment,s),ws=!1},d(s){a(d),s&&a(ts),s&&a(w),H(j),s&&a(rs),s&&a(g),H(A),s&&a(os),s&&a(E),s&&a(ls),s&&a(f),s&&a(is),s&&a(v),H(I),s&&a(ns),s&&a(S),s&&a(ps),s&&a(N),s&&a(ms),H(z,s),s&&a(cs),s&&a(B),s&&a(hs),s&&a(y),H(T),s&&a(fs),s&&a(G),s&&a(us),H(x,s),s&&a(ds),s&&a(L)}}}const qa={local:"datasets-arrow",sections:[{local:"what-is-arrow",title:"What is Arrow?"},{local:"memorymapping",title:"Memory-mapping"},{local:"performance",title:"Performance"}],title:"Datasets \u{1F91D} Arrow"};function Ma(Ks){return Ea(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xa extends _a{constructor(d){super();ka(this,d,Ma,Pa,$a,{})}}export{xa as default,qa as metadata};