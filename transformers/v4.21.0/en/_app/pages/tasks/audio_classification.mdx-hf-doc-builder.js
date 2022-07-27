import{S as Ot,i as Ft,s as Wt,e as r,k as h,w,t,M as Nt,c as o,d as s,m as u,a as i,x,h as n,b as d,G as a,g as p,y as E,q as y,o as k,B as A,v as Rt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Xs}from"../../chunks/Tip-hf-doc-builder.js";import{Y as Vt}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Xa}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as W}from"../../chunks/CodeBlock-hf-doc-builder.js";import{F as zt,M as Yt}from"../../chunks/Markdown-hf-doc-builder.js";function Ut(N){let c,b,m,_,v;return{c(){c=r("p"),b=t("See the audio classification "),m=r("a"),_=t("task page"),v=t(" for more information about its associated models, datasets, and metrics."),this.h()},l(g){c=o(g,"P",{});var $=i(c);b=n($,"See the audio classification "),m=o($,"A",{href:!0,rel:!0});var q=i(m);_=n(q,"task page"),q.forEach(s),v=n($," for more information about its associated models, datasets, and metrics."),$.forEach(s),this.h()},h(){d(m,"href","https://huggingface.co/tasks/audio-classification"),d(m,"rel","nofollow")},m(g,$){p(g,c,$),a(c,b),a(c,m),a(m,_),a(c,v)},d(g){g&&s(c)}}}function Ht(N){let c,b,m,_,v,g,$,q;return{c(){c=r("p"),b=t("If you aren\u2019t familiar with fine-tuning a model with the "),m=r("a"),_=t("Trainer"),v=t(", take a look at the basic tutorial "),g=r("a"),$=t("here"),q=t("!"),this.h()},l(T){c=o(T,"P",{});var P=i(c);b=n(P,"If you aren\u2019t familiar with fine-tuning a model with the "),m=o(P,"A",{href:!0});var D=i(m);_=n(D,"Trainer"),D.forEach(s),v=n(P,", take a look at the basic tutorial "),g=o(P,"A",{href:!0});var B=i(g);$=n(B,"here"),B.forEach(s),q=n(P,"!"),P.forEach(s),this.h()},h(){d(m,"href","/docs/transformers/v4.21.0/en/main_classes/trainer#transformers.Trainer"),d(g,"href","../training#finetune-with-trainer")},m(T,P){p(T,c,P),a(c,b),a(c,m),a(m,_),a(c,v),a(c,g),a(g,$),a(c,q)},d(T){T&&s(c)}}}function Bt(N){let c,b,m,_,v,g,$,q,T,P,D,B,G,M,R,L,X,J,je,we,I,xe,Z,me,V,he,S,z,Y,K,Ee,ee,Q,re;return $=new W({props:{code:`from transformers import AutoModelForAudioClassification, TrainingArguments, Trainer

num_labels = len(id2label)
model = AutoModelForAudioClassification.from_pretrained(
    "facebook/wav2vec2-base", num_labels=num_labels, label2id=label2id, id2label=id2label
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForAudioClassification, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForAudioClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>, num_labels=num_labels, label2id=label2id, id2label=id2label
<span class="hljs-meta">... </span>)`}}),T=new Xs({props:{$$slots:{default:[Ht]},$$scope:{ctx:N}}}),Q=new W({props:{code:`training_args = TrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",
    save_strategy="epoch",
    learning_rate=3e-5,
    num_train_epochs=5,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=encoded_minds["train"],
    eval_dataset=encoded_minds["test"],
    tokenizer=feature_extractor,
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
<span class="hljs-meta">... </span>    save_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">3e-5</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">5</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=encoded_minds[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=encoded_minds[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=feature_extractor,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){c=r("p"),b=t("Load Wav2Vec2 with "),m=r("a"),_=t("AutoModelForAudioClassification"),v=t(". Specify the number of labels, and pass the model the mapping between label number and label class:"),g=h(),w($.$$.fragment),q=h(),w(T.$$.fragment),P=h(),D=r("p"),B=t("At this point, only three steps remain:"),G=h(),M=r("ol"),R=r("li"),L=t("Define your training hyperparameters in "),X=r("a"),J=t("TrainingArguments"),je=t("."),we=h(),I=r("li"),xe=t("Pass the training arguments to "),Z=r("a"),me=t("Trainer"),V=t(" along with the model, datasets, and feature extractor."),he=h(),S=r("li"),z=t("Call "),Y=r("a"),K=t("train()"),Ee=t(" to fine-tune your model."),ee=h(),w(Q.$$.fragment),this.h()},l(f){c=o(f,"P",{});var j=i(c);b=n(j,"Load Wav2Vec2 with "),m=o(j,"A",{href:!0});var F=i(m);_=n(F,"AutoModelForAudioClassification"),F.forEach(s),v=n(j,". Specify the number of labels, and pass the model the mapping between label number and label class:"),j.forEach(s),g=u(f),x($.$$.fragment,f),q=u(f),x(T.$$.fragment,f),P=u(f),D=o(f,"P",{});var ze=i(D);B=n(ze,"At this point, only three steps remain:"),ze.forEach(s),G=u(f),M=o(f,"OL",{});var ae=i(M);R=o(ae,"LI",{});var oe=i(R);L=n(oe,"Define your training hyperparameters in "),X=o(oe,"A",{href:!0});var se=i(X);J=n(se,"TrainingArguments"),se.forEach(s),je=n(oe,"."),oe.forEach(s),we=u(ae),I=o(ae,"LI",{});var ie=i(I);xe=n(ie,"Pass the training arguments to "),Z=o(ie,"A",{href:!0});var pe=i(Z);me=n(pe,"Trainer"),pe.forEach(s),V=n(ie," along with the model, datasets, and feature extractor."),ie.forEach(s),he=u(ae),S=o(ae,"LI",{});var ue=i(S);z=n(ue,"Call "),Y=o(ue,"A",{href:!0});var ye=i(Y);K=n(ye,"train()"),ye.forEach(s),Ee=n(ue," to fine-tune your model."),ue.forEach(s),ae.forEach(s),ee=u(f),x(Q.$$.fragment,f),this.h()},h(){d(m,"href","/docs/transformers/v4.21.0/en/model_doc/auto#transformers.AutoModelForAudioClassification"),d(X,"href","/docs/transformers/v4.21.0/en/main_classes/trainer#transformers.TrainingArguments"),d(Z,"href","/docs/transformers/v4.21.0/en/main_classes/trainer#transformers.Trainer"),d(Y,"href","/docs/transformers/v4.21.0/en/main_classes/trainer#transformers.Trainer.train")},m(f,j){p(f,c,j),a(c,b),a(c,m),a(m,_),a(c,v),p(f,g,j),E($,f,j),p(f,q,j),E(T,f,j),p(f,P,j),p(f,D,j),a(D,B),p(f,G,j),p(f,M,j),a(M,R),a(R,L),a(R,X),a(X,J),a(R,je),a(M,we),a(M,I),a(I,xe),a(I,Z),a(Z,me),a(I,V),a(M,he),a(M,S),a(S,z),a(S,Y),a(Y,K),a(S,Ee),p(f,ee,j),E(Q,f,j),re=!0},p(f,j){const F={};j&2&&(F.$$scope={dirty:j,ctx:f}),T.$set(F)},i(f){re||(y($.$$.fragment,f),y(T.$$.fragment,f),y(Q.$$.fragment,f),re=!0)},o(f){k($.$$.fragment,f),k(T.$$.fragment,f),k(Q.$$.fragment,f),re=!1},d(f){f&&s(c),f&&s(g),A($,f),f&&s(q),A(T,f),f&&s(P),f&&s(D),f&&s(G),f&&s(M),f&&s(ee),A(Q,f)}}}function Gt(N){let c,b;return c=new Yt({props:{$$slots:{default:[Bt]},$$scope:{ctx:N}}}),{c(){w(c.$$.fragment)},l(m){x(c.$$.fragment,m)},m(m,_){E(c,m,_),b=!0},p(m,_){const v={};_&2&&(v.$$scope={dirty:_,ctx:m}),c.$set(v)},i(m){b||(y(c.$$.fragment,m),b=!0)},o(m){k(c.$$.fragment,m),b=!1},d(m){A(c,m)}}}function Jt(N){let c,b,m,_,v;return{c(){c=r("p"),b=t("For a more in-depth example of how to fine-tune a model for audio classification, take a look at the corresponding "),m=r("a"),_=t("PyTorch notebook"),v=t("."),this.h()},l(g){c=o(g,"P",{});var $=i(c);b=n($,"For a more in-depth example of how to fine-tune a model for audio classification, take a look at the corresponding "),m=o($,"A",{href:!0,rel:!0});var q=i(m);_=n(q,"PyTorch notebook"),q.forEach(s),v=n($,"."),$.forEach(s),this.h()},h(){d(m,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/audio_classification.ipynb"),d(m,"rel","nofollow")},m(g,$){p(g,c,$),a(c,b),a(c,m),a(m,_),a(c,v)},d(g){g&&s(c)}}}function Kt(N){let c,b,m,_,v,g,$,q,T,P,D,B,G,M,R,L,X,J,je,we,I,xe,Z,me,V,he,S,z,Y,K,Ee,ee,Q,re,f,j,F,ze,ae,oe,se,ie,pe,ue,ye,ke,va,Ye,Za,ja,Ae,wa,O,es,Ze,as,ss,ea,ts,ns,aa,ls,rs,sa,os,is,xa,qe,Ea,Ue,ps,ya,Te,ka,U,cs,ta,fs,ms,na,hs,us,la,ds,gs,Aa,Pe,qa,He,_s,Ta,De,Pa,te,$s,ra,bs,vs,oa,js,ws,Da,ce,de,ia,Se,xs,pa,Es,Sa,Be,ys,Ca,Ce,Ia,ge,ks,Ie,As,qs,Ma,Me,La,Ge,Ts,Oa,ne,Le,Ps,ca,Ds,Ss,Cs,Oe,Is,Je,Ms,Ls,Os,fa,Fs,Fa,Fe,Wa,C,Ws,We,Ns,Rs,ma,Vs,zs,ha,Ys,Us,ua,Hs,Bs,da,Gs,Js,Na,Ne,Ra,fe,_e,ga,Re,Ks,_a,Qs,Va,$e,za,be,Ya;return g=new Xa({}),D=new Vt({props:{id:"KWwzcmG98Ds"}}),V=new Xs({props:{$$slots:{default:[Ut]},$$scope:{ctx:N}}}),K=new Xa({}),se=new W({props:{code:`from datasets import load_dataset, Audio

minds = load_dataset("PolyAI/minds14", name="en-US", split="train")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Audio

<span class="hljs-meta">&gt;&gt;&gt; </span>minds = load_dataset(<span class="hljs-string">&quot;PolyAI/minds14&quot;</span>, name=<span class="hljs-string">&quot;en-US&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)`}}),ke=new W({props:{code:"minds = minds.train_test_split(test_size=0.2)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>minds = minds.train_test_split(test_size=<span class="hljs-number">0.2</span>)'}}),Ae=new W({props:{code:"minds",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>minds
DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;path&#x27;</span>, <span class="hljs-string">&#x27;audio&#x27;</span>, <span class="hljs-string">&#x27;transcription&#x27;</span>, <span class="hljs-string">&#x27;english_transcription&#x27;</span>, <span class="hljs-string">&#x27;intent_class&#x27;</span>, <span class="hljs-string">&#x27;lang_id&#x27;</span>],
        num_rows: <span class="hljs-number">450</span>
    })
    test: Dataset({
        features: [<span class="hljs-string">&#x27;path&#x27;</span>, <span class="hljs-string">&#x27;audio&#x27;</span>, <span class="hljs-string">&#x27;transcription&#x27;</span>, <span class="hljs-string">&#x27;english_transcription&#x27;</span>, <span class="hljs-string">&#x27;intent_class&#x27;</span>, <span class="hljs-string">&#x27;lang_id&#x27;</span>],
        num_rows: <span class="hljs-number">113</span>
    })
})`}}),qe=new W({props:{code:'minds = minds.remove_columns(["path", "transcription", "english_transcription", "lang_id"])',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>minds = minds.remove_columns([<span class="hljs-string">&quot;path&quot;</span>, <span class="hljs-string">&quot;transcription&quot;</span>, <span class="hljs-string">&quot;english_transcription&quot;</span>, <span class="hljs-string">&quot;lang_id&quot;</span>])'}}),Te=new W({props:{code:'minds["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>minds[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;audio&#x27;</span>: {<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">0.</span>        ,  <span class="hljs-number">0.</span>        ,  <span class="hljs-number">0.</span>        , ..., -<span class="hljs-number">0.00048828</span>,
         -<span class="hljs-number">0.00024414</span>, -<span class="hljs-number">0.00024414</span>], dtype=float32),
  <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~APP_ERROR/602b9a5fbb1e6d0fbce91f52.wav&#x27;</span>,
  <span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">8000</span>},
 <span class="hljs-string">&#x27;intent_class&#x27;</span>: <span class="hljs-number">2</span>}`}}),Pe=new W({props:{code:`labels = minds["train"].features["intent_class"].names
label2id, id2label = dict(), dict()
for i, label in enumerate(labels):
    label2id[label] = str(i)
    id2label[str(i)] = label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = minds[<span class="hljs-string">&quot;train&quot;</span>].features[<span class="hljs-string">&quot;intent_class&quot;</span>].names
<span class="hljs-meta">&gt;&gt;&gt; </span>label2id, id2label = <span class="hljs-built_in">dict</span>(), <span class="hljs-built_in">dict</span>()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i, label <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(labels):
<span class="hljs-meta">... </span>    label2id[label] = <span class="hljs-built_in">str</span>(i)
<span class="hljs-meta">... </span>    id2label[<span class="hljs-built_in">str</span>(i)] = label`}}),De=new W({props:{code:"id2label[str(2)]",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>id2label[<span class="hljs-built_in">str</span>(<span class="hljs-number">2</span>)]
<span class="hljs-string">&#x27;app_error&#x27;</span>`}}),Se=new Xa({}),Ce=new W({props:{code:`from transformers import AutoFeatureExtractor

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/wav2vec2-base")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>)`}}),Me=new W({props:{code:`minds = minds.cast_column("audio", Audio(sampling_rate=16_000))
minds["train"][0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>minds = minds.cast_column(<span class="hljs-string">&quot;audio&quot;</span>, Audio(sampling_rate=<span class="hljs-number">16_000</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>minds[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;audio&#x27;</span>: {<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">2.2098757e-05</span>,  <span class="hljs-number">4.6582241e-05</span>, -<span class="hljs-number">2.2803260e-05</span>, ...,
         -<span class="hljs-number">2.8419291e-04</span>, -<span class="hljs-number">2.3305941e-04</span>, -<span class="hljs-number">1.1425107e-04</span>], dtype=float32),
  <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~APP_ERROR/602b9a5fbb1e6d0fbce91f52.wav&#x27;</span>,
  <span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">16000</span>},
 <span class="hljs-string">&#x27;intent_class&#x27;</span>: <span class="hljs-number">2</span>}`}}),Fe=new W({props:{code:`def preprocess_function(examples):
    audio_arrays = [x["array"] for x in examples["audio"]]
    inputs = feature_extractor(
        audio_arrays, sampling_rate=feature_extractor.sampling_rate, max_length=16000, truncation=True
    )
    return inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    audio_arrays = [x[<span class="hljs-string">&quot;array&quot;</span>] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;audio&quot;</span>]]
<span class="hljs-meta">... </span>    inputs = feature_extractor(
<span class="hljs-meta">... </span>        audio_arrays, sampling_rate=feature_extractor.sampling_rate, max_length=<span class="hljs-number">16000</span>, truncation=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> inputs`}}),Ne=new W({props:{code:`encoded_minds = minds.map(preprocess_function, remove_columns="audio", batched=True)
encoded_minds = encoded_minds.rename_column("intent_class", "label")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_minds = minds.<span class="hljs-built_in">map</span>(preprocess_function, remove_columns=<span class="hljs-string">&quot;audio&quot;</span>, batched=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_minds = encoded_minds.rename_column(<span class="hljs-string">&quot;intent_class&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>)`}}),Re=new Xa({}),$e=new zt({props:{pytorch:!0,tensorflow:!1,jax:!1,$$slots:{pytorch:[Gt]},$$scope:{ctx:N}}}),be=new Xs({props:{$$slots:{default:[Jt]},$$scope:{ctx:N}}}),{c(){c=r("meta"),b=h(),m=r("h1"),_=r("a"),v=r("span"),w(g.$$.fragment),$=h(),q=r("span"),T=t("Audio classification"),P=h(),w(D.$$.fragment),B=h(),G=r("p"),M=t("Audio classification assigns a label or class to audio data. It is similar to text classification, except an audio input is continuous and must be discretized, whereas text can be split into tokens. Some practical applications of audio classification include identifying intent, speakers, and even animal species by their sounds."),R=h(),L=r("p"),X=t("This guide will show you how to fine-tune "),J=r("a"),je=t("Wav2Vec2"),we=t(" on the "),I=r("a"),xe=t("MInDS-14"),Z=t(" to classify intent."),me=h(),w(V.$$.fragment),he=h(),S=r("h2"),z=r("a"),Y=r("span"),w(K.$$.fragment),Ee=h(),ee=r("span"),Q=t("Load MInDS-14 dataset"),re=h(),f=r("p"),j=t("Load the "),F=r("a"),ze=t("MInDS-14"),ae=t(" from the \u{1F917} Datasets library:"),oe=h(),w(se.$$.fragment),ie=h(),pe=r("p"),ue=t("Split this dataset into a train and test set:"),ye=h(),w(ke.$$.fragment),va=h(),Ye=r("p"),Za=t("Then take a look at the dataset:"),ja=h(),w(Ae.$$.fragment),wa=h(),O=r("p"),es=t("While the dataset contains a lot of other useful information, like "),Ze=r("code"),as=t("lang_id"),ss=t(" and "),ea=r("code"),ts=t("english_transcription"),ns=t(", you will focus on the "),aa=r("code"),ls=t("audio"),rs=t(" and "),sa=r("code"),os=t("intent_class"),is=t(" in this guide. Remove the other columns:"),xa=h(),w(qe.$$.fragment),Ea=h(),Ue=r("p"),ps=t("Take a look at an example now:"),ya=h(),w(Te.$$.fragment),ka=h(),U=r("p"),cs=t("The "),ta=r("code"),fs=t("audio"),ms=t(" column contains a 1-dimensional "),na=r("code"),hs=t("array"),us=t(" of the speech signal that must be called to load and resample the audio file. The "),la=r("code"),ds=t("intent_class"),gs=t(" column is an integer that represents the class id of intent. Create a dictionary that maps a label name to an integer and vice versa. The mapping will help the model recover the label name from the label number:"),Aa=h(),w(Pe.$$.fragment),qa=h(),He=r("p"),_s=t("Now you can convert the label number to a label name for more information:"),Ta=h(),w(De.$$.fragment),Pa=h(),te=r("p"),$s=t("Each keyword - or label - corresponds to a number; "),ra=r("code"),bs=t("2"),vs=t(" indicates "),oa=r("code"),js=t("app_error"),ws=t(" in the example above."),Da=h(),ce=r("h2"),de=r("a"),ia=r("span"),w(Se.$$.fragment),xs=h(),pa=r("span"),Es=t("Preprocess"),Sa=h(),Be=r("p"),ys=t("Load the Wav2Vec2 feature extractor to process the audio signal:"),Ca=h(),w(Ce.$$.fragment),Ia=h(),ge=r("p"),ks=t("The "),Ie=r("a"),As=t("MInDS-14"),qs=t(" dataset has a sampling rate of 8000khz. You will need to resample the dataset to use the pretrained Wav2Vec2 model:"),Ma=h(),w(Me.$$.fragment),La=h(),Ge=r("p"),Ts=t("The preprocessing function needs to:"),Oa=h(),ne=r("ol"),Le=r("li"),Ps=t("Call the "),ca=r("code"),Ds=t("audio"),Ss=t(" column to load and if necessary resample the audio file."),Cs=h(),Oe=r("li"),Is=t("Check the sampling rate of the audio file matches the sampling rate of the audio data a model was pretrained with. You can find this information on the Wav2Vec2 "),Je=r("a"),Ms=t("model card"),Ls=t("."),Os=h(),fa=r("li"),Fs=t("Set a maximum input length so longer inputs are batched without being truncated."),Fa=h(),w(Fe.$$.fragment),Wa=h(),C=r("p"),Ws=t("Use \u{1F917} Datasets "),We=r("a"),Ns=t("map"),Rs=t(" function to apply the preprocessing function over the entire dataset. You can speed up the "),ma=r("code"),Vs=t("map"),zs=t(" function by setting "),ha=r("code"),Ys=t("batched=True"),Us=t(" to process multiple elements of the dataset at once. Remove the columns you don\u2019t need, and rename "),ua=r("code"),Hs=t("intent_class"),Bs=t(" to "),da=r("code"),Gs=t("label"),Js=t(" because that is what the model expects:"),Na=h(),w(Ne.$$.fragment),Ra=h(),fe=r("h2"),_e=r("a"),ga=r("span"),w(Re.$$.fragment),Ks=h(),_a=r("span"),Qs=t("Train"),Va=h(),w($e.$$.fragment),za=h(),w(be.$$.fragment),this.h()},l(e){const l=Nt('[data-svelte="svelte-1phssyn"]',document.head);c=o(l,"META",{name:!0,content:!0}),l.forEach(s),b=u(e),m=o(e,"H1",{class:!0});var Ve=i(m);_=o(Ve,"A",{id:!0,class:!0,href:!0});var $a=i(_);v=o($a,"SPAN",{});var ba=i(v);x(g.$$.fragment,ba),ba.forEach(s),$a.forEach(s),$=u(Ve),q=o(Ve,"SPAN",{});var Zs=i(q);T=n(Zs,"Audio classification"),Zs.forEach(s),Ve.forEach(s),P=u(e),x(D.$$.fragment,e),B=u(e),G=o(e,"P",{});var et=i(G);M=n(et,"Audio classification assigns a label or class to audio data. It is similar to text classification, except an audio input is continuous and must be discretized, whereas text can be split into tokens. Some practical applications of audio classification include identifying intent, speakers, and even animal species by their sounds."),et.forEach(s),R=u(e),L=o(e,"P",{});var Ke=i(L);X=n(Ke,"This guide will show you how to fine-tune "),J=o(Ke,"A",{href:!0,rel:!0});var at=i(J);je=n(at,"Wav2Vec2"),at.forEach(s),we=n(Ke," on the "),I=o(Ke,"A",{href:!0,rel:!0});var st=i(I);xe=n(st,"MInDS-14"),st.forEach(s),Z=n(Ke," to classify intent."),Ke.forEach(s),me=u(e),x(V.$$.fragment,e),he=u(e),S=o(e,"H2",{class:!0});var Ua=i(S);z=o(Ua,"A",{id:!0,class:!0,href:!0});var tt=i(z);Y=o(tt,"SPAN",{});var nt=i(Y);x(K.$$.fragment,nt),nt.forEach(s),tt.forEach(s),Ee=u(Ua),ee=o(Ua,"SPAN",{});var lt=i(ee);Q=n(lt,"Load MInDS-14 dataset"),lt.forEach(s),Ua.forEach(s),re=u(e),f=o(e,"P",{});var Ha=i(f);j=n(Ha,"Load the "),F=o(Ha,"A",{href:!0,rel:!0});var rt=i(F);ze=n(rt,"MInDS-14"),rt.forEach(s),ae=n(Ha," from the \u{1F917} Datasets library:"),Ha.forEach(s),oe=u(e),x(se.$$.fragment,e),ie=u(e),pe=o(e,"P",{});var ot=i(pe);ue=n(ot,"Split this dataset into a train and test set:"),ot.forEach(s),ye=u(e),x(ke.$$.fragment,e),va=u(e),Ye=o(e,"P",{});var it=i(Ye);Za=n(it,"Then take a look at the dataset:"),it.forEach(s),ja=u(e),x(Ae.$$.fragment,e),wa=u(e),O=o(e,"P",{});var le=i(O);es=n(le,"While the dataset contains a lot of other useful information, like "),Ze=o(le,"CODE",{});var pt=i(Ze);as=n(pt,"lang_id"),pt.forEach(s),ss=n(le," and "),ea=o(le,"CODE",{});var ct=i(ea);ts=n(ct,"english_transcription"),ct.forEach(s),ns=n(le,", you will focus on the "),aa=o(le,"CODE",{});var ft=i(aa);ls=n(ft,"audio"),ft.forEach(s),rs=n(le," and "),sa=o(le,"CODE",{});var mt=i(sa);os=n(mt,"intent_class"),mt.forEach(s),is=n(le," in this guide. Remove the other columns:"),le.forEach(s),xa=u(e),x(qe.$$.fragment,e),Ea=u(e),Ue=o(e,"P",{});var ht=i(Ue);ps=n(ht,"Take a look at an example now:"),ht.forEach(s),ya=u(e),x(Te.$$.fragment,e),ka=u(e),U=o(e,"P",{});var ve=i(U);cs=n(ve,"The "),ta=o(ve,"CODE",{});var ut=i(ta);fs=n(ut,"audio"),ut.forEach(s),ms=n(ve," column contains a 1-dimensional "),na=o(ve,"CODE",{});var dt=i(na);hs=n(dt,"array"),dt.forEach(s),us=n(ve," of the speech signal that must be called to load and resample the audio file. The "),la=o(ve,"CODE",{});var gt=i(la);ds=n(gt,"intent_class"),gt.forEach(s),gs=n(ve," column is an integer that represents the class id of intent. Create a dictionary that maps a label name to an integer and vice versa. The mapping will help the model recover the label name from the label number:"),ve.forEach(s),Aa=u(e),x(Pe.$$.fragment,e),qa=u(e),He=o(e,"P",{});var _t=i(He);_s=n(_t,"Now you can convert the label number to a label name for more information:"),_t.forEach(s),Ta=u(e),x(De.$$.fragment,e),Pa=u(e),te=o(e,"P",{});var Qe=i(te);$s=n(Qe,"Each keyword - or label - corresponds to a number; "),ra=o(Qe,"CODE",{});var $t=i(ra);bs=n($t,"2"),$t.forEach(s),vs=n(Qe," indicates "),oa=o(Qe,"CODE",{});var bt=i(oa);js=n(bt,"app_error"),bt.forEach(s),ws=n(Qe," in the example above."),Qe.forEach(s),Da=u(e),ce=o(e,"H2",{class:!0});var Ba=i(ce);de=o(Ba,"A",{id:!0,class:!0,href:!0});var vt=i(de);ia=o(vt,"SPAN",{});var jt=i(ia);x(Se.$$.fragment,jt),jt.forEach(s),vt.forEach(s),xs=u(Ba),pa=o(Ba,"SPAN",{});var wt=i(pa);Es=n(wt,"Preprocess"),wt.forEach(s),Ba.forEach(s),Sa=u(e),Be=o(e,"P",{});var xt=i(Be);ys=n(xt,"Load the Wav2Vec2 feature extractor to process the audio signal:"),xt.forEach(s),Ca=u(e),x(Ce.$$.fragment,e),Ia=u(e),ge=o(e,"P",{});var Ga=i(ge);ks=n(Ga,"The "),Ie=o(Ga,"A",{href:!0,rel:!0});var Et=i(Ie);As=n(Et,"MInDS-14"),Et.forEach(s),qs=n(Ga," dataset has a sampling rate of 8000khz. You will need to resample the dataset to use the pretrained Wav2Vec2 model:"),Ga.forEach(s),Ma=u(e),x(Me.$$.fragment,e),La=u(e),Ge=o(e,"P",{});var yt=i(Ge);Ts=n(yt,"The preprocessing function needs to:"),yt.forEach(s),Oa=u(e),ne=o(e,"OL",{});var Xe=i(ne);Le=o(Xe,"LI",{});var Ja=i(Le);Ps=n(Ja,"Call the "),ca=o(Ja,"CODE",{});var kt=i(ca);Ds=n(kt,"audio"),kt.forEach(s),Ss=n(Ja," column to load and if necessary resample the audio file."),Ja.forEach(s),Cs=u(Xe),Oe=o(Xe,"LI",{});var Ka=i(Oe);Is=n(Ka,"Check the sampling rate of the audio file matches the sampling rate of the audio data a model was pretrained with. You can find this information on the Wav2Vec2 "),Je=o(Ka,"A",{href:!0});var At=i(Je);Ms=n(At,"model card"),At.forEach(s),Ls=n(Ka,"."),Ka.forEach(s),Os=u(Xe),fa=o(Xe,"LI",{});var qt=i(fa);Fs=n(qt,"Set a maximum input length so longer inputs are batched without being truncated."),qt.forEach(s),Xe.forEach(s),Fa=u(e),x(Fe.$$.fragment,e),Wa=u(e),C=o(e,"P",{});var H=i(C);Ws=n(H,"Use \u{1F917} Datasets "),We=o(H,"A",{href:!0,rel:!0});var Tt=i(We);Ns=n(Tt,"map"),Tt.forEach(s),Rs=n(H," function to apply the preprocessing function over the entire dataset. You can speed up the "),ma=o(H,"CODE",{});var Pt=i(ma);Vs=n(Pt,"map"),Pt.forEach(s),zs=n(H," function by setting "),ha=o(H,"CODE",{});var Dt=i(ha);Ys=n(Dt,"batched=True"),Dt.forEach(s),Us=n(H," to process multiple elements of the dataset at once. Remove the columns you don\u2019t need, and rename "),ua=o(H,"CODE",{});var St=i(ua);Hs=n(St,"intent_class"),St.forEach(s),Bs=n(H," to "),da=o(H,"CODE",{});var Ct=i(da);Gs=n(Ct,"label"),Ct.forEach(s),Js=n(H," because that is what the model expects:"),H.forEach(s),Na=u(e),x(Ne.$$.fragment,e),Ra=u(e),fe=o(e,"H2",{class:!0});var Qa=i(fe);_e=o(Qa,"A",{id:!0,class:!0,href:!0});var It=i(_e);ga=o(It,"SPAN",{});var Mt=i(ga);x(Re.$$.fragment,Mt),Mt.forEach(s),It.forEach(s),Ks=u(Qa),_a=o(Qa,"SPAN",{});var Lt=i(_a);Qs=n(Lt,"Train"),Lt.forEach(s),Qa.forEach(s),Va=u(e),x($e.$$.fragment,e),za=u(e),x(be.$$.fragment,e),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Qt)),d(_,"id","audio-classification"),d(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_,"href","#audio-classification"),d(m,"class","relative group"),d(J,"href","https://huggingface.co/facebook/wav2vec2-base"),d(J,"rel","nofollow"),d(I,"href","https://huggingface.co/datasets/PolyAI/minds14"),d(I,"rel","nofollow"),d(z,"id","load-minds14-dataset"),d(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(z,"href","#load-minds14-dataset"),d(S,"class","relative group"),d(F,"href","https://huggingface.co/datasets/PolyAI/minds14"),d(F,"rel","nofollow"),d(de,"id","preprocess"),d(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(de,"href","#preprocess"),d(ce,"class","relative group"),d(Ie,"href","https://huggingface.co/datasets/PolyAI/minds14"),d(Ie,"rel","nofollow"),d(Je,"href","(https://huggingface.co/facebook/wav2vec2-base)"),d(We,"href","https://huggingface.co/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Dataset.map"),d(We,"rel","nofollow"),d(_e,"id","train"),d(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_e,"href","#train"),d(fe,"class","relative group")},m(e,l){a(document.head,c),p(e,b,l),p(e,m,l),a(m,_),a(_,v),E(g,v,null),a(m,$),a(m,q),a(q,T),p(e,P,l),E(D,e,l),p(e,B,l),p(e,G,l),a(G,M),p(e,R,l),p(e,L,l),a(L,X),a(L,J),a(J,je),a(L,we),a(L,I),a(I,xe),a(L,Z),p(e,me,l),E(V,e,l),p(e,he,l),p(e,S,l),a(S,z),a(z,Y),E(K,Y,null),a(S,Ee),a(S,ee),a(ee,Q),p(e,re,l),p(e,f,l),a(f,j),a(f,F),a(F,ze),a(f,ae),p(e,oe,l),E(se,e,l),p(e,ie,l),p(e,pe,l),a(pe,ue),p(e,ye,l),E(ke,e,l),p(e,va,l),p(e,Ye,l),a(Ye,Za),p(e,ja,l),E(Ae,e,l),p(e,wa,l),p(e,O,l),a(O,es),a(O,Ze),a(Ze,as),a(O,ss),a(O,ea),a(ea,ts),a(O,ns),a(O,aa),a(aa,ls),a(O,rs),a(O,sa),a(sa,os),a(O,is),p(e,xa,l),E(qe,e,l),p(e,Ea,l),p(e,Ue,l),a(Ue,ps),p(e,ya,l),E(Te,e,l),p(e,ka,l),p(e,U,l),a(U,cs),a(U,ta),a(ta,fs),a(U,ms),a(U,na),a(na,hs),a(U,us),a(U,la),a(la,ds),a(U,gs),p(e,Aa,l),E(Pe,e,l),p(e,qa,l),p(e,He,l),a(He,_s),p(e,Ta,l),E(De,e,l),p(e,Pa,l),p(e,te,l),a(te,$s),a(te,ra),a(ra,bs),a(te,vs),a(te,oa),a(oa,js),a(te,ws),p(e,Da,l),p(e,ce,l),a(ce,de),a(de,ia),E(Se,ia,null),a(ce,xs),a(ce,pa),a(pa,Es),p(e,Sa,l),p(e,Be,l),a(Be,ys),p(e,Ca,l),E(Ce,e,l),p(e,Ia,l),p(e,ge,l),a(ge,ks),a(ge,Ie),a(Ie,As),a(ge,qs),p(e,Ma,l),E(Me,e,l),p(e,La,l),p(e,Ge,l),a(Ge,Ts),p(e,Oa,l),p(e,ne,l),a(ne,Le),a(Le,Ps),a(Le,ca),a(ca,Ds),a(Le,Ss),a(ne,Cs),a(ne,Oe),a(Oe,Is),a(Oe,Je),a(Je,Ms),a(Oe,Ls),a(ne,Os),a(ne,fa),a(fa,Fs),p(e,Fa,l),E(Fe,e,l),p(e,Wa,l),p(e,C,l),a(C,Ws),a(C,We),a(We,Ns),a(C,Rs),a(C,ma),a(ma,Vs),a(C,zs),a(C,ha),a(ha,Ys),a(C,Us),a(C,ua),a(ua,Hs),a(C,Bs),a(C,da),a(da,Gs),a(C,Js),p(e,Na,l),E(Ne,e,l),p(e,Ra,l),p(e,fe,l),a(fe,_e),a(_e,ga),E(Re,ga,null),a(fe,Ks),a(fe,_a),a(_a,Qs),p(e,Va,l),E($e,e,l),p(e,za,l),E(be,e,l),Ya=!0},p(e,[l]){const Ve={};l&2&&(Ve.$$scope={dirty:l,ctx:e}),V.$set(Ve);const $a={};l&2&&($a.$$scope={dirty:l,ctx:e}),$e.$set($a);const ba={};l&2&&(ba.$$scope={dirty:l,ctx:e}),be.$set(ba)},i(e){Ya||(y(g.$$.fragment,e),y(D.$$.fragment,e),y(V.$$.fragment,e),y(K.$$.fragment,e),y(se.$$.fragment,e),y(ke.$$.fragment,e),y(Ae.$$.fragment,e),y(qe.$$.fragment,e),y(Te.$$.fragment,e),y(Pe.$$.fragment,e),y(De.$$.fragment,e),y(Se.$$.fragment,e),y(Ce.$$.fragment,e),y(Me.$$.fragment,e),y(Fe.$$.fragment,e),y(Ne.$$.fragment,e),y(Re.$$.fragment,e),y($e.$$.fragment,e),y(be.$$.fragment,e),Ya=!0)},o(e){k(g.$$.fragment,e),k(D.$$.fragment,e),k(V.$$.fragment,e),k(K.$$.fragment,e),k(se.$$.fragment,e),k(ke.$$.fragment,e),k(Ae.$$.fragment,e),k(qe.$$.fragment,e),k(Te.$$.fragment,e),k(Pe.$$.fragment,e),k(De.$$.fragment,e),k(Se.$$.fragment,e),k(Ce.$$.fragment,e),k(Me.$$.fragment,e),k(Fe.$$.fragment,e),k(Ne.$$.fragment,e),k(Re.$$.fragment,e),k($e.$$.fragment,e),k(be.$$.fragment,e),Ya=!1},d(e){s(c),e&&s(b),e&&s(m),A(g),e&&s(P),A(D,e),e&&s(B),e&&s(G),e&&s(R),e&&s(L),e&&s(me),A(V,e),e&&s(he),e&&s(S),A(K),e&&s(re),e&&s(f),e&&s(oe),A(se,e),e&&s(ie),e&&s(pe),e&&s(ye),A(ke,e),e&&s(va),e&&s(Ye),e&&s(ja),A(Ae,e),e&&s(wa),e&&s(O),e&&s(xa),A(qe,e),e&&s(Ea),e&&s(Ue),e&&s(ya),A(Te,e),e&&s(ka),e&&s(U),e&&s(Aa),A(Pe,e),e&&s(qa),e&&s(He),e&&s(Ta),A(De,e),e&&s(Pa),e&&s(te),e&&s(Da),e&&s(ce),A(Se),e&&s(Sa),e&&s(Be),e&&s(Ca),A(Ce,e),e&&s(Ia),e&&s(ge),e&&s(Ma),A(Me,e),e&&s(La),e&&s(Ge),e&&s(Oa),e&&s(ne),e&&s(Fa),A(Fe,e),e&&s(Wa),e&&s(C),e&&s(Na),A(Ne,e),e&&s(Ra),e&&s(fe),A(Re),e&&s(Va),A($e,e),e&&s(za),A(be,e)}}}const Qt={local:"audio-classification",sections:[{local:"load-minds14-dataset",title:"Load MInDS-14 dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Audio classification"};function Xt(N){return Rt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ln extends Ot{constructor(c){super();Ft(this,c,Xt,Kt,Wt,{})}}export{ln as default,Qt as metadata};
