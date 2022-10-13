import{S as Xt,i as Zt,s as es,e as r,k as m,w as v,t as c,M as ts,c as n,d as t,m as u,a as i,x,h as p,b as l,G as s,g as o,y as $,q as j,o as w,B as b,v as ss}from"../chunks/vendor-hf-doc-builder.js";import{T as as}from"../chunks/Tip-hf-doc-builder.js";import{I as _e}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ve}from"../chunks/CodeBlock-hf-doc-builder.js";function rs(xe){let h,M,f,g,k;return{c(){h=r("p"),M=c("Metrics is deprecated in \u{1F917} Datasets. To learn more about how to use metrics, take a look at the library \u{1F917} "),f=r("a"),g=c("Evaluate"),k=c("! In addition to metrics, you can find more tools for evaluating models and datasets."),this.h()},l(d){h=n(d,"P",{});var y=i(h);M=p(y,"Metrics is deprecated in \u{1F917} Datasets. To learn more about how to use metrics, take a look at the library \u{1F917} "),f=n(y,"A",{href:!0,rel:!0});var S=i(f);g=p(S,"Evaluate"),S.forEach(t),k=p(y,"! In addition to metrics, you can find more tools for evaluating models and datasets."),y.forEach(t),this.h()},h(){l(f,"href","https://huggingface.co/docs/evaluate/index"),l(f,"rel","nofollow")},m(d,y){o(d,h,y),s(h,M),s(h,f),s(f,g),s(h,k)},d(d){d&&t(h)}}}function ns(xe){let h,M,f,g,k,d,y,S,Ke,$e,I,je,C,Qe,z,Ve,We,we,N,Xe,ee,Ze,et,be,B,ye,E,L,le,O,tt,ce,st,ke,D,at,te,rt,nt,Ee,Y,qe,se,it,Pe,q,H,pe,J,ot,me,lt,Ae,ae,ct,Me,K,Se,P,T,ue,Q,pt,he,mt,Ie,_,ut,re,ht,ft,fe,dt,gt,ne,_t,vt,Ce,V,Ne,G,xt,ie,$t,jt,Le,A,R,de,W,wt,ge,bt,De,U,yt,oe,kt,Et,He,X,Te;return d=new _e({}),I=new as({props:{warning:!0,$$slots:{default:[rs]},$$scope:{ctx:xe}}}),B=new ve({props:{code:`from datasets import list_metrics
metrics_list = list_metrics()
len(metrics_list)
print(metrics_list)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> list_metrics
<span class="hljs-meta">&gt;&gt;&gt; </span>metrics_list = list_metrics()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">len</span>(metrics_list)
<span class="hljs-number">28</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(metrics_list)
[<span class="hljs-string">&#x27;accuracy&#x27;</span>, <span class="hljs-string">&#x27;bertscore&#x27;</span>, <span class="hljs-string">&#x27;bleu&#x27;</span>, <span class="hljs-string">&#x27;bleurt&#x27;</span>, <span class="hljs-string">&#x27;cer&#x27;</span>, <span class="hljs-string">&#x27;comet&#x27;</span>, <span class="hljs-string">&#x27;coval&#x27;</span>, <span class="hljs-string">&#x27;cuad&#x27;</span>, <span class="hljs-string">&#x27;f1&#x27;</span>, <span class="hljs-string">&#x27;gleu&#x27;</span>, <span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;indic_glue&#x27;</span>, <span class="hljs-string">&#x27;matthews_correlation&#x27;</span>, <span class="hljs-string">&#x27;meteor&#x27;</span>, <span class="hljs-string">&#x27;pearsonr&#x27;</span>, <span class="hljs-string">&#x27;precision&#x27;</span>, <span class="hljs-string">&#x27;recall&#x27;</span>, <span class="hljs-string">&#x27;rouge&#x27;</span>, <span class="hljs-string">&#x27;sacrebleu&#x27;</span>, <span class="hljs-string">&#x27;sari&#x27;</span>, <span class="hljs-string">&#x27;seqeval&#x27;</span>, <span class="hljs-string">&#x27;spearmanr&#x27;</span>, <span class="hljs-string">&#x27;squad&#x27;</span>, <span class="hljs-string">&#x27;squad_v2&#x27;</span>, <span class="hljs-string">&#x27;super_glue&#x27;</span>, <span class="hljs-string">&#x27;wer&#x27;</span>, <span class="hljs-string">&#x27;wiki_split&#x27;</span>, <span class="hljs-string">&#x27;xnli&#x27;</span>]`}}),O=new _e({}),Y=new ve({props:{code:`from datasets import load_metric
metric = load_metric('glue', 'mrpc')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric
<span class="hljs-meta">&gt;&gt;&gt; </span>metric = load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>)`}}),J=new _e({}),K=new ve({props:{code:"metric = load_metric('glue', 'mrpc')",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>metric = load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>)'}}),Q=new _e({}),V=new ve({props:{code:"print(metric.inputs_description)",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(metric.inputs_description)
Compute GLUE evaluation metric associated to each GLUE dataset.
Args:
    predictions: <span class="hljs-built_in">list</span> of predictions to score.
        Each translation should be tokenized into a <span class="hljs-built_in">list</span> of tokens.
    references: <span class="hljs-built_in">list</span> of lists of references <span class="hljs-keyword">for</span> each translation.
        Each reference should be tokenized into a <span class="hljs-built_in">list</span> of tokens.
Returns: depending on the GLUE subset, one <span class="hljs-keyword">or</span> several of:
    <span class="hljs-string">&quot;accuracy&quot;</span>: Accuracy
    <span class="hljs-string">&quot;f1&quot;</span>: F1 score
    <span class="hljs-string">&quot;pearson&quot;</span>: Pearson Correlation
    <span class="hljs-string">&quot;spearmanr&quot;</span>: Spearman Correlation
    <span class="hljs-string">&quot;matthews_correlation&quot;</span>: Matthew Correlation
Examples:
    &gt;&gt;&gt; glue_metric = datasets.load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;sst2&#x27;</span>)  <span class="hljs-comment"># &#x27;sst2&#x27; or any of [&quot;mnli&quot;, &quot;mnli_mismatched&quot;, &quot;mnli_matched&quot;, &quot;qnli&quot;, &quot;rte&quot;, &quot;wnli&quot;, &quot;hans&quot;]</span>
    &gt;&gt;&gt; references = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
    &gt;&gt;&gt; predictions = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
    &gt;&gt;&gt; results = glue_metric.compute(predictions=predictions, references=references)
    &gt;&gt;&gt; <span class="hljs-built_in">print</span>(results)
    {<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">1.0</span>}
    ...
    &gt;&gt;&gt; glue_metric = datasets.load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>)  <span class="hljs-comment"># &#x27;mrpc&#x27; or &#x27;qqp&#x27;</span>
    &gt;&gt;&gt; references = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
    &gt;&gt;&gt; predictions = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
    &gt;&gt;&gt; results = glue_metric.compute(predictions=predictions, references=references)
    &gt;&gt;&gt; <span class="hljs-built_in">print</span>(results)
    {<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">1.0</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">1.0</span>}
    ...`}}),W=new _e({}),X=new ve({props:{code:`model_predictions = model(model_inputs)
final_score = metric.compute(predictions=model_predictions, references=gold_references)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>model_predictions = model(model_inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>final_score = metric.compute(predictions=model_predictions, references=gold_references)`}}),{c(){h=r("meta"),M=m(),f=r("h1"),g=r("a"),k=r("span"),v(d.$$.fragment),y=m(),S=r("span"),Ke=c("Evaluate predictions"),$e=m(),v(I.$$.fragment),je=m(),C=r("p"),Qe=c("\u{1F917} Datasets provides various common and NLP-specific "),z=r("a"),Ve=c("metrics"),We=c(" for you to measure your models performance. In this section of the tutorials, you will load a metric and use it to evaluate your models predictions."),we=m(),N=r("p"),Xe=c("You can see what metrics are available with "),ee=r("a"),Ze=c("list_metrics()"),et=c(":"),be=m(),v(B.$$.fragment),ye=m(),E=r("h2"),L=r("a"),le=r("span"),v(O.$$.fragment),tt=m(),ce=r("span"),st=c("Load metric"),ke=m(),D=r("p"),at=c("It is very easy to load a metric with \u{1F917} Datasets. In fact, you will notice that it is very similar to loading a dataset! Load a metric from the Hub with "),te=r("a"),rt=c("load_metric()"),nt=c(":"),Ee=m(),v(Y.$$.fragment),qe=m(),se=r("p"),it=c("This will load the metric associated with the MRPC dataset from the GLUE benchmark."),Pe=m(),q=r("h2"),H=r("a"),pe=r("span"),v(J.$$.fragment),ot=m(),me=r("span"),lt=c("Select a configuration"),Ae=m(),ae=r("p"),ct=c("If you are using a benchmark dataset, you need to select a metric that is associated with the configuration you are using. Select a metric configuration by providing the configuration name:"),Me=m(),v(K.$$.fragment),Se=m(),P=r("h2"),T=r("a"),ue=r("span"),v(Q.$$.fragment),pt=m(),he=r("span"),mt=c("Metrics object"),Ie=m(),_=r("p"),ut=c("Before you begin using a "),re=r("a"),ht=c("Metric"),ft=c(" object, you should get to know it a little better. As with a dataset, you can return some basic information about a metric. For example, access the "),fe=r("code"),dt=c("inputs_description"),gt=c(" parameter in "),ne=r("a"),_t=c("datasets.MetricInfo"),vt=c(" to get more information about a metrics expected input format and some usage examples:"),Ce=m(),v(V.$$.fragment),Ne=m(),G=r("p"),xt=c("Notice for the MRPC configuration, the metric expects the input format to be zero or one. For a complete list of attributes you can return with your metric, take a look at "),ie=r("a"),$t=c("MetricInfo"),jt=c("."),Le=m(),A=r("h2"),R=r("a"),de=r("span"),v(W.$$.fragment),wt=m(),ge=r("span"),bt=c("Compute metric"),De=m(),U=r("p"),yt=c("Once you have loaded a metric, you are ready to use it to evaluate a models predictions. Provide the model predictions and references to "),oe=r("a"),kt=c("compute()"),Et=c(":"),He=m(),v(X.$$.fragment),this.h()},l(e){const a=ts('[data-svelte="svelte-1phssyn"]',document.head);h=n(a,"META",{name:!0,content:!0}),a.forEach(t),M=u(e),f=n(e,"H1",{class:!0});var Z=i(f);g=n(Z,"A",{id:!0,class:!0,href:!0});var qt=i(g);k=n(qt,"SPAN",{});var Pt=i(k);x(d.$$.fragment,Pt),Pt.forEach(t),qt.forEach(t),y=u(Z),S=n(Z,"SPAN",{});var At=i(S);Ke=p(At,"Evaluate predictions"),At.forEach(t),Z.forEach(t),$e=u(e),x(I.$$.fragment,e),je=u(e),C=n(e,"P",{});var Ge=i(C);Qe=p(Ge,"\u{1F917} Datasets provides various common and NLP-specific "),z=n(Ge,"A",{href:!0,rel:!0});var Mt=i(z);Ve=p(Mt,"metrics"),Mt.forEach(t),We=p(Ge," for you to measure your models performance. In this section of the tutorials, you will load a metric and use it to evaluate your models predictions."),Ge.forEach(t),we=u(e),N=n(e,"P",{});var Re=i(N);Xe=p(Re,"You can see what metrics are available with "),ee=n(Re,"A",{href:!0});var St=i(ee);Ze=p(St,"list_metrics()"),St.forEach(t),et=p(Re,":"),Re.forEach(t),be=u(e),x(B.$$.fragment,e),ye=u(e),E=n(e,"H2",{class:!0});var Ue=i(E);L=n(Ue,"A",{id:!0,class:!0,href:!0});var It=i(L);le=n(It,"SPAN",{});var Ct=i(le);x(O.$$.fragment,Ct),Ct.forEach(t),It.forEach(t),tt=u(Ue),ce=n(Ue,"SPAN",{});var Nt=i(ce);st=p(Nt,"Load metric"),Nt.forEach(t),Ue.forEach(t),ke=u(e),D=n(e,"P",{});var Fe=i(D);at=p(Fe,"It is very easy to load a metric with \u{1F917} Datasets. In fact, you will notice that it is very similar to loading a dataset! Load a metric from the Hub with "),te=n(Fe,"A",{href:!0});var Lt=i(te);rt=p(Lt,"load_metric()"),Lt.forEach(t),nt=p(Fe,":"),Fe.forEach(t),Ee=u(e),x(Y.$$.fragment,e),qe=u(e),se=n(e,"P",{});var Dt=i(se);it=p(Dt,"This will load the metric associated with the MRPC dataset from the GLUE benchmark."),Dt.forEach(t),Pe=u(e),q=n(e,"H2",{class:!0});var ze=i(q);H=n(ze,"A",{id:!0,class:!0,href:!0});var Ht=i(H);pe=n(Ht,"SPAN",{});var Tt=i(pe);x(J.$$.fragment,Tt),Tt.forEach(t),Ht.forEach(t),ot=u(ze),me=n(ze,"SPAN",{});var Gt=i(me);lt=p(Gt,"Select a configuration"),Gt.forEach(t),ze.forEach(t),Ae=u(e),ae=n(e,"P",{});var Rt=i(ae);ct=p(Rt,"If you are using a benchmark dataset, you need to select a metric that is associated with the configuration you are using. Select a metric configuration by providing the configuration name:"),Rt.forEach(t),Me=u(e),x(K.$$.fragment,e),Se=u(e),P=n(e,"H2",{class:!0});var Be=i(P);T=n(Be,"A",{id:!0,class:!0,href:!0});var Ut=i(T);ue=n(Ut,"SPAN",{});var Ft=i(ue);x(Q.$$.fragment,Ft),Ft.forEach(t),Ut.forEach(t),pt=u(Be),he=n(Be,"SPAN",{});var zt=i(he);mt=p(zt,"Metrics object"),zt.forEach(t),Be.forEach(t),Ie=u(e),_=n(e,"P",{});var F=i(_);ut=p(F,"Before you begin using a "),re=n(F,"A",{href:!0});var Bt=i(re);ht=p(Bt,"Metric"),Bt.forEach(t),ft=p(F," object, you should get to know it a little better. As with a dataset, you can return some basic information about a metric. For example, access the "),fe=n(F,"CODE",{});var Ot=i(fe);dt=p(Ot,"inputs_description"),Ot.forEach(t),gt=p(F," parameter in "),ne=n(F,"A",{href:!0});var Yt=i(ne);_t=p(Yt,"datasets.MetricInfo"),Yt.forEach(t),vt=p(F," to get more information about a metrics expected input format and some usage examples:"),F.forEach(t),Ce=u(e),x(V.$$.fragment,e),Ne=u(e),G=n(e,"P",{});var Oe=i(G);xt=p(Oe,"Notice for the MRPC configuration, the metric expects the input format to be zero or one. For a complete list of attributes you can return with your metric, take a look at "),ie=n(Oe,"A",{href:!0});var Jt=i(ie);$t=p(Jt,"MetricInfo"),Jt.forEach(t),jt=p(Oe,"."),Oe.forEach(t),Le=u(e),A=n(e,"H2",{class:!0});var Ye=i(A);R=n(Ye,"A",{id:!0,class:!0,href:!0});var Kt=i(R);de=n(Kt,"SPAN",{});var Qt=i(de);x(W.$$.fragment,Qt),Qt.forEach(t),Kt.forEach(t),wt=u(Ye),ge=n(Ye,"SPAN",{});var Vt=i(ge);bt=p(Vt,"Compute metric"),Vt.forEach(t),Ye.forEach(t),De=u(e),U=n(e,"P",{});var Je=i(U);yt=p(Je,"Once you have loaded a metric, you are ready to use it to evaluate a models predictions. Provide the model predictions and references to "),oe=n(Je,"A",{href:!0});var Wt=i(oe);kt=p(Wt,"compute()"),Wt.forEach(t),Et=p(Je,":"),Je.forEach(t),He=u(e),x(X.$$.fragment,e),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(is)),l(g,"id","evaluate-predictions"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#evaluate-predictions"),l(f,"class","relative group"),l(z,"href","https://huggingface.co/metrics"),l(z,"rel","nofollow"),l(ee,"href","/docs/datasets/v2.6.0/en/package_reference/loading_methods#datasets.list_metrics"),l(L,"id","load-metric"),l(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(L,"href","#load-metric"),l(E,"class","relative group"),l(te,"href","/docs/datasets/v2.6.0/en/package_reference/loading_methods#datasets.load_metric"),l(H,"id","select-a-configuration"),l(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(H,"href","#select-a-configuration"),l(q,"class","relative group"),l(T,"id","metrics-object"),l(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(T,"href","#metrics-object"),l(P,"class","relative group"),l(re,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Metric"),l(ne,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.MetricInfo"),l(ie,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.MetricInfo"),l(R,"id","compute-metric"),l(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(R,"href","#compute-metric"),l(A,"class","relative group"),l(oe,"href","/docs/datasets/v2.6.0/en/package_reference/main_classes#datasets.Metric.compute")},m(e,a){s(document.head,h),o(e,M,a),o(e,f,a),s(f,g),s(g,k),$(d,k,null),s(f,y),s(f,S),s(S,Ke),o(e,$e,a),$(I,e,a),o(e,je,a),o(e,C,a),s(C,Qe),s(C,z),s(z,Ve),s(C,We),o(e,we,a),o(e,N,a),s(N,Xe),s(N,ee),s(ee,Ze),s(N,et),o(e,be,a),$(B,e,a),o(e,ye,a),o(e,E,a),s(E,L),s(L,le),$(O,le,null),s(E,tt),s(E,ce),s(ce,st),o(e,ke,a),o(e,D,a),s(D,at),s(D,te),s(te,rt),s(D,nt),o(e,Ee,a),$(Y,e,a),o(e,qe,a),o(e,se,a),s(se,it),o(e,Pe,a),o(e,q,a),s(q,H),s(H,pe),$(J,pe,null),s(q,ot),s(q,me),s(me,lt),o(e,Ae,a),o(e,ae,a),s(ae,ct),o(e,Me,a),$(K,e,a),o(e,Se,a),o(e,P,a),s(P,T),s(T,ue),$(Q,ue,null),s(P,pt),s(P,he),s(he,mt),o(e,Ie,a),o(e,_,a),s(_,ut),s(_,re),s(re,ht),s(_,ft),s(_,fe),s(fe,dt),s(_,gt),s(_,ne),s(ne,_t),s(_,vt),o(e,Ce,a),$(V,e,a),o(e,Ne,a),o(e,G,a),s(G,xt),s(G,ie),s(ie,$t),s(G,jt),o(e,Le,a),o(e,A,a),s(A,R),s(R,de),$(W,de,null),s(A,wt),s(A,ge),s(ge,bt),o(e,De,a),o(e,U,a),s(U,yt),s(U,oe),s(oe,kt),s(U,Et),o(e,He,a),$(X,e,a),Te=!0},p(e,[a]){const Z={};a&2&&(Z.$$scope={dirty:a,ctx:e}),I.$set(Z)},i(e){Te||(j(d.$$.fragment,e),j(I.$$.fragment,e),j(B.$$.fragment,e),j(O.$$.fragment,e),j(Y.$$.fragment,e),j(J.$$.fragment,e),j(K.$$.fragment,e),j(Q.$$.fragment,e),j(V.$$.fragment,e),j(W.$$.fragment,e),j(X.$$.fragment,e),Te=!0)},o(e){w(d.$$.fragment,e),w(I.$$.fragment,e),w(B.$$.fragment,e),w(O.$$.fragment,e),w(Y.$$.fragment,e),w(J.$$.fragment,e),w(K.$$.fragment,e),w(Q.$$.fragment,e),w(V.$$.fragment,e),w(W.$$.fragment,e),w(X.$$.fragment,e),Te=!1},d(e){t(h),e&&t(M),e&&t(f),b(d),e&&t($e),b(I,e),e&&t(je),e&&t(C),e&&t(we),e&&t(N),e&&t(be),b(B,e),e&&t(ye),e&&t(E),b(O),e&&t(ke),e&&t(D),e&&t(Ee),b(Y,e),e&&t(qe),e&&t(se),e&&t(Pe),e&&t(q),b(J),e&&t(Ae),e&&t(ae),e&&t(Me),b(K,e),e&&t(Se),e&&t(P),b(Q),e&&t(Ie),e&&t(_),e&&t(Ce),b(V,e),e&&t(Ne),e&&t(G),e&&t(Le),e&&t(A),b(W),e&&t(De),e&&t(U),e&&t(He),b(X,e)}}}const is={local:"evaluate-predictions",sections:[{local:"load-metric",title:"Load metric"},{local:"select-a-configuration",title:"Select a configuration"},{local:"metrics-object",title:"Metrics object"},{local:"compute-metric",title:"Compute metric"}],title:"Evaluate predictions"};function os(xe){return ss(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class us extends Xt{constructor(h){super();Zt(this,h,os,ns,es,{})}}export{us as default,is as metadata};