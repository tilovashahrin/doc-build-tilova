import{S as Js,i as Ks,s as Qs,e as n,k as i,w as u,t as r,M as Xs,c as s,d as a,m as d,a as l,x as h,h as o,b as m,F as t,g as p,y as f,L as Ys,q as g,o as _,B as v,v as Zs}from"../chunks/vendor-4918fc3c.js";import{D as E}from"../chunks/Docstring-0ab167e9.js";import{C as V}from"../chunks/CodeBlock-99419108.js";import{I as dr}from"../chunks/IconCopyLink-21d338b1.js";function el(Un){let P,ta,O,W,it,se,pr,dt,mr,aa,le,ur,Je,hr,ra,I,G,pt,ce,fr,mt,gr,oa,R,_r,ut,vr,yr,na,b,ie,br,q,kr,ht,$r,wr,ft,Er,Tr,Ar,U,de,jr,pe,xr,gt,Cr,Dr,Lr,H,me,Pr,ue,Or,_t,Ir,qr,Br,F,he,Sr,fe,zr,vt,Nr,Mr,sa,k,ge,Vr,B,Wr,yt,Gr,Rr,bt,Ur,Hr,Fr,J,_e,Jr,ve,Kr,kt,Qr,Xr,Yr,K,ye,Zr,be,eo,$t,to,ao,ro,Q,ke,oo,$e,no,wt,so,lo,la,y,we,co,S,io,Et,po,mo,Tt,uo,ho,fo,At,go,_o,X,Ee,vo,Te,yo,jt,bo,ko,$o,Y,Ae,wo,je,Eo,xt,To,Ao,jo,Z,xe,xo,Ce,Co,Ct,Do,Lo,ca,T,Po,Dt,Oo,Io,Lt,qo,Bo,ia,De,da,ee,So,Ke,zo,No,pa,Le,ma,A,Mo,Qe,Vo,Wo,Pt,Go,Ro,ua,Pe,ha,te,Uo,Xe,Ho,Fo,fa,Oe,ga,Ye,Jo,_a,Ie,va,z,ae,Ot,qe,Ko,It,Qo,ya,j,Xo,qt,Yo,Zo,Bt,en,tn,ba,x,Be,St,an,rn,Se,ze,on,zt,nn,sn,ln,Ne,cn,Nt,dn,pn,mn,Me,Mt,un,hn,Vt,Ve,fn,Wt,gn,_n,vn,We,Gt,yn,bn,Rt,N,kn,Ut,$n,wn,Ht,En,Tn,ka,Ze,An,$a,Ge,wa,$,jn,Ft,xn,Cn,Jt,Dn,Ln,Kt,Pn,On,Ea,Re,Ta,re,In,Qt,qn,Bn,Aa,Ue,ja,M,oe,Xt,He,Sn,Yt,zn,xa,C,Nn,Zt,Mn,Vn,ea,Wn,Gn,Ca,Fe,Da;return se=new dr({}),ce=new dr({}),ie=new E({props:{name:"class accelerate.tracking.TensorBoardTracker",anchor:"accelerate.tracking.TensorBoardTracker",parameters:[{name:"run_name",val:": str"},{name:"logging_dir",val:": typing.Union[str, os.PathLike, NoneType] = ''"}],parametersDescription:[{anchor:"accelerate.tracking.TensorBoardTracker.run_name",description:`<strong>run_name</strong> (<code>str</code>) &#x2014;
The name of the experiment run`,name:"run_name"},{anchor:"accelerate.tracking.TensorBoardTracker.logging_dir",description:`<strong>logging_dir</strong> (<code>str</code>, <code>os.PathLike</code>) &#x2014;
Location for TensorBoard logs to be stored.`,name:"logging_dir"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L92"}}),de=new E({props:{name:"finish",anchor:"accelerate.tracking.TensorBoardTracker.finish",parameters:[],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L143"}}),me=new E({props:{name:"log",anchor:"accelerate.tracking.TensorBoardTracker.log",parameters:[{name:"values",val:": dict"},{name:"step",val:": typing.Optional[int] = None"}],parametersDescription:[{anchor:"accelerate.tracking.TensorBoardTracker.log.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>str</code>, <code>float</code>, or <code>int</code>) &#x2014;
Values to be logged as key-value pairs. The values need to have type <code>str</code>, <code>float</code>, or <code>int</code>.`,name:"values"},{anchor:"accelerate.tracking.TensorBoardTracker.log.step",description:`<strong>step</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The run step. If included, the log will be affiliated with this step.`,name:"step"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L125"}}),he=new E({props:{name:"store_init_configuration",anchor:"accelerate.tracking.TensorBoardTracker.store_init_configuration",parameters:[{name:"values",val:": dict"}],parametersDescription:[{anchor:"accelerate.tracking.TensorBoardTracker.store_init_configuration.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>bool</code>, <code>str</code>, <code>float</code> or <code>int</code>) &#x2014;
Values to be stored as initial hyperparameters as key-value pairs. The values need to have type <code>bool</code>,
<code>str</code>, <code>float</code>, <code>int</code>, or <code>None</code>.`,name:"values"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L112"}}),ge=new E({props:{name:"class accelerate.tracking.WandBTracker",anchor:"accelerate.tracking.WandBTracker",parameters:[{name:"run_name",val:": str"}],parametersDescription:[{anchor:"accelerate.tracking.WandBTracker.run_name",description:`<strong>run_name</strong> (<code>str</code>) &#x2014;
The name of the experiment run.`,name:"run_name"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L151"}}),_e=new E({props:{name:"finish",anchor:"accelerate.tracking.WandBTracker.finish",parameters:[],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L193"}}),ye=new E({props:{name:"log",anchor:"accelerate.tracking.WandBTracker.log",parameters:[{name:"values",val:": dict"},{name:"step",val:": typing.Optional[int] = None"}],parametersDescription:[{anchor:"accelerate.tracking.WandBTracker.log.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>str</code>, <code>float</code>, or <code>int</code>) &#x2014;
Values to be logged as key-value pairs. The values need to have type <code>str</code>, <code>float</code>, or <code>int</code>.`,name:"values"},{anchor:"accelerate.tracking.WandBTracker.log.step",description:`<strong>step</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The run step. If included, the log will be affiliated with this step.`,name:"step"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L180"}}),ke=new E({props:{name:"store_init_configuration",anchor:"accelerate.tracking.WandBTracker.store_init_configuration",parameters:[{name:"values",val:": dict"}],parametersDescription:[{anchor:"accelerate.tracking.WandBTracker.store_init_configuration.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>bool</code>, <code>str</code>, <code>float</code> or <code>int</code>) &#x2014;
Values to be stored as initial hyperparameters as key-value pairs. The values need to have type <code>bool</code>,
<code>str</code>, <code>float</code>, <code>int</code>, or <code>None</code>.`,name:"values"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L168"}}),we=new E({props:{name:"class accelerate.tracking.CometMLTracker",anchor:"accelerate.tracking.CometMLTracker",parameters:[{name:"run_name",val:": str"}],parametersDescription:[{anchor:"accelerate.tracking.CometMLTracker.run_name",description:`<strong>run_name</strong> (<code>str</code>) &#x2014;
The name of the experiment run.`,name:"run_name"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L201"}}),Ee=new E({props:{name:"finish",anchor:"accelerate.tracking.CometMLTracker.finish",parameters:[],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L247"}}),Ae=new E({props:{name:"log",anchor:"accelerate.tracking.CometMLTracker.log",parameters:[{name:"values",val:": dict"},{name:"step",val:": typing.Optional[int] = None"}],parametersDescription:[{anchor:"accelerate.tracking.CometMLTracker.log.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>str</code>, <code>float</code>, or <code>int</code>) &#x2014;
Values to be logged as key-value pairs. The values need to have type <code>str</code>, <code>float</code>, or <code>int</code>.`,name:"values"},{anchor:"accelerate.tracking.CometMLTracker.log.step",description:`<strong>step</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The run step. If included, the log will be affiliated with this step.`,name:"step"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L232"}}),xe=new E({props:{name:"store_init_configuration",anchor:"accelerate.tracking.CometMLTracker.store_init_configuration",parameters:[{name:"values",val:": dict"}],parametersDescription:[{anchor:"accelerate.tracking.CometMLTracker.store_init_configuration.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>bool</code>, <code>str</code>, <code>float</code> or <code>int</code>) &#x2014;
Values to be stored as initial hyperparameters as key-value pairs. The values need to have type <code>bool</code>,
<code>str</code>, <code>float</code>, <code>int</code>, or <code>None</code>.`,name:"values"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L220"}}),De=new V({props:{code:`from accelerate import Accelerate
from accelerate.utils import LoggerType

accelerator = Accelerate(log_with="all")  # For all available trackers in the environment
accelerator = Accelerate(log_with="wandb")
accelerator = Accelerate(log_with=["wandb", LoggerType.TENSORBOARD])`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerate
<span class="hljs-keyword">from</span> accelerate.utils <span class="hljs-keyword">import</span> LoggerType

accelerator = Accelerate(log_with=<span class="hljs-string">&quot;all&quot;</span>)  <span class="hljs-comment"># For all available trackers in the environment</span>
accelerator = Accelerate(log_with=<span class="hljs-string">&quot;wandb&quot;</span>)
accelerator = Accelerate(log_with=[<span class="hljs-string">&quot;wandb&quot;</span>, LoggerType.TENSORBOARD])`}}),Le=new V({props:{code:`hps = {"num_iterations": 5, "learning_rate": 1e-2}
accelerator.init_trackers("my_project", config=hps)`,highlighted:`hps = {<span class="hljs-string">&quot;num_iterations&quot;</span>: <span class="hljs-number">5</span>, <span class="hljs-string">&quot;learning_rate&quot;</span>: <span class="hljs-number">1e-2</span>}
accelerator.init_trackers(<span class="hljs-string">&quot;my_project&quot;</span>, config=hps)`}}),Pe=new V({props:{code:'accelerator.log({"train_loss": 1.12, "valid_loss": 0.8}, step=1)',highlighted:'accelerator.log({<span class="hljs-string">&quot;train_loss&quot;</span>: <span class="hljs-number">1.12</span>, <span class="hljs-string">&quot;valid_loss&quot;</span>: <span class="hljs-number">0.8</span>}, step=<span class="hljs-number">1</span>)'}}),Oe=new V({props:{code:"accelerator.end_training()",highlighted:"accelerator.end_training()"}}),Ie=new V({props:{code:`from accelerate import Accelerator

accelerator = Accelerator(log_with="all")
config = {
    "num_iterations": 5,
    "learning_rate": 1e-2,
    "loss_function": str(my_loss_function),
}

accelerator.init_trackers("example_project", config=config)

my_model, my_optimizer, my_training_dataloader = accelerate.prepare(my_model, my_optimizer, my_training_dataloader)
device = accelerator.device
my_model.to(device)

for iteration in config["num_iterations"]:
    for step, batch in my_training_dataloader:
        my_optimizer.zero_grad()
        inputs, targets = batch
        inputs = inputs.to(device)
        targets = targets.to(device)
        outputs = my_model(inputs)
        loss = my_loss_function(outputs, targets)
        accelerator.backward(loss)
        my_optimizer.step()
        accelerator.log({"training_loss": loss}, step=step)
accelerator.end_training()`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator(log_with=<span class="hljs-string">&quot;all&quot;</span>)
config = {
    <span class="hljs-string">&quot;num_iterations&quot;</span>: <span class="hljs-number">5</span>,
    <span class="hljs-string">&quot;learning_rate&quot;</span>: <span class="hljs-number">1e-2</span>,
    <span class="hljs-string">&quot;loss_function&quot;</span>: <span class="hljs-built_in">str</span>(my_loss_function),
}

accelerator.init_trackers(<span class="hljs-string">&quot;example_project&quot;</span>, config=config)

my_model, my_optimizer, my_training_dataloader = accelerate.prepare(my_model, my_optimizer, my_training_dataloader)
device = accelerator.device
my_model.to(device)

<span class="hljs-keyword">for</span> iteration <span class="hljs-keyword">in</span> config[<span class="hljs-string">&quot;num_iterations&quot;</span>]:
    <span class="hljs-keyword">for</span> step, batch <span class="hljs-keyword">in</span> my_training_dataloader:
        my_optimizer.zero_grad()
        inputs, targets = batch
        inputs = inputs.to(device)
        targets = targets.to(device)
        outputs = my_model(inputs)
        loss = my_loss_function(outputs, targets)
        accelerator.backward(loss)
        my_optimizer.step()
        accelerator.log({<span class="hljs-string">&quot;training_loss&quot;</span>: loss}, step=step)
accelerator.end_training()`}}),qe=new dr({}),Ge=new V({props:{code:`from accelerate.tracking import GeneralTracker
from typing import Optional

import wandb


class MyCustomTracker(GeneralTracker):
    def __init__(self, run_name: str):
        self.run_name = run_name
        wandb.init(self.run_name)

    def store_init_configuration(self, values: dict):
        wandb.config(values)

    def log(self, values: dict, step: Optional[int] = None):
        wandb.log(values, step=step)`,highlighted:`<span class="hljs-keyword">from</span> accelerate.tracking <span class="hljs-keyword">import</span> GeneralTracker
<span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">Optional</span>

<span class="hljs-keyword">import</span> wandb


<span class="hljs-keyword">class</span> <span class="hljs-title class_">MyCustomTracker</span>(<span class="hljs-title class_ inherited__">GeneralTracker</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, run_name: <span class="hljs-built_in">str</span></span>):
        self.run_name = run_name
        wandb.init(self.run_name)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">store_init_configuration</span>(<span class="hljs-params">self, values: <span class="hljs-built_in">dict</span></span>):
        wandb.config(values)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">log</span>(<span class="hljs-params">self, values: <span class="hljs-built_in">dict</span>, step: <span class="hljs-type">Optional</span>[<span class="hljs-built_in">int</span>] = <span class="hljs-literal">None</span></span>):
        wandb.log(values, step=step)`}}),Re=new V({props:{code:`tracker = MyCustomTracker("some_run_name")
accelerator = Accelerate(log_with=tracker)`,highlighted:`tracker = MyCustomTracker(<span class="hljs-string">&quot;some_run_name&quot;</span>)
accelerator = Accelerate(log_with=tracker)`}}),Ue=new V({props:{code:`tracker = MyCustomTracker("some_run_name")
accelerator = Accelerate(log_with=[tracker, "all"])`,highlighted:`tracker = MyCustomTracker(<span class="hljs-string">&quot;some_run_name&quot;</span>)
accelerator = Accelerate(log_with=[tracker, <span class="hljs-string">&quot;all&quot;</span>])`}}),He=new dr({}),Fe=new V({props:{code:`from accelerate import Accelerator
+ import neptune.new as neptune

accelerator = Accelerator()
+ run = neptune.init(...)

my_model, my_optimizer, my_training_dataloader = accelerate.prepare(my_model, my_optimizer, my_training_dataloader)
device = accelerator.device
my_model.to(device)

for iteration in config["num_iterations"]:
    for batch in my_training_dataloader:
        my_optimizer.zero_grad()
        inputs, targets = batch
        inputs = inputs.to(device)
        targets = targets.to(device)
        outputs = my_model(inputs)
        loss = my_loss_function(outputs, targets)
        total_loss += loss
        accelerator.backward(loss)
        my_optimizer.step()
+       if accelerator.is_main_process:
+           run["logs/training/batch/loss"].log(loss)`,highlighted:`from accelerate import Accelerator
<span class="hljs-addition">+ import neptune.new as neptune</span>

accelerator = Accelerator()
<span class="hljs-addition">+ run = neptune.init(...)</span>

my_model, my_optimizer, my_training_dataloader = accelerate.prepare(my_model, my_optimizer, my_training_dataloader)
device = accelerator.device
my_model.to(device)

for iteration in config[&quot;num_iterations&quot;]:
    for batch in my_training_dataloader:
        my_optimizer.zero_grad()
        inputs, targets = batch
        inputs = inputs.to(device)
        targets = targets.to(device)
        outputs = my_model(inputs)
        loss = my_loss_function(outputs, targets)
        total_loss += loss
        accelerator.backward(loss)
        my_optimizer.step()
<span class="hljs-addition">+       if accelerator.is_main_process:</span>
<span class="hljs-addition">+           run[&quot;logs/training/batch/loss&quot;].log(loss)</span>`}}),{c(){P=n("meta"),ta=i(),O=n("h1"),W=n("a"),it=n("span"),u(se.$$.fragment),pr=i(),dt=n("span"),mr=r("Tracking"),aa=i(),le=n("p"),ur=r(`There are a large number of experiment tracking API\u2019s available, however getting them all to work with in a multi-processing environment can oftentimes be complex.
Accelerate provides a general tracking API that can be used to log useful items during your script through `),Je=n("a"),hr=r("log()"),ra=i(),I=n("h2"),G=n("a"),pt=n("span"),u(ce.$$.fragment),fr=i(),mt=n("span"),gr=r("Integrated Trackers"),oa=i(),R=n("p"),_r=r("Currently "),ut=n("code"),vr=r("Accelerate"),yr=r(" supports three trackers out-of-the-box:"),na=i(),b=n("div"),u(ie.$$.fragment),br=i(),q=n("p"),kr=r("A "),ht=n("code"),$r=r("Tracker"),wr=r(" class that supports "),ft=n("code"),Er=r("tensorboard"),Tr=r(". Should be initialized at the start of your script."),Ar=i(),U=n("div"),u(de.$$.fragment),jr=i(),pe=n("p"),xr=r("Closes "),gt=n("code"),Cr=r("TensorBoard"),Dr=r(" writer"),Lr=i(),H=n("div"),u(me.$$.fragment),Pr=i(),ue=n("p"),Or=r("Logs "),_t=n("code"),Ir=r("values"),qr=r(" to the current run."),Br=i(),F=n("div"),u(he.$$.fragment),Sr=i(),fe=n("p"),zr=r("Logs "),vt=n("code"),Nr=r("values"),Mr=r(" as hyperparameters for the run. Should be run at the beginning of your experiment."),sa=i(),k=n("div"),u(ge.$$.fragment),Vr=i(),B=n("p"),Wr=r("A "),yt=n("code"),Gr=r("Tracker"),Rr=r(" class that supports "),bt=n("code"),Ur=r("wandb"),Hr=r(". Should be initialized at the start of your script."),Fr=i(),J=n("div"),u(_e.$$.fragment),Jr=i(),ve=n("p"),Kr=r("Closes "),kt=n("code"),Qr=r("wandb"),Xr=r(" writer"),Yr=i(),K=n("div"),u(ye.$$.fragment),Zr=i(),be=n("p"),eo=r("Logs "),$t=n("code"),to=r("values"),ao=r(" to the current run."),ro=i(),Q=n("div"),u(ke.$$.fragment),oo=i(),$e=n("p"),no=r("Logs "),wt=n("code"),so=r("values"),lo=r(" as hyperparameters for the run. Should be run at the beginning of your experiment."),la=i(),y=n("div"),u(we.$$.fragment),co=i(),S=n("p"),io=r("A "),Et=n("code"),po=r("Tracker"),mo=r(" class that supports "),Tt=n("code"),uo=r("comet_ml"),ho=r(". Should be initialized at the start of your script."),fo=i(),At=n("p"),go=r("API keys must be stored in a Comet config file."),_o=i(),X=n("div"),u(Ee.$$.fragment),vo=i(),Te=n("p"),yo=r("Closes "),jt=n("code"),bo=r("comet-ml"),ko=r(" writer"),$o=i(),Y=n("div"),u(Ae.$$.fragment),wo=i(),je=n("p"),Eo=r("Logs "),xt=n("code"),To=r("values"),Ao=r(" to the current run."),jo=i(),Z=n("div"),u(xe.$$.fragment),xo=i(),Ce=n("p"),Co=r("Logs "),Ct=n("code"),Do=r("values"),Lo=r(" as hyperparameters for the run. Should be run at the beginning of your experiment."),ca=i(),T=n("p"),Po=r("To use any of them, pass in the selected type(s) to the "),Dt=n("code"),Oo=r("log_with"),Io=r(" parameter in "),Lt=n("code"),qo=r("Accelerate"),Bo=r(":"),ia=i(),u(De.$$.fragment),da=i(),ee=n("p"),So=r("At the start of your experiment "),Ke=n("a"),zo=r("init_trackers()"),No=r(" should be used to setup your project, and potentially add any experiment hyperparameters to be logged:"),pa=i(),u(Le.$$.fragment),ma=i(),A=n("p"),Mo=r("When you are ready to log any data, "),Qe=n("a"),Vo=r("log()"),Wo=r(` should be used.
A `),Pt=n("code"),Go=r("step"),Ro=r(" can also be passed in to correlate the data with a particular step in the training loop."),ua=i(),u(Pe.$$.fragment),ha=i(),te=n("p"),Uo=r("Once you\u2019ve finished training, make sure to run "),Xe=n("a"),Ho=r("end_training()"),Fo=r(" so that all the trackers can run their finish functionalities if they have any."),fa=i(),u(Oe.$$.fragment),ga=i(),Ye=n("p"),Jo=r("A full example is below:"),_a=i(),u(Ie.$$.fragment),va=i(),z=n("h2"),ae=n("a"),Ot=n("span"),u(qe.$$.fragment),Ko=i(),It=n("span"),Qo=r("Implementing Custom Trackers"),ya=i(),j=n("p"),Xo=r("To implement a new tracker to be used in "),qt=n("code"),Yo=r("Accelerator"),Zo=r(", a new one can be made through implementing the "),Bt=n("code"),en=r("~GeneralTracker"),tn=r(` class.
Every tracker must implement three functions:`),ba=i(),x=n("ul"),Be=n("li"),St=n("code"),an=r("__init__"),rn=r(": "),Se=n("ul"),ze=n("li"),on=r("Should store a "),zt=n("code"),nn=r("run_name"),sn=r(" and initialize the tracker API of the integrated library."),ln=i(),Ne=n("li"),cn=r("If a tracker stores their data locally (such as TensorBoard), a "),Nt=n("code"),dn=r("logging_dir"),pn=r(" parameter can be added."),mn=i(),Me=n("li"),Mt=n("code"),un=r("store_init_configuration"),hn=r(": "),Vt=n("ul"),Ve=n("li"),fn=r("Should take in a "),Wt=n("code"),gn=r("values"),_n=r(" dictionary and store them as a one-time experiment configuration"),vn=i(),We=n("li"),Gt=n("code"),yn=r("log"),bn=r(": "),Rt=n("ul"),N=n("li"),kn=r("Should take in a "),Ut=n("code"),$n=r("values"),wn=r(" dictionary and a "),Ht=n("code"),En=r("step"),Tn=r(", and should log them to the run"),ka=i(),Ze=n("p"),An=r("A brief example can be seen below with an integration with Weights and Biases, containing only the relevent information:"),$a=i(),u(Ge.$$.fragment),wa=i(),$=n("p"),jn=r("When you are ready to build your "),Ft=n("code"),xn=r("Accelerator"),Cn=r(" object, pass in an "),Jt=n("strong"),Dn=r("instance"),Ln=r(" of your tracker to "),Kt=n("code"),Pn=r("log_with"),On=r(` to have it automatically
be used with the API:`),Ea=i(),u(Re.$$.fragment),Ta=i(),re=n("p"),In=r("These also can be mixed with existing trackers, including with "),Qt=n("code"),qn=r('"all"'),Bn=r(":"),Aa=i(),u(Ue.$$.fragment),ja=i(),M=n("h2"),oe=n("a"),Xt=n("span"),u(He.$$.fragment),Sn=i(),Yt=n("span"),zn=r("When a wrapper cannot work"),xa=i(),C=n("p"),Nn=r("If a library has an API that does not follow a strict "),Zt=n("code"),Mn=r(".log"),Vn=r(" with an overall dictionary such as Neptune.AI, logging can be done manually under an "),ea=n("code"),Wn=r("if accelerator.is_main_process"),Gn=r(" statement:"),Ca=i(),u(Fe.$$.fragment),this.h()},l(e){const c=Xs('[data-svelte="svelte-1phssyn"]',document.head);P=s(c,"META",{name:!0,content:!0}),c.forEach(a),ta=d(e),O=s(e,"H1",{class:!0});var La=l(O);W=s(La,"A",{id:!0,class:!0,href:!0});var Hn=l(W);it=s(Hn,"SPAN",{});var Fn=l(it);h(se.$$.fragment,Fn),Fn.forEach(a),Hn.forEach(a),pr=d(La),dt=s(La,"SPAN",{});var Jn=l(dt);mr=o(Jn,"Tracking"),Jn.forEach(a),La.forEach(a),aa=d(e),le=s(e,"P",{});var Rn=l(le);ur=o(Rn,`There are a large number of experiment tracking API\u2019s available, however getting them all to work with in a multi-processing environment can oftentimes be complex.
Accelerate provides a general tracking API that can be used to log useful items during your script through `),Je=s(Rn,"A",{href:!0});var Kn=l(Je);hr=o(Kn,"log()"),Kn.forEach(a),Rn.forEach(a),ra=d(e),I=s(e,"H2",{class:!0});var Pa=l(I);G=s(Pa,"A",{id:!0,class:!0,href:!0});var Qn=l(G);pt=s(Qn,"SPAN",{});var Xn=l(pt);h(ce.$$.fragment,Xn),Xn.forEach(a),Qn.forEach(a),fr=d(Pa),mt=s(Pa,"SPAN",{});var Yn=l(mt);gr=o(Yn,"Integrated Trackers"),Yn.forEach(a),Pa.forEach(a),oa=d(e),R=s(e,"P",{});var Oa=l(R);_r=o(Oa,"Currently "),ut=s(Oa,"CODE",{});var Zn=l(ut);vr=o(Zn,"Accelerate"),Zn.forEach(a),yr=o(Oa," supports three trackers out-of-the-box:"),Oa.forEach(a),na=d(e),b=s(e,"DIV",{class:!0});var D=l(b);h(ie.$$.fragment,D),br=d(D),q=s(D,"P",{});var et=l(q);kr=o(et,"A "),ht=s(et,"CODE",{});var es=l(ht);$r=o(es,"Tracker"),es.forEach(a),wr=o(et," class that supports "),ft=s(et,"CODE",{});var ts=l(ft);Er=o(ts,"tensorboard"),ts.forEach(a),Tr=o(et,". Should be initialized at the start of your script."),et.forEach(a),Ar=d(D),U=s(D,"DIV",{class:!0});var Ia=l(U);h(de.$$.fragment,Ia),jr=d(Ia),pe=s(Ia,"P",{});var qa=l(pe);xr=o(qa,"Closes "),gt=s(qa,"CODE",{});var as=l(gt);Cr=o(as,"TensorBoard"),as.forEach(a),Dr=o(qa," writer"),qa.forEach(a),Ia.forEach(a),Lr=d(D),H=s(D,"DIV",{class:!0});var Ba=l(H);h(me.$$.fragment,Ba),Pr=d(Ba),ue=s(Ba,"P",{});var Sa=l(ue);Or=o(Sa,"Logs "),_t=s(Sa,"CODE",{});var rs=l(_t);Ir=o(rs,"values"),rs.forEach(a),qr=o(Sa," to the current run."),Sa.forEach(a),Ba.forEach(a),Br=d(D),F=s(D,"DIV",{class:!0});var za=l(F);h(he.$$.fragment,za),Sr=d(za),fe=s(za,"P",{});var Na=l(fe);zr=o(Na,"Logs "),vt=s(Na,"CODE",{});var os=l(vt);Nr=o(os,"values"),os.forEach(a),Mr=o(Na," as hyperparameters for the run. Should be run at the beginning of your experiment."),Na.forEach(a),za.forEach(a),D.forEach(a),sa=d(e),k=s(e,"DIV",{class:!0});var L=l(k);h(ge.$$.fragment,L),Vr=d(L),B=s(L,"P",{});var tt=l(B);Wr=o(tt,"A "),yt=s(tt,"CODE",{});var ns=l(yt);Gr=o(ns,"Tracker"),ns.forEach(a),Rr=o(tt," class that supports "),bt=s(tt,"CODE",{});var ss=l(bt);Ur=o(ss,"wandb"),ss.forEach(a),Hr=o(tt,". Should be initialized at the start of your script."),tt.forEach(a),Fr=d(L),J=s(L,"DIV",{class:!0});var Ma=l(J);h(_e.$$.fragment,Ma),Jr=d(Ma),ve=s(Ma,"P",{});var Va=l(ve);Kr=o(Va,"Closes "),kt=s(Va,"CODE",{});var ls=l(kt);Qr=o(ls,"wandb"),ls.forEach(a),Xr=o(Va," writer"),Va.forEach(a),Ma.forEach(a),Yr=d(L),K=s(L,"DIV",{class:!0});var Wa=l(K);h(ye.$$.fragment,Wa),Zr=d(Wa),be=s(Wa,"P",{});var Ga=l(be);eo=o(Ga,"Logs "),$t=s(Ga,"CODE",{});var cs=l($t);to=o(cs,"values"),cs.forEach(a),ao=o(Ga," to the current run."),Ga.forEach(a),Wa.forEach(a),ro=d(L),Q=s(L,"DIV",{class:!0});var Ra=l(Q);h(ke.$$.fragment,Ra),oo=d(Ra),$e=s(Ra,"P",{});var Ua=l($e);no=o(Ua,"Logs "),wt=s(Ua,"CODE",{});var is=l(wt);so=o(is,"values"),is.forEach(a),lo=o(Ua," as hyperparameters for the run. Should be run at the beginning of your experiment."),Ua.forEach(a),Ra.forEach(a),L.forEach(a),la=d(e),y=s(e,"DIV",{class:!0});var w=l(y);h(we.$$.fragment,w),co=d(w),S=s(w,"P",{});var at=l(S);io=o(at,"A "),Et=s(at,"CODE",{});var ds=l(Et);po=o(ds,"Tracker"),ds.forEach(a),mo=o(at," class that supports "),Tt=s(at,"CODE",{});var ps=l(Tt);uo=o(ps,"comet_ml"),ps.forEach(a),ho=o(at,". Should be initialized at the start of your script."),at.forEach(a),fo=d(w),At=s(w,"P",{});var ms=l(At);go=o(ms,"API keys must be stored in a Comet config file."),ms.forEach(a),_o=d(w),X=s(w,"DIV",{class:!0});var Ha=l(X);h(Ee.$$.fragment,Ha),vo=d(Ha),Te=s(Ha,"P",{});var Fa=l(Te);yo=o(Fa,"Closes "),jt=s(Fa,"CODE",{});var us=l(jt);bo=o(us,"comet-ml"),us.forEach(a),ko=o(Fa," writer"),Fa.forEach(a),Ha.forEach(a),$o=d(w),Y=s(w,"DIV",{class:!0});var Ja=l(Y);h(Ae.$$.fragment,Ja),wo=d(Ja),je=s(Ja,"P",{});var Ka=l(je);Eo=o(Ka,"Logs "),xt=s(Ka,"CODE",{});var hs=l(xt);To=o(hs,"values"),hs.forEach(a),Ao=o(Ka," to the current run."),Ka.forEach(a),Ja.forEach(a),jo=d(w),Z=s(w,"DIV",{class:!0});var Qa=l(Z);h(xe.$$.fragment,Qa),xo=d(Qa),Ce=s(Qa,"P",{});var Xa=l(Ce);Co=o(Xa,"Logs "),Ct=s(Xa,"CODE",{});var fs=l(Ct);Do=o(fs,"values"),fs.forEach(a),Lo=o(Xa," as hyperparameters for the run. Should be run at the beginning of your experiment."),Xa.forEach(a),Qa.forEach(a),w.forEach(a),ca=d(e),T=s(e,"P",{});var rt=l(T);Po=o(rt,"To use any of them, pass in the selected type(s) to the "),Dt=s(rt,"CODE",{});var gs=l(Dt);Oo=o(gs,"log_with"),gs.forEach(a),Io=o(rt," parameter in "),Lt=s(rt,"CODE",{});var _s=l(Lt);qo=o(_s,"Accelerate"),_s.forEach(a),Bo=o(rt,":"),rt.forEach(a),ia=d(e),h(De.$$.fragment,e),da=d(e),ee=s(e,"P",{});var Ya=l(ee);So=o(Ya,"At the start of your experiment "),Ke=s(Ya,"A",{href:!0});var vs=l(Ke);zo=o(vs,"init_trackers()"),vs.forEach(a),No=o(Ya," should be used to setup your project, and potentially add any experiment hyperparameters to be logged:"),Ya.forEach(a),pa=d(e),h(Le.$$.fragment,e),ma=d(e),A=s(e,"P",{});var ot=l(A);Mo=o(ot,"When you are ready to log any data, "),Qe=s(ot,"A",{href:!0});var ys=l(Qe);Vo=o(ys,"log()"),ys.forEach(a),Wo=o(ot,` should be used.
A `),Pt=s(ot,"CODE",{});var bs=l(Pt);Go=o(bs,"step"),bs.forEach(a),Ro=o(ot," can also be passed in to correlate the data with a particular step in the training loop."),ot.forEach(a),ua=d(e),h(Pe.$$.fragment,e),ha=d(e),te=s(e,"P",{});var Za=l(te);Uo=o(Za,"Once you\u2019ve finished training, make sure to run "),Xe=s(Za,"A",{href:!0});var ks=l(Xe);Ho=o(ks,"end_training()"),ks.forEach(a),Fo=o(Za," so that all the trackers can run their finish functionalities if they have any."),Za.forEach(a),fa=d(e),h(Oe.$$.fragment,e),ga=d(e),Ye=s(e,"P",{});var $s=l(Ye);Jo=o($s,"A full example is below:"),$s.forEach(a),_a=d(e),h(Ie.$$.fragment,e),va=d(e),z=s(e,"H2",{class:!0});var er=l(z);ae=s(er,"A",{id:!0,class:!0,href:!0});var ws=l(ae);Ot=s(ws,"SPAN",{});var Es=l(Ot);h(qe.$$.fragment,Es),Es.forEach(a),ws.forEach(a),Ko=d(er),It=s(er,"SPAN",{});var Ts=l(It);Qo=o(Ts,"Implementing Custom Trackers"),Ts.forEach(a),er.forEach(a),ya=d(e),j=s(e,"P",{});var nt=l(j);Xo=o(nt,"To implement a new tracker to be used in "),qt=s(nt,"CODE",{});var As=l(qt);Yo=o(As,"Accelerator"),As.forEach(a),Zo=o(nt,", a new one can be made through implementing the "),Bt=s(nt,"CODE",{});var js=l(Bt);en=o(js,"~GeneralTracker"),js.forEach(a),tn=o(nt,` class.
Every tracker must implement three functions:`),nt.forEach(a),ba=d(e),x=s(e,"UL",{});var st=l(x);Be=s(st,"LI",{});var tr=l(Be);St=s(tr,"CODE",{});var xs=l(St);an=o(xs,"__init__"),xs.forEach(a),rn=o(tr,": "),Se=s(tr,"UL",{});var ar=l(Se);ze=s(ar,"LI",{});var rr=l(ze);on=o(rr,"Should store a "),zt=s(rr,"CODE",{});var Cs=l(zt);nn=o(Cs,"run_name"),Cs.forEach(a),sn=o(rr," and initialize the tracker API of the integrated library."),rr.forEach(a),ln=d(ar),Ne=s(ar,"LI",{});var or=l(Ne);cn=o(or,"If a tracker stores their data locally (such as TensorBoard), a "),Nt=s(or,"CODE",{});var Ds=l(Nt);dn=o(Ds,"logging_dir"),Ds.forEach(a),pn=o(or," parameter can be added."),or.forEach(a),ar.forEach(a),tr.forEach(a),mn=d(st),Me=s(st,"LI",{});var nr=l(Me);Mt=s(nr,"CODE",{});var Ls=l(Mt);un=o(Ls,"store_init_configuration"),Ls.forEach(a),hn=o(nr,": "),Vt=s(nr,"UL",{});var Ps=l(Vt);Ve=s(Ps,"LI",{});var sr=l(Ve);fn=o(sr,"Should take in a "),Wt=s(sr,"CODE",{});var Os=l(Wt);gn=o(Os,"values"),Os.forEach(a),_n=o(sr," dictionary and store them as a one-time experiment configuration"),sr.forEach(a),Ps.forEach(a),nr.forEach(a),vn=d(st),We=s(st,"LI",{});var lr=l(We);Gt=s(lr,"CODE",{});var Is=l(Gt);yn=o(Is,"log"),Is.forEach(a),bn=o(lr,": "),Rt=s(lr,"UL",{});var qs=l(Rt);N=s(qs,"LI",{});var lt=l(N);kn=o(lt,"Should take in a "),Ut=s(lt,"CODE",{});var Bs=l(Ut);$n=o(Bs,"values"),Bs.forEach(a),wn=o(lt," dictionary and a "),Ht=s(lt,"CODE",{});var Ss=l(Ht);En=o(Ss,"step"),Ss.forEach(a),Tn=o(lt,", and should log them to the run"),lt.forEach(a),qs.forEach(a),lr.forEach(a),st.forEach(a),ka=d(e),Ze=s(e,"P",{});var zs=l(Ze);An=o(zs,"A brief example can be seen below with an integration with Weights and Biases, containing only the relevent information:"),zs.forEach(a),$a=d(e),h(Ge.$$.fragment,e),wa=d(e),$=s(e,"P",{});var ne=l($);jn=o(ne,"When you are ready to build your "),Ft=s(ne,"CODE",{});var Ns=l(Ft);xn=o(Ns,"Accelerator"),Ns.forEach(a),Cn=o(ne," object, pass in an "),Jt=s(ne,"STRONG",{});var Ms=l(Jt);Dn=o(Ms,"instance"),Ms.forEach(a),Ln=o(ne," of your tracker to "),Kt=s(ne,"CODE",{});var Vs=l(Kt);Pn=o(Vs,"log_with"),Vs.forEach(a),On=o(ne,` to have it automatically
be used with the API:`),ne.forEach(a),Ea=d(e),h(Re.$$.fragment,e),Ta=d(e),re=s(e,"P",{});var cr=l(re);In=o(cr,"These also can be mixed with existing trackers, including with "),Qt=s(cr,"CODE",{});var Ws=l(Qt);qn=o(Ws,'"all"'),Ws.forEach(a),Bn=o(cr,":"),cr.forEach(a),Aa=d(e),h(Ue.$$.fragment,e),ja=d(e),M=s(e,"H2",{class:!0});var ir=l(M);oe=s(ir,"A",{id:!0,class:!0,href:!0});var Gs=l(oe);Xt=s(Gs,"SPAN",{});var Rs=l(Xt);h(He.$$.fragment,Rs),Rs.forEach(a),Gs.forEach(a),Sn=d(ir),Yt=s(ir,"SPAN",{});var Us=l(Yt);zn=o(Us,"When a wrapper cannot work"),Us.forEach(a),ir.forEach(a),xa=d(e),C=s(e,"P",{});var ct=l(C);Nn=o(ct,"If a library has an API that does not follow a strict "),Zt=s(ct,"CODE",{});var Hs=l(Zt);Mn=o(Hs,".log"),Hs.forEach(a),Vn=o(ct," with an overall dictionary such as Neptune.AI, logging can be done manually under an "),ea=s(ct,"CODE",{});var Fs=l(ea);Wn=o(Fs,"if accelerator.is_main_process"),Fs.forEach(a),Gn=o(ct," statement:"),ct.forEach(a),Ca=d(e),h(Fe.$$.fragment,e),this.h()},h(){m(P,"name","hf:doc:metadata"),m(P,"content",JSON.stringify(tl)),m(W,"id","tracking"),m(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(W,"href","#tracking"),m(O,"class","relative group"),m(Je,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator.log"),m(G,"id","accelerate.tracking.TensorBoardTracker"),m(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(G,"href","#accelerate.tracking.TensorBoardTracker"),m(I,"class","relative group"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ke,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator.init_trackers"),m(Qe,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator.log"),m(Xe,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator.end_training"),m(ae,"id","implementing-custom-trackers"),m(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ae,"href","#implementing-custom-trackers"),m(z,"class","relative group"),m(oe,"id","when-a-wrapper-cannot-work"),m(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(oe,"href","#when-a-wrapper-cannot-work"),m(M,"class","relative group")},m(e,c){t(document.head,P),p(e,ta,c),p(e,O,c),t(O,W),t(W,it),f(se,it,null),t(O,pr),t(O,dt),t(dt,mr),p(e,aa,c),p(e,le,c),t(le,ur),t(le,Je),t(Je,hr),p(e,ra,c),p(e,I,c),t(I,G),t(G,pt),f(ce,pt,null),t(I,fr),t(I,mt),t(mt,gr),p(e,oa,c),p(e,R,c),t(R,_r),t(R,ut),t(ut,vr),t(R,yr),p(e,na,c),p(e,b,c),f(ie,b,null),t(b,br),t(b,q),t(q,kr),t(q,ht),t(ht,$r),t(q,wr),t(q,ft),t(ft,Er),t(q,Tr),t(b,Ar),t(b,U),f(de,U,null),t(U,jr),t(U,pe),t(pe,xr),t(pe,gt),t(gt,Cr),t(pe,Dr),t(b,Lr),t(b,H),f(me,H,null),t(H,Pr),t(H,ue),t(ue,Or),t(ue,_t),t(_t,Ir),t(ue,qr),t(b,Br),t(b,F),f(he,F,null),t(F,Sr),t(F,fe),t(fe,zr),t(fe,vt),t(vt,Nr),t(fe,Mr),p(e,sa,c),p(e,k,c),f(ge,k,null),t(k,Vr),t(k,B),t(B,Wr),t(B,yt),t(yt,Gr),t(B,Rr),t(B,bt),t(bt,Ur),t(B,Hr),t(k,Fr),t(k,J),f(_e,J,null),t(J,Jr),t(J,ve),t(ve,Kr),t(ve,kt),t(kt,Qr),t(ve,Xr),t(k,Yr),t(k,K),f(ye,K,null),t(K,Zr),t(K,be),t(be,eo),t(be,$t),t($t,to),t(be,ao),t(k,ro),t(k,Q),f(ke,Q,null),t(Q,oo),t(Q,$e),t($e,no),t($e,wt),t(wt,so),t($e,lo),p(e,la,c),p(e,y,c),f(we,y,null),t(y,co),t(y,S),t(S,io),t(S,Et),t(Et,po),t(S,mo),t(S,Tt),t(Tt,uo),t(S,ho),t(y,fo),t(y,At),t(At,go),t(y,_o),t(y,X),f(Ee,X,null),t(X,vo),t(X,Te),t(Te,yo),t(Te,jt),t(jt,bo),t(Te,ko),t(y,$o),t(y,Y),f(Ae,Y,null),t(Y,wo),t(Y,je),t(je,Eo),t(je,xt),t(xt,To),t(je,Ao),t(y,jo),t(y,Z),f(xe,Z,null),t(Z,xo),t(Z,Ce),t(Ce,Co),t(Ce,Ct),t(Ct,Do),t(Ce,Lo),p(e,ca,c),p(e,T,c),t(T,Po),t(T,Dt),t(Dt,Oo),t(T,Io),t(T,Lt),t(Lt,qo),t(T,Bo),p(e,ia,c),f(De,e,c),p(e,da,c),p(e,ee,c),t(ee,So),t(ee,Ke),t(Ke,zo),t(ee,No),p(e,pa,c),f(Le,e,c),p(e,ma,c),p(e,A,c),t(A,Mo),t(A,Qe),t(Qe,Vo),t(A,Wo),t(A,Pt),t(Pt,Go),t(A,Ro),p(e,ua,c),f(Pe,e,c),p(e,ha,c),p(e,te,c),t(te,Uo),t(te,Xe),t(Xe,Ho),t(te,Fo),p(e,fa,c),f(Oe,e,c),p(e,ga,c),p(e,Ye,c),t(Ye,Jo),p(e,_a,c),f(Ie,e,c),p(e,va,c),p(e,z,c),t(z,ae),t(ae,Ot),f(qe,Ot,null),t(z,Ko),t(z,It),t(It,Qo),p(e,ya,c),p(e,j,c),t(j,Xo),t(j,qt),t(qt,Yo),t(j,Zo),t(j,Bt),t(Bt,en),t(j,tn),p(e,ba,c),p(e,x,c),t(x,Be),t(Be,St),t(St,an),t(Be,rn),t(Be,Se),t(Se,ze),t(ze,on),t(ze,zt),t(zt,nn),t(ze,sn),t(Se,ln),t(Se,Ne),t(Ne,cn),t(Ne,Nt),t(Nt,dn),t(Ne,pn),t(x,mn),t(x,Me),t(Me,Mt),t(Mt,un),t(Me,hn),t(Me,Vt),t(Vt,Ve),t(Ve,fn),t(Ve,Wt),t(Wt,gn),t(Ve,_n),t(x,vn),t(x,We),t(We,Gt),t(Gt,yn),t(We,bn),t(We,Rt),t(Rt,N),t(N,kn),t(N,Ut),t(Ut,$n),t(N,wn),t(N,Ht),t(Ht,En),t(N,Tn),p(e,ka,c),p(e,Ze,c),t(Ze,An),p(e,$a,c),f(Ge,e,c),p(e,wa,c),p(e,$,c),t($,jn),t($,Ft),t(Ft,xn),t($,Cn),t($,Jt),t(Jt,Dn),t($,Ln),t($,Kt),t(Kt,Pn),t($,On),p(e,Ea,c),f(Re,e,c),p(e,Ta,c),p(e,re,c),t(re,In),t(re,Qt),t(Qt,qn),t(re,Bn),p(e,Aa,c),f(Ue,e,c),p(e,ja,c),p(e,M,c),t(M,oe),t(oe,Xt),f(He,Xt,null),t(M,Sn),t(M,Yt),t(Yt,zn),p(e,xa,c),p(e,C,c),t(C,Nn),t(C,Zt),t(Zt,Mn),t(C,Vn),t(C,ea),t(ea,Wn),t(C,Gn),p(e,Ca,c),f(Fe,e,c),Da=!0},p:Ys,i(e){Da||(g(se.$$.fragment,e),g(ce.$$.fragment,e),g(ie.$$.fragment,e),g(de.$$.fragment,e),g(me.$$.fragment,e),g(he.$$.fragment,e),g(ge.$$.fragment,e),g(_e.$$.fragment,e),g(ye.$$.fragment,e),g(ke.$$.fragment,e),g(we.$$.fragment,e),g(Ee.$$.fragment,e),g(Ae.$$.fragment,e),g(xe.$$.fragment,e),g(De.$$.fragment,e),g(Le.$$.fragment,e),g(Pe.$$.fragment,e),g(Oe.$$.fragment,e),g(Ie.$$.fragment,e),g(qe.$$.fragment,e),g(Ge.$$.fragment,e),g(Re.$$.fragment,e),g(Ue.$$.fragment,e),g(He.$$.fragment,e),g(Fe.$$.fragment,e),Da=!0)},o(e){_(se.$$.fragment,e),_(ce.$$.fragment,e),_(ie.$$.fragment,e),_(de.$$.fragment,e),_(me.$$.fragment,e),_(he.$$.fragment,e),_(ge.$$.fragment,e),_(_e.$$.fragment,e),_(ye.$$.fragment,e),_(ke.$$.fragment,e),_(we.$$.fragment,e),_(Ee.$$.fragment,e),_(Ae.$$.fragment,e),_(xe.$$.fragment,e),_(De.$$.fragment,e),_(Le.$$.fragment,e),_(Pe.$$.fragment,e),_(Oe.$$.fragment,e),_(Ie.$$.fragment,e),_(qe.$$.fragment,e),_(Ge.$$.fragment,e),_(Re.$$.fragment,e),_(Ue.$$.fragment,e),_(He.$$.fragment,e),_(Fe.$$.fragment,e),Da=!1},d(e){a(P),e&&a(ta),e&&a(O),v(se),e&&a(aa),e&&a(le),e&&a(ra),e&&a(I),v(ce),e&&a(oa),e&&a(R),e&&a(na),e&&a(b),v(ie),v(de),v(me),v(he),e&&a(sa),e&&a(k),v(ge),v(_e),v(ye),v(ke),e&&a(la),e&&a(y),v(we),v(Ee),v(Ae),v(xe),e&&a(ca),e&&a(T),e&&a(ia),v(De,e),e&&a(da),e&&a(ee),e&&a(pa),v(Le,e),e&&a(ma),e&&a(A),e&&a(ua),v(Pe,e),e&&a(ha),e&&a(te),e&&a(fa),v(Oe,e),e&&a(ga),e&&a(Ye),e&&a(_a),v(Ie,e),e&&a(va),e&&a(z),v(qe),e&&a(ya),e&&a(j),e&&a(ba),e&&a(x),e&&a(ka),e&&a(Ze),e&&a($a),v(Ge,e),e&&a(wa),e&&a($),e&&a(Ea),v(Re,e),e&&a(Ta),e&&a(re),e&&a(Aa),v(Ue,e),e&&a(ja),e&&a(M),v(He),e&&a(xa),e&&a(C),e&&a(Ca),v(Fe,e)}}}const tl={local:"tracking",sections:[{local:"accelerate.tracking.TensorBoardTracker",title:"Integrated Trackers"},{local:"implementing-custom-trackers",title:"Implementing Custom Trackers"},{local:"when-a-wrapper-cannot-work",title:"When a wrapper cannot work"}],title:"Tracking"};function al(Un){return Zs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ll extends Js{constructor(P){super();Ks(this,P,al,el,Qs,{})}}export{ll as default,tl as metadata};
