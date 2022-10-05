import{S as Ut,i as Ht,s as Kt,e as o,k as u,w as K,t as i,M as Ft,c as s,d as t,m,a as n,x as F,h as l,b as c,G as a,g as p,y as G,L as Gt,q as V,o as Q,B as X,v as Vt}from"../../chunks/vendor-hf-doc-builder.js";import{D as Qt}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Wt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as _t}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Xt(kt){let h,pe,f,b,Y,x,Pe,Z,Me,ce,_,g,ee,y,Se,te,De,ue,L,Le,me,N,Ne,de,z,k,Re,B,Ie,Oe,J,We,Ue,He,ae,Ke,he,d,Fe,oe,Ge,Ve,se,Qe,Xe,re,Ye,Ze,fe,j,et,q,tt,at,_e,R,ot,ke,A,ve,I,st,we,C,be,O,rt,ge,W,P,nt,U,it,lt,ze,T,pt,M,ct,ut,je,v,E,ne,S,mt,ie,dt,Te,w,D,ht,le,ft,Ee;return x=new _t({}),y=new _t({}),A=new Wt({props:{code:`import torch
from transformers import AutoModel, AutoTokenizer

bertjapanese = AutoModel.from_pretrained("cl-tohoku/bert-base-japanese")
tokenizer = AutoTokenizer.from_pretrained("cl-tohoku/bert-base-japanese")

## Input Japanese Text
line = "\u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u3002"

inputs = tokenizer(line, return_tensors="pt")

print(tokenizer.decode(inputs["input_ids"][0]))

outputs = bertjapanese(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>bertjapanese = AutoModel.from_pretrained(<span class="hljs-string">&quot;cl-tohoku/bert-base-japanese&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;cl-tohoku/bert-base-japanese&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment">## Input Japanese Text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>line = <span class="hljs-string">&quot;\u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u3002&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(line, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>]))
[CLS] \u543E\u8F29 \u306F \u732B \u3067 \u3042\u308B \u3002 [SEP]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = bertjapanese(**inputs)`}}),C=new Wt({props:{code:`bertjapanese = AutoModel.from_pretrained("cl-tohoku/bert-base-japanese-char")
tokenizer = AutoTokenizer.from_pretrained("cl-tohoku/bert-base-japanese-char")

## Input Japanese Text
line = "\u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u3002"

inputs = tokenizer(line, return_tensors="pt")

print(tokenizer.decode(inputs["input_ids"][0]))

outputs = bertjapanese(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>bertjapanese = AutoModel.from_pretrained(<span class="hljs-string">&quot;cl-tohoku/bert-base-japanese-char&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;cl-tohoku/bert-base-japanese-char&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment">## Input Japanese Text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>line = <span class="hljs-string">&quot;\u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u3002&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(line, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>]))
[CLS] \u543E \u8F29 \u306F \u732B \u3067 \u3042 \u308B \u3002 [SEP]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = bertjapanese(**inputs)`}}),S=new _t({}),D=new Qt({props:{name:"class transformers.BertJapaneseTokenizer",anchor:"transformers.BertJapaneseTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"do_word_tokenize",val:" = True"},{name:"do_subword_tokenize",val:" = True"},{name:"word_tokenizer_type",val:" = 'basic'"},{name:"subword_tokenizer_type",val:" = 'wordpiece'"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"mecab_kwargs",val:" = None"},{name:"sudachi_kwargs",val:" = None"},{name:"jumanpp_kwargs",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertJapaneseTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to a one-wordpiece-per-line vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BertJapaneseTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to lower case the input. Only has an effect when do_basic_tokenize=True.`,name:"do_lower_case"},{anchor:"transformers.BertJapaneseTokenizer.do_word_tokenize",description:`<strong>do_word_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to do word tokenization.`,name:"do_word_tokenize"},{anchor:"transformers.BertJapaneseTokenizer.do_subword_tokenize",description:`<strong>do_subword_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to do subword tokenization.`,name:"do_subword_tokenize"},{anchor:"transformers.BertJapaneseTokenizer.word_tokenizer_type",description:`<strong>word_tokenizer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;basic&quot;</code>) &#x2014;
Type of word tokenizer. Choose from [&#x201C;basic&#x201D;, &#x201C;mecab&#x201D;, &#x201C;sudachi&#x201D;, &#x201C;jumanpp&#x201D;].`,name:"word_tokenizer_type"},{anchor:"transformers.BertJapaneseTokenizer.subword_tokenizer_type",description:`<strong>subword_tokenizer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;wordpiece&quot;</code>) &#x2014;
Type of subword tokenizer. Choose from [&#x201C;wordpiece&#x201D;, &#x201C;character&#x201D;].`,name:"subword_tokenizer_type"},{anchor:"transformers.BertJapaneseTokenizer.mecab_kwargs",description:`<strong>mecab_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary passed to the <code>MecabTokenizer</code> constructor.`,name:"mecab_kwargs"},{anchor:"transformers.BertJapaneseTokenizer.sudachi_kwargs",description:`<strong>sudachi_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary passed to the <code>SudachiTokenizer</code> constructor.`,name:"sudachi_kwargs"},{anchor:"transformers.BertJapaneseTokenizer.jumanpp_kwargs",description:`<strong>jumanpp_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary passed to the <code>JumanppTokenizer</code> constructor.`,name:"jumanpp_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_japanese/tokenization_bert_japanese.py#L78"}}),{c(){h=o("meta"),pe=u(),f=o("h1"),b=o("a"),Y=o("span"),K(x.$$.fragment),Pe=u(),Z=o("span"),Me=i("BertJapanese"),ce=u(),_=o("h2"),g=o("a"),ee=o("span"),K(y.$$.fragment),Se=u(),te=o("span"),De=i("Overview"),ue=u(),L=o("p"),Le=i("The BERT models trained on Japanese text."),me=u(),N=o("p"),Ne=i("There are models with two different tokenization methods:"),de=u(),z=o("ul"),k=o("li"),Re=i("Tokenize with MeCab and WordPiece. This requires some extra dependencies, "),B=o("a"),Ie=i("fugashi"),Oe=i(" which is a wrapper around "),J=o("a"),We=i("MeCab"),Ue=i("."),He=u(),ae=o("li"),Ke=i("Tokenize into characters."),he=u(),d=o("p"),Fe=i("To use "),oe=o("em"),Ge=i("MecabTokenizer"),Ve=i(", you should "),se=o("code"),Qe=i('pip install transformers["ja"]'),Xe=i(" (or "),re=o("code"),Ye=i('pip install -e .["ja"]'),Ze=i(` if you install
from source) to install dependencies.`),fe=u(),j=o("p"),et=i("See "),q=o("a"),tt=i("details on cl-tohoku repository"),at=i("."),_e=u(),R=o("p"),ot=i("Example of using a model with MeCab and WordPiece tokenization:"),ke=u(),K(A.$$.fragment),ve=u(),I=o("p"),st=i("Example of using a model with Character tokenization:"),we=u(),K(C.$$.fragment),be=u(),O=o("p"),rt=i("Tips:"),ge=u(),W=o("ul"),P=o("li"),nt=i("This implementation is the same as BERT, except for tokenization method. Refer to the "),U=o("a"),it=i("documentation of BERT"),lt=i(" for more usage examples."),ze=u(),T=o("p"),pt=i("This model was contributed by "),M=o("a"),ct=i("cl-tohoku"),ut=i("."),je=u(),v=o("h2"),E=o("a"),ne=o("span"),K(S.$$.fragment),mt=u(),ie=o("span"),dt=i("BertJapaneseTokenizer"),Te=u(),w=o("div"),K(D.$$.fragment),ht=u(),le=o("p"),ft=i("Construct a BERT tokenizer for Japanese text."),this.h()},l(e){const r=Ft('[data-svelte="svelte-1phssyn"]',document.head);h=s(r,"META",{name:!0,content:!0}),r.forEach(t),pe=m(e),f=s(e,"H1",{class:!0});var $e=n(f);b=s($e,"A",{id:!0,class:!0,href:!0});var vt=n(b);Y=s(vt,"SPAN",{});var wt=n(Y);F(x.$$.fragment,wt),wt.forEach(t),vt.forEach(t),Pe=m($e),Z=s($e,"SPAN",{});var bt=n(Z);Me=l(bt,"BertJapanese"),bt.forEach(t),$e.forEach(t),ce=m(e),_=s(e,"H2",{class:!0});var xe=n(_);g=s(xe,"A",{id:!0,class:!0,href:!0});var gt=n(g);ee=s(gt,"SPAN",{});var zt=n(ee);F(y.$$.fragment,zt),zt.forEach(t),gt.forEach(t),Se=m(xe),te=s(xe,"SPAN",{});var jt=n(te);De=l(jt,"Overview"),jt.forEach(t),xe.forEach(t),ue=m(e),L=s(e,"P",{});var Tt=n(L);Le=l(Tt,"The BERT models trained on Japanese text."),Tt.forEach(t),me=m(e),N=s(e,"P",{});var Et=n(N);Ne=l(Et,"There are models with two different tokenization methods:"),Et.forEach(t),de=m(e),z=s(e,"UL",{});var ye=n(z);k=s(ye,"LI",{});var H=n(k);Re=l(H,"Tokenize with MeCab and WordPiece. This requires some extra dependencies, "),B=s(H,"A",{href:!0,rel:!0});var $t=n(B);Ie=l($t,"fugashi"),$t.forEach(t),Oe=l(H," which is a wrapper around "),J=s(H,"A",{href:!0,rel:!0});var xt=n(J);We=l(xt,"MeCab"),xt.forEach(t),Ue=l(H,"."),H.forEach(t),He=m(ye),ae=s(ye,"LI",{});var yt=n(ae);Ke=l(yt,"Tokenize into characters."),yt.forEach(t),ye.forEach(t),he=m(e),d=s(e,"P",{});var $=n(d);Fe=l($,"To use "),oe=s($,"EM",{});var Bt=n(oe);Ge=l(Bt,"MecabTokenizer"),Bt.forEach(t),Ve=l($,", you should "),se=s($,"CODE",{});var Jt=n(se);Qe=l(Jt,'pip install transformers["ja"]'),Jt.forEach(t),Xe=l($," (or "),re=s($,"CODE",{});var qt=n(re);Ye=l(qt,'pip install -e .["ja"]'),qt.forEach(t),Ze=l($,` if you install
from source) to install dependencies.`),$.forEach(t),fe=m(e),j=s(e,"P",{});var Be=n(j);et=l(Be,"See "),q=s(Be,"A",{href:!0,rel:!0});var At=n(q);tt=l(At,"details on cl-tohoku repository"),At.forEach(t),at=l(Be,"."),Be.forEach(t),_e=m(e),R=s(e,"P",{});var Ct=n(R);ot=l(Ct,"Example of using a model with MeCab and WordPiece tokenization:"),Ct.forEach(t),ke=m(e),F(A.$$.fragment,e),ve=m(e),I=s(e,"P",{});var Pt=n(I);st=l(Pt,"Example of using a model with Character tokenization:"),Pt.forEach(t),we=m(e),F(C.$$.fragment,e),be=m(e),O=s(e,"P",{});var Mt=n(O);rt=l(Mt,"Tips:"),Mt.forEach(t),ge=m(e),W=s(e,"UL",{});var St=n(W);P=s(St,"LI",{});var Je=n(P);nt=l(Je,"This implementation is the same as BERT, except for tokenization method. Refer to the "),U=s(Je,"A",{href:!0});var Dt=n(U);it=l(Dt,"documentation of BERT"),Dt.forEach(t),lt=l(Je," for more usage examples."),Je.forEach(t),St.forEach(t),ze=m(e),T=s(e,"P",{});var qe=n(T);pt=l(qe,"This model was contributed by "),M=s(qe,"A",{href:!0,rel:!0});var Lt=n(M);ct=l(Lt,"cl-tohoku"),Lt.forEach(t),ut=l(qe,"."),qe.forEach(t),je=m(e),v=s(e,"H2",{class:!0});var Ae=n(v);E=s(Ae,"A",{id:!0,class:!0,href:!0});var Nt=n(E);ne=s(Nt,"SPAN",{});var Rt=n(ne);F(S.$$.fragment,Rt),Rt.forEach(t),Nt.forEach(t),mt=m(Ae),ie=s(Ae,"SPAN",{});var It=n(ie);dt=l(It,"BertJapaneseTokenizer"),It.forEach(t),Ae.forEach(t),Te=m(e),w=s(e,"DIV",{class:!0});var Ce=n(w);F(D.$$.fragment,Ce),ht=m(Ce),le=s(Ce,"P",{});var Ot=n(le);ft=l(Ot,"Construct a BERT tokenizer for Japanese text."),Ot.forEach(t),Ce.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Yt)),c(b,"id","bertjapanese"),c(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(b,"href","#bertjapanese"),c(f,"class","relative group"),c(g,"id","overview"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#overview"),c(_,"class","relative group"),c(B,"href","https://github.com/polm/fugashi"),c(B,"rel","nofollow"),c(J,"href","https://taku910.github.io/mecab/"),c(J,"rel","nofollow"),c(q,"href","https://github.com/cl-tohoku/bert-japanese"),c(q,"rel","nofollow"),c(U,"href","bert"),c(M,"href","https://huggingface.co/cl-tohoku"),c(M,"rel","nofollow"),c(E,"id","transformers.BertJapaneseTokenizer"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#transformers.BertJapaneseTokenizer"),c(v,"class","relative group"),c(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,r){a(document.head,h),p(e,pe,r),p(e,f,r),a(f,b),a(b,Y),G(x,Y,null),a(f,Pe),a(f,Z),a(Z,Me),p(e,ce,r),p(e,_,r),a(_,g),a(g,ee),G(y,ee,null),a(_,Se),a(_,te),a(te,De),p(e,ue,r),p(e,L,r),a(L,Le),p(e,me,r),p(e,N,r),a(N,Ne),p(e,de,r),p(e,z,r),a(z,k),a(k,Re),a(k,B),a(B,Ie),a(k,Oe),a(k,J),a(J,We),a(k,Ue),a(z,He),a(z,ae),a(ae,Ke),p(e,he,r),p(e,d,r),a(d,Fe),a(d,oe),a(oe,Ge),a(d,Ve),a(d,se),a(se,Qe),a(d,Xe),a(d,re),a(re,Ye),a(d,Ze),p(e,fe,r),p(e,j,r),a(j,et),a(j,q),a(q,tt),a(j,at),p(e,_e,r),p(e,R,r),a(R,ot),p(e,ke,r),G(A,e,r),p(e,ve,r),p(e,I,r),a(I,st),p(e,we,r),G(C,e,r),p(e,be,r),p(e,O,r),a(O,rt),p(e,ge,r),p(e,W,r),a(W,P),a(P,nt),a(P,U),a(U,it),a(P,lt),p(e,ze,r),p(e,T,r),a(T,pt),a(T,M),a(M,ct),a(T,ut),p(e,je,r),p(e,v,r),a(v,E),a(E,ne),G(S,ne,null),a(v,mt),a(v,ie),a(ie,dt),p(e,Te,r),p(e,w,r),G(D,w,null),a(w,ht),a(w,le),a(le,ft),Ee=!0},p:Gt,i(e){Ee||(V(x.$$.fragment,e),V(y.$$.fragment,e),V(A.$$.fragment,e),V(C.$$.fragment,e),V(S.$$.fragment,e),V(D.$$.fragment,e),Ee=!0)},o(e){Q(x.$$.fragment,e),Q(y.$$.fragment,e),Q(A.$$.fragment,e),Q(C.$$.fragment,e),Q(S.$$.fragment,e),Q(D.$$.fragment,e),Ee=!1},d(e){t(h),e&&t(pe),e&&t(f),X(x),e&&t(ce),e&&t(_),X(y),e&&t(ue),e&&t(L),e&&t(me),e&&t(N),e&&t(de),e&&t(z),e&&t(he),e&&t(d),e&&t(fe),e&&t(j),e&&t(_e),e&&t(R),e&&t(ke),X(A,e),e&&t(ve),e&&t(I),e&&t(we),X(C,e),e&&t(be),e&&t(O),e&&t(ge),e&&t(W),e&&t(ze),e&&t(T),e&&t(je),e&&t(v),X(S),e&&t(Te),e&&t(w),X(D)}}}const Yt={local:"bertjapanese",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertJapaneseTokenizer",title:"BertJapaneseTokenizer"}],title:"BertJapanese"};function Zt(kt){return Vt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sa extends Ut{constructor(h){super();Ht(this,h,Zt,Xt,Kt,{})}}export{sa as default,Yt as metadata};
