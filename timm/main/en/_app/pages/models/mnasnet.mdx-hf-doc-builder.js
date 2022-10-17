import{S as ts,i as ss,s as as,e as n,k as h,w as d,t as p,M as ns,c as o,d as t,m as c,a as l,x as u,h as m,b as i,G as s,g as r,y as g,L as os,q as w,o as v,B as _,v as ls}from"../../chunks/vendor-hf-doc-builder.js";import{I as ge}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ae}from"../../chunks/CodeBlock-hf-doc-builder.js";function rs(Pt){let j,we,b,E,ne,C,Qe,oe,Xe,ve,f,le,Je,Ke,H,We,Ze,V,et,tt,_e,y,P,re,L,st,ie,at,je,J,nt,be,z,ye,K,ot,$e,R,ke,W,lt,xe,B,Ee,Z,rt,Pe,G,Ae,A,it,pe,pt,mt,Ne,N,ht,ee,ct,ft,Se,$,S,me,Y,dt,he,ut,Te,te,gt,qe,U,Ie,T,wt,D,vt,_t,Me,k,q,ce,O,jt,fe,bt,Ce,I,yt,se,$t,kt,He,x,M,de,F,xt,ue,Et,Ve,Q,Le;return C=new ge({}),L=new ge({}),z=new ae({props:{code:`import timm
model = timm.create_model('mnasnet_100', pretrained=True)
model.eval()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> timm
<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;mnasnet_100&#x27;</span>, pretrained=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">eval</span>()`}}),R=new ae({props:{code:`import urllib
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tensor = transform(img).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># transform and add batch dimension</span>`}}),B=new ae({props:{code:`import torch
with torch.no_grad():
    out = model(tensor)
probabilities = torch.nn.functional.softmax(out[0], dim=0)
print(probabilities.shape)
# prints: torch.Size([1000])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    out = model(tensor)
<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.nn.functional.softmax(out[<span class="hljs-number">0</span>], dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(probabilities.shape)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prints: torch.Size([1000])</span>`}}),G=new ae({props:{code:`# Get imagenet class mappings
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># [(&#x27;Samoyed&#x27;, 0.6425196528434753), (&#x27;Pomeranian&#x27;, 0.04062102362513542), (&#x27;keeshond&#x27;, 0.03186424449086189), (&#x27;white wolf&#x27;, 0.01739676296710968), (&#x27;Eskimo dog&#x27;, 0.011717947199940681)]</span>`}}),Y=new ge({}),U=new ae({props:{code:"model = timm.create_model('mnasnet_100', pretrained=True, num_classes=NUM_FINETUNE_CLASSES)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;mnasnet_100&#x27;</span>, pretrained=<span class="hljs-literal">True</span>, num_classes=NUM_FINETUNE_CLASSES)'}}),O=new ge({}),F=new ge({}),Q=new ae({props:{code:`@misc{tan2019mnasnet,
      title={MnasNet: Platform-Aware Neural Architecture Search for Mobile}, 
      author={Mingxing Tan and Bo Chen and Ruoming Pang and Vijay Vasudevan and Mark Sandler and Andrew Howard and Quoc V. Le},
      year={2019},
      eprint={1807.11626},
      archivePrefix={arXiv},
      primaryClass={cs.CV}
}`,highlighted:`@misc{tan2019mnasnet,
      title={MnasNet: Platform-Aware Neural Architecture Search for Mobile}, 
      author={Mingxing Tan <span class="hljs-keyword">and </span><span class="hljs-keyword">Bo </span>Chen <span class="hljs-keyword">and </span>Ruoming Pang <span class="hljs-keyword">and </span>Vijay Vasudevan <span class="hljs-keyword">and </span>Mark Sandler <span class="hljs-keyword">and </span><span class="hljs-keyword">Andrew </span>Howard <span class="hljs-keyword">and </span>Quoc V. Le},
      year={<span class="hljs-number">2019</span>},
      eprint={<span class="hljs-number">1807</span>.<span class="hljs-number">11626</span>},
      archivePrefix={arXiv},
      primaryClass={cs.CV}
}`}}),{c(){j=n("meta"),we=h(),b=n("h1"),E=n("a"),ne=n("span"),d(C.$$.fragment),Qe=h(),oe=n("span"),Xe=p("MnasNet"),ve=h(),f=n("p"),le=n("strong"),Je=p("MnasNet"),Ke=p(" is a type of convolutional neural network optimized for mobile devices that is discovered through mobile neural architecture search, which explicitly incorporates model latency into the main objective so that the search can identify a model that achieves a good trade-off between accuracy and latency. The main building block is an "),H=n("a"),We=p("inverted residual block"),Ze=p(" (from "),V=n("a"),et=p("MobileNetV2"),tt=p(")."),_e=h(),y=n("h2"),P=n("a"),re=n("span"),d(L.$$.fragment),st=h(),ie=n("span"),at=p("How do I use this model on an image?"),je=h(),J=n("p"),nt=p("To load a pretrained model:"),be=h(),d(z.$$.fragment),ye=h(),K=n("p"),ot=p("To load and preprocess the image:"),$e=h(),d(R.$$.fragment),ke=h(),W=n("p"),lt=p("To get the model predictions:"),xe=h(),d(B.$$.fragment),Ee=h(),Z=n("p"),rt=p("To get the top-5 predictions class names:"),Pe=h(),d(G.$$.fragment),Ae=h(),A=n("p"),it=p("Replace the model name with the variant you want to use, e.g. "),pe=n("code"),pt=p("mnasnet_100"),mt=p(". You can find the IDs in the model summaries at the top of this page."),Ne=h(),N=n("p"),ht=p("To extract image features with this model, follow the "),ee=n("a"),ct=p("timm feature extraction examples"),ft=p(", just change the name of the model you want to use."),Se=h(),$=n("h2"),S=n("a"),me=n("span"),d(Y.$$.fragment),dt=h(),he=n("span"),ut=p("How do I finetune this model?"),Te=h(),te=n("p"),gt=p("You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),qe=h(),d(U.$$.fragment),Ie=h(),T=n("p"),wt=p("To finetune on your own dataset, you have to write a training loop or adapt "),D=n("a"),vt=p(`timm\u2019s training
script`),_t=p(" to use your dataset."),Me=h(),k=n("h2"),q=n("a"),ce=n("span"),d(O.$$.fragment),jt=h(),fe=n("span"),bt=p("How do I train this model?"),Ce=h(),I=n("p"),yt=p("You can follow the "),se=n("a"),$t=p("timm recipe scripts"),kt=p(" for training a new model afresh."),He=h(),x=n("h2"),M=n("a"),de=n("span"),d(F.$$.fragment),xt=h(),ue=n("span"),Et=p("Citation"),Ve=h(),d(Q.$$.fragment),this.h()},l(e){const a=ns('[data-svelte="svelte-1phssyn"]',document.head);j=o(a,"META",{name:!0,content:!0}),a.forEach(t),we=c(e),b=o(e,"H1",{class:!0});var ze=l(b);E=o(ze,"A",{id:!0,class:!0,href:!0});var At=l(E);ne=o(At,"SPAN",{});var Nt=l(ne);u(C.$$.fragment,Nt),Nt.forEach(t),At.forEach(t),Qe=c(ze),oe=o(ze,"SPAN",{});var St=l(oe);Xe=m(St,"MnasNet"),St.forEach(t),ze.forEach(t),ve=c(e),f=o(e,"P",{});var X=l(f);le=o(X,"STRONG",{});var Tt=l(le);Je=m(Tt,"MnasNet"),Tt.forEach(t),Ke=m(X," is a type of convolutional neural network optimized for mobile devices that is discovered through mobile neural architecture search, which explicitly incorporates model latency into the main objective so that the search can identify a model that achieves a good trade-off between accuracy and latency. The main building block is an "),H=o(X,"A",{href:!0,rel:!0});var qt=l(H);We=m(qt,"inverted residual block"),qt.forEach(t),Ze=m(X," (from "),V=o(X,"A",{href:!0,rel:!0});var It=l(V);et=m(It,"MobileNetV2"),It.forEach(t),tt=m(X,")."),X.forEach(t),_e=c(e),y=o(e,"H2",{class:!0});var Re=l(y);P=o(Re,"A",{id:!0,class:!0,href:!0});var Mt=l(P);re=o(Mt,"SPAN",{});var Ct=l(re);u(L.$$.fragment,Ct),Ct.forEach(t),Mt.forEach(t),st=c(Re),ie=o(Re,"SPAN",{});var Ht=l(ie);at=m(Ht,"How do I use this model on an image?"),Ht.forEach(t),Re.forEach(t),je=c(e),J=o(e,"P",{});var Vt=l(J);nt=m(Vt,"To load a pretrained model:"),Vt.forEach(t),be=c(e),u(z.$$.fragment,e),ye=c(e),K=o(e,"P",{});var Lt=l(K);ot=m(Lt,"To load and preprocess the image:"),Lt.forEach(t),$e=c(e),u(R.$$.fragment,e),ke=c(e),W=o(e,"P",{});var zt=l(W);lt=m(zt,"To get the model predictions:"),zt.forEach(t),xe=c(e),u(B.$$.fragment,e),Ee=c(e),Z=o(e,"P",{});var Rt=l(Z);rt=m(Rt,"To get the top-5 predictions class names:"),Rt.forEach(t),Pe=c(e),u(G.$$.fragment,e),Ae=c(e),A=o(e,"P",{});var Be=l(A);it=m(Be,"Replace the model name with the variant you want to use, e.g. "),pe=o(Be,"CODE",{});var Bt=l(pe);pt=m(Bt,"mnasnet_100"),Bt.forEach(t),mt=m(Be,". You can find the IDs in the model summaries at the top of this page."),Be.forEach(t),Ne=c(e),N=o(e,"P",{});var Ge=l(N);ht=m(Ge,"To extract image features with this model, follow the "),ee=o(Ge,"A",{href:!0});var Gt=l(ee);ct=m(Gt,"timm feature extraction examples"),Gt.forEach(t),ft=m(Ge,", just change the name of the model you want to use."),Ge.forEach(t),Se=c(e),$=o(e,"H2",{class:!0});var Ye=l($);S=o(Ye,"A",{id:!0,class:!0,href:!0});var Yt=l(S);me=o(Yt,"SPAN",{});var Ut=l(me);u(Y.$$.fragment,Ut),Ut.forEach(t),Yt.forEach(t),dt=c(Ye),he=o(Ye,"SPAN",{});var Dt=l(he);ut=m(Dt,"How do I finetune this model?"),Dt.forEach(t),Ye.forEach(t),Te=c(e),te=o(e,"P",{});var Ot=l(te);gt=m(Ot,"You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),Ot.forEach(t),qe=c(e),u(U.$$.fragment,e),Ie=c(e),T=o(e,"P",{});var Ue=l(T);wt=m(Ue,"To finetune on your own dataset, you have to write a training loop or adapt "),D=o(Ue,"A",{href:!0,rel:!0});var Ft=l(D);vt=m(Ft,`timm\u2019s training
script`),Ft.forEach(t),_t=m(Ue," to use your dataset."),Ue.forEach(t),Me=c(e),k=o(e,"H2",{class:!0});var De=l(k);q=o(De,"A",{id:!0,class:!0,href:!0});var Qt=l(q);ce=o(Qt,"SPAN",{});var Xt=l(ce);u(O.$$.fragment,Xt),Xt.forEach(t),Qt.forEach(t),jt=c(De),fe=o(De,"SPAN",{});var Jt=l(fe);bt=m(Jt,"How do I train this model?"),Jt.forEach(t),De.forEach(t),Ce=c(e),I=o(e,"P",{});var Oe=l(I);yt=m(Oe,"You can follow the "),se=o(Oe,"A",{href:!0});var Kt=l(se);$t=m(Kt,"timm recipe scripts"),Kt.forEach(t),kt=m(Oe," for training a new model afresh."),Oe.forEach(t),He=c(e),x=o(e,"H2",{class:!0});var Fe=l(x);M=o(Fe,"A",{id:!0,class:!0,href:!0});var Wt=l(M);de=o(Wt,"SPAN",{});var Zt=l(de);u(F.$$.fragment,Zt),Zt.forEach(t),Wt.forEach(t),xt=c(Fe),ue=o(Fe,"SPAN",{});var es=l(ue);Et=m(es,"Citation"),es.forEach(t),Fe.forEach(t),Ve=c(e),u(Q.$$.fragment,e),this.h()},h(){i(j,"name","hf:doc:metadata"),i(j,"content",JSON.stringify(is)),i(E,"id","mnasnet"),i(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(E,"href","#mnasnet"),i(b,"class","relative group"),i(H,"href","https://paperswithcode.com/method/inverted-residual-block"),i(H,"rel","nofollow"),i(V,"href","https://paperswithcode.com/method/mobilenetv2"),i(V,"rel","nofollow"),i(P,"id","how-do-i-use-this-model-on-an-image"),i(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(P,"href","#how-do-i-use-this-model-on-an-image"),i(y,"class","relative group"),i(ee,"href","../feature_extraction"),i(S,"id","how-do-i-finetune-this-model"),i(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(S,"href","#how-do-i-finetune-this-model"),i($,"class","relative group"),i(D,"href","https://github.com/rwightman/pytorch-image-models/blob/master/train.py"),i(D,"rel","nofollow"),i(q,"id","how-do-i-train-this-model"),i(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(q,"href","#how-do-i-train-this-model"),i(k,"class","relative group"),i(se,"href","../scripts"),i(M,"id","citation"),i(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(M,"href","#citation"),i(x,"class","relative group")},m(e,a){s(document.head,j),r(e,we,a),r(e,b,a),s(b,E),s(E,ne),g(C,ne,null),s(b,Qe),s(b,oe),s(oe,Xe),r(e,ve,a),r(e,f,a),s(f,le),s(le,Je),s(f,Ke),s(f,H),s(H,We),s(f,Ze),s(f,V),s(V,et),s(f,tt),r(e,_e,a),r(e,y,a),s(y,P),s(P,re),g(L,re,null),s(y,st),s(y,ie),s(ie,at),r(e,je,a),r(e,J,a),s(J,nt),r(e,be,a),g(z,e,a),r(e,ye,a),r(e,K,a),s(K,ot),r(e,$e,a),g(R,e,a),r(e,ke,a),r(e,W,a),s(W,lt),r(e,xe,a),g(B,e,a),r(e,Ee,a),r(e,Z,a),s(Z,rt),r(e,Pe,a),g(G,e,a),r(e,Ae,a),r(e,A,a),s(A,it),s(A,pe),s(pe,pt),s(A,mt),r(e,Ne,a),r(e,N,a),s(N,ht),s(N,ee),s(ee,ct),s(N,ft),r(e,Se,a),r(e,$,a),s($,S),s(S,me),g(Y,me,null),s($,dt),s($,he),s(he,ut),r(e,Te,a),r(e,te,a),s(te,gt),r(e,qe,a),g(U,e,a),r(e,Ie,a),r(e,T,a),s(T,wt),s(T,D),s(D,vt),s(T,_t),r(e,Me,a),r(e,k,a),s(k,q),s(q,ce),g(O,ce,null),s(k,jt),s(k,fe),s(fe,bt),r(e,Ce,a),r(e,I,a),s(I,yt),s(I,se),s(se,$t),s(I,kt),r(e,He,a),r(e,x,a),s(x,M),s(M,de),g(F,de,null),s(x,xt),s(x,ue),s(ue,Et),r(e,Ve,a),g(Q,e,a),Le=!0},p:os,i(e){Le||(w(C.$$.fragment,e),w(L.$$.fragment,e),w(z.$$.fragment,e),w(R.$$.fragment,e),w(B.$$.fragment,e),w(G.$$.fragment,e),w(Y.$$.fragment,e),w(U.$$.fragment,e),w(O.$$.fragment,e),w(F.$$.fragment,e),w(Q.$$.fragment,e),Le=!0)},o(e){v(C.$$.fragment,e),v(L.$$.fragment,e),v(z.$$.fragment,e),v(R.$$.fragment,e),v(B.$$.fragment,e),v(G.$$.fragment,e),v(Y.$$.fragment,e),v(U.$$.fragment,e),v(O.$$.fragment,e),v(F.$$.fragment,e),v(Q.$$.fragment,e),Le=!1},d(e){t(j),e&&t(we),e&&t(b),_(C),e&&t(ve),e&&t(f),e&&t(_e),e&&t(y),_(L),e&&t(je),e&&t(J),e&&t(be),_(z,e),e&&t(ye),e&&t(K),e&&t($e),_(R,e),e&&t(ke),e&&t(W),e&&t(xe),_(B,e),e&&t(Ee),e&&t(Z),e&&t(Pe),_(G,e),e&&t(Ae),e&&t(A),e&&t(Ne),e&&t(N),e&&t(Se),e&&t($),_(Y),e&&t(Te),e&&t(te),e&&t(qe),_(U,e),e&&t(Ie),e&&t(T),e&&t(Me),e&&t(k),_(O),e&&t(Ce),e&&t(I),e&&t(He),e&&t(x),_(F),e&&t(Ve),_(Q,e)}}}const is={local:"mnasnet",sections:[{local:"how-do-i-use-this-model-on-an-image",title:"How do I use this model on an image?"},{local:"how-do-i-finetune-this-model",title:"How do I finetune this model?"},{local:"how-do-i-train-this-model",title:"How do I train this model?"},{local:"citation",title:"Citation"}],title:"MnasNet"};function ps(Pt){return ls(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fs extends ts{constructor(j){super();ss(this,j,ps,rs,as,{})}}export{fs as default,is as metadata};
