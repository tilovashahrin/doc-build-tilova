import{S as ss,i as ts,s as rs,e as f,k as x,w as H,t as m,M as as,c as u,d as t,m as j,x as N,a as d,h as c,b as v,N as Xe,G as a,g as p,y as G,o as T,p as Ye,q as F,B as R,v as os,n as Ze}from"../../chunks/vendor-hf-doc-builder.js";import{T as ls}from"../../chunks/Tip-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as es}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{F as ns}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";import"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function ms(A){let o,i;return o=new es({props:{chapter:4,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/ru/chapter4/section2_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/ru/chapter4/section2_tf.ipynb"}]}}),{c(){H(o.$$.fragment)},l(s){N(o.$$.fragment,s)},m(s,_){G(o,s,_),i=!0},i(s){i||(F(o.$$.fragment,s),i=!0)},o(s){T(o.$$.fragment,s),i=!1},d(s){R(o,s)}}}function cs(A){let o,i;return o=new es({props:{chapter:4,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/ru/chapter4/section2_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/ru/chapter4/section2_pt.ipynb"}]}}),{c(){H(o.$$.fragment)},l(s){N(o.$$.fragment,s)},m(s,_){G(o,s,_),i=!0},i(s){i||(F(o.$$.fragment,s),i=!0)},o(s){T(o.$$.fragment,s),i=!1},d(s){R(o,s)}}}function is(A){let o,i,s,_,b,w,y,k,g,$,E,D,C,h,L;return o=new re({props:{code:`from transformers import CamembertTokenizer, TFCamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = TFCamembertForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFCamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),h=new re({props:{code:`from transformers import AutoTokenizer, TFAutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained("camembert-base")
model = TFAutoModelForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFAutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){H(o.$$.fragment),i=x(),s=f("p"),_=m("\u041E\u0434\u043D\u0430\u043A\u043E \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C "),b=f("a"),w=f("code"),y=m("TFAuto*"),k=m(" classes"),g=m(" \u0442\u0430\u043A \u043A\u0430\u043A \u043E\u043D\u0438 \u043F\u043E \u0441\u0432\u043E\u0435\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u044F\u0442 \u043E\u0442 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438. \u0412 \u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043A\u0430\u043A \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u043A\u043E\u0434\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u0430\u043C\u0438, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C\u044B\u043C\u0438 \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0435 CamemBERT, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0430\u0441\u0441\u043E\u0432 "),$=f("code"),E=m("TFAuto*"),D=m(" \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u0430\u043C\u0438:"),C=x(),H(h.$$.fragment),this.h()},l(r){N(o.$$.fragment,r),i=j(r),s=u(r,"P",{});var n=d(s);_=c(n,"\u041E\u0434\u043D\u0430\u043A\u043E \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C "),b=u(n,"A",{href:!0,rel:!0});var M=d(b);w=u(M,"CODE",{});var I=d(w);y=c(I,"TFAuto*"),I.forEach(t),k=c(M," classes"),M.forEach(t),g=c(n," \u0442\u0430\u043A \u043A\u0430\u043A \u043E\u043D\u0438 \u043F\u043E \u0441\u0432\u043E\u0435\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u044F\u0442 \u043E\u0442 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438. \u0412 \u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043A\u0430\u043A \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u043A\u043E\u0434\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u0430\u043C\u0438, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C\u044B\u043C\u0438 \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0435 CamemBERT, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0430\u0441\u0441\u043E\u0432 "),$=u(n,"CODE",{});var S=d($);E=c(S,"TFAuto*"),S.forEach(t),D=c(n," \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u0430\u043C\u0438:"),n.forEach(t),C=j(r),N(h.$$.fragment,r),this.h()},h(){v(b,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),v(b,"rel","nofollow")},m(r,n){G(o,r,n),p(r,i,n),p(r,s,n),a(s,_),a(s,b),a(b,w),a(w,y),a(b,k),a(s,g),a(s,$),a($,E),a(s,D),p(r,C,n),G(h,r,n),L=!0},i(r){L||(F(o.$$.fragment,r),F(h.$$.fragment,r),L=!0)},o(r){T(o.$$.fragment,r),T(h.$$.fragment,r),L=!1},d(r){R(o,r),r&&t(i),r&&t(s),r&&t(C),R(h,r)}}}function ps(A){let o,i,s,_,b,w,y,k,g,$,E,D,C,h,L;return o=new re({props:{code:`from transformers import CamembertTokenizer, CamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = CamembertForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = CamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),h=new re({props:{code:`from transformers import AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained("camembert-base")
model = AutoModelForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = AutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){H(o.$$.fragment),i=x(),s=f("p"),_=m("\u041E\u0434\u043D\u0430\u043A\u043E \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C "),b=f("a"),w=f("code"),y=m("Auto*"),k=m(" \u043A\u043B\u0430\u0441\u0441\u044B"),g=m(", \u0442\u0430\u043A \u043A\u0430\u043A \u043E\u043D\u0438 \u043F\u043E \u0441\u0432\u043E\u0435\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u044F\u0442 \u043E\u0442 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438. \u0412 \u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043A\u0430\u043A \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u043A\u043E\u0434\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u0430\u043C\u0438, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C\u044B\u043C\u0438 \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0435 CamemBERT, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0430\u0441\u0441\u043E\u0432 "),$=f("code"),E=m("Auto*"),D=m(" \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u0430\u043C\u0438:"),C=x(),H(h.$$.fragment),this.h()},l(r){N(o.$$.fragment,r),i=j(r),s=u(r,"P",{});var n=d(s);_=c(n,"\u041E\u0434\u043D\u0430\u043A\u043E \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C "),b=u(n,"A",{href:!0,rel:!0});var M=d(b);w=u(M,"CODE",{});var I=d(w);y=c(I,"Auto*"),I.forEach(t),k=c(M," \u043A\u043B\u0430\u0441\u0441\u044B"),M.forEach(t),g=c(n,", \u0442\u0430\u043A \u043A\u0430\u043A \u043E\u043D\u0438 \u043F\u043E \u0441\u0432\u043E\u0435\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u044F\u0442 \u043E\u0442 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438. \u0412 \u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043A\u0430\u043A \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u043A\u043E\u0434\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u0430\u043C\u0438, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C\u044B\u043C\u0438 \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0435 CamemBERT, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0430\u0441\u0441\u043E\u0432 "),$=u(n,"CODE",{});var S=d($);E=c(S,"Auto*"),S.forEach(t),D=c(n," \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u0430\u043C\u0438:"),n.forEach(t),C=j(r),N(h.$$.fragment,r),this.h()},h(){v(b,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),v(b,"rel","nofollow")},m(r,n){G(o,r,n),p(r,i,n),p(r,s,n),a(s,_),a(s,b),a(b,w),a(w,y),a(b,k),a(s,g),a(s,$),a($,E),a(s,D),p(r,C,n),G(h,r,n),L=!0},i(r){L||(F(o.$$.fragment,r),F(h.$$.fragment,r),L=!0)},o(r){T(o.$$.fragment,r),T(h.$$.fragment,r),L=!1},d(r){R(o,r),r&&t(i),r&&t(s),r&&t(C),R(h,r)}}}function fs(A){let o,i;return{c(){o=f("p"),i=m("\u041F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435: \u043A\u0430\u043A \u043E\u043D\u0430 \u0431\u044B\u043B\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0430, \u043D\u0430 \u043A\u0430\u043A\u0438\u0445 \u043D\u0430\u0431\u043E\u0440\u0430\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0435\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F\u0445 \u0438 \u0441\u043C\u0435\u0449\u0435\u043D\u0438\u044F\u0445. \u0412\u0441\u044F \u044D\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u0432 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435 \u043C\u043E\u0434\u0435\u043B\u0438.")},l(s){o=u(s,"P",{});var _=d(o);i=c(_,"\u041F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435: \u043A\u0430\u043A \u043E\u043D\u0430 \u0431\u044B\u043B\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0430, \u043D\u0430 \u043A\u0430\u043A\u0438\u0445 \u043D\u0430\u0431\u043E\u0440\u0430\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0435\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F\u0445 \u0438 \u0441\u043C\u0435\u0449\u0435\u043D\u0438\u044F\u0445. \u0412\u0441\u044F \u044D\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u0432 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435 \u043C\u043E\u0434\u0435\u043B\u0438."),_.forEach(t)},m(s,_){p(s,o,_),a(o,i)},d(s){s&&t(o)}}}function us(A){let o,i,s,_,b,w,y,k,g,$,E,D,C,h,L,r,n,M,I,S,z,$e,ae,xe,je,oe,we,Me,le,ve,Ee,ue,U,be,K,de,q,Ce,ne,qe,Te,me,Fe,Ae,ce,Le,ye,ie,ze,De,_e,Q,W,Pe,he,Z,Oe,ke,O,P,ee,V,ge;s=new ns({props:{fw:A[0]}});const Se=[cs,ms],X=[];function Be(e,l){return e[0]==="pt"?0:1}k=Be(A),g=X[k]=Se[k](A),U=new re({props:{code:`from transformers import pipeline

camembert_fill_mask = pipeline("fill-mask", model="camembert-base")
results = camembert_fill_mask("Le camembert est <mask> :)")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

camembert_fill_mask = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;camembert-base&quot;</span>)
results = camembert_fill_mask(<span class="hljs-string">&quot;Le camembert est &lt;mask&gt; :)&quot;</span>)`}}),K=new re({props:{code:`[
  {'sequence': 'Le camembert est d\xE9licieux :)', 'score': 0.49091005325317383, 'token': 7200, 'token_str': 'd\xE9licieux'}, 
  {'sequence': 'Le camembert est excellent :)', 'score': 0.1055697426199913, 'token': 2183, 'token_str': 'excellent'}, 
  {'sequence': 'Le camembert est succulent :)', 'score': 0.03453313186764717, 'token': 26202, 'token_str': 'succulent'}, 
  {'sequence': 'Le camembert est meilleur :)', 'score': 0.0330314114689827, 'token': 528, 'token_str': 'meilleur'}, 
  {'sequence': 'Le camembert est parfait :)', 'score': 0.03007650189101696, 'token': 1654, 'token_str': 'parfait'}
]`,highlighted:`[
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est d\xE9licieux :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.49091005325317383</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">7200</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;d\xE9licieux&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est excellent :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1055697426199913</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">2183</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;excellent&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est succulent :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03453313186764717</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">26202</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;succulent&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est meilleur :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0330314114689827</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">528</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;meilleur&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est parfait :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03007650189101696</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">1654</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;parfait&#x27;</span>}
]`}});const He=[ps,is],Y=[];function Ne(e,l){return e[0]==="pt"?0:1}return O=Ne(A),P=Y[O]=He[O](A),V=new ls({props:{$$slots:{default:[fs]},$$scope:{ctx:A}}}),{c(){o=f("meta"),i=x(),H(s.$$.fragment),_=x(),b=f("h1"),w=m("\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043E\u0431\u0443\u0447\u0435\u043D\u043D\u044B\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439"),y=x(),g.c(),$=x(),E=f("p"),D=m("Hub \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u0432\u044B\u0431\u043E\u0440 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0439 \u043C\u043E\u0434\u0435\u043B\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0435\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u043B\u044E\u0431\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0437\u0430\u043F\u0443\u0441\u043A\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0441\u0442\u0440\u043E\u043A \u043A\u043E\u0434\u0430. \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u043C, \u043A\u0430\u043A \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0438 \u043A\u0430\u043A \u0432\u043D\u0435\u0441\u0442\u0438 \u0441\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434 \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E."),C=x(),h=f("p"),L=m("\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C, \u043C\u044B \u0438\u0449\u0435\u043C \u043C\u043E\u0434\u0435\u043B\u044C \u0434\u043B\u044F \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0445 \u0441\u043B\u043E\u0432 \u0432 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0438."),r=x(),n=f("div"),M=f("img"),S=x(),z=f("p"),$e=m("\u041C\u044B \u0432\u044B\u0431\u0435\u0440\u0435\u043C \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442 "),ae=f("code"),xe=m("camembert-base"),je=m(". \u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "),oe=f("code"),we=m("camembert-base"),Me=m(" \u2013 \u0432\u0441\u0435, \u0447\u0442\u043E \u043D\u0430\u043C \u043D\u0443\u0436\u043D\u043E, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C! \u041A\u0430\u043A \u0432\u044B \u0432\u0438\u0434\u0435\u043B\u0438 \u0432 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0445 \u0433\u043B\u0430\u0432\u0430\u0445, \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u0438 "),le=f("code"),ve=m("pipeline()"),Ee=m(":"),ue=x(),H(U.$$.fragment),be=x(),H(K.$$.fragment),de=x(),q=f("p"),Ce=m("\u041A\u0430\u043A \u0432\u0438\u0434\u0438\u0442\u0435, \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C \u0432 \u043F\u0430\u0439\u043F\u043B\u0430\u0439\u043D \u043E\u0447\u0435\u043D\u044C \u043F\u0440\u043E\u0441\u0442\u043E. \u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435, \u043D\u0430 \u0447\u0442\u043E \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u044D\u0442\u043E \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u043B \u0434\u043B\u044F \u0437\u0430\u0434\u0430\u0447\u0438, \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0437\u0434\u0435\u0441\u044C \u043C\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442 "),ne=f("code"),qe=m("camembert-base"),Te=m(" \u0432 \u043F\u0430\u0439\u043F\u043B\u0430\u0439\u043D "),me=f("code"),Fe=m("fill-mask"),Ae=m(", \u0447\u0442\u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E. \u041D\u043E \u0435\u0441\u043B\u0438 \u0431\u044B \u043C\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438 \u044D\u0442\u0443 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u0443\u044E \u0442\u043E\u0447\u043A\u0443 \u0432 \u043F\u0430\u0439\u043F\u043B\u0430\u0439\u043D "),ce=f("code"),Le=m("text-classification"),ye=m(", \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043D\u0435 \u0438\u043C\u0435\u043B\u0438 \u0431\u044B \u043D\u0438\u043A\u0430\u043A\u043E\u0433\u043E \u0441\u043C\u044B\u0441\u043B\u0430, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439 \u0441\u043B\u043E\u0439 "),ie=f("code"),ze=m("camembert-base"),De=m(" \u043D\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438! \u041C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440 \u0437\u0430\u0434\u0430\u0447 \u0432 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 Hugging Face Hub, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B:"),_e=x(),Q=f("div"),W=f("img"),he=x(),Z=f("p"),Oe=m("\u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C \u043D\u0435 \u0447\u0435\u0440\u0435\u0437 \u043F\u0430\u0439\u043F\u043B\u0430\u0439\u043D, \u0430 \u043F\u0443\u0442\u0435\u043C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u0430 \u043A\u043B\u0430\u0441\u0441\u0430 \u043C\u043E\u0434\u0435\u043B\u0438:"),ke=x(),P.c(),ee=x(),H(V.$$.fragment),this.h()},l(e){const l=as('[data-svelte="svelte-1phssyn"]',document.head);o=u(l,"META",{name:!0,content:!0}),l.forEach(t),i=j(e),N(s.$$.fragment,e),_=j(e),b=u(e,"H1",{id:!0});var pe=d(b);w=c(pe,"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043E\u0431\u0443\u0447\u0435\u043D\u043D\u044B\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439"),pe.forEach(t),y=j(e),g.l(e),$=j(e),E=u(e,"P",{});var se=d(E);D=c(se,"Hub \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u0432\u044B\u0431\u043E\u0440 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0439 \u043C\u043E\u0434\u0435\u043B\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0435\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u043B\u044E\u0431\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0437\u0430\u043F\u0443\u0441\u043A\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0441\u0442\u0440\u043E\u043A \u043A\u043E\u0434\u0430. \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u043C, \u043A\u0430\u043A \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0438 \u043A\u0430\u043A \u0432\u043D\u0435\u0441\u0442\u0438 \u0441\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434 \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E."),se.forEach(t),C=j(e),h=u(e,"P",{});var te=d(h);L=c(te,"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C, \u043C\u044B \u0438\u0449\u0435\u043C \u043C\u043E\u0434\u0435\u043B\u044C \u0434\u043B\u044F \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0445 \u0441\u043B\u043E\u0432 \u0432 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0438."),te.forEach(t),r=j(e),n=u(e,"DIV",{class:!0});var fe=d(n);M=u(fe,"IMG",{src:!0,alt:!0,width:!0}),fe.forEach(t),S=j(e),z=u(e,"P",{});var J=d(z);$e=c(J,"\u041C\u044B \u0432\u044B\u0431\u0435\u0440\u0435\u043C \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442 "),ae=u(J,"CODE",{});var Ge=d(ae);xe=c(Ge,"camembert-base"),Ge.forEach(t),je=c(J,". \u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "),oe=u(J,"CODE",{});var Re=d(oe);we=c(Re,"camembert-base"),Re.forEach(t),Me=c(J," \u2013 \u0432\u0441\u0435, \u0447\u0442\u043E \u043D\u0430\u043C \u043D\u0443\u0436\u043D\u043E, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C! \u041A\u0430\u043A \u0432\u044B \u0432\u0438\u0434\u0435\u043B\u0438 \u0432 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0445 \u0433\u043B\u0430\u0432\u0430\u0445, \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u0438 "),le=u(J,"CODE",{});var Ie=d(le);ve=c(Ie,"pipeline()"),Ie.forEach(t),Ee=c(J,":"),J.forEach(t),ue=j(e),N(U.$$.fragment,e),be=j(e),N(K.$$.fragment,e),de=j(e),q=u(e,"P",{});var B=d(q);Ce=c(B,"\u041A\u0430\u043A \u0432\u0438\u0434\u0438\u0442\u0435, \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C \u0432 \u043F\u0430\u0439\u043F\u043B\u0430\u0439\u043D \u043E\u0447\u0435\u043D\u044C \u043F\u0440\u043E\u0441\u0442\u043E. \u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435, \u043D\u0430 \u0447\u0442\u043E \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u044D\u0442\u043E \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u043B \u0434\u043B\u044F \u0437\u0430\u0434\u0430\u0447\u0438, \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0437\u0434\u0435\u0441\u044C \u043C\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442 "),ne=u(B,"CODE",{});var Ve=d(ne);qe=c(Ve,"camembert-base"),Ve.forEach(t),Te=c(B," \u0432 \u043F\u0430\u0439\u043F\u043B\u0430\u0439\u043D "),me=u(B,"CODE",{});var Je=d(me);Fe=c(Je,"fill-mask"),Je.forEach(t),Ae=c(B,", \u0447\u0442\u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E. \u041D\u043E \u0435\u0441\u043B\u0438 \u0431\u044B \u043C\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438 \u044D\u0442\u0443 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u0443\u044E \u0442\u043E\u0447\u043A\u0443 \u0432 \u043F\u0430\u0439\u043F\u043B\u0430\u0439\u043D "),ce=u(B,"CODE",{});var Ue=d(ce);Le=c(Ue,"text-classification"),Ue.forEach(t),ye=c(B,", \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043D\u0435 \u0438\u043C\u0435\u043B\u0438 \u0431\u044B \u043D\u0438\u043A\u0430\u043A\u043E\u0433\u043E \u0441\u043C\u044B\u0441\u043B\u0430, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439 \u0441\u043B\u043E\u0439 "),ie=u(B,"CODE",{});var Ke=d(ie);ze=c(Ke,"camembert-base"),Ke.forEach(t),De=c(B," \u043D\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438! \u041C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440 \u0437\u0430\u0434\u0430\u0447 \u0432 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 Hugging Face Hub, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B:"),B.forEach(t),_e=j(e),Q=u(e,"DIV",{class:!0});var Qe=d(Q);W=u(Qe,"IMG",{src:!0,alt:!0,width:!0}),Qe.forEach(t),he=j(e),Z=u(e,"P",{});var We=d(Z);Oe=c(We,"\u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C \u043D\u0435 \u0447\u0435\u0440\u0435\u0437 \u043F\u0430\u0439\u043F\u043B\u0430\u0439\u043D, \u0430 \u043F\u0443\u0442\u0435\u043C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u0430 \u043A\u043B\u0430\u0441\u0441\u0430 \u043C\u043E\u0434\u0435\u043B\u0438:"),We.forEach(t),ke=j(e),P.l(e),ee=j(e),N(V.$$.fragment,e),this.h()},h(){v(o,"name","hf:doc:metadata"),v(o,"content",JSON.stringify(bs)),v(b,"id",""),Xe(M.src,I="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/camembert.gif")||v(M,"src",I),v(M,"alt","Selecting the Camembert model."),v(M,"width","80%"),v(n,"class","flex justify-center"),Xe(W.src,Pe="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/tasks.png")||v(W,"src",Pe),v(W,"alt","The task selector on the web interface."),v(W,"width","80%"),v(Q,"class","flex justify-center")},m(e,l){a(document.head,o),p(e,i,l),G(s,e,l),p(e,_,l),p(e,b,l),a(b,w),p(e,y,l),X[k].m(e,l),p(e,$,l),p(e,E,l),a(E,D),p(e,C,l),p(e,h,l),a(h,L),p(e,r,l),p(e,n,l),a(n,M),p(e,S,l),p(e,z,l),a(z,$e),a(z,ae),a(ae,xe),a(z,je),a(z,oe),a(oe,we),a(z,Me),a(z,le),a(le,ve),a(z,Ee),p(e,ue,l),G(U,e,l),p(e,be,l),G(K,e,l),p(e,de,l),p(e,q,l),a(q,Ce),a(q,ne),a(ne,qe),a(q,Te),a(q,me),a(me,Fe),a(q,Ae),a(q,ce),a(ce,Le),a(q,ye),a(q,ie),a(ie,ze),a(q,De),p(e,_e,l),p(e,Q,l),a(Q,W),p(e,he,l),p(e,Z,l),a(Z,Oe),p(e,ke,l),Y[O].m(e,l),p(e,ee,l),G(V,e,l),ge=!0},p(e,[l]){const pe={};l&1&&(pe.fw=e[0]),s.$set(pe);let se=k;k=Be(e),k!==se&&(Ze(),T(X[se],1,1,()=>{X[se]=null}),Ye(),g=X[k],g||(g=X[k]=Se[k](e),g.c()),F(g,1),g.m($.parentNode,$));let te=O;O=Ne(e),O!==te&&(Ze(),T(Y[te],1,1,()=>{Y[te]=null}),Ye(),P=Y[O],P||(P=Y[O]=He[O](e),P.c()),F(P,1),P.m(ee.parentNode,ee));const fe={};l&2&&(fe.$$scope={dirty:l,ctx:e}),V.$set(fe)},i(e){ge||(F(s.$$.fragment,e),F(g),F(U.$$.fragment,e),F(K.$$.fragment,e),F(P),F(V.$$.fragment,e),ge=!0)},o(e){T(s.$$.fragment,e),T(g),T(U.$$.fragment,e),T(K.$$.fragment,e),T(P),T(V.$$.fragment,e),ge=!1},d(e){t(o),e&&t(i),R(s,e),e&&t(_),e&&t(b),e&&t(y),X[k].d(e),e&&t($),e&&t(E),e&&t(C),e&&t(h),e&&t(r),e&&t(n),e&&t(S),e&&t(z),e&&t(ue),R(U,e),e&&t(be),R(K,e),e&&t(de),e&&t(q),e&&t(_e),e&&t(Q),e&&t(he),e&&t(Z),e&&t(ke),Y[O].d(e),e&&t(ee),R(V,e)}}}const bs={local:"",title:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043E\u0431\u0443\u0447\u0435\u043D\u043D\u044B\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439"};function ds(A,o,i){let s="pt";return os(()=>{const _=new URLSearchParams(window.location.search);i(0,s=_.get("fw")||"pt")}),[s]}class js extends ss{constructor(o){super();ts(this,o,ds,us,rs,{})}}export{js as default,bs as metadata};
