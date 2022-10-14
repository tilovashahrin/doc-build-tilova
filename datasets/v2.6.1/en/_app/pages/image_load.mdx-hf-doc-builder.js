import{S as Oe,i as Se,s as Be,e as n,k as h,w as k,t as s,M as Te,c as r,d as e,m as g,a as i,x as q,h as o,b as u,G as t,g as p,y as I,q as P,o as x,B as C,v as Ne}from"../chunks/vendor-hf-doc-builder.js";import{T as re}from"../chunks/Tip-hf-doc-builder.js";import{I as ie}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ra}from"../chunks/CodeBlock-hf-doc-builder.js";function Re(R){let d,E,m,$,v,f,b,w;return{c(){d=n("p"),E=s("To work with image datasets, you need to have the "),m=n("code"),$=s("vision"),v=s(" dependency installed. Check out the "),f=n("a"),b=s("installation"),w=s(" guide to learn how to install it."),this.h()},l(_){d=r(_,"P",{});var c=i(d);E=o(c,"To work with image datasets, you need to have the "),m=r(c,"CODE",{});var j=i(m);$=o(j,"vision"),j.forEach(e),v=o(c," dependency installed. Check out the "),f=r(c,"A",{href:!0});var F=i(f);b=o(F,"installation"),F.forEach(e),w=o(c," guide to learn how to install it."),c.forEach(e),this.h()},h(){u(f,"href","./installation#vision")},m(_,c){p(_,d,c),t(d,E),t(d,m),t(m,$),t(d,v),t(d,f),t(f,b),t(d,w)},d(_){_&&e(d)}}}function Ye(R){let d,E,m,$,v,f,b,w;return{c(){d=n("p"),E=s("Index into an image dataset using the row index first and then the "),m=n("code"),$=s("image"),v=s(" column - "),f=n("code"),b=s('dataset[0]["image"]'),w=s(" - to avoid decoding and resampling all the image objects in the dataset. Otherwise, this can be a slow and time-consuming process if you have a large dataset.")},l(_){d=r(_,"P",{});var c=i(d);E=o(c,"Index into an image dataset using the row index first and then the "),m=r(c,"CODE",{});var j=i(m);$=o(j,"image"),j.forEach(e),v=o(c," column - "),f=r(c,"CODE",{});var F=i(f);b=o(F,'dataset[0]["image"]'),F.forEach(e),w=o(c," - to avoid decoding and resampling all the image objects in the dataset. Otherwise, this can be a slow and time-consuming process if you have a large dataset."),c.forEach(e)},m(_,c){p(_,d,c),t(d,E),t(d,m),t(m,$),t(d,v),t(d,f),t(f,b),t(d,w)},d(_){_&&e(d)}}}function ze(R){let d,E,m,$,v,f,b,w;return{c(){d=n("p"),E=s("For more information about creating your own "),m=n("code"),$=s("ImageFolder"),v=s(" dataset, take a look at the "),f=n("a"),b=s("Create an image dataset"),w=s(" guide."),this.h()},l(_){d=r(_,"P",{});var c=i(d);E=o(c,"For more information about creating your own "),m=r(c,"CODE",{});var j=i(m);$=o(j,"ImageFolder"),j.forEach(e),v=o(c," dataset, take a look at the "),f=r(c,"A",{href:!0});var F=i(f);b=o(F,"Create an image dataset"),F.forEach(e),w=o(c," guide."),c.forEach(e),this.h()},h(){u(f,"href","./image_dataset")},m(_,c){p(_,d,c),t(d,E),t(d,m),t(m,$),t(d,v),t(d,f),t(f,b),t(d,w)},d(_){_&&e(d)}}}function Ue(R){let d,E,m,$,v,f,b,w,_,c,j,F,$a,pt,ct,Sa,Y,Ba,A,mt,va,ft,ht,ia,gt,ut,Ta,Q,Na,z,Ra,U,_t,V,$t,vt,Ya,T,G,wa,X,wt,ja,jt,za,L,Et,da,bt,yt,pa,kt,qt,Ua,Z,Ga,O,It,Ea,Pt,xt,ca,Ct,Ft,Ha,aa,Ma,N,H,ba,ta,Dt,ya,At,Wa,M,Lt,ka,Ot,St,Ja,ea,Ka,S,Bt,qa,Tt,Nt,Ia,Rt,Yt,Qa,sa,Va,W,zt,Pa,Ut,Gt,Xa,oa,Za,y,Ht,xa,Mt,Wt,Ca,Jt,Kt,ma,Qt,Vt,Fa,Xt,Zt,at,D,ae,Da,te,ee,fa,se,oe,Aa,le,ne,tt,la,et,J,st;return f=new ie({}),Y=new re({props:{$$slots:{default:[Re]},$$scope:{ctx:R}}}),Q=new ra({props:{code:`from datasets import load_dataset, Image

dataset = load_dataset("beans", split="train")
dataset[0]["image"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Image

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;beans&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;image&quot;</span>]`}}),z=new re({props:{warning:!0,$$slots:{default:[Ye]},$$scope:{ctx:R}}}),X=new ie({}),Z=new ra({props:{code:`from datasets import load_dataset, Image

dataset = Dataset.from_dict({"image": ["path/to/image_1", "path/to/image_2", ..., "path/to/image_n"]}).cast_column("image", Image())
dataset[0]["image"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Image

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = Dataset.from_dict({<span class="hljs-string">&quot;image&quot;</span>: [<span class="hljs-string">&quot;path/to/image_1&quot;</span>, <span class="hljs-string">&quot;path/to/image_2&quot;</span>, ..., <span class="hljs-string">&quot;path/to/image_n&quot;</span>]}).cast_column(<span class="hljs-string">&quot;image&quot;</span>, Image())
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;image&quot;</span>]
&lt;PIL.PngImagePlugin.PngImageFile image mode=RGBA size=1200x215 at <span class="hljs-number">0x15E6D7160</span>&gt;]`}}),aa=new ra({props:{code:`dataset = load_dataset("beans", split="train").cast_column("image", Image(decode=False))
dataset[0]["image"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;beans&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>).cast_column(<span class="hljs-string">&quot;image&quot;</span>, Image(decode=<span class="hljs-literal">False</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;image&quot;</span>]
{<span class="hljs-string">&#x27;bytes&#x27;</span>: <span class="hljs-literal">None</span>,
 <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/b0a21163f78769a2cf11f58dfc767fb458fc7cea5c05dccc0144a2c0f0bc1292/train/bean_rust/bean_rust_train.29.jpg&#x27;</span>}`}}),ta=new ie({}),ea=new ra({props:{code:`folder/train/dog/golden_retriever.png
folder/train/dog/german_shepherd.png
folder/train/dog/chihuahua.png

folder/train/cat/maine_coon.png
folder/train/cat/bengal.png
folder/train/cat/birman.png`,highlighted:`folder<span class="hljs-regexp">/train/</span>dog/golden_retriever.png
folder<span class="hljs-regexp">/train/</span>dog/german_shepherd.png
folder<span class="hljs-regexp">/train/</span>dog/chihuahua.png

folder<span class="hljs-regexp">/train/</span>cat/maine_coon.png
folder<span class="hljs-regexp">/train/</span>cat/bengal.png
folder<span class="hljs-regexp">/train/</span>cat/birman.png`}}),sa=new ra({props:{code:`from datasets import load_dataset

dataset = load_dataset("imagefolder", data_dir="/path/to/folder")
dataset["train"][0]

dataset["train"][-1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;imagefolder&quot;</span>, data_dir=<span class="hljs-string">&quot;/path/to/folder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&quot;image&quot;</span>: &lt;PIL.PngImagePlugin.PngImageFile image mode=RGBA size=1200x215 at <span class="hljs-number">0x15E6D7160</span>&gt;, <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-number">0</span>}

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-string">&quot;train&quot;</span>][-<span class="hljs-number">1</span>]
{<span class="hljs-string">&quot;image&quot;</span>: &lt;PIL.PngImagePlugin.PngImageFile image mode=RGBA size=1200x215 at <span class="hljs-number">0x15E8DAD30</span>&gt;, <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-number">1</span>}`}}),oa=new ra({props:{code:'dataset = load_dataset("imagefolder", data_files="https://download.microsoft.com/download/3/E/1/3E1C3F21-ECDB-4869-8368-6DEBA77B919F/kagglecatsanddogs_3367a.zip", split="train")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;imagefolder&quot;</span>, data_files=<span class="hljs-string">&quot;https://download.microsoft.com/download/3/E/1/3E1C3F21-ECDB-4869-8368-6DEBA77B919F/kagglecatsanddogs_3367a.zip&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)'}}),la=new ra({props:{code:`from datasets import load_dataset

dataset = load_dataset("imagefolder", data_dir="/path/to/folder", drop_labels=False)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;imagefolder&quot;</span>, data_dir=<span class="hljs-string">&quot;/path/to/folder&quot;</span>, drop_labels=<span class="hljs-literal">False</span>)`}}),J=new re({props:{$$slots:{default:[ze]},$$scope:{ctx:R}}}),{c(){d=n("meta"),E=h(),m=n("h1"),$=n("a"),v=n("span"),k(f.$$.fragment),b=h(),w=n("span"),_=s("Load image data"),c=h(),j=n("p"),F=s("Image datasets are loaded from the "),$a=n("code"),pt=s("image"),ct=s(" column, which contains a PIL object."),Sa=h(),k(Y.$$.fragment),Ba=h(),A=n("p"),mt=s("When you load an image dataset and call the "),va=n("code"),ft=s("image"),ht=s(" column, the "),ia=n("a"),gt=s("Image"),ut=s(" feature automatically decodes the PIL object into an image:"),Ta=h(),k(Q.$$.fragment),Na=h(),k(z.$$.fragment),Ra=h(),U=n("p"),_t=s("For a guide on how to load any type of dataset, take a look at the "),V=n("a"),$t=s("general loading guide"),vt=s("."),Ya=h(),T=n("h2"),G=n("a"),wa=n("span"),k(X.$$.fragment),wt=h(),ja=n("span"),jt=s("Local files"),za=h(),L=n("p"),Et=s("You can load a dataset from the image path. Use the "),da=n("a"),bt=s("cast_column()"),yt=s(" function to accept a column of image file paths, and decode it into a PIL image with the "),pa=n("a"),kt=s("Image"),qt=s(" feature:"),Ua=h(),k(Z.$$.fragment),Ga=h(),O=n("p"),It=s("If you only want to load the underlying path to the image dataset without decoding the image object, set "),Ea=n("code"),Pt=s("decode=False"),xt=s(" in the "),ca=n("a"),Ct=s("Image"),Ft=s(" feature:"),Ha=h(),k(aa.$$.fragment),Ma=h(),N=n("h2"),H=n("a"),ba=n("span"),k(ta.$$.fragment),Dt=h(),ya=n("span"),At=s("ImageFolder"),Wa=h(),M=n("p"),Lt=s("You can also load a dataset with an "),ka=n("code"),Ot=s("ImageFolder"),St=s(" dataset builder. It does not require writing a custom dataloader, making it useful for quickly loading a dataset for certain vision tasks. Your image dataset structure should look like this:"),Ja=h(),k(ea.$$.fragment),Ka=h(),S=n("p"),Bt=s("Load your dataset by specifying "),qa=n("code"),Tt=s("imagefolder"),Nt=s(" and the directory of your dataset in "),Ia=n("code"),Rt=s("data_dir"),Yt=s(":"),Qa=h(),k(sa.$$.fragment),Va=h(),W=n("p"),zt=s("Load remote datasets from their URLs with the "),Pa=n("code"),Ut=s("data_files"),Gt=s(" parameter:"),Xa=h(),k(oa.$$.fragment),Za=h(),y=n("p"),Ht=s("Some datasets have a metadata file ("),xa=n("code"),Mt=s("metadata.csv"),Wt=s("/"),Ca=n("code"),Jt=s("metadata.jsonl"),Kt=s(") associated with it, containing other information about the data like bounding boxes, text captions, and labels. The metadata is automatically loaded when you call "),ma=n("a"),Qt=s("load_dataset()"),Vt=s(" and specify "),Fa=n("code"),Xt=s("imagefolder"),Zt=s("."),at=h(),D=n("p"),ae=s("To ignore the information in the metadata file, set "),Da=n("code"),te=s("drop_labels=False"),ee=s(" in "),fa=n("a"),se=s("load_dataset()"),oe=s(", and allow "),Aa=n("code"),le=s("ImageFolder"),ne=s(" to automatically infer the label name from the directory name:"),tt=h(),k(la.$$.fragment),et=h(),k(J.$$.fragment),this.h()},l(a){const l=Te('[data-svelte="svelte-1phssyn"]',document.head);d=r(l,"META",{name:!0,content:!0}),l.forEach(e),E=g(a),m=r(a,"H1",{class:!0});var na=i(m);$=r(na,"A",{id:!0,class:!0,href:!0});var La=i($);v=r(La,"SPAN",{});var Oa=i(v);q(f.$$.fragment,Oa),Oa.forEach(e),La.forEach(e),b=g(na),w=r(na,"SPAN",{});var de=i(w);_=o(de,"Load image data"),de.forEach(e),na.forEach(e),c=g(a),j=r(a,"P",{});var ot=i(j);F=o(ot,"Image datasets are loaded from the "),$a=r(ot,"CODE",{});var pe=i($a);pt=o(pe,"image"),pe.forEach(e),ct=o(ot," column, which contains a PIL object."),ot.forEach(e),Sa=g(a),q(Y.$$.fragment,a),Ba=g(a),A=r(a,"P",{});var ha=i(A);mt=o(ha,"When you load an image dataset and call the "),va=r(ha,"CODE",{});var ce=i(va);ft=o(ce,"image"),ce.forEach(e),ht=o(ha," column, the "),ia=r(ha,"A",{href:!0});var me=i(ia);gt=o(me,"Image"),me.forEach(e),ut=o(ha," feature automatically decodes the PIL object into an image:"),ha.forEach(e),Ta=g(a),q(Q.$$.fragment,a),Na=g(a),q(z.$$.fragment,a),Ra=g(a),U=r(a,"P",{});var lt=i(U);_t=o(lt,"For a guide on how to load any type of dataset, take a look at the "),V=r(lt,"A",{class:!0,href:!0});var fe=i(V);$t=o(fe,"general loading guide"),fe.forEach(e),vt=o(lt,"."),lt.forEach(e),Ya=g(a),T=r(a,"H2",{class:!0});var nt=i(T);G=r(nt,"A",{id:!0,class:!0,href:!0});var he=i(G);wa=r(he,"SPAN",{});var ge=i(wa);q(X.$$.fragment,ge),ge.forEach(e),he.forEach(e),wt=g(nt),ja=r(nt,"SPAN",{});var ue=i(ja);jt=o(ue,"Local files"),ue.forEach(e),nt.forEach(e),za=g(a),L=r(a,"P",{});var ga=i(L);Et=o(ga,"You can load a dataset from the image path. Use the "),da=r(ga,"A",{href:!0});var _e=i(da);bt=o(_e,"cast_column()"),_e.forEach(e),yt=o(ga," function to accept a column of image file paths, and decode it into a PIL image with the "),pa=r(ga,"A",{href:!0});var $e=i(pa);kt=o($e,"Image"),$e.forEach(e),qt=o(ga," feature:"),ga.forEach(e),Ua=g(a),q(Z.$$.fragment,a),Ga=g(a),O=r(a,"P",{});var ua=i(O);It=o(ua,"If you only want to load the underlying path to the image dataset without decoding the image object, set "),Ea=r(ua,"CODE",{});var ve=i(Ea);Pt=o(ve,"decode=False"),ve.forEach(e),xt=o(ua," in the "),ca=r(ua,"A",{href:!0});var we=i(ca);Ct=o(we,"Image"),we.forEach(e),Ft=o(ua," feature:"),ua.forEach(e),Ha=g(a),q(aa.$$.fragment,a),Ma=g(a),N=r(a,"H2",{class:!0});var rt=i(N);H=r(rt,"A",{id:!0,class:!0,href:!0});var je=i(H);ba=r(je,"SPAN",{});var Ee=i(ba);q(ta.$$.fragment,Ee),Ee.forEach(e),je.forEach(e),Dt=g(rt),ya=r(rt,"SPAN",{});var be=i(ya);At=o(be,"ImageFolder"),be.forEach(e),rt.forEach(e),Wa=g(a),M=r(a,"P",{});var it=i(M);Lt=o(it,"You can also load a dataset with an "),ka=r(it,"CODE",{});var ye=i(ka);Ot=o(ye,"ImageFolder"),ye.forEach(e),St=o(it," dataset builder. It does not require writing a custom dataloader, making it useful for quickly loading a dataset for certain vision tasks. Your image dataset structure should look like this:"),it.forEach(e),Ja=g(a),q(ea.$$.fragment,a),Ka=g(a),S=r(a,"P",{});var _a=i(S);Bt=o(_a,"Load your dataset by specifying "),qa=r(_a,"CODE",{});var ke=i(qa);Tt=o(ke,"imagefolder"),ke.forEach(e),Nt=o(_a," and the directory of your dataset in "),Ia=r(_a,"CODE",{});var qe=i(Ia);Rt=o(qe,"data_dir"),qe.forEach(e),Yt=o(_a,":"),_a.forEach(e),Qa=g(a),q(sa.$$.fragment,a),Va=g(a),W=r(a,"P",{});var dt=i(W);zt=o(dt,"Load remote datasets from their URLs with the "),Pa=r(dt,"CODE",{});var Ie=i(Pa);Ut=o(Ie,"data_files"),Ie.forEach(e),Gt=o(dt," parameter:"),dt.forEach(e),Xa=g(a),q(oa.$$.fragment,a),Za=g(a),y=r(a,"P",{});var B=i(y);Ht=o(B,"Some datasets have a metadata file ("),xa=r(B,"CODE",{});var Pe=i(xa);Mt=o(Pe,"metadata.csv"),Pe.forEach(e),Wt=o(B,"/"),Ca=r(B,"CODE",{});var xe=i(Ca);Jt=o(xe,"metadata.jsonl"),xe.forEach(e),Kt=o(B,") associated with it, containing other information about the data like bounding boxes, text captions, and labels. The metadata is automatically loaded when you call "),ma=r(B,"A",{href:!0});var Ce=i(ma);Qt=o(Ce,"load_dataset()"),Ce.forEach(e),Vt=o(B," and specify "),Fa=r(B,"CODE",{});var Fe=i(Fa);Xt=o(Fe,"imagefolder"),Fe.forEach(e),Zt=o(B,"."),B.forEach(e),at=g(a),D=r(a,"P",{});var K=i(D);ae=o(K,"To ignore the information in the metadata file, set "),Da=r(K,"CODE",{});var De=i(Da);te=o(De,"drop_labels=False"),De.forEach(e),ee=o(K," in "),fa=r(K,"A",{href:!0});var Ae=i(fa);se=o(Ae,"load_dataset()"),Ae.forEach(e),oe=o(K,", and allow "),Aa=r(K,"CODE",{});var Le=i(Aa);le=o(Le,"ImageFolder"),Le.forEach(e),ne=o(K," to automatically infer the label name from the directory name:"),K.forEach(e),tt=g(a),q(la.$$.fragment,a),et=g(a),q(J.$$.fragment,a),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(Ge)),u($,"id","load-image-data"),u($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($,"href","#load-image-data"),u(m,"class","relative group"),u(ia,"href","/docs/datasets/v2.6.1/en/package_reference/main_classes#datasets.Image"),u(V,"class","underline decoration-sky-400 decoration-2 font-semibold"),u(V,"href","./loading"),u(G,"id","local-files"),u(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(G,"href","#local-files"),u(T,"class","relative group"),u(da,"href","/docs/datasets/v2.6.1/en/package_reference/main_classes#datasets.Dataset.cast_column"),u(pa,"href","/docs/datasets/v2.6.1/en/package_reference/main_classes#datasets.Image"),u(ca,"href","/docs/datasets/v2.6.1/en/package_reference/main_classes#datasets.Image"),u(H,"id","imagefolder"),u(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(H,"href","#imagefolder"),u(N,"class","relative group"),u(ma,"href","/docs/datasets/v2.6.1/en/package_reference/loading_methods#datasets.load_dataset"),u(fa,"href","/docs/datasets/v2.6.1/en/package_reference/loading_methods#datasets.load_dataset")},m(a,l){t(document.head,d),p(a,E,l),p(a,m,l),t(m,$),t($,v),I(f,v,null),t(m,b),t(m,w),t(w,_),p(a,c,l),p(a,j,l),t(j,F),t(j,$a),t($a,pt),t(j,ct),p(a,Sa,l),I(Y,a,l),p(a,Ba,l),p(a,A,l),t(A,mt),t(A,va),t(va,ft),t(A,ht),t(A,ia),t(ia,gt),t(A,ut),p(a,Ta,l),I(Q,a,l),p(a,Na,l),I(z,a,l),p(a,Ra,l),p(a,U,l),t(U,_t),t(U,V),t(V,$t),t(U,vt),p(a,Ya,l),p(a,T,l),t(T,G),t(G,wa),I(X,wa,null),t(T,wt),t(T,ja),t(ja,jt),p(a,za,l),p(a,L,l),t(L,Et),t(L,da),t(da,bt),t(L,yt),t(L,pa),t(pa,kt),t(L,qt),p(a,Ua,l),I(Z,a,l),p(a,Ga,l),p(a,O,l),t(O,It),t(O,Ea),t(Ea,Pt),t(O,xt),t(O,ca),t(ca,Ct),t(O,Ft),p(a,Ha,l),I(aa,a,l),p(a,Ma,l),p(a,N,l),t(N,H),t(H,ba),I(ta,ba,null),t(N,Dt),t(N,ya),t(ya,At),p(a,Wa,l),p(a,M,l),t(M,Lt),t(M,ka),t(ka,Ot),t(M,St),p(a,Ja,l),I(ea,a,l),p(a,Ka,l),p(a,S,l),t(S,Bt),t(S,qa),t(qa,Tt),t(S,Nt),t(S,Ia),t(Ia,Rt),t(S,Yt),p(a,Qa,l),I(sa,a,l),p(a,Va,l),p(a,W,l),t(W,zt),t(W,Pa),t(Pa,Ut),t(W,Gt),p(a,Xa,l),I(oa,a,l),p(a,Za,l),p(a,y,l),t(y,Ht),t(y,xa),t(xa,Mt),t(y,Wt),t(y,Ca),t(Ca,Jt),t(y,Kt),t(y,ma),t(ma,Qt),t(y,Vt),t(y,Fa),t(Fa,Xt),t(y,Zt),p(a,at,l),p(a,D,l),t(D,ae),t(D,Da),t(Da,te),t(D,ee),t(D,fa),t(fa,se),t(D,oe),t(D,Aa),t(Aa,le),t(D,ne),p(a,tt,l),I(la,a,l),p(a,et,l),I(J,a,l),st=!0},p(a,[l]){const na={};l&2&&(na.$$scope={dirty:l,ctx:a}),Y.$set(na);const La={};l&2&&(La.$$scope={dirty:l,ctx:a}),z.$set(La);const Oa={};l&2&&(Oa.$$scope={dirty:l,ctx:a}),J.$set(Oa)},i(a){st||(P(f.$$.fragment,a),P(Y.$$.fragment,a),P(Q.$$.fragment,a),P(z.$$.fragment,a),P(X.$$.fragment,a),P(Z.$$.fragment,a),P(aa.$$.fragment,a),P(ta.$$.fragment,a),P(ea.$$.fragment,a),P(sa.$$.fragment,a),P(oa.$$.fragment,a),P(la.$$.fragment,a),P(J.$$.fragment,a),st=!0)},o(a){x(f.$$.fragment,a),x(Y.$$.fragment,a),x(Q.$$.fragment,a),x(z.$$.fragment,a),x(X.$$.fragment,a),x(Z.$$.fragment,a),x(aa.$$.fragment,a),x(ta.$$.fragment,a),x(ea.$$.fragment,a),x(sa.$$.fragment,a),x(oa.$$.fragment,a),x(la.$$.fragment,a),x(J.$$.fragment,a),st=!1},d(a){e(d),a&&e(E),a&&e(m),C(f),a&&e(c),a&&e(j),a&&e(Sa),C(Y,a),a&&e(Ba),a&&e(A),a&&e(Ta),C(Q,a),a&&e(Na),C(z,a),a&&e(Ra),a&&e(U),a&&e(Ya),a&&e(T),C(X),a&&e(za),a&&e(L),a&&e(Ua),C(Z,a),a&&e(Ga),a&&e(O),a&&e(Ha),C(aa,a),a&&e(Ma),a&&e(N),C(ta),a&&e(Wa),a&&e(M),a&&e(Ja),C(ea,a),a&&e(Ka),a&&e(S),a&&e(Qa),C(sa,a),a&&e(Va),a&&e(W),a&&e(Xa),C(oa,a),a&&e(Za),a&&e(y),a&&e(at),a&&e(D),a&&e(tt),C(la,a),a&&e(et),C(J,a)}}}const Ge={local:"load-image-data",sections:[{local:"local-files",title:"Local files"},{local:"imagefolder",title:"ImageFolder"}],title:"Load image data"};function He(R){return Ne(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qe extends Oe{constructor(d){super();Se(this,d,He,Ue,Be,{})}}export{Qe as default,Ge as metadata};
