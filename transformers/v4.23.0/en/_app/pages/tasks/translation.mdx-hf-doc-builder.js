import{S as Ia,i as Ua,s as Na,e as p,k as w,w as y,t as n,M as Ba,c as f,d as s,m as v,a as m,x as E,h as o,b as j,G as r,g as u,y as T,q as x,o as z,B as A,v as Wa,L as At}from"../../chunks/vendor-hf-doc-builder.js";import{T as zt}from"../../chunks/Tip-hf-doc-builder.js";import{Y as Oa}from"../../chunks/Youtube-hf-doc-builder.js";import{I as xt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as K}from"../../chunks/CodeBlock-hf-doc-builder.js";import{F as fa,M as We}from"../../chunks/Markdown-hf-doc-builder.js";function Ya(F){let a,l,t,i,_;return{c(){a=p("p"),l=n("See the translation "),t=p("a"),i=n("task page"),_=n(" for more information about its associated models, datasets, and metrics."),this.h()},l($){a=f($,"P",{});var g=m(a);l=o(g,"See the translation "),t=f(g,"A",{href:!0,rel:!0});var q=m(t);i=o(q,"task page"),q.forEach(s),_=o(g," for more information about its associated models, datasets, and metrics."),g.forEach(s),this.h()},h(){j(t,"href","https://huggingface.co/tasks/translation"),j(t,"rel","nofollow")},m($,g){u($,a,g),r(a,l),r(a,t),r(t,i),r(a,_)},d($){$&&s(a)}}}function Ha(F){let a,l,t,i,_,$,g,q;return g=new K({props:{code:`from transformers import AutoModelForSeq2SeqLM

model = AutoModelForSeq2SeqLM.from_pretrained("t5-small")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSeq2SeqLM

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)`}}),{c(){a=p("p"),l=n("Load T5 with "),t=p("a"),i=n("AutoModelForSeq2SeqLM"),_=n(":"),$=w(),y(g.$$.fragment),this.h()},l(d){a=f(d,"P",{});var k=m(a);l=o(k,"Load T5 with "),t=f(k,"A",{href:!0});var L=m(t);i=o(L,"AutoModelForSeq2SeqLM"),L.forEach(s),_=o(k,":"),k.forEach(s),$=v(d),E(g.$$.fragment,d),this.h()},h(){j(t,"href","/docs/transformers/v4.23.0/en/model_doc/auto#transformers.AutoModelForSeq2SeqLM")},m(d,k){u(d,a,k),r(a,l),r(a,t),r(t,i),r(a,_),u(d,$,k),T(g,d,k),q=!0},p:At,i(d){q||(x(g.$$.fragment,d),q=!0)},o(d){z(g.$$.fragment,d),q=!1},d(d){d&&s(a),d&&s($),A(g,d)}}}function Za(F){let a,l;return a=new We({props:{$$slots:{default:[Ha]},$$scope:{ctx:F}}}),{c(){y(a.$$.fragment)},l(t){E(a.$$.fragment,t)},m(t,i){T(a,t,i),l=!0},p(t,i){const _={};i&2&&(_.$$scope={dirty:i,ctx:t}),a.$set(_)},i(t){l||(x(a.$$.fragment,t),l=!0)},o(t){z(a.$$.fragment,t),l=!1},d(t){A(a,t)}}}function Ja(F){let a,l,t,i,_,$,g,q;return g=new K({props:{code:`from transformers import TFAutoModelForSeq2SeqLM

model = TFAutoModelForSeq2SeqLM.from_pretrained("t5-small")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSeq2SeqLM

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)`}}),{c(){a=p("p"),l=n("Load T5 with "),t=p("a"),i=n("TFAutoModelForSeq2SeqLM"),_=n(":"),$=w(),y(g.$$.fragment),this.h()},l(d){a=f(d,"P",{});var k=m(a);l=o(k,"Load T5 with "),t=f(k,"A",{href:!0});var L=m(t);i=o(L,"TFAutoModelForSeq2SeqLM"),L.forEach(s),_=o(k,":"),k.forEach(s),$=v(d),E(g.$$.fragment,d),this.h()},h(){j(t,"href","/docs/transformers/v4.23.0/en/model_doc/auto#transformers.TFAutoModelForSeq2SeqLM")},m(d,k){u(d,a,k),r(a,l),r(a,t),r(t,i),r(a,_),u(d,$,k),T(g,d,k),q=!0},p:At,i(d){q||(x(g.$$.fragment,d),q=!0)},o(d){z(g.$$.fragment,d),q=!1},d(d){d&&s(a),d&&s($),A(g,d)}}}function Ka(F){let a,l;return a=new We({props:{$$slots:{default:[Ja]},$$scope:{ctx:F}}}),{c(){y(a.$$.fragment)},l(t){E(a.$$.fragment,t)},m(t,i){T(a,t,i),l=!0},p(t,i){const _={};i&2&&(_.$$scope={dirty:i,ctx:t}),a.$set(_)},i(t){l||(x(a.$$.fragment,t),l=!0)},o(t){z(a.$$.fragment,t),l=!1},d(t){A(a,t)}}}function Ra(F){let a,l;return a=new K({props:{code:`from transformers import DataCollatorForSeq2Seq

data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForSeq2Seq

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model)`}}),{c(){y(a.$$.fragment)},l(t){E(a.$$.fragment,t)},m(t,i){T(a,t,i),l=!0},p:At,i(t){l||(x(a.$$.fragment,t),l=!0)},o(t){z(a.$$.fragment,t),l=!1},d(t){A(a,t)}}}function Ga(F){let a,l;return a=new We({props:{$$slots:{default:[Ra]},$$scope:{ctx:F}}}),{c(){y(a.$$.fragment)},l(t){E(a.$$.fragment,t)},m(t,i){T(a,t,i),l=!0},p(t,i){const _={};i&2&&(_.$$scope={dirty:i,ctx:t}),a.$set(_)},i(t){l||(x(a.$$.fragment,t),l=!0)},o(t){z(a.$$.fragment,t),l=!1},d(t){A(a,t)}}}function Xa(F){let a,l;return a=new K({props:{code:`from transformers import DataCollatorForSeq2Seq

data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model, return_tensors="tf")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForSeq2Seq

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),{c(){y(a.$$.fragment)},l(t){E(a.$$.fragment,t)},m(t,i){T(a,t,i),l=!0},p:At,i(t){l||(x(a.$$.fragment,t),l=!0)},o(t){z(a.$$.fragment,t),l=!1},d(t){A(a,t)}}}function Qa(F){let a,l;return a=new We({props:{$$slots:{default:[Xa]},$$scope:{ctx:F}}}),{c(){y(a.$$.fragment)},l(t){E(a.$$.fragment,t)},m(t,i){T(a,t,i),l=!0},p(t,i){const _={};i&2&&(_.$$scope={dirty:i,ctx:t}),a.$set(_)},i(t){l||(x(a.$$.fragment,t),l=!0)},o(t){z(a.$$.fragment,t),l=!1},d(t){A(a,t)}}}function Va(F){let a,l,t,i,_,$,g,q;return{c(){a=p("p"),l=n("If you aren\u2019t familiar with fine-tuning a model with the "),t=p("a"),i=n("Trainer"),_=n(", take a look at the basic tutorial "),$=p("a"),g=n("here"),q=n("!"),this.h()},l(d){a=f(d,"P",{});var k=m(a);l=o(k,"If you aren\u2019t familiar with fine-tuning a model with the "),t=f(k,"A",{href:!0});var L=m(t);i=o(L,"Trainer"),L.forEach(s),_=o(k,", take a look at the basic tutorial "),$=f(k,"A",{href:!0});var M=m($);g=o(M,"here"),M.forEach(s),q=o(k,"!"),k.forEach(s),this.h()},h(){j(t,"href","/docs/transformers/v4.23.0/en/main_classes/trainer#transformers.Trainer"),j($,"href","../training#finetune-with-trainer")},m(d,k){u(d,a,k),r(a,l),r(a,t),r(t,i),r(a,_),r(a,$),r($,g),r(a,q)},d(d){d&&s(a)}}}function es(F){let a,l,t,i,_,$,g,q,d,k,L,M,U,R,Z,N,J,H,O,se,D,V,re,ee,C,W;return a=new zt({props:{$$slots:{default:[Va]},$$scope:{ctx:F}}}),C=new K({props:{code:`from transformers import Seq2SeqTrainingArguments, Seq2SeqTrainer

training_args = Seq2SeqTrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",
    learning_rate=2e-5,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=16,
    weight_decay=0.01,
    save_total_limit=3,
    num_train_epochs=1,
    fp16=True,
)

trainer = Seq2SeqTrainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_books["train"],
    eval_dataset=tokenized_books["test"],
    tokenizer=tokenizer,
    data_collator=data_collator,
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Seq2SeqTrainingArguments, Seq2SeqTrainer

<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = Seq2SeqTrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">2e-5</span>,
<span class="hljs-meta">... </span>    per_device_train_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    per_device_eval_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    weight_decay=<span class="hljs-number">0.01</span>,
<span class="hljs-meta">... </span>    save_total_limit=<span class="hljs-number">3</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    fp16=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Seq2SeqTrainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=tokenized_books[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=tokenized_books[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=tokenizer,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){y(a.$$.fragment),l=w(),t=p("p"),i=n("At this point, only three steps remain:"),_=w(),$=p("ol"),g=p("li"),q=n("Define your training hyperparameters in "),d=p("a"),k=n("Seq2SeqTrainingArguments"),L=n("."),M=w(),U=p("li"),R=n("Pass the training arguments to "),Z=p("a"),N=n("Seq2SeqTrainer"),J=n(" along with the model, dataset, tokenizer, and data collator."),H=w(),O=p("li"),se=n("Call "),D=p("a"),V=n("train()"),re=n(" to fine-tune your model."),ee=w(),y(C.$$.fragment),this.h()},l(b){E(a.$$.fragment,b),l=v(b),t=f(b,"P",{});var P=m(t);i=o(P,"At this point, only three steps remain:"),P.forEach(s),_=v(b),$=f(b,"OL",{});var B=m($);g=f(B,"LI",{});var I=m(g);q=o(I,"Define your training hyperparameters in "),d=f(I,"A",{href:!0});var te=m(d);k=o(te,"Seq2SeqTrainingArguments"),te.forEach(s),L=o(I,"."),I.forEach(s),M=v(B),U=f(B,"LI",{});var G=m(U);R=o(G,"Pass the training arguments to "),Z=f(G,"A",{href:!0});var oe=m(Z);N=o(oe,"Seq2SeqTrainer"),oe.forEach(s),J=o(G," along with the model, dataset, tokenizer, and data collator."),G.forEach(s),H=v(B),O=f(B,"LI",{});var X=m(O);se=o(X,"Call "),D=f(X,"A",{href:!0});var Y=m(D);V=o(Y,"train()"),Y.forEach(s),re=o(X," to fine-tune your model."),X.forEach(s),B.forEach(s),ee=v(b),E(C.$$.fragment,b),this.h()},h(){j(d,"href","/docs/transformers/v4.23.0/en/main_classes/trainer#transformers.Seq2SeqTrainingArguments"),j(Z,"href","/docs/transformers/v4.23.0/en/main_classes/trainer#transformers.Seq2SeqTrainer"),j(D,"href","/docs/transformers/v4.23.0/en/main_classes/trainer#transformers.Trainer.train")},m(b,P){T(a,b,P),u(b,l,P),u(b,t,P),r(t,i),u(b,_,P),u(b,$,P),r($,g),r(g,q),r(g,d),r(d,k),r(g,L),r($,M),r($,U),r(U,R),r(U,Z),r(Z,N),r(U,J),r($,H),r($,O),r(O,se),r(O,D),r(D,V),r(O,re),u(b,ee,P),T(C,b,P),W=!0},p(b,P){const B={};P&2&&(B.$$scope={dirty:P,ctx:b}),a.$set(B)},i(b){W||(x(a.$$.fragment,b),x(C.$$.fragment,b),W=!0)},o(b){z(a.$$.fragment,b),z(C.$$.fragment,b),W=!1},d(b){A(a,b),b&&s(l),b&&s(t),b&&s(_),b&&s($),b&&s(ee),A(C,b)}}}function ts(F){let a,l;return a=new We({props:{$$slots:{default:[es]},$$scope:{ctx:F}}}),{c(){y(a.$$.fragment)},l(t){E(a.$$.fragment,t)},m(t,i){T(a,t,i),l=!0},p(t,i){const _={};i&2&&(_.$$scope={dirty:i,ctx:t}),a.$set(_)},i(t){l||(x(a.$$.fragment,t),l=!0)},o(t){z(a.$$.fragment,t),l=!1},d(t){A(a,t)}}}function as(F){let a,l,t,i,_;return{c(){a=p("p"),l=n("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),t=p("a"),i=n("here"),_=n("!"),this.h()},l($){a=f($,"P",{});var g=m(a);l=o(g,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),t=f(g,"A",{href:!0});var q=m(t);i=o(q,"here"),q.forEach(s),_=o(g,"!"),g.forEach(s),this.h()},h(){j(t,"href","training#finetune-with-keras")},m($,g){u($,a,g),r(a,l),r(a,t),r(t,i),r(a,_)},d($){$&&s(a)}}}function ss(F){let a,l,t,i,_,$,g,q,d,k,L,M,U,R,Z,N,J,H,O,se,D,V,re,ee,C,W,b,P,B,I,te,G,oe,X,Y,$e;return k=new K({props:{code:`tf_train_set = model.prepare_tf_dataset(
    tokenized_books["train"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_test_set = model.prepare_tf_dataset(
    tokenized_books["test"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tf_train_set = model.prepare_tf_dataset(
<span class="hljs-meta">... </span>    tokenized_books[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tf_test_set = model.prepare_tf_dataset(
<span class="hljs-meta">... </span>    tokenized_books[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)`}}),M=new zt({props:{$$slots:{default:[as]},$$scope:{ctx:F}}}),J=new K({props:{code:`from transformers import create_optimizer, AdamWeightDecay

optimizer = AdamWeightDecay(learning_rate=2e-5, weight_decay_rate=0.01)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer, AdamWeightDecay

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = AdamWeightDecay(learning_rate=<span class="hljs-number">2e-5</span>, weight_decay_rate=<span class="hljs-number">0.01</span>)`}}),W=new K({props:{code:"model.compile(optimizer=optimizer)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)'}}),Y=new K({props:{code:"model.fit(tf_train_set, validation_data=tf_test_set, epochs=3)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(tf_train_set, validation_data=tf_test_set, epochs=<span class="hljs-number">3</span>)'}}),{c(){a=p("p"),l=n("To fine-tune a model in TensorFlow, start by converting your datasets to the "),t=p("code"),i=n("tf.data.Dataset"),_=n(" format with "),$=p("a"),g=n("prepare_tf_dataset()"),q=n("."),d=w(),y(k.$$.fragment),L=w(),y(M.$$.fragment),U=w(),R=p("p"),Z=n("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),N=w(),y(J.$$.fragment),H=w(),O=p("p"),se=n("Configure the model for training with "),D=p("a"),V=p("code"),re=n("compile"),ee=n(":"),C=w(),y(W.$$.fragment),b=w(),P=p("p"),B=n("Call "),I=p("a"),te=p("code"),G=n("fit"),oe=n(" to fine-tune the model:"),X=w(),y(Y.$$.fragment),this.h()},l(h){a=f(h,"P",{});var S=m(a);l=o(S,"To fine-tune a model in TensorFlow, start by converting your datasets to the "),t=f(S,"CODE",{});var le=m(t);i=o(le,"tf.data.Dataset"),le.forEach(s),_=o(S," format with "),$=f(S,"A",{href:!0});var me=m($);g=o(me,"prepare_tf_dataset()"),me.forEach(s),q=o(S,"."),S.forEach(s),d=v(h),E(k.$$.fragment,h),L=v(h),E(M.$$.fragment,h),U=v(h),R=f(h,"P",{});var De=m(R);Z=o(De,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),De.forEach(s),N=v(h),E(J.$$.fragment,h),H=v(h),O=f(h,"P",{});var he=m(O);se=o(he,"Configure the model for training with "),D=f(he,"A",{href:!0,rel:!0});var ie=m(D);V=f(ie,"CODE",{});var qe=m(V);re=o(qe,"compile"),qe.forEach(s),ie.forEach(s),ee=o(he,":"),he.forEach(s),C=v(h),E(W.$$.fragment,h),b=v(h),P=f(h,"P",{});var ne=m(P);B=o(ne,"Call "),I=f(ne,"A",{href:!0,rel:!0});var Ce=m(I);te=f(Ce,"CODE",{});var Se=m(te);G=o(Se,"fit"),Se.forEach(s),Ce.forEach(s),oe=o(ne," to fine-tune the model:"),ne.forEach(s),X=v(h),E(Y.$$.fragment,h),this.h()},h(){j($,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel.prepare_tf_dataset"),j(D,"href","https://keras.io/api/models/model_training_apis/#compile-method"),j(D,"rel","nofollow"),j(I,"href","https://keras.io/api/models/model_training_apis/#fit-method"),j(I,"rel","nofollow")},m(h,S){u(h,a,S),r(a,l),r(a,t),r(t,i),r(a,_),r(a,$),r($,g),r(a,q),u(h,d,S),T(k,h,S),u(h,L,S),T(M,h,S),u(h,U,S),u(h,R,S),r(R,Z),u(h,N,S),T(J,h,S),u(h,H,S),u(h,O,S),r(O,se),r(O,D),r(D,V),r(V,re),r(O,ee),u(h,C,S),T(W,h,S),u(h,b,S),u(h,P,S),r(P,B),r(P,I),r(I,te),r(te,G),r(P,oe),u(h,X,S),T(Y,h,S),$e=!0},p(h,S){const le={};S&2&&(le.$$scope={dirty:S,ctx:h}),M.$set(le)},i(h){$e||(x(k.$$.fragment,h),x(M.$$.fragment,h),x(J.$$.fragment,h),x(W.$$.fragment,h),x(Y.$$.fragment,h),$e=!0)},o(h){z(k.$$.fragment,h),z(M.$$.fragment,h),z(J.$$.fragment,h),z(W.$$.fragment,h),z(Y.$$.fragment,h),$e=!1},d(h){h&&s(a),h&&s(d),A(k,h),h&&s(L),A(M,h),h&&s(U),h&&s(R),h&&s(N),A(J,h),h&&s(H),h&&s(O),h&&s(C),A(W,h),h&&s(b),h&&s(P),h&&s(X),A(Y,h)}}}function rs(F){let a,l;return a=new We({props:{$$slots:{default:[ss]},$$scope:{ctx:F}}}),{c(){y(a.$$.fragment)},l(t){E(a.$$.fragment,t)},m(t,i){T(a,t,i),l=!0},p(t,i){const _={};i&2&&(_.$$scope={dirty:i,ctx:t}),a.$set(_)},i(t){l||(x(a.$$.fragment,t),l=!0)},o(t){z(a.$$.fragment,t),l=!1},d(t){A(a,t)}}}function ns(F){let a,l,t,i,_,$,g,q;return{c(){a=p("p"),l=n(`For a more in-depth example of how to fine-tune a model for translation, take a look at the corresponding
`),t=p("a"),i=n("PyTorch notebook"),_=n(`
or `),$=p("a"),g=n("TensorFlow notebook"),q=n("."),this.h()},l(d){a=f(d,"P",{});var k=m(a);l=o(k,`For a more in-depth example of how to fine-tune a model for translation, take a look at the corresponding
`),t=f(k,"A",{href:!0,rel:!0});var L=m(t);i=o(L,"PyTorch notebook"),L.forEach(s),_=o(k,`
or `),$=f(k,"A",{href:!0,rel:!0});var M=m($);g=o(M,"TensorFlow notebook"),M.forEach(s),q=o(k,"."),k.forEach(s),this.h()},h(){j(t,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/translation.ipynb"),j(t,"rel","nofollow"),j($,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/translation-tf.ipynb"),j($,"rel","nofollow")},m(d,k){u(d,a,k),r(a,l),r(a,t),r(t,i),r(a,_),r(a,$),r($,g),r(a,q)},d(d){d&&s(a)}}}function os(F){let a,l,t,i,_,$,g,q,d,k,L,M,U,R,Z,N,J,H,O,se,D,V,re,ee,C,W,b,P,B,I,te,G,oe,X,Y,$e,h,S,le,me,De,he,ie,qe,ne,Ce,Se,ye,lt,de,Ft,Ye,Pt,Lt,it,ce,_e,He,Ee,Mt,Ze,Dt,pt,Te,ft,Oe,Ct,mt,xe,ht,Ie,Ot,ct,pe,Je,It,Ut,Ke,Nt,Bt,ze,Wt,Re,Yt,Ht,ut,Ae,$t,ae,Zt,Fe,Jt,Kt,Ge,Rt,Gt,Xe,Xt,Qt,dt,Pe,_t,ge,gt,Q,Vt,Ue,ea,ta,Qe,aa,sa,Ve,ra,na,et,oa,la,kt,ke,wt,ue,we,tt,Le,ia,at,pa,vt,ve,bt,be,jt;return $=new xt({}),L=new Oa({props:{id:"1JvfrvZgi6c"}}),C=new zt({props:{$$slots:{default:[Ya]},$$scope:{ctx:F}}}),I=new xt({}),S=new K({props:{code:`from datasets import load_dataset

books = load_dataset("opus_books", "en-fr")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>books = load_dataset(<span class="hljs-string">&quot;opus_books&quot;</span>, <span class="hljs-string">&quot;en-fr&quot;</span>)`}}),ie=new K({props:{code:'books = books["train"].train_test_split(test_size=0.2)',highlighted:'books = books[<span class="hljs-string">&quot;train&quot;</span>].train_test_split(test_size=<span class="hljs-number">0.2</span>)'}}),ye=new K({props:{code:'books["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>books[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;90560&#x27;</span>,
 <span class="hljs-string">&#x27;translation&#x27;</span>: {<span class="hljs-string">&#x27;en&#x27;</span>: <span class="hljs-string">&#x27;But this lofty plateau measured only a few fathoms, and soon we reentered Our Element.&#x27;</span>,
  <span class="hljs-string">&#x27;fr&#x27;</span>: <span class="hljs-string">&#x27;Mais ce plateau \xE9lev\xE9 ne mesurait que quelques toises, et bient\xF4t nous f\xFBmes rentr\xE9s dans notre \xE9l\xE9ment.&#x27;</span>}}`}}),Ee=new xt({}),Te=new Oa({props:{id:"XAR8jnZZuUs"}}),xe=new K({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("t5-small")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)`}}),Ae=new K({props:{code:`source_lang = "en"
target_lang = "fr"
prefix = "translate English to French: "


def preprocess_function(examples):
    inputs = [prefix + example[source_lang] for example in examples["translation"]]
    targets = [example[target_lang] for example in examples["translation"]]
    model_inputs = tokenizer(inputs, text_target=targets, max_length=128, truncation=True)
    return model_inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>source_lang = <span class="hljs-string">&quot;en&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_lang = <span class="hljs-string">&quot;fr&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>prefix = <span class="hljs-string">&quot;translate English to French: &quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    inputs = [prefix + example[source_lang] <span class="hljs-keyword">for</span> example <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;translation&quot;</span>]]
<span class="hljs-meta">... </span>    targets = [example[target_lang] <span class="hljs-keyword">for</span> example <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;translation&quot;</span>]]
<span class="hljs-meta">... </span>    model_inputs = tokenizer(inputs, text_target=targets, max_length=<span class="hljs-number">128</span>, truncation=<span class="hljs-literal">True</span>)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> model_inputs`}}),Pe=new K({props:{code:"tokenized_books = books.map(preprocess_function, batched=True)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_books = books.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)'}}),ge=new fa({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Ka],pytorch:[Za]},$$scope:{ctx:F}}}),ke=new fa({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Qa],pytorch:[Ga]},$$scope:{ctx:F}}}),Le=new xt({}),ve=new fa({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[rs],pytorch:[ts]},$$scope:{ctx:F}}}),be=new zt({props:{$$slots:{default:[ns]},$$scope:{ctx:F}}}),{c(){a=p("meta"),l=w(),t=p("h1"),i=p("a"),_=p("span"),y($.$$.fragment),g=w(),q=p("span"),d=n("Translation"),k=w(),y(L.$$.fragment),M=w(),U=p("p"),R=n("Translation converts a sequence of text from one language to another. It is one of several tasks you can formulate as a sequence-to-sequence problem, a powerful framework that extends to vision and audio tasks."),Z=w(),N=p("p"),J=n("This guide will show you how to fine-tune "),H=p("a"),O=n("T5"),se=n(" on the English-French subset of the "),D=p("a"),V=n("OPUS Books"),re=n(" dataset to translate English text to French."),ee=w(),y(C.$$.fragment),W=w(),b=p("h2"),P=p("a"),B=p("span"),y(I.$$.fragment),te=w(),G=p("span"),oe=n("Load OPUS Books dataset"),X=w(),Y=p("p"),$e=n("Load the OPUS Books dataset from the \u{1F917} Datasets library:"),h=w(),y(S.$$.fragment),le=w(),me=p("p"),De=n("Split this dataset into a train and test set:"),he=w(),y(ie.$$.fragment),qe=w(),ne=p("p"),Ce=n("Then take a look at an example:"),Se=w(),y(ye.$$.fragment),lt=w(),de=p("p"),Ft=n("The "),Ye=p("code"),Pt=n("translation"),Lt=n(" field is a dictionary containing the English and French translations of the text."),it=w(),ce=p("h2"),_e=p("a"),He=p("span"),y(Ee.$$.fragment),Mt=w(),Ze=p("span"),Dt=n("Preprocess"),pt=w(),y(Te.$$.fragment),ft=w(),Oe=p("p"),Ct=n("Load the T5 tokenizer to process the language pairs:"),mt=w(),y(xe.$$.fragment),ht=w(),Ie=p("p"),Ot=n("The preprocessing function needs to:"),ct=w(),pe=p("ol"),Je=p("li"),It=n("Prefix the input with a prompt so T5 knows this is a translation task. Some models capable of multiple NLP tasks require prompting for specific tasks."),Ut=w(),Ke=p("li"),Nt=n("Tokenize the input (English) and target (French) separately. You can\u2019t tokenize French text with a tokenizer pretrained on an English vocabulary. A context manager will help set the tokenizer to French first before tokenizing it."),Bt=w(),ze=p("li"),Wt=n("Truncate sequences to be no longer than the maximum length set by the "),Re=p("code"),Yt=n("max_length"),Ht=n(" parameter."),ut=w(),y(Ae.$$.fragment),$t=w(),ae=p("p"),Zt=n("Use \u{1F917} Datasets "),Fe=p("a"),Jt=n("map"),Kt=n(" function to apply the preprocessing function over the entire dataset. You can speed up the "),Ge=p("code"),Rt=n("map"),Gt=n(" function by setting "),Xe=p("code"),Xt=n("batched=True"),Qt=n(" to process multiple elements of the dataset at once:"),dt=w(),y(Pe.$$.fragment),_t=w(),y(ge.$$.fragment),gt=w(),Q=p("p"),Vt=n("Use "),Ue=p("a"),ea=n("DataCollatorForSeq2Seq"),ta=n(" to create a batch of examples. It will also "),Qe=p("em"),aa=n("dynamically pad"),sa=n(" your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),Ve=p("code"),ra=n("tokenizer"),na=n(" function by setting "),et=p("code"),oa=n("padding=True"),la=n(", dynamic padding is more efficient."),kt=w(),y(ke.$$.fragment),wt=w(),ue=p("h2"),we=p("a"),tt=p("span"),y(Le.$$.fragment),ia=w(),at=p("span"),pa=n("Train"),vt=w(),y(ve.$$.fragment),bt=w(),y(be.$$.fragment),this.h()},l(e){const c=Ba('[data-svelte="svelte-1phssyn"]',document.head);a=f(c,"META",{name:!0,content:!0}),c.forEach(s),l=v(e),t=f(e,"H1",{class:!0});var Me=m(t);i=f(Me,"A",{id:!0,class:!0,href:!0});var st=m(i);_=f(st,"SPAN",{});var rt=m(_);E($.$$.fragment,rt),rt.forEach(s),st.forEach(s),g=v(Me),q=f(Me,"SPAN",{});var nt=m(q);d=o(nt,"Translation"),nt.forEach(s),Me.forEach(s),k=v(e),E(L.$$.fragment,e),M=v(e),U=f(e,"P",{});var ot=m(U);R=o(ot,"Translation converts a sequence of text from one language to another. It is one of several tasks you can formulate as a sequence-to-sequence problem, a powerful framework that extends to vision and audio tasks."),ot.forEach(s),Z=v(e),N=f(e,"P",{});var Ne=m(N);J=o(Ne,"This guide will show you how to fine-tune "),H=f(Ne,"A",{href:!0,rel:!0});var ma=m(H);O=o(ma,"T5"),ma.forEach(s),se=o(Ne," on the English-French subset of the "),D=f(Ne,"A",{href:!0,rel:!0});var ha=m(D);V=o(ha,"OPUS Books"),ha.forEach(s),re=o(Ne," dataset to translate English text to French."),Ne.forEach(s),ee=v(e),E(C.$$.fragment,e),W=v(e),b=f(e,"H2",{class:!0});var qt=m(b);P=f(qt,"A",{id:!0,class:!0,href:!0});var ca=m(P);B=f(ca,"SPAN",{});var ua=m(B);E(I.$$.fragment,ua),ua.forEach(s),ca.forEach(s),te=v(qt),G=f(qt,"SPAN",{});var $a=m(G);oe=o($a,"Load OPUS Books dataset"),$a.forEach(s),qt.forEach(s),X=v(e),Y=f(e,"P",{});var da=m(Y);$e=o(da,"Load the OPUS Books dataset from the \u{1F917} Datasets library:"),da.forEach(s),h=v(e),E(S.$$.fragment,e),le=v(e),me=f(e,"P",{});var _a=m(me);De=o(_a,"Split this dataset into a train and test set:"),_a.forEach(s),he=v(e),E(ie.$$.fragment,e),qe=v(e),ne=f(e,"P",{});var ga=m(ne);Ce=o(ga,"Then take a look at an example:"),ga.forEach(s),Se=v(e),E(ye.$$.fragment,e),lt=v(e),de=f(e,"P",{});var St=m(de);Ft=o(St,"The "),Ye=f(St,"CODE",{});var ka=m(Ye);Pt=o(ka,"translation"),ka.forEach(s),Lt=o(St," field is a dictionary containing the English and French translations of the text."),St.forEach(s),it=v(e),ce=f(e,"H2",{class:!0});var yt=m(ce);_e=f(yt,"A",{id:!0,class:!0,href:!0});var wa=m(_e);He=f(wa,"SPAN",{});var va=m(He);E(Ee.$$.fragment,va),va.forEach(s),wa.forEach(s),Mt=v(yt),Ze=f(yt,"SPAN",{});var ba=m(Ze);Dt=o(ba,"Preprocess"),ba.forEach(s),yt.forEach(s),pt=v(e),E(Te.$$.fragment,e),ft=v(e),Oe=f(e,"P",{});var ja=m(Oe);Ct=o(ja,"Load the T5 tokenizer to process the language pairs:"),ja.forEach(s),mt=v(e),E(xe.$$.fragment,e),ht=v(e),Ie=f(e,"P",{});var qa=m(Ie);Ot=o(qa,"The preprocessing function needs to:"),qa.forEach(s),ct=v(e),pe=f(e,"OL",{});var Be=m(pe);Je=f(Be,"LI",{});var Sa=m(Je);It=o(Sa,"Prefix the input with a prompt so T5 knows this is a translation task. Some models capable of multiple NLP tasks require prompting for specific tasks."),Sa.forEach(s),Ut=v(Be),Ke=f(Be,"LI",{});var ya=m(Ke);Nt=o(ya,"Tokenize the input (English) and target (French) separately. You can\u2019t tokenize French text with a tokenizer pretrained on an English vocabulary. A context manager will help set the tokenizer to French first before tokenizing it."),ya.forEach(s),Bt=v(Be),ze=f(Be,"LI",{});var Et=m(ze);Wt=o(Et,"Truncate sequences to be no longer than the maximum length set by the "),Re=f(Et,"CODE",{});var Ea=m(Re);Yt=o(Ea,"max_length"),Ea.forEach(s),Ht=o(Et," parameter."),Et.forEach(s),Be.forEach(s),ut=v(e),E(Ae.$$.fragment,e),$t=v(e),ae=f(e,"P",{});var je=m(ae);Zt=o(je,"Use \u{1F917} Datasets "),Fe=f(je,"A",{href:!0,rel:!0});var Ta=m(Fe);Jt=o(Ta,"map"),Ta.forEach(s),Kt=o(je," function to apply the preprocessing function over the entire dataset. You can speed up the "),Ge=f(je,"CODE",{});var xa=m(Ge);Rt=o(xa,"map"),xa.forEach(s),Gt=o(je," function by setting "),Xe=f(je,"CODE",{});var za=m(Xe);Xt=o(za,"batched=True"),za.forEach(s),Qt=o(je," to process multiple elements of the dataset at once:"),je.forEach(s),dt=v(e),E(Pe.$$.fragment,e),_t=v(e),E(ge.$$.fragment,e),gt=v(e),Q=f(e,"P",{});var fe=m(Q);Vt=o(fe,"Use "),Ue=f(fe,"A",{href:!0});var Aa=m(Ue);ea=o(Aa,"DataCollatorForSeq2Seq"),Aa.forEach(s),ta=o(fe," to create a batch of examples. It will also "),Qe=f(fe,"EM",{});var Fa=m(Qe);aa=o(Fa,"dynamically pad"),Fa.forEach(s),sa=o(fe," your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),Ve=f(fe,"CODE",{});var Pa=m(Ve);ra=o(Pa,"tokenizer"),Pa.forEach(s),na=o(fe," function by setting "),et=f(fe,"CODE",{});var La=m(et);oa=o(La,"padding=True"),La.forEach(s),la=o(fe,", dynamic padding is more efficient."),fe.forEach(s),kt=v(e),E(ke.$$.fragment,e),wt=v(e),ue=f(e,"H2",{class:!0});var Tt=m(ue);we=f(Tt,"A",{id:!0,class:!0,href:!0});var Ma=m(we);tt=f(Ma,"SPAN",{});var Da=m(tt);E(Le.$$.fragment,Da),Da.forEach(s),Ma.forEach(s),ia=v(Tt),at=f(Tt,"SPAN",{});var Ca=m(at);pa=o(Ca,"Train"),Ca.forEach(s),Tt.forEach(s),vt=v(e),E(ve.$$.fragment,e),bt=v(e),E(be.$$.fragment,e),this.h()},h(){j(a,"name","hf:doc:metadata"),j(a,"content",JSON.stringify(ls)),j(i,"id","translation"),j(i,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(i,"href","#translation"),j(t,"class","relative group"),j(H,"href","https://huggingface.co/t5-small"),j(H,"rel","nofollow"),j(D,"href","https://huggingface.co/datasets/opus_books"),j(D,"rel","nofollow"),j(P,"id","load-opus-books-dataset"),j(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(P,"href","#load-opus-books-dataset"),j(b,"class","relative group"),j(_e,"id","preprocess"),j(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(_e,"href","#preprocess"),j(ce,"class","relative group"),j(Fe,"href","https://huggingface.co/docs/datasets/v2.5.2/en/package_reference/main_classes#datasets.Dataset.map"),j(Fe,"rel","nofollow"),j(Ue,"href","/docs/transformers/v4.23.0/en/main_classes/data_collator#transformers.DataCollatorForSeq2Seq"),j(we,"id","train"),j(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(we,"href","#train"),j(ue,"class","relative group")},m(e,c){r(document.head,a),u(e,l,c),u(e,t,c),r(t,i),r(i,_),T($,_,null),r(t,g),r(t,q),r(q,d),u(e,k,c),T(L,e,c),u(e,M,c),u(e,U,c),r(U,R),u(e,Z,c),u(e,N,c),r(N,J),r(N,H),r(H,O),r(N,se),r(N,D),r(D,V),r(N,re),u(e,ee,c),T(C,e,c),u(e,W,c),u(e,b,c),r(b,P),r(P,B),T(I,B,null),r(b,te),r(b,G),r(G,oe),u(e,X,c),u(e,Y,c),r(Y,$e),u(e,h,c),T(S,e,c),u(e,le,c),u(e,me,c),r(me,De),u(e,he,c),T(ie,e,c),u(e,qe,c),u(e,ne,c),r(ne,Ce),u(e,Se,c),T(ye,e,c),u(e,lt,c),u(e,de,c),r(de,Ft),r(de,Ye),r(Ye,Pt),r(de,Lt),u(e,it,c),u(e,ce,c),r(ce,_e),r(_e,He),T(Ee,He,null),r(ce,Mt),r(ce,Ze),r(Ze,Dt),u(e,pt,c),T(Te,e,c),u(e,ft,c),u(e,Oe,c),r(Oe,Ct),u(e,mt,c),T(xe,e,c),u(e,ht,c),u(e,Ie,c),r(Ie,Ot),u(e,ct,c),u(e,pe,c),r(pe,Je),r(Je,It),r(pe,Ut),r(pe,Ke),r(Ke,Nt),r(pe,Bt),r(pe,ze),r(ze,Wt),r(ze,Re),r(Re,Yt),r(ze,Ht),u(e,ut,c),T(Ae,e,c),u(e,$t,c),u(e,ae,c),r(ae,Zt),r(ae,Fe),r(Fe,Jt),r(ae,Kt),r(ae,Ge),r(Ge,Rt),r(ae,Gt),r(ae,Xe),r(Xe,Xt),r(ae,Qt),u(e,dt,c),T(Pe,e,c),u(e,_t,c),T(ge,e,c),u(e,gt,c),u(e,Q,c),r(Q,Vt),r(Q,Ue),r(Ue,ea),r(Q,ta),r(Q,Qe),r(Qe,aa),r(Q,sa),r(Q,Ve),r(Ve,ra),r(Q,na),r(Q,et),r(et,oa),r(Q,la),u(e,kt,c),T(ke,e,c),u(e,wt,c),u(e,ue,c),r(ue,we),r(we,tt),T(Le,tt,null),r(ue,ia),r(ue,at),r(at,pa),u(e,vt,c),T(ve,e,c),u(e,bt,c),T(be,e,c),jt=!0},p(e,[c]){const Me={};c&2&&(Me.$$scope={dirty:c,ctx:e}),C.$set(Me);const st={};c&2&&(st.$$scope={dirty:c,ctx:e}),ge.$set(st);const rt={};c&2&&(rt.$$scope={dirty:c,ctx:e}),ke.$set(rt);const nt={};c&2&&(nt.$$scope={dirty:c,ctx:e}),ve.$set(nt);const ot={};c&2&&(ot.$$scope={dirty:c,ctx:e}),be.$set(ot)},i(e){jt||(x($.$$.fragment,e),x(L.$$.fragment,e),x(C.$$.fragment,e),x(I.$$.fragment,e),x(S.$$.fragment,e),x(ie.$$.fragment,e),x(ye.$$.fragment,e),x(Ee.$$.fragment,e),x(Te.$$.fragment,e),x(xe.$$.fragment,e),x(Ae.$$.fragment,e),x(Pe.$$.fragment,e),x(ge.$$.fragment,e),x(ke.$$.fragment,e),x(Le.$$.fragment,e),x(ve.$$.fragment,e),x(be.$$.fragment,e),jt=!0)},o(e){z($.$$.fragment,e),z(L.$$.fragment,e),z(C.$$.fragment,e),z(I.$$.fragment,e),z(S.$$.fragment,e),z(ie.$$.fragment,e),z(ye.$$.fragment,e),z(Ee.$$.fragment,e),z(Te.$$.fragment,e),z(xe.$$.fragment,e),z(Ae.$$.fragment,e),z(Pe.$$.fragment,e),z(ge.$$.fragment,e),z(ke.$$.fragment,e),z(Le.$$.fragment,e),z(ve.$$.fragment,e),z(be.$$.fragment,e),jt=!1},d(e){s(a),e&&s(l),e&&s(t),A($),e&&s(k),A(L,e),e&&s(M),e&&s(U),e&&s(Z),e&&s(N),e&&s(ee),A(C,e),e&&s(W),e&&s(b),A(I),e&&s(X),e&&s(Y),e&&s(h),A(S,e),e&&s(le),e&&s(me),e&&s(he),A(ie,e),e&&s(qe),e&&s(ne),e&&s(Se),A(ye,e),e&&s(lt),e&&s(de),e&&s(it),e&&s(ce),A(Ee),e&&s(pt),A(Te,e),e&&s(ft),e&&s(Oe),e&&s(mt),A(xe,e),e&&s(ht),e&&s(Ie),e&&s(ct),e&&s(pe),e&&s(ut),A(Ae,e),e&&s($t),e&&s(ae),e&&s(dt),A(Pe,e),e&&s(_t),A(ge,e),e&&s(gt),e&&s(Q),e&&s(kt),A(ke,e),e&&s(wt),e&&s(ue),A(Le),e&&s(vt),A(ve,e),e&&s(bt),A(be,e)}}}const ls={local:"translation",sections:[{local:"load-opus-books-dataset",title:"Load OPUS Books dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Translation"};function is(F){return Wa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $s extends Ia{constructor(a){super();Ua(this,a,is,os,Na,{})}}export{$s as default,ls as metadata};
