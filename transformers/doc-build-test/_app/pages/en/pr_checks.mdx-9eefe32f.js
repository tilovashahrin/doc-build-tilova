import{S as As,i as Ps,s as Ts,e as s,k as c,w as m,t as l,L as xs,c as a,d as o,m as f,a as r,x as y,h as i,b as p,J as t,g as h,y as v,K as Cs,q as _,o as b,B as k}from"../../chunks/vendor-9e2b328e.js";import{I as kt}from"../../chunks/IconCopyLink-fd0e58fd.js";import{C as I}from"../../chunks/CodeBlock-b9ff96e9.js";import"../../chunks/CopyButton-4b97cbf7.js";function Ds(wo){let T,ue,w,P,Le,z,Eo,Re,go,$t,me,Ao,wt,E,qe,Po,To,Se,xo,Co,Ne,Do,Io,je,Oo,Et,ye,Lo,gt,ve,Ro,At,G,Pt,_e,qo,Tt,Y,xt,be,So,Ct,O,N,Be,K,No,Me,jo,Dt,x,Bo,He,Mo,Ho,Fe,Fo,Wo,It,ke,Jo,Ot,Q,Lt,$e,Uo,Rt,g,We,zo,Go,Je,Yo,Ko,Ue,Qo,Vo,ze,Xo,qt,j,Zo,Ge,el,tl,St,V,Nt,we,ol,jt,L,B,Ye,X,ll,Ke,il,Bt,C,sl,Qe,al,rl,Ve,nl,hl,Mt,Z,Ht,Ee,cl,Ft,R,M,Xe,ee,fl,Ze,pl,Wt,d,dl,et,ul,ml,tt,yl,vl,ot,_l,bl,lt,kl,$l,it,wl,El,st,gl,Al,Jt,te,Ut,D,Pl,at,Tl,xl,rt,Cl,Dl,zt,oe,Gt,ge,Il,Yt,le,Kt,Ae,Ol,Qt,q,H,nt,ie,Ll,ht,Rl,Vt,F,ql,ct,Sl,Nl,Xt,se,Zt,Pe,jl,eo,u,ae,Bl,ft,Ml,Hl,Fl,S,Wl,pt,Jl,Ul,dt,zl,Gl,Yl,re,Kl,ut,Ql,Vl,Xl,ne,Zl,mt,ei,ti,oi,he,li,yt,ii,si,ai,ce,ri,vt,ni,hi,to,Te,ci,oo,fe,lo,xe,fi,io,W,pe,pi,_t,di,ui,mi,de,yi,bt,vi,_i,so;return z=new kt({}),G=new I({props:{code:"pip install transformers[dev],",highlighted:"pip install transformers[dev]"}}),Y=new I({props:{code:"pip install -e .[dev],",highlighted:"pip install -e .[dev]"}}),K=new kt({}),Q=new I({props:{code:"python utils/tests_fetcher.py,",highlighted:"python utils/tests_fetcher.py"}}),V=new I({props:{code:"python -m pytest -n 8 --dist=loadfile -rA -s $(cat test_list.txt),",highlighted:'python -m pytest -n 8 --dist=loadfile -rA -s $(<span class="hljs-built_in">cat</span> test_list.txt)'}}),X=new kt({}),Z=new I({props:{code:"make html,",highlighted:"make html"}}),ee=new kt({}),te=new I({props:{code:"make style,",highlighted:"make style"}}),oe=new I({props:{code:"make quality,",highlighted:"make quality"}}),le=new I({props:{code:"make fixup,",highlighted:"make fixup"}}),ie=new kt({}),se=new I({props:{code:"make repo-consistency,",highlighted:"make repo-consistency"}}),fe=new I({props:{code:"make fix-copies,",highlighted:"make fix-copies"}}),{c(){T=s("meta"),ue=c(),w=s("h1"),P=s("a"),Le=s("span"),m(z.$$.fragment),Eo=c(),Re=s("span"),go=l("Checks on a Pull Request"),$t=c(),me=s("p"),Ao=l("When you open a pull request on \u{1F917} Transformers, a fair number of checks will be run to make sure the patch you are adding is not breaking anything existing. Those checks are of four types:"),wt=c(),E=s("ul"),qe=s("li"),Po=l("regular tests"),To=c(),Se=s("li"),xo=l("documentation build"),Co=c(),Ne=s("li"),Do=l("code and documentation style"),Io=c(),je=s("li"),Oo=l("general repository consistency"),Et=c(),ye=s("p"),Lo=l("In this document, we will take a stab at explaining what those various checks are and the reason behind them, as well as how to debug them locally if one of them fails on your PR."),gt=c(),ve=s("p"),Ro=l("Note that they all require you to have a dev install:"),At=c(),m(G.$$.fragment),Pt=c(),_e=s("p"),qo=l("or for an editable install:"),Tt=c(),m(Y.$$.fragment),xt=c(),be=s("p"),So=l("inside the Transformers repo."),Ct=c(),O=s("h2"),N=s("a"),Be=s("span"),m(K.$$.fragment),No=c(),Me=s("span"),jo=l("Tests"),Dt=c(),x=s("p"),Bo=l("All the jobs that begin with "),He=s("code"),Mo=l("ci/circleci: run_tests_"),Ho=l(" run parts of the Transformers testing suite. Each of those jobs focuses on a part of the library in a certain environment: for instance "),Fe=s("code"),Fo=l("ci/circleci: run_tests_pipelines_tf"),Wo=l(" runs the pipelines test in an environment where TensorFlow only is installed."),It=c(),ke=s("p"),Jo=l("Note that to avoid running tests when there is no real change in the modules they are testing, only part of the test suite is run each time: a utility is run to determine the differences in the library between before and after the PR (what GitHub shows you in the \u201CFiles changes\u201D tab) and picks the tests impacted by that diff. That utility can be run locally with:"),Ot=c(),m(Q.$$.fragment),Lt=c(),$e=s("p"),Uo=l("from the root of the Transformers repo. It will:"),Rt=c(),g=s("ol"),We=s("li"),zo=l("Check for each file in the diff if the changes are in the code or only in comments or docstrings. Only the files with real code changes are kept."),Go=c(),Je=s("li"),Yo=l("Build an internal map that gives for each file of the source code of the library all the files it recursively impacts. Module A is said to impact module B if module B imports module A. For the recursive impact, we need a chain of modules going from module A to module B in which each module imports the previous one."),Ko=c(),Ue=s("li"),Qo=l("Apply this map on the files gathered in step 1, which  gives us the list of model files impacted by the PR."),Vo=c(),ze=s("li"),Xo=l("Map each of those files to their corresponding test file(s) and get the list of tests to run."),qt=c(),j=s("p"),Zo=l("When executing the script locally, you should get the results of step 1, 3 and 4 printed and thus know which tests are run. The script will also create a file named "),Ge=s("code"),el=l("test_list.txt"),tl=l(" which contains the list of tests to run, and you can run them locally with the following command:"),St=c(),m(V.$$.fragment),Nt=c(),we=s("p"),ol=l("Just in case anything slipped through the cracks, the full test suite is also run daily."),jt=c(),L=s("h2"),B=s("a"),Ye=s("span"),m(X.$$.fragment),ll=c(),Ke=s("span"),il=l("Documentation build"),Bt=c(),C=s("p"),sl=l("The job "),Qe=s("code"),al=l("ci/circleci: build_doc"),rl=l(" runs a build of the documentation just to make sure everything will be okay once your PR is merged. If that steps fails, you can inspect it locally by going into the "),Ve=s("code"),nl=l("docs"),hl=l(" folder of the Transformers repo and then typing"),Mt=c(),m(Z.$$.fragment),Ht=c(),Ee=s("p"),cl=l("Sphinx is not known for its helpful error messages, so you might have to try a few things to really find the source of the error."),Ft=c(),R=s("h2"),M=s("a"),Xe=s("span"),m(ee.$$.fragment),fl=c(),Ze=s("span"),pl=l("Code and documentation style"),Wt=c(),d=s("p"),dl=l("Code formatting is applied to all the source files, the examples and the tests using "),et=s("code"),ul=l("black"),ml=l(" and "),tt=s("code"),yl=l("isort"),vl=l(". We also have a custom tool taking care of the formatting of docstrings and "),ot=s("code"),_l=l("rst"),bl=l(" files ("),lt=s("code"),kl=l("utils/style_doc.py"),$l=l("), as well as the order of the lazy imports performed in the Transformers "),it=s("code"),wl=l("__init__.py"),El=l(" files ("),st=s("code"),gl=l("utils/custom_init_isort.py"),Al=l("). All of this can be launched by executing"),Jt=c(),m(te.$$.fragment),Ut=c(),D=s("p"),Pl=l("The CI checks those have been applied inside the "),at=s("code"),Tl=l("ci/circleci: check_code_quality"),xl=l(" check. It also runs "),rt=s("code"),Cl=l("flake8"),Dl=l(", that will have a basic look at your code and will complain if it finds an undefined variable, or one that is not used. To run that check locally, use"),zt=c(),m(oe.$$.fragment),Gt=c(),ge=s("p"),Il=l("This can take a lot of time, so to run the same thing on only the files you modified in the current branch, run"),Yt=c(),m(le.$$.fragment),Kt=c(),Ae=s("p"),Ol=l("This last command will also run all the additional checks for the repository consistency. Let\u2019s have a look at them."),Qt=c(),q=s("h2"),H=s("a"),nt=s("span"),m(ie.$$.fragment),Ll=c(),ht=s("span"),Rl=l("Repository consistency"),Vt=c(),F=s("p"),ql=l("This regroups all the tests to make sure your PR leaves the repository in a good state, and is performed by the "),ct=s("code"),Sl=l("ci/circleci: check_repository_consistency"),Nl=l(" check. You can locally run that check by executing the following:"),Xt=c(),m(se.$$.fragment),Zt=c(),Pe=s("p"),jl=l("This checks that:"),eo=c(),u=s("ul"),ae=s("li"),Bl=l("All objects added to the init are documented (performed by "),ft=s("code"),Ml=l("utils/check_repo.py"),Hl=l(")"),Fl=c(),S=s("li"),Wl=l("All "),pt=s("code"),Jl=l("__init__.py"),Ul=l(" files have the same content in their two sections (performed by "),dt=s("code"),zl=l("utils/check_inits.py"),Gl=l(")"),Yl=c(),re=s("li"),Kl=l("All code identified as a copy from another module is consistent with the original (performed by "),ut=s("code"),Ql=l("utils/check_copies.py"),Vl=l(")"),Xl=c(),ne=s("li"),Zl=l("The translations of the READMEs and the index of the doc have the same model list as the main README (performed by "),mt=s("code"),ei=l("utils/check_copies.py"),ti=l(")"),oi=c(),he=s("li"),li=l("The auto-generated tables in the documentation are up to date (performed by "),yt=s("code"),ii=l("utils/check_table.py"),si=l(")"),ai=c(),ce=s("li"),ri=l("The library has all objects available even if not all optional dependencies are installed (performed by "),vt=s("code"),ni=l("utils/check_dummies.py"),hi=l(")"),to=c(),Te=s("p"),ci=l("Should this check fail, the first two items require manual fixing, the last four can be fixed automatically for you by running the command"),oo=c(),m(fe.$$.fragment),lo=c(),xe=s("p"),fi=l("Additional checks concern PRs that add new models, mainly that:"),io=c(),W=s("ul"),pe=s("li"),pi=l("All models added are in an Auto-mapping (performed by "),_t=s("code"),di=l("utils/check_repo.py"),ui=l(")"),mi=c(),de=s("li"),yi=l("All models are properly tested (performed by "),bt=s("code"),vi=l("utils/check_repo.py"),_i=l(")"),this.h()},l(e){const n=xs('[data-svelte="svelte-1phssyn"]',document.head);T=a(n,"META",{name:!0,content:!0}),n.forEach(o),ue=f(e),w=a(e,"H1",{class:!0});var ao=r(w);P=a(ao,"A",{id:!0,class:!0,href:!0});var bi=r(P);Le=a(bi,"SPAN",{});var ki=r(Le);y(z.$$.fragment,ki),ki.forEach(o),bi.forEach(o),Eo=f(ao),Re=a(ao,"SPAN",{});var $i=r(Re);go=i($i,"Checks on a Pull Request"),$i.forEach(o),ao.forEach(o),$t=f(e),me=a(e,"P",{});var wi=r(me);Ao=i(wi,"When you open a pull request on \u{1F917} Transformers, a fair number of checks will be run to make sure the patch you are adding is not breaking anything existing. Those checks are of four types:"),wi.forEach(o),wt=f(e),E=a(e,"UL",{});var J=r(E);qe=a(J,"LI",{});var Ei=r(qe);Po=i(Ei,"regular tests"),Ei.forEach(o),To=f(J),Se=a(J,"LI",{});var gi=r(Se);xo=i(gi,"documentation build"),gi.forEach(o),Co=f(J),Ne=a(J,"LI",{});var Ai=r(Ne);Do=i(Ai,"code and documentation style"),Ai.forEach(o),Io=f(J),je=a(J,"LI",{});var Pi=r(je);Oo=i(Pi,"general repository consistency"),Pi.forEach(o),J.forEach(o),Et=f(e),ye=a(e,"P",{});var Ti=r(ye);Lo=i(Ti,"In this document, we will take a stab at explaining what those various checks are and the reason behind them, as well as how to debug them locally if one of them fails on your PR."),Ti.forEach(o),gt=f(e),ve=a(e,"P",{});var xi=r(ve);Ro=i(xi,"Note that they all require you to have a dev install:"),xi.forEach(o),At=f(e),y(G.$$.fragment,e),Pt=f(e),_e=a(e,"P",{});var Ci=r(_e);qo=i(Ci,"or for an editable install:"),Ci.forEach(o),Tt=f(e),y(Y.$$.fragment,e),xt=f(e),be=a(e,"P",{});var Di=r(be);So=i(Di,"inside the Transformers repo."),Di.forEach(o),Ct=f(e),O=a(e,"H2",{class:!0});var ro=r(O);N=a(ro,"A",{id:!0,class:!0,href:!0});var Ii=r(N);Be=a(Ii,"SPAN",{});var Oi=r(Be);y(K.$$.fragment,Oi),Oi.forEach(o),Ii.forEach(o),No=f(ro),Me=a(ro,"SPAN",{});var Li=r(Me);jo=i(Li,"Tests"),Li.forEach(o),ro.forEach(o),Dt=f(e),x=a(e,"P",{});var Ce=r(x);Bo=i(Ce,"All the jobs that begin with "),He=a(Ce,"CODE",{});var Ri=r(He);Mo=i(Ri,"ci/circleci: run_tests_"),Ri.forEach(o),Ho=i(Ce," run parts of the Transformers testing suite. Each of those jobs focuses on a part of the library in a certain environment: for instance "),Fe=a(Ce,"CODE",{});var qi=r(Fe);Fo=i(qi,"ci/circleci: run_tests_pipelines_tf"),qi.forEach(o),Wo=i(Ce," runs the pipelines test in an environment where TensorFlow only is installed."),Ce.forEach(o),It=f(e),ke=a(e,"P",{});var Si=r(ke);Jo=i(Si,"Note that to avoid running tests when there is no real change in the modules they are testing, only part of the test suite is run each time: a utility is run to determine the differences in the library between before and after the PR (what GitHub shows you in the \u201CFiles changes\u201D tab) and picks the tests impacted by that diff. That utility can be run locally with:"),Si.forEach(o),Ot=f(e),y(Q.$$.fragment,e),Lt=f(e),$e=a(e,"P",{});var Ni=r($e);Uo=i(Ni,"from the root of the Transformers repo. It will:"),Ni.forEach(o),Rt=f(e),g=a(e,"OL",{});var U=r(g);We=a(U,"LI",{});var ji=r(We);zo=i(ji,"Check for each file in the diff if the changes are in the code or only in comments or docstrings. Only the files with real code changes are kept."),ji.forEach(o),Go=f(U),Je=a(U,"LI",{});var Bi=r(Je);Yo=i(Bi,"Build an internal map that gives for each file of the source code of the library all the files it recursively impacts. Module A is said to impact module B if module B imports module A. For the recursive impact, we need a chain of modules going from module A to module B in which each module imports the previous one."),Bi.forEach(o),Ko=f(U),Ue=a(U,"LI",{});var Mi=r(Ue);Qo=i(Mi,"Apply this map on the files gathered in step 1, which  gives us the list of model files impacted by the PR."),Mi.forEach(o),Vo=f(U),ze=a(U,"LI",{});var Hi=r(ze);Xo=i(Hi,"Map each of those files to their corresponding test file(s) and get the list of tests to run."),Hi.forEach(o),U.forEach(o),qt=f(e),j=a(e,"P",{});var no=r(j);Zo=i(no,"When executing the script locally, you should get the results of step 1, 3 and 4 printed and thus know which tests are run. The script will also create a file named "),Ge=a(no,"CODE",{});var Fi=r(Ge);el=i(Fi,"test_list.txt"),Fi.forEach(o),tl=i(no," which contains the list of tests to run, and you can run them locally with the following command:"),no.forEach(o),St=f(e),y(V.$$.fragment,e),Nt=f(e),we=a(e,"P",{});var Wi=r(we);ol=i(Wi,"Just in case anything slipped through the cracks, the full test suite is also run daily."),Wi.forEach(o),jt=f(e),L=a(e,"H2",{class:!0});var ho=r(L);B=a(ho,"A",{id:!0,class:!0,href:!0});var Ji=r(B);Ye=a(Ji,"SPAN",{});var Ui=r(Ye);y(X.$$.fragment,Ui),Ui.forEach(o),Ji.forEach(o),ll=f(ho),Ke=a(ho,"SPAN",{});var zi=r(Ke);il=i(zi,"Documentation build"),zi.forEach(o),ho.forEach(o),Bt=f(e),C=a(e,"P",{});var De=r(C);sl=i(De,"The job "),Qe=a(De,"CODE",{});var Gi=r(Qe);al=i(Gi,"ci/circleci: build_doc"),Gi.forEach(o),rl=i(De," runs a build of the documentation just to make sure everything will be okay once your PR is merged. If that steps fails, you can inspect it locally by going into the "),Ve=a(De,"CODE",{});var Yi=r(Ve);nl=i(Yi,"docs"),Yi.forEach(o),hl=i(De," folder of the Transformers repo and then typing"),De.forEach(o),Mt=f(e),y(Z.$$.fragment,e),Ht=f(e),Ee=a(e,"P",{});var Ki=r(Ee);cl=i(Ki,"Sphinx is not known for its helpful error messages, so you might have to try a few things to really find the source of the error."),Ki.forEach(o),Ft=f(e),R=a(e,"H2",{class:!0});var co=r(R);M=a(co,"A",{id:!0,class:!0,href:!0});var Qi=r(M);Xe=a(Qi,"SPAN",{});var Vi=r(Xe);y(ee.$$.fragment,Vi),Vi.forEach(o),Qi.forEach(o),fl=f(co),Ze=a(co,"SPAN",{});var Xi=r(Ze);pl=i(Xi,"Code and documentation style"),Xi.forEach(o),co.forEach(o),Wt=f(e),d=a(e,"P",{});var $=r(d);dl=i($,"Code formatting is applied to all the source files, the examples and the tests using "),et=a($,"CODE",{});var Zi=r(et);ul=i(Zi,"black"),Zi.forEach(o),ml=i($," and "),tt=a($,"CODE",{});var es=r(tt);yl=i(es,"isort"),es.forEach(o),vl=i($,". We also have a custom tool taking care of the formatting of docstrings and "),ot=a($,"CODE",{});var ts=r(ot);_l=i(ts,"rst"),ts.forEach(o),bl=i($," files ("),lt=a($,"CODE",{});var os=r(lt);kl=i(os,"utils/style_doc.py"),os.forEach(o),$l=i($,"), as well as the order of the lazy imports performed in the Transformers "),it=a($,"CODE",{});var ls=r(it);wl=i(ls,"__init__.py"),ls.forEach(o),El=i($," files ("),st=a($,"CODE",{});var is=r(st);gl=i(is,"utils/custom_init_isort.py"),is.forEach(o),Al=i($,"). All of this can be launched by executing"),$.forEach(o),Jt=f(e),y(te.$$.fragment,e),Ut=f(e),D=a(e,"P",{});var Ie=r(D);Pl=i(Ie,"The CI checks those have been applied inside the "),at=a(Ie,"CODE",{});var ss=r(at);Tl=i(ss,"ci/circleci: check_code_quality"),ss.forEach(o),xl=i(Ie," check. It also runs "),rt=a(Ie,"CODE",{});var as=r(rt);Cl=i(as,"flake8"),as.forEach(o),Dl=i(Ie,", that will have a basic look at your code and will complain if it finds an undefined variable, or one that is not used. To run that check locally, use"),Ie.forEach(o),zt=f(e),y(oe.$$.fragment,e),Gt=f(e),ge=a(e,"P",{});var rs=r(ge);Il=i(rs,"This can take a lot of time, so to run the same thing on only the files you modified in the current branch, run"),rs.forEach(o),Yt=f(e),y(le.$$.fragment,e),Kt=f(e),Ae=a(e,"P",{});var ns=r(Ae);Ol=i(ns,"This last command will also run all the additional checks for the repository consistency. Let\u2019s have a look at them."),ns.forEach(o),Qt=f(e),q=a(e,"H2",{class:!0});var fo=r(q);H=a(fo,"A",{id:!0,class:!0,href:!0});var hs=r(H);nt=a(hs,"SPAN",{});var cs=r(nt);y(ie.$$.fragment,cs),cs.forEach(o),hs.forEach(o),Ll=f(fo),ht=a(fo,"SPAN",{});var fs=r(ht);Rl=i(fs,"Repository consistency"),fs.forEach(o),fo.forEach(o),Vt=f(e),F=a(e,"P",{});var po=r(F);ql=i(po,"This regroups all the tests to make sure your PR leaves the repository in a good state, and is performed by the "),ct=a(po,"CODE",{});var ps=r(ct);Sl=i(ps,"ci/circleci: check_repository_consistency"),ps.forEach(o),Nl=i(po," check. You can locally run that check by executing the following:"),po.forEach(o),Xt=f(e),y(se.$$.fragment,e),Zt=f(e),Pe=a(e,"P",{});var ds=r(Pe);jl=i(ds,"This checks that:"),ds.forEach(o),eo=f(e),u=a(e,"UL",{});var A=r(u);ae=a(A,"LI",{});var uo=r(ae);Bl=i(uo,"All objects added to the init are documented (performed by "),ft=a(uo,"CODE",{});var us=r(ft);Ml=i(us,"utils/check_repo.py"),us.forEach(o),Hl=i(uo,")"),uo.forEach(o),Fl=f(A),S=a(A,"LI",{});var Oe=r(S);Wl=i(Oe,"All "),pt=a(Oe,"CODE",{});var ms=r(pt);Jl=i(ms,"__init__.py"),ms.forEach(o),Ul=i(Oe," files have the same content in their two sections (performed by "),dt=a(Oe,"CODE",{});var ys=r(dt);zl=i(ys,"utils/check_inits.py"),ys.forEach(o),Gl=i(Oe,")"),Oe.forEach(o),Yl=f(A),re=a(A,"LI",{});var mo=r(re);Kl=i(mo,"All code identified as a copy from another module is consistent with the original (performed by "),ut=a(mo,"CODE",{});var vs=r(ut);Ql=i(vs,"utils/check_copies.py"),vs.forEach(o),Vl=i(mo,")"),mo.forEach(o),Xl=f(A),ne=a(A,"LI",{});var yo=r(ne);Zl=i(yo,"The translations of the READMEs and the index of the doc have the same model list as the main README (performed by "),mt=a(yo,"CODE",{});var _s=r(mt);ei=i(_s,"utils/check_copies.py"),_s.forEach(o),ti=i(yo,")"),yo.forEach(o),oi=f(A),he=a(A,"LI",{});var vo=r(he);li=i(vo,"The auto-generated tables in the documentation are up to date (performed by "),yt=a(vo,"CODE",{});var bs=r(yt);ii=i(bs,"utils/check_table.py"),bs.forEach(o),si=i(vo,")"),vo.forEach(o),ai=f(A),ce=a(A,"LI",{});var _o=r(ce);ri=i(_o,"The library has all objects available even if not all optional dependencies are installed (performed by "),vt=a(_o,"CODE",{});var ks=r(vt);ni=i(ks,"utils/check_dummies.py"),ks.forEach(o),hi=i(_o,")"),_o.forEach(o),A.forEach(o),to=f(e),Te=a(e,"P",{});var $s=r(Te);ci=i($s,"Should this check fail, the first two items require manual fixing, the last four can be fixed automatically for you by running the command"),$s.forEach(o),oo=f(e),y(fe.$$.fragment,e),lo=f(e),xe=a(e,"P",{});var ws=r(xe);fi=i(ws,"Additional checks concern PRs that add new models, mainly that:"),ws.forEach(o),io=f(e),W=a(e,"UL",{});var bo=r(W);pe=a(bo,"LI",{});var ko=r(pe);pi=i(ko,"All models added are in an Auto-mapping (performed by "),_t=a(ko,"CODE",{});var Es=r(_t);di=i(Es,"utils/check_repo.py"),Es.forEach(o),ui=i(ko,")"),ko.forEach(o),mi=f(bo),de=a(bo,"LI",{});var $o=r(de);yi=i($o,"All models are properly tested (performed by "),bt=a($o,"CODE",{});var gs=r(bt);vi=i(gs,"utils/check_repo.py"),gs.forEach(o),_i=i($o,")"),$o.forEach(o),bo.forEach(o),this.h()},h(){p(T,"name","hf:doc:metadata"),p(T,"content",JSON.stringify(Is)),p(P,"id","checks-on-a-pull-request"),p(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(P,"href","#checks-on-a-pull-request"),p(w,"class","relative group"),p(N,"id","tests"),p(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(N,"href","#tests"),p(O,"class","relative group"),p(B,"id","documentation-build"),p(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(B,"href","#documentation-build"),p(L,"class","relative group"),p(M,"id","code-and-documentation-style"),p(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(M,"href","#code-and-documentation-style"),p(R,"class","relative group"),p(H,"id","repository-consistency"),p(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(H,"href","#repository-consistency"),p(q,"class","relative group")},m(e,n){t(document.head,T),h(e,ue,n),h(e,w,n),t(w,P),t(P,Le),v(z,Le,null),t(w,Eo),t(w,Re),t(Re,go),h(e,$t,n),h(e,me,n),t(me,Ao),h(e,wt,n),h(e,E,n),t(E,qe),t(qe,Po),t(E,To),t(E,Se),t(Se,xo),t(E,Co),t(E,Ne),t(Ne,Do),t(E,Io),t(E,je),t(je,Oo),h(e,Et,n),h(e,ye,n),t(ye,Lo),h(e,gt,n),h(e,ve,n),t(ve,Ro),h(e,At,n),v(G,e,n),h(e,Pt,n),h(e,_e,n),t(_e,qo),h(e,Tt,n),v(Y,e,n),h(e,xt,n),h(e,be,n),t(be,So),h(e,Ct,n),h(e,O,n),t(O,N),t(N,Be),v(K,Be,null),t(O,No),t(O,Me),t(Me,jo),h(e,Dt,n),h(e,x,n),t(x,Bo),t(x,He),t(He,Mo),t(x,Ho),t(x,Fe),t(Fe,Fo),t(x,Wo),h(e,It,n),h(e,ke,n),t(ke,Jo),h(e,Ot,n),v(Q,e,n),h(e,Lt,n),h(e,$e,n),t($e,Uo),h(e,Rt,n),h(e,g,n),t(g,We),t(We,zo),t(g,Go),t(g,Je),t(Je,Yo),t(g,Ko),t(g,Ue),t(Ue,Qo),t(g,Vo),t(g,ze),t(ze,Xo),h(e,qt,n),h(e,j,n),t(j,Zo),t(j,Ge),t(Ge,el),t(j,tl),h(e,St,n),v(V,e,n),h(e,Nt,n),h(e,we,n),t(we,ol),h(e,jt,n),h(e,L,n),t(L,B),t(B,Ye),v(X,Ye,null),t(L,ll),t(L,Ke),t(Ke,il),h(e,Bt,n),h(e,C,n),t(C,sl),t(C,Qe),t(Qe,al),t(C,rl),t(C,Ve),t(Ve,nl),t(C,hl),h(e,Mt,n),v(Z,e,n),h(e,Ht,n),h(e,Ee,n),t(Ee,cl),h(e,Ft,n),h(e,R,n),t(R,M),t(M,Xe),v(ee,Xe,null),t(R,fl),t(R,Ze),t(Ze,pl),h(e,Wt,n),h(e,d,n),t(d,dl),t(d,et),t(et,ul),t(d,ml),t(d,tt),t(tt,yl),t(d,vl),t(d,ot),t(ot,_l),t(d,bl),t(d,lt),t(lt,kl),t(d,$l),t(d,it),t(it,wl),t(d,El),t(d,st),t(st,gl),t(d,Al),h(e,Jt,n),v(te,e,n),h(e,Ut,n),h(e,D,n),t(D,Pl),t(D,at),t(at,Tl),t(D,xl),t(D,rt),t(rt,Cl),t(D,Dl),h(e,zt,n),v(oe,e,n),h(e,Gt,n),h(e,ge,n),t(ge,Il),h(e,Yt,n),v(le,e,n),h(e,Kt,n),h(e,Ae,n),t(Ae,Ol),h(e,Qt,n),h(e,q,n),t(q,H),t(H,nt),v(ie,nt,null),t(q,Ll),t(q,ht),t(ht,Rl),h(e,Vt,n),h(e,F,n),t(F,ql),t(F,ct),t(ct,Sl),t(F,Nl),h(e,Xt,n),v(se,e,n),h(e,Zt,n),h(e,Pe,n),t(Pe,jl),h(e,eo,n),h(e,u,n),t(u,ae),t(ae,Bl),t(ae,ft),t(ft,Ml),t(ae,Hl),t(u,Fl),t(u,S),t(S,Wl),t(S,pt),t(pt,Jl),t(S,Ul),t(S,dt),t(dt,zl),t(S,Gl),t(u,Yl),t(u,re),t(re,Kl),t(re,ut),t(ut,Ql),t(re,Vl),t(u,Xl),t(u,ne),t(ne,Zl),t(ne,mt),t(mt,ei),t(ne,ti),t(u,oi),t(u,he),t(he,li),t(he,yt),t(yt,ii),t(he,si),t(u,ai),t(u,ce),t(ce,ri),t(ce,vt),t(vt,ni),t(ce,hi),h(e,to,n),h(e,Te,n),t(Te,ci),h(e,oo,n),v(fe,e,n),h(e,lo,n),h(e,xe,n),t(xe,fi),h(e,io,n),h(e,W,n),t(W,pe),t(pe,pi),t(pe,_t),t(_t,di),t(pe,ui),t(W,mi),t(W,de),t(de,yi),t(de,bt),t(bt,vi),t(de,_i),so=!0},p:Cs,i(e){so||(_(z.$$.fragment,e),_(G.$$.fragment,e),_(Y.$$.fragment,e),_(K.$$.fragment,e),_(Q.$$.fragment,e),_(V.$$.fragment,e),_(X.$$.fragment,e),_(Z.$$.fragment,e),_(ee.$$.fragment,e),_(te.$$.fragment,e),_(oe.$$.fragment,e),_(le.$$.fragment,e),_(ie.$$.fragment,e),_(se.$$.fragment,e),_(fe.$$.fragment,e),so=!0)},o(e){b(z.$$.fragment,e),b(G.$$.fragment,e),b(Y.$$.fragment,e),b(K.$$.fragment,e),b(Q.$$.fragment,e),b(V.$$.fragment,e),b(X.$$.fragment,e),b(Z.$$.fragment,e),b(ee.$$.fragment,e),b(te.$$.fragment,e),b(oe.$$.fragment,e),b(le.$$.fragment,e),b(ie.$$.fragment,e),b(se.$$.fragment,e),b(fe.$$.fragment,e),so=!1},d(e){o(T),e&&o(ue),e&&o(w),k(z),e&&o($t),e&&o(me),e&&o(wt),e&&o(E),e&&o(Et),e&&o(ye),e&&o(gt),e&&o(ve),e&&o(At),k(G,e),e&&o(Pt),e&&o(_e),e&&o(Tt),k(Y,e),e&&o(xt),e&&o(be),e&&o(Ct),e&&o(O),k(K),e&&o(Dt),e&&o(x),e&&o(It),e&&o(ke),e&&o(Ot),k(Q,e),e&&o(Lt),e&&o($e),e&&o(Rt),e&&o(g),e&&o(qt),e&&o(j),e&&o(St),k(V,e),e&&o(Nt),e&&o(we),e&&o(jt),e&&o(L),k(X),e&&o(Bt),e&&o(C),e&&o(Mt),k(Z,e),e&&o(Ht),e&&o(Ee),e&&o(Ft),e&&o(R),k(ee),e&&o(Wt),e&&o(d),e&&o(Jt),k(te,e),e&&o(Ut),e&&o(D),e&&o(zt),k(oe,e),e&&o(Gt),e&&o(ge),e&&o(Yt),k(le,e),e&&o(Kt),e&&o(Ae),e&&o(Qt),e&&o(q),k(ie),e&&o(Vt),e&&o(F),e&&o(Xt),k(se,e),e&&o(Zt),e&&o(Pe),e&&o(eo),e&&o(u),e&&o(to),e&&o(Te),e&&o(oo),k(fe,e),e&&o(lo),e&&o(xe),e&&o(io),e&&o(W)}}}const Is={local:"checks-on-a-pull-request",sections:[{local:"tests",title:"Tests"},{local:"documentation-build",title:"Documentation build"},{local:"code-and-documentation-style",title:"Code and documentation style"},{local:"repository-consistency",title:"Repository consistency"}],title:"Checks on a Pull Request"};function Os(wo,T,ue){let{fw:w}=T;return wo.$$set=P=>{"fw"in P&&ue(0,w=P.fw)},[w]}class Ns extends As{constructor(T){super();Ps(this,T,Os,Ds,Ts,{fw:0})}}export{Ns as default,Is as metadata};
