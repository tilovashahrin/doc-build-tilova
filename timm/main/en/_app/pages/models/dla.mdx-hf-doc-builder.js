import{S as Qa,i as Za,s as et,e as n,k as i,w as f,t as m,M as at,c as l,d as a,m as p,a as o,x as g,h,b as c,G as t,g as r,y as u,L as tt,q as d,o as w,B as v,v as st}from"../../chunks/vendor-hf-doc-builder.js";import{I as ge}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ae}from"../../chunks/CodeBlock-hf-doc-builder.js";function rt(xa){let _,ue,y,x,te,L,We,se,Xe,de,E,Je,re,Ke,Qe,we,V,Ze,ve,$,A,ne,N,ea,le,aa,_e,W,ta,ye,C,$e,X,sa,be,Y,je,J,ra,ke,z,xe,K,na,Ee,G,Ae,P,la,oe,oa,ia,Pe,D,pa,Q,ma,ha,De,b,I,ie,R,ca,pe,fa,Ie,Z,ga,Se,M,Te,S,ua,U,da,wa,qe,j,T,me,B,va,he,_a,He,q,ya,ee,$a,ba,Le,k,H,ce,F,ja,fe,ka,Ne,O,Ce;return L=new ge({}),N=new ge({}),C=new ae({props:{code:`import timm
model = timm.create_model('dla102', pretrained=True)
model.eval()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> timm
<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;dla102&#x27;</span>, pretrained=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">eval</span>()`}}),Y=new ae({props:{code:`import urllib
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tensor = transform(img).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># transform and add batch dimension</span>`}}),z=new ae({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># [(&#x27;Samoyed&#x27;, 0.6425196528434753), (&#x27;Pomeranian&#x27;, 0.04062102362513542), (&#x27;keeshond&#x27;, 0.03186424449086189), (&#x27;white wolf&#x27;, 0.01739676296710968), (&#x27;Eskimo dog&#x27;, 0.011717947199940681)]</span>`}}),R=new ge({}),M=new ae({props:{code:"model = timm.create_model('dla102', pretrained=True, num_classes=NUM_FINETUNE_CLASSES)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;dla102&#x27;</span>, pretrained=<span class="hljs-literal">True</span>, num_classes=NUM_FINETUNE_CLASSES)'}}),B=new ge({}),F=new ge({}),O=new ae({props:{code:`@misc{yu2019deep,
      title={Deep Layer Aggregation}, 
      author={Fisher Yu and Dequan Wang and Evan Shelhamer and Trevor Darrell},
      year={2019},
      eprint={1707.06484},
      archivePrefix={arXiv},
      primaryClass={cs.CV}
}`,highlighted:`<span class="language-xml">@misc</span><span class="hljs-template-variable">{yu2019deep,
      title={Deep Layer Aggregation}</span><span class="language-xml">, 
      author=</span><span class="hljs-template-variable">{Fisher Yu and Dequan Wang and Evan Shelhamer and Trevor Darrell}</span><span class="language-xml">,
      year=</span><span class="hljs-template-variable">{2019}</span><span class="language-xml">,
      eprint=</span><span class="hljs-template-variable">{1707.06484}</span><span class="language-xml">,
      archivePrefix=</span><span class="hljs-template-variable">{arXiv}</span><span class="language-xml">,
      primaryClass=</span><span class="hljs-template-variable">{cs.CV}</span><span class="language-xml">
}</span>`}}),{c(){_=n("meta"),ue=i(),y=n("h1"),x=n("a"),te=n("span"),f(L.$$.fragment),We=i(),se=n("span"),Xe=m("Deep Layer Aggregation"),de=i(),E=n("p"),Je=m("Extending  \u201Cshallow\u201D skip connections, "),re=n("strong"),Ke=m("Dense Layer Aggregation (DLA)"),Qe=m(" incorporates more depth and sharing. The authors introduce two structures for deep layer aggregation (DLA): iterative deep aggregation (IDA) and hierarchical deep aggregation (HDA). These structures are expressed through an architectural framework, independent of the choice of backbone, for compatibility with current and future networks."),we=i(),V=n("p"),Ze=m("IDA focuses on fusing resolutions and scales while HDA focuses on merging features from all modules and channels. IDA follows the base hierarchy to refine resolution and aggregate scale stage-bystage. HDA assembles its own hierarchy of tree-structured connections that cross and merge stages to aggregate different levels of representation."),ve=i(),$=n("h2"),A=n("a"),ne=n("span"),f(N.$$.fragment),ea=i(),le=n("span"),aa=m("How do I use this model on an image?"),_e=i(),W=n("p"),ta=m("To load a pretrained model:"),ye=i(),f(C.$$.fragment),$e=i(),X=n("p"),sa=m("To load and preprocess the image:"),be=i(),f(Y.$$.fragment),je=i(),J=n("p"),ra=m("To get the model predictions:"),ke=i(),f(z.$$.fragment),xe=i(),K=n("p"),na=m("To get the top-5 predictions class names:"),Ee=i(),f(G.$$.fragment),Ae=i(),P=n("p"),la=m("Replace the model name with the variant you want to use, e.g. "),oe=n("code"),oa=m("dla102"),ia=m(". You can find the IDs in the model summaries at the top of this page."),Pe=i(),D=n("p"),pa=m("To extract image features with this model, follow the "),Q=n("a"),ma=m("timm feature extraction examples"),ha=m(", just change the name of the model you want to use."),De=i(),b=n("h2"),I=n("a"),ie=n("span"),f(R.$$.fragment),ca=i(),pe=n("span"),fa=m("How do I finetune this model?"),Ie=i(),Z=n("p"),ga=m("You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),Se=i(),f(M.$$.fragment),Te=i(),S=n("p"),ua=m("To finetune on your own dataset, you have to write a training loop or adapt "),U=n("a"),da=m(`timm\u2019s training
script`),wa=m(" to use your dataset."),qe=i(),j=n("h2"),T=n("a"),me=n("span"),f(B.$$.fragment),va=i(),he=n("span"),_a=m("How do I train this model?"),He=i(),q=n("p"),ya=m("You can follow the "),ee=n("a"),$a=m("timm recipe scripts"),ba=m(" for training a new model afresh."),Le=i(),k=n("h2"),H=n("a"),ce=n("span"),f(F.$$.fragment),ja=i(),fe=n("span"),ka=m("Citation"),Ne=i(),f(O.$$.fragment),this.h()},l(e){const s=at('[data-svelte="svelte-1phssyn"]',document.head);_=l(s,"META",{name:!0,content:!0}),s.forEach(a),ue=p(e),y=l(e,"H1",{class:!0});var Ye=o(y);x=l(Ye,"A",{id:!0,class:!0,href:!0});var Ea=o(x);te=l(Ea,"SPAN",{});var Aa=o(te);g(L.$$.fragment,Aa),Aa.forEach(a),Ea.forEach(a),We=p(Ye),se=l(Ye,"SPAN",{});var Pa=o(se);Xe=h(Pa,"Deep Layer Aggregation"),Pa.forEach(a),Ye.forEach(a),de=p(e),E=l(e,"P",{});var ze=o(E);Je=h(ze,"Extending  \u201Cshallow\u201D skip connections, "),re=l(ze,"STRONG",{});var Da=o(re);Ke=h(Da,"Dense Layer Aggregation (DLA)"),Da.forEach(a),Qe=h(ze," incorporates more depth and sharing. The authors introduce two structures for deep layer aggregation (DLA): iterative deep aggregation (IDA) and hierarchical deep aggregation (HDA). These structures are expressed through an architectural framework, independent of the choice of backbone, for compatibility with current and future networks."),ze.forEach(a),we=p(e),V=l(e,"P",{});var Ia=o(V);Ze=h(Ia,"IDA focuses on fusing resolutions and scales while HDA focuses on merging features from all modules and channels. IDA follows the base hierarchy to refine resolution and aggregate scale stage-bystage. HDA assembles its own hierarchy of tree-structured connections that cross and merge stages to aggregate different levels of representation."),Ia.forEach(a),ve=p(e),$=l(e,"H2",{class:!0});var Ge=o($);A=l(Ge,"A",{id:!0,class:!0,href:!0});var Sa=o(A);ne=l(Sa,"SPAN",{});var Ta=o(ne);g(N.$$.fragment,Ta),Ta.forEach(a),Sa.forEach(a),ea=p(Ge),le=l(Ge,"SPAN",{});var qa=o(le);aa=h(qa,"How do I use this model on an image?"),qa.forEach(a),Ge.forEach(a),_e=p(e),W=l(e,"P",{});var Ha=o(W);ta=h(Ha,"To load a pretrained model:"),Ha.forEach(a),ye=p(e),g(C.$$.fragment,e),$e=p(e),X=l(e,"P",{});var La=o(X);sa=h(La,"To load and preprocess the image:"),La.forEach(a),be=p(e),g(Y.$$.fragment,e),je=p(e),J=l(e,"P",{});var Na=o(J);ra=h(Na,"To get the model predictions:"),Na.forEach(a),ke=p(e),g(z.$$.fragment,e),xe=p(e),K=l(e,"P",{});var Ca=o(K);na=h(Ca,"To get the top-5 predictions class names:"),Ca.forEach(a),Ee=p(e),g(G.$$.fragment,e),Ae=p(e),P=l(e,"P",{});var Re=o(P);la=h(Re,"Replace the model name with the variant you want to use, e.g. "),oe=l(Re,"CODE",{});var Ya=o(oe);oa=h(Ya,"dla102"),Ya.forEach(a),ia=h(Re,". You can find the IDs in the model summaries at the top of this page."),Re.forEach(a),Pe=p(e),D=l(e,"P",{});var Me=o(D);pa=h(Me,"To extract image features with this model, follow the "),Q=l(Me,"A",{href:!0});var za=o(Q);ma=h(za,"timm feature extraction examples"),za.forEach(a),ha=h(Me,", just change the name of the model you want to use."),Me.forEach(a),De=p(e),b=l(e,"H2",{class:!0});var Ue=o(b);I=l(Ue,"A",{id:!0,class:!0,href:!0});var Ga=o(I);ie=l(Ga,"SPAN",{});var Ra=o(ie);g(R.$$.fragment,Ra),Ra.forEach(a),Ga.forEach(a),ca=p(Ue),pe=l(Ue,"SPAN",{});var Ma=o(pe);fa=h(Ma,"How do I finetune this model?"),Ma.forEach(a),Ue.forEach(a),Ie=p(e),Z=l(e,"P",{});var Ua=o(Z);ga=h(Ua,"You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),Ua.forEach(a),Se=p(e),g(M.$$.fragment,e),Te=p(e),S=l(e,"P",{});var Be=o(S);ua=h(Be,"To finetune on your own dataset, you have to write a training loop or adapt "),U=l(Be,"A",{href:!0,rel:!0});var Ba=o(U);da=h(Ba,`timm\u2019s training
script`),Ba.forEach(a),wa=h(Be," to use your dataset."),Be.forEach(a),qe=p(e),j=l(e,"H2",{class:!0});var Fe=o(j);T=l(Fe,"A",{id:!0,class:!0,href:!0});var Fa=o(T);me=l(Fa,"SPAN",{});var Oa=o(me);g(B.$$.fragment,Oa),Oa.forEach(a),Fa.forEach(a),va=p(Fe),he=l(Fe,"SPAN",{});var Va=o(he);_a=h(Va,"How do I train this model?"),Va.forEach(a),Fe.forEach(a),He=p(e),q=l(e,"P",{});var Oe=o(q);ya=h(Oe,"You can follow the "),ee=l(Oe,"A",{href:!0});var Wa=o(ee);$a=h(Wa,"timm recipe scripts"),Wa.forEach(a),ba=h(Oe," for training a new model afresh."),Oe.forEach(a),Le=p(e),k=l(e,"H2",{class:!0});var Ve=o(k);H=l(Ve,"A",{id:!0,class:!0,href:!0});var Xa=o(H);ce=l(Xa,"SPAN",{});var Ja=o(ce);g(F.$$.fragment,Ja),Ja.forEach(a),Xa.forEach(a),ja=p(Ve),fe=l(Ve,"SPAN",{});var Ka=o(fe);ka=h(Ka,"Citation"),Ka.forEach(a),Ve.forEach(a),Ne=p(e),g(O.$$.fragment,e),this.h()},h(){c(_,"name","hf:doc:metadata"),c(_,"content",JSON.stringify(nt)),c(x,"id","deep-layer-aggregation"),c(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(x,"href","#deep-layer-aggregation"),c(y,"class","relative group"),c(A,"id","how-do-i-use-this-model-on-an-image"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#how-do-i-use-this-model-on-an-image"),c($,"class","relative group"),c(Q,"href","../feature_extraction"),c(I,"id","how-do-i-finetune-this-model"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#how-do-i-finetune-this-model"),c(b,"class","relative group"),c(U,"href","https://github.com/rwightman/pytorch-image-models/blob/master/train.py"),c(U,"rel","nofollow"),c(T,"id","how-do-i-train-this-model"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#how-do-i-train-this-model"),c(j,"class","relative group"),c(ee,"href","../scripts"),c(H,"id","citation"),c(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(H,"href","#citation"),c(k,"class","relative group")},m(e,s){t(document.head,_),r(e,ue,s),r(e,y,s),t(y,x),t(x,te),u(L,te,null),t(y,We),t(y,se),t(se,Xe),r(e,de,s),r(e,E,s),t(E,Je),t(E,re),t(re,Ke),t(E,Qe),r(e,we,s),r(e,V,s),t(V,Ze),r(e,ve,s),r(e,$,s),t($,A),t(A,ne),u(N,ne,null),t($,ea),t($,le),t(le,aa),r(e,_e,s),r(e,W,s),t(W,ta),r(e,ye,s),u(C,e,s),r(e,$e,s),r(e,X,s),t(X,sa),r(e,be,s),u(Y,e,s),r(e,je,s),r(e,J,s),t(J,ra),r(e,ke,s),u(z,e,s),r(e,xe,s),r(e,K,s),t(K,na),r(e,Ee,s),u(G,e,s),r(e,Ae,s),r(e,P,s),t(P,la),t(P,oe),t(oe,oa),t(P,ia),r(e,Pe,s),r(e,D,s),t(D,pa),t(D,Q),t(Q,ma),t(D,ha),r(e,De,s),r(e,b,s),t(b,I),t(I,ie),u(R,ie,null),t(b,ca),t(b,pe),t(pe,fa),r(e,Ie,s),r(e,Z,s),t(Z,ga),r(e,Se,s),u(M,e,s),r(e,Te,s),r(e,S,s),t(S,ua),t(S,U),t(U,da),t(S,wa),r(e,qe,s),r(e,j,s),t(j,T),t(T,me),u(B,me,null),t(j,va),t(j,he),t(he,_a),r(e,He,s),r(e,q,s),t(q,ya),t(q,ee),t(ee,$a),t(q,ba),r(e,Le,s),r(e,k,s),t(k,H),t(H,ce),u(F,ce,null),t(k,ja),t(k,fe),t(fe,ka),r(e,Ne,s),u(O,e,s),Ce=!0},p:tt,i(e){Ce||(d(L.$$.fragment,e),d(N.$$.fragment,e),d(C.$$.fragment,e),d(Y.$$.fragment,e),d(z.$$.fragment,e),d(G.$$.fragment,e),d(R.$$.fragment,e),d(M.$$.fragment,e),d(B.$$.fragment,e),d(F.$$.fragment,e),d(O.$$.fragment,e),Ce=!0)},o(e){w(L.$$.fragment,e),w(N.$$.fragment,e),w(C.$$.fragment,e),w(Y.$$.fragment,e),w(z.$$.fragment,e),w(G.$$.fragment,e),w(R.$$.fragment,e),w(M.$$.fragment,e),w(B.$$.fragment,e),w(F.$$.fragment,e),w(O.$$.fragment,e),Ce=!1},d(e){a(_),e&&a(ue),e&&a(y),v(L),e&&a(de),e&&a(E),e&&a(we),e&&a(V),e&&a(ve),e&&a($),v(N),e&&a(_e),e&&a(W),e&&a(ye),v(C,e),e&&a($e),e&&a(X),e&&a(be),v(Y,e),e&&a(je),e&&a(J),e&&a(ke),v(z,e),e&&a(xe),e&&a(K),e&&a(Ee),v(G,e),e&&a(Ae),e&&a(P),e&&a(Pe),e&&a(D),e&&a(De),e&&a(b),v(R),e&&a(Ie),e&&a(Z),e&&a(Se),v(M,e),e&&a(Te),e&&a(S),e&&a(qe),e&&a(j),v(B),e&&a(He),e&&a(q),e&&a(Le),e&&a(k),v(F),e&&a(Ne),v(O,e)}}}const nt={local:"deep-layer-aggregation",sections:[{local:"how-do-i-use-this-model-on-an-image",title:"How do I use this model on an image?"},{local:"how-do-i-finetune-this-model",title:"How do I finetune this model?"},{local:"how-do-i-train-this-model",title:"How do I train this model?"},{local:"citation",title:"Citation"}],title:"Deep Layer Aggregation"};function lt(xa){return st(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mt extends Qa{constructor(_){super();Za(this,_,lt,rt,et,{})}}export{mt as default,nt as metadata};
