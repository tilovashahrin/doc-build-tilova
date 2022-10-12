import{S as pa,i as ma,s as ha,e as l,k as m,w as u,t as i,M as ca,c as n,d as s,m as h,a as o,x as g,h as p,b as c,G as a,g as r,y as d,L as fa,q as w,o as v,B as b,v as ua}from"../../chunks/vendor-hf-doc-builder.js";import{I as ve}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";function ga(qs){let _,be,j,E,ne,R,Qe,re,Ve,_e,f,oe,es,ss,ie,as,ts,H,ls,ns,je,K,rs,ye,X,os,$e,y,P,pe,L,is,me,ps,ke,Z,ms,xe,M,Ee,Q,hs,Pe,B,Se,V,cs,Ne,Y,Te,ee,fs,Ie,z,Ae,S,us,he,gs,ds,qe,N,ws,se,vs,bs,Ce,$,T,ce,D,_s,fe,js,Re,ae,ys,He,G,Le,I,$s,U,ks,xs,Me,k,A,ue,O,Es,ge,Ps,Be,q,Ss,te,Ns,Ts,Ye,x,C,de,J,Is,we,As,ze,W,De;return R=new ve({}),L=new ve({}),M=new le({props:{code:`import timm
model = timm.create_model('swsl_resnet18', pretrained=True)
model.eval()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> timm
<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;swsl_resnet18&#x27;</span>, pretrained=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">eval</span>()`}}),B=new le({props:{code:`import urllib
from PIL import Image
from timm.data import resolve_data_config
from timm.data.transforms_factory import create_transform

config = resolve_data_config({}, model=model)
transform = create_transform(**config)

url, filename = ("https://github.com/pytorch/hub/raw/master/images/dog.jpg", "dog.jpg")
urllib.request.urlretrieve(url, filename)
img = Image.open(filename).convert('RGB')
tensor = transform(img).unsqueeze(0) # transform and add batch dimension`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> urllib
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> timm.data <span class="hljs-keyword">import</span> resolve_data_config
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> timm.data.transforms_factory <span class="hljs-keyword">import</span> create_transform

<span class="hljs-meta">&gt;&gt;&gt; </span>config = resolve_data_config({}, model=model)
<span class="hljs-meta">&gt;&gt;&gt; </span>transform = create_transform(**config)

<span class="hljs-meta">&gt;&gt;&gt; </span>url, filename = (<span class="hljs-string">&quot;https://github.com/pytorch/hub/raw/master/images/dog.jpg&quot;</span>, <span class="hljs-string">&quot;dog.jpg&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>urllib.request.urlretrieve(url, filename)
<span class="hljs-meta">&gt;&gt;&gt; </span>img = Image.<span class="hljs-built_in">open</span>(filename).convert(<span class="hljs-string">&#x27;RGB&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tensor = transform(img).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># transform and add batch dimension</span>`}}),Y=new le({props:{code:`import torch
with torch.no_grad():
    out = model(tensor)
probabilities = torch.nn.functional.softmax(out[0], dim=0)
print(probabilities.shape)
# prints: torch.Size([1000])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    out = model(tensor)
<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.nn.functional.softmax(out[<span class="hljs-number">0</span>], dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(probabilities.shape)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prints: torch.Size([1000])</span>`}}),z=new le({props:{code:`# Get imagenet class mappings
url, filename = ("https://raw.githubusercontent.com/pytorch/hub/master/imagenet_classes.txt", "imagenet_classes.txt")
urllib.request.urlretrieve(url, filename) 
with open("imagenet_classes.txt", "r") as f:
    categories = [s.strip() for s in f.readlines()]

# Print top categories per image
top5_prob, top5_catid = torch.topk(probabilities, 5)
for i in range(top5_prob.size(0)):
    print(categories[top5_catid[i]], top5_prob[i].item())
# prints class names and probabilities like:
# [('Samoyed', 0.6425196528434753), ('Pomeranian', 0.04062102362513542), ('keeshond', 0.03186424449086189), ('white wolf', 0.01739676296710968), ('Eskimo dog', 0.011717947199940681)]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Get imagenet class mappings</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url, filename = (<span class="hljs-string">&quot;https://raw.githubusercontent.com/pytorch/hub/master/imagenet_classes.txt&quot;</span>, <span class="hljs-string">&quot;imagenet_classes.txt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>urllib.request.urlretrieve(url, filename) 
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;imagenet_classes.txt&quot;</span>, <span class="hljs-string">&quot;r&quot;</span>) <span class="hljs-keyword">as</span> f:
<span class="hljs-meta">... </span>    categories = [s.strip() <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> f.readlines()]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Print top categories per image</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>top5_prob, top5_catid = torch.topk(probabilities, <span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(top5_prob.size(<span class="hljs-number">0</span>)):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(categories[top5_catid[i]], top5_prob[i].item())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prints class names and probabilities like:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># [(&#x27;Samoyed&#x27;, 0.6425196528434753), (&#x27;Pomeranian&#x27;, 0.04062102362513542), (&#x27;keeshond&#x27;, 0.03186424449086189), (&#x27;white wolf&#x27;, 0.01739676296710968), (&#x27;Eskimo dog&#x27;, 0.011717947199940681)]</span>`}}),D=new ve({}),G=new le({props:{code:"model = timm.create_model('swsl_resnet18', pretrained=True, num_classes=NUM_FINETUNE_CLASSES)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;swsl_resnet18&#x27;</span>, pretrained=<span class="hljs-literal">True</span>, num_classes=NUM_FINETUNE_CLASSES)'}}),O=new ve({}),J=new ve({}),W=new le({props:{code:`@article{DBLP:journals/corr/abs-1905-00546,
  author    = {I. Zeki Yalniz and
               Herv{\\'{e}} J{\\'{e}}gou and
               Kan Chen and
               Manohar Paluri and
               Dhruv Mahajan},
  title     = {Billion-scale semi-supervised learning for image classification},
  journal   = {CoRR},
  volume    = {abs/1905.00546},
  year      = {2019},
  url       = {http://arxiv.org/abs/1905.00546},
  archivePrefix = {arXiv},
  eprint    = {1905.00546},
  timestamp = {Mon, 28 Sep 2020 08:19:37 +0200},
  biburl    = {https://dblp.org/rec/journals/corr/abs-1905-00546.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}`,highlighted:`<span class="language-xml">@article</span><span class="hljs-template-variable">{DBLP:journals/corr/abs-1905-00546,
  author    = {I. Zeki Yalniz and
               Herv{\\&#x27;{e}</span><span class="language-xml">} J</span><span class="hljs-template-variable">{\\&#x27;{e}</span><span class="language-xml">}gou and
               Kan Chen and
               Manohar Paluri and
               Dhruv Mahajan},
  title     = </span><span class="hljs-template-variable">{Billion-scale semi-supervised learning for image classification}</span><span class="language-xml">,
  journal   = </span><span class="hljs-template-variable">{CoRR}</span><span class="language-xml">,
  volume    = </span><span class="hljs-template-variable">{abs/1905.00546}</span><span class="language-xml">,
  year      = </span><span class="hljs-template-variable">{2019}</span><span class="language-xml">,
  url       = </span><span class="hljs-template-variable">{http://arxiv.org/abs/1905.00546}</span><span class="language-xml">,
  archivePrefix = </span><span class="hljs-template-variable">{arXiv}</span><span class="language-xml">,
  eprint    = </span><span class="hljs-template-variable">{1905.00546}</span><span class="language-xml">,
  timestamp = </span><span class="hljs-template-variable">{Mon, 28 <span class="hljs-keyword">Sep</span> 2020 08:19:37 +0200}</span><span class="language-xml">,
  biburl    = </span><span class="hljs-template-variable">{https://dblp.org/rec/journals/corr/abs-1905-00546.bib}</span><span class="language-xml">,
  bibsource = </span><span class="hljs-template-variable">{dblp computer science bibliography, https://dblp.org}</span><span class="language-xml">
}</span>`}}),{c(){_=l("meta"),be=m(),j=l("h1"),E=l("a"),ne=l("span"),u(R.$$.fragment),Qe=m(),re=l("span"),Ve=i("SWSL ResNet"),_e=m(),f=l("p"),oe=l("strong"),es=i("Residual Networks"),ss=i(", or "),ie=l("strong"),as=i("ResNets"),ts=i(", learn residual functions with reference to the layer inputs, instead of learning unreferenced functions. Instead of hoping each few stacked layers directly fit a desired underlying mapping, residual nets let these layers fit a residual mapping. They stack "),H=l("a"),ls=i("residual blocks"),ns=i(" ontop of each other to form network: e.g. a ResNet-50 has fifty layers using these blocks."),je=m(),K=l("p"),rs=i("The models in this collection utilise semi-weakly supervised learning to improve the performance of the model. The approach brings important gains to standard architectures for image, video and fine-grained classification."),ye=m(),X=l("p"),os=i("Please note the CC-BY-NC 4.0 license on theses weights, non-commercial use only."),$e=m(),y=l("h2"),P=l("a"),pe=l("span"),u(L.$$.fragment),is=m(),me=l("span"),ps=i("How do I use this model on an image?"),ke=m(),Z=l("p"),ms=i("To load a pretrained model:"),xe=m(),u(M.$$.fragment),Ee=m(),Q=l("p"),hs=i("To load and preprocess the image:"),Pe=m(),u(B.$$.fragment),Se=m(),V=l("p"),cs=i("To get the model predictions:"),Ne=m(),u(Y.$$.fragment),Te=m(),ee=l("p"),fs=i("To get the top-5 predictions class names:"),Ie=m(),u(z.$$.fragment),Ae=m(),S=l("p"),us=i("Replace the model name with the variant you want to use, e.g. "),he=l("code"),gs=i("swsl_resnet18"),ds=i(". You can find the IDs in the model summaries at the top of this page."),qe=m(),N=l("p"),ws=i("To extract image features with this model, follow the "),se=l("a"),vs=i("timm feature extraction examples"),bs=i(", just change the name of the model you want to use."),Ce=m(),$=l("h2"),T=l("a"),ce=l("span"),u(D.$$.fragment),_s=m(),fe=l("span"),js=i("How do I finetune this model?"),Re=m(),ae=l("p"),ys=i("You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),He=m(),u(G.$$.fragment),Le=m(),I=l("p"),$s=i("To finetune on your own dataset, you have to write a training loop or adapt "),U=l("a"),ks=i(`timm\u2019s training
script`),xs=i(" to use your dataset."),Me=m(),k=l("h2"),A=l("a"),ue=l("span"),u(O.$$.fragment),Es=m(),ge=l("span"),Ps=i("How do I train this model?"),Be=m(),q=l("p"),Ss=i("You can follow the "),te=l("a"),Ns=i("timm recipe scripts"),Ts=i(" for training a new model afresh."),Ye=m(),x=l("h2"),C=l("a"),de=l("span"),u(J.$$.fragment),Is=m(),we=l("span"),As=i("Citation"),ze=m(),u(W.$$.fragment),this.h()},l(e){const t=ca('[data-svelte="svelte-1phssyn"]',document.head);_=n(t,"META",{name:!0,content:!0}),t.forEach(s),be=h(e),j=n(e,"H1",{class:!0});var Ge=o(j);E=n(Ge,"A",{id:!0,class:!0,href:!0});var Cs=o(E);ne=n(Cs,"SPAN",{});var Rs=o(ne);g(R.$$.fragment,Rs),Rs.forEach(s),Cs.forEach(s),Qe=h(Ge),re=n(Ge,"SPAN",{});var Hs=o(re);Ve=p(Hs,"SWSL ResNet"),Hs.forEach(s),Ge.forEach(s),_e=h(e),f=n(e,"P",{});var F=o(f);oe=n(F,"STRONG",{});var Ls=o(oe);es=p(Ls,"Residual Networks"),Ls.forEach(s),ss=p(F,", or "),ie=n(F,"STRONG",{});var Ms=o(ie);as=p(Ms,"ResNets"),Ms.forEach(s),ts=p(F,", learn residual functions with reference to the layer inputs, instead of learning unreferenced functions. Instead of hoping each few stacked layers directly fit a desired underlying mapping, residual nets let these layers fit a residual mapping. They stack "),H=n(F,"A",{href:!0,rel:!0});var Bs=o(H);ls=p(Bs,"residual blocks"),Bs.forEach(s),ns=p(F," ontop of each other to form network: e.g. a ResNet-50 has fifty layers using these blocks."),F.forEach(s),je=h(e),K=n(e,"P",{});var Ys=o(K);rs=p(Ys,"The models in this collection utilise semi-weakly supervised learning to improve the performance of the model. The approach brings important gains to standard architectures for image, video and fine-grained classification."),Ys.forEach(s),ye=h(e),X=n(e,"P",{});var zs=o(X);os=p(zs,"Please note the CC-BY-NC 4.0 license on theses weights, non-commercial use only."),zs.forEach(s),$e=h(e),y=n(e,"H2",{class:!0});var Ue=o(y);P=n(Ue,"A",{id:!0,class:!0,href:!0});var Ds=o(P);pe=n(Ds,"SPAN",{});var Gs=o(pe);g(L.$$.fragment,Gs),Gs.forEach(s),Ds.forEach(s),is=h(Ue),me=n(Ue,"SPAN",{});var Us=o(me);ps=p(Us,"How do I use this model on an image?"),Us.forEach(s),Ue.forEach(s),ke=h(e),Z=n(e,"P",{});var Os=o(Z);ms=p(Os,"To load a pretrained model:"),Os.forEach(s),xe=h(e),g(M.$$.fragment,e),Ee=h(e),Q=n(e,"P",{});var Js=o(Q);hs=p(Js,"To load and preprocess the image:"),Js.forEach(s),Pe=h(e),g(B.$$.fragment,e),Se=h(e),V=n(e,"P",{});var Ws=o(V);cs=p(Ws,"To get the model predictions:"),Ws.forEach(s),Ne=h(e),g(Y.$$.fragment,e),Te=h(e),ee=n(e,"P",{});var Fs=o(ee);fs=p(Fs,"To get the top-5 predictions class names:"),Fs.forEach(s),Ie=h(e),g(z.$$.fragment,e),Ae=h(e),S=n(e,"P",{});var Oe=o(S);us=p(Oe,"Replace the model name with the variant you want to use, e.g. "),he=n(Oe,"CODE",{});var Ks=o(he);gs=p(Ks,"swsl_resnet18"),Ks.forEach(s),ds=p(Oe,". You can find the IDs in the model summaries at the top of this page."),Oe.forEach(s),qe=h(e),N=n(e,"P",{});var Je=o(N);ws=p(Je,"To extract image features with this model, follow the "),se=n(Je,"A",{href:!0});var Xs=o(se);vs=p(Xs,"timm feature extraction examples"),Xs.forEach(s),bs=p(Je,", just change the name of the model you want to use."),Je.forEach(s),Ce=h(e),$=n(e,"H2",{class:!0});var We=o($);T=n(We,"A",{id:!0,class:!0,href:!0});var Zs=o(T);ce=n(Zs,"SPAN",{});var Qs=o(ce);g(D.$$.fragment,Qs),Qs.forEach(s),Zs.forEach(s),_s=h(We),fe=n(We,"SPAN",{});var Vs=o(fe);js=p(Vs,"How do I finetune this model?"),Vs.forEach(s),We.forEach(s),Re=h(e),ae=n(e,"P",{});var ea=o(ae);ys=p(ea,"You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),ea.forEach(s),He=h(e),g(G.$$.fragment,e),Le=h(e),I=n(e,"P",{});var Fe=o(I);$s=p(Fe,"To finetune on your own dataset, you have to write a training loop or adapt "),U=n(Fe,"A",{href:!0,rel:!0});var sa=o(U);ks=p(sa,`timm\u2019s training
script`),sa.forEach(s),xs=p(Fe," to use your dataset."),Fe.forEach(s),Me=h(e),k=n(e,"H2",{class:!0});var Ke=o(k);A=n(Ke,"A",{id:!0,class:!0,href:!0});var aa=o(A);ue=n(aa,"SPAN",{});var ta=o(ue);g(O.$$.fragment,ta),ta.forEach(s),aa.forEach(s),Es=h(Ke),ge=n(Ke,"SPAN",{});var la=o(ge);Ps=p(la,"How do I train this model?"),la.forEach(s),Ke.forEach(s),Be=h(e),q=n(e,"P",{});var Xe=o(q);Ss=p(Xe,"You can follow the "),te=n(Xe,"A",{href:!0});var na=o(te);Ns=p(na,"timm recipe scripts"),na.forEach(s),Ts=p(Xe," for training a new model afresh."),Xe.forEach(s),Ye=h(e),x=n(e,"H2",{class:!0});var Ze=o(x);C=n(Ze,"A",{id:!0,class:!0,href:!0});var ra=o(C);de=n(ra,"SPAN",{});var oa=o(de);g(J.$$.fragment,oa),oa.forEach(s),ra.forEach(s),Is=h(Ze),we=n(Ze,"SPAN",{});var ia=o(we);As=p(ia,"Citation"),ia.forEach(s),Ze.forEach(s),ze=h(e),g(W.$$.fragment,e),this.h()},h(){c(_,"name","hf:doc:metadata"),c(_,"content",JSON.stringify(da)),c(E,"id","swsl-resnet"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#swsl-resnet"),c(j,"class","relative group"),c(H,"href","https://paperswithcode.com/method/residual-block"),c(H,"rel","nofollow"),c(P,"id","how-do-i-use-this-model-on-an-image"),c(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(P,"href","#how-do-i-use-this-model-on-an-image"),c(y,"class","relative group"),c(se,"href","../feature_extraction"),c(T,"id","how-do-i-finetune-this-model"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#how-do-i-finetune-this-model"),c($,"class","relative group"),c(U,"href","https://github.com/rwightman/pytorch-image-models/blob/master/train.py"),c(U,"rel","nofollow"),c(A,"id","how-do-i-train-this-model"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#how-do-i-train-this-model"),c(k,"class","relative group"),c(te,"href","../scripts"),c(C,"id","citation"),c(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(C,"href","#citation"),c(x,"class","relative group")},m(e,t){a(document.head,_),r(e,be,t),r(e,j,t),a(j,E),a(E,ne),d(R,ne,null),a(j,Qe),a(j,re),a(re,Ve),r(e,_e,t),r(e,f,t),a(f,oe),a(oe,es),a(f,ss),a(f,ie),a(ie,as),a(f,ts),a(f,H),a(H,ls),a(f,ns),r(e,je,t),r(e,K,t),a(K,rs),r(e,ye,t),r(e,X,t),a(X,os),r(e,$e,t),r(e,y,t),a(y,P),a(P,pe),d(L,pe,null),a(y,is),a(y,me),a(me,ps),r(e,ke,t),r(e,Z,t),a(Z,ms),r(e,xe,t),d(M,e,t),r(e,Ee,t),r(e,Q,t),a(Q,hs),r(e,Pe,t),d(B,e,t),r(e,Se,t),r(e,V,t),a(V,cs),r(e,Ne,t),d(Y,e,t),r(e,Te,t),r(e,ee,t),a(ee,fs),r(e,Ie,t),d(z,e,t),r(e,Ae,t),r(e,S,t),a(S,us),a(S,he),a(he,gs),a(S,ds),r(e,qe,t),r(e,N,t),a(N,ws),a(N,se),a(se,vs),a(N,bs),r(e,Ce,t),r(e,$,t),a($,T),a(T,ce),d(D,ce,null),a($,_s),a($,fe),a(fe,js),r(e,Re,t),r(e,ae,t),a(ae,ys),r(e,He,t),d(G,e,t),r(e,Le,t),r(e,I,t),a(I,$s),a(I,U),a(U,ks),a(I,xs),r(e,Me,t),r(e,k,t),a(k,A),a(A,ue),d(O,ue,null),a(k,Es),a(k,ge),a(ge,Ps),r(e,Be,t),r(e,q,t),a(q,Ss),a(q,te),a(te,Ns),a(q,Ts),r(e,Ye,t),r(e,x,t),a(x,C),a(C,de),d(J,de,null),a(x,Is),a(x,we),a(we,As),r(e,ze,t),d(W,e,t),De=!0},p:fa,i(e){De||(w(R.$$.fragment,e),w(L.$$.fragment,e),w(M.$$.fragment,e),w(B.$$.fragment,e),w(Y.$$.fragment,e),w(z.$$.fragment,e),w(D.$$.fragment,e),w(G.$$.fragment,e),w(O.$$.fragment,e),w(J.$$.fragment,e),w(W.$$.fragment,e),De=!0)},o(e){v(R.$$.fragment,e),v(L.$$.fragment,e),v(M.$$.fragment,e),v(B.$$.fragment,e),v(Y.$$.fragment,e),v(z.$$.fragment,e),v(D.$$.fragment,e),v(G.$$.fragment,e),v(O.$$.fragment,e),v(J.$$.fragment,e),v(W.$$.fragment,e),De=!1},d(e){s(_),e&&s(be),e&&s(j),b(R),e&&s(_e),e&&s(f),e&&s(je),e&&s(K),e&&s(ye),e&&s(X),e&&s($e),e&&s(y),b(L),e&&s(ke),e&&s(Z),e&&s(xe),b(M,e),e&&s(Ee),e&&s(Q),e&&s(Pe),b(B,e),e&&s(Se),e&&s(V),e&&s(Ne),b(Y,e),e&&s(Te),e&&s(ee),e&&s(Ie),b(z,e),e&&s(Ae),e&&s(S),e&&s(qe),e&&s(N),e&&s(Ce),e&&s($),b(D),e&&s(Re),e&&s(ae),e&&s(He),b(G,e),e&&s(Le),e&&s(I),e&&s(Me),e&&s(k),b(O),e&&s(Be),e&&s(q),e&&s(Ye),e&&s(x),b(J),e&&s(ze),b(W,e)}}}const da={local:"swsl-resnet",sections:[{local:"how-do-i-use-this-model-on-an-image",title:"How do I use this model on an image?"},{local:"how-do-i-finetune-this-model",title:"How do I finetune this model?"},{local:"how-do-i-train-this-model",title:"How do I train this model?"},{local:"citation",title:"Citation"}],title:"SWSL ResNet"};function wa(qs){return ua(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ja extends pa{constructor(_){super();ma(this,_,wa,ga,ha,{})}}export{ja as default,da as metadata};
