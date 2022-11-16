import{S as Ms,i as Os,s as Us,e as o,k as f,w as g,t as e,M as Bs,c as r,d as s,m as c,a as i,x as _,h as n,b as d,G as t,g as p,y as v,L as zs,q as j,o as w,B as y,v as Vs}from"../chunks/vendor-hf-doc-builder.js";import{I as ot}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as sa}from"../chunks/CodeBlock-hf-doc-builder.js";function Gs(is){let x,Aa,k,P,ha,O,rt,ua,it,Pa,q,pt,U,dt,ft,qa,$,ct,B,ht,ut,z,mt,gt,Ia,E,I,ma,V,_t,ga,vt,Sa,S,jt,ea,wt,yt,La,L,$t,na,bt,xt,Ca,G,Ta,C,kt,la,Et,Dt,Ha,J,Na,D,T,_a,K,At,va,Pt,Fa,h,qt,ja,It,St,wa,Lt,Ct,oa,Tt,Ht,Ra,Z,Ma,u,Nt,ya,Ft,Rt,$a,Mt,Ot,ra,Ut,Bt,Oa,Q,Ua,b,zt,ba,Vt,Gt,ia,Jt,Kt,Ba,W,za,A,H,xa,X,Zt,ka,Qt,Va,m,Wt,Y,Xt,Yt,Ea,as,ts,Da,ss,es,Ga,N,ns,pa,ls,os,Ja,aa,Ka,da,rs,Za,ta,Qa;return O=new ot({}),V=new ot({}),G=new sa({props:{code:`from datasets import load_dataset_builder
ds_builder = load_dataset_builder("rotten_tomatoes")

ds_builder.info.description

ds_builder.info.features`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset_builder
<span class="hljs-meta">&gt;&gt;&gt; </span>ds_builder = load_dataset_builder(<span class="hljs-string">&quot;rotten_tomatoes&quot;</span>)

<span class="hljs-comment"># Inspect dataset description</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ds_builder.info.description
Movie Review Dataset. This <span class="hljs-keyword">is</span> a dataset of containing <span class="hljs-number">5</span>,<span class="hljs-number">331</span> positive <span class="hljs-keyword">and</span> <span class="hljs-number">5</span>,<span class="hljs-number">331</span> negative processed sentences <span class="hljs-keyword">from</span> Rotten Tomatoes movie reviews. This data was first used <span class="hljs-keyword">in</span> Bo Pang <span class="hljs-keyword">and</span> Lillian Lee, \`\`Seeing stars: Exploiting <span class="hljs-keyword">class</span> <span class="hljs-title class_">relationships</span> <span class="hljs-keyword">for</span> sentiment categorization <span class="hljs-keyword">with</span> respect to rating scales.<span class="hljs-string">&#x27;&#x27;</span>, Proceedings of the ACL, <span class="hljs-number">2005.</span>

<span class="hljs-comment"># Inspect dataset features</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ds_builder.info.features
{<span class="hljs-string">&#x27;label&#x27;</span>: ClassLabel(num_classes=<span class="hljs-number">2</span>, names=[<span class="hljs-string">&#x27;neg&#x27;</span>, <span class="hljs-string">&#x27;pos&#x27;</span>], <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
 <span class="hljs-string">&#x27;text&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>)}`}}),J=new sa({props:{code:`from datasets import load_dataset

dataset = load_dataset("rotten_tomatoes", split="train")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;rotten_tomatoes&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)`}}),K=new ot({}),Z=new sa({props:{code:`from datasets import get_dataset_split_names

get_dataset_split_names("rotten_tomatoes")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> get_dataset_split_names

<span class="hljs-meta">&gt;&gt;&gt; </span>get_dataset_split_names(<span class="hljs-string">&quot;rotten_tomatoes&quot;</span>)
[<span class="hljs-string">&#x27;train&#x27;</span>, <span class="hljs-string">&#x27;validation&#x27;</span>, <span class="hljs-string">&#x27;test&#x27;</span>]`}}),Q=new sa({props:{code:`from datasets import load_dataset

dataset = load_dataset("rotten_tomatoes", split="train")
dataset`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;rotten_tomatoes&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset
Dataset({
    features: [<span class="hljs-string">&#x27;text&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>],
    num_rows: <span class="hljs-number">8530</span>
})`}}),W=new sa({props:{code:`from datasets import load_dataset

dataset = load_dataset("rotten_tomatoes")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;rotten_tomatoes&quot;</span>)
DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;text&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>],
        num_rows: <span class="hljs-number">8530</span>
    })
    validation: Dataset({
        features: [<span class="hljs-string">&#x27;text&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>],
        num_rows: <span class="hljs-number">1066</span>
    })
    test: Dataset({
        features: [<span class="hljs-string">&#x27;text&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>],
        num_rows: <span class="hljs-number">1066</span>
    })
})`}}),X=new ot({}),aa=new sa({props:{code:`from datasets import get_dataset_config_names

configs = get_dataset_config_names("PolyAI/minds14")
print(configs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> get_dataset_config_names

<span class="hljs-meta">&gt;&gt;&gt; </span>configs = get_dataset_config_names(<span class="hljs-string">&quot;PolyAI/minds14&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(configs)
[<span class="hljs-string">&#x27;cs-CZ&#x27;</span>, <span class="hljs-string">&#x27;de-DE&#x27;</span>, <span class="hljs-string">&#x27;en-AU&#x27;</span>, <span class="hljs-string">&#x27;en-GB&#x27;</span>, <span class="hljs-string">&#x27;en-US&#x27;</span>, <span class="hljs-string">&#x27;es-ES&#x27;</span>, <span class="hljs-string">&#x27;fr-FR&#x27;</span>, <span class="hljs-string">&#x27;it-IT&#x27;</span>, <span class="hljs-string">&#x27;ko-KR&#x27;</span>, <span class="hljs-string">&#x27;nl-NL&#x27;</span>, <span class="hljs-string">&#x27;pl-PL&#x27;</span>, <span class="hljs-string">&#x27;pt-PT&#x27;</span>, <span class="hljs-string">&#x27;ru-RU&#x27;</span>, <span class="hljs-string">&#x27;zh-CN&#x27;</span>, <span class="hljs-string">&#x27;all&#x27;</span>]`}}),ta=new sa({props:{code:`from datasets import load_dataset

mindsFR = load_dataset("PolyAI/minds14", "fr-FR", split="train")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>mindsFR = load_dataset(<span class="hljs-string">&quot;PolyAI/minds14&quot;</span>, <span class="hljs-string">&quot;fr-FR&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)`}}),{c(){x=o("meta"),Aa=f(),k=o("h1"),P=o("a"),ha=o("span"),g(O.$$.fragment),rt=f(),ua=o("span"),it=e("Load a dataset from the Hub"),Pa=f(),q=o("p"),pt=e("Finding high-quality datasets that are reproducible and accessible can be difficult. One of \u{1F917} Datasets main goals is to provide a simple way to load a dataset of any format or type. The easiest way to get started is to discover an existing dataset on the "),U=o("a"),dt=e("Hugging Face Hub"),ft=e(" - a community-driven collection of datasets for tasks in NLP, computer vision, and audio - and use \u{1F917} Datasets to download and generate the dataset."),qa=f(),$=o("p"),ct=e("This tutorial uses the "),B=o("a"),ht=e("rotten_tomatoes"),ut=e(" and "),z=o("a"),mt=e("MInDS-14"),gt=e(" datasets, but feel free to load any dataset you want and follow along. Head over to the Hub now and find a dataset for your task!"),Ia=f(),E=o("h2"),I=o("a"),ma=o("span"),g(V.$$.fragment),_t=f(),ga=o("span"),vt=e("Load a dataset"),Sa=f(),S=o("p"),jt=e("Before you take the time to download a dataset, it\u2019s often helpful to quickly get some general information about a dataset. A dataset\u2019s information is stored inside "),ea=o("a"),wt=e("DatasetInfo"),yt=e(" and can include information such as the dataset description, features, and dataset size."),La=f(),L=o("p"),$t=e("Use the "),na=o("a"),bt=e("load_dataset_builder()"),xt=e(" function to load a dataset builder and inspect a dataset\u2019s attributes without committing to downloading it:"),Ca=f(),g(G.$$.fragment),Ta=f(),C=o("p"),kt=e("If you\u2019re happy with the dataset, then load it with "),la=o("a"),Et=e("load_dataset()"),Dt=e(":"),Ha=f(),g(J.$$.fragment),Na=f(),D=o("h2"),T=o("a"),_a=o("span"),g(K.$$.fragment),At=f(),va=o("span"),Pt=e("Splits"),Fa=f(),h=o("p"),qt=e("A split is a specific subset of a dataset like "),ja=o("code"),It=e("train"),St=e(" and "),wa=o("code"),Lt=e("test"),Ct=e(". List a dataset\u2019s split names with the "),oa=o("a"),Tt=e("get_dataset_split_names()"),Ht=e(" function:"),Ra=f(),g(Z.$$.fragment),Ma=f(),u=o("p"),Nt=e("Then you can load a specific split with the "),ya=o("code"),Ft=e("split"),Rt=e(" parameter. Loading a dataset "),$a=o("code"),Mt=e("split"),Ot=e(" returns a "),ra=o("a"),Ut=e("Dataset"),Bt=e(" object:"),Oa=f(),g(Q.$$.fragment),Ua=f(),b=o("p"),zt=e("If you don\u2019t specify a "),ba=o("code"),Vt=e("split"),Gt=e(", \u{1F917} Datasets returns a "),ia=o("a"),Jt=e("DatasetDict"),Kt=e(" object instead:"),Ba=f(),g(W.$$.fragment),za=f(),A=o("h2"),H=o("a"),xa=o("span"),g(X.$$.fragment),Zt=f(),ka=o("span"),Qt=e("Configurations"),Va=f(),m=o("p"),Wt=e("Some datasets contain several sub-datasets. For example, the "),Y=o("a"),Xt=e("MInDS-14"),Yt=e(" dataset has several sub-datasets, each one containing audio data in a different language. These sub-datasets are known as "),Ea=o("em"),as=e("configurations"),ts=e(", and you must explicitly select one when loading the dataset. If you don\u2019t provide a configuration name, \u{1F917} Datasets will raise a "),Da=o("code"),ss=e("ValueError"),es=e(" and remind you to choose a configuration."),Ga=f(),N=o("p"),ns=e("Use the "),pa=o("a"),ls=e("get_dataset_config_names()"),os=e(" function to retrieve a list of all the possible configurations available to your dataset:"),Ja=f(),g(aa.$$.fragment),Ka=f(),da=o("p"),rs=e("Then load the configuration you want:"),Za=f(),g(ta.$$.fragment),this.h()},l(a){const l=Bs('[data-svelte="svelte-1phssyn"]',document.head);x=r(l,"META",{name:!0,content:!0}),l.forEach(s),Aa=c(a),k=r(a,"H1",{class:!0});var Wa=i(k);P=r(Wa,"A",{id:!0,class:!0,href:!0});var ps=i(P);ha=r(ps,"SPAN",{});var ds=i(ha);_(O.$$.fragment,ds),ds.forEach(s),ps.forEach(s),rt=c(Wa),ua=r(Wa,"SPAN",{});var fs=i(ua);it=n(fs,"Load a dataset from the Hub"),fs.forEach(s),Wa.forEach(s),Pa=c(a),q=r(a,"P",{});var Xa=i(q);pt=n(Xa,"Finding high-quality datasets that are reproducible and accessible can be difficult. One of \u{1F917} Datasets main goals is to provide a simple way to load a dataset of any format or type. The easiest way to get started is to discover an existing dataset on the "),U=r(Xa,"A",{href:!0,rel:!0});var cs=i(U);dt=n(cs,"Hugging Face Hub"),cs.forEach(s),ft=n(Xa," - a community-driven collection of datasets for tasks in NLP, computer vision, and audio - and use \u{1F917} Datasets to download and generate the dataset."),Xa.forEach(s),qa=c(a),$=r(a,"P",{});var fa=i($);ct=n(fa,"This tutorial uses the "),B=r(fa,"A",{href:!0,rel:!0});var hs=i(B);ht=n(hs,"rotten_tomatoes"),hs.forEach(s),ut=n(fa," and "),z=r(fa,"A",{href:!0,rel:!0});var us=i(z);mt=n(us,"MInDS-14"),us.forEach(s),gt=n(fa," datasets, but feel free to load any dataset you want and follow along. Head over to the Hub now and find a dataset for your task!"),fa.forEach(s),Ia=c(a),E=r(a,"H2",{class:!0});var Ya=i(E);I=r(Ya,"A",{id:!0,class:!0,href:!0});var ms=i(I);ma=r(ms,"SPAN",{});var gs=i(ma);_(V.$$.fragment,gs),gs.forEach(s),ms.forEach(s),_t=c(Ya),ga=r(Ya,"SPAN",{});var _s=i(ga);vt=n(_s,"Load a dataset"),_s.forEach(s),Ya.forEach(s),Sa=c(a),S=r(a,"P",{});var at=i(S);jt=n(at,"Before you take the time to download a dataset, it\u2019s often helpful to quickly get some general information about a dataset. A dataset\u2019s information is stored inside "),ea=r(at,"A",{href:!0});var vs=i(ea);wt=n(vs,"DatasetInfo"),vs.forEach(s),yt=n(at," and can include information such as the dataset description, features, and dataset size."),at.forEach(s),La=c(a),L=r(a,"P",{});var tt=i(L);$t=n(tt,"Use the "),na=r(tt,"A",{href:!0});var js=i(na);bt=n(js,"load_dataset_builder()"),js.forEach(s),xt=n(tt," function to load a dataset builder and inspect a dataset\u2019s attributes without committing to downloading it:"),tt.forEach(s),Ca=c(a),_(G.$$.fragment,a),Ta=c(a),C=r(a,"P",{});var st=i(C);kt=n(st,"If you\u2019re happy with the dataset, then load it with "),la=r(st,"A",{href:!0});var ws=i(la);Et=n(ws,"load_dataset()"),ws.forEach(s),Dt=n(st,":"),st.forEach(s),Ha=c(a),_(J.$$.fragment,a),Na=c(a),D=r(a,"H2",{class:!0});var et=i(D);T=r(et,"A",{id:!0,class:!0,href:!0});var ys=i(T);_a=r(ys,"SPAN",{});var $s=i(_a);_(K.$$.fragment,$s),$s.forEach(s),ys.forEach(s),At=c(et),va=r(et,"SPAN",{});var bs=i(va);Pt=n(bs,"Splits"),bs.forEach(s),et.forEach(s),Fa=c(a),h=r(a,"P",{});var F=i(h);qt=n(F,"A split is a specific subset of a dataset like "),ja=r(F,"CODE",{});var xs=i(ja);It=n(xs,"train"),xs.forEach(s),St=n(F," and "),wa=r(F,"CODE",{});var ks=i(wa);Lt=n(ks,"test"),ks.forEach(s),Ct=n(F,". List a dataset\u2019s split names with the "),oa=r(F,"A",{href:!0});var Es=i(oa);Tt=n(Es,"get_dataset_split_names()"),Es.forEach(s),Ht=n(F," function:"),F.forEach(s),Ra=c(a),_(Z.$$.fragment,a),Ma=c(a),u=r(a,"P",{});var R=i(u);Nt=n(R,"Then you can load a specific split with the "),ya=r(R,"CODE",{});var Ds=i(ya);Ft=n(Ds,"split"),Ds.forEach(s),Rt=n(R," parameter. Loading a dataset "),$a=r(R,"CODE",{});var As=i($a);Mt=n(As,"split"),As.forEach(s),Ot=n(R," returns a "),ra=r(R,"A",{href:!0});var Ps=i(ra);Ut=n(Ps,"Dataset"),Ps.forEach(s),Bt=n(R," object:"),R.forEach(s),Oa=c(a),_(Q.$$.fragment,a),Ua=c(a),b=r(a,"P",{});var ca=i(b);zt=n(ca,"If you don\u2019t specify a "),ba=r(ca,"CODE",{});var qs=i(ba);Vt=n(qs,"split"),qs.forEach(s),Gt=n(ca,", \u{1F917} Datasets returns a "),ia=r(ca,"A",{href:!0});var Is=i(ia);Jt=n(Is,"DatasetDict"),Is.forEach(s),Kt=n(ca," object instead:"),ca.forEach(s),Ba=c(a),_(W.$$.fragment,a),za=c(a),A=r(a,"H2",{class:!0});var nt=i(A);H=r(nt,"A",{id:!0,class:!0,href:!0});var Ss=i(H);xa=r(Ss,"SPAN",{});var Ls=i(xa);_(X.$$.fragment,Ls),Ls.forEach(s),Ss.forEach(s),Zt=c(nt),ka=r(nt,"SPAN",{});var Cs=i(ka);Qt=n(Cs,"Configurations"),Cs.forEach(s),nt.forEach(s),Va=c(a),m=r(a,"P",{});var M=i(m);Wt=n(M,"Some datasets contain several sub-datasets. For example, the "),Y=r(M,"A",{href:!0,rel:!0});var Ts=i(Y);Xt=n(Ts,"MInDS-14"),Ts.forEach(s),Yt=n(M," dataset has several sub-datasets, each one containing audio data in a different language. These sub-datasets are known as "),Ea=r(M,"EM",{});var Hs=i(Ea);as=n(Hs,"configurations"),Hs.forEach(s),ts=n(M,", and you must explicitly select one when loading the dataset. If you don\u2019t provide a configuration name, \u{1F917} Datasets will raise a "),Da=r(M,"CODE",{});var Ns=i(Da);ss=n(Ns,"ValueError"),Ns.forEach(s),es=n(M," and remind you to choose a configuration."),M.forEach(s),Ga=c(a),N=r(a,"P",{});var lt=i(N);ns=n(lt,"Use the "),pa=r(lt,"A",{href:!0});var Fs=i(pa);ls=n(Fs,"get_dataset_config_names()"),Fs.forEach(s),os=n(lt," function to retrieve a list of all the possible configurations available to your dataset:"),lt.forEach(s),Ja=c(a),_(aa.$$.fragment,a),Ka=c(a),da=r(a,"P",{});var Rs=i(da);rs=n(Rs,"Then load the configuration you want:"),Rs.forEach(s),Za=c(a),_(ta.$$.fragment,a),this.h()},h(){d(x,"name","hf:doc:metadata"),d(x,"content",JSON.stringify(Js)),d(P,"id","load-a-dataset-from-the-hub"),d(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(P,"href","#load-a-dataset-from-the-hub"),d(k,"class","relative group"),d(U,"href","https://huggingface.co/datasets"),d(U,"rel","nofollow"),d(B,"href","https://huggingface.co/datasets/rotten_tomatoes"),d(B,"rel","nofollow"),d(z,"href","https://huggingface.co/datasets/PolyAI/minds14"),d(z,"rel","nofollow"),d(I,"id","load-a-dataset"),d(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(I,"href","#load-a-dataset"),d(E,"class","relative group"),d(ea,"href","/docs/datasets/v2.7.0/en/package_reference/main_classes#datasets.DatasetInfo"),d(na,"href","/docs/datasets/v2.7.0/en/package_reference/loading_methods#datasets.load_dataset_builder"),d(la,"href","/docs/datasets/v2.7.0/en/package_reference/loading_methods#datasets.load_dataset"),d(T,"id","splits"),d(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(T,"href","#splits"),d(D,"class","relative group"),d(oa,"href","/docs/datasets/v2.7.0/en/package_reference/loading_methods#datasets.get_dataset_split_names"),d(ra,"href","/docs/datasets/v2.7.0/en/package_reference/main_classes#datasets.Dataset"),d(ia,"href","/docs/datasets/v2.7.0/en/package_reference/main_classes#datasets.DatasetDict"),d(H,"id","configurations"),d(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(H,"href","#configurations"),d(A,"class","relative group"),d(Y,"href","https://huggingface.co/datasets/PolyAI/minds14"),d(Y,"rel","nofollow"),d(pa,"href","/docs/datasets/v2.7.0/en/package_reference/loading_methods#datasets.get_dataset_config_names")},m(a,l){t(document.head,x),p(a,Aa,l),p(a,k,l),t(k,P),t(P,ha),v(O,ha,null),t(k,rt),t(k,ua),t(ua,it),p(a,Pa,l),p(a,q,l),t(q,pt),t(q,U),t(U,dt),t(q,ft),p(a,qa,l),p(a,$,l),t($,ct),t($,B),t(B,ht),t($,ut),t($,z),t(z,mt),t($,gt),p(a,Ia,l),p(a,E,l),t(E,I),t(I,ma),v(V,ma,null),t(E,_t),t(E,ga),t(ga,vt),p(a,Sa,l),p(a,S,l),t(S,jt),t(S,ea),t(ea,wt),t(S,yt),p(a,La,l),p(a,L,l),t(L,$t),t(L,na),t(na,bt),t(L,xt),p(a,Ca,l),v(G,a,l),p(a,Ta,l),p(a,C,l),t(C,kt),t(C,la),t(la,Et),t(C,Dt),p(a,Ha,l),v(J,a,l),p(a,Na,l),p(a,D,l),t(D,T),t(T,_a),v(K,_a,null),t(D,At),t(D,va),t(va,Pt),p(a,Fa,l),p(a,h,l),t(h,qt),t(h,ja),t(ja,It),t(h,St),t(h,wa),t(wa,Lt),t(h,Ct),t(h,oa),t(oa,Tt),t(h,Ht),p(a,Ra,l),v(Z,a,l),p(a,Ma,l),p(a,u,l),t(u,Nt),t(u,ya),t(ya,Ft),t(u,Rt),t(u,$a),t($a,Mt),t(u,Ot),t(u,ra),t(ra,Ut),t(u,Bt),p(a,Oa,l),v(Q,a,l),p(a,Ua,l),p(a,b,l),t(b,zt),t(b,ba),t(ba,Vt),t(b,Gt),t(b,ia),t(ia,Jt),t(b,Kt),p(a,Ba,l),v(W,a,l),p(a,za,l),p(a,A,l),t(A,H),t(H,xa),v(X,xa,null),t(A,Zt),t(A,ka),t(ka,Qt),p(a,Va,l),p(a,m,l),t(m,Wt),t(m,Y),t(Y,Xt),t(m,Yt),t(m,Ea),t(Ea,as),t(m,ts),t(m,Da),t(Da,ss),t(m,es),p(a,Ga,l),p(a,N,l),t(N,ns),t(N,pa),t(pa,ls),t(N,os),p(a,Ja,l),v(aa,a,l),p(a,Ka,l),p(a,da,l),t(da,rs),p(a,Za,l),v(ta,a,l),Qa=!0},p:zs,i(a){Qa||(j(O.$$.fragment,a),j(V.$$.fragment,a),j(G.$$.fragment,a),j(J.$$.fragment,a),j(K.$$.fragment,a),j(Z.$$.fragment,a),j(Q.$$.fragment,a),j(W.$$.fragment,a),j(X.$$.fragment,a),j(aa.$$.fragment,a),j(ta.$$.fragment,a),Qa=!0)},o(a){w(O.$$.fragment,a),w(V.$$.fragment,a),w(G.$$.fragment,a),w(J.$$.fragment,a),w(K.$$.fragment,a),w(Z.$$.fragment,a),w(Q.$$.fragment,a),w(W.$$.fragment,a),w(X.$$.fragment,a),w(aa.$$.fragment,a),w(ta.$$.fragment,a),Qa=!1},d(a){s(x),a&&s(Aa),a&&s(k),y(O),a&&s(Pa),a&&s(q),a&&s(qa),a&&s($),a&&s(Ia),a&&s(E),y(V),a&&s(Sa),a&&s(S),a&&s(La),a&&s(L),a&&s(Ca),y(G,a),a&&s(Ta),a&&s(C),a&&s(Ha),y(J,a),a&&s(Na),a&&s(D),y(K),a&&s(Fa),a&&s(h),a&&s(Ra),y(Z,a),a&&s(Ma),a&&s(u),a&&s(Oa),y(Q,a),a&&s(Ua),a&&s(b),a&&s(Ba),y(W,a),a&&s(za),a&&s(A),y(X),a&&s(Va),a&&s(m),a&&s(Ga),a&&s(N),a&&s(Ja),y(aa,a),a&&s(Ka),a&&s(da),a&&s(Za),y(ta,a)}}}const Js={local:"load-a-dataset-from-the-hub",sections:[{local:"load-a-dataset",title:"Load a dataset"},{local:"splits",title:"Splits"},{local:"configurations",title:"Configurations"}],title:"Load a dataset from the Hub"};function Ks(is){return Vs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Xs extends Ms{constructor(x){super();Os(this,x,Ks,Gs,Us,{})}}export{Xs as default,Js as metadata};
