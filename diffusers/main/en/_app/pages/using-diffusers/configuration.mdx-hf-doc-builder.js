import{S as ht,i as gt,s as ut,e as i,k as c,w as U,t as n,M as mt,c as s,d as o,m as h,a,x as z,h as r,b as g,G as e,g as P,y as F,q as R,o as V,B as W,v as pt}from"../../chunks/vendor-hf-doc-builder.js";import{T as ct}from"../../chunks/Tip-hf-doc-builder.js";import{D as Ae}from"../../chunks/Docstring-hf-doc-builder.js";import{I as _t}from"../../chunks/IconCopyLink-hf-doc-builder.js";function vt(te){let l,w,f,p,b,u,v,y;return{c(){l=i("p"),w=n("It is required to be logged in ("),f=i("code"),p=n("huggingface-cli login"),b=n(") when you want to use private or "),u=i("a"),v=n(`gated
models`),y=n("."),this.h()},l(k){l=s(k,"P",{});var $=a(l);w=r($,"It is required to be logged in ("),f=s($,"CODE",{});var E=a(f);p=r(E,"huggingface-cli login"),E.forEach(o),b=r($,") when you want to use private or "),u=s($,"A",{href:!0,rel:!0});var ne=a(u);v=r(ne,`gated
models`),ne.forEach(o),y=r($,"."),$.forEach(o),this.h()},h(){g(u,"href","https://huggingface.co/docs/hub/models-gated#gated-models"),g(u,"rel","nofollow")},m(k,$){P(k,l,$),e(l,w),e(l,f),e(f,p),e(l,b),e(l,u),e(u,v),e(l,y)},d(k){k&&o(l)}}}function bt(te){let l,w,f,p,b;return{c(){l=i("p"),w=n("Activate the special "),f=i("a"),p=n("\u201Coffline-mode\u201D"),b=n(` to
use this method in a firewalled environment.`),this.h()},l(u){l=s(u,"P",{});var v=a(l);w=r(v,"Activate the special "),f=s(v,"A",{href:!0,rel:!0});var y=a(f);p=r(y,"\u201Coffline-mode\u201D"),y.forEach(o),b=r(v,` to
use this method in a firewalled environment.`),v.forEach(o),this.h()},h(){g(f,"href","https://huggingface.co/transformers/installation.html#offline-mode"),g(f,"rel","nofollow")},m(u,v){P(u,l,v),e(l,w),e(l,f),e(f,p),e(l,b)},d(u){u&&o(l)}}}function $t(te){let l,w,f,p,b,u,v,y,k,$,E,ne,he,Ue,ze,Le,d,G,Fe,S,Re,ge,Ve,We,re,Ge,Be,He,B,ue,ie,Ke,Qe,me,se,Xe,Ye,pe,Ze,eo,A,C,_e,oo,to,ve,no,ro,ae,io,so,ao,D,be,lo,fo,$e,co,ho,go,M,we,uo,mo,ye,po,_o,xe,vo,bo,$o,x,H,wo,Ee,yo,xo,O,Eo,I,Co,N,K,Mo,L,Po,Ce,ko,So,le,Ao,Lo,Do,T,Q,Oo,Me,Io,No,j,X,To,Pe,jo,De,q,qo,Y,Jo,Uo,Oe;return u=new _t({}),G=new Ae({props:{name:"class diffusers.ConfigMixin",anchor:"diffusers.ConfigMixin",parameters:[],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/configuration_utils.py#L40"}}),H=new Ae({props:{name:"from_config",anchor:"diffusers.ConfigMixin.from_config",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"return_unused_kwargs",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.ConfigMixin.from_config.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>, <em>optional</em>) &#x2014;
Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a model repo on huggingface.co. Valid model ids should have an
organization name, like <code>google/ddpm-celebahq-256</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using <a href="/docs/diffusers/main/en/using-diffusers/configuration#diffusers.ConfigMixin.save_config">save_config()</a>, e.g.,
<code>./my_model_directory/</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"diffusers.ConfigMixin.from_config.cache_dir",description:`<strong>cache_dir</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained model configuration should be cached if the
standard cache should not be used.`,name:"cache_dir"},{anchor:"diffusers.ConfigMixin.from_config.ignore_mismatched_sizes",description:`<strong>ignore_mismatched_sizes</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to raise an error if some of the weights from the checkpoint do not have the same size
as the weights of the model (if for instance, you are instantiating a model with 10 labels from a
checkpoint with 3 labels).`,name:"ignore_mismatched_sizes"},{anchor:"diffusers.ConfigMixin.from_config.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to force the (re-)download of the model weights and configuration files, overriding the
cached versions if they exist.`,name:"force_download"},{anchor:"diffusers.ConfigMixin.from_config.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to delete incompletely received files. Will attempt to resume the download if such a
file exists.`,name:"resume_download"},{anchor:"diffusers.ConfigMixin.from_config.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or endpoint, e.g., <code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}</code>. The proxies are used on each request.`,name:"proxies"},{anchor:"diffusers.ConfigMixin.from_config.output_loading_info(bool,",description:`<strong>output_loading_info(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to also return a dictionary containing missing keys, unexpected keys and error messages.`,name:"output_loading_info(bool,"},{anchor:"diffusers.ConfigMixin.from_config.local_files_only(bool,",description:`<strong>local_files_only(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to only look at local files (i.e., do not try to download the model).`,name:"local_files_only(bool,"},{anchor:"diffusers.ConfigMixin.from_config.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <em>bool</em>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"diffusers.ConfigMixin.from_config.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;main&quot;</code>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.`,name:"revision"},{anchor:"diffusers.ConfigMixin.from_config.subfolder",description:`<strong>subfolder</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&quot;</code>) &#x2014;
In case the relevant files are located inside a subfolder of the model repo (either remote in
huggingface.co or downloaded locally), you can specify the folder name here.`,name:"subfolder"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/configuration_utils.py#L106"}}),O=new ct({props:{$$slots:{default:[vt]},$$scope:{ctx:te}}}),I=new ct({props:{$$slots:{default:[bt]},$$scope:{ctx:te}}}),K=new Ae({props:{name:"save_config",anchor:"diffusers.ConfigMixin.save_config",parameters:[{name:"save_directory",val:": typing.Union[str, os.PathLike]"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.ConfigMixin.save_config.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the configuration JSON file will be saved (will be created if it does not exist).`,name:"save_directory"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/configuration_utils.py#L86"}}),Q=new Ae({props:{name:"to_json_file",anchor:"diffusers.ConfigMixin.to_json_file",parameters:[{name:"json_file_path",val:": typing.Union[str, os.PathLike]"}],parametersDescription:[{anchor:"diffusers.ConfigMixin.to_json_file.json_file_path",description:`<strong>json_file_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Path to the JSON file in which this configuration instance&#x2019;s parameters will be saved.`,name:"json_file_path"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/configuration_utils.py#L387"}}),X=new Ae({props:{name:"to_json_string",anchor:"diffusers.ConfigMixin.to_json_string",parameters:[],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/configuration_utils.py#L377",returnDescription:`
<p>String containing all the attributes that make up this configuration instance in JSON format.</p>
`,returnType:`
<p><code>str</code></p>
`}}),{c(){l=i("meta"),w=c(),f=i("h1"),p=i("a"),b=i("span"),U(u.$$.fragment),v=c(),y=i("span"),k=n("Configuration"),$=c(),E=i("p"),ne=n("The handling of configurations in Diffusers is with the "),he=i("code"),Ue=n("ConfigMixin"),ze=n(" class."),Le=c(),d=i("div"),U(G.$$.fragment),Fe=c(),S=i("p"),Re=n("Base class for all configuration classes. Stores all configuration parameters under "),ge=i("code"),Ve=n("self.config"),We=n(` Also handles all
methods for loading/downloading/saving classes inheriting from `),re=i("a"),Ge=n("ConfigMixin"),Be=n(" with"),He=c(),B=i("ul"),ue=i("li"),ie=i("a"),Ke=n("from_config()"),Qe=c(),me=i("li"),se=i("a"),Xe=n("save_config()"),Ye=c(),pe=i("p"),Ze=n("Class attributes:"),eo=c(),A=i("ul"),C=i("li"),_e=i("strong"),oo=n("config_name"),to=n(" ("),ve=i("code"),no=n("str"),ro=n(`) \u2014 A filename under which the config should stored when calling
`),ae=i("a"),io=n("save_config()"),so=n(" (should be overridden by parent class)."),ao=c(),D=i("li"),be=i("strong"),lo=n("ignore_for_config"),fo=n(" ("),$e=i("code"),co=n("List[str]"),ho=n(`) \u2014 A list of attributes that should not be saved in the config (should be
overridden by parent class).`),go=c(),M=i("li"),we=i("strong"),uo=n("_compatible_classes"),mo=n(" ("),ye=i("code"),po=n("List[str]"),_o=n(`) \u2014 A list of classes that are compatible with the parent class, so that
`),xe=i("code"),vo=n("from_config"),bo=n(` can be used from a class different than the one used to save the config (should be overridden
by parent class).`),$o=c(),x=i("div"),U(H.$$.fragment),wo=c(),Ee=i("p"),yo=n("Instantiate a Python class from a pre-defined JSON-file."),xo=c(),U(O.$$.fragment),Eo=c(),U(I.$$.fragment),Co=c(),N=i("div"),U(K.$$.fragment),Mo=c(),L=i("p"),Po=n("Save a configuration object to the directory "),Ce=i("code"),ko=n("save_directory"),So=n(`, so that it can be re-loaded using the
`),le=i("a"),Ao=n("from_config()"),Lo=n(" class method."),Do=c(),T=i("div"),U(Q.$$.fragment),Oo=c(),Me=i("p"),Io=n("Save this instance to a JSON file."),No=c(),j=i("div"),U(X.$$.fragment),To=c(),Pe=i("p"),jo=n("Serializes this instance to a JSON string."),De=c(),q=i("p"),qo=n("Under further construction \u{1F6A7}, open a "),Y=i("a"),Jo=n("PR"),Uo=n(" if you want to contribute!"),this.h()},l(t){const _=mt('[data-svelte="svelte-1phssyn"]',document.head);l=s(_,"META",{name:!0,content:!0}),_.forEach(o),w=h(t),f=s(t,"H1",{class:!0});var Z=a(f);p=s(Z,"A",{id:!0,class:!0,href:!0});var ke=a(p);b=s(ke,"SPAN",{});var zo=a(b);z(u.$$.fragment,zo),zo.forEach(o),ke.forEach(o),v=h(Z),y=s(Z,"SPAN",{});var Fo=a(y);k=r(Fo,"Configuration"),Fo.forEach(o),Z.forEach(o),$=h(t),E=s(t,"P",{});var Ie=a(E);ne=r(Ie,"The handling of configurations in Diffusers is with the "),he=s(Ie,"CODE",{});var Ro=a(he);Ue=r(Ro,"ConfigMixin"),Ro.forEach(o),ze=r(Ie," class."),Ie.forEach(o),Le=h(t),d=s(t,"DIV",{class:!0});var m=a(d);z(G.$$.fragment,m),Fe=h(m),S=s(m,"P",{});var fe=a(S);Re=r(fe,"Base class for all configuration classes. Stores all configuration parameters under "),ge=s(fe,"CODE",{});var Vo=a(ge);Ve=r(Vo,"self.config"),Vo.forEach(o),We=r(fe,` Also handles all
methods for loading/downloading/saving classes inheriting from `),re=s(fe,"A",{href:!0});var Wo=a(re);Ge=r(Wo,"ConfigMixin"),Wo.forEach(o),Be=r(fe," with"),fe.forEach(o),He=h(m),B=s(m,"UL",{});var Ne=a(B);ue=s(Ne,"LI",{});var Go=a(ue);ie=s(Go,"A",{href:!0});var Bo=a(ie);Ke=r(Bo,"from_config()"),Bo.forEach(o),Go.forEach(o),Qe=h(Ne),me=s(Ne,"LI",{});var Ho=a(me);se=s(Ho,"A",{href:!0});var Ko=a(se);Xe=r(Ko,"save_config()"),Ko.forEach(o),Ho.forEach(o),Ne.forEach(o),Ye=h(m),pe=s(m,"P",{});var Qo=a(pe);Ze=r(Qo,"Class attributes:"),Qo.forEach(o),eo=h(m),A=s(m,"UL",{});var de=a(A);C=s(de,"LI",{});var ee=a(C);_e=s(ee,"STRONG",{});var Xo=a(_e);oo=r(Xo,"config_name"),Xo.forEach(o),to=r(ee," ("),ve=s(ee,"CODE",{});var Yo=a(ve);no=r(Yo,"str"),Yo.forEach(o),ro=r(ee,`) \u2014 A filename under which the config should stored when calling
`),ae=s(ee,"A",{href:!0});var Zo=a(ae);io=r(Zo,"save_config()"),Zo.forEach(o),so=r(ee," (should be overridden by parent class)."),ee.forEach(o),ao=h(de),D=s(de,"LI",{});var Se=a(D);be=s(Se,"STRONG",{});var et=a(be);lo=r(et,"ignore_for_config"),et.forEach(o),fo=r(Se," ("),$e=s(Se,"CODE",{});var ot=a($e);co=r(ot,"List[str]"),ot.forEach(o),ho=r(Se,`) \u2014 A list of attributes that should not be saved in the config (should be
overridden by parent class).`),Se.forEach(o),go=h(de),M=s(de,"LI",{});var oe=a(M);we=s(oe,"STRONG",{});var tt=a(we);uo=r(tt,"_compatible_classes"),tt.forEach(o),mo=r(oe," ("),ye=s(oe,"CODE",{});var nt=a(ye);po=r(nt,"List[str]"),nt.forEach(o),_o=r(oe,`) \u2014 A list of classes that are compatible with the parent class, so that
`),xe=s(oe,"CODE",{});var rt=a(xe);vo=r(rt,"from_config"),rt.forEach(o),bo=r(oe,` can be used from a class different than the one used to save the config (should be overridden
by parent class).`),oe.forEach(o),de.forEach(o),$o=h(m),x=s(m,"DIV",{class:!0});var J=a(x);z(H.$$.fragment,J),wo=h(J),Ee=s(J,"P",{});var it=a(Ee);yo=r(it,"Instantiate a Python class from a pre-defined JSON-file."),it.forEach(o),xo=h(J),z(O.$$.fragment,J),Eo=h(J),z(I.$$.fragment,J),J.forEach(o),Co=h(m),N=s(m,"DIV",{class:!0});var Te=a(N);z(K.$$.fragment,Te),Mo=h(Te),L=s(Te,"P",{});var ce=a(L);Po=r(ce,"Save a configuration object to the directory "),Ce=s(ce,"CODE",{});var st=a(Ce);ko=r(st,"save_directory"),st.forEach(o),So=r(ce,`, so that it can be re-loaded using the
`),le=s(ce,"A",{href:!0});var at=a(le);Ao=r(at,"from_config()"),at.forEach(o),Lo=r(ce," class method."),ce.forEach(o),Te.forEach(o),Do=h(m),T=s(m,"DIV",{class:!0});var je=a(T);z(Q.$$.fragment,je),Oo=h(je),Me=s(je,"P",{});var lt=a(Me);Io=r(lt,"Save this instance to a JSON file."),lt.forEach(o),je.forEach(o),No=h(m),j=s(m,"DIV",{class:!0});var qe=a(j);z(X.$$.fragment,qe),To=h(qe),Pe=s(qe,"P",{});var ft=a(Pe);jo=r(ft,"Serializes this instance to a JSON string."),ft.forEach(o),qe.forEach(o),m.forEach(o),De=h(t),q=s(t,"P",{});var Je=a(q);qo=r(Je,"Under further construction \u{1F6A7}, open a "),Y=s(Je,"A",{href:!0,rel:!0});var dt=a(Y);Jo=r(dt,"PR"),dt.forEach(o),Uo=r(Je," if you want to contribute!"),Je.forEach(o),this.h()},h(){g(l,"name","hf:doc:metadata"),g(l,"content",JSON.stringify(wt)),g(p,"id","diffusers.ConfigMixin"),g(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(p,"href","#diffusers.ConfigMixin"),g(f,"class","relative group"),g(re,"href","/docs/diffusers/main/en/using-diffusers/configuration#diffusers.ConfigMixin"),g(ie,"href","/docs/diffusers/main/en/using-diffusers/configuration#diffusers.ConfigMixin.from_config"),g(se,"href","/docs/diffusers/main/en/using-diffusers/configuration#diffusers.ConfigMixin.save_config"),g(ae,"href","/docs/diffusers/main/en/using-diffusers/configuration#diffusers.ConfigMixin.save_config"),g(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(le,"href","/docs/diffusers/main/en/using-diffusers/configuration#diffusers.ConfigMixin.from_config"),g(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(d,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Y,"href","https://github.com/huggingface/diffusers/compare"),g(Y,"rel","nofollow")},m(t,_){e(document.head,l),P(t,w,_),P(t,f,_),e(f,p),e(p,b),F(u,b,null),e(f,v),e(f,y),e(y,k),P(t,$,_),P(t,E,_),e(E,ne),e(E,he),e(he,Ue),e(E,ze),P(t,Le,_),P(t,d,_),F(G,d,null),e(d,Fe),e(d,S),e(S,Re),e(S,ge),e(ge,Ve),e(S,We),e(S,re),e(re,Ge),e(S,Be),e(d,He),e(d,B),e(B,ue),e(ue,ie),e(ie,Ke),e(B,Qe),e(B,me),e(me,se),e(se,Xe),e(d,Ye),e(d,pe),e(pe,Ze),e(d,eo),e(d,A),e(A,C),e(C,_e),e(_e,oo),e(C,to),e(C,ve),e(ve,no),e(C,ro),e(C,ae),e(ae,io),e(C,so),e(A,ao),e(A,D),e(D,be),e(be,lo),e(D,fo),e(D,$e),e($e,co),e(D,ho),e(A,go),e(A,M),e(M,we),e(we,uo),e(M,mo),e(M,ye),e(ye,po),e(M,_o),e(M,xe),e(xe,vo),e(M,bo),e(d,$o),e(d,x),F(H,x,null),e(x,wo),e(x,Ee),e(Ee,yo),e(x,xo),F(O,x,null),e(x,Eo),F(I,x,null),e(d,Co),e(d,N),F(K,N,null),e(N,Mo),e(N,L),e(L,Po),e(L,Ce),e(Ce,ko),e(L,So),e(L,le),e(le,Ao),e(L,Lo),e(d,Do),e(d,T),F(Q,T,null),e(T,Oo),e(T,Me),e(Me,Io),e(d,No),e(d,j),F(X,j,null),e(j,To),e(j,Pe),e(Pe,jo),P(t,De,_),P(t,q,_),e(q,qo),e(q,Y),e(Y,Jo),e(q,Uo),Oe=!0},p(t,[_]){const Z={};_&2&&(Z.$$scope={dirty:_,ctx:t}),O.$set(Z);const ke={};_&2&&(ke.$$scope={dirty:_,ctx:t}),I.$set(ke)},i(t){Oe||(R(u.$$.fragment,t),R(G.$$.fragment,t),R(H.$$.fragment,t),R(O.$$.fragment,t),R(I.$$.fragment,t),R(K.$$.fragment,t),R(Q.$$.fragment,t),R(X.$$.fragment,t),Oe=!0)},o(t){V(u.$$.fragment,t),V(G.$$.fragment,t),V(H.$$.fragment,t),V(O.$$.fragment,t),V(I.$$.fragment,t),V(K.$$.fragment,t),V(Q.$$.fragment,t),V(X.$$.fragment,t),Oe=!1},d(t){o(l),t&&o(w),t&&o(f),W(u),t&&o($),t&&o(E),t&&o(Le),t&&o(d),W(G),W(H),W(O),W(I),W(K),W(Q),W(X),t&&o(De),t&&o(q)}}}const wt={local:"diffusers.ConfigMixin",title:"Configuration"};function yt(te){return pt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pt extends ht{constructor(l){super();gt(this,l,yt,$t,ut,{})}}export{Pt as default,wt as metadata};
