import{S as ta,i as aa,s as oa,e as s,k as p,w as x,t as r,M as sa,c as l,d as a,m as d,a as n,x as T,h as i,b as g,G as t,g as f,y as k,q,o as j,B as P,v as la,L as Zt}from"../../chunks/vendor-hf-doc-builder.js";import{D as Ee}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ea}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Xt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Yt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function na(X){let m,E,v,u,_;return u=new ea({props:{code:`from evaluation import evaluator

# Sentiment analysis evaluator
evaluator("sentiment-analysis")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> evaluation <span class="hljs-keyword">import</span> evaluator

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Sentiment analysis evaluator</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>evaluator(<span class="hljs-string">&quot;sentiment-analysis&quot;</span>)`}}),{c(){m=s("p"),E=r("Examples:"),v=p(),x(u.$$.fragment)},l(o){m=l(o,"P",{});var h=n(m);E=i(h,"Examples:"),h.forEach(a),v=d(o),T(u.$$.fragment,o)},m(o,h){f(o,m,h),t(m,E),f(o,v,h),k(u,o,h),_=!0},p:Zt,i(o){_||(q(u.$$.fragment,o),_=!0)},o(o){j(u.$$.fragment,o),_=!1},d(o){o&&a(m),o&&a(v),P(u,o)}}}function ra(X){let m,E,v,u,_;return u=new ea({props:{code:`from evaluation import evaluator
from datasets import Dataset, load_dataset

e = evaluator("text-classification")
data =  Dataset.from_dict(load_dataset("imdb")["test"][:2])

results = e.compute(
    model_or_pipeline="huggingface/prunebert-base-uncased-6-finepruned-w-distil-mnli",
    data=data,
    metric="accuracy",
    input_column="text",
    label_column="label",
    label_mapping={"LABEL_0": 0.0, "LABEL_1": 1.0},
    strategy="bootstrap",
    n_resamples=10,
    random_state=0
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> evaluation <span class="hljs-keyword">import</span> evaluator
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> Dataset, load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>e = evaluator(<span class="hljs-string">&quot;text-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>data =  Dataset.from_dict(load_dataset(<span class="hljs-string">&quot;imdb&quot;</span>)[<span class="hljs-string">&quot;test&quot;</span>][:<span class="hljs-number">2</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>results = e.compute(
<span class="hljs-meta">&gt;&gt;&gt; </span>    model_or_pipeline=<span class="hljs-string">&quot;huggingface/prunebert-base-uncased-6-finepruned-w-distil-mnli&quot;</span>,
<span class="hljs-meta">&gt;&gt;&gt; </span>    data=data,
<span class="hljs-meta">&gt;&gt;&gt; </span>    metric=<span class="hljs-string">&quot;accuracy&quot;</span>,
<span class="hljs-meta">&gt;&gt;&gt; </span>    input_column=<span class="hljs-string">&quot;text&quot;</span>,
<span class="hljs-meta">&gt;&gt;&gt; </span>    label_column=<span class="hljs-string">&quot;label&quot;</span>,
<span class="hljs-meta">&gt;&gt;&gt; </span>    label_mapping={<span class="hljs-string">&quot;LABEL_0&quot;</span>: <span class="hljs-number">0.0</span>, <span class="hljs-string">&quot;LABEL_1&quot;</span>: <span class="hljs-number">1.0</span>},
<span class="hljs-meta">&gt;&gt;&gt; </span>    strategy=<span class="hljs-string">&quot;bootstrap&quot;</span>,
<span class="hljs-meta">&gt;&gt;&gt; </span>    n_resamples=<span class="hljs-number">10</span>,
<span class="hljs-meta">&gt;&gt;&gt; </span>    random_state=<span class="hljs-number">0</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)`}}),{c(){m=s("p"),E=r("Examples:"),v=p(),x(u.$$.fragment)},l(o){m=l(o,"P",{});var h=n(m);E=i(h,"Examples:"),h.forEach(a),v=d(o),T(u.$$.fragment,o)},m(o,h){f(o,m,h),t(m,E),f(o,v,h),k(u,o,h),_=!0},p:Zt,i(o){_||(q(u.$$.fragment,o),_=!0)},o(o){j(u.$$.fragment,o),_=!1},d(o){o&&a(m),o&&a(v),P(u,o)}}}function ia(X){let m,E,v,u,_,o,h,re,Fe,we,Y,Ue,xe,N,M,ie,R,Ie,ce,Oe,Te,Z,Se,ke,$,B,ze,V,Re,ee,Be,Ve,He,L,Ge,pe,Je,We,de,Ke,Qe,Xe,F,qe,te,Ye,je,y,H,Ze,ue,et,tt,me,at,ot,U,G,st,A,lt,fe,nt,rt,ve,it,ct,Pe,ae,pt,Ce,b,J,dt,he,ut,mt,w,ft,oe,vt,ht,ge,gt,_t,_e,bt,$t,yt,W,Et,be,wt,xt,Tt,C,K,kt,$e,qt,jt,I,De;return o=new Xt({}),R=new Xt({}),B=new Ee({props:{name:"evaluate.evaluator",anchor:"evaluate.evaluator",parameters:[{name:"task",val:": str = None"}],parametersDescription:[{anchor:"evaluate.evaluator.task",description:`<strong>task</strong> (<code>str</code>) &#x2014;
The task defining which evaluator will be returned. Currently accepted tasks are:</p>
<ul>
<li><code>&quot;text-classification&quot;</code> (alias <code>&quot;sentiment-analysis&quot;</code> available): will return a <a href="/docs/evaluate/v0.1.0/en/package_reference/evaluator_classes#evaluate.TextClassificationEvaluator">TextClassificationEvaluator</a>.</li>
</ul>`,name:"task"}],source:"https://github.com/huggingface/evaluate/blob/v0.1.0/src/evaluate/evaluator.py#L338",returnDescription:`
<p>An evaluator suitable for the task.</p>
`,returnType:`
<p><a
  href="/docs/evaluate/v0.1.0/en/package_reference/evaluator_classes#evaluate.Evaluator"
>Evaluator</a></p>
`}}),F=new Yt({props:{anchor:"evaluate.evaluator.example",$$slots:{default:[na]},$$scope:{ctx:X}}}),H=new Ee({props:{name:"class evaluate.Evaluator",anchor:"evaluate.Evaluator",parameters:[{name:"task",val:": str"},{name:"default_metric_name",val:": str = None"}],source:"https://github.com/huggingface/evaluate/blob/v0.1.0/src/evaluate/evaluator.py#L50"}}),G=new Ee({props:{name:"compute",anchor:"evaluate.Evaluator.compute",parameters:[{name:"model_or_pipeline",val:": typing.Union[str, ForwardRef('Pipeline'), typing.Callable, ForwardRef('PreTrainedModel'), ForwardRef('TFPreTrainedModel')] = None"},{name:"data",val:": typing.Union[str, datasets.arrow_dataset.Dataset] = None"},{name:"metric",val:": typing.Union[str, evaluate.module.EvaluationModule] = None"},{name:"tokenizer",val:": typing.Union[str, ForwardRef('PreTrainedTokenizer'), NoneType] = None"},{name:"strategy",val:": typing.Literal['simple', 'bootstrap'] = 'simple'"},{name:"confidence_level",val:": float = 0.95"},{name:"n_resamples",val:": int = 9999"},{name:"**compute_parameters",val:": typing.Dict"}],source:"https://github.com/huggingface/evaluate/blob/v0.1.0/src/evaluate/evaluator.py#L108"}}),J=new Ee({props:{name:"class evaluate.TextClassificationEvaluator",anchor:"evaluate.TextClassificationEvaluator",parameters:[{name:"task",val:" = 'text-classification'"},{name:"default_metric_name",val:" = None"}],source:"https://github.com/huggingface/evaluate/blob/v0.1.0/src/evaluate/evaluator.py#L127"}}),K=new Ee({props:{name:"compute",anchor:"evaluate.TextClassificationEvaluator.compute",parameters:[{name:"model_or_pipeline",val:": typing.Union[str, ForwardRef('Pipeline'), typing.Callable, ForwardRef('PreTrainedModel'), ForwardRef('TFPreTrainedModel')] = None"},{name:"data",val:": typing.Union[str, datasets.arrow_dataset.Dataset] = None"},{name:"metric",val:": typing.Union[str, evaluate.module.EvaluationModule] = None"},{name:"tokenizer",val:": typing.Union[str, ForwardRef('PreTrainedTokenizer'), NoneType] = None"},{name:"strategy",val:": typing.Literal['simple', 'bootstrap'] = 'simple'"},{name:"confidence_level",val:": float = 0.95"},{name:"n_resamples",val:": int = 9999"},{name:"random_state",val:": typing.Optional[int] = None"},{name:"input_column",val:": str = 'text'"},{name:"label_column",val:": str = 'label'"},{name:"label_mapping",val:": typing.Union[typing.Dict[str, numbers.Number], NoneType] = None"}],parametersDescription:[{anchor:"evaluate.TextClassificationEvaluator.compute.model_or_pipeline",description:"<strong>model_or_pipeline</strong> (<code>str</code> or <code>Pipeline</code> or <code>Callable</code> or <code>PreTrainedModel</code> or <code>TFPreTrainedModel</code>, &#x2014;",name:"model_or_pipeline"},{anchor:"evaluate.TextClassificationEvaluator.compute.defaults",description:`<strong>defaults</strong> to <code>None</code>) &#x2014;
If the argument in not specified, we initialize the default pipeline for the task (in this case
<code>text-classification</code> or its alias - <code>sentiment-analysis</code>). If the argument is of the type <code>str</code> or
is a model instance, we use it to initialize a new <code>Pipeline</code> with the given model. Otherwise we assume the
argument specifies a pre-initialized pipeline.`,name:"defaults"},{anchor:"evaluate.TextClassificationEvaluator.compute.data",description:"<strong>data</strong> (<code>str</code> or <code>Dataset</code>, defaults to <code>None) -- Specifies the dataset we will run evaluation on. If it is of type </code>str`, we treat it as the dataset\nname, and load it. Otherwise we assume it represents a pre-loaded dataset.",name:"data"},{anchor:"evaluate.TextClassificationEvaluator.compute.metric",description:`<strong>metric</strong> (<code>str</code> or <code>EvaluationModule</code>, defaults to <code>None</code>&#x201D; &#x2014;
Specifies the metric we use in evaluator. If it is of type <code>str</code>, we treat it as the metric name, and
load it. Otherwise we assume it represents a pre-loaded metric.
tokenizer &#x2014; (<code>str</code> or <code>PreTrainedTokenizer</code>, <em>optional</em>, defaults to <code>None</code>):
Argument can be used to overwrite a default tokenizer if <code>model_or_pipeline</code> represents a model for
which we build a pipeline. If <code>model_or_pipeline</code> is <code>None</code> or a pre-initialized pipeline, we ignore
this argument.
strategy &#x2014; (<code>Literal[&quot;simple&quot;, &quot;bootstrap&quot;]</code>, defaults to &#x201C;simple&#x201D;):
specifies the evaluation strategy. Possible values are:</p>
<ul>
<li><code>&quot;simple&quot;</code> - we evaluate the metric and return the scores.</li>
<li><code>&quot;bootstrap&quot;</code> - on top of computing the metric scores, we calculate the confidence interval for each
of the returned metric keys, using \`<code>scipy</code>&#x2019;s <code>bootstrap</code> method
<a href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.bootstrap.html%60" rel="nofollow">https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.bootstrap.html\`</a>.</li>
</ul>`,name:"metric"},{anchor:"evaluate.TextClassificationEvaluator.compute.confidence_level",description:`<strong>confidence_level</strong> (<code>float</code>, defaults to <code>0.95</code>) &#x2014;
The <code>confidence_level</code> value passed to <code>bootstrap</code> if <code>&quot;bootstrap&quot;</code> strategy is chosen.`,name:"confidence_level"},{anchor:"evaluate.TextClassificationEvaluator.compute.n_resamples",description:`<strong>n_resamples</strong> (<code>int</code>, defaults to <code>9999</code>) &#x2014;
The <code>n_resamples</code> value passed to <code>bootstrap</code> if <code>&quot;bootstrap&quot;</code> strategy is chosen.`,name:"n_resamples"},{anchor:"evaluate.TextClassificationEvaluator.compute.random_state",description:`<strong>random_state</strong> (<code>int</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The <code>random_state</code> value passed to <code>bootstrap</code> if <code>&quot;bootstrap&quot;</code> strategy is chosen. Useful for
debugging.`,name:"random_state"},{anchor:"evaluate.TextClassificationEvaluator.compute.input_column",description:`<strong>input_column</strong> (<code>str</code>, defaults to <code>&quot;text&quot;</code>) &#x2014;
the name of the column containing the text feature in the dataset specified by <code>data</code>.`,name:"input_column"},{anchor:"evaluate.TextClassificationEvaluator.compute.label_column",description:`<strong>label_column</strong> (<code>str</code>, defaults to <code>&quot;label&quot;</code>) &#x2014;
the name of the column containing the labels in the dataset specified by <code>data</code>.`,name:"label_column"},{anchor:"evaluate.TextClassificationEvaluator.compute.label_mapping",description:`<strong>label_mapping</strong> (<code>Dict[str, Number]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
We want to map class labels defined by the model in the pipeline to values consistent with those
defined in the <code>label_column</code> of the <code>data</code> dataset.`,name:"label_mapping"}],source:"https://github.com/huggingface/evaluate/blob/v0.1.0/src/evaluate/evaluator.py#L148",returnDescription:`
<p>A <code>Dict</code>. The keys represent metric keys calculated for the <code>metric</code> spefied in function arguments. For the
<code>"simple"</code> strategy, the value is the metric score. For the <code>"bootstrap"</code> strategy, the value is a <code>Dict</code>
containing the score, the confidence interval and the standard error calculated for each metric key.</p>
`}}),I=new Yt({props:{anchor:"evaluate.TextClassificationEvaluator.compute.example",$$slots:{default:[ra]},$$scope:{ctx:X}}}),{c(){m=s("meta"),E=p(),v=s("h1"),u=s("a"),_=s("span"),x(o.$$.fragment),h=p(),re=s("span"),Fe=r("Evaluator"),we=p(),Y=s("p"),Ue=r("The evaluator classes for automatic evaluation."),xe=p(),N=s("h2"),M=s("a"),ie=s("span"),x(R.$$.fragment),Ie=p(),ce=s("span"),Oe=r("Evaluator classes"),Te=p(),Z=s("p"),Se=r("The main entry point for using the evaluator:"),ke=p(),$=s("div"),x(B.$$.fragment),ze=p(),V=s("p"),Re=r("Utility factory method to build an "),ee=s("a"),Be=r("Evaluator"),Ve=r("."),He=p(),L=s("p"),Ge=r("Evaluators encapsulate a task and a default metric name. They leverate "),pe=s("code"),Je=r("pipeline"),We=r(" functionalify from "),de=s("code"),Ke=r("transformers"),Qe=r(`
to simplify the evaluation of multiple combinations of models, datasets and metrics for a given task.`),Xe=p(),x(F.$$.fragment),qe=p(),te=s("p"),Ye=r("The base class for all evaluator classes:"),je=p(),y=s("div"),x(H.$$.fragment),Ze=p(),ue=s("p"),et=r(`The Evaluator class is the class from which all evaluators inherit. Refer to this class for methods shared across
different evaluators.`),tt=p(),me=s("p"),at=r("Base class implementing evaluator operations."),ot=p(),U=s("div"),x(G.$$.fragment),st=p(),A=s("p"),lt=r("A core method of the "),fe=s("code"),nt=r("Evaluator"),rt=r(` class, computes the metric value for a pipeline and dataset compatible
with the task specified by the `),ve=s("code"),it=r("Evaluator"),ct=r("."),Pe=p(),ae=s("p"),pt=r("The class for text classification evaluation:"),Ce=p(),b=s("div"),x(J.$$.fragment),dt=p(),he=s("p"),ut=r("Text classification evaluator."),mt=p(),w=s("p"),ft=r("This text classification evaluator can currently be loaded from "),oe=s("a"),vt=r("evaluator()"),ht=r(` using the default task name
`),ge=s("code"),gt=r("text-classification"),_t=r(" or with a "),_e=s("code"),bt=r('"sentiment-analysis"'),$t=r(" alias."),yt=p(),W=s("p"),Et=r("Methods in this class assume a data format compatible with the "),be=s("code"),wt=r("TextClassificationPipeline"),xt=r(` - a single textual
feature as input and a categorical label as output.`),Tt=p(),C=s("div"),x(K.$$.fragment),kt=p(),$e=s("p"),qt=r("Compute the metric for a given pipeline and dataset combination."),jt=p(),x(I.$$.fragment),this.h()},l(e){const c=sa('[data-svelte="svelte-1phssyn"]',document.head);m=l(c,"META",{name:!0,content:!0}),c.forEach(a),E=d(e),v=l(e,"H1",{class:!0});var Q=n(v);u=l(Q,"A",{id:!0,class:!0,href:!0});var ye=n(u);_=l(ye,"SPAN",{});var Pt=n(_);T(o.$$.fragment,Pt),Pt.forEach(a),ye.forEach(a),h=d(Q),re=l(Q,"SPAN",{});var Ct=n(re);Fe=i(Ct,"Evaluator"),Ct.forEach(a),Q.forEach(a),we=d(e),Y=l(e,"P",{});var Dt=n(Y);Ue=i(Dt,"The evaluator classes for automatic evaluation."),Dt.forEach(a),xe=d(e),N=l(e,"H2",{class:!0});var Ne=n(N);M=l(Ne,"A",{id:!0,class:!0,href:!0});var Nt=n(M);ie=l(Nt,"SPAN",{});var Lt=n(ie);T(R.$$.fragment,Lt),Lt.forEach(a),Nt.forEach(a),Ie=d(Ne),ce=l(Ne,"SPAN",{});var At=n(ce);Oe=i(At,"Evaluator classes"),At.forEach(a),Ne.forEach(a),Te=d(e),Z=l(e,"P",{});var Mt=n(Z);Se=i(Mt,"The main entry point for using the evaluator:"),Mt.forEach(a),ke=d(e),$=l(e,"DIV",{class:!0});var O=n($);T(B.$$.fragment,O),ze=d(O),V=l(O,"P",{});var Le=n(V);Re=i(Le,"Utility factory method to build an "),ee=l(Le,"A",{href:!0});var Ft=n(ee);Be=i(Ft,"Evaluator"),Ft.forEach(a),Ve=i(Le,"."),Le.forEach(a),He=d(O),L=l(O,"P",{});var se=n(L);Ge=i(se,"Evaluators encapsulate a task and a default metric name. They leverate "),pe=l(se,"CODE",{});var Ut=n(pe);Je=i(Ut,"pipeline"),Ut.forEach(a),We=i(se," functionalify from "),de=l(se,"CODE",{});var It=n(de);Ke=i(It,"transformers"),It.forEach(a),Qe=i(se,`
to simplify the evaluation of multiple combinations of models, datasets and metrics for a given task.`),se.forEach(a),Xe=d(O),T(F.$$.fragment,O),O.forEach(a),qe=d(e),te=l(e,"P",{});var Ot=n(te);Ye=i(Ot,"The base class for all evaluator classes:"),Ot.forEach(a),je=d(e),y=l(e,"DIV",{class:!0});var S=n(y);T(H.$$.fragment,S),Ze=d(S),ue=l(S,"P",{});var St=n(ue);et=i(St,`The Evaluator class is the class from which all evaluators inherit. Refer to this class for methods shared across
different evaluators.`),St.forEach(a),tt=d(S),me=l(S,"P",{});var zt=n(me);at=i(zt,"Base class implementing evaluator operations."),zt.forEach(a),ot=d(S),U=l(S,"DIV",{class:!0});var Ae=n(U);T(G.$$.fragment,Ae),st=d(Ae),A=l(Ae,"P",{});var le=n(A);lt=i(le,"A core method of the "),fe=l(le,"CODE",{});var Rt=n(fe);nt=i(Rt,"Evaluator"),Rt.forEach(a),rt=i(le,` class, computes the metric value for a pipeline and dataset compatible
with the task specified by the `),ve=l(le,"CODE",{});var Bt=n(ve);it=i(Bt,"Evaluator"),Bt.forEach(a),ct=i(le,"."),le.forEach(a),Ae.forEach(a),S.forEach(a),Pe=d(e),ae=l(e,"P",{});var Vt=n(ae);pt=i(Vt,"The class for text classification evaluation:"),Vt.forEach(a),Ce=d(e),b=l(e,"DIV",{class:!0});var D=n(b);T(J.$$.fragment,D),dt=d(D),he=l(D,"P",{});var Ht=n(he);ut=i(Ht,"Text classification evaluator."),Ht.forEach(a),mt=d(D),w=l(D,"P",{});var z=n(w);ft=i(z,"This text classification evaluator can currently be loaded from "),oe=l(z,"A",{href:!0});var Gt=n(oe);vt=i(Gt,"evaluator()"),Gt.forEach(a),ht=i(z,` using the default task name
`),ge=l(z,"CODE",{});var Jt=n(ge);gt=i(Jt,"text-classification"),Jt.forEach(a),_t=i(z," or with a "),_e=l(z,"CODE",{});var Wt=n(_e);bt=i(Wt,'"sentiment-analysis"'),Wt.forEach(a),$t=i(z," alias."),z.forEach(a),yt=d(D),W=l(D,"P",{});var Me=n(W);Et=i(Me,"Methods in this class assume a data format compatible with the "),be=l(Me,"CODE",{});var Kt=n(be);wt=i(Kt,"TextClassificationPipeline"),Kt.forEach(a),xt=i(Me,` - a single textual
feature as input and a categorical label as output.`),Me.forEach(a),Tt=d(D),C=l(D,"DIV",{class:!0});var ne=n(C);T(K.$$.fragment,ne),kt=d(ne),$e=l(ne,"P",{});var Qt=n($e);qt=i(Qt,"Compute the metric for a given pipeline and dataset combination."),Qt.forEach(a),jt=d(ne),T(I.$$.fragment,ne),ne.forEach(a),D.forEach(a),this.h()},h(){g(m,"name","hf:doc:metadata"),g(m,"content",JSON.stringify(ca)),g(u,"id","evaluator"),g(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(u,"href","#evaluator"),g(v,"class","relative group"),g(M,"id","evaluate.evaluator"),g(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(M,"href","#evaluate.evaluator"),g(N,"class","relative group"),g(ee,"href","/docs/evaluate/v0.1.0/en/package_reference/evaluator_classes#evaluate.Evaluator"),g($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(oe,"href","/docs/evaluate/v0.1.0/en/package_reference/evaluator_classes#evaluate.evaluator"),g(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){t(document.head,m),f(e,E,c),f(e,v,c),t(v,u),t(u,_),k(o,_,null),t(v,h),t(v,re),t(re,Fe),f(e,we,c),f(e,Y,c),t(Y,Ue),f(e,xe,c),f(e,N,c),t(N,M),t(M,ie),k(R,ie,null),t(N,Ie),t(N,ce),t(ce,Oe),f(e,Te,c),f(e,Z,c),t(Z,Se),f(e,ke,c),f(e,$,c),k(B,$,null),t($,ze),t($,V),t(V,Re),t(V,ee),t(ee,Be),t(V,Ve),t($,He),t($,L),t(L,Ge),t(L,pe),t(pe,Je),t(L,We),t(L,de),t(de,Ke),t(L,Qe),t($,Xe),k(F,$,null),f(e,qe,c),f(e,te,c),t(te,Ye),f(e,je,c),f(e,y,c),k(H,y,null),t(y,Ze),t(y,ue),t(ue,et),t(y,tt),t(y,me),t(me,at),t(y,ot),t(y,U),k(G,U,null),t(U,st),t(U,A),t(A,lt),t(A,fe),t(fe,nt),t(A,rt),t(A,ve),t(ve,it),t(A,ct),f(e,Pe,c),f(e,ae,c),t(ae,pt),f(e,Ce,c),f(e,b,c),k(J,b,null),t(b,dt),t(b,he),t(he,ut),t(b,mt),t(b,w),t(w,ft),t(w,oe),t(oe,vt),t(w,ht),t(w,ge),t(ge,gt),t(w,_t),t(w,_e),t(_e,bt),t(w,$t),t(b,yt),t(b,W),t(W,Et),t(W,be),t(be,wt),t(W,xt),t(b,Tt),t(b,C),k(K,C,null),t(C,kt),t(C,$e),t($e,qt),t(C,jt),k(I,C,null),De=!0},p(e,[c]){const Q={};c&2&&(Q.$$scope={dirty:c,ctx:e}),F.$set(Q);const ye={};c&2&&(ye.$$scope={dirty:c,ctx:e}),I.$set(ye)},i(e){De||(q(o.$$.fragment,e),q(R.$$.fragment,e),q(B.$$.fragment,e),q(F.$$.fragment,e),q(H.$$.fragment,e),q(G.$$.fragment,e),q(J.$$.fragment,e),q(K.$$.fragment,e),q(I.$$.fragment,e),De=!0)},o(e){j(o.$$.fragment,e),j(R.$$.fragment,e),j(B.$$.fragment,e),j(F.$$.fragment,e),j(H.$$.fragment,e),j(G.$$.fragment,e),j(J.$$.fragment,e),j(K.$$.fragment,e),j(I.$$.fragment,e),De=!1},d(e){a(m),e&&a(E),e&&a(v),P(o),e&&a(we),e&&a(Y),e&&a(xe),e&&a(N),P(R),e&&a(Te),e&&a(Z),e&&a(ke),e&&a($),P(B),P(F),e&&a(qe),e&&a(te),e&&a(je),e&&a(y),P(H),P(G),e&&a(Pe),e&&a(ae),e&&a(Ce),e&&a(b),P(J),P(K),P(I)}}}const ca={local:"evaluator",sections:[{local:"evaluate.evaluator",title:"Evaluator classes"}],title:"Evaluator"};function pa(X){return la(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ha extends ta{constructor(m){super();aa(this,m,pa,ia,oa,{})}}export{ha as default,ca as metadata};
