import{S as zs,i as Fs,s as Gs,e as n,k as m,w as C,t as o,M as Ys,c as i,d as s,m as f,a as r,x as q,h as p,b as h,N as $s,G as e,g as l,y as A,q as D,o as L,B as T,v as Hs}from"../chunks/vendor-hf-doc-builder.js";import{T as Js}from"../chunks/Tip-hf-doc-builder.js";import{I as Vs}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ta}from"../chunks/CodeBlock-hf-doc-builder.js";function Ks(ca){let c,w,d,u,$;return{c(){c=n("p"),w=o(`Now that you know how to process a dataset for image classification, learn
`),d=n("a"),u=o("how to train an image classification model"),$=o(`
and use it for inference.`),this.h()},l(g){c=i(g,"P",{});var _=r(c);w=p(_,`Now that you know how to process a dataset for image classification, learn
`),d=i(_,"A",{href:!0,rel:!0});var b=r(d);u=p(b,"how to train an image classification model"),b.forEach(s),$=p(_,`
and use it for inference.`),_.forEach(s),this.h()},h(){h(d,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/image_classification.ipynb"),h(d,"rel","nofollow")},m(g,_){l(g,c,_),e(c,w),e(c,d),e(d,u),e(c,$)},d(g){g&&s(c)}}}function Qs(ca){let c,w,d,u,$,g,_,b,Ra,ha,G,Sa,da,y,Ua,la,za,Fa,na,Ga,Ya,ga,N,ua,k,Ha,B,Ja,Va,_a,Y,Ka,ya,O,va,H,Qa,$a,v,J,ia,Wa,Xa,Za,V,oa,as,ss,es,K,pa,ts,ls,ja,Q,ns,wa,M,ra,js,ba,x,is,ma,os,ps,ka,R,xa,W,rs,Ea,S,Ia,E,ms,X,fs,cs,Pa,U,Ca,I,hs,fa,ds,gs,qa,z,Aa,j,Z,ws,us,aa,bs,Da,P,La;return g=new Vs({}),N=new ta({props:{code:"pip install -U albumentations opencv-python",highlighted:"pip install -U albumentations opencv-python"}}),O=new ta({props:{code:`from datasets import load_dataset

dataset = load_dataset("beans")
dataset["train"][10]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;beans&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">10</span>]
{<span class="hljs-string">&#x27;image&#x27;</span>: &lt;PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=500x500 at <span class="hljs-number">0x7F8D2F4D7A10</span>&gt;,
 <span class="hljs-string">&#x27;image_file_path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/b0a21163f78769a2cf11f58dfc767fb458fc7cea5c05dccc0144a2c0f0bc1292/train/angular_leaf_spot/angular_leaf_spot_train.204.jpg&#x27;</span>,
 <span class="hljs-string">&#x27;labels&#x27;</span>: <span class="hljs-number">0</span>}`}}),R=new ta({props:{code:`import cv2
import albumentations as A
import numpy as np

transform = A.Compose([
    A.RandomCrop(width=256, height=256),
    A.HorizontalFlip(p=0.5),
    A.RandomBrightnessContrast(p=0.2),
])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> cv2
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> albumentations <span class="hljs-keyword">as</span> A
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-meta">&gt;&gt;&gt; </span>transform = A.Compose([
<span class="hljs-meta">... </span>    A.RandomCrop(width=<span class="hljs-number">256</span>, height=<span class="hljs-number">256</span>),
<span class="hljs-meta">... </span>    A.HorizontalFlip(p=<span class="hljs-number">0.5</span>),
<span class="hljs-meta">... </span>    A.RandomBrightnessContrast(p=<span class="hljs-number">0.2</span>),
<span class="hljs-meta">... </span>])`}}),S=new ta({props:{code:`def transforms(examples):
    examples["pixel_values"] = [
        transform(image=np.array(image))["image"] for image in examples["image"]
    ]

    return examples`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">transforms</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    examples[<span class="hljs-string">&quot;pixel_values&quot;</span>] = [
<span class="hljs-meta">... </span>        transform(image=np.array(image))[<span class="hljs-string">&quot;image&quot;</span>] <span class="hljs-keyword">for</span> image <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> examples`}}),U=new ta({props:{code:"dataset.set_transform(transforms)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.set_transform(transforms)'}}),z=new ta({props:{code:`import numpy as np
import matplotlib.pyplot as plt

img = dataset["train"][0]["pixel_values"]
plt.imshow(img)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> matplotlib.pyplot <span class="hljs-keyword">as</span> plt

<span class="hljs-meta">&gt;&gt;&gt; </span>img = dataset[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;pixel_values&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>plt.imshow(img)`}}),P=new Js({props:{$$slots:{default:[Ks]},$$scope:{ctx:ca}}}),{c(){c=n("meta"),w=m(),d=n("h1"),u=n("a"),$=n("span"),C(g.$$.fragment),_=m(),b=n("span"),Ra=o("Image classification"),ha=m(),G=n("p"),Sa=o("Image classification datasets are used to train a model to classify an entire image. There are a wide variety of applications enabled by these datasets such as identifying endangered wildlife species or screening for disease in medical images. This guide will show you how to apply transformations to an image classification dataset."),da=m(),y=n("p"),Ua=o("Before you start, make sure you have up-to-date versions of "),la=n("code"),za=o("albumentations"),Fa=o(" and "),na=n("code"),Ga=o("cv2"),Ya=o(" installed:"),ga=m(),C(N.$$.fragment),ua=m(),k=n("p"),Ha=o("This guide uses the "),B=n("a"),Ja=o("Beans"),Va=o(" dataset for identifying the type of bean plant disease based on an image of its leaf."),_a=m(),Y=n("p"),Ka=o("Load the dataset and take a look at an example:"),ya=m(),C(O.$$.fragment),va=m(),H=n("p"),Qa=o("The dataset has three fields:"),$a=m(),v=n("ul"),J=n("li"),ia=n("code"),Wa=o("image"),Xa=o(": a PIL image object."),Za=m(),V=n("li"),oa=n("code"),as=o("image_file_path"),ss=o(": the path to the image file."),es=m(),K=n("li"),pa=n("code"),ts=o("labels"),ls=o(": the label or category of the image."),ja=m(),Q=n("p"),ns=o("Next, check out an image:"),wa=m(),M=n("div"),ra=n("img"),ba=m(),x=n("p"),is=o("Now apply some augmentations with "),ma=n("code"),os=o("albumentations"),ps=o(". You\u2019ll randomly crop the image, flip it horizontally, and adjust its brightness."),ka=m(),C(R.$$.fragment),xa=m(),W=n("p"),rs=o("Create a function to apply the transformation to the images:"),Ea=m(),C(S.$$.fragment),Ia=m(),E=n("p"),ms=o("Use the "),X=n("a"),fs=o("set_transform()"),cs=o(" function to apply the transformation on-the-fly to batches of the dataset to consume less disk space:"),Pa=m(),C(U.$$.fragment),Ca=m(),I=n("p"),hs=o("You can verify the transformation worked by indexing into the "),fa=n("code"),ds=o("pixel_values"),gs=o(" of the first example:"),qa=m(),C(z.$$.fragment),Aa=m(),j=n("div"),Z=n("img"),us=m(),aa=n("img"),Da=m(),C(P.$$.fragment),this.h()},l(a){const t=Ys('[data-svelte="svelte-1phssyn"]',document.head);c=i(t,"META",{name:!0,content:!0}),t.forEach(s),w=f(a),d=i(a,"H1",{class:!0});var F=r(d);u=i(F,"A",{id:!0,class:!0,href:!0});var ks=r(u);$=i(ks,"SPAN",{});var xs=r($);q(g.$$.fragment,xs),xs.forEach(s),ks.forEach(s),_=f(F),b=i(F,"SPAN",{});var Es=r(b);Ra=p(Es,"Image classification"),Es.forEach(s),F.forEach(s),ha=f(a),G=i(a,"P",{});var Is=r(G);Sa=p(Is,"Image classification datasets are used to train a model to classify an entire image. There are a wide variety of applications enabled by these datasets such as identifying endangered wildlife species or screening for disease in medical images. This guide will show you how to apply transformations to an image classification dataset."),Is.forEach(s),da=f(a),y=i(a,"P",{});var sa=r(y);Ua=p(sa,"Before you start, make sure you have up-to-date versions of "),la=i(sa,"CODE",{});var Ps=r(la);za=p(Ps,"albumentations"),Ps.forEach(s),Fa=p(sa," and "),na=i(sa,"CODE",{});var Cs=r(na);Ga=p(Cs,"cv2"),Cs.forEach(s),Ya=p(sa," installed:"),sa.forEach(s),ga=f(a),q(N.$$.fragment,a),ua=f(a),k=i(a,"P",{});var Ta=r(k);Ha=p(Ta,"This guide uses the "),B=i(Ta,"A",{href:!0,rel:!0});var qs=r(B);Ja=p(qs,"Beans"),qs.forEach(s),Va=p(Ta," dataset for identifying the type of bean plant disease based on an image of its leaf."),Ta.forEach(s),_a=f(a),Y=i(a,"P",{});var As=r(Y);Ka=p(As,"Load the dataset and take a look at an example:"),As.forEach(s),ya=f(a),q(O.$$.fragment,a),va=f(a),H=i(a,"P",{});var Ds=r(H);Qa=p(Ds,"The dataset has three fields:"),Ds.forEach(s),$a=f(a),v=i(a,"UL",{});var ea=r(v);J=i(ea,"LI",{});var _s=r(J);ia=i(_s,"CODE",{});var Ls=r(ia);Wa=p(Ls,"image"),Ls.forEach(s),Xa=p(_s,": a PIL image object."),_s.forEach(s),Za=f(ea),V=i(ea,"LI",{});var ys=r(V);oa=i(ys,"CODE",{});var Ts=r(oa);as=p(Ts,"image_file_path"),Ts.forEach(s),ss=p(ys,": the path to the image file."),ys.forEach(s),es=f(ea),K=i(ea,"LI",{});var vs=r(K);pa=i(vs,"CODE",{});var Ns=r(pa);ts=p(Ns,"labels"),Ns.forEach(s),ls=p(vs,": the label or category of the image."),vs.forEach(s),ea.forEach(s),ja=f(a),Q=i(a,"P",{});var Bs=r(Q);ns=p(Bs,"Next, check out an image:"),Bs.forEach(s),wa=f(a),M=i(a,"DIV",{class:!0});var Os=r(M);ra=i(Os,"IMG",{src:!0}),Os.forEach(s),ba=f(a),x=i(a,"P",{});var Na=r(x);is=p(Na,"Now apply some augmentations with "),ma=i(Na,"CODE",{});var Ms=r(ma);os=p(Ms,"albumentations"),Ms.forEach(s),ps=p(Na,". You\u2019ll randomly crop the image, flip it horizontally, and adjust its brightness."),Na.forEach(s),ka=f(a),q(R.$$.fragment,a),xa=f(a),W=i(a,"P",{});var Rs=r(W);rs=p(Rs,"Create a function to apply the transformation to the images:"),Rs.forEach(s),Ea=f(a),q(S.$$.fragment,a),Ia=f(a),E=i(a,"P",{});var Ba=r(E);ms=p(Ba,"Use the "),X=i(Ba,"A",{href:!0});var Ss=r(X);fs=p(Ss,"set_transform()"),Ss.forEach(s),cs=p(Ba," function to apply the transformation on-the-fly to batches of the dataset to consume less disk space:"),Ba.forEach(s),Pa=f(a),q(U.$$.fragment,a),Ca=f(a),I=i(a,"P",{});var Oa=r(I);hs=p(Oa,"You can verify the transformation worked by indexing into the "),fa=i(Oa,"CODE",{});var Us=r(fa);ds=p(Us,"pixel_values"),Us.forEach(s),gs=p(Oa," of the first example:"),Oa.forEach(s),qa=f(a),q(z.$$.fragment,a),Aa=f(a),j=i(a,"DIV",{class:!0});var Ma=r(j);Z=i(Ma,"IMG",{class:!0,src:!0}),us=f(Ma),aa=i(Ma,"IMG",{class:!0,src:!0}),Ma.forEach(s),Da=f(a),q(P.$$.fragment,a),this.h()},h(){h(c,"name","hf:doc:metadata"),h(c,"content",JSON.stringify(Ws)),h(u,"id","image-classification"),h(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(u,"href","#image-classification"),h(d,"class","relative group"),h(B,"href","https://huggingface.co/datasets/beans"),h(B,"rel","nofollow"),$s(ra.src,js="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/img_clf.png")||h(ra,"src",js),h(M,"class","flex justify-center"),h(X,"href","/docs/datasets/v2.7.0/en/package_reference/main_classes#datasets.Dataset.set_transform"),h(Z,"class","block dark:hidden"),$s(Z.src,ws="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/img_clf_aug.png")||h(Z,"src",ws),h(aa,"class","hidden dark:block"),$s(aa.src,bs="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/img_clf_aug.png")||h(aa,"src",bs),h(j,"class","flex justify-center")},m(a,t){e(document.head,c),l(a,w,t),l(a,d,t),e(d,u),e(u,$),A(g,$,null),e(d,_),e(d,b),e(b,Ra),l(a,ha,t),l(a,G,t),e(G,Sa),l(a,da,t),l(a,y,t),e(y,Ua),e(y,la),e(la,za),e(y,Fa),e(y,na),e(na,Ga),e(y,Ya),l(a,ga,t),A(N,a,t),l(a,ua,t),l(a,k,t),e(k,Ha),e(k,B),e(B,Ja),e(k,Va),l(a,_a,t),l(a,Y,t),e(Y,Ka),l(a,ya,t),A(O,a,t),l(a,va,t),l(a,H,t),e(H,Qa),l(a,$a,t),l(a,v,t),e(v,J),e(J,ia),e(ia,Wa),e(J,Xa),e(v,Za),e(v,V),e(V,oa),e(oa,as),e(V,ss),e(v,es),e(v,K),e(K,pa),e(pa,ts),e(K,ls),l(a,ja,t),l(a,Q,t),e(Q,ns),l(a,wa,t),l(a,M,t),e(M,ra),l(a,ba,t),l(a,x,t),e(x,is),e(x,ma),e(ma,os),e(x,ps),l(a,ka,t),A(R,a,t),l(a,xa,t),l(a,W,t),e(W,rs),l(a,Ea,t),A(S,a,t),l(a,Ia,t),l(a,E,t),e(E,ms),e(E,X),e(X,fs),e(E,cs),l(a,Pa,t),A(U,a,t),l(a,Ca,t),l(a,I,t),e(I,hs),e(I,fa),e(fa,ds),e(I,gs),l(a,qa,t),A(z,a,t),l(a,Aa,t),l(a,j,t),e(j,Z),e(j,us),e(j,aa),l(a,Da,t),A(P,a,t),La=!0},p(a,[t]){const F={};t&2&&(F.$$scope={dirty:t,ctx:a}),P.$set(F)},i(a){La||(D(g.$$.fragment,a),D(N.$$.fragment,a),D(O.$$.fragment,a),D(R.$$.fragment,a),D(S.$$.fragment,a),D(U.$$.fragment,a),D(z.$$.fragment,a),D(P.$$.fragment,a),La=!0)},o(a){L(g.$$.fragment,a),L(N.$$.fragment,a),L(O.$$.fragment,a),L(R.$$.fragment,a),L(S.$$.fragment,a),L(U.$$.fragment,a),L(z.$$.fragment,a),L(P.$$.fragment,a),La=!1},d(a){s(c),a&&s(w),a&&s(d),T(g),a&&s(ha),a&&s(G),a&&s(da),a&&s(y),a&&s(ga),T(N,a),a&&s(ua),a&&s(k),a&&s(_a),a&&s(Y),a&&s(ya),T(O,a),a&&s(va),a&&s(H),a&&s($a),a&&s(v),a&&s(ja),a&&s(Q),a&&s(wa),a&&s(M),a&&s(ba),a&&s(x),a&&s(ka),T(R,a),a&&s(xa),a&&s(W),a&&s(Ea),T(S,a),a&&s(Ia),a&&s(E),a&&s(Pa),T(U,a),a&&s(Ca),a&&s(I),a&&s(qa),T(z,a),a&&s(Aa),a&&s(j),a&&s(Da),T(P,a)}}}const Ws={local:"image-classification",title:"Image classification"};function Xs(ca){return Hs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class te extends zs{constructor(c){super();Fs(this,c,Xs,Qs,Gs,{})}}export{te as default,Ws as metadata};
