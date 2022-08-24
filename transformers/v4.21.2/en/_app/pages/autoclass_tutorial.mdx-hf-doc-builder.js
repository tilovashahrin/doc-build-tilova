import{S as ma,i as da,s as $a,e as l,k as m,w as C,t as r,M as va,c as i,d as t,m as d,a as c,x as z,h as o,b as v,G as a,g as f,y as L,q as S,o as N,B as I,v as ka,L as ua}from"../chunks/vendor-hf-doc-builder.js";import{T as _a}from"../chunks/Tip-hf-doc-builder.js";import{I as Be}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as _e}from"../chunks/CodeBlock-hf-doc-builder.js";import{F as wa,M as ha}from"../chunks/Markdown-hf-doc-builder.js";function ba(Y){let n,b,p,k,g,_,D,q;return{c(){n=l("p"),b=r("Remember, architecture refers to the skeleton of the model and checkpoints are the weights for a given architecture. For example, "),p=l("a"),k=r("BERT"),g=r(" is an architecture, while "),_=l("code"),D=r("bert-base-uncased"),q=r(" is a checkpoint. Model is a general term that can mean either architecture or checkpoint."),this.h()},l(A){n=i(A,"P",{});var j=c(n);b=o(j,"Remember, architecture refers to the skeleton of the model and checkpoints are the weights for a given architecture. For example, "),p=i(j,"A",{href:!0,rel:!0});var E=c(p);k=o(E,"BERT"),E.forEach(t),g=o(j," is an architecture, while "),_=i(j,"CODE",{});var O=c(_);D=o(O,"bert-base-uncased"),O.forEach(t),q=o(j," is a checkpoint. Model is a general term that can mean either architecture or checkpoint."),j.forEach(t),this.h()},h(){v(p,"href","https://huggingface.co/bert-base-uncased"),v(p,"rel","nofollow")},m(A,j){f(A,n,j),a(n,b),a(n,p),a(p,k),a(n,g),a(n,_),a(_,D),a(n,q)},d(A){A&&t(n)}}}function ya(Y){let n,b,p,k,g,_,D,q,A,j,E,O,F,R,M,B,V,x,G,$,Q,T,Z,X,y,U,ee,P,W,te,J;return F=new _e({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),x=new _e({props:{code:`from transformers import AutoModelForTokenClassification

model = AutoModelForTokenClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),{c(){n=l("p"),b=r("Finally, the "),p=l("code"),k=r("AutoModelFor"),g=r(" classes let you load a pretrained model for a given task (see "),_=l("a"),D=r("here"),q=r(" for a complete list of available tasks). For example, load a model for sequence classification with "),A=l("a"),j=r("AutoModelForSequenceClassification.from_pretrained()"),E=r(":"),O=m(),C(F.$$.fragment),R=m(),M=l("p"),B=r("Easily reuse the same checkpoint to load an architecture for a different task:"),V=m(),C(x.$$.fragment),G=m(),$=l("p"),Q=r("Generally, we recommend using the "),T=l("code"),Z=r("AutoTokenizer"),X=r(" class and the "),y=l("code"),U=r("AutoModelFor"),ee=r(" class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),P=l("a"),W=r("tutorial"),te=r(", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),this.h()},l(s){n=i(s,"P",{});var h=c(n);b=o(h,"Finally, the "),p=i(h,"CODE",{});var oe=c(p);k=o(oe,"AutoModelFor"),oe.forEach(t),g=o(h," classes let you load a pretrained model for a given task (see "),_=i(h,"A",{href:!0});var ae=c(_);D=o(ae,"here"),ae.forEach(t),q=o(h," for a complete list of available tasks). For example, load a model for sequence classification with "),A=i(h,"A",{href:!0});var ne=c(A);j=o(ne,"AutoModelForSequenceClassification.from_pretrained()"),ne.forEach(t),E=o(h,":"),h.forEach(t),O=d(s),z(F.$$.fragment,s),R=d(s),M=i(s,"P",{});var re=c(M);B=o(re,"Easily reuse the same checkpoint to load an architecture for a different task:"),re.forEach(t),V=d(s),z(x.$$.fragment,s),G=d(s),$=i(s,"P",{});var w=c($);Q=o(w,"Generally, we recommend using the "),T=i(w,"CODE",{});var H=c(T);Z=o(H,"AutoTokenizer"),H.forEach(t),X=o(w," class and the "),y=i(w,"CODE",{});var se=c(y);U=o(se,"AutoModelFor"),se.forEach(t),ee=o(w," class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),P=i(w,"A",{href:!0});var K=c(P);W=o(K,"tutorial"),K.forEach(t),te=o(w,", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),w.forEach(t),this.h()},h(){v(_,"href","model_doc/auto"),v(A,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),v(P,"href","preprocessing")},m(s,h){f(s,n,h),a(n,b),a(n,p),a(p,k),a(n,g),a(n,_),a(_,D),a(n,q),a(n,A),a(A,j),a(n,E),f(s,O,h),L(F,s,h),f(s,R,h),f(s,M,h),a(M,B),f(s,V,h),L(x,s,h),f(s,G,h),f(s,$,h),a($,Q),a($,T),a(T,Z),a($,X),a($,y),a(y,U),a($,ee),a($,P),a(P,W),a($,te),J=!0},p:ua,i(s){J||(S(F.$$.fragment,s),S(x.$$.fragment,s),J=!0)},o(s){N(F.$$.fragment,s),N(x.$$.fragment,s),J=!1},d(s){s&&t(n),s&&t(O),I(F,s),s&&t(R),s&&t(M),s&&t(V),I(x,s),s&&t(G),s&&t($)}}}function ga(Y){let n,b;return n=new ha({props:{$$slots:{default:[ya]},$$scope:{ctx:Y}}}),{c(){C(n.$$.fragment)},l(p){z(n.$$.fragment,p)},m(p,k){L(n,p,k),b=!0},p(p,k){const g={};k&2&&(g.$$scope={dirty:k,ctx:p}),n.$set(g)},i(p){b||(S(n.$$.fragment,p),b=!0)},o(p){N(n.$$.fragment,p),b=!1},d(p){I(n,p)}}}function Aa(Y){let n,b,p,k,g,_,D,q,A,j,E,O,F,R,M,B,V,x,G,$,Q,T,Z,X,y,U,ee,P,W,te,J;return F=new _e({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),x=new _e({props:{code:`from transformers import TFAutoModelForTokenClassification

model = TFAutoModelForTokenClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),{c(){n=l("p"),b=r("Finally, the "),p=l("code"),k=r("TFAutoModelFor"),g=r(" classes let you load a pretrained model for a given task (see "),_=l("a"),D=r("here"),q=r(" for a complete list of available tasks). For example, load a model for sequence classification with "),A=l("a"),j=r("TFAutoModelForSequenceClassification.from_pretrained()"),E=r(":"),O=m(),C(F.$$.fragment),R=m(),M=l("p"),B=r("Easily reuse the same checkpoint to load an architecture for a different task:"),V=m(),C(x.$$.fragment),G=m(),$=l("p"),Q=r("Generally, we recommend using the "),T=l("code"),Z=r("AutoTokenizer"),X=r(" class and the "),y=l("code"),U=r("TFAutoModelFor"),ee=r(" class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),P=l("a"),W=r("tutorial"),te=r(", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),this.h()},l(s){n=i(s,"P",{});var h=c(n);b=o(h,"Finally, the "),p=i(h,"CODE",{});var oe=c(p);k=o(oe,"TFAutoModelFor"),oe.forEach(t),g=o(h," classes let you load a pretrained model for a given task (see "),_=i(h,"A",{href:!0});var ae=c(_);D=o(ae,"here"),ae.forEach(t),q=o(h," for a complete list of available tasks). For example, load a model for sequence classification with "),A=i(h,"A",{href:!0});var ne=c(A);j=o(ne,"TFAutoModelForSequenceClassification.from_pretrained()"),ne.forEach(t),E=o(h,":"),h.forEach(t),O=d(s),z(F.$$.fragment,s),R=d(s),M=i(s,"P",{});var re=c(M);B=o(re,"Easily reuse the same checkpoint to load an architecture for a different task:"),re.forEach(t),V=d(s),z(x.$$.fragment,s),G=d(s),$=i(s,"P",{});var w=c($);Q=o(w,"Generally, we recommend using the "),T=i(w,"CODE",{});var H=c(T);Z=o(H,"AutoTokenizer"),H.forEach(t),X=o(w," class and the "),y=i(w,"CODE",{});var se=c(y);U=o(se,"TFAutoModelFor"),se.forEach(t),ee=o(w," class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),P=i(w,"A",{href:!0});var K=c(P);W=o(K,"tutorial"),K.forEach(t),te=o(w,", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),w.forEach(t),this.h()},h(){v(_,"href","model_doc/auto"),v(A,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),v(P,"href","preprocessing")},m(s,h){f(s,n,h),a(n,b),a(n,p),a(p,k),a(n,g),a(n,_),a(_,D),a(n,q),a(n,A),a(A,j),a(n,E),f(s,O,h),L(F,s,h),f(s,R,h),f(s,M,h),a(M,B),f(s,V,h),L(x,s,h),f(s,G,h),f(s,$,h),a($,Q),a($,T),a(T,Z),a($,X),a($,y),a(y,U),a($,ee),a($,P),a(P,W),a($,te),J=!0},p:ua,i(s){J||(S(F.$$.fragment,s),S(x.$$.fragment,s),J=!0)},o(s){N(F.$$.fragment,s),N(x.$$.fragment,s),J=!1},d(s){s&&t(n),s&&t(O),I(F,s),s&&t(R),s&&t(M),s&&t(V),I(x,s),s&&t(G),s&&t($)}}}function ja(Y){let n,b;return n=new ha({props:{$$slots:{default:[Aa]},$$scope:{ctx:Y}}}),{c(){C(n.$$.fragment)},l(p){z(n.$$.fragment,p)},m(p,k){L(n,p,k),b=!0},p(p,k){const g={};k&2&&(g.$$scope={dirty:k,ctx:p}),n.$set(g)},i(p){b||(S(n.$$.fragment,p),b=!0)},o(p){N(n.$$.fragment,p),b=!1},d(p){I(n,p)}}}function Ea(Y){let n,b,p,k,g,_,D,q,A,j,E,O,F,R,M,B,V,x,G,$,Q,T,Z,X,y,U,ee,P,W,te,J,s,h,oe,ae,ne,re,w,H,se,K,dt,Se,$t,Ve,xe,vt,Ue,pe,kt,Te,_t,wt,We,we,Je,qe,bt,Ke,be,Qe,le,fe,Ne,ye,yt,Ie,gt,Xe,Me,At,Ye,ue,jt,Pe,Et,Ft,Ze,ge,et,ie,he,Oe,Ae,xt,De,Tt,tt,me,qt,Ce,Mt,Pt,at,de,Ct,ze,zt,Lt,st,je,rt,ce,$e,Ge,Ee,St,He,Nt,ot,ve,nt;return _=new Be({}),$=new _a({props:{$$slots:{default:[ba]},$$scope:{ctx:Y}}}),K=new Be({}),we=new _e({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),be=new _e({props:{code:`sequence = "In a hole in the ground there lived a hobbit."
print(tokenizer(sequence))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = <span class="hljs-string">&quot;In a hole in the ground there lived a hobbit.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer(sequence))
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: [<span class="hljs-number">101</span>, <span class="hljs-number">1999</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">4920</span>, <span class="hljs-number">1999</span>, <span class="hljs-number">1996</span>, <span class="hljs-number">2598</span>, <span class="hljs-number">2045</span>, <span class="hljs-number">2973</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">7570</span>, <span class="hljs-number">10322</span>, <span class="hljs-number">4183</span>, <span class="hljs-number">1012</span>, <span class="hljs-number">102</span>], 
 <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>], 
 <span class="hljs-string">&#x27;attention_mask&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]}`}}),ye=new Be({}),ge=new _e({props:{code:`from transformers import AutoFeatureExtractor

feature_extractor = AutoFeatureExtractor.from_pretrained(
    "ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition&quot;</span>
<span class="hljs-meta">... </span>)`}}),Ae=new Be({}),je=new _e({props:{code:`from transformers import AutoProcessor

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv2-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)`}}),Ee=new Be({}),ve=new wa({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ja],pytorch:[ga]},$$scope:{ctx:Y}}}),{c(){n=l("meta"),b=m(),p=l("h1"),k=l("a"),g=l("span"),C(_.$$.fragment),D=m(),q=l("span"),A=r("Load pretrained instances with an AutoClass"),j=m(),E=l("p"),O=r("With so many different Transformer architectures, it can be challenging to create one for your checkpoint. As a part of \u{1F917} Transformers core philosophy to make the library easy, simple and flexible to use, an "),F=l("code"),R=r("AutoClass"),M=r(" automatically infer and load the correct architecture from a given checkpoint. The "),B=l("code"),V=r("from_pretrained"),x=r(" method lets you quickly load a pretrained model for any architecture so you don\u2019t have to devote time and resources to train a model from scratch. Producing this type of checkpoint-agnostic code means if your code works for one checkpoint, it will work with another checkpoint - as long as it was trained for a similar task - even if the architecture is different."),G=m(),C($.$$.fragment),Q=m(),T=l("p"),Z=r("In this tutorial, learn to:"),X=m(),y=l("ul"),U=l("li"),ee=r("Load a pretrained tokenizer."),P=m(),W=l("li"),te=r("Load a pretrained feature extractor."),J=m(),s=l("li"),h=r("Load a pretrained processor."),oe=m(),ae=l("li"),ne=r("Load a pretrained model."),re=m(),w=l("h2"),H=l("a"),se=l("span"),C(K.$$.fragment),dt=m(),Se=l("span"),$t=r("AutoTokenizer"),Ve=m(),xe=l("p"),vt=r("Nearly every NLP task begins with a tokenizer. A tokenizer converts your input into a format that can be processed by the model."),Ue=m(),pe=l("p"),kt=r("Load a tokenizer with "),Te=l("a"),_t=r("AutoTokenizer.from_pretrained()"),wt=r(":"),We=m(),C(we.$$.fragment),Je=m(),qe=l("p"),bt=r("Then tokenize your input as shown below:"),Ke=m(),C(be.$$.fragment),Qe=m(),le=l("h2"),fe=l("a"),Ne=l("span"),C(ye.$$.fragment),yt=m(),Ie=l("span"),gt=r("AutoFeatureExtractor"),Xe=m(),Me=l("p"),At=r("For audio and vision tasks, a feature extractor processes the audio signal or image into the correct input format."),Ye=m(),ue=l("p"),jt=r("Load a feature extractor with "),Pe=l("a"),Et=r("AutoFeatureExtractor.from_pretrained()"),Ft=r(":"),Ze=m(),C(ge.$$.fragment),et=m(),ie=l("h2"),he=l("a"),Oe=l("span"),C(Ae.$$.fragment),xt=m(),De=l("span"),Tt=r("AutoProcessor"),tt=m(),me=l("p"),qt=r("Multimodal tasks require a processor that combines two types of preprocessing tools. For example, the "),Ce=l("a"),Mt=r("LayoutLMV2"),Pt=r(" model requires a feature extractor to handle images and a tokenizer to handle text; a processor combines both of them."),at=m(),de=l("p"),Ct=r("Load a processor with "),ze=l("a"),zt=r("AutoProcessor.from_pretrained()"),Lt=r(":"),st=m(),C(je.$$.fragment),rt=m(),ce=l("h2"),$e=l("a"),Ge=l("span"),C(Ee.$$.fragment),St=m(),He=l("span"),Nt=r("AutoModel"),ot=m(),C(ve.$$.fragment),this.h()},l(e){const u=va('[data-svelte="svelte-1phssyn"]',document.head);n=i(u,"META",{name:!0,content:!0}),u.forEach(t),b=d(e),p=i(e,"H1",{class:!0});var Fe=c(p);k=i(Fe,"A",{id:!0,class:!0,href:!0});var Re=c(k);g=i(Re,"SPAN",{});var It=c(g);z(_.$$.fragment,It),It.forEach(t),Re.forEach(t),D=d(Fe),q=i(Fe,"SPAN",{});var Ot=c(q);A=o(Ot,"Load pretrained instances with an AutoClass"),Ot.forEach(t),Fe.forEach(t),j=d(e),E=i(e,"P",{});var Le=c(E);O=o(Le,"With so many different Transformer architectures, it can be challenging to create one for your checkpoint. As a part of \u{1F917} Transformers core philosophy to make the library easy, simple and flexible to use, an "),F=i(Le,"CODE",{});var Dt=c(F);R=o(Dt,"AutoClass"),Dt.forEach(t),M=o(Le," automatically infer and load the correct architecture from a given checkpoint. The "),B=i(Le,"CODE",{});var Gt=c(B);V=o(Gt,"from_pretrained"),Gt.forEach(t),x=o(Le," method lets you quickly load a pretrained model for any architecture so you don\u2019t have to devote time and resources to train a model from scratch. Producing this type of checkpoint-agnostic code means if your code works for one checkpoint, it will work with another checkpoint - as long as it was trained for a similar task - even if the architecture is different."),Le.forEach(t),G=d(e),z($.$$.fragment,e),Q=d(e),T=i(e,"P",{});var Ht=c(T);Z=o(Ht,"In this tutorial, learn to:"),Ht.forEach(t),X=d(e),y=i(e,"UL",{});var ke=c(y);U=i(ke,"LI",{});var Rt=c(U);ee=o(Rt,"Load a pretrained tokenizer."),Rt.forEach(t),P=d(ke),W=i(ke,"LI",{});var Bt=c(W);te=o(Bt,"Load a pretrained feature extractor."),Bt.forEach(t),J=d(ke),s=i(ke,"LI",{});var Vt=c(s);h=o(Vt,"Load a pretrained processor."),Vt.forEach(t),oe=d(ke),ae=i(ke,"LI",{});var Ut=c(ae);ne=o(Ut,"Load a pretrained model."),Ut.forEach(t),ke.forEach(t),re=d(e),w=i(e,"H2",{class:!0});var lt=c(w);H=i(lt,"A",{id:!0,class:!0,href:!0});var Wt=c(H);se=i(Wt,"SPAN",{});var Jt=c(se);z(K.$$.fragment,Jt),Jt.forEach(t),Wt.forEach(t),dt=d(lt),Se=i(lt,"SPAN",{});var Kt=c(Se);$t=o(Kt,"AutoTokenizer"),Kt.forEach(t),lt.forEach(t),Ve=d(e),xe=i(e,"P",{});var Qt=c(xe);vt=o(Qt,"Nearly every NLP task begins with a tokenizer. A tokenizer converts your input into a format that can be processed by the model."),Qt.forEach(t),Ue=d(e),pe=i(e,"P",{});var it=c(pe);kt=o(it,"Load a tokenizer with "),Te=i(it,"A",{href:!0});var Xt=c(Te);_t=o(Xt,"AutoTokenizer.from_pretrained()"),Xt.forEach(t),wt=o(it,":"),it.forEach(t),We=d(e),z(we.$$.fragment,e),Je=d(e),qe=i(e,"P",{});var Yt=c(qe);bt=o(Yt,"Then tokenize your input as shown below:"),Yt.forEach(t),Ke=d(e),z(be.$$.fragment,e),Qe=d(e),le=i(e,"H2",{class:!0});var ct=c(le);fe=i(ct,"A",{id:!0,class:!0,href:!0});var Zt=c(fe);Ne=i(Zt,"SPAN",{});var ea=c(Ne);z(ye.$$.fragment,ea),ea.forEach(t),Zt.forEach(t),yt=d(ct),Ie=i(ct,"SPAN",{});var ta=c(Ie);gt=o(ta,"AutoFeatureExtractor"),ta.forEach(t),ct.forEach(t),Xe=d(e),Me=i(e,"P",{});var aa=c(Me);At=o(aa,"For audio and vision tasks, a feature extractor processes the audio signal or image into the correct input format."),aa.forEach(t),Ye=d(e),ue=i(e,"P",{});var pt=c(ue);jt=o(pt,"Load a feature extractor with "),Pe=i(pt,"A",{href:!0});var sa=c(Pe);Et=o(sa,"AutoFeatureExtractor.from_pretrained()"),sa.forEach(t),Ft=o(pt,":"),pt.forEach(t),Ze=d(e),z(ge.$$.fragment,e),et=d(e),ie=i(e,"H2",{class:!0});var ft=c(ie);he=i(ft,"A",{id:!0,class:!0,href:!0});var ra=c(he);Oe=i(ra,"SPAN",{});var oa=c(Oe);z(Ae.$$.fragment,oa),oa.forEach(t),ra.forEach(t),xt=d(ft),De=i(ft,"SPAN",{});var na=c(De);Tt=o(na,"AutoProcessor"),na.forEach(t),ft.forEach(t),tt=d(e),me=i(e,"P",{});var ut=c(me);qt=o(ut,"Multimodal tasks require a processor that combines two types of preprocessing tools. For example, the "),Ce=i(ut,"A",{href:!0});var la=c(Ce);Mt=o(la,"LayoutLMV2"),la.forEach(t),Pt=o(ut," model requires a feature extractor to handle images and a tokenizer to handle text; a processor combines both of them."),ut.forEach(t),at=d(e),de=i(e,"P",{});var ht=c(de);Ct=o(ht,"Load a processor with "),ze=i(ht,"A",{href:!0});var ia=c(ze);zt=o(ia,"AutoProcessor.from_pretrained()"),ia.forEach(t),Lt=o(ht,":"),ht.forEach(t),st=d(e),z(je.$$.fragment,e),rt=d(e),ce=i(e,"H2",{class:!0});var mt=c(ce);$e=i(mt,"A",{id:!0,class:!0,href:!0});var ca=c($e);Ge=i(ca,"SPAN",{});var pa=c(Ge);z(Ee.$$.fragment,pa),pa.forEach(t),ca.forEach(t),St=d(mt),He=i(mt,"SPAN",{});var fa=c(He);Nt=o(fa,"AutoModel"),fa.forEach(t),mt.forEach(t),ot=d(e),z(ve.$$.fragment,e),this.h()},h(){v(n,"name","hf:doc:metadata"),v(n,"content",JSON.stringify(Fa)),v(k,"id","load-pretrained-instances-with-an-autoclass"),v(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(k,"href","#load-pretrained-instances-with-an-autoclass"),v(p,"class","relative group"),v(H,"id","autotokenizer"),v(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(H,"href","#autotokenizer"),v(w,"class","relative group"),v(Te,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.AutoTokenizer.from_pretrained"),v(fe,"id","autofeatureextractor"),v(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(fe,"href","#autofeatureextractor"),v(le,"class","relative group"),v(Pe,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.AutoFeatureExtractor.from_pretrained"),v(he,"id","autoprocessor"),v(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(he,"href","#autoprocessor"),v(ie,"class","relative group"),v(Ce,"href","model_doc/layoutlmv2"),v(ze,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.AutoProcessor.from_pretrained"),v($e,"id","automodel"),v($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v($e,"href","#automodel"),v(ce,"class","relative group")},m(e,u){a(document.head,n),f(e,b,u),f(e,p,u),a(p,k),a(k,g),L(_,g,null),a(p,D),a(p,q),a(q,A),f(e,j,u),f(e,E,u),a(E,O),a(E,F),a(F,R),a(E,M),a(E,B),a(B,V),a(E,x),f(e,G,u),L($,e,u),f(e,Q,u),f(e,T,u),a(T,Z),f(e,X,u),f(e,y,u),a(y,U),a(U,ee),a(y,P),a(y,W),a(W,te),a(y,J),a(y,s),a(s,h),a(y,oe),a(y,ae),a(ae,ne),f(e,re,u),f(e,w,u),a(w,H),a(H,se),L(K,se,null),a(w,dt),a(w,Se),a(Se,$t),f(e,Ve,u),f(e,xe,u),a(xe,vt),f(e,Ue,u),f(e,pe,u),a(pe,kt),a(pe,Te),a(Te,_t),a(pe,wt),f(e,We,u),L(we,e,u),f(e,Je,u),f(e,qe,u),a(qe,bt),f(e,Ke,u),L(be,e,u),f(e,Qe,u),f(e,le,u),a(le,fe),a(fe,Ne),L(ye,Ne,null),a(le,yt),a(le,Ie),a(Ie,gt),f(e,Xe,u),f(e,Me,u),a(Me,At),f(e,Ye,u),f(e,ue,u),a(ue,jt),a(ue,Pe),a(Pe,Et),a(ue,Ft),f(e,Ze,u),L(ge,e,u),f(e,et,u),f(e,ie,u),a(ie,he),a(he,Oe),L(Ae,Oe,null),a(ie,xt),a(ie,De),a(De,Tt),f(e,tt,u),f(e,me,u),a(me,qt),a(me,Ce),a(Ce,Mt),a(me,Pt),f(e,at,u),f(e,de,u),a(de,Ct),a(de,ze),a(ze,zt),a(de,Lt),f(e,st,u),L(je,e,u),f(e,rt,u),f(e,ce,u),a(ce,$e),a($e,Ge),L(Ee,Ge,null),a(ce,St),a(ce,He),a(He,Nt),f(e,ot,u),L(ve,e,u),nt=!0},p(e,[u]){const Fe={};u&2&&(Fe.$$scope={dirty:u,ctx:e}),$.$set(Fe);const Re={};u&2&&(Re.$$scope={dirty:u,ctx:e}),ve.$set(Re)},i(e){nt||(S(_.$$.fragment,e),S($.$$.fragment,e),S(K.$$.fragment,e),S(we.$$.fragment,e),S(be.$$.fragment,e),S(ye.$$.fragment,e),S(ge.$$.fragment,e),S(Ae.$$.fragment,e),S(je.$$.fragment,e),S(Ee.$$.fragment,e),S(ve.$$.fragment,e),nt=!0)},o(e){N(_.$$.fragment,e),N($.$$.fragment,e),N(K.$$.fragment,e),N(we.$$.fragment,e),N(be.$$.fragment,e),N(ye.$$.fragment,e),N(ge.$$.fragment,e),N(Ae.$$.fragment,e),N(je.$$.fragment,e),N(Ee.$$.fragment,e),N(ve.$$.fragment,e),nt=!1},d(e){t(n),e&&t(b),e&&t(p),I(_),e&&t(j),e&&t(E),e&&t(G),I($,e),e&&t(Q),e&&t(T),e&&t(X),e&&t(y),e&&t(re),e&&t(w),I(K),e&&t(Ve),e&&t(xe),e&&t(Ue),e&&t(pe),e&&t(We),I(we,e),e&&t(Je),e&&t(qe),e&&t(Ke),I(be,e),e&&t(Qe),e&&t(le),I(ye),e&&t(Xe),e&&t(Me),e&&t(Ye),e&&t(ue),e&&t(Ze),I(ge,e),e&&t(et),e&&t(ie),I(Ae),e&&t(tt),e&&t(me),e&&t(at),e&&t(de),e&&t(st),I(je,e),e&&t(rt),e&&t(ce),I(Ee),e&&t(ot),I(ve,e)}}}const Fa={local:"load-pretrained-instances-with-an-autoclass",sections:[{local:"autotokenizer",title:"AutoTokenizer"},{local:"autofeatureextractor",title:"AutoFeatureExtractor"},{local:"autoprocessor",title:"AutoProcessor"},{local:"automodel",title:"AutoModel"}],title:"Load pretrained instances with an AutoClass"};function xa(Y){return ka(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class za extends ma{constructor(n){super();da(this,n,xa,Ea,$a,{})}}export{za as default,Fa as metadata};
