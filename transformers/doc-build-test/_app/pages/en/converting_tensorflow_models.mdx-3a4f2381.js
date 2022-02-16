import{S as Un,i as jn,s as Kn,e as r,k as c,w as u,t as s,L as Mn,c as n,d as t,m as h,a,x as d,h as l,b as f,J as o,g as p,y as v,q as T,o as E,B as $}from"../../chunks/vendor-9e2b328e.js";import{T as Yn}from"../../chunks/Tip-76f97a76.js";import{I as M}from"../../chunks/IconCopyLink-fd0e58fd.js";import{C as he}from"../../chunks/CodeBlock-b9ff96e9.js";import"../../chunks/CopyButton-4b97cbf7.js";function qn(qe){let _,I,m,A,L,w,k,x,S,Y,O;return{c(){_=r("p"),I=s("Since 2.3.0 the conversion script is now part of the transformers CLI ("),m=r("strong"),A=s("transformers-cli"),L=s(`) available in any
transformers >= 2.3.0 installation.`),w=c(),k=r("p"),x=s("The documentation below reflects the "),S=r("strong"),Y=s("transformers-cli convert"),O=s(" command format.")},l(b){_=n(b,"P",{});var y=a(_);I=l(y,"Since 2.3.0 the conversion script is now part of the transformers CLI ("),m=n(y,"STRONG",{});var Ge=a(m);A=l(Ge,"transformers-cli"),Ge.forEach(t),L=l(y,`) available in any
transformers >= 2.3.0 installation.`),y.forEach(t),w=h(b),k=n(b,"P",{});var q=a(k);x=l(q,"The documentation below reflects the "),S=n(q,"STRONG",{});var _e=a(S);Y=l(_e,"transformers-cli convert"),_e.forEach(t),O=l(q," command format."),q.forEach(t)},m(b,y){p(b,_,y),o(_,I),o(_,m),o(m,A),o(_,L),p(b,w,y),p(b,k,y),o(k,x),o(k,S),o(S,Y),o(k,O)},d(b){b&&t(_),b&&t(w),b&&t(k)}}}function Jn(qe){let _,I,m,A,L,w,k,x,S,Y,O,b,y,Ge,q,_e,J,At,F,z,Je,me,$o,ze,Po,bt,C,Ao,ue,bo,yo,de,go,wo,yt,P,ko,Qe,Oo,No,Ve,Io,Co,We,Ho,Ro,Xe,Lo,xo,ve,So,Fo,gt,g,Do,Ze,Bo,Go,et,Xo,Uo,tt,jo,Ko,ot,Mo,Yo,wt,Q,qo,rt,Jo,zo,kt,V,Qo,nt,Vo,Wo,Ot,Te,Nt,W,Zo,Ee,er,tr,It,D,Z,at,$e,or,st,rr,Ct,ee,nr,Pe,ar,sr,Ht,H,lr,lt,ir,pr,it,fr,cr,Rt,te,hr,pt,_r,mr,Lt,Ae,xt,oe,ur,be,dr,vr,St,B,re,ft,ye,Tr,ct,Er,Ft,ne,$r,ge,Pr,Ar,Dt,we,Bt,G,ae,ht,ke,br,_t,yr,Gt,se,gr,Oe,wr,kr,Xt,Ne,Ut,X,le,mt,Ie,Or,ut,Nr,jt,ie,Ir,Ce,Cr,Hr,Kt,He,Mt,U,pe,dt,Re,Rr,vt,Lr,Yt,Ue,xr,qt,Le,Jt,j,fe,Tt,xe,Sr,Et,Fr,zt,je,Dr,Qt,Se,Vt,K,ce,$t,Fe,Br,Pt,Gr,Wt,Ke,Xr,Zt,De,eo;return w=new M({}),J=new Yn({props:{$$slots:{default:[qn]},$$scope:{ctx:qe}}}),me=new M({}),Te=new he({props:{code:`export BERT_BASE_DIR=/path/to/bert/uncased_L-12_H-768_A-12

transformers-cli convert --model_type bert \\
  --tf_checkpoint $BERT_BASE_DIR/bert_model.ckpt \\
  --config $BERT_BASE_DIR/bert_config.json \\
  --pytorch_dump_output $BERT_BASE_DIR/pytorch_model.bin,`,highlighted:`<span class="hljs-built_in">export</span> BERT_BASE_DIR=/path/to/bert/uncased_L-12_H-768_A-12

transformers-cli convert --model_type bert \\
  --tf_checkpoint <span class="hljs-variable">$BERT_BASE_DIR</span>/bert_model.ckpt \\
  --config <span class="hljs-variable">$BERT_BASE_DIR</span>/bert_config.json \\
  --pytorch_dump_output <span class="hljs-variable">$BERT_BASE_DIR</span>/pytorch_model.bin`}}),$e=new M({}),Ae=new he({props:{code:`export ALBERT_BASE_DIR=/path/to/albert/albert_base

transformers-cli convert --model_type albert \\
  --tf_checkpoint $ALBERT_BASE_DIR/model.ckpt-best \\
  --config $ALBERT_BASE_DIR/albert_config.json \\
  --pytorch_dump_output $ALBERT_BASE_DIR/pytorch_model.bin,`,highlighted:`<span class="hljs-built_in">export</span> ALBERT_BASE_DIR=/path/to/albert/albert_base

transformers-cli convert --model_type albert \\
  --tf_checkpoint <span class="hljs-variable">$ALBERT_BASE_DIR</span>/model.ckpt-best \\
  --config <span class="hljs-variable">$ALBERT_BASE_DIR</span>/albert_config.json \\
  --pytorch_dump_output <span class="hljs-variable">$ALBERT_BASE_DIR</span>/pytorch_model.bin`}}),ye=new M({}),we=new he({props:{code:`export OPENAI_GPT_CHECKPOINT_FOLDER_PATH=/path/to/openai/pretrained/numpy/weights

transformers-cli convert --model_type gpt \\
  --tf_checkpoint $OPENAI_GPT_CHECKPOINT_FOLDER_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT \\
  [--config OPENAI_GPT_CONFIG] \\
  [--finetuning_task_name OPENAI_GPT_FINETUNED_TASK] \\,`,highlighted:`<span class="hljs-built_in">export</span> OPENAI_GPT_CHECKPOINT_FOLDER_PATH=/path/to/openai/pretrained/numpy/weights

transformers-cli convert --model_type gpt \\
  --tf_checkpoint <span class="hljs-variable">$OPENAI_GPT_CHECKPOINT_FOLDER_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span> \\
  [--config OPENAI_GPT_CONFIG] \\
  [--finetuning_task_name OPENAI_GPT_FINETUNED_TASK] \\`}}),ke=new M({}),Ne=new he({props:{code:`export OPENAI_GPT2_CHECKPOINT_PATH=/path/to/gpt2/pretrained/weights

transformers-cli convert --model_type gpt2 \\
  --tf_checkpoint $OPENAI_GPT2_CHECKPOINT_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT \\
  [--config OPENAI_GPT2_CONFIG] \\
  [--finetuning_task_name OPENAI_GPT2_FINETUNED_TASK],`,highlighted:`<span class="hljs-built_in">export</span> OPENAI_GPT2_CHECKPOINT_PATH=/path/to/gpt2/pretrained/weights

transformers-cli convert --model_type gpt2 \\
  --tf_checkpoint <span class="hljs-variable">$OPENAI_GPT2_CHECKPOINT_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span> \\
  [--config OPENAI_GPT2_CONFIG] \\
  [--finetuning_task_name OPENAI_GPT2_FINETUNED_TASK]`}}),Ie=new M({}),He=new he({props:{code:`export TRANSFO_XL_CHECKPOINT_FOLDER_PATH=/path/to/transfo/xl/checkpoint

transformers-cli convert --model_type transfo_xl \\
  --tf_checkpoint $TRANSFO_XL_CHECKPOINT_FOLDER_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT \\
  [--config TRANSFO_XL_CONFIG] \\
  [--finetuning_task_name TRANSFO_XL_FINETUNED_TASK],`,highlighted:`<span class="hljs-built_in">export</span> TRANSFO_XL_CHECKPOINT_FOLDER_PATH=/path/to/transfo/xl/checkpoint

transformers-cli convert --model_type transfo_xl \\
  --tf_checkpoint <span class="hljs-variable">$TRANSFO_XL_CHECKPOINT_FOLDER_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span> \\
  [--config TRANSFO_XL_CONFIG] \\
  [--finetuning_task_name TRANSFO_XL_FINETUNED_TASK]`}}),Re=new M({}),Le=new he({props:{code:`export TRANSFO_XL_CHECKPOINT_PATH=/path/to/xlnet/checkpoint
export TRANSFO_XL_CONFIG_PATH=/path/to/xlnet/config

transformers-cli convert --model_type xlnet \\
  --tf_checkpoint $TRANSFO_XL_CHECKPOINT_PATH \\
  --config $TRANSFO_XL_CONFIG_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT \\
  [--finetuning_task_name XLNET_FINETUNED_TASK] \\,`,highlighted:`<span class="hljs-built_in">export</span> TRANSFO_XL_CHECKPOINT_PATH=/path/to/xlnet/checkpoint
<span class="hljs-built_in">export</span> TRANSFO_XL_CONFIG_PATH=/path/to/xlnet/config

transformers-cli convert --model_type xlnet \\
  --tf_checkpoint <span class="hljs-variable">$TRANSFO_XL_CHECKPOINT_PATH</span> \\
  --config <span class="hljs-variable">$TRANSFO_XL_CONFIG_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span> \\
  [--finetuning_task_name XLNET_FINETUNED_TASK] \\`}}),xe=new M({}),Se=new he({props:{code:`export XLM_CHECKPOINT_PATH=/path/to/xlm/checkpoint

transformers-cli convert --model_type xlm \\
  --tf_checkpoint $XLM_CHECKPOINT_PATH \\
  --pytorch_dump_output $PYTORCH_DUMP_OUTPUT
 [--config XML_CONFIG] \\
 [--finetuning_task_name XML_FINETUNED_TASK],`,highlighted:`<span class="hljs-built_in">export</span> XLM_CHECKPOINT_PATH=/path/to/xlm/checkpoint

transformers-cli convert --model_type xlm \\
  --tf_checkpoint <span class="hljs-variable">$XLM_CHECKPOINT_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span>
 [--config XML_CONFIG] \\
 [--finetuning_task_name XML_FINETUNED_TASK]`}}),Fe=new M({}),De=new he({props:{code:`export T5=/path/to/t5/uncased_L-12_H-768_A-12

transformers-cli convert --model_type t5 \\
  --tf_checkpoint $T5/t5_model.ckpt \\
  --config $T5/t5_config.json \\
  --pytorch_dump_output $T5/pytorch_model.bin,`,highlighted:`<span class="hljs-built_in">export</span> T5=/path/to/t5/uncased_L-12_H-768_A-12

transformers-cli convert --model_type t5 \\
  --tf_checkpoint <span class="hljs-variable">$T5</span>/t5_model.ckpt \\
  --config <span class="hljs-variable">$T5</span>/t5_config.json \\
  --pytorch_dump_output <span class="hljs-variable">$T5</span>/pytorch_model.bin`}}),{c(){_=r("meta"),I=c(),m=r("h1"),A=r("a"),L=r("span"),u(w.$$.fragment),k=c(),x=r("span"),S=s("Converting Tensorflow Checkpoints"),Y=c(),O=r("p"),b=s(`A command-line interface is provided to convert original Bert/GPT/GPT-2/Transformer-XL/XLNet/XLM checkpoints to models
that can be loaded using the `),y=r("code"),Ge=s("from_pretrained"),q=s(" methods of the library."),_e=c(),u(J.$$.fragment),At=c(),F=r("h2"),z=r("a"),Je=r("span"),u(me.$$.fragment),$o=c(),ze=r("span"),Po=s("BERT"),bt=c(),C=r("p"),Ao=s("You can convert any TensorFlow checkpoint for BERT (in particular "),ue=r("a"),bo=s("the pre-trained models released by Google"),yo=s(`) in a PyTorch save file by using the
`),de=r("a"),go=s("convert_bert_original_tf_checkpoint_to_pytorch.py"),wo=s(" script."),yt=c(),P=r("p"),ko=s("This CLI takes as input a TensorFlow checkpoint (three files starting with "),Qe=r("code"),Oo=s("bert_model.ckpt"),No=s(`) and the associated
configuration file (`),Ve=r("code"),Io=s("bert_config.json"),Co=s(`), and creates a PyTorch model for this configuration, loads the weights from
the TensorFlow checkpoint in the PyTorch model and saves the resulting model in a standard PyTorch save file that can
be imported using `),We=r("code"),Ho=s("from_pretrained()"),Ro=s(" (see example in "),Xe=r("a"),Lo=s("quicktour"),xo=s(" , "),ve=r("a"),So=s("run_glue.py"),Fo=s(" )."),gt=c(),g=r("p"),Do=s("You only need to run this conversion script "),Ze=r("strong"),Bo=s("once"),Go=s(` to get a PyTorch model. You can then disregard the TensorFlow
checkpoint (the three files starting with `),et=r("code"),Xo=s("bert_model.ckpt"),Uo=s(`) but be sure to keep the configuration file (\\
`),tt=r("code"),jo=s("bert_config.json"),Ko=s(") and the vocabulary file ("),ot=r("code"),Mo=s("vocab.txt"),Yo=s(") as these are needed for the PyTorch model too."),wt=c(),Q=r("p"),qo=s("To run this specific conversion script you will need to have TensorFlow and PyTorch installed ("),rt=r("code"),Jo=s("pip install tensorflow"),zo=s("). The rest of the repository only requires PyTorch."),kt=c(),V=r("p"),Qo=s("Here is an example of the conversion process for a pre-trained "),nt=r("code"),Vo=s("BERT-Base Uncased"),Wo=s(" model:"),Ot=c(),u(Te.$$.fragment),Nt=c(),W=r("p"),Zo=s("You can download Google\u2019s pre-trained models for the conversion "),Ee=r("a"),er=s("here"),tr=s("."),It=c(),D=r("h2"),Z=r("a"),at=r("span"),u($e.$$.fragment),or=c(),st=r("span"),rr=s("ALBERT"),Ct=c(),ee=r("p"),nr=s(`Convert TensorFlow model checkpoints of ALBERT to PyTorch using the
`),Pe=r("a"),ar=s("convert_albert_original_tf_checkpoint_to_pytorch.py"),sr=s(" script."),Ht=c(),H=r("p"),lr=s("The CLI takes as input a TensorFlow checkpoint (three files starting with "),lt=r("code"),ir=s("model.ckpt-best"),pr=s(`) and the accompanying
configuration file (`),it=r("code"),fr=s("albert_config.json"),cr=s(`), then creates and saves a PyTorch model. To run this conversion you will
need to have TensorFlow and PyTorch installed.`),Rt=c(),te=r("p"),hr=s("Here is an example of the conversion process for the pre-trained "),pt=r("code"),_r=s("ALBERT Base"),mr=s(" model:"),Lt=c(),u(Ae.$$.fragment),xt=c(),oe=r("p"),ur=s("You can download Google\u2019s pre-trained models for the conversion "),be=r("a"),dr=s("here"),vr=s("."),St=c(),B=r("h2"),re=r("a"),ft=r("span"),u(ye.$$.fragment),Tr=c(),ct=r("span"),Er=s("OpenAI GPT"),Ft=c(),ne=r("p"),$r=s(`Here is an example of the conversion process for a pre-trained OpenAI GPT model, assuming that your NumPy checkpoint
save as the same format than OpenAI pretrained model (see `),ge=r("a"),Pr=s("here"),Ar=s(`\\
)`),Dt=c(),u(we.$$.fragment),Bt=c(),G=r("h2"),ae=r("a"),ht=r("span"),u(ke.$$.fragment),br=c(),_t=r("span"),yr=s("OpenAI GPT-2"),Gt=c(),se=r("p"),gr=s("Here is an example of the conversion process for a pre-trained OpenAI GPT-2 model (see "),Oe=r("a"),wr=s("here"),kr=s(")"),Xt=c(),u(Ne.$$.fragment),Ut=c(),X=r("h2"),le=r("a"),mt=r("span"),u(Ie.$$.fragment),Or=c(),ut=r("span"),Nr=s("Transformer-XL"),jt=c(),ie=r("p"),Ir=s("Here is an example of the conversion process for a pre-trained Transformer-XL model (see "),Ce=r("a"),Cr=s("here"),Hr=s(")"),Kt=c(),u(He.$$.fragment),Mt=c(),U=r("h2"),pe=r("a"),dt=r("span"),u(Re.$$.fragment),Rr=c(),vt=r("span"),Lr=s("XLNet"),Yt=c(),Ue=r("p"),xr=s("Here is an example of the conversion process for a pre-trained XLNet model:"),qt=c(),u(Le.$$.fragment),Jt=c(),j=r("h2"),fe=r("a"),Tt=r("span"),u(xe.$$.fragment),Sr=c(),Et=r("span"),Fr=s("XLM"),zt=c(),je=r("p"),Dr=s("Here is an example of the conversion process for a pre-trained XLM model:"),Qt=c(),u(Se.$$.fragment),Vt=c(),K=r("h2"),ce=r("a"),$t=r("span"),u(Fe.$$.fragment),Br=c(),Pt=r("span"),Gr=s("T5"),Wt=c(),Ke=r("p"),Xr=s("Here is an example of the conversion process for a pre-trained T5 model:"),Zt=c(),u(De.$$.fragment),this.h()},l(e){const i=Mn('[data-svelte="svelte-1phssyn"]',document.head);_=n(i,"META",{name:!0,content:!0}),i.forEach(t),I=h(e),m=n(e,"H1",{class:!0});var Be=a(m);A=n(Be,"A",{id:!0,class:!0,href:!0});var Ur=a(A);L=n(Ur,"SPAN",{});var jr=a(L);d(w.$$.fragment,jr),jr.forEach(t),Ur.forEach(t),k=h(Be),x=n(Be,"SPAN",{});var Kr=a(x);S=l(Kr,"Converting Tensorflow Checkpoints"),Kr.forEach(t),Be.forEach(t),Y=h(e),O=n(e,"P",{});var to=a(O);b=l(to,`A command-line interface is provided to convert original Bert/GPT/GPT-2/Transformer-XL/XLNet/XLM checkpoints to models
that can be loaded using the `),y=n(to,"CODE",{});var Mr=a(y);Ge=l(Mr,"from_pretrained"),Mr.forEach(t),q=l(to," methods of the library."),to.forEach(t),_e=h(e),d(J.$$.fragment,e),At=h(e),F=n(e,"H2",{class:!0});var oo=a(F);z=n(oo,"A",{id:!0,class:!0,href:!0});var Yr=a(z);Je=n(Yr,"SPAN",{});var qr=a(Je);d(me.$$.fragment,qr),qr.forEach(t),Yr.forEach(t),$o=h(oo),ze=n(oo,"SPAN",{});var Jr=a(ze);Po=l(Jr,"BERT"),Jr.forEach(t),oo.forEach(t),bt=h(e),C=n(e,"P",{});var Me=a(C);Ao=l(Me,"You can convert any TensorFlow checkpoint for BERT (in particular "),ue=n(Me,"A",{href:!0,rel:!0});var zr=a(ue);bo=l(zr,"the pre-trained models released by Google"),zr.forEach(t),yo=l(Me,`) in a PyTorch save file by using the
`),de=n(Me,"A",{href:!0,rel:!0});var Qr=a(de);go=l(Qr,"convert_bert_original_tf_checkpoint_to_pytorch.py"),Qr.forEach(t),wo=l(Me," script."),Me.forEach(t),yt=h(e),P=n(e,"P",{});var N=a(P);ko=l(N,"This CLI takes as input a TensorFlow checkpoint (three files starting with "),Qe=n(N,"CODE",{});var Vr=a(Qe);Oo=l(Vr,"bert_model.ckpt"),Vr.forEach(t),No=l(N,`) and the associated
configuration file (`),Ve=n(N,"CODE",{});var Wr=a(Ve);Io=l(Wr,"bert_config.json"),Wr.forEach(t),Co=l(N,`), and creates a PyTorch model for this configuration, loads the weights from
the TensorFlow checkpoint in the PyTorch model and saves the resulting model in a standard PyTorch save file that can
be imported using `),We=n(N,"CODE",{});var Zr=a(We);Ho=l(Zr,"from_pretrained()"),Zr.forEach(t),Ro=l(N," (see example in "),Xe=n(N,"A",{href:!0});var en=a(Xe);Lo=l(en,"quicktour"),en.forEach(t),xo=l(N," , "),ve=n(N,"A",{href:!0,rel:!0});var tn=a(ve);So=l(tn,"run_glue.py"),tn.forEach(t),Fo=l(N," )."),N.forEach(t),gt=h(e),g=n(e,"P",{});var R=a(g);Do=l(R,"You only need to run this conversion script "),Ze=n(R,"STRONG",{});var on=a(Ze);Bo=l(on,"once"),on.forEach(t),Go=l(R,` to get a PyTorch model. You can then disregard the TensorFlow
checkpoint (the three files starting with `),et=n(R,"CODE",{});var rn=a(et);Xo=l(rn,"bert_model.ckpt"),rn.forEach(t),Uo=l(R,`) but be sure to keep the configuration file (\\
`),tt=n(R,"CODE",{});var nn=a(tt);jo=l(nn,"bert_config.json"),nn.forEach(t),Ko=l(R,") and the vocabulary file ("),ot=n(R,"CODE",{});var an=a(ot);Mo=l(an,"vocab.txt"),an.forEach(t),Yo=l(R,") as these are needed for the PyTorch model too."),R.forEach(t),wt=h(e),Q=n(e,"P",{});var ro=a(Q);qo=l(ro,"To run this specific conversion script you will need to have TensorFlow and PyTorch installed ("),rt=n(ro,"CODE",{});var sn=a(rt);Jo=l(sn,"pip install tensorflow"),sn.forEach(t),zo=l(ro,"). The rest of the repository only requires PyTorch."),ro.forEach(t),kt=h(e),V=n(e,"P",{});var no=a(V);Qo=l(no,"Here is an example of the conversion process for a pre-trained "),nt=n(no,"CODE",{});var ln=a(nt);Vo=l(ln,"BERT-Base Uncased"),ln.forEach(t),Wo=l(no," model:"),no.forEach(t),Ot=h(e),d(Te.$$.fragment,e),Nt=h(e),W=n(e,"P",{});var ao=a(W);Zo=l(ao,"You can download Google\u2019s pre-trained models for the conversion "),Ee=n(ao,"A",{href:!0,rel:!0});var pn=a(Ee);er=l(pn,"here"),pn.forEach(t),tr=l(ao,"."),ao.forEach(t),It=h(e),D=n(e,"H2",{class:!0});var so=a(D);Z=n(so,"A",{id:!0,class:!0,href:!0});var fn=a(Z);at=n(fn,"SPAN",{});var cn=a(at);d($e.$$.fragment,cn),cn.forEach(t),fn.forEach(t),or=h(so),st=n(so,"SPAN",{});var hn=a(st);rr=l(hn,"ALBERT"),hn.forEach(t),so.forEach(t),Ct=h(e),ee=n(e,"P",{});var lo=a(ee);nr=l(lo,`Convert TensorFlow model checkpoints of ALBERT to PyTorch using the
`),Pe=n(lo,"A",{href:!0,rel:!0});var _n=a(Pe);ar=l(_n,"convert_albert_original_tf_checkpoint_to_pytorch.py"),_n.forEach(t),sr=l(lo," script."),lo.forEach(t),Ht=h(e),H=n(e,"P",{});var Ye=a(H);lr=l(Ye,"The CLI takes as input a TensorFlow checkpoint (three files starting with "),lt=n(Ye,"CODE",{});var mn=a(lt);ir=l(mn,"model.ckpt-best"),mn.forEach(t),pr=l(Ye,`) and the accompanying
configuration file (`),it=n(Ye,"CODE",{});var un=a(it);fr=l(un,"albert_config.json"),un.forEach(t),cr=l(Ye,`), then creates and saves a PyTorch model. To run this conversion you will
need to have TensorFlow and PyTorch installed.`),Ye.forEach(t),Rt=h(e),te=n(e,"P",{});var io=a(te);hr=l(io,"Here is an example of the conversion process for the pre-trained "),pt=n(io,"CODE",{});var dn=a(pt);_r=l(dn,"ALBERT Base"),dn.forEach(t),mr=l(io," model:"),io.forEach(t),Lt=h(e),d(Ae.$$.fragment,e),xt=h(e),oe=n(e,"P",{});var po=a(oe);ur=l(po,"You can download Google\u2019s pre-trained models for the conversion "),be=n(po,"A",{href:!0,rel:!0});var vn=a(be);dr=l(vn,"here"),vn.forEach(t),vr=l(po,"."),po.forEach(t),St=h(e),B=n(e,"H2",{class:!0});var fo=a(B);re=n(fo,"A",{id:!0,class:!0,href:!0});var Tn=a(re);ft=n(Tn,"SPAN",{});var En=a(ft);d(ye.$$.fragment,En),En.forEach(t),Tn.forEach(t),Tr=h(fo),ct=n(fo,"SPAN",{});var $n=a(ct);Er=l($n,"OpenAI GPT"),$n.forEach(t),fo.forEach(t),Ft=h(e),ne=n(e,"P",{});var co=a(ne);$r=l(co,`Here is an example of the conversion process for a pre-trained OpenAI GPT model, assuming that your NumPy checkpoint
save as the same format than OpenAI pretrained model (see `),ge=n(co,"A",{href:!0,rel:!0});var Pn=a(ge);Pr=l(Pn,"here"),Pn.forEach(t),Ar=l(co,`\\
)`),co.forEach(t),Dt=h(e),d(we.$$.fragment,e),Bt=h(e),G=n(e,"H2",{class:!0});var ho=a(G);ae=n(ho,"A",{id:!0,class:!0,href:!0});var An=a(ae);ht=n(An,"SPAN",{});var bn=a(ht);d(ke.$$.fragment,bn),bn.forEach(t),An.forEach(t),br=h(ho),_t=n(ho,"SPAN",{});var yn=a(_t);yr=l(yn,"OpenAI GPT-2"),yn.forEach(t),ho.forEach(t),Gt=h(e),se=n(e,"P",{});var _o=a(se);gr=l(_o,"Here is an example of the conversion process for a pre-trained OpenAI GPT-2 model (see "),Oe=n(_o,"A",{href:!0,rel:!0});var gn=a(Oe);wr=l(gn,"here"),gn.forEach(t),kr=l(_o,")"),_o.forEach(t),Xt=h(e),d(Ne.$$.fragment,e),Ut=h(e),X=n(e,"H2",{class:!0});var mo=a(X);le=n(mo,"A",{id:!0,class:!0,href:!0});var wn=a(le);mt=n(wn,"SPAN",{});var kn=a(mt);d(Ie.$$.fragment,kn),kn.forEach(t),wn.forEach(t),Or=h(mo),ut=n(mo,"SPAN",{});var On=a(ut);Nr=l(On,"Transformer-XL"),On.forEach(t),mo.forEach(t),jt=h(e),ie=n(e,"P",{});var uo=a(ie);Ir=l(uo,"Here is an example of the conversion process for a pre-trained Transformer-XL model (see "),Ce=n(uo,"A",{href:!0,rel:!0});var Nn=a(Ce);Cr=l(Nn,"here"),Nn.forEach(t),Hr=l(uo,")"),uo.forEach(t),Kt=h(e),d(He.$$.fragment,e),Mt=h(e),U=n(e,"H2",{class:!0});var vo=a(U);pe=n(vo,"A",{id:!0,class:!0,href:!0});var In=a(pe);dt=n(In,"SPAN",{});var Cn=a(dt);d(Re.$$.fragment,Cn),Cn.forEach(t),In.forEach(t),Rr=h(vo),vt=n(vo,"SPAN",{});var Hn=a(vt);Lr=l(Hn,"XLNet"),Hn.forEach(t),vo.forEach(t),Yt=h(e),Ue=n(e,"P",{});var Rn=a(Ue);xr=l(Rn,"Here is an example of the conversion process for a pre-trained XLNet model:"),Rn.forEach(t),qt=h(e),d(Le.$$.fragment,e),Jt=h(e),j=n(e,"H2",{class:!0});var To=a(j);fe=n(To,"A",{id:!0,class:!0,href:!0});var Ln=a(fe);Tt=n(Ln,"SPAN",{});var xn=a(Tt);d(xe.$$.fragment,xn),xn.forEach(t),Ln.forEach(t),Sr=h(To),Et=n(To,"SPAN",{});var Sn=a(Et);Fr=l(Sn,"XLM"),Sn.forEach(t),To.forEach(t),zt=h(e),je=n(e,"P",{});var Fn=a(je);Dr=l(Fn,"Here is an example of the conversion process for a pre-trained XLM model:"),Fn.forEach(t),Qt=h(e),d(Se.$$.fragment,e),Vt=h(e),K=n(e,"H2",{class:!0});var Eo=a(K);ce=n(Eo,"A",{id:!0,class:!0,href:!0});var Dn=a(ce);$t=n(Dn,"SPAN",{});var Bn=a($t);d(Fe.$$.fragment,Bn),Bn.forEach(t),Dn.forEach(t),Br=h(Eo),Pt=n(Eo,"SPAN",{});var Gn=a(Pt);Gr=l(Gn,"T5"),Gn.forEach(t),Eo.forEach(t),Wt=h(e),Ke=n(e,"P",{});var Xn=a(Ke);Xr=l(Xn,"Here is an example of the conversion process for a pre-trained T5 model:"),Xn.forEach(t),Zt=h(e),d(De.$$.fragment,e),this.h()},h(){f(_,"name","hf:doc:metadata"),f(_,"content",JSON.stringify(zn)),f(A,"id","converting-tensorflow-checkpoints"),f(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(A,"href","#converting-tensorflow-checkpoints"),f(m,"class","relative group"),f(z,"id","bert"),f(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(z,"href","#bert"),f(F,"class","relative group"),f(ue,"href","https://github.com/google-research/bert#pre-trained-models"),f(ue,"rel","nofollow"),f(de,"href","https://github.com/huggingface/transformers/tree/master/src/transformers/models/bert/convert_bert_original_tf_checkpoint_to_pytorch.py"),f(de,"rel","nofollow"),f(Xe,"href","quicktour"),f(ve,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/text-classification/run_glue.py"),f(ve,"rel","nofollow"),f(Ee,"href","https://github.com/google-research/bert#pre-trained-models"),f(Ee,"rel","nofollow"),f(Z,"id","albert"),f(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Z,"href","#albert"),f(D,"class","relative group"),f(Pe,"href","https://github.com/huggingface/transformers/tree/master/src/transformers/models/albert/convert_albert_original_tf_checkpoint_to_pytorch.py"),f(Pe,"rel","nofollow"),f(be,"href","https://github.com/google-research/albert#pre-trained-models"),f(be,"rel","nofollow"),f(re,"id","openai-gpt"),f(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(re,"href","#openai-gpt"),f(B,"class","relative group"),f(ge,"href","https://github.com/openai/finetune-transformer-lm"),f(ge,"rel","nofollow"),f(ae,"id","openai-gpt2"),f(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ae,"href","#openai-gpt2"),f(G,"class","relative group"),f(Oe,"href","https://github.com/openai/gpt-2"),f(Oe,"rel","nofollow"),f(le,"id","transformerxl"),f(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(le,"href","#transformerxl"),f(X,"class","relative group"),f(Ce,"href","https://github.com/kimiyoung/transformer-xl/tree/master/tf#obtain-and-evaluate-pretrained-sota-models"),f(Ce,"rel","nofollow"),f(pe,"id","xlnet"),f(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pe,"href","#xlnet"),f(U,"class","relative group"),f(fe,"id","xlm"),f(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fe,"href","#xlm"),f(j,"class","relative group"),f(ce,"id","t5"),f(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ce,"href","#t5"),f(K,"class","relative group")},m(e,i){o(document.head,_),p(e,I,i),p(e,m,i),o(m,A),o(A,L),v(w,L,null),o(m,k),o(m,x),o(x,S),p(e,Y,i),p(e,O,i),o(O,b),o(O,y),o(y,Ge),o(O,q),p(e,_e,i),v(J,e,i),p(e,At,i),p(e,F,i),o(F,z),o(z,Je),v(me,Je,null),o(F,$o),o(F,ze),o(ze,Po),p(e,bt,i),p(e,C,i),o(C,Ao),o(C,ue),o(ue,bo),o(C,yo),o(C,de),o(de,go),o(C,wo),p(e,yt,i),p(e,P,i),o(P,ko),o(P,Qe),o(Qe,Oo),o(P,No),o(P,Ve),o(Ve,Io),o(P,Co),o(P,We),o(We,Ho),o(P,Ro),o(P,Xe),o(Xe,Lo),o(P,xo),o(P,ve),o(ve,So),o(P,Fo),p(e,gt,i),p(e,g,i),o(g,Do),o(g,Ze),o(Ze,Bo),o(g,Go),o(g,et),o(et,Xo),o(g,Uo),o(g,tt),o(tt,jo),o(g,Ko),o(g,ot),o(ot,Mo),o(g,Yo),p(e,wt,i),p(e,Q,i),o(Q,qo),o(Q,rt),o(rt,Jo),o(Q,zo),p(e,kt,i),p(e,V,i),o(V,Qo),o(V,nt),o(nt,Vo),o(V,Wo),p(e,Ot,i),v(Te,e,i),p(e,Nt,i),p(e,W,i),o(W,Zo),o(W,Ee),o(Ee,er),o(W,tr),p(e,It,i),p(e,D,i),o(D,Z),o(Z,at),v($e,at,null),o(D,or),o(D,st),o(st,rr),p(e,Ct,i),p(e,ee,i),o(ee,nr),o(ee,Pe),o(Pe,ar),o(ee,sr),p(e,Ht,i),p(e,H,i),o(H,lr),o(H,lt),o(lt,ir),o(H,pr),o(H,it),o(it,fr),o(H,cr),p(e,Rt,i),p(e,te,i),o(te,hr),o(te,pt),o(pt,_r),o(te,mr),p(e,Lt,i),v(Ae,e,i),p(e,xt,i),p(e,oe,i),o(oe,ur),o(oe,be),o(be,dr),o(oe,vr),p(e,St,i),p(e,B,i),o(B,re),o(re,ft),v(ye,ft,null),o(B,Tr),o(B,ct),o(ct,Er),p(e,Ft,i),p(e,ne,i),o(ne,$r),o(ne,ge),o(ge,Pr),o(ne,Ar),p(e,Dt,i),v(we,e,i),p(e,Bt,i),p(e,G,i),o(G,ae),o(ae,ht),v(ke,ht,null),o(G,br),o(G,_t),o(_t,yr),p(e,Gt,i),p(e,se,i),o(se,gr),o(se,Oe),o(Oe,wr),o(se,kr),p(e,Xt,i),v(Ne,e,i),p(e,Ut,i),p(e,X,i),o(X,le),o(le,mt),v(Ie,mt,null),o(X,Or),o(X,ut),o(ut,Nr),p(e,jt,i),p(e,ie,i),o(ie,Ir),o(ie,Ce),o(Ce,Cr),o(ie,Hr),p(e,Kt,i),v(He,e,i),p(e,Mt,i),p(e,U,i),o(U,pe),o(pe,dt),v(Re,dt,null),o(U,Rr),o(U,vt),o(vt,Lr),p(e,Yt,i),p(e,Ue,i),o(Ue,xr),p(e,qt,i),v(Le,e,i),p(e,Jt,i),p(e,j,i),o(j,fe),o(fe,Tt),v(xe,Tt,null),o(j,Sr),o(j,Et),o(Et,Fr),p(e,zt,i),p(e,je,i),o(je,Dr),p(e,Qt,i),v(Se,e,i),p(e,Vt,i),p(e,K,i),o(K,ce),o(ce,$t),v(Fe,$t,null),o(K,Br),o(K,Pt),o(Pt,Gr),p(e,Wt,i),p(e,Ke,i),o(Ke,Xr),p(e,Zt,i),v(De,e,i),eo=!0},p(e,[i]){const Be={};i&2&&(Be.$$scope={dirty:i,ctx:e}),J.$set(Be)},i(e){eo||(T(w.$$.fragment,e),T(J.$$.fragment,e),T(me.$$.fragment,e),T(Te.$$.fragment,e),T($e.$$.fragment,e),T(Ae.$$.fragment,e),T(ye.$$.fragment,e),T(we.$$.fragment,e),T(ke.$$.fragment,e),T(Ne.$$.fragment,e),T(Ie.$$.fragment,e),T(He.$$.fragment,e),T(Re.$$.fragment,e),T(Le.$$.fragment,e),T(xe.$$.fragment,e),T(Se.$$.fragment,e),T(Fe.$$.fragment,e),T(De.$$.fragment,e),eo=!0)},o(e){E(w.$$.fragment,e),E(J.$$.fragment,e),E(me.$$.fragment,e),E(Te.$$.fragment,e),E($e.$$.fragment,e),E(Ae.$$.fragment,e),E(ye.$$.fragment,e),E(we.$$.fragment,e),E(ke.$$.fragment,e),E(Ne.$$.fragment,e),E(Ie.$$.fragment,e),E(He.$$.fragment,e),E(Re.$$.fragment,e),E(Le.$$.fragment,e),E(xe.$$.fragment,e),E(Se.$$.fragment,e),E(Fe.$$.fragment,e),E(De.$$.fragment,e),eo=!1},d(e){t(_),e&&t(I),e&&t(m),$(w),e&&t(Y),e&&t(O),e&&t(_e),$(J,e),e&&t(At),e&&t(F),$(me),e&&t(bt),e&&t(C),e&&t(yt),e&&t(P),e&&t(gt),e&&t(g),e&&t(wt),e&&t(Q),e&&t(kt),e&&t(V),e&&t(Ot),$(Te,e),e&&t(Nt),e&&t(W),e&&t(It),e&&t(D),$($e),e&&t(Ct),e&&t(ee),e&&t(Ht),e&&t(H),e&&t(Rt),e&&t(te),e&&t(Lt),$(Ae,e),e&&t(xt),e&&t(oe),e&&t(St),e&&t(B),$(ye),e&&t(Ft),e&&t(ne),e&&t(Dt),$(we,e),e&&t(Bt),e&&t(G),$(ke),e&&t(Gt),e&&t(se),e&&t(Xt),$(Ne,e),e&&t(Ut),e&&t(X),$(Ie),e&&t(jt),e&&t(ie),e&&t(Kt),$(He,e),e&&t(Mt),e&&t(U),$(Re),e&&t(Yt),e&&t(Ue),e&&t(qt),$(Le,e),e&&t(Jt),e&&t(j),$(xe),e&&t(zt),e&&t(je),e&&t(Qt),$(Se,e),e&&t(Vt),e&&t(K),$(Fe),e&&t(Wt),e&&t(Ke),e&&t(Zt),$(De,e)}}}const zn={local:"converting-tensorflow-checkpoints",sections:[{local:"bert",title:"BERT"},{local:"albert",title:"ALBERT"},{local:"openai-gpt",title:"OpenAI GPT"},{local:"openai-gpt2",title:"OpenAI GPT-2"},{local:"transformerxl",title:"Transformer-XL"},{local:"xlnet",title:"XLNet"},{local:"xlm",title:"XLM"},{local:"t5",title:"T5"}],title:"Converting Tensorflow Checkpoints"};function Qn(qe,_,I){let{fw:m}=_;return qe.$$set=A=>{"fw"in A&&I(0,m=A.fw)},[m]}class oa extends Un{constructor(_){super();jn(this,_,Qn,Jn,Kn,{fw:0})}}export{oa as default,zn as metadata};
