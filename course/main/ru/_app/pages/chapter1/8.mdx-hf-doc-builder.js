import{S as os,i as ps,s as is,e as i,k as m,t as n,w as I,M as us,c as u,d as t,m as f,a as h,h as l,x as Q,b as x,G as e,g as r,y as V,L as cs,q as W,o as X,B as Y,v as ms}from"../../chunks/vendor-hf-doc-builder.js";import{C as ls}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as fs}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";function hs(Z){let p,E,k,K,v,_,B,$,G,C,c,L,q,N,O,S,w,T,d,A,o,z,b,D,F,g,H,J,M,j,U,P;return _=new fs({props:{chapter:1,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter1/section8.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter1/section8.ipynb"}]}}),w=new ls({props:{code:`from transformers import pipeline

unmasker = pipeline("fill-mask", model="bert-base-uncased")
result = unmasker("This man works as a [MASK].")
print([r["token_str"] for r in result])

result = unmasker("This woman works as a [MASK].")
print([r["token_str"] for r in result])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

unmasker = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
result = unmasker(<span class="hljs-string">&quot;This man works as a [MASK].&quot;</span>)
<span class="hljs-built_in">print</span>([r[<span class="hljs-string">&quot;token_str&quot;</span>] <span class="hljs-keyword">for</span> r <span class="hljs-keyword">in</span> result])

result = unmasker(<span class="hljs-string">&quot;This woman works as a [MASK].&quot;</span>)
<span class="hljs-built_in">print</span>([r[<span class="hljs-string">&quot;token_str&quot;</span>] <span class="hljs-keyword">for</span> r <span class="hljs-keyword">in</span> result])`}}),d=new ls({props:{code:`['lawyer', 'carpenter', 'doctor', 'waiter', 'mechanic']
['nurse', 'waitress', 'teacher', 'maid', 'prostitute']`,highlighted:`[<span class="hljs-string">&#x27;lawyer&#x27;</span>, <span class="hljs-string">&#x27;carpenter&#x27;</span>, <span class="hljs-string">&#x27;doctor&#x27;</span>, <span class="hljs-string">&#x27;waiter&#x27;</span>, <span class="hljs-string">&#x27;mechanic&#x27;</span>]
[<span class="hljs-string">&#x27;nurse&#x27;</span>, <span class="hljs-string">&#x27;waitress&#x27;</span>, <span class="hljs-string">&#x27;teacher&#x27;</span>, <span class="hljs-string">&#x27;maid&#x27;</span>, <span class="hljs-string">&#x27;prostitute&#x27;</span>]`}}),{c(){p=i("meta"),E=m(),k=i("h1"),K=n("\u041F\u0440\u0435\u0434\u0432\u0437\u044F\u0442\u043E\u0441\u0442\u0438 \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F"),v=m(),I(_.$$.fragment),B=m(),$=i("p"),G=n("\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u043B\u044C \u0438\u043B\u0438 \u0442\u043E\u0447\u043D\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0432 \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u0441\u0440\u0435\u0434\u0435, \u0438\u043C\u0435\u0439\u0442\u0435 \u0432 \u0432\u0438\u0434\u0443, \u0447\u0442\u043E, \u0445\u043E\u0442\u044F \u044D\u0442\u0438 \u043C\u043E\u0434\u0435\u043B\u0438 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043C\u043E\u0449\u043D\u044B\u043C\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u043E\u043D\u0438 \u0438\u043C\u0435\u044E\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F. \u0421\u0430\u043C\u0430\u044F \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0438\u0437 \u043D\u0438\u0445 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043E\u0431\u044A\u0435\u043C\u0430\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0447\u0430\u0441\u0442\u043E \u043E\u0447\u0438\u0449\u0430\u044E\u0442 \u0432\u0435\u0441\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043D\u0430\u0439\u0442\u0438, \u0431\u0435\u0440\u044F \u043A\u0430\u043A \u043B\u0443\u0447\u0448\u0435\u0435, \u0442\u0430\u043A \u0438 \u0445\u0443\u0434\u0448\u0435\u0435 \u0438\u0437 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0432 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435."),C=m(),c=i("p"),L=n("\u0414\u043B\u044F \u0438\u043B\u043B\u044E\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u0435\u0440\u043D\u0435\u043C\u0441\u044F \u043A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 \u043F\u0430\u0439\u043F\u043B\u0430\u0439\u043D\u0430 "),q=i("code"),N=n("fill-mask"),O=n(" \u0441 \u043C\u043E\u0434\u0435\u043B\u044C\u044E BERT:"),S=m(),I(w.$$.fragment),T=m(),I(d.$$.fragment),A=m(),o=i("p"),z=n("\u041D\u0430 \u043F\u0440\u043E\u0441\u044C\u0431\u0443 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u0432 \u044D\u0442\u0438\u0445 \u0434\u0432\u0443\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u0445 \u043C\u043E\u0434\u0435\u043B\u044C \u0434\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u0438\u043D \u043E\u0442\u0432\u0435\u0442 \u0431\u0435\u0437 \u0433\u0435\u043D\u0434\u0435\u0440\u043D\u043E\u0439 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438 (\u043E\u0444\u0438\u0446\u0438\u0430\u043D\u0442/\u043E\u0444\u0438\u0446\u0438\u0430\u043D\u0442\u043A\u0430). \u0414\u0440\u0443\u0433\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438 \u043E\u0431\u044B\u0447\u043D\u043E \u0430\u0441\u0441\u043E\u0446\u0438\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0441 \u043E\u0434\u043D\u0438\u043C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u043C \u043F\u043E\u043B\u043E\u043C \u2014 \u0438 \u0434\u0430, \u043F\u0440\u043E\u0441\u0442\u0438\u0442\u0443\u0442\u043A\u0430 \u043F\u043E\u043F\u0430\u043B\u0430 \u0432 \u0442\u043E\u043F-5 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u044C \u0430\u0441\u0441\u043E\u0446\u0438\u0438\u0440\u0443\u0435\u0442 \u0441 \u201C\u0436\u0435\u043D\u0449\u0438\u043D\u043E\u0439\u201D \u0438 \u201C\u0440\u0430\u0431\u043E\u0442\u043E\u0439\u201D. \u042D\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0434\u0430\u0436\u0435 \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u0442\u043E, \u0447\u0442\u043E BERT \u2014 \u043E\u0434\u043D\u0430 \u0438\u0437 \u0440\u0435\u0434\u043A\u0438\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439 \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0435\u0440\u043E\u0432, \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u0430\u044F \u043D\u0435 \u043F\u0443\u0442\u0435\u043C \u0441\u0431\u043E\u0440\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043E \u0432\u0441\u0435\u0433\u043E \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430, \u0430 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u044F\u0432\u043D\u043E \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 (\u043E\u043D \u043E\u0431\u0443\u0447\u0435\u043D \u043D\u0430 "),b=i("a"),D=n("\u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0439 \u0412\u0438\u043A\u0438\u043F\u0435\u0434\u0438\u0438"),F=n(" \u0438 \u043D\u0430\u0431\u043E\u0440\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 "),g=i("a"),H=n("BookCorpus"),J=n("."),M=m(),j=i("p"),U=n("\u041F\u043E\u044D\u0442\u043E\u043C\u0443, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u044D\u0442\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B, \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u043C\u043D\u0438\u0442\u044C, \u0447\u0442\u043E \u0438\u0441\u0445\u043E\u0434\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435, \u043C\u043E\u0436\u0435\u0442 \u043E\u0447\u0435\u043D\u044C \u043B\u0435\u0433\u043A\u043E \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u043A\u0441\u0438\u0441\u0442\u0441\u043A\u0438\u0439, \u0440\u0430\u0441\u0438\u0441\u0442\u0441\u043A\u0438\u0439 \u0438\u043B\u0438 \u0433\u043E\u043C\u043E\u0444\u043E\u0431\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442. \u0422\u043E\u043D\u043A\u0430\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043C\u043E\u0434\u0435\u043B\u0438 \u043D\u0430 \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435 \u0438\u0437\u0431\u0430\u0432\u0438\u0442 \u0432\u0430\u0441 \u043E\u0442 \u044D\u0442\u043E\u0439 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u043F\u0440\u0435\u0434\u0432\u0437\u044F\u0442\u043E\u0441\u0442\u0438."),this.h()},l(s){const a=us('[data-svelte="svelte-1phssyn"]',document.head);p=u(a,"META",{name:!0,content:!0}),a.forEach(t),E=f(s),k=u(s,"H1",{id:!0});var ss=h(k);K=l(ss,"\u041F\u0440\u0435\u0434\u0432\u0437\u044F\u0442\u043E\u0441\u0442\u0438 \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F"),ss.forEach(t),v=f(s),Q(_.$$.fragment,s),B=f(s),$=u(s,"P",{});var ts=h($);G=l(ts,"\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u043B\u044C \u0438\u043B\u0438 \u0442\u043E\u0447\u043D\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0432 \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u0441\u0440\u0435\u0434\u0435, \u0438\u043C\u0435\u0439\u0442\u0435 \u0432 \u0432\u0438\u0434\u0443, \u0447\u0442\u043E, \u0445\u043E\u0442\u044F \u044D\u0442\u0438 \u043C\u043E\u0434\u0435\u043B\u0438 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043C\u043E\u0449\u043D\u044B\u043C\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u043E\u043D\u0438 \u0438\u043C\u0435\u044E\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F. \u0421\u0430\u043C\u0430\u044F \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0438\u0437 \u043D\u0438\u0445 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043E\u0431\u044A\u0435\u043C\u0430\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0447\u0430\u0441\u0442\u043E \u043E\u0447\u0438\u0449\u0430\u044E\u0442 \u0432\u0435\u0441\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043D\u0430\u0439\u0442\u0438, \u0431\u0435\u0440\u044F \u043A\u0430\u043A \u043B\u0443\u0447\u0448\u0435\u0435, \u0442\u0430\u043A \u0438 \u0445\u0443\u0434\u0448\u0435\u0435 \u0438\u0437 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0432 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435."),ts.forEach(t),C=f(s),c=u(s,"P",{});var R=h(c);L=l(R,"\u0414\u043B\u044F \u0438\u043B\u043B\u044E\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u0435\u0440\u043D\u0435\u043C\u0441\u044F \u043A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 \u043F\u0430\u0439\u043F\u043B\u0430\u0439\u043D\u0430 "),q=u(R,"CODE",{});var as=h(q);N=l(as,"fill-mask"),as.forEach(t),O=l(R," \u0441 \u043C\u043E\u0434\u0435\u043B\u044C\u044E BERT:"),R.forEach(t),S=f(s),Q(w.$$.fragment,s),T=f(s),Q(d.$$.fragment,s),A=f(s),o=u(s,"P",{});var y=h(o);z=l(y,"\u041D\u0430 \u043F\u0440\u043E\u0441\u044C\u0431\u0443 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u0432 \u044D\u0442\u0438\u0445 \u0434\u0432\u0443\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u0445 \u043C\u043E\u0434\u0435\u043B\u044C \u0434\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u0438\u043D \u043E\u0442\u0432\u0435\u0442 \u0431\u0435\u0437 \u0433\u0435\u043D\u0434\u0435\u0440\u043D\u043E\u0439 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438 (\u043E\u0444\u0438\u0446\u0438\u0430\u043D\u0442/\u043E\u0444\u0438\u0446\u0438\u0430\u043D\u0442\u043A\u0430). \u0414\u0440\u0443\u0433\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438 \u043E\u0431\u044B\u0447\u043D\u043E \u0430\u0441\u0441\u043E\u0446\u0438\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0441 \u043E\u0434\u043D\u0438\u043C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u043C \u043F\u043E\u043B\u043E\u043C \u2014 \u0438 \u0434\u0430, \u043F\u0440\u043E\u0441\u0442\u0438\u0442\u0443\u0442\u043A\u0430 \u043F\u043E\u043F\u0430\u043B\u0430 \u0432 \u0442\u043E\u043F-5 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u044C \u0430\u0441\u0441\u043E\u0446\u0438\u0438\u0440\u0443\u0435\u0442 \u0441 \u201C\u0436\u0435\u043D\u0449\u0438\u043D\u043E\u0439\u201D \u0438 \u201C\u0440\u0430\u0431\u043E\u0442\u043E\u0439\u201D. \u042D\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0434\u0430\u0436\u0435 \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u0442\u043E, \u0447\u0442\u043E BERT \u2014 \u043E\u0434\u043D\u0430 \u0438\u0437 \u0440\u0435\u0434\u043A\u0438\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439 \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0435\u0440\u043E\u0432, \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u0430\u044F \u043D\u0435 \u043F\u0443\u0442\u0435\u043C \u0441\u0431\u043E\u0440\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043E \u0432\u0441\u0435\u0433\u043E \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430, \u0430 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u044F\u0432\u043D\u043E \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 (\u043E\u043D \u043E\u0431\u0443\u0447\u0435\u043D \u043D\u0430 "),b=u(y,"A",{href:!0,rel:!0});var es=h(b);D=l(es,"\u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0439 \u0412\u0438\u043A\u0438\u043F\u0435\u0434\u0438\u0438"),es.forEach(t),F=l(y," \u0438 \u043D\u0430\u0431\u043E\u0440\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 "),g=u(y,"A",{href:!0,rel:!0});var rs=h(g);H=l(rs,"BookCorpus"),rs.forEach(t),J=l(y,"."),y.forEach(t),M=f(s),j=u(s,"P",{});var ns=h(j);U=l(ns,"\u041F\u043E\u044D\u0442\u043E\u043C\u0443, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u044D\u0442\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B, \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u043C\u043D\u0438\u0442\u044C, \u0447\u0442\u043E \u0438\u0441\u0445\u043E\u0434\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435, \u043C\u043E\u0436\u0435\u0442 \u043E\u0447\u0435\u043D\u044C \u043B\u0435\u0433\u043A\u043E \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u043A\u0441\u0438\u0441\u0442\u0441\u043A\u0438\u0439, \u0440\u0430\u0441\u0438\u0441\u0442\u0441\u043A\u0438\u0439 \u0438\u043B\u0438 \u0433\u043E\u043C\u043E\u0444\u043E\u0431\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442. \u0422\u043E\u043D\u043A\u0430\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043C\u043E\u0434\u0435\u043B\u0438 \u043D\u0430 \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435 \u0438\u0437\u0431\u0430\u0432\u0438\u0442 \u0432\u0430\u0441 \u043E\u0442 \u044D\u0442\u043E\u0439 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u043F\u0440\u0435\u0434\u0432\u0437\u044F\u0442\u043E\u0441\u0442\u0438."),ns.forEach(t),this.h()},h(){x(p,"name","hf:doc:metadata"),x(p,"content",JSON.stringify(ks)),x(k,"id",""),x(b,"href","https://huggingface.co/datasets/wikipedia"),x(b,"rel","nofollow"),x(g,"href","https://huggingface.co/datasets/bookcorpus"),x(g,"rel","nofollow")},m(s,a){e(document.head,p),r(s,E,a),r(s,k,a),e(k,K),r(s,v,a),V(_,s,a),r(s,B,a),r(s,$,a),e($,G),r(s,C,a),r(s,c,a),e(c,L),e(c,q),e(q,N),e(c,O),r(s,S,a),V(w,s,a),r(s,T,a),V(d,s,a),r(s,A,a),r(s,o,a),e(o,z),e(o,b),e(b,D),e(o,F),e(o,g),e(g,H),e(o,J),r(s,M,a),r(s,j,a),e(j,U),P=!0},p:cs,i(s){P||(W(_.$$.fragment,s),W(w.$$.fragment,s),W(d.$$.fragment,s),P=!0)},o(s){X(_.$$.fragment,s),X(w.$$.fragment,s),X(d.$$.fragment,s),P=!1},d(s){t(p),s&&t(E),s&&t(k),s&&t(v),Y(_,s),s&&t(B),s&&t($),s&&t(C),s&&t(c),s&&t(S),Y(w,s),s&&t(T),Y(d,s),s&&t(A),s&&t(o),s&&t(M),s&&t(j)}}}const ks={local:"",title:"\u041F\u0440\u0435\u0434\u0432\u0437\u044F\u0442\u043E\u0441\u0442\u0438 \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F"};function _s(Z){return ms(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class gs extends os{constructor(p){super();ps(this,p,_s,hs,is,{})}}export{gs as default,ks as metadata};
