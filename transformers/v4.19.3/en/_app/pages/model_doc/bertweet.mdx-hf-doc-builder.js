import{S as zs,i as qs,s as Bs,e as r,k as a,w as u,t as i,M as xs,c as o,d as s,m as l,a as n,x as g,h as c,b as d,G as e,g as h,y as _,L as Ls,q as k,o as w,B as b,v as As}from"../../chunks/vendor-hf-doc-builder.js";import{D as N}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Rs}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Gt}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Ds(Jt){let E,qe,$,q,de,C,Ge,pe,Je,Be,y,B,me,M,Ke,fe,et,xe,x,tt,O,st,rt,Le,se,ot,Ae,re,he,nt,Re,oe,at,De,F,Pe,v,it,S,lt,ct,V,dt,pt,je,z,L,ue,U,mt,ge,ft,Ie,p,W,ht,_e,ut,gt,H,_t,ne,kt,wt,bt,A,X,vt,ke,Tt,Et,T,Q,$t,we,yt,zt,Y,ae,qt,be,Bt,xt,ie,Lt,ve,At,Rt,R,Z,Dt,Te,Pt,jt,D,G,It,Ee,Nt,Ct,P,J,Mt,K,Ot,$e,Ft,St,Vt,j,ee,Ut,ye,Wt,Ht,I,te,Xt,ze,Qt,Ne;return C=new Gt({}),M=new Gt({}),F=new Rs({props:{code:`import torch
from transformers import AutoModel, AutoTokenizer

bertweet = AutoModel.from_pretrained("vinai/bertweet-base")

# For transformers v4.x+:
tokenizer = AutoTokenizer.from_pretrained("vinai/bertweet-base", use_fast=False)

# For transformers v3.x:
# tokenizer = AutoTokenizer.from_pretrained("vinai/bertweet-base")

# INPUT TWEET IS ALREADY NORMALIZED!
line = "SC has first two presumptive cases of coronavirus , DHEC confirms HTTPURL via @USER :cry:"

input_ids = torch.tensor([tokenizer.encode(line)])

with torch.no_grad():
    features = bertweet(input_ids)  # Models outputs are now tuples

# With TensorFlow 2.0+:
# from transformers import TFAutoModel
# bertweet = TFAutoModel.from_pretrained("vinai/bertweet-base")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>bertweet = AutoModel.from_pretrained(<span class="hljs-string">&quot;vinai/bertweet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For transformers v4.x+:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;vinai/bertweet-base&quot;</span>, use_fast=<span class="hljs-literal">False</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For transformers v3.x:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># tokenizer = AutoTokenizer.from_pretrained(&quot;vinai/bertweet-base&quot;)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># INPUT TWEET IS ALREADY NORMALIZED!</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>line = <span class="hljs-string">&quot;SC has first two presumptive cases of coronavirus , DHEC confirms HTTPURL via @USER :cry:&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(line)])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    features = bertweet(input_ids)  <span class="hljs-comment"># Models outputs are now tuples</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With TensorFlow 2.0+:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># from transformers import TFAutoModel</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># bertweet = TFAutoModel.from_pretrained(&quot;vinai/bertweet-base&quot;)</span>`}}),U=new Gt({}),W=new N({props:{name:"class transformers.BertweetTokenizer",anchor:"transformers.BertweetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"normalization",val:" = False"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertweetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BertweetTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BertweetTokenizer.normalization",description:`<strong>normalization</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to apply a normalization preprocess.`,name:"normalization"},{anchor:"transformers.BertweetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BertweetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BertweetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BertweetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BertweetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertweetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertweetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/bertweet/tokenization_bertweet.py#L68"}}),X=new N({props:{name:"add_from_file",anchor:"transformers.BertweetTokenizer.add_from_file",parameters:[{name:"f",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/bertweet/tokenization_bertweet.py#L414"}}),Q=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/bertweet/tokenization_bertweet.py#L183",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Z=new N({props:{name:"convert_tokens_to_string",anchor:"transformers.BertweetTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/bertweet/tokenization_bertweet.py#L384"}}),G=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/bertweet/tokenization_bertweet.py#L237",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),J=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.BertweetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/bertweet/tokenization_bertweet.py#L209",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ee=new N({props:{name:"normalizeToken",anchor:"transformers.BertweetTokenizer.normalizeToken",parameters:[{name:"token",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/bertweet/tokenization_bertweet.py#L357"}}),te=new N({props:{name:"normalizeTweet",anchor:"transformers.BertweetTokenizer.normalizeTweet",parameters:[{name:"tweet",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/bertweet/tokenization_bertweet.py#L323"}}),{c(){E=r("meta"),qe=a(),$=r("h1"),q=r("a"),de=r("span"),u(C.$$.fragment),Ge=a(),pe=r("span"),Je=i("BERTweet"),Be=a(),y=r("h2"),B=r("a"),me=r("span"),u(M.$$.fragment),Ke=a(),fe=r("span"),et=i("Overview"),xe=a(),x=r("p"),tt=i("The BERTweet model was proposed in "),O=r("a"),st=i("BERTweet: A pre-trained language model for English Tweets"),rt=i(" by Dat Quoc Nguyen, Thanh Vu, Anh Tuan Nguyen."),Le=a(),se=r("p"),ot=i("The abstract from the paper is the following:"),Ae=a(),re=r("p"),he=r("em"),nt=i(`We present BERTweet, the first public large-scale pre-trained language model for English Tweets. Our BERTweet, having
the same architecture as BERT-base (Devlin et al., 2019), is trained using the RoBERTa pre-training procedure (Liu et
al., 2019). Experiments show that BERTweet outperforms strong baselines RoBERTa-base and XLM-R-base (Conneau et al.,
2020), producing better performance results than the previous state-of-the-art models on three Tweet NLP tasks:
Part-of-speech tagging, Named-entity recognition and text classification.`),Re=a(),oe=r("p"),at=i("Example of use:"),De=a(),u(F.$$.fragment),Pe=a(),v=r("p"),it=i("This model was contributed by "),S=r("a"),lt=i("dqnguyen"),ct=i(". The original code can be found "),V=r("a"),dt=i("here"),pt=i("."),je=a(),z=r("h2"),L=r("a"),ue=r("span"),u(U.$$.fragment),mt=a(),ge=r("span"),ft=i("BertweetTokenizer"),Ie=a(),p=r("div"),u(W.$$.fragment),ht=a(),_e=r("p"),ut=i("Constructs a BERTweet tokenizer, using Byte-Pair-Encoding."),gt=a(),H=r("p"),_t=i("This tokenizer inherits from "),ne=r("a"),kt=i("PreTrainedTokenizer"),wt=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),bt=a(),A=r("div"),u(X.$$.fragment),vt=a(),ke=r("p"),Tt=i("Loads a pre-existing dictionary from a text file and adds its symbols to this instance."),Et=a(),T=r("div"),u(Q.$$.fragment),$t=a(),we=r("p"),yt=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERTweet sequence has the following format:`),zt=a(),Y=r("ul"),ae=r("li"),qt=i("single sequence: "),be=r("code"),Bt=i("<s> X </s>"),xt=a(),ie=r("li"),Lt=i("pair of sequences: "),ve=r("code"),At=i("<s> A </s></s> B </s>"),Rt=a(),R=r("div"),u(Z.$$.fragment),Dt=a(),Te=r("p"),Pt=i("Converts a sequence of tokens (string) in a single string."),jt=a(),D=r("div"),u(G.$$.fragment),It=a(),Ee=r("p"),Nt=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BERTweet does
not make use of token type ids, therefore a list of zeros is returned.`),Ct=a(),P=r("div"),u(J.$$.fragment),Mt=a(),K=r("p"),Ot=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),$e=r("code"),Ft=i("prepare_for_model"),St=i(" method."),Vt=a(),j=r("div"),u(ee.$$.fragment),Ut=a(),ye=r("p"),Wt=i("Normalize tokens in a Tweet"),Ht=a(),I=r("div"),u(te.$$.fragment),Xt=a(),ze=r("p"),Qt=i("Normalize a raw Tweet"),this.h()},l(t){const m=xs('[data-svelte="svelte-1phssyn"]',document.head);E=o(m,"META",{name:!0,content:!0}),m.forEach(s),qe=l(t),$=o(t,"H1",{class:!0});var Ce=n($);q=o(Ce,"A",{id:!0,class:!0,href:!0});var Kt=n(q);de=o(Kt,"SPAN",{});var es=n(de);g(C.$$.fragment,es),es.forEach(s),Kt.forEach(s),Ge=l(Ce),pe=o(Ce,"SPAN",{});var ts=n(pe);Je=c(ts,"BERTweet"),ts.forEach(s),Ce.forEach(s),Be=l(t),y=o(t,"H2",{class:!0});var Me=n(y);B=o(Me,"A",{id:!0,class:!0,href:!0});var ss=n(B);me=o(ss,"SPAN",{});var rs=n(me);g(M.$$.fragment,rs),rs.forEach(s),ss.forEach(s),Ke=l(Me),fe=o(Me,"SPAN",{});var os=n(fe);et=c(os,"Overview"),os.forEach(s),Me.forEach(s),xe=l(t),x=o(t,"P",{});var Oe=n(x);tt=c(Oe,"The BERTweet model was proposed in "),O=o(Oe,"A",{href:!0,rel:!0});var ns=n(O);st=c(ns,"BERTweet: A pre-trained language model for English Tweets"),ns.forEach(s),rt=c(Oe," by Dat Quoc Nguyen, Thanh Vu, Anh Tuan Nguyen."),Oe.forEach(s),Le=l(t),se=o(t,"P",{});var as=n(se);ot=c(as,"The abstract from the paper is the following:"),as.forEach(s),Ae=l(t),re=o(t,"P",{});var is=n(re);he=o(is,"EM",{});var ls=n(he);nt=c(ls,`We present BERTweet, the first public large-scale pre-trained language model for English Tweets. Our BERTweet, having
the same architecture as BERT-base (Devlin et al., 2019), is trained using the RoBERTa pre-training procedure (Liu et
al., 2019). Experiments show that BERTweet outperforms strong baselines RoBERTa-base and XLM-R-base (Conneau et al.,
2020), producing better performance results than the previous state-of-the-art models on three Tweet NLP tasks:
Part-of-speech tagging, Named-entity recognition and text classification.`),ls.forEach(s),is.forEach(s),Re=l(t),oe=o(t,"P",{});var cs=n(oe);at=c(cs,"Example of use:"),cs.forEach(s),De=l(t),g(F.$$.fragment,t),Pe=l(t),v=o(t,"P",{});var le=n(v);it=c(le,"This model was contributed by "),S=o(le,"A",{href:!0,rel:!0});var ds=n(S);lt=c(ds,"dqnguyen"),ds.forEach(s),ct=c(le,". The original code can be found "),V=o(le,"A",{href:!0,rel:!0});var ps=n(V);dt=c(ps,"here"),ps.forEach(s),pt=c(le,"."),le.forEach(s),je=l(t),z=o(t,"H2",{class:!0});var Fe=n(z);L=o(Fe,"A",{id:!0,class:!0,href:!0});var ms=n(L);ue=o(ms,"SPAN",{});var fs=n(ue);g(U.$$.fragment,fs),fs.forEach(s),ms.forEach(s),mt=l(Fe),ge=o(Fe,"SPAN",{});var hs=n(ge);ft=c(hs,"BertweetTokenizer"),hs.forEach(s),Fe.forEach(s),Ie=l(t),p=o(t,"DIV",{class:!0});var f=n(p);g(W.$$.fragment,f),ht=l(f),_e=o(f,"P",{});var us=n(_e);ut=c(us,"Constructs a BERTweet tokenizer, using Byte-Pair-Encoding."),us.forEach(s),gt=l(f),H=o(f,"P",{});var Se=n(H);_t=c(Se,"This tokenizer inherits from "),ne=o(Se,"A",{href:!0});var gs=n(ne);kt=c(gs,"PreTrainedTokenizer"),gs.forEach(s),wt=c(Se,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Se.forEach(s),bt=l(f),A=o(f,"DIV",{class:!0});var Ve=n(A);g(X.$$.fragment,Ve),vt=l(Ve),ke=o(Ve,"P",{});var _s=n(ke);Tt=c(_s,"Loads a pre-existing dictionary from a text file and adds its symbols to this instance."),_s.forEach(s),Ve.forEach(s),Et=l(f),T=o(f,"DIV",{class:!0});var ce=n(T);g(Q.$$.fragment,ce),$t=l(ce),we=o(ce,"P",{});var ks=n(we);yt=c(ks,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERTweet sequence has the following format:`),ks.forEach(s),zt=l(ce),Y=o(ce,"UL",{});var Ue=n(Y);ae=o(Ue,"LI",{});var Yt=n(ae);qt=c(Yt,"single sequence: "),be=o(Yt,"CODE",{});var ws=n(be);Bt=c(ws,"<s> X </s>"),ws.forEach(s),Yt.forEach(s),xt=l(Ue),ie=o(Ue,"LI",{});var Zt=n(ie);Lt=c(Zt,"pair of sequences: "),ve=o(Zt,"CODE",{});var bs=n(ve);At=c(bs,"<s> A </s></s> B </s>"),bs.forEach(s),Zt.forEach(s),Ue.forEach(s),ce.forEach(s),Rt=l(f),R=o(f,"DIV",{class:!0});var We=n(R);g(Z.$$.fragment,We),Dt=l(We),Te=o(We,"P",{});var vs=n(Te);Pt=c(vs,"Converts a sequence of tokens (string) in a single string."),vs.forEach(s),We.forEach(s),jt=l(f),D=o(f,"DIV",{class:!0});var He=n(D);g(G.$$.fragment,He),It=l(He),Ee=o(He,"P",{});var Ts=n(Ee);Nt=c(Ts,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BERTweet does
not make use of token type ids, therefore a list of zeros is returned.`),Ts.forEach(s),He.forEach(s),Ct=l(f),P=o(f,"DIV",{class:!0});var Xe=n(P);g(J.$$.fragment,Xe),Mt=l(Xe),K=o(Xe,"P",{});var Qe=n(K);Ot=c(Qe,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),$e=o(Qe,"CODE",{});var Es=n($e);Ft=c(Es,"prepare_for_model"),Es.forEach(s),St=c(Qe," method."),Qe.forEach(s),Xe.forEach(s),Vt=l(f),j=o(f,"DIV",{class:!0});var Ye=n(j);g(ee.$$.fragment,Ye),Ut=l(Ye),ye=o(Ye,"P",{});var $s=n(ye);Wt=c($s,"Normalize tokens in a Tweet"),$s.forEach(s),Ye.forEach(s),Ht=l(f),I=o(f,"DIV",{class:!0});var Ze=n(I);g(te.$$.fragment,Ze),Xt=l(Ze),ze=o(Ze,"P",{});var ys=n(ze);Qt=c(ys,"Normalize a raw Tweet"),ys.forEach(s),Ze.forEach(s),f.forEach(s),this.h()},h(){d(E,"name","hf:doc:metadata"),d(E,"content",JSON.stringify(Ps)),d(q,"id","bertweet"),d(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(q,"href","#bertweet"),d($,"class","relative group"),d(B,"id","overview"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#overview"),d(y,"class","relative group"),d(O,"href","https://www.aclweb.org/anthology/2020.emnlp-demos.2.pdf"),d(O,"rel","nofollow"),d(S,"href","https://huggingface.co/dqnguyen"),d(S,"rel","nofollow"),d(V,"href","https://github.com/VinAIResearch/BERTweet"),d(V,"rel","nofollow"),d(L,"id","transformers.BertweetTokenizer"),d(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(L,"href","#transformers.BertweetTokenizer"),d(z,"class","relative group"),d(ne,"href","/docs/transformers/v4.19.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(p,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,E),h(t,qe,m),h(t,$,m),e($,q),e(q,de),_(C,de,null),e($,Ge),e($,pe),e(pe,Je),h(t,Be,m),h(t,y,m),e(y,B),e(B,me),_(M,me,null),e(y,Ke),e(y,fe),e(fe,et),h(t,xe,m),h(t,x,m),e(x,tt),e(x,O),e(O,st),e(x,rt),h(t,Le,m),h(t,se,m),e(se,ot),h(t,Ae,m),h(t,re,m),e(re,he),e(he,nt),h(t,Re,m),h(t,oe,m),e(oe,at),h(t,De,m),_(F,t,m),h(t,Pe,m),h(t,v,m),e(v,it),e(v,S),e(S,lt),e(v,ct),e(v,V),e(V,dt),e(v,pt),h(t,je,m),h(t,z,m),e(z,L),e(L,ue),_(U,ue,null),e(z,mt),e(z,ge),e(ge,ft),h(t,Ie,m),h(t,p,m),_(W,p,null),e(p,ht),e(p,_e),e(_e,ut),e(p,gt),e(p,H),e(H,_t),e(H,ne),e(ne,kt),e(H,wt),e(p,bt),e(p,A),_(X,A,null),e(A,vt),e(A,ke),e(ke,Tt),e(p,Et),e(p,T),_(Q,T,null),e(T,$t),e(T,we),e(we,yt),e(T,zt),e(T,Y),e(Y,ae),e(ae,qt),e(ae,be),e(be,Bt),e(Y,xt),e(Y,ie),e(ie,Lt),e(ie,ve),e(ve,At),e(p,Rt),e(p,R),_(Z,R,null),e(R,Dt),e(R,Te),e(Te,Pt),e(p,jt),e(p,D),_(G,D,null),e(D,It),e(D,Ee),e(Ee,Nt),e(p,Ct),e(p,P),_(J,P,null),e(P,Mt),e(P,K),e(K,Ot),e(K,$e),e($e,Ft),e(K,St),e(p,Vt),e(p,j),_(ee,j,null),e(j,Ut),e(j,ye),e(ye,Wt),e(p,Ht),e(p,I),_(te,I,null),e(I,Xt),e(I,ze),e(ze,Qt),Ne=!0},p:Ls,i(t){Ne||(k(C.$$.fragment,t),k(M.$$.fragment,t),k(F.$$.fragment,t),k(U.$$.fragment,t),k(W.$$.fragment,t),k(X.$$.fragment,t),k(Q.$$.fragment,t),k(Z.$$.fragment,t),k(G.$$.fragment,t),k(J.$$.fragment,t),k(ee.$$.fragment,t),k(te.$$.fragment,t),Ne=!0)},o(t){w(C.$$.fragment,t),w(M.$$.fragment,t),w(F.$$.fragment,t),w(U.$$.fragment,t),w(W.$$.fragment,t),w(X.$$.fragment,t),w(Q.$$.fragment,t),w(Z.$$.fragment,t),w(G.$$.fragment,t),w(J.$$.fragment,t),w(ee.$$.fragment,t),w(te.$$.fragment,t),Ne=!1},d(t){s(E),t&&s(qe),t&&s($),b(C),t&&s(Be),t&&s(y),b(M),t&&s(xe),t&&s(x),t&&s(Le),t&&s(se),t&&s(Ae),t&&s(re),t&&s(Re),t&&s(oe),t&&s(De),b(F,t),t&&s(Pe),t&&s(v),t&&s(je),t&&s(z),b(U),t&&s(Ie),t&&s(p),b(W),b(X),b(Q),b(Z),b(G),b(J),b(ee),b(te)}}}const Ps={local:"bertweet",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertweetTokenizer",title:"BertweetTokenizer"}],title:"BERTweet"};function js(Jt){return As(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Os extends zs{constructor(E){super();qs(this,E,js,Ds,Bs,{})}}export{Os as default,Ps as metadata};
