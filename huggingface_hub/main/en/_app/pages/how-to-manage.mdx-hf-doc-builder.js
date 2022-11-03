import{S as ql,i as Cl,s as Sl,e as a,k as h,w as u,t as s,M as xl,c as r,d as o,m as c,a as l,x as g,h as i,b as f,G as t,g as n,y as m,L as Hl,q as y,o as _,B as d,v as Nl}from"../chunks/vendor-hf-doc-builder.js";import{I as B}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as v}from"../chunks/CodeBlock-hf-doc-builder.js";function Ol(ys){let S,zt,x,M,nt,pe,pa,ht,na,Kt,Le,ha,Qt,k,ct,ca,fa,ft,ua,ga,ne,ma,Ge,ya,_a,Vt,Be,da,Xt,U,he,ut,va,$a,ce,wa,E,fe,ba,Me,Ea,ka,ja,ue,Aa,ge,Pa,Ue,Ra,qa,Ca,me,Sa,We,xa,Ha,Zt,H,W,gt,ye,Na,mt,Oa,eo,$,Da,Ye,Ia,Ta,yt,Fa,La,_t,Ga,Ba,dt,Ma,Ua,to,_e,oo,j,Wa,Je,Ya,Ja,vt,za,Ka,ao,de,ro,Y,Qa,$t,Va,Xa,so,ve,lo,J,Za,ze,er,tr,io,N,z,wt,$e,or,bt,ar,po,K,rr,Ke,sr,lr,no,Q,ir,Et,pr,nr,ho,we,co,V,hr,kt,cr,fr,fo,be,uo,O,X,jt,Ee,ur,At,gr,go,Qe,mr,mo,ke,yo,D,Z,Pt,je,yr,Rt,_r,_o,w,dr,Ve,vr,$r,Xe,wr,br,Ae,Er,kr,Ze,jr,Ar,vo,I,ee,qt,Pe,Pr,Ct,Rr,$o,te,qr,et,Cr,Sr,wo,Re,bo,T,oe,St,qe,xr,xt,Hr,Eo,A,Nr,Ht,Or,Dr,Nt,Ir,Tr,ko,Ce,jo,F,Ot,Fr,Lr,Dt,Gr,Br,Ao,Se,Po,P,Mr,It,Ur,Wr,tt,Yr,Jr,Ro,xe,qo,R,zr,Tt,Kr,Qr,Ft,Vr,Xr,Co,He,So,L,ae,Lt,Ne,Zr,Gt,es,xo,b,ts,ot,os,as,Bt,rs,ss,Mt,ls,is,Ho,Oe,No,G,re,Ut,De,ps,Wt,ns,Oo,Ie,at,hs,cs,Do,Te,Io,se,fs,Yt,us,gs,To,Fe,Fo;return pe=new B({}),ce=new v({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),ue=new v({props:{code:`from huggingface_hub import login
login()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> login
<span class="hljs-meta">&gt;&gt;&gt; </span>login()`}}),ye=new B({}),_e=new v({props:{code:`from huggingface_hub import create_repo
create_repo("lysandre/test-model")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> create_repo
<span class="hljs-meta">&gt;&gt;&gt; </span>create_repo(<span class="hljs-string">&quot;lysandre/test-model&quot;</span>)
<span class="hljs-string">&#x27;https://huggingface.co/lysandre/test-model&#x27;</span>`}}),de=new v({props:{code:`from huggingface_hub import create_repo
create_repo("lysandre/test-dataset", repo_type="dataset")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> create_repo
<span class="hljs-meta">&gt;&gt;&gt; </span>create_repo(<span class="hljs-string">&quot;lysandre/test-dataset&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>)
<span class="hljs-string">&#x27;https://huggingface.co/datasets/lysandre/test-dataset&#x27;</span>`}}),ve=new v({props:{code:`from huggingface_hub import create_repo
create_repo("lysandre/test-private", private=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> create_repo
<span class="hljs-meta">&gt;&gt;&gt; </span>create_repo(<span class="hljs-string">&quot;lysandre/test-private&quot;</span>, private=<span class="hljs-literal">True</span>)`}}),$e=new B({}),we=new v({props:{code:"delete_repo(repo_id=name)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>delete_repo(repo_id=name)'}}),be=new v({props:{code:'delete_repo(repo_id=REPO_NAME, repo_type="dataset")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>delete_repo(repo_id=REPO_NAME, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>)'}}),Ee=new B({}),ke=new v({props:{code:`from huggingface_hub import update_repo_visibility
update_repo_visibility(name=REPO_NAME, private=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> update_repo_visibility
<span class="hljs-meta">&gt;&gt;&gt; </span>update_repo_visibility(name=REPO_NAME, private=<span class="hljs-literal">True</span>)`}}),je=new B({}),Pe=new B({}),Re=new v({props:{code:`from huggingface_hub import Repository
repo = Repository(local_dir="<path>/<to>/<folder>")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository
<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;&lt;path&gt;/&lt;to&gt;/&lt;folder&gt;&quot;</span>)`}}),qe=new B({}),Ce=new v({props:{code:`from huggingface_hub import Repository
repo = Repository(local_dir="w2v2", clone_from="facebook/wav2vec2-large-960h-lv60")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository
<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;w2v2&quot;</span>, clone_from=<span class="hljs-string">&quot;facebook/wav2vec2-large-960h-lv60&quot;</span>)`}}),Se=new v({props:{code:'repo = Repository(local_dir="huggingface-hub", clone_from="https://huggingface.co/facebook/wav2vec2-large-960h-lv60")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;huggingface-hub&quot;</span>, clone_from=<span class="hljs-string">&quot;https://huggingface.co/facebook/wav2vec2-large-960h-lv60&quot;</span>)'}}),xe=new v({props:{code:`repo_url = create_repo(repo_id="repo_name")
repo = Repository(local_dir="repo_local_path", clone_from=repo_url)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>repo_url = create_repo(repo_id=<span class="hljs-string">&quot;repo_name&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;repo_local_path&quot;</span>, clone_from=repo_url)`}}),He=new v({props:{code:`repo = Repository(
  "my-dataset",
  clone_from="<user>/<dataset_id>",
  token=True,
  repo_type="dataset",
  git_user="MyName",
  git_email="me@cool.mail"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(
<span class="hljs-meta">... </span>  <span class="hljs-string">&quot;my-dataset&quot;</span>,
<span class="hljs-meta">... </span>  clone_from=<span class="hljs-string">&quot;&lt;user&gt;/&lt;dataset_id&gt;&quot;</span>,
<span class="hljs-meta">... </span>  token=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>  repo_type=<span class="hljs-string">&quot;dataset&quot;</span>,
<span class="hljs-meta">... </span>  git_user=<span class="hljs-string">&quot;MyName&quot;</span>,
<span class="hljs-meta">... </span>  git_email=<span class="hljs-string">&quot;me@cool.mail&quot;</span>
<span class="hljs-meta">... </span>)`}}),Ne=new B({}),Oe=new v({props:{code:`from huggingface_hub import Repository
repo = Repository(local_dir="huggingface-hub", clone_from="<user>/<dataset_id>", revision='branch1')
repo.git_checkout("branch2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository
<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;huggingface-hub&quot;</span>, clone_from=<span class="hljs-string">&quot;&lt;user&gt;/&lt;dataset_id&gt;&quot;</span>, revision=<span class="hljs-string">&#x27;branch1&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>repo.git_checkout(<span class="hljs-string">&quot;branch2&quot;</span>)`}}),De=new B({}),Te=new v({props:{code:`from huggingface_hub import Repository
repo.git_pull()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository
<span class="hljs-meta">&gt;&gt;&gt; </span>repo.git_pull()`}}),Fe=new v({props:{code:"repo.git_pull(rebase=True)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>repo.git_pull(rebase=<span class="hljs-literal">True</span>)'}}),{c(){S=a("meta"),zt=h(),x=a("h1"),M=a("a"),nt=a("span"),u(pe.$$.fragment),pa=h(),ht=a("span"),na=s("Create and manage a repository"),Kt=h(),Le=a("p"),ha=s("A repository is a place where you can store your model or dataset files. This guide will show you how to:"),Qt=h(),k=a("ul"),ct=a("li"),ca=s("Create and delete a repository."),fa=h(),ft=a("li"),ua=s("Adjust repository visibility."),ga=h(),ne=a("li"),ma=s("Use the "),Ge=a("a"),ya=s("Repository"),_a=s(" class for common Git operations like clone, branch, and pull."),Vt=h(),Be=a("p"),da=s("If you want to create a repository on the Hub, you need to log in to your Hugging Face account:"),Xt=h(),U=a("ol"),he=a("li"),ut=a("p"),va=s("Log in to your Hugging Face account with the following command:"),$a=h(),u(ce.$$.fragment),wa=h(),E=a("li"),fe=a("p"),ba=s("Alternatively, you can programmatically login using "),Me=a("a"),Ea=s("login()"),ka=s(" in a notebook or a script:"),ja=h(),u(ue.$$.fragment),Aa=h(),ge=a("p"),Pa=s("If ran in a Jupyter or Colaboratory notebook, "),Ue=a("a"),Ra=s("login()"),qa=s(` will launch a widget from
which you can enter your Hugging Face access token. Otherwise, a message will be
prompted in the terminal.`),Ca=h(),me=a("p"),Sa=s(`It is also possible to login programmatically without the widget by directly passing
the token to `),We=a("a"),xa=s("login()"),Ha=s(`. If you do so, be careful when sharing your notebook. It is
best practice to load the token from a secure vault instead of saving it in plain in
your Colaboratory notebook.`),Zt=h(),H=a("h2"),W=a("a"),gt=a("span"),u(ye.$$.fragment),Na=h(),mt=a("span"),Oa=s("Create a repository"),eo=h(),$=a("p"),Da=s("Create an empty repository with "),Ye=a("a"),Ia=s("create_repo()"),Ta=s(" and give it a name with the "),yt=a("code"),Fa=s("repo_id"),La=s(" parameter. The "),_t=a("code"),Ga=s("repo_id"),Ba=s(" is your namespace followed by the repository name: "),dt=a("code"),Ma=s("{username_or_org}/{repo_name}"),Ua=s("."),to=h(),u(_e.$$.fragment),oo=h(),j=a("p"),Wa=s("By default, "),Je=a("a"),Ya=s("create_repo()"),Ja=s(" creates a model repository. But you can use the "),vt=a("code"),za=s("repo_type"),Ka=s(" parameter to specify another repository type. For example, if you want to create a dataset repository:"),ao=h(),u(de.$$.fragment),ro=h(),Y=a("p"),Qa=s("When you create a repository, you can set your repository visibility with the "),$t=a("code"),Va=s("private"),Xa=s(" parameter. For example, if you want to create a private repository:"),so=h(),u(ve.$$.fragment),lo=h(),J=a("p"),Za=s("If you want to change the repository visibility at a later time, you can use the "),ze=a("a"),er=s("update_repo_visibility()"),tr=s(" function."),io=h(),N=a("h2"),z=a("a"),wt=a("span"),u($e.$$.fragment),or=h(),bt=a("span"),ar=s("Delete a repository"),po=h(),K=a("p"),rr=s("Delete a repository with "),Ke=a("a"),sr=s("delete_repo()"),lr=s(". Make sure you want to delete a repository because this is an irreversible process!"),no=h(),Q=a("p"),ir=s("Specify the "),Et=a("code"),pr=s("repo_id"),nr=s(" of the repository you want to delete:"),ho=h(),u(we.$$.fragment),co=h(),V=a("p"),hr=s("You can also specify the repository type to delete by adding the "),kt=a("code"),cr=s("repo_type"),fr=s(" parameter:"),fo=h(),u(be.$$.fragment),uo=h(),O=a("h2"),X=a("a"),jt=a("span"),u(Ee.$$.fragment),ur=h(),At=a("span"),gr=s("Change repository visibility"),go=h(),Qe=a("p"),mr=s("A repository can be public or private. A private repository is only visible to you or members of the organization in which the repository is located. Change a repository to private as shown in the following:"),mo=h(),u(ke.$$.fragment),yo=h(),D=a("h2"),Z=a("a"),Pt=a("span"),u(je.$$.fragment),yr=h(),Rt=a("span"),_r=s("The Repository class"),_o=h(),w=a("p"),dr=s("The "),Ve=a("a"),vr=s("Repository"),$r=s(" class allows you to interact with files and repositories on the Hub with functions similar to Git commands. "),Xe=a("a"),wr=s("Repository"),br=s(" is a wrapper over Git and Git-LFS methods, so make sure you have Git-LFS installed (see "),Ae=a("a"),Er=s("here"),kr=s(" for installation instructions) and set up before you begin. With "),Ze=a("a"),jr=s("Repository"),Ar=s(", you can use the Git commands you already know and love."),vo=h(),I=a("h3"),ee=a("a"),qt=a("span"),u(Pe.$$.fragment),Pr=h(),Ct=a("span"),Rr=s("Use a local repository"),$o=h(),te=a("p"),qr=s("Instantiate a "),et=a("a"),Cr=s("Repository"),Sr=s(" object with a path to a local repository:"),wo=h(),u(Re.$$.fragment),bo=h(),T=a("h3"),oe=a("a"),St=a("span"),u(qe.$$.fragment),xr=h(),xt=a("span"),Hr=s("Clone"),Eo=h(),A=a("p"),Nr=s("The "),Ht=a("code"),Or=s("clone_from"),Dr=s(" parameter clones a repository from a Hugging Face repository ID to a local directory specified by the "),Nt=a("code"),Ir=s("local_dir"),Tr=s(" argument:"),ko=h(),u(Ce.$$.fragment),jo=h(),F=a("p"),Ot=a("code"),Fr=s("clone_from"),Lr=s(" can also clone a repository from a specified directory using a URL (if you are working offline, this parameter should be "),Dt=a("code"),Gr=s("None"),Br=s("):"),Ao=h(),u(Se.$$.fragment),Po=h(),P=a("p"),Mr=s("You can combine the "),It=a("code"),Ur=s("clone_from"),Wr=s(" parameter with "),tt=a("a"),Yr=s("create_repo()"),Jr=s(" to create and clone a repository:"),Ro=h(),u(xe.$$.fragment),qo=h(),R=a("p"),zr=s("You can also attribute a Git username and email to a cloned repository by specifying the "),Tt=a("code"),Kr=s("git_user"),Qr=s(" and "),Ft=a("code"),Vr=s("git_email"),Xr=s(" parameters when you clone a repository. When users commit to that repository, Git will be aware of the commit author."),Co=h(),u(He.$$.fragment),So=h(),L=a("h3"),ae=a("a"),Lt=a("span"),u(Ne.$$.fragment),Zr=h(),Gt=a("span"),es=s("Branch"),xo=h(),b=a("p"),ts=s("Branches are important for collaboration and experimentation without impacting your current files and code. Switch between branches with "),ot=a("a"),os=s("git_checkout()"),as=s(". For example, if you want to switch from "),Bt=a("code"),rs=s("branch1"),ss=s(" to "),Mt=a("code"),ls=s("branch2"),is=s(":"),Ho=h(),u(Oe.$$.fragment),No=h(),G=a("h3"),re=a("a"),Ut=a("span"),u(De.$$.fragment),ps=h(),Wt=a("span"),ns=s("Pull"),Oo=h(),Ie=a("p"),at=a("a"),hs=s("git_pull()"),cs=s(" allows you to update a current local branch with changes from a remote repository:"),Do=h(),u(Te.$$.fragment),Io=h(),se=a("p"),fs=s("Set "),Yt=a("code"),us=s("rebase=True"),gs=s(" if you want your local commits to occur after your branch is updated with the new commits from the remote:"),To=h(),u(Fe.$$.fragment),this.h()},l(e){const p=xl('[data-svelte="svelte-1phssyn"]',document.head);S=r(p,"META",{name:!0,content:!0}),p.forEach(o),zt=c(e),x=r(e,"H1",{class:!0});var Lo=l(x);M=r(Lo,"A",{id:!0,class:!0,href:!0});var _s=l(M);nt=r(_s,"SPAN",{});var ds=l(nt);g(pe.$$.fragment,ds),ds.forEach(o),_s.forEach(o),pa=c(Lo),ht=r(Lo,"SPAN",{});var vs=l(ht);na=i(vs,"Create and manage a repository"),vs.forEach(o),Lo.forEach(o),Kt=c(e),Le=r(e,"P",{});var $s=l(Le);ha=i($s,"A repository is a place where you can store your model or dataset files. This guide will show you how to:"),$s.forEach(o),Qt=c(e),k=r(e,"UL",{});var rt=l(k);ct=r(rt,"LI",{});var ws=l(ct);ca=i(ws,"Create and delete a repository."),ws.forEach(o),fa=c(rt),ft=r(rt,"LI",{});var bs=l(ft);ua=i(bs,"Adjust repository visibility."),bs.forEach(o),ga=c(rt),ne=r(rt,"LI",{});var Go=l(ne);ma=i(Go,"Use the "),Ge=r(Go,"A",{href:!0});var Es=l(Ge);ya=i(Es,"Repository"),Es.forEach(o),_a=i(Go," class for common Git operations like clone, branch, and pull."),Go.forEach(o),rt.forEach(o),Vt=c(e),Be=r(e,"P",{});var ks=l(Be);da=i(ks,"If you want to create a repository on the Hub, you need to log in to your Hugging Face account:"),ks.forEach(o),Xt=c(e),U=r(e,"OL",{});var Bo=l(U);he=r(Bo,"LI",{});var Mo=l(he);ut=r(Mo,"P",{});var js=l(ut);va=i(js,"Log in to your Hugging Face account with the following command:"),js.forEach(o),$a=c(Mo),g(ce.$$.fragment,Mo),Mo.forEach(o),wa=c(Bo),E=r(Bo,"LI",{});var le=l(E);fe=r(le,"P",{});var Uo=l(fe);ba=i(Uo,"Alternatively, you can programmatically login using "),Me=r(Uo,"A",{href:!0});var As=l(Me);Ea=i(As,"login()"),As.forEach(o),ka=i(Uo," in a notebook or a script:"),Uo.forEach(o),ja=c(le),g(ue.$$.fragment,le),Aa=c(le),ge=r(le,"P",{});var Wo=l(ge);Pa=i(Wo,"If ran in a Jupyter or Colaboratory notebook, "),Ue=r(Wo,"A",{href:!0});var Ps=l(Ue);Ra=i(Ps,"login()"),Ps.forEach(o),qa=i(Wo,` will launch a widget from
which you can enter your Hugging Face access token. Otherwise, a message will be
prompted in the terminal.`),Wo.forEach(o),Ca=c(le),me=r(le,"P",{});var Yo=l(me);Sa=i(Yo,`It is also possible to login programmatically without the widget by directly passing
the token to `),We=r(Yo,"A",{href:!0});var Rs=l(We);xa=i(Rs,"login()"),Rs.forEach(o),Ha=i(Yo,`. If you do so, be careful when sharing your notebook. It is
best practice to load the token from a secure vault instead of saving it in plain in
your Colaboratory notebook.`),Yo.forEach(o),le.forEach(o),Bo.forEach(o),Zt=c(e),H=r(e,"H2",{class:!0});var Jo=l(H);W=r(Jo,"A",{id:!0,class:!0,href:!0});var qs=l(W);gt=r(qs,"SPAN",{});var Cs=l(gt);g(ye.$$.fragment,Cs),Cs.forEach(o),qs.forEach(o),Na=c(Jo),mt=r(Jo,"SPAN",{});var Ss=l(mt);Oa=i(Ss,"Create a repository"),Ss.forEach(o),Jo.forEach(o),eo=c(e),$=r(e,"P",{});var q=l($);Da=i(q,"Create an empty repository with "),Ye=r(q,"A",{href:!0});var xs=l(Ye);Ia=i(xs,"create_repo()"),xs.forEach(o),Ta=i(q," and give it a name with the "),yt=r(q,"CODE",{});var Hs=l(yt);Fa=i(Hs,"repo_id"),Hs.forEach(o),La=i(q," parameter. The "),_t=r(q,"CODE",{});var Ns=l(_t);Ga=i(Ns,"repo_id"),Ns.forEach(o),Ba=i(q," is your namespace followed by the repository name: "),dt=r(q,"CODE",{});var Os=l(dt);Ma=i(Os,"{username_or_org}/{repo_name}"),Os.forEach(o),Ua=i(q,"."),q.forEach(o),to=c(e),g(_e.$$.fragment,e),oo=c(e),j=r(e,"P",{});var st=l(j);Wa=i(st,"By default, "),Je=r(st,"A",{href:!0});var Ds=l(Je);Ya=i(Ds,"create_repo()"),Ds.forEach(o),Ja=i(st," creates a model repository. But you can use the "),vt=r(st,"CODE",{});var Is=l(vt);za=i(Is,"repo_type"),Is.forEach(o),Ka=i(st," parameter to specify another repository type. For example, if you want to create a dataset repository:"),st.forEach(o),ao=c(e),g(de.$$.fragment,e),ro=c(e),Y=r(e,"P",{});var zo=l(Y);Qa=i(zo,"When you create a repository, you can set your repository visibility with the "),$t=r(zo,"CODE",{});var Ts=l($t);Va=i(Ts,"private"),Ts.forEach(o),Xa=i(zo," parameter. For example, if you want to create a private repository:"),zo.forEach(o),so=c(e),g(ve.$$.fragment,e),lo=c(e),J=r(e,"P",{});var Ko=l(J);Za=i(Ko,"If you want to change the repository visibility at a later time, you can use the "),ze=r(Ko,"A",{href:!0});var Fs=l(ze);er=i(Fs,"update_repo_visibility()"),Fs.forEach(o),tr=i(Ko," function."),Ko.forEach(o),io=c(e),N=r(e,"H2",{class:!0});var Qo=l(N);z=r(Qo,"A",{id:!0,class:!0,href:!0});var Ls=l(z);wt=r(Ls,"SPAN",{});var Gs=l(wt);g($e.$$.fragment,Gs),Gs.forEach(o),Ls.forEach(o),or=c(Qo),bt=r(Qo,"SPAN",{});var Bs=l(bt);ar=i(Bs,"Delete a repository"),Bs.forEach(o),Qo.forEach(o),po=c(e),K=r(e,"P",{});var Vo=l(K);rr=i(Vo,"Delete a repository with "),Ke=r(Vo,"A",{href:!0});var Ms=l(Ke);sr=i(Ms,"delete_repo()"),Ms.forEach(o),lr=i(Vo,". Make sure you want to delete a repository because this is an irreversible process!"),Vo.forEach(o),no=c(e),Q=r(e,"P",{});var Xo=l(Q);ir=i(Xo,"Specify the "),Et=r(Xo,"CODE",{});var Us=l(Et);pr=i(Us,"repo_id"),Us.forEach(o),nr=i(Xo," of the repository you want to delete:"),Xo.forEach(o),ho=c(e),g(we.$$.fragment,e),co=c(e),V=r(e,"P",{});var Zo=l(V);hr=i(Zo,"You can also specify the repository type to delete by adding the "),kt=r(Zo,"CODE",{});var Ws=l(kt);cr=i(Ws,"repo_type"),Ws.forEach(o),fr=i(Zo," parameter:"),Zo.forEach(o),fo=c(e),g(be.$$.fragment,e),uo=c(e),O=r(e,"H2",{class:!0});var ea=l(O);X=r(ea,"A",{id:!0,class:!0,href:!0});var Ys=l(X);jt=r(Ys,"SPAN",{});var Js=l(jt);g(Ee.$$.fragment,Js),Js.forEach(o),Ys.forEach(o),ur=c(ea),At=r(ea,"SPAN",{});var zs=l(At);gr=i(zs,"Change repository visibility"),zs.forEach(o),ea.forEach(o),go=c(e),Qe=r(e,"P",{});var Ks=l(Qe);mr=i(Ks,"A repository can be public or private. A private repository is only visible to you or members of the organization in which the repository is located. Change a repository to private as shown in the following:"),Ks.forEach(o),mo=c(e),g(ke.$$.fragment,e),yo=c(e),D=r(e,"H2",{class:!0});var ta=l(D);Z=r(ta,"A",{id:!0,class:!0,href:!0});var Qs=l(Z);Pt=r(Qs,"SPAN",{});var Vs=l(Pt);g(je.$$.fragment,Vs),Vs.forEach(o),Qs.forEach(o),yr=c(ta),Rt=r(ta,"SPAN",{});var Xs=l(Rt);_r=i(Xs,"The Repository class"),Xs.forEach(o),ta.forEach(o),_o=c(e),w=r(e,"P",{});var C=l(w);dr=i(C,"The "),Ve=r(C,"A",{href:!0});var Zs=l(Ve);vr=i(Zs,"Repository"),Zs.forEach(o),$r=i(C," class allows you to interact with files and repositories on the Hub with functions similar to Git commands. "),Xe=r(C,"A",{href:!0});var el=l(Xe);wr=i(el,"Repository"),el.forEach(o),br=i(C," is a wrapper over Git and Git-LFS methods, so make sure you have Git-LFS installed (see "),Ae=r(C,"A",{href:!0,rel:!0});var tl=l(Ae);Er=i(tl,"here"),tl.forEach(o),kr=i(C," for installation instructions) and set up before you begin. With "),Ze=r(C,"A",{href:!0});var ol=l(Ze);jr=i(ol,"Repository"),ol.forEach(o),Ar=i(C,", you can use the Git commands you already know and love."),C.forEach(o),vo=c(e),I=r(e,"H3",{class:!0});var oa=l(I);ee=r(oa,"A",{id:!0,class:!0,href:!0});var al=l(ee);qt=r(al,"SPAN",{});var rl=l(qt);g(Pe.$$.fragment,rl),rl.forEach(o),al.forEach(o),Pr=c(oa),Ct=r(oa,"SPAN",{});var sl=l(Ct);Rr=i(sl,"Use a local repository"),sl.forEach(o),oa.forEach(o),$o=c(e),te=r(e,"P",{});var aa=l(te);qr=i(aa,"Instantiate a "),et=r(aa,"A",{href:!0});var ll=l(et);Cr=i(ll,"Repository"),ll.forEach(o),Sr=i(aa," object with a path to a local repository:"),aa.forEach(o),wo=c(e),g(Re.$$.fragment,e),bo=c(e),T=r(e,"H3",{class:!0});var ra=l(T);oe=r(ra,"A",{id:!0,class:!0,href:!0});var il=l(oe);St=r(il,"SPAN",{});var pl=l(St);g(qe.$$.fragment,pl),pl.forEach(o),il.forEach(o),xr=c(ra),xt=r(ra,"SPAN",{});var nl=l(xt);Hr=i(nl,"Clone"),nl.forEach(o),ra.forEach(o),Eo=c(e),A=r(e,"P",{});var lt=l(A);Nr=i(lt,"The "),Ht=r(lt,"CODE",{});var hl=l(Ht);Or=i(hl,"clone_from"),hl.forEach(o),Dr=i(lt," parameter clones a repository from a Hugging Face repository ID to a local directory specified by the "),Nt=r(lt,"CODE",{});var cl=l(Nt);Ir=i(cl,"local_dir"),cl.forEach(o),Tr=i(lt," argument:"),lt.forEach(o),ko=c(e),g(Ce.$$.fragment,e),jo=c(e),F=r(e,"P",{});var Jt=l(F);Ot=r(Jt,"CODE",{});var fl=l(Ot);Fr=i(fl,"clone_from"),fl.forEach(o),Lr=i(Jt," can also clone a repository from a specified directory using a URL (if you are working offline, this parameter should be "),Dt=r(Jt,"CODE",{});var ul=l(Dt);Gr=i(ul,"None"),ul.forEach(o),Br=i(Jt,"):"),Jt.forEach(o),Ao=c(e),g(Se.$$.fragment,e),Po=c(e),P=r(e,"P",{});var it=l(P);Mr=i(it,"You can combine the "),It=r(it,"CODE",{});var gl=l(It);Ur=i(gl,"clone_from"),gl.forEach(o),Wr=i(it," parameter with "),tt=r(it,"A",{href:!0});var ml=l(tt);Yr=i(ml,"create_repo()"),ml.forEach(o),Jr=i(it," to create and clone a repository:"),it.forEach(o),Ro=c(e),g(xe.$$.fragment,e),qo=c(e),R=r(e,"P",{});var pt=l(R);zr=i(pt,"You can also attribute a Git username and email to a cloned repository by specifying the "),Tt=r(pt,"CODE",{});var yl=l(Tt);Kr=i(yl,"git_user"),yl.forEach(o),Qr=i(pt," and "),Ft=r(pt,"CODE",{});var _l=l(Ft);Vr=i(_l,"git_email"),_l.forEach(o),Xr=i(pt," parameters when you clone a repository. When users commit to that repository, Git will be aware of the commit author."),pt.forEach(o),Co=c(e),g(He.$$.fragment,e),So=c(e),L=r(e,"H3",{class:!0});var sa=l(L);ae=r(sa,"A",{id:!0,class:!0,href:!0});var dl=l(ae);Lt=r(dl,"SPAN",{});var vl=l(Lt);g(Ne.$$.fragment,vl),vl.forEach(o),dl.forEach(o),Zr=c(sa),Gt=r(sa,"SPAN",{});var $l=l(Gt);es=i($l,"Branch"),$l.forEach(o),sa.forEach(o),xo=c(e),b=r(e,"P",{});var ie=l(b);ts=i(ie,"Branches are important for collaboration and experimentation without impacting your current files and code. Switch between branches with "),ot=r(ie,"A",{href:!0});var wl=l(ot);os=i(wl,"git_checkout()"),wl.forEach(o),as=i(ie,". For example, if you want to switch from "),Bt=r(ie,"CODE",{});var bl=l(Bt);rs=i(bl,"branch1"),bl.forEach(o),ss=i(ie," to "),Mt=r(ie,"CODE",{});var El=l(Mt);ls=i(El,"branch2"),El.forEach(o),is=i(ie,":"),ie.forEach(o),Ho=c(e),g(Oe.$$.fragment,e),No=c(e),G=r(e,"H3",{class:!0});var la=l(G);re=r(la,"A",{id:!0,class:!0,href:!0});var kl=l(re);Ut=r(kl,"SPAN",{});var jl=l(Ut);g(De.$$.fragment,jl),jl.forEach(o),kl.forEach(o),ps=c(la),Wt=r(la,"SPAN",{});var Al=l(Wt);ns=i(Al,"Pull"),Al.forEach(o),la.forEach(o),Oo=c(e),Ie=r(e,"P",{});var ms=l(Ie);at=r(ms,"A",{href:!0});var Pl=l(at);hs=i(Pl,"git_pull()"),Pl.forEach(o),cs=i(ms," allows you to update a current local branch with changes from a remote repository:"),ms.forEach(o),Do=c(e),g(Te.$$.fragment,e),Io=c(e),se=r(e,"P",{});var ia=l(se);fs=i(ia,"Set "),Yt=r(ia,"CODE",{});var Rl=l(Yt);us=i(Rl,"rebase=True"),Rl.forEach(o),gs=i(ia," if you want your local commits to occur after your branch is updated with the new commits from the remote:"),ia.forEach(o),To=c(e),g(Fe.$$.fragment,e),this.h()},h(){f(S,"name","hf:doc:metadata"),f(S,"content",JSON.stringify(Dl)),f(M,"id","create-and-manage-a-repository"),f(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(M,"href","#create-and-manage-a-repository"),f(x,"class","relative group"),f(Ge,"href","/docs/huggingface_hub/main/en/package_reference/repository#huggingface_hub.Repository"),f(Me,"href","/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login"),f(Ue,"href","/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login"),f(We,"href","/docs/huggingface_hub/main/en/package_reference/login#huggingface_hub.login"),f(W,"id","create-a-repository"),f(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(W,"href","#create-a-repository"),f(H,"class","relative group"),f(Ye,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo"),f(Je,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo"),f(ze,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.update_repo_visibility"),f(z,"id","delete-a-repository"),f(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(z,"href","#delete-a-repository"),f(N,"class","relative group"),f(Ke,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.delete_repo"),f(X,"id","change-repository-visibility"),f(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(X,"href","#change-repository-visibility"),f(O,"class","relative group"),f(Z,"id","the-repository-class"),f(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Z,"href","#the-repository-class"),f(D,"class","relative group"),f(Ve,"href","/docs/huggingface_hub/main/en/package_reference/repository#huggingface_hub.Repository"),f(Xe,"href","/docs/huggingface_hub/main/en/package_reference/repository#huggingface_hub.Repository"),f(Ae,"href","https://git-lfs.github.com/"),f(Ae,"rel","nofollow"),f(Ze,"href","/docs/huggingface_hub/main/en/package_reference/repository#huggingface_hub.Repository"),f(ee,"id","use-a-local-repository"),f(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ee,"href","#use-a-local-repository"),f(I,"class","relative group"),f(et,"href","/docs/huggingface_hub/main/en/package_reference/repository#huggingface_hub.Repository"),f(oe,"id","clone"),f(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(oe,"href","#clone"),f(T,"class","relative group"),f(tt,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo"),f(ae,"id","branch"),f(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ae,"href","#branch"),f(L,"class","relative group"),f(ot,"href","/docs/huggingface_hub/main/en/package_reference/repository#huggingface_hub.Repository.git_checkout"),f(re,"id","pull"),f(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(re,"href","#pull"),f(G,"class","relative group"),f(at,"href","/docs/huggingface_hub/main/en/package_reference/repository#huggingface_hub.Repository.git_pull")},m(e,p){t(document.head,S),n(e,zt,p),n(e,x,p),t(x,M),t(M,nt),m(pe,nt,null),t(x,pa),t(x,ht),t(ht,na),n(e,Kt,p),n(e,Le,p),t(Le,ha),n(e,Qt,p),n(e,k,p),t(k,ct),t(ct,ca),t(k,fa),t(k,ft),t(ft,ua),t(k,ga),t(k,ne),t(ne,ma),t(ne,Ge),t(Ge,ya),t(ne,_a),n(e,Vt,p),n(e,Be,p),t(Be,da),n(e,Xt,p),n(e,U,p),t(U,he),t(he,ut),t(ut,va),t(he,$a),m(ce,he,null),t(U,wa),t(U,E),t(E,fe),t(fe,ba),t(fe,Me),t(Me,Ea),t(fe,ka),t(E,ja),m(ue,E,null),t(E,Aa),t(E,ge),t(ge,Pa),t(ge,Ue),t(Ue,Ra),t(ge,qa),t(E,Ca),t(E,me),t(me,Sa),t(me,We),t(We,xa),t(me,Ha),n(e,Zt,p),n(e,H,p),t(H,W),t(W,gt),m(ye,gt,null),t(H,Na),t(H,mt),t(mt,Oa),n(e,eo,p),n(e,$,p),t($,Da),t($,Ye),t(Ye,Ia),t($,Ta),t($,yt),t(yt,Fa),t($,La),t($,_t),t(_t,Ga),t($,Ba),t($,dt),t(dt,Ma),t($,Ua),n(e,to,p),m(_e,e,p),n(e,oo,p),n(e,j,p),t(j,Wa),t(j,Je),t(Je,Ya),t(j,Ja),t(j,vt),t(vt,za),t(j,Ka),n(e,ao,p),m(de,e,p),n(e,ro,p),n(e,Y,p),t(Y,Qa),t(Y,$t),t($t,Va),t(Y,Xa),n(e,so,p),m(ve,e,p),n(e,lo,p),n(e,J,p),t(J,Za),t(J,ze),t(ze,er),t(J,tr),n(e,io,p),n(e,N,p),t(N,z),t(z,wt),m($e,wt,null),t(N,or),t(N,bt),t(bt,ar),n(e,po,p),n(e,K,p),t(K,rr),t(K,Ke),t(Ke,sr),t(K,lr),n(e,no,p),n(e,Q,p),t(Q,ir),t(Q,Et),t(Et,pr),t(Q,nr),n(e,ho,p),m(we,e,p),n(e,co,p),n(e,V,p),t(V,hr),t(V,kt),t(kt,cr),t(V,fr),n(e,fo,p),m(be,e,p),n(e,uo,p),n(e,O,p),t(O,X),t(X,jt),m(Ee,jt,null),t(O,ur),t(O,At),t(At,gr),n(e,go,p),n(e,Qe,p),t(Qe,mr),n(e,mo,p),m(ke,e,p),n(e,yo,p),n(e,D,p),t(D,Z),t(Z,Pt),m(je,Pt,null),t(D,yr),t(D,Rt),t(Rt,_r),n(e,_o,p),n(e,w,p),t(w,dr),t(w,Ve),t(Ve,vr),t(w,$r),t(w,Xe),t(Xe,wr),t(w,br),t(w,Ae),t(Ae,Er),t(w,kr),t(w,Ze),t(Ze,jr),t(w,Ar),n(e,vo,p),n(e,I,p),t(I,ee),t(ee,qt),m(Pe,qt,null),t(I,Pr),t(I,Ct),t(Ct,Rr),n(e,$o,p),n(e,te,p),t(te,qr),t(te,et),t(et,Cr),t(te,Sr),n(e,wo,p),m(Re,e,p),n(e,bo,p),n(e,T,p),t(T,oe),t(oe,St),m(qe,St,null),t(T,xr),t(T,xt),t(xt,Hr),n(e,Eo,p),n(e,A,p),t(A,Nr),t(A,Ht),t(Ht,Or),t(A,Dr),t(A,Nt),t(Nt,Ir),t(A,Tr),n(e,ko,p),m(Ce,e,p),n(e,jo,p),n(e,F,p),t(F,Ot),t(Ot,Fr),t(F,Lr),t(F,Dt),t(Dt,Gr),t(F,Br),n(e,Ao,p),m(Se,e,p),n(e,Po,p),n(e,P,p),t(P,Mr),t(P,It),t(It,Ur),t(P,Wr),t(P,tt),t(tt,Yr),t(P,Jr),n(e,Ro,p),m(xe,e,p),n(e,qo,p),n(e,R,p),t(R,zr),t(R,Tt),t(Tt,Kr),t(R,Qr),t(R,Ft),t(Ft,Vr),t(R,Xr),n(e,Co,p),m(He,e,p),n(e,So,p),n(e,L,p),t(L,ae),t(ae,Lt),m(Ne,Lt,null),t(L,Zr),t(L,Gt),t(Gt,es),n(e,xo,p),n(e,b,p),t(b,ts),t(b,ot),t(ot,os),t(b,as),t(b,Bt),t(Bt,rs),t(b,ss),t(b,Mt),t(Mt,ls),t(b,is),n(e,Ho,p),m(Oe,e,p),n(e,No,p),n(e,G,p),t(G,re),t(re,Ut),m(De,Ut,null),t(G,ps),t(G,Wt),t(Wt,ns),n(e,Oo,p),n(e,Ie,p),t(Ie,at),t(at,hs),t(Ie,cs),n(e,Do,p),m(Te,e,p),n(e,Io,p),n(e,se,p),t(se,fs),t(se,Yt),t(Yt,us),t(se,gs),n(e,To,p),m(Fe,e,p),Fo=!0},p:Hl,i(e){Fo||(y(pe.$$.fragment,e),y(ce.$$.fragment,e),y(ue.$$.fragment,e),y(ye.$$.fragment,e),y(_e.$$.fragment,e),y(de.$$.fragment,e),y(ve.$$.fragment,e),y($e.$$.fragment,e),y(we.$$.fragment,e),y(be.$$.fragment,e),y(Ee.$$.fragment,e),y(ke.$$.fragment,e),y(je.$$.fragment,e),y(Pe.$$.fragment,e),y(Re.$$.fragment,e),y(qe.$$.fragment,e),y(Ce.$$.fragment,e),y(Se.$$.fragment,e),y(xe.$$.fragment,e),y(He.$$.fragment,e),y(Ne.$$.fragment,e),y(Oe.$$.fragment,e),y(De.$$.fragment,e),y(Te.$$.fragment,e),y(Fe.$$.fragment,e),Fo=!0)},o(e){_(pe.$$.fragment,e),_(ce.$$.fragment,e),_(ue.$$.fragment,e),_(ye.$$.fragment,e),_(_e.$$.fragment,e),_(de.$$.fragment,e),_(ve.$$.fragment,e),_($e.$$.fragment,e),_(we.$$.fragment,e),_(be.$$.fragment,e),_(Ee.$$.fragment,e),_(ke.$$.fragment,e),_(je.$$.fragment,e),_(Pe.$$.fragment,e),_(Re.$$.fragment,e),_(qe.$$.fragment,e),_(Ce.$$.fragment,e),_(Se.$$.fragment,e),_(xe.$$.fragment,e),_(He.$$.fragment,e),_(Ne.$$.fragment,e),_(Oe.$$.fragment,e),_(De.$$.fragment,e),_(Te.$$.fragment,e),_(Fe.$$.fragment,e),Fo=!1},d(e){o(S),e&&o(zt),e&&o(x),d(pe),e&&o(Kt),e&&o(Le),e&&o(Qt),e&&o(k),e&&o(Vt),e&&o(Be),e&&o(Xt),e&&o(U),d(ce),d(ue),e&&o(Zt),e&&o(H),d(ye),e&&o(eo),e&&o($),e&&o(to),d(_e,e),e&&o(oo),e&&o(j),e&&o(ao),d(de,e),e&&o(ro),e&&o(Y),e&&o(so),d(ve,e),e&&o(lo),e&&o(J),e&&o(io),e&&o(N),d($e),e&&o(po),e&&o(K),e&&o(no),e&&o(Q),e&&o(ho),d(we,e),e&&o(co),e&&o(V),e&&o(fo),d(be,e),e&&o(uo),e&&o(O),d(Ee),e&&o(go),e&&o(Qe),e&&o(mo),d(ke,e),e&&o(yo),e&&o(D),d(je),e&&o(_o),e&&o(w),e&&o(vo),e&&o(I),d(Pe),e&&o($o),e&&o(te),e&&o(wo),d(Re,e),e&&o(bo),e&&o(T),d(qe),e&&o(Eo),e&&o(A),e&&o(ko),d(Ce,e),e&&o(jo),e&&o(F),e&&o(Ao),d(Se,e),e&&o(Po),e&&o(P),e&&o(Ro),d(xe,e),e&&o(qo),e&&o(R),e&&o(Co),d(He,e),e&&o(So),e&&o(L),d(Ne),e&&o(xo),e&&o(b),e&&o(Ho),d(Oe,e),e&&o(No),e&&o(G),d(De),e&&o(Oo),e&&o(Ie),e&&o(Do),d(Te,e),e&&o(Io),e&&o(se),e&&o(To),d(Fe,e)}}}const Dl={local:"create-and-manage-a-repository",sections:[{local:"create-a-repository",title:"Create a repository"},{local:"delete-a-repository",title:"Delete a repository"},{local:"change-repository-visibility",title:"Change repository visibility"},{local:"the-repository-class",sections:[{local:"use-a-local-repository",title:"Use a local repository"},{local:"clone",title:"Clone"},{local:"branch",title:"Branch"},{local:"pull",title:"Pull"}],title:"The Repository class"}],title:"Create and manage a repository"};function Il(ys){return Nl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gl extends ql{constructor(S){super();Cl(this,S,Il,Ol,Sl,{})}}export{Gl as default,Dl as metadata};
