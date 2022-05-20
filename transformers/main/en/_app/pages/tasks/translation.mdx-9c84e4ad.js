import{S as Ia,i as Ua,s as Na,e as i,k as _,w as v,t as o,M as Ba,c as p,d as t,m as $,a as f,x as S,h as l,b as k,F as a,g as m,y,q as E,o as T,B as x,v as Wa,L as Oa}from"../../chunks/vendor-6b77c823.js";import{T as Ft}from"../../chunks/Tip-39098574.js";import{Y as Ma}from"../../chunks/Youtube-5c6e11e6.js";import{I as At}from"../../chunks/IconCopyLink-7a11ce68.js";import{C as ne}from"../../chunks/CodeBlock-3a8b25a8.js";import{F as Ca,M as Pt}from"../../chunks/Markdown-9acf6d91.js";function Ya(P){let s,c,n,u,b;return{c(){s=i("p"),c=o("See the translation "),n=i("a"),u=o("task page"),b=o(" for more information about its associated models, datasets, and metrics."),this.h()},l(g){s=p(g,"P",{});var q=f(s);c=l(q,"See the translation "),n=p(q,"A",{href:!0,rel:!0});var z=f(n);u=l(z,"task page"),z.forEach(t),b=l(q," for more information about its associated models, datasets, and metrics."),q.forEach(t),this.h()},h(){k(n,"href","https://huggingface.co/tasks/translation"),k(n,"rel","nofollow")},m(g,q){m(g,s,q),a(s,c),a(s,n),a(n,u),a(s,b)},d(g){g&&t(s)}}}function Ha(P){let s,c;return s=new ne({props:{code:`from transformers import DataCollatorForSeq2Seq

data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForSeq2Seq

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model)`}}),{c(){v(s.$$.fragment)},l(n){S(s.$$.fragment,n)},m(n,u){y(s,n,u),c=!0},p:Oa,i(n){c||(E(s.$$.fragment,n),c=!0)},o(n){T(s.$$.fragment,n),c=!1},d(n){x(s,n)}}}function Za(P){let s,c;return s=new Pt({props:{$$slots:{default:[Ha]},$$scope:{ctx:P}}}),{c(){v(s.$$.fragment)},l(n){S(s.$$.fragment,n)},m(n,u){y(s,n,u),c=!0},p(n,u){const b={};u&2&&(b.$$scope={dirty:u,ctx:n}),s.$set(b)},i(n){c||(E(s.$$.fragment,n),c=!0)},o(n){T(s.$$.fragment,n),c=!1},d(n){x(s,n)}}}function Ja(P){let s,c;return s=new ne({props:{code:`from transformers import DataCollatorForSeq2Seq

data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model, return_tensors="tf")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForSeq2Seq

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),{c(){v(s.$$.fragment)},l(n){S(s.$$.fragment,n)},m(n,u){y(s,n,u),c=!0},p:Oa,i(n){c||(E(s.$$.fragment,n),c=!0)},o(n){T(s.$$.fragment,n),c=!1},d(n){x(s,n)}}}function Ka(P){let s,c;return s=new Pt({props:{$$slots:{default:[Ja]},$$scope:{ctx:P}}}),{c(){v(s.$$.fragment)},l(n){S(s.$$.fragment,n)},m(n,u){y(s,n,u),c=!0},p(n,u){const b={};u&2&&(b.$$scope={dirty:u,ctx:n}),s.$set(b)},i(n){c||(E(s.$$.fragment,n),c=!0)},o(n){T(s.$$.fragment,n),c=!1},d(n){x(s,n)}}}function Ra(P){let s,c,n,u,b,g,q,z;return{c(){s=i("p"),c=o("If you aren\u2019t familiar with fine-tuning a model with the "),n=i("a"),u=o("Trainer"),b=o(", take a look at the basic tutorial "),g=i("a"),q=o("here"),z=o("!"),this.h()},l(A){s=p(A,"P",{});var j=f(s);c=l(j,"If you aren\u2019t familiar with fine-tuning a model with the "),n=p(j,"A",{href:!0});var L=f(n);u=l(L,"Trainer"),L.forEach(t),b=l(j,", take a look at the basic tutorial "),g=p(j,"A",{href:!0});var Y=f(g);q=l(Y,"here"),Y.forEach(t),z=l(j,"!"),j.forEach(t),this.h()},h(){k(n,"href","/docs/transformers/main/en/main_classes/trainer#transformers.Trainer"),k(g,"href","../training#finetune-with-trainer")},m(A,j){m(A,s,j),a(s,c),a(s,n),a(n,u),a(s,b),a(s,g),a(g,q),a(s,z)},d(A){A&&t(s)}}}function Xa(P){let s,c,n,u,b,g,q,z,A,j,L,Y,X,C,J,D,te,H,$e,fe,M,me,N,he,B,ce,O,K,I,G,Q,re,W,ae;return q=new ne({props:{code:`from transformers import AutoModelForSeq2SeqLM, Seq2SeqTrainingArguments, Seq2SeqTrainer

model = AutoModelForSeq2SeqLM.from_pretrained("t5-small")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSeq2SeqLM, Seq2SeqTrainingArguments, Seq2SeqTrainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)`}}),A=new Ft({props:{$$slots:{default:[Ra]},$$scope:{ctx:P}}}),W=new ne({props:{code:`training_args = Seq2SeqTrainingArguments(
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

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = Seq2SeqTrainingArguments(
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

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){s=i("p"),c=o("Load T5 with "),n=i("a"),u=o("AutoModelForSeq2SeqLM"),b=o(":"),g=_(),v(q.$$.fragment),z=_(),v(A.$$.fragment),j=_(),L=i("p"),Y=o("At this point, only three steps remain:"),X=_(),C=i("ol"),J=i("li"),D=o("Define your training hyperparameters in "),te=i("a"),H=o("Seq2SeqTrainingArguments"),$e=o("."),fe=_(),M=i("li"),me=o("Pass the training arguments to "),N=i("a"),he=o("Seq2SeqTrainer"),B=o(" along with the model, dataset, tokenizer, and data collator."),ce=_(),O=i("li"),K=o("Call "),I=i("a"),G=o("train()"),Q=o(" to fine-tune your model."),re=_(),v(W.$$.fragment),this.h()},l(d){s=p(d,"P",{});var F=f(s);c=l(F,"Load T5 with "),n=p(F,"A",{href:!0});var se=f(n);u=l(se,"AutoModelForSeq2SeqLM"),se.forEach(t),b=l(F,":"),F.forEach(t),g=$(d),S(q.$$.fragment,d),z=$(d),S(A.$$.fragment,d),j=$(d),L=p(d,"P",{});var Z=f(L);Y=l(Z,"At this point, only three steps remain:"),Z.forEach(t),X=$(d),C=p(d,"OL",{});var V=f(C);J=p(V,"LI",{});var U=f(J);D=l(U,"Define your training hyperparameters in "),te=p(U,"A",{href:!0});var ke=f(te);H=l(ke,"Seq2SeqTrainingArguments"),ke.forEach(t),$e=l(U,"."),U.forEach(t),fe=$(V),M=p(V,"LI",{});var R=f(M);me=l(R,"Pass the training arguments to "),N=p(R,"A",{href:!0});var ee=f(N);he=l(ee,"Seq2SeqTrainer"),ee.forEach(t),B=l(R," along with the model, dataset, tokenizer, and data collator."),R.forEach(t),ce=$(V),O=p(V,"LI",{});var ie=f(O);K=l(ie,"Call "),I=p(ie,"A",{href:!0});var pe=f(I);G=l(pe,"train()"),pe.forEach(t),Q=l(ie," to fine-tune your model."),ie.forEach(t),V.forEach(t),re=$(d),S(W.$$.fragment,d),this.h()},h(){k(n,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoModelForSeq2SeqLM"),k(te,"href","/docs/transformers/main/en/main_classes/trainer#transformers.Seq2SeqTrainingArguments"),k(N,"href","/docs/transformers/main/en/main_classes/trainer#transformers.Seq2SeqTrainer"),k(I,"href","/docs/transformers/main/en/main_classes/trainer#transformers.Trainer.train")},m(d,F){m(d,s,F),a(s,c),a(s,n),a(n,u),a(s,b),m(d,g,F),y(q,d,F),m(d,z,F),y(A,d,F),m(d,j,F),m(d,L,F),a(L,Y),m(d,X,F),m(d,C,F),a(C,J),a(J,D),a(J,te),a(te,H),a(J,$e),a(C,fe),a(C,M),a(M,me),a(M,N),a(N,he),a(M,B),a(C,ce),a(C,O),a(O,K),a(O,I),a(I,G),a(O,Q),m(d,re,F),y(W,d,F),ae=!0},p(d,F){const se={};F&2&&(se.$$scope={dirty:F,ctx:d}),A.$set(se)},i(d){ae||(E(q.$$.fragment,d),E(A.$$.fragment,d),E(W.$$.fragment,d),ae=!0)},o(d){T(q.$$.fragment,d),T(A.$$.fragment,d),T(W.$$.fragment,d),ae=!1},d(d){d&&t(s),d&&t(g),x(q,d),d&&t(z),x(A,d),d&&t(j),d&&t(L),d&&t(X),d&&t(C),d&&t(re),x(W,d)}}}function Ga(P){let s,c;return s=new Pt({props:{$$slots:{default:[Xa]},$$scope:{ctx:P}}}),{c(){v(s.$$.fragment)},l(n){S(s.$$.fragment,n)},m(n,u){y(s,n,u),c=!0},p(n,u){const b={};u&2&&(b.$$scope={dirty:u,ctx:n}),s.$set(b)},i(n){c||(E(s.$$.fragment,n),c=!0)},o(n){T(s.$$.fragment,n),c=!1},d(n){x(s,n)}}}function Qa(P){let s,c,n,u,b;return{c(){s=i("p"),c=o("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),n=i("a"),u=o("here"),b=o("!"),this.h()},l(g){s=p(g,"P",{});var q=f(s);c=l(q,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),n=p(q,"A",{href:!0});var z=f(n);u=l(z,"here"),z.forEach(t),b=l(q,"!"),q.forEach(t),this.h()},h(){k(n,"href","training#finetune-with-keras")},m(g,q){m(g,s,q),a(s,c),a(s,n),a(n,u),a(s,b)},d(g){g&&t(s)}}}function Va(P){let s,c,n,u,b,g,q,z,A,j,L,Y,X,C,J,D,te,H,$e,fe,M,me,N,he,B,ce,O,K,I,G,Q,re,W,ae,d,F,se,Z,V,U,ke,R,ee,ie,pe,Ee,ue,de;return C=new ne({props:{code:`tf_train_set = tokenized_books["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "labels"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_test_set = tokenized_books["test"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "labels"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tf_train_set = tokenized_books[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tf_test_set = tokenized_books[<span class="hljs-string">&quot;test&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)`}}),D=new Ft({props:{$$slots:{default:[Qa]},$$scope:{ctx:P}}}),M=new ne({props:{code:`from transformers import create_optimizer, AdamWeightDecay

optimizer = AdamWeightDecay(learning_rate=2e-5, weight_decay_rate=0.01)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer, AdamWeightDecay

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = AdamWeightDecay(learning_rate=<span class="hljs-number">2e-5</span>, weight_decay_rate=<span class="hljs-number">0.01</span>)`}}),I=new ne({props:{code:`from transformers import TFAutoModelForSeq2SeqLM

model = TFAutoModelForSeq2SeqLM.from_pretrained("t5-small")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSeq2SeqLM

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)`}}),Z=new ne({props:{code:"model.compile(optimizer=optimizer)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)'}}),ue=new ne({props:{code:"model.fit(x=tf_train_set, validation_data=tf_test_set, epochs=3)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_test_set, epochs=<span class="hljs-number">3</span>)'}}),{c(){s=i("p"),c=o("To fine-tune a model in TensorFlow, start by converting your datasets to the "),n=i("code"),u=o("tf.data.Dataset"),b=o(" format with "),g=i("a"),q=i("code"),z=o("to_tf_dataset"),A=o(". Specify inputs and labels in "),j=i("code"),L=o("columns"),Y=o(", whether to shuffle the dataset order, batch size, and the data collator:"),X=_(),v(C.$$.fragment),J=_(),v(D.$$.fragment),te=_(),H=i("p"),$e=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),fe=_(),v(M.$$.fragment),me=_(),N=i("p"),he=o("Load T5 with "),B=i("a"),ce=o("TFAutoModelForSeq2SeqLM"),O=o(":"),K=_(),v(I.$$.fragment),G=_(),Q=i("p"),re=o("Configure the model for training with "),W=i("a"),ae=i("code"),d=o("compile"),F=o(":"),se=_(),v(Z.$$.fragment),V=_(),U=i("p"),ke=o("Call "),R=i("a"),ee=i("code"),ie=o("fit"),pe=o(" to fine-tune the model:"),Ee=_(),v(ue.$$.fragment),this.h()},l(r){s=p(r,"P",{});var w=f(s);c=l(w,"To fine-tune a model in TensorFlow, start by converting your datasets to the "),n=p(w,"CODE",{});var Se=f(n);u=l(Se,"tf.data.Dataset"),Se.forEach(t),b=l(w," format with "),g=p(w,"A",{href:!0,rel:!0});var Te=f(g);q=p(Te,"CODE",{});var Ye=f(q);z=l(Ye,"to_tf_dataset"),Ye.forEach(t),Te.forEach(t),A=l(w,". Specify inputs and labels in "),j=p(w,"CODE",{});var He=f(j);L=l(He,"columns"),He.forEach(t),Y=l(w,", whether to shuffle the dataset order, batch size, and the data collator:"),w.forEach(t),X=$(r),S(C.$$.fragment,r),J=$(r),S(D.$$.fragment,r),te=$(r),H=p(r,"P",{});var Le=f(H);$e=l(Le,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Le.forEach(t),fe=$(r),S(M.$$.fragment,r),me=$(r),N=p(r,"P",{});var oe=f(N);he=l(oe,"Load T5 with "),B=p(oe,"A",{href:!0});var ge=f(B);ce=l(ge,"TFAutoModelForSeq2SeqLM"),ge.forEach(t),O=l(oe,":"),oe.forEach(t),K=$(r),S(I.$$.fragment,r),G=$(r),Q=p(r,"P",{});var we=f(Q);re=l(we,"Configure the model for training with "),W=p(we,"A",{href:!0,rel:!0});var be=f(W);ae=p(be,"CODE",{});var Ze=f(ae);d=l(Ze,"compile"),Ze.forEach(t),be.forEach(t),F=l(we,":"),we.forEach(t),se=$(r),S(Z.$$.fragment,r),V=$(r),U=p(r,"P",{});var qe=f(U);ke=l(qe,"Call "),R=p(qe,"A",{href:!0,rel:!0});var Je=f(R);ee=p(Je,"CODE",{});var De=f(ee);ie=l(De,"fit"),De.forEach(t),Je.forEach(t),pe=l(qe," to fine-tune the model:"),qe.forEach(t),Ee=$(r),S(ue.$$.fragment,r),this.h()},h(){k(g,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.to_tf_dataset"),k(g,"rel","nofollow"),k(B,"href","/docs/transformers/main/en/model_doc/auto#transformers.TFAutoModelForSeq2SeqLM"),k(W,"href","https://keras.io/api/models/model_training_apis/#compile-method"),k(W,"rel","nofollow"),k(R,"href","https://keras.io/api/models/model_training_apis/#fit-method"),k(R,"rel","nofollow")},m(r,w){m(r,s,w),a(s,c),a(s,n),a(n,u),a(s,b),a(s,g),a(g,q),a(q,z),a(s,A),a(s,j),a(j,L),a(s,Y),m(r,X,w),y(C,r,w),m(r,J,w),y(D,r,w),m(r,te,w),m(r,H,w),a(H,$e),m(r,fe,w),y(M,r,w),m(r,me,w),m(r,N,w),a(N,he),a(N,B),a(B,ce),a(N,O),m(r,K,w),y(I,r,w),m(r,G,w),m(r,Q,w),a(Q,re),a(Q,W),a(W,ae),a(ae,d),a(Q,F),m(r,se,w),y(Z,r,w),m(r,V,w),m(r,U,w),a(U,ke),a(U,R),a(R,ee),a(ee,ie),a(U,pe),m(r,Ee,w),y(ue,r,w),de=!0},p(r,w){const Se={};w&2&&(Se.$$scope={dirty:w,ctx:r}),D.$set(Se)},i(r){de||(E(C.$$.fragment,r),E(D.$$.fragment,r),E(M.$$.fragment,r),E(I.$$.fragment,r),E(Z.$$.fragment,r),E(ue.$$.fragment,r),de=!0)},o(r){T(C.$$.fragment,r),T(D.$$.fragment,r),T(M.$$.fragment,r),T(I.$$.fragment,r),T(Z.$$.fragment,r),T(ue.$$.fragment,r),de=!1},d(r){r&&t(s),r&&t(X),x(C,r),r&&t(J),x(D,r),r&&t(te),r&&t(H),r&&t(fe),x(M,r),r&&t(me),r&&t(N),r&&t(K),x(I,r),r&&t(G),r&&t(Q),r&&t(se),x(Z,r),r&&t(V),r&&t(U),r&&t(Ee),x(ue,r)}}}function es(P){let s,c;return s=new Pt({props:{$$slots:{default:[Va]},$$scope:{ctx:P}}}),{c(){v(s.$$.fragment)},l(n){S(s.$$.fragment,n)},m(n,u){y(s,n,u),c=!0},p(n,u){const b={};u&2&&(b.$$scope={dirty:u,ctx:n}),s.$set(b)},i(n){c||(E(s.$$.fragment,n),c=!0)},o(n){T(s.$$.fragment,n),c=!1},d(n){x(s,n)}}}function ts(P){let s,c,n,u,b,g,q,z;return{c(){s=i("p"),c=o(`For a more in-depth example of how to fine-tune a model for translation, take a look at the corresponding
`),n=i("a"),u=o("PyTorch notebook"),b=o(`
or `),g=i("a"),q=o("TensorFlow notebook"),z=o("."),this.h()},l(A){s=p(A,"P",{});var j=f(s);c=l(j,`For a more in-depth example of how to fine-tune a model for translation, take a look at the corresponding
`),n=p(j,"A",{href:!0,rel:!0});var L=f(n);u=l(L,"PyTorch notebook"),L.forEach(t),b=l(j,`
or `),g=p(j,"A",{href:!0,rel:!0});var Y=f(g);q=l(Y,"TensorFlow notebook"),Y.forEach(t),z=l(j,"."),j.forEach(t),this.h()},h(){k(n,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/translation.ipynb"),k(n,"rel","nofollow"),k(g,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/translation-tf.ipynb"),k(g,"rel","nofollow")},m(A,j){m(A,s,j),a(s,c),a(s,n),a(n,u),a(s,b),a(s,g),a(g,q),a(s,z)},d(A){A&&t(s)}}}function as(P){let s,c,n,u,b,g,q,z,A,j,L,Y,X,C,J,D,te,H,$e,fe,M,me,N,he,B,ce,O,K,I,G,Q,re,W,ae,d,F,se,Z,V,U,ke,R,ee,ie,pe,Ee,ue,de,r,w,Se,Te,Ye,He,Le,oe,ge,we,be,Ze,qe,Je,De,Me,ct,Ke,Lt,ut,Ce,dt,Re,Dt,_t,je,Ve,Mt,Ct,et,Ot,It,Oe,Ut,tt,Nt,Bt,$t,Ie,gt,_e,Wt,Ue,at,Yt,Ht,st,Zt,Jt,nt,Kt,Rt,kt,Ne,wt,le,Xt,Xe,Gt,Qt,rt,Vt,ea,ot,ta,aa,lt,sa,na,bt,xe,qt,ye,ze,it,Be,ra,pt,oa,jt,Ae,vt,Fe,St;return g=new At({}),L=new Ma({props:{id:"1JvfrvZgi6c"}}),B=new Ft({props:{$$slots:{default:[Ya]},$$scope:{ctx:P}}}),G=new At({}),Z=new ne({props:{code:`from datasets import load_dataset

books = load_dataset("opus_books", "en-fr")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>books = load_dataset(<span class="hljs-string">&quot;opus_books&quot;</span>, <span class="hljs-string">&quot;en-fr&quot;</span>)`}}),ee=new ne({props:{code:'books = books["train"].train_test_split(test_size=0.2)',highlighted:'books = books[<span class="hljs-string">&quot;train&quot;</span>].train_test_split(test_size=<span class="hljs-number">0.2</span>)'}}),de=new ne({props:{code:'books["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>books[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;90560&#x27;</span>,
 <span class="hljs-string">&#x27;translation&#x27;</span>: {<span class="hljs-string">&#x27;en&#x27;</span>: <span class="hljs-string">&#x27;But this lofty plateau measured only a few fathoms, and soon we reentered Our Element.&#x27;</span>,
  <span class="hljs-string">&#x27;fr&#x27;</span>: <span class="hljs-string">&#x27;Mais ce plateau \xE9lev\xE9 ne mesurait que quelques toises, et bient\xF4t nous f\xFBmes rentr\xE9s dans notre \xE9l\xE9ment.&#x27;</span>}}`}}),be=new At({}),Me=new Ma({props:{id:"XAR8jnZZuUs"}}),Ce=new ne({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("t5-small")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)`}}),Ie=new ne({props:{code:`source_lang = "en"
target_lang = "fr"
prefix = "translate English to French: "


def preprocess_function(examples):
    inputs = [prefix + example[source_lang] for example in examples["translation"]]
    targets = [example[target_lang] for example in examples["translation"]]
    model_inputs = tokenizer(inputs, max_length=128, truncation=True)

    with tokenizer.as_target_tokenizer():
        labels = tokenizer(targets, max_length=128, truncation=True)

    model_inputs["labels"] = labels["input_ids"]
    return model_inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>source_lang = <span class="hljs-string">&quot;en&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_lang = <span class="hljs-string">&quot;fr&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>prefix = <span class="hljs-string">&quot;translate English to French: &quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    inputs = [prefix + example[source_lang] <span class="hljs-keyword">for</span> example <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;translation&quot;</span>]]
<span class="hljs-meta">... </span>    targets = [example[target_lang] <span class="hljs-keyword">for</span> example <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;translation&quot;</span>]]
<span class="hljs-meta">... </span>    model_inputs = tokenizer(inputs, max_length=<span class="hljs-number">128</span>, truncation=<span class="hljs-literal">True</span>)

<span class="hljs-meta">... </span>    <span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>        labels = tokenizer(targets, max_length=<span class="hljs-number">128</span>, truncation=<span class="hljs-literal">True</span>)

<span class="hljs-meta">... </span>    model_inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> model_inputs`}}),Ne=new ne({props:{code:"tokenized_books = books.map(preprocess_function, batched=True)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_books = books.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)'}}),xe=new Ca({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Ka],pytorch:[Za]},$$scope:{ctx:P}}}),Be=new At({}),Ae=new Ca({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[es],pytorch:[Ga]},$$scope:{ctx:P}}}),Fe=new Ft({props:{$$slots:{default:[ts]},$$scope:{ctx:P}}}),{c(){s=i("meta"),c=_(),n=i("h1"),u=i("a"),b=i("span"),v(g.$$.fragment),q=_(),z=i("span"),A=o("Translation"),j=_(),v(L.$$.fragment),Y=_(),X=i("p"),C=o("Translation converts a sequence of text from one language to another. It is one of several tasks you can formulate as a sequence-to-sequence problem, a powerful framework that extends to vision and audio tasks."),J=_(),D=i("p"),te=o("This guide will show you how to fine-tune "),H=i("a"),$e=o("T5"),fe=o(" on the English-French subset of the "),M=i("a"),me=o("OPUS Books"),N=o(" dataset to translate English text to French."),he=_(),v(B.$$.fragment),ce=_(),O=i("h2"),K=i("a"),I=i("span"),v(G.$$.fragment),Q=_(),re=i("span"),W=o("Load OPUS Books dataset"),ae=_(),d=i("p"),F=o("Load the OPUS Books dataset from the \u{1F917} Datasets library:"),se=_(),v(Z.$$.fragment),V=_(),U=i("p"),ke=o("Split this dataset into a train and test set:"),R=_(),v(ee.$$.fragment),ie=_(),pe=i("p"),Ee=o("Then take a look at an example:"),ue=_(),v(de.$$.fragment),r=_(),w=i("p"),Se=o("The "),Te=i("code"),Ye=o("translation"),He=o(" field is a dictionary containing the English and French translations of the text."),Le=_(),oe=i("h2"),ge=i("a"),we=i("span"),v(be.$$.fragment),Ze=_(),qe=i("span"),Je=o("Preprocess"),De=_(),v(Me.$$.fragment),ct=_(),Ke=i("p"),Lt=o("Load the T5 tokenizer to process the language pairs:"),ut=_(),v(Ce.$$.fragment),dt=_(),Re=i("p"),Dt=o("The preprocessing function needs to:"),_t=_(),je=i("ol"),Ve=i("li"),Mt=o("Prefix the input with a prompt so T5 knows this is a translation task. Some models capable of multiple NLP tasks require prompting for specific tasks."),Ct=_(),et=i("li"),Ot=o("Tokenize the input (English) and target (French) separately. You can\u2019t tokenize French text with a tokenizer pretrained on an English vocabulary. A context manager will help set the tokenizer to French first before tokenizing it."),It=_(),Oe=i("li"),Ut=o("Truncate sequences to be no longer than the maximum length set by the "),tt=i("code"),Nt=o("max_length"),Bt=o(" parameter."),$t=_(),v(Ie.$$.fragment),gt=_(),_e=i("p"),Wt=o("Use \u{1F917} Datasets "),Ue=i("a"),at=i("code"),Yt=o("map"),Ht=o(" function to apply the preprocessing function over the entire dataset. You can speed up the "),st=i("code"),Zt=o("map"),Jt=o(" function by setting "),nt=i("code"),Kt=o("batched=True"),Rt=o(" to process multiple elements of the dataset at once:"),kt=_(),v(Ne.$$.fragment),wt=_(),le=i("p"),Xt=o("Use "),Xe=i("a"),Gt=o("DataCollatorForSeq2Seq"),Qt=o(" to create a batch of examples. It will also "),rt=i("em"),Vt=o("dynamically pad"),ea=o(" your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ot=i("code"),ta=o("tokenizer"),aa=o(" function by setting "),lt=i("code"),sa=o("padding=True"),na=o(", dynamic padding is more efficient."),bt=_(),v(xe.$$.fragment),qt=_(),ye=i("h2"),ze=i("a"),it=i("span"),v(Be.$$.fragment),ra=_(),pt=i("span"),oa=o("Train"),jt=_(),v(Ae.$$.fragment),vt=_(),v(Fe.$$.fragment),this.h()},l(e){const h=Ba('[data-svelte="svelte-1phssyn"]',document.head);s=p(h,"META",{name:!0,content:!0}),h.forEach(t),c=$(e),n=p(e,"H1",{class:!0});var We=f(n);u=p(We,"A",{id:!0,class:!0,href:!0});var ft=f(u);b=p(ft,"SPAN",{});var mt=f(b);S(g.$$.fragment,mt),mt.forEach(t),ft.forEach(t),q=$(We),z=p(We,"SPAN",{});var ht=f(z);A=l(ht,"Translation"),ht.forEach(t),We.forEach(t),j=$(e),S(L.$$.fragment,e),Y=$(e),X=p(e,"P",{});var la=f(X);C=l(la,"Translation converts a sequence of text from one language to another. It is one of several tasks you can formulate as a sequence-to-sequence problem, a powerful framework that extends to vision and audio tasks."),la.forEach(t),J=$(e),D=p(e,"P",{});var Ge=f(D);te=l(Ge,"This guide will show you how to fine-tune "),H=p(Ge,"A",{href:!0,rel:!0});var ia=f(H);$e=l(ia,"T5"),ia.forEach(t),fe=l(Ge," on the English-French subset of the "),M=p(Ge,"A",{href:!0,rel:!0});var pa=f(M);me=l(pa,"OPUS Books"),pa.forEach(t),N=l(Ge," dataset to translate English text to French."),Ge.forEach(t),he=$(e),S(B.$$.fragment,e),ce=$(e),O=p(e,"H2",{class:!0});var yt=f(O);K=p(yt,"A",{id:!0,class:!0,href:!0});var fa=f(K);I=p(fa,"SPAN",{});var ma=f(I);S(G.$$.fragment,ma),ma.forEach(t),fa.forEach(t),Q=$(yt),re=p(yt,"SPAN",{});var ha=f(re);W=l(ha,"Load OPUS Books dataset"),ha.forEach(t),yt.forEach(t),ae=$(e),d=p(e,"P",{});var ca=f(d);F=l(ca,"Load the OPUS Books dataset from the \u{1F917} Datasets library:"),ca.forEach(t),se=$(e),S(Z.$$.fragment,e),V=$(e),U=p(e,"P",{});var ua=f(U);ke=l(ua,"Split this dataset into a train and test set:"),ua.forEach(t),R=$(e),S(ee.$$.fragment,e),ie=$(e),pe=p(e,"P",{});var da=f(pe);Ee=l(da,"Then take a look at an example:"),da.forEach(t),ue=$(e),S(de.$$.fragment,e),r=$(e),w=p(e,"P",{});var Et=f(w);Se=l(Et,"The "),Te=p(Et,"CODE",{});var _a=f(Te);Ye=l(_a,"translation"),_a.forEach(t),He=l(Et," field is a dictionary containing the English and French translations of the text."),Et.forEach(t),Le=$(e),oe=p(e,"H2",{class:!0});var Tt=f(oe);ge=p(Tt,"A",{id:!0,class:!0,href:!0});var $a=f(ge);we=p($a,"SPAN",{});var ga=f(we);S(be.$$.fragment,ga),ga.forEach(t),$a.forEach(t),Ze=$(Tt),qe=p(Tt,"SPAN",{});var ka=f(qe);Je=l(ka,"Preprocess"),ka.forEach(t),Tt.forEach(t),De=$(e),S(Me.$$.fragment,e),ct=$(e),Ke=p(e,"P",{});var wa=f(Ke);Lt=l(wa,"Load the T5 tokenizer to process the language pairs:"),wa.forEach(t),ut=$(e),S(Ce.$$.fragment,e),dt=$(e),Re=p(e,"P",{});var ba=f(Re);Dt=l(ba,"The preprocessing function needs to:"),ba.forEach(t),_t=$(e),je=p(e,"OL",{});var Qe=f(je);Ve=p(Qe,"LI",{});var qa=f(Ve);Mt=l(qa,"Prefix the input with a prompt so T5 knows this is a translation task. Some models capable of multiple NLP tasks require prompting for specific tasks."),qa.forEach(t),Ct=$(Qe),et=p(Qe,"LI",{});var ja=f(et);Ot=l(ja,"Tokenize the input (English) and target (French) separately. You can\u2019t tokenize French text with a tokenizer pretrained on an English vocabulary. A context manager will help set the tokenizer to French first before tokenizing it."),ja.forEach(t),It=$(Qe),Oe=p(Qe,"LI",{});var xt=f(Oe);Ut=l(xt,"Truncate sequences to be no longer than the maximum length set by the "),tt=p(xt,"CODE",{});var va=f(tt);Nt=l(va,"max_length"),va.forEach(t),Bt=l(xt," parameter."),xt.forEach(t),Qe.forEach(t),$t=$(e),S(Ie.$$.fragment,e),gt=$(e),_e=p(e,"P",{});var Pe=f(_e);Wt=l(Pe,"Use \u{1F917} Datasets "),Ue=p(Pe,"A",{href:!0,rel:!0});var Sa=f(Ue);at=p(Sa,"CODE",{});var ya=f(at);Yt=l(ya,"map"),ya.forEach(t),Sa.forEach(t),Ht=l(Pe," function to apply the preprocessing function over the entire dataset. You can speed up the "),st=p(Pe,"CODE",{});var Ea=f(st);Zt=l(Ea,"map"),Ea.forEach(t),Jt=l(Pe," function by setting "),nt=p(Pe,"CODE",{});var Ta=f(nt);Kt=l(Ta,"batched=True"),Ta.forEach(t),Rt=l(Pe," to process multiple elements of the dataset at once:"),Pe.forEach(t),kt=$(e),S(Ne.$$.fragment,e),wt=$(e),le=p(e,"P",{});var ve=f(le);Xt=l(ve,"Use "),Xe=p(ve,"A",{href:!0});var xa=f(Xe);Gt=l(xa,"DataCollatorForSeq2Seq"),xa.forEach(t),Qt=l(ve," to create a batch of examples. It will also "),rt=p(ve,"EM",{});var za=f(rt);Vt=l(za,"dynamically pad"),za.forEach(t),ea=l(ve," your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ot=p(ve,"CODE",{});var Aa=f(ot);ta=l(Aa,"tokenizer"),Aa.forEach(t),aa=l(ve," function by setting "),lt=p(ve,"CODE",{});var Fa=f(lt);sa=l(Fa,"padding=True"),Fa.forEach(t),na=l(ve,", dynamic padding is more efficient."),ve.forEach(t),bt=$(e),S(xe.$$.fragment,e),qt=$(e),ye=p(e,"H2",{class:!0});var zt=f(ye);ze=p(zt,"A",{id:!0,class:!0,href:!0});var Pa=f(ze);it=p(Pa,"SPAN",{});var La=f(it);S(Be.$$.fragment,La),La.forEach(t),Pa.forEach(t),ra=$(zt),pt=p(zt,"SPAN",{});var Da=f(pt);oa=l(Da,"Train"),Da.forEach(t),zt.forEach(t),jt=$(e),S(Ae.$$.fragment,e),vt=$(e),S(Fe.$$.fragment,e),this.h()},h(){k(s,"name","hf:doc:metadata"),k(s,"content",JSON.stringify(ss)),k(u,"id","translation"),k(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(u,"href","#translation"),k(n,"class","relative group"),k(H,"href","https://huggingface.co/t5-small"),k(H,"rel","nofollow"),k(M,"href","https://huggingface.co/datasets/opus_books"),k(M,"rel","nofollow"),k(K,"id","load-opus-books-dataset"),k(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(K,"href","#load-opus-books-dataset"),k(O,"class","relative group"),k(ge,"id","preprocess"),k(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(ge,"href","#preprocess"),k(oe,"class","relative group"),k(Ue,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),k(Ue,"rel","nofollow"),k(Xe,"href","/docs/transformers/main/en/main_classes/data_collator#transformers.DataCollatorForSeq2Seq"),k(ze,"id","train"),k(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(ze,"href","#train"),k(ye,"class","relative group")},m(e,h){a(document.head,s),m(e,c,h),m(e,n,h),a(n,u),a(u,b),y(g,b,null),a(n,q),a(n,z),a(z,A),m(e,j,h),y(L,e,h),m(e,Y,h),m(e,X,h),a(X,C),m(e,J,h),m(e,D,h),a(D,te),a(D,H),a(H,$e),a(D,fe),a(D,M),a(M,me),a(D,N),m(e,he,h),y(B,e,h),m(e,ce,h),m(e,O,h),a(O,K),a(K,I),y(G,I,null),a(O,Q),a(O,re),a(re,W),m(e,ae,h),m(e,d,h),a(d,F),m(e,se,h),y(Z,e,h),m(e,V,h),m(e,U,h),a(U,ke),m(e,R,h),y(ee,e,h),m(e,ie,h),m(e,pe,h),a(pe,Ee),m(e,ue,h),y(de,e,h),m(e,r,h),m(e,w,h),a(w,Se),a(w,Te),a(Te,Ye),a(w,He),m(e,Le,h),m(e,oe,h),a(oe,ge),a(ge,we),y(be,we,null),a(oe,Ze),a(oe,qe),a(qe,Je),m(e,De,h),y(Me,e,h),m(e,ct,h),m(e,Ke,h),a(Ke,Lt),m(e,ut,h),y(Ce,e,h),m(e,dt,h),m(e,Re,h),a(Re,Dt),m(e,_t,h),m(e,je,h),a(je,Ve),a(Ve,Mt),a(je,Ct),a(je,et),a(et,Ot),a(je,It),a(je,Oe),a(Oe,Ut),a(Oe,tt),a(tt,Nt),a(Oe,Bt),m(e,$t,h),y(Ie,e,h),m(e,gt,h),m(e,_e,h),a(_e,Wt),a(_e,Ue),a(Ue,at),a(at,Yt),a(_e,Ht),a(_e,st),a(st,Zt),a(_e,Jt),a(_e,nt),a(nt,Kt),a(_e,Rt),m(e,kt,h),y(Ne,e,h),m(e,wt,h),m(e,le,h),a(le,Xt),a(le,Xe),a(Xe,Gt),a(le,Qt),a(le,rt),a(rt,Vt),a(le,ea),a(le,ot),a(ot,ta),a(le,aa),a(le,lt),a(lt,sa),a(le,na),m(e,bt,h),y(xe,e,h),m(e,qt,h),m(e,ye,h),a(ye,ze),a(ze,it),y(Be,it,null),a(ye,ra),a(ye,pt),a(pt,oa),m(e,jt,h),y(Ae,e,h),m(e,vt,h),y(Fe,e,h),St=!0},p(e,[h]){const We={};h&2&&(We.$$scope={dirty:h,ctx:e}),B.$set(We);const ft={};h&2&&(ft.$$scope={dirty:h,ctx:e}),xe.$set(ft);const mt={};h&2&&(mt.$$scope={dirty:h,ctx:e}),Ae.$set(mt);const ht={};h&2&&(ht.$$scope={dirty:h,ctx:e}),Fe.$set(ht)},i(e){St||(E(g.$$.fragment,e),E(L.$$.fragment,e),E(B.$$.fragment,e),E(G.$$.fragment,e),E(Z.$$.fragment,e),E(ee.$$.fragment,e),E(de.$$.fragment,e),E(be.$$.fragment,e),E(Me.$$.fragment,e),E(Ce.$$.fragment,e),E(Ie.$$.fragment,e),E(Ne.$$.fragment,e),E(xe.$$.fragment,e),E(Be.$$.fragment,e),E(Ae.$$.fragment,e),E(Fe.$$.fragment,e),St=!0)},o(e){T(g.$$.fragment,e),T(L.$$.fragment,e),T(B.$$.fragment,e),T(G.$$.fragment,e),T(Z.$$.fragment,e),T(ee.$$.fragment,e),T(de.$$.fragment,e),T(be.$$.fragment,e),T(Me.$$.fragment,e),T(Ce.$$.fragment,e),T(Ie.$$.fragment,e),T(Ne.$$.fragment,e),T(xe.$$.fragment,e),T(Be.$$.fragment,e),T(Ae.$$.fragment,e),T(Fe.$$.fragment,e),St=!1},d(e){t(s),e&&t(c),e&&t(n),x(g),e&&t(j),x(L,e),e&&t(Y),e&&t(X),e&&t(J),e&&t(D),e&&t(he),x(B,e),e&&t(ce),e&&t(O),x(G),e&&t(ae),e&&t(d),e&&t(se),x(Z,e),e&&t(V),e&&t(U),e&&t(R),x(ee,e),e&&t(ie),e&&t(pe),e&&t(ue),x(de,e),e&&t(r),e&&t(w),e&&t(Le),e&&t(oe),x(be),e&&t(De),x(Me,e),e&&t(ct),e&&t(Ke),e&&t(ut),x(Ce,e),e&&t(dt),e&&t(Re),e&&t(_t),e&&t(je),e&&t($t),x(Ie,e),e&&t(gt),e&&t(_e),e&&t(kt),x(Ne,e),e&&t(wt),e&&t(le),e&&t(bt),x(xe,e),e&&t(qt),e&&t(ye),x(Be),e&&t(jt),x(Ae,e),e&&t(vt),x(Fe,e)}}}const ss={local:"translation",sections:[{local:"load-opus-books-dataset",title:"Load OPUS Books dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Translation"};function ns(P){return Wa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ms extends Ia{constructor(s){super();Ua(this,s,ns,as,Na,{})}}export{ms as default,ss as metadata};
