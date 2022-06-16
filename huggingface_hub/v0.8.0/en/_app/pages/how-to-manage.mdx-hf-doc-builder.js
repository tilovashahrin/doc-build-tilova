import{S as $l,i as wl,s as bl,e as a,k as h,w as u,t as l,M as El,c as r,d as o,m as c,a as s,x as g,h as i,b as f,G as t,g as n,y as m,L as kl,q as y,o as _,B as d,v as jl}from"../chunks/vendor-hf-doc-builder.js";import{I as B}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as v}from"../chunks/CodeBlock-hf-doc-builder.js";function Al(ps){let C,Yt,S,M,st,ie,ra,lt,sa,Jt,Te,la,zt,E,it,ia,pa,pt,na,ha,pe,ca,Fe,fa,ua,Kt,Le,ga,Qt,U,ne,nt,ma,ya,he,_a,x,ce,da,ht,va,$a,wa,fe,ba,Ge,ct,Ea,ka,Vt,H,W,ft,ue,ja,ut,Aa,Xt,$,Pa,Ie,Ra,qa,gt,Ca,Sa,mt,xa,Ha,yt,Na,Da,Zt,ge,eo,k,Oa,Be,Ta,Fa,_t,La,Ga,to,me,oo,Y,Ia,dt,Ba,Ma,ao,ye,ro,J,Ua,Me,Wa,Ya,so,N,z,vt,_e,Ja,$t,za,lo,K,Ka,Ue,Qa,Va,io,Q,Xa,wt,Za,er,po,de,no,V,tr,bt,or,ar,ho,ve,co,D,X,Et,$e,rr,kt,sr,fo,We,lr,uo,we,go,O,Z,jt,be,ir,At,pr,mo,w,nr,Ye,hr,cr,Je,fr,ur,Ee,gr,mr,ze,yr,_r,yo,T,ee,Pt,ke,dr,Rt,vr,_o,te,$r,Ke,wr,br,vo,je,$o,F,oe,qt,Ae,Er,Ct,kr,wo,j,jr,St,Ar,Pr,xt,Rr,qr,bo,Pe,Eo,L,Ht,Cr,Sr,Nt,xr,Hr,ko,Re,jo,A,Nr,Dt,Dr,Or,Qe,Tr,Fr,Ao,qe,Po,P,Lr,Ot,Gr,Ir,Tt,Br,Mr,Ro,Ce,qo,G,ae,Ft,Se,Ur,Lt,Wr,Co,b,Yr,Ve,Jr,zr,Gt,Kr,Qr,It,Vr,Xr,So,xe,xo,I,re,Bt,He,Zr,Mt,es,Ho,Ne,Xe,ts,os,No,De,Do,se,as,Ut,rs,ss,Oo,Oe,To;return ie=new B({}),he=new v({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),fe=new v({props:{code:`from huggingface_hub import notebook_login
notebook_login()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login
<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_login()`}}),ue=new B({}),ge=new v({props:{code:`from huggingface_hub import create_repo
create_repo("lysandre/test-model")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> create_repo
<span class="hljs-meta">&gt;&gt;&gt; </span>create_repo(<span class="hljs-string">&quot;lysandre/test-model&quot;</span>)
<span class="hljs-string">&#x27;https://huggingface.co/lysandre/test-model&#x27;</span>`}}),me=new v({props:{code:`from huggingface_hub import create_repo
create_repo("lysandre/test-dataset", repo_type="dataset")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> create_repo
<span class="hljs-meta">&gt;&gt;&gt; </span>create_repo(<span class="hljs-string">&quot;lysandre/test-dataset&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>)
<span class="hljs-string">&#x27;https://huggingface.co/lysandre/test-dataset&#x27;</span>`}}),ye=new v({props:{code:`from huggingface_hub import create_repo
create_repo("lysandre/test-private", private=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> create_repo
<span class="hljs-meta">&gt;&gt;&gt; </span>create_repo(<span class="hljs-string">&quot;lysandre/test-private&quot;</span>, private=<span class="hljs-literal">True</span>)`}}),_e=new B({}),de=new v({props:{code:"delete_repo(repo_id=name)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>delete_repo(repo_id=name)'}}),ve=new v({props:{code:'delete_repo(repo_id=REPO_NAME, repo_type="dataset")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>delete_repo(repo_id=REPO_NAME, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>)'}}),$e=new B({}),we=new v({props:{code:`from huggingface_hub import update_repo_visibility
update_repo_visibility(name=REPO_NAME, private=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> update_repo_visibility
<span class="hljs-meta">&gt;&gt;&gt; </span>update_repo_visibility(name=REPO_NAME, private=<span class="hljs-literal">True</span>)`}}),be=new B({}),ke=new B({}),je=new v({props:{code:`from huggingface_hub import Repository
repo = Repository(local_dir="<path>/<to>/<folder>")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository
<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;&lt;path&gt;/&lt;to&gt;/&lt;folder&gt;&quot;</span>)`}}),Ae=new B({}),Pe=new v({props:{code:`from huggingface_hub import Repository
repo = Repository(local_dir="w2v2", clone_from="facebook/wav2vec2-large-960h-lv60")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository
<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;w2v2&quot;</span>, clone_from=<span class="hljs-string">&quot;facebook/wav2vec2-large-960h-lv60&quot;</span>)`}}),Re=new v({props:{code:'repo = Repository(local_dir="huggingface-hub", clone_from="https://huggingface.co/facebook/wav2vec2-large-960h-lv60")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;huggingface-hub&quot;</span>, clone_from=<span class="hljs-string">&quot;https://huggingface.co/facebook/wav2vec2-large-960h-lv60&quot;</span>)'}}),qe=new v({props:{code:`repo_url = create_repo(repo_id="repo_name")
repo = Repository(local_dir="repo_local_path", clone_from=repo_url)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>repo_url = create_repo(repo_id=<span class="hljs-string">&quot;repo_name&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;repo_local_path&quot;</span>, clone_from=repo_url)`}}),Ce=new v({props:{code:`repo = Repository(
  "my-dataset", 
  clone_from="<user>/<dataset_id>", 
  use_auth_token=True, 
  repo_type="dataset",
  git_user="MyName",
  git_email="me@cool.mail"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(
<span class="hljs-meta">... </span>  <span class="hljs-string">&quot;my-dataset&quot;</span>, 
<span class="hljs-meta">... </span>  clone_from=<span class="hljs-string">&quot;&lt;user&gt;/&lt;dataset_id&gt;&quot;</span>, 
<span class="hljs-meta">... </span>  use_auth_token=<span class="hljs-literal">True</span>, 
<span class="hljs-meta">... </span>  repo_type=<span class="hljs-string">&quot;dataset&quot;</span>,
<span class="hljs-meta">... </span>  git_user=<span class="hljs-string">&quot;MyName&quot;</span>,
<span class="hljs-meta">... </span>  git_email=<span class="hljs-string">&quot;me@cool.mail&quot;</span>
<span class="hljs-meta">... </span>)`}}),Se=new B({}),xe=new v({props:{code:`from huggingface_hub import Repository
repo = Repository(local_dir="huggingface-hub", clone_from="<user>/<dataset_id>", revision='branch1')
repo.git_checkout("branch2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository
<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;huggingface-hub&quot;</span>, clone_from=<span class="hljs-string">&quot;&lt;user&gt;/&lt;dataset_id&gt;&quot;</span>, revision=<span class="hljs-string">&#x27;branch1&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>repo.git_checkout(<span class="hljs-string">&quot;branch2&quot;</span>)`}}),He=new B({}),De=new v({props:{code:`from huggingface_hub import Repository
repo.git_pull()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository
<span class="hljs-meta">&gt;&gt;&gt; </span>repo.git_pull()`}}),Oe=new v({props:{code:"repo.git_pull(rebase=True)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>repo.git_pull(rebase=<span class="hljs-literal">True</span>)'}}),{c(){C=a("meta"),Yt=h(),S=a("h1"),M=a("a"),st=a("span"),u(ie.$$.fragment),ra=h(),lt=a("span"),sa=l("Create and manage a repository"),Jt=h(),Te=a("p"),la=l("A repository is a space for you to store your model or dataset files. This guide will show you how to:"),zt=h(),E=a("ul"),it=a("li"),ia=l("Create and delete a repository."),pa=h(),pt=a("li"),na=l("Adjust repository visibility."),ha=h(),pe=a("li"),ca=l("Use the "),Fe=a("a"),fa=l("Repository"),ua=l(" class for common Git operations like clone, branch, and pull."),Kt=h(),Le=a("p"),ga=l("If you want to create a repository on the Hub, you need to log in to your Hugging Face account:"),Qt=h(),U=a("ol"),ne=a("li"),nt=a("p"),ma=l("Log in to your Hugging Face account with the following command:"),ya=h(),u(he.$$.fragment),_a=h(),x=a("li"),ce=a("p"),da=l("Alternatively, if you prefer working from a Jupyter or Colaboratory notebook, login with "),ht=a("code"),va=l("notebook_login()"),$a=l(":"),wa=h(),u(fe.$$.fragment),ba=h(),Ge=a("p"),ct=a("code"),Ea=l("notebook_login()"),ka=l(" will launch a widget in your notebook from which you can enter your Hugging Face credentials."),Vt=h(),H=a("h2"),W=a("a"),ft=a("span"),u(ue.$$.fragment),ja=h(),ut=a("span"),Aa=l("Create a repository"),Xt=h(),$=a("p"),Pa=l("Create an empty repository with "),Ie=a("a"),Ra=l("create_repo()"),qa=l(" and give it a name with the "),gt=a("code"),Ca=l("repo_id"),Sa=l(" parameter. The "),mt=a("code"),xa=l("repo_id"),Ha=l(" is your namespace followed by the repository name: "),yt=a("code"),Na=l("{username_or_org}/{repo_name}"),Da=l("."),Zt=h(),u(ge.$$.fragment),eo=h(),k=a("p"),Oa=l("By default, "),Be=a("a"),Ta=l("create_repo()"),Fa=l(" creates a model repository. But you can use the "),_t=a("code"),La=l("repo_type"),Ga=l(" parameter to specify another repository type. For example, if you want to create a dataset repository:"),to=h(),u(me.$$.fragment),oo=h(),Y=a("p"),Ia=l("When you create a repository, you can set your repository visibility with the "),dt=a("code"),Ba=l("private"),Ma=l(" parameter. For example, if you want to create a private repository:"),ao=h(),u(ye.$$.fragment),ro=h(),J=a("p"),Ua=l("If you want to change the repository visibility at a later time, you can use the "),Me=a("a"),Wa=l("update_repo_visibility()"),Ya=l(" function."),so=h(),N=a("h2"),z=a("a"),vt=a("span"),u(_e.$$.fragment),Ja=h(),$t=a("span"),za=l("Delete a repository"),lo=h(),K=a("p"),Ka=l("Delete a repository with "),Ue=a("a"),Qa=l("delete_repo()"),Va=l(". Make sure you want to delete a repository because this is an irreversible process!"),io=h(),Q=a("p"),Xa=l("Specify the "),wt=a("code"),Za=l("repo_id"),er=l(" of the repository you want to delete:"),po=h(),u(de.$$.fragment),no=h(),V=a("p"),tr=l("You can also specify the repository type to delete by adding the "),bt=a("code"),or=l("repo_type"),ar=l(" parameter:"),ho=h(),u(ve.$$.fragment),co=h(),D=a("h2"),X=a("a"),Et=a("span"),u($e.$$.fragment),rr=h(),kt=a("span"),sr=l("Change repository visibility"),fo=h(),We=a("p"),lr=l("A repository can be public or private. A private repository is only visible to you or members of the organization in which the repository is located. Change a repository to private as shown in the following:"),uo=h(),u(we.$$.fragment),go=h(),O=a("h2"),Z=a("a"),jt=a("span"),u(be.$$.fragment),ir=h(),At=a("span"),pr=l("The Repository class"),mo=h(),w=a("p"),nr=l("The "),Ye=a("a"),hr=l("Repository"),cr=l(" class allows you to interact with files and repositories on the Hub with functions similar to Git commands. "),Je=a("a"),fr=l("Repository"),ur=l(" is a wrapper over Git and Git-LFS methods, so make sure you have Git-LFS installed (see "),Ee=a("a"),gr=l("here"),mr=l(" for installation instructions) and set up before you begin. With "),ze=a("a"),yr=l("Repository"),_r=l(", you can use the Git commands you already know and love."),yo=h(),T=a("h3"),ee=a("a"),Pt=a("span"),u(ke.$$.fragment),dr=h(),Rt=a("span"),vr=l("Use a local repository"),_o=h(),te=a("p"),$r=l("Instantiate a "),Ke=a("a"),wr=l("Repository"),br=l(" object with a path to a local repository:"),vo=h(),u(je.$$.fragment),$o=h(),F=a("h3"),oe=a("a"),qt=a("span"),u(Ae.$$.fragment),Er=h(),Ct=a("span"),kr=l("Clone"),wo=h(),j=a("p"),jr=l("The "),St=a("code"),Ar=l("clone_from"),Pr=l(" parameter clones a repository from a Hugging Face repository ID to a local directory specified by the "),xt=a("code"),Rr=l("local_dir"),qr=l(" argument:"),bo=h(),u(Pe.$$.fragment),Eo=h(),L=a("p"),Ht=a("code"),Cr=l("clone_from"),Sr=l(" can also clone a repository from a specified directory using a URL (if you are working offline, this parameter should be "),Nt=a("code"),xr=l("None"),Hr=l("):"),ko=h(),u(Re.$$.fragment),jo=h(),A=a("p"),Nr=l("You can combine the "),Dt=a("code"),Dr=l("clone_from"),Or=l(" parameter with "),Qe=a("a"),Tr=l("create_repo()"),Fr=l(" to create and clone a repository:"),Ao=h(),u(qe.$$.fragment),Po=h(),P=a("p"),Lr=l("You can also attribute a Git username and email to a cloned repository by specifying the "),Ot=a("code"),Gr=l("git_user"),Ir=l(" and "),Tt=a("code"),Br=l("git_email"),Mr=l(" parameters when you clone a repository. When users commit to that repository, Git will be aware of the commit author."),Ro=h(),u(Ce.$$.fragment),qo=h(),G=a("h3"),ae=a("a"),Ft=a("span"),u(Se.$$.fragment),Ur=h(),Lt=a("span"),Wr=l("Branch"),Co=h(),b=a("p"),Yr=l("Branches are important for collaboration and experimentation without impacting your current files and code. Switch between branches with "),Ve=a("a"),Jr=l("git_checkout()"),zr=l(". For example, if you want to switch from "),Gt=a("code"),Kr=l("branch1"),Qr=l(" to "),It=a("code"),Vr=l("branch2"),Xr=l(":"),So=h(),u(xe.$$.fragment),xo=h(),I=a("h3"),re=a("a"),Bt=a("span"),u(He.$$.fragment),Zr=h(),Mt=a("span"),es=l("Pull"),Ho=h(),Ne=a("p"),Xe=a("a"),ts=l("git_pull()"),os=l(" allows you to update a current local branch with changes from a remote repository:"),No=h(),u(De.$$.fragment),Do=h(),se=a("p"),as=l("Set "),Ut=a("code"),rs=l("rebase=True"),ss=l(" if you want your local commits to occur after your branch is updated with the new commits from the remote:"),Oo=h(),u(Oe.$$.fragment),this.h()},l(e){const p=El('[data-svelte="svelte-1phssyn"]',document.head);C=r(p,"META",{name:!0,content:!0}),p.forEach(o),Yt=c(e),S=r(e,"H1",{class:!0});var Fo=s(S);M=r(Fo,"A",{id:!0,class:!0,href:!0});var ns=s(M);st=r(ns,"SPAN",{});var hs=s(st);g(ie.$$.fragment,hs),hs.forEach(o),ns.forEach(o),ra=c(Fo),lt=r(Fo,"SPAN",{});var cs=s(lt);sa=i(cs,"Create and manage a repository"),cs.forEach(o),Fo.forEach(o),Jt=c(e),Te=r(e,"P",{});var fs=s(Te);la=i(fs,"A repository is a space for you to store your model or dataset files. This guide will show you how to:"),fs.forEach(o),zt=c(e),E=r(e,"UL",{});var Ze=s(E);it=r(Ze,"LI",{});var us=s(it);ia=i(us,"Create and delete a repository."),us.forEach(o),pa=c(Ze),pt=r(Ze,"LI",{});var gs=s(pt);na=i(gs,"Adjust repository visibility."),gs.forEach(o),ha=c(Ze),pe=r(Ze,"LI",{});var Lo=s(pe);ca=i(Lo,"Use the "),Fe=r(Lo,"A",{href:!0});var ms=s(Fe);fa=i(ms,"Repository"),ms.forEach(o),ua=i(Lo," class for common Git operations like clone, branch, and pull."),Lo.forEach(o),Ze.forEach(o),Kt=c(e),Le=r(e,"P",{});var ys=s(Le);ga=i(ys,"If you want to create a repository on the Hub, you need to log in to your Hugging Face account:"),ys.forEach(o),Qt=c(e),U=r(e,"OL",{});var Go=s(U);ne=r(Go,"LI",{});var Io=s(ne);nt=r(Io,"P",{});var _s=s(nt);ma=i(_s,"Log in to your Hugging Face account with the following command:"),_s.forEach(o),ya=c(Io),g(he.$$.fragment,Io),Io.forEach(o),_a=c(Go),x=r(Go,"LI",{});var et=s(x);ce=r(et,"P",{});var Bo=s(ce);da=i(Bo,"Alternatively, if you prefer working from a Jupyter or Colaboratory notebook, login with "),ht=r(Bo,"CODE",{});var ds=s(ht);va=i(ds,"notebook_login()"),ds.forEach(o),$a=i(Bo,":"),Bo.forEach(o),wa=c(et),g(fe.$$.fragment,et),ba=c(et),Ge=r(et,"P",{});var ls=s(Ge);ct=r(ls,"CODE",{});var vs=s(ct);Ea=i(vs,"notebook_login()"),vs.forEach(o),ka=i(ls," will launch a widget in your notebook from which you can enter your Hugging Face credentials."),ls.forEach(o),et.forEach(o),Go.forEach(o),Vt=c(e),H=r(e,"H2",{class:!0});var Mo=s(H);W=r(Mo,"A",{id:!0,class:!0,href:!0});var $s=s(W);ft=r($s,"SPAN",{});var ws=s(ft);g(ue.$$.fragment,ws),ws.forEach(o),$s.forEach(o),ja=c(Mo),ut=r(Mo,"SPAN",{});var bs=s(ut);Aa=i(bs,"Create a repository"),bs.forEach(o),Mo.forEach(o),Xt=c(e),$=r(e,"P",{});var R=s($);Pa=i(R,"Create an empty repository with "),Ie=r(R,"A",{href:!0});var Es=s(Ie);Ra=i(Es,"create_repo()"),Es.forEach(o),qa=i(R," and give it a name with the "),gt=r(R,"CODE",{});var ks=s(gt);Ca=i(ks,"repo_id"),ks.forEach(o),Sa=i(R," parameter. The "),mt=r(R,"CODE",{});var js=s(mt);xa=i(js,"repo_id"),js.forEach(o),Ha=i(R," is your namespace followed by the repository name: "),yt=r(R,"CODE",{});var As=s(yt);Na=i(As,"{username_or_org}/{repo_name}"),As.forEach(o),Da=i(R,"."),R.forEach(o),Zt=c(e),g(ge.$$.fragment,e),eo=c(e),k=r(e,"P",{});var tt=s(k);Oa=i(tt,"By default, "),Be=r(tt,"A",{href:!0});var Ps=s(Be);Ta=i(Ps,"create_repo()"),Ps.forEach(o),Fa=i(tt," creates a model repository. But you can use the "),_t=r(tt,"CODE",{});var Rs=s(_t);La=i(Rs,"repo_type"),Rs.forEach(o),Ga=i(tt," parameter to specify another repository type. For example, if you want to create a dataset repository:"),tt.forEach(o),to=c(e),g(me.$$.fragment,e),oo=c(e),Y=r(e,"P",{});var Uo=s(Y);Ia=i(Uo,"When you create a repository, you can set your repository visibility with the "),dt=r(Uo,"CODE",{});var qs=s(dt);Ba=i(qs,"private"),qs.forEach(o),Ma=i(Uo," parameter. For example, if you want to create a private repository:"),Uo.forEach(o),ao=c(e),g(ye.$$.fragment,e),ro=c(e),J=r(e,"P",{});var Wo=s(J);Ua=i(Wo,"If you want to change the repository visibility at a later time, you can use the "),Me=r(Wo,"A",{href:!0});var Cs=s(Me);Wa=i(Cs,"update_repo_visibility()"),Cs.forEach(o),Ya=i(Wo," function."),Wo.forEach(o),so=c(e),N=r(e,"H2",{class:!0});var Yo=s(N);z=r(Yo,"A",{id:!0,class:!0,href:!0});var Ss=s(z);vt=r(Ss,"SPAN",{});var xs=s(vt);g(_e.$$.fragment,xs),xs.forEach(o),Ss.forEach(o),Ja=c(Yo),$t=r(Yo,"SPAN",{});var Hs=s($t);za=i(Hs,"Delete a repository"),Hs.forEach(o),Yo.forEach(o),lo=c(e),K=r(e,"P",{});var Jo=s(K);Ka=i(Jo,"Delete a repository with "),Ue=r(Jo,"A",{href:!0});var Ns=s(Ue);Qa=i(Ns,"delete_repo()"),Ns.forEach(o),Va=i(Jo,". Make sure you want to delete a repository because this is an irreversible process!"),Jo.forEach(o),io=c(e),Q=r(e,"P",{});var zo=s(Q);Xa=i(zo,"Specify the "),wt=r(zo,"CODE",{});var Ds=s(wt);Za=i(Ds,"repo_id"),Ds.forEach(o),er=i(zo," of the repository you want to delete:"),zo.forEach(o),po=c(e),g(de.$$.fragment,e),no=c(e),V=r(e,"P",{});var Ko=s(V);tr=i(Ko,"You can also specify the repository type to delete by adding the "),bt=r(Ko,"CODE",{});var Os=s(bt);or=i(Os,"repo_type"),Os.forEach(o),ar=i(Ko," parameter:"),Ko.forEach(o),ho=c(e),g(ve.$$.fragment,e),co=c(e),D=r(e,"H2",{class:!0});var Qo=s(D);X=r(Qo,"A",{id:!0,class:!0,href:!0});var Ts=s(X);Et=r(Ts,"SPAN",{});var Fs=s(Et);g($e.$$.fragment,Fs),Fs.forEach(o),Ts.forEach(o),rr=c(Qo),kt=r(Qo,"SPAN",{});var Ls=s(kt);sr=i(Ls,"Change repository visibility"),Ls.forEach(o),Qo.forEach(o),fo=c(e),We=r(e,"P",{});var Gs=s(We);lr=i(Gs,"A repository can be public or private. A private repository is only visible to you or members of the organization in which the repository is located. Change a repository to private as shown in the following:"),Gs.forEach(o),uo=c(e),g(we.$$.fragment,e),go=c(e),O=r(e,"H2",{class:!0});var Vo=s(O);Z=r(Vo,"A",{id:!0,class:!0,href:!0});var Is=s(Z);jt=r(Is,"SPAN",{});var Bs=s(jt);g(be.$$.fragment,Bs),Bs.forEach(o),Is.forEach(o),ir=c(Vo),At=r(Vo,"SPAN",{});var Ms=s(At);pr=i(Ms,"The Repository class"),Ms.forEach(o),Vo.forEach(o),mo=c(e),w=r(e,"P",{});var q=s(w);nr=i(q,"The "),Ye=r(q,"A",{href:!0});var Us=s(Ye);hr=i(Us,"Repository"),Us.forEach(o),cr=i(q," class allows you to interact with files and repositories on the Hub with functions similar to Git commands. "),Je=r(q,"A",{href:!0});var Ws=s(Je);fr=i(Ws,"Repository"),Ws.forEach(o),ur=i(q," is a wrapper over Git and Git-LFS methods, so make sure you have Git-LFS installed (see "),Ee=r(q,"A",{href:!0,rel:!0});var Ys=s(Ee);gr=i(Ys,"here"),Ys.forEach(o),mr=i(q," for installation instructions) and set up before you begin. With "),ze=r(q,"A",{href:!0});var Js=s(ze);yr=i(Js,"Repository"),Js.forEach(o),_r=i(q,", you can use the Git commands you already know and love."),q.forEach(o),yo=c(e),T=r(e,"H3",{class:!0});var Xo=s(T);ee=r(Xo,"A",{id:!0,class:!0,href:!0});var zs=s(ee);Pt=r(zs,"SPAN",{});var Ks=s(Pt);g(ke.$$.fragment,Ks),Ks.forEach(o),zs.forEach(o),dr=c(Xo),Rt=r(Xo,"SPAN",{});var Qs=s(Rt);vr=i(Qs,"Use a local repository"),Qs.forEach(o),Xo.forEach(o),_o=c(e),te=r(e,"P",{});var Zo=s(te);$r=i(Zo,"Instantiate a "),Ke=r(Zo,"A",{href:!0});var Vs=s(Ke);wr=i(Vs,"Repository"),Vs.forEach(o),br=i(Zo," object with a path to a local repository:"),Zo.forEach(o),vo=c(e),g(je.$$.fragment,e),$o=c(e),F=r(e,"H3",{class:!0});var ea=s(F);oe=r(ea,"A",{id:!0,class:!0,href:!0});var Xs=s(oe);qt=r(Xs,"SPAN",{});var Zs=s(qt);g(Ae.$$.fragment,Zs),Zs.forEach(o),Xs.forEach(o),Er=c(ea),Ct=r(ea,"SPAN",{});var el=s(Ct);kr=i(el,"Clone"),el.forEach(o),ea.forEach(o),wo=c(e),j=r(e,"P",{});var ot=s(j);jr=i(ot,"The "),St=r(ot,"CODE",{});var tl=s(St);Ar=i(tl,"clone_from"),tl.forEach(o),Pr=i(ot," parameter clones a repository from a Hugging Face repository ID to a local directory specified by the "),xt=r(ot,"CODE",{});var ol=s(xt);Rr=i(ol,"local_dir"),ol.forEach(o),qr=i(ot," argument:"),ot.forEach(o),bo=c(e),g(Pe.$$.fragment,e),Eo=c(e),L=r(e,"P",{});var Wt=s(L);Ht=r(Wt,"CODE",{});var al=s(Ht);Cr=i(al,"clone_from"),al.forEach(o),Sr=i(Wt," can also clone a repository from a specified directory using a URL (if you are working offline, this parameter should be "),Nt=r(Wt,"CODE",{});var rl=s(Nt);xr=i(rl,"None"),rl.forEach(o),Hr=i(Wt,"):"),Wt.forEach(o),ko=c(e),g(Re.$$.fragment,e),jo=c(e),A=r(e,"P",{});var at=s(A);Nr=i(at,"You can combine the "),Dt=r(at,"CODE",{});var sl=s(Dt);Dr=i(sl,"clone_from"),sl.forEach(o),Or=i(at," parameter with "),Qe=r(at,"A",{href:!0});var ll=s(Qe);Tr=i(ll,"create_repo()"),ll.forEach(o),Fr=i(at," to create and clone a repository:"),at.forEach(o),Ao=c(e),g(qe.$$.fragment,e),Po=c(e),P=r(e,"P",{});var rt=s(P);Lr=i(rt,"You can also attribute a Git username and email to a cloned repository by specifying the "),Ot=r(rt,"CODE",{});var il=s(Ot);Gr=i(il,"git_user"),il.forEach(o),Ir=i(rt," and "),Tt=r(rt,"CODE",{});var pl=s(Tt);Br=i(pl,"git_email"),pl.forEach(o),Mr=i(rt," parameters when you clone a repository. When users commit to that repository, Git will be aware of the commit author."),rt.forEach(o),Ro=c(e),g(Ce.$$.fragment,e),qo=c(e),G=r(e,"H3",{class:!0});var ta=s(G);ae=r(ta,"A",{id:!0,class:!0,href:!0});var nl=s(ae);Ft=r(nl,"SPAN",{});var hl=s(Ft);g(Se.$$.fragment,hl),hl.forEach(o),nl.forEach(o),Ur=c(ta),Lt=r(ta,"SPAN",{});var cl=s(Lt);Wr=i(cl,"Branch"),cl.forEach(o),ta.forEach(o),Co=c(e),b=r(e,"P",{});var le=s(b);Yr=i(le,"Branches are important for collaboration and experimentation without impacting your current files and code. Switch between branches with "),Ve=r(le,"A",{href:!0});var fl=s(Ve);Jr=i(fl,"git_checkout()"),fl.forEach(o),zr=i(le,". For example, if you want to switch from "),Gt=r(le,"CODE",{});var ul=s(Gt);Kr=i(ul,"branch1"),ul.forEach(o),Qr=i(le," to "),It=r(le,"CODE",{});var gl=s(It);Vr=i(gl,"branch2"),gl.forEach(o),Xr=i(le,":"),le.forEach(o),So=c(e),g(xe.$$.fragment,e),xo=c(e),I=r(e,"H3",{class:!0});var oa=s(I);re=r(oa,"A",{id:!0,class:!0,href:!0});var ml=s(re);Bt=r(ml,"SPAN",{});var yl=s(Bt);g(He.$$.fragment,yl),yl.forEach(o),ml.forEach(o),Zr=c(oa),Mt=r(oa,"SPAN",{});var _l=s(Mt);es=i(_l,"Pull"),_l.forEach(o),oa.forEach(o),Ho=c(e),Ne=r(e,"P",{});var is=s(Ne);Xe=r(is,"A",{href:!0});var dl=s(Xe);ts=i(dl,"git_pull()"),dl.forEach(o),os=i(is," allows you to update a current local branch with changes from a remote repository:"),is.forEach(o),No=c(e),g(De.$$.fragment,e),Do=c(e),se=r(e,"P",{});var aa=s(se);as=i(aa,"Set "),Ut=r(aa,"CODE",{});var vl=s(Ut);rs=i(vl,"rebase=True"),vl.forEach(o),ss=i(aa," if you want your local commits to occur after your branch is updated with the new commits from the remote:"),aa.forEach(o),Oo=c(e),g(Oe.$$.fragment,e),this.h()},h(){f(C,"name","hf:doc:metadata"),f(C,"content",JSON.stringify(Pl)),f(M,"id","create-and-manage-a-repository"),f(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(M,"href","#create-and-manage-a-repository"),f(S,"class","relative group"),f(Fe,"href","/docs/huggingface_hub/v0.8.0/en/package_reference/repository#huggingface_hub.Repository"),f(W,"id","create-a-repository"),f(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(W,"href","#create-a-repository"),f(H,"class","relative group"),f(Ie,"href","/docs/huggingface_hub/v0.8.0/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo"),f(Be,"href","/docs/huggingface_hub/v0.8.0/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo"),f(Me,"href","/docs/huggingface_hub/v0.8.0/en/package_reference/hf_api#huggingface_hub.HfApi.update_repo_visibility"),f(z,"id","delete-a-repository"),f(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(z,"href","#delete-a-repository"),f(N,"class","relative group"),f(Ue,"href","/docs/huggingface_hub/v0.8.0/en/package_reference/hf_api#huggingface_hub.HfApi.delete_repo"),f(X,"id","change-repository-visibility"),f(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(X,"href","#change-repository-visibility"),f(D,"class","relative group"),f(Z,"id","the-repository-class"),f(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Z,"href","#the-repository-class"),f(O,"class","relative group"),f(Ye,"href","/docs/huggingface_hub/v0.8.0/en/package_reference/repository#huggingface_hub.Repository"),f(Je,"href","/docs/huggingface_hub/v0.8.0/en/package_reference/repository#huggingface_hub.Repository"),f(Ee,"href","https://git-lfs.github.com/"),f(Ee,"rel","nofollow"),f(ze,"href","/docs/huggingface_hub/v0.8.0/en/package_reference/repository#huggingface_hub.Repository"),f(ee,"id","use-a-local-repository"),f(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ee,"href","#use-a-local-repository"),f(T,"class","relative group"),f(Ke,"href","/docs/huggingface_hub/v0.8.0/en/package_reference/repository#huggingface_hub.Repository"),f(oe,"id","clone"),f(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(oe,"href","#clone"),f(F,"class","relative group"),f(Qe,"href","/docs/huggingface_hub/v0.8.0/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo"),f(ae,"id","branch"),f(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ae,"href","#branch"),f(G,"class","relative group"),f(Ve,"href","/docs/huggingface_hub/v0.8.0/en/package_reference/repository#huggingface_hub.Repository.git_checkout"),f(re,"id","pull"),f(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(re,"href","#pull"),f(I,"class","relative group"),f(Xe,"href","/docs/huggingface_hub/v0.8.0/en/package_reference/repository#huggingface_hub.Repository.git_pull")},m(e,p){t(document.head,C),n(e,Yt,p),n(e,S,p),t(S,M),t(M,st),m(ie,st,null),t(S,ra),t(S,lt),t(lt,sa),n(e,Jt,p),n(e,Te,p),t(Te,la),n(e,zt,p),n(e,E,p),t(E,it),t(it,ia),t(E,pa),t(E,pt),t(pt,na),t(E,ha),t(E,pe),t(pe,ca),t(pe,Fe),t(Fe,fa),t(pe,ua),n(e,Kt,p),n(e,Le,p),t(Le,ga),n(e,Qt,p),n(e,U,p),t(U,ne),t(ne,nt),t(nt,ma),t(ne,ya),m(he,ne,null),t(U,_a),t(U,x),t(x,ce),t(ce,da),t(ce,ht),t(ht,va),t(ce,$a),t(x,wa),m(fe,x,null),t(x,ba),t(x,Ge),t(Ge,ct),t(ct,Ea),t(Ge,ka),n(e,Vt,p),n(e,H,p),t(H,W),t(W,ft),m(ue,ft,null),t(H,ja),t(H,ut),t(ut,Aa),n(e,Xt,p),n(e,$,p),t($,Pa),t($,Ie),t(Ie,Ra),t($,qa),t($,gt),t(gt,Ca),t($,Sa),t($,mt),t(mt,xa),t($,Ha),t($,yt),t(yt,Na),t($,Da),n(e,Zt,p),m(ge,e,p),n(e,eo,p),n(e,k,p),t(k,Oa),t(k,Be),t(Be,Ta),t(k,Fa),t(k,_t),t(_t,La),t(k,Ga),n(e,to,p),m(me,e,p),n(e,oo,p),n(e,Y,p),t(Y,Ia),t(Y,dt),t(dt,Ba),t(Y,Ma),n(e,ao,p),m(ye,e,p),n(e,ro,p),n(e,J,p),t(J,Ua),t(J,Me),t(Me,Wa),t(J,Ya),n(e,so,p),n(e,N,p),t(N,z),t(z,vt),m(_e,vt,null),t(N,Ja),t(N,$t),t($t,za),n(e,lo,p),n(e,K,p),t(K,Ka),t(K,Ue),t(Ue,Qa),t(K,Va),n(e,io,p),n(e,Q,p),t(Q,Xa),t(Q,wt),t(wt,Za),t(Q,er),n(e,po,p),m(de,e,p),n(e,no,p),n(e,V,p),t(V,tr),t(V,bt),t(bt,or),t(V,ar),n(e,ho,p),m(ve,e,p),n(e,co,p),n(e,D,p),t(D,X),t(X,Et),m($e,Et,null),t(D,rr),t(D,kt),t(kt,sr),n(e,fo,p),n(e,We,p),t(We,lr),n(e,uo,p),m(we,e,p),n(e,go,p),n(e,O,p),t(O,Z),t(Z,jt),m(be,jt,null),t(O,ir),t(O,At),t(At,pr),n(e,mo,p),n(e,w,p),t(w,nr),t(w,Ye),t(Ye,hr),t(w,cr),t(w,Je),t(Je,fr),t(w,ur),t(w,Ee),t(Ee,gr),t(w,mr),t(w,ze),t(ze,yr),t(w,_r),n(e,yo,p),n(e,T,p),t(T,ee),t(ee,Pt),m(ke,Pt,null),t(T,dr),t(T,Rt),t(Rt,vr),n(e,_o,p),n(e,te,p),t(te,$r),t(te,Ke),t(Ke,wr),t(te,br),n(e,vo,p),m(je,e,p),n(e,$o,p),n(e,F,p),t(F,oe),t(oe,qt),m(Ae,qt,null),t(F,Er),t(F,Ct),t(Ct,kr),n(e,wo,p),n(e,j,p),t(j,jr),t(j,St),t(St,Ar),t(j,Pr),t(j,xt),t(xt,Rr),t(j,qr),n(e,bo,p),m(Pe,e,p),n(e,Eo,p),n(e,L,p),t(L,Ht),t(Ht,Cr),t(L,Sr),t(L,Nt),t(Nt,xr),t(L,Hr),n(e,ko,p),m(Re,e,p),n(e,jo,p),n(e,A,p),t(A,Nr),t(A,Dt),t(Dt,Dr),t(A,Or),t(A,Qe),t(Qe,Tr),t(A,Fr),n(e,Ao,p),m(qe,e,p),n(e,Po,p),n(e,P,p),t(P,Lr),t(P,Ot),t(Ot,Gr),t(P,Ir),t(P,Tt),t(Tt,Br),t(P,Mr),n(e,Ro,p),m(Ce,e,p),n(e,qo,p),n(e,G,p),t(G,ae),t(ae,Ft),m(Se,Ft,null),t(G,Ur),t(G,Lt),t(Lt,Wr),n(e,Co,p),n(e,b,p),t(b,Yr),t(b,Ve),t(Ve,Jr),t(b,zr),t(b,Gt),t(Gt,Kr),t(b,Qr),t(b,It),t(It,Vr),t(b,Xr),n(e,So,p),m(xe,e,p),n(e,xo,p),n(e,I,p),t(I,re),t(re,Bt),m(He,Bt,null),t(I,Zr),t(I,Mt),t(Mt,es),n(e,Ho,p),n(e,Ne,p),t(Ne,Xe),t(Xe,ts),t(Ne,os),n(e,No,p),m(De,e,p),n(e,Do,p),n(e,se,p),t(se,as),t(se,Ut),t(Ut,rs),t(se,ss),n(e,Oo,p),m(Oe,e,p),To=!0},p:kl,i(e){To||(y(ie.$$.fragment,e),y(he.$$.fragment,e),y(fe.$$.fragment,e),y(ue.$$.fragment,e),y(ge.$$.fragment,e),y(me.$$.fragment,e),y(ye.$$.fragment,e),y(_e.$$.fragment,e),y(de.$$.fragment,e),y(ve.$$.fragment,e),y($e.$$.fragment,e),y(we.$$.fragment,e),y(be.$$.fragment,e),y(ke.$$.fragment,e),y(je.$$.fragment,e),y(Ae.$$.fragment,e),y(Pe.$$.fragment,e),y(Re.$$.fragment,e),y(qe.$$.fragment,e),y(Ce.$$.fragment,e),y(Se.$$.fragment,e),y(xe.$$.fragment,e),y(He.$$.fragment,e),y(De.$$.fragment,e),y(Oe.$$.fragment,e),To=!0)},o(e){_(ie.$$.fragment,e),_(he.$$.fragment,e),_(fe.$$.fragment,e),_(ue.$$.fragment,e),_(ge.$$.fragment,e),_(me.$$.fragment,e),_(ye.$$.fragment,e),_(_e.$$.fragment,e),_(de.$$.fragment,e),_(ve.$$.fragment,e),_($e.$$.fragment,e),_(we.$$.fragment,e),_(be.$$.fragment,e),_(ke.$$.fragment,e),_(je.$$.fragment,e),_(Ae.$$.fragment,e),_(Pe.$$.fragment,e),_(Re.$$.fragment,e),_(qe.$$.fragment,e),_(Ce.$$.fragment,e),_(Se.$$.fragment,e),_(xe.$$.fragment,e),_(He.$$.fragment,e),_(De.$$.fragment,e),_(Oe.$$.fragment,e),To=!1},d(e){o(C),e&&o(Yt),e&&o(S),d(ie),e&&o(Jt),e&&o(Te),e&&o(zt),e&&o(E),e&&o(Kt),e&&o(Le),e&&o(Qt),e&&o(U),d(he),d(fe),e&&o(Vt),e&&o(H),d(ue),e&&o(Xt),e&&o($),e&&o(Zt),d(ge,e),e&&o(eo),e&&o(k),e&&o(to),d(me,e),e&&o(oo),e&&o(Y),e&&o(ao),d(ye,e),e&&o(ro),e&&o(J),e&&o(so),e&&o(N),d(_e),e&&o(lo),e&&o(K),e&&o(io),e&&o(Q),e&&o(po),d(de,e),e&&o(no),e&&o(V),e&&o(ho),d(ve,e),e&&o(co),e&&o(D),d($e),e&&o(fo),e&&o(We),e&&o(uo),d(we,e),e&&o(go),e&&o(O),d(be),e&&o(mo),e&&o(w),e&&o(yo),e&&o(T),d(ke),e&&o(_o),e&&o(te),e&&o(vo),d(je,e),e&&o($o),e&&o(F),d(Ae),e&&o(wo),e&&o(j),e&&o(bo),d(Pe,e),e&&o(Eo),e&&o(L),e&&o(ko),d(Re,e),e&&o(jo),e&&o(A),e&&o(Ao),d(qe,e),e&&o(Po),e&&o(P),e&&o(Ro),d(Ce,e),e&&o(qo),e&&o(G),d(Se),e&&o(Co),e&&o(b),e&&o(So),d(xe,e),e&&o(xo),e&&o(I),d(He),e&&o(Ho),e&&o(Ne),e&&o(No),d(De,e),e&&o(Do),e&&o(se),e&&o(Oo),d(Oe,e)}}}const Pl={local:"create-and-manage-a-repository",sections:[{local:"create-a-repository",title:"Create a repository"},{local:"delete-a-repository",title:"Delete a repository"},{local:"change-repository-visibility",title:"Change repository visibility"},{local:"the-repository-class",sections:[{local:"use-a-local-repository",title:"Use a local repository"},{local:"clone",title:"Clone"},{local:"branch",title:"Branch"},{local:"pull",title:"Pull"}],title:"The Repository class "}],title:"Create and manage a repository"};function Rl(ps){return jl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xl extends $l{constructor(C){super();wl(this,C,Rl,Al,bl,{})}}export{xl as default,Pl as metadata};
