import{S as Ye,i as Ze,s as et,e as o,k as s,w as Ge,t as l,M as tt,c as a,d as t,m as c,a as r,x as Ke,h as d,b as _,G as n,g as f,y as He,L as nt,q as Je,o as Qe,B as Xe,v as ot}from"../../chunks/vendor-hf-doc-builder.js";import{D as at}from"../../chunks/Docstring-hf-doc-builder.js";import{I as rt}from"../../chunks/IconCopyLink-hf-doc-builder.js";function it(Ee){let p,W,w,v,I,x,ee,N,te,k,F,ne,z,A,oe,U,b,ae,R,re,ie,B,E,se,G,m,D,le,ce,$,de,fe,O,me,ue,C,he,pe,P,we,K,L,ge,H,u,S,_e,ve,V,be,ye,j,xe,Re,M,Te,J,g,T,Fe,q,Ae,Q;return x=new rt({}),T=new at({props:{name:"class simulate.RewardFunction",anchor:"simulate.RewardFunction",parameters:[{name:"type",val:": typing.Optional[str] = None"},{name:"entity_a",val:": typing.Optional[typing.Any] = None"},{name:"entity_b",val:": typing.Optional[typing.Any] = None"},{name:"distance_metric",val:": typing.Optional[str] = None"},{name:"direction",val:": typing.Optional[typing.List[float]] = None"},{name:"scalar",val:": float = 1.0"},{name:"threshold",val:": float = 1.0"},{name:"is_terminal",val:": bool = False"},{name:"is_collectable",val:": bool = False"},{name:"trigger_once",val:": bool = True"},{name:"reward_function_a",val:": dataclasses.InitVar[typing.Optional[ForwardRef('RewardFunction')]] = None"},{name:"reward_function_b",val:": dataclasses.InitVar[typing.Optional[ForwardRef('RewardFunction')]] = None"},{name:"name",val:": dataclasses.InitVar[typing.Optional[str]] = None"},{name:"position",val:": dataclasses.InitVar[typing.Optional[typing.List[float]]] = <property object at 0x7f191ace75e0>"},{name:"rotation",val:": dataclasses.InitVar[typing.Optional[typing.List[float]]] = <property object at 0x7f191ace7450>"},{name:"scaling",val:": dataclasses.InitVar[typing.Union[float, typing.List[float], NoneType]] = <property object at 0x7f191ace74a0>"},{name:"transformation_matrix",val:": dataclasses.InitVar[typing.Optional[typing.List[float]]] = <property object at 0x7f191ace74f0>"},{name:"parent",val:": dataclasses.InitVar[typing.Optional[typing.Any]] = None"},{name:"children",val:": dataclasses.InitVar[typing.Optional[typing.List[typing.Any]]] = None"},{name:"created_from_file",val:": dataclasses.InitVar[typing.Optional[str]] = None"}],parametersDescription:[{anchor:"simulate.RewardFunction.type",description:`<strong>type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;dense&quot;</code>) &#x2014;
The type of reward function. Must be one of the following:
[
&#x201C;dense&#x201D;,
&#x201C;sparse&#x201D;,
&#x201C;or&#x201D;,
&#x201C;and&#x201D;,
&#x201C;not&#x201D;,
&#x201C;see&#x201D;,
&#x201C;timeout&#x201D;
]`,name:"type"},{anchor:"simulate.RewardFunction.entity_a",description:`<strong>entity_a</strong> (<code>Asset</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The first entity in the reward function
entity_b &#x2014; (<code>Asset</code>, <em>optional</em>, defaults to <code>None</code>):
The second entity in the reward function`,name:"entity_a"},{anchor:"simulate.RewardFunction.distance_metric",description:`<strong>distance_metric</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;euclidean&quot;</code>) &#x2014;
The distance metric to use. Must be one of the following:
[
&#x201C;euclidean&#x201D;
]`,name:"distance_metric"},{anchor:"simulate.RewardFunction.direction",description:`<strong>direction</strong> (List[float], <em>optional</em>, defaults to <code>[1.0, 0.0, 0.0]</code>) &#x2014;
The direction to use for the reward function.`,name:"direction"},{anchor:"simulate.RewardFunction.scalar",description:`<strong>scalar</strong> (<code>float</code>, <em>optional</em>, defaults to <code>1.0</code>) &#x2014;
The scalar to modify the reward by a constant. Setting to -1 will make the reward behave as a cost.`,name:"scalar"},{anchor:"simulate.RewardFunction.threshold",description:`<strong>threshold</strong> (<code>float</code>, <em>optional</em>, defaults to <code>1.0</code>) &#x2014;
The distance threshold to give the reward`,name:"threshold"},{anchor:"simulate.RewardFunction.is_terminal",description:`<strong>is_terminal</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the reward is terminal`,name:"is_terminal"},{anchor:"simulate.RewardFunction.is_collectable",description:`<strong>is_collectable</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the reward is collectable`,name:"is_collectable"},{anchor:"simulate.RewardFunction.trigger_once",description:`<strong>trigger_once</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the reward is triggered once`,name:"trigger_once"},{anchor:"simulate.RewardFunction.reward_function_a",description:`<strong>reward_function_a</strong> (<code>RewardFunction</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
When doing combination of rewards (and, or), the first reward function that are to be combined`,name:"reward_function_a"},{anchor:"simulate.RewardFunction.reward_function_b",description:`<strong>reward_function_b</strong> (<code>RewardFunction</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
When doing combination of rewards (and, or), the second reward function that are to be combined`,name:"reward_function_b"},{anchor:"simulate.RewardFunction.name",description:`<strong>name</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The name of the reward function`,name:"name"},{anchor:"simulate.RewardFunction.position",description:`<strong>position</strong> (List[float], <em>optional</em>, defaults to <code>[0.0, 0.0, 0.0]</code>) &#x2014;
The position of the reward function.`,name:"position"},{anchor:"simulate.RewardFunction.rotation",description:`<strong>rotation</strong> (List[float], <em>optional</em>, defaults to <code>[0.0, 0.0, 0.0]</code>) &#x2014;
The rotation of the reward function.`,name:"rotation"},{anchor:"simulate.RewardFunction.scaling",description:`<strong>scaling</strong> (List[float], <em>optional</em>, defaults to <code>[1.0, 1.0, 1.0]</code>) &#x2014;
The scaling of the reward function.`,name:"scaling"},{anchor:"simulate.RewardFunction.transformation_matrix",description:`<strong>transformation_matrix</strong> (List[float], <em>optional</em>, defaults to <code>None</code>) &#x2014;
The transformation matrix of the reward function.`,name:"transformation_matrix"},{anchor:"simulate.RewardFunction.parent",description:`<strong>parent</strong> (<code>Asset</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The parent of the reward function.`,name:"parent"},{anchor:"simulate.RewardFunction.children",description:`<strong>children</strong> (<code>List[Asset]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The children of the reward function.`,name:"children"},{anchor:"simulate.RewardFunction.created_from_file",description:`<strong>created_from_file</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The file path of the file from which the reward function was created.`,name:"created_from_file"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/assets/reward_functions.py#L31"}}),{c(){p=o("meta"),W=s(),w=o("h1"),v=o("a"),I=o("span"),Ge(x.$$.fragment),ee=s(),N=o("span"),te=l("Reward Functions"),k=s(),F=o("p"),ne=l(`\u{1F917} Simulate provides a system to define simple and complex reward functions. This is achieved through the combination of \u201Cleaf\u201D reward
functions, such as Sparse and Dense rewards functions, and predicate reward functions.`),z=s(),A=o("p"),oe=l("(LINK TO REWARD PREDICATE DIAGRAM)"),U=s(),b=o("p"),ae=l(`Reward functions can be parameterized with a variety of distance metrics. Currently \u201Ceuclidean\u201D, \u201Ccosine\u201D and \u201Cbest_euclidean\u201D are supported.
Through the combination of predicates and leaf rewards, complex reward functions can be created. A good example of the is the
`),R=o("a"),re=l("Move Boxes"),ie=l(" example."),B=s(),E=o("p"),se=l("The following \u201Cleaf\u201D rewards are available in Simulate:"),G=s(),m=o("ul"),D=o("li"),le=l("\u201Cdense\u201D: A reward that is non-zero at every time-step."),ce=s(),$=o("li"),de=l("\u201Csparse\u201D: A reward that is triggered by the proximity of another object."),fe=s(),O=o("li"),me=l("\u201Ctimeout\u201D: A timeout reward that is triggered after a certain number of time-steps."),ue=s(),C=o("li"),he=l("\u201Csee\u201D: Triggered when an object is in the field of view of an Actor."),pe=s(),P=o("li"),we=l("\u201Cangle_to\u201D: Triggered when the angle between two objects and a certain direction is less that a threshold."),K=s(),L=o("p"),ge=l("The \u201Cleaf\u201D reward functions can be combined in a tree structure with the following predicate functions:"),H=s(),u=o("ul"),S=o("li"),_e=l("\u201Cnot\u201D: Triggers when a reward is not triggered."),ve=s(),V=o("li"),be=l("\u201Cand\u201D: Triggers when both children of this node are returning a positive reward."),ye=s(),j=o("li"),xe=l("\u201Cor\u201D: Triggers when one or both of the children of this node are returning a positive reward."),Re=s(),M=o("li"),Te=l("\u201Cxor\u201D: Triggers when  only one of the children of this node are returning a positive reward."),J=s(),g=o("div"),Ge(T.$$.fragment),Fe=s(),q=o("p"),Ae=l("A reinforcement learning reward function."),this.h()},l(e){const i=tt('[data-svelte="svelte-1phssyn"]',document.head);p=a(i,"META",{name:!0,content:!0}),i.forEach(t),W=c(e),w=a(e,"H1",{class:!0});var X=r(w);v=a(X,"A",{id:!0,class:!0,href:!0});var Le=r(v);I=a(Le,"SPAN",{});var Ie=r(I);Ke(x.$$.fragment,Ie),Ie.forEach(t),Le.forEach(t),ee=c(X),N=a(X,"SPAN",{});var Ne=r(N);te=d(Ne,"Reward Functions"),Ne.forEach(t),X.forEach(t),k=c(e),F=a(e,"P",{});var De=r(F);ne=d(De,`\u{1F917} Simulate provides a system to define simple and complex reward functions. This is achieved through the combination of \u201Cleaf\u201D reward
functions, such as Sparse and Dense rewards functions, and predicate reward functions.`),De.forEach(t),z=c(e),A=a(e,"P",{});var $e=r(A);oe=d($e,"(LINK TO REWARD PREDICATE DIAGRAM)"),$e.forEach(t),U=c(e),b=a(e,"P",{});var Y=r(b);ae=d(Y,`Reward functions can be parameterized with a variety of distance metrics. Currently \u201Ceuclidean\u201D, \u201Ccosine\u201D and \u201Cbest_euclidean\u201D are supported.
Through the combination of predicates and leaf rewards, complex reward functions can be created. A good example of the is the
`),R=a(Y,"A",{href:!0,rel:!0});var Oe=r(R);re=d(Oe,"Move Boxes"),Oe.forEach(t),ie=d(Y," example."),Y.forEach(t),B=c(e),E=a(e,"P",{});var Ce=r(E);se=d(Ce,"The following \u201Cleaf\u201D rewards are available in Simulate:"),Ce.forEach(t),G=c(e),m=a(e,"UL",{});var h=r(m);D=a(h,"LI",{});var Pe=r(D);le=d(Pe,"\u201Cdense\u201D: A reward that is non-zero at every time-step."),Pe.forEach(t),ce=c(h),$=a(h,"LI",{});var Se=r($);de=d(Se,"\u201Csparse\u201D: A reward that is triggered by the proximity of another object."),Se.forEach(t),fe=c(h),O=a(h,"LI",{});var Ve=r(O);me=d(Ve,"\u201Ctimeout\u201D: A timeout reward that is triggered after a certain number of time-steps."),Ve.forEach(t),ue=c(h),C=a(h,"LI",{});var je=r(C);he=d(je,"\u201Csee\u201D: Triggered when an object is in the field of view of an Actor."),je.forEach(t),pe=c(h),P=a(h,"LI",{});var Me=r(P);we=d(Me,"\u201Cangle_to\u201D: Triggered when the angle between two objects and a certain direction is less that a threshold."),Me.forEach(t),h.forEach(t),K=c(e),L=a(e,"P",{});var qe=r(L);ge=d(qe,"The \u201Cleaf\u201D reward functions can be combined in a tree structure with the following predicate functions:"),qe.forEach(t),H=c(e),u=a(e,"UL",{});var y=r(u);S=a(y,"LI",{});var We=r(S);_e=d(We,"\u201Cnot\u201D: Triggers when a reward is not triggered."),We.forEach(t),ve=c(y),V=a(y,"LI",{});var ke=r(V);be=d(ke,"\u201Cand\u201D: Triggers when both children of this node are returning a positive reward."),ke.forEach(t),ye=c(y),j=a(y,"LI",{});var ze=r(j);xe=d(ze,"\u201Cor\u201D: Triggers when one or both of the children of this node are returning a positive reward."),ze.forEach(t),Re=c(y),M=a(y,"LI",{});var Ue=r(M);Te=d(Ue,"\u201Cxor\u201D: Triggers when  only one of the children of this node are returning a positive reward."),Ue.forEach(t),y.forEach(t),J=c(e),g=a(e,"DIV",{class:!0});var Z=r(g);Ke(T.$$.fragment,Z),Fe=c(Z),q=a(Z,"P",{});var Be=r(q);Ae=d(Be,"A reinforcement learning reward function."),Be.forEach(t),Z.forEach(t),this.h()},h(){_(p,"name","hf:doc:metadata"),_(p,"content",JSON.stringify(st)),_(v,"id","simulate.RewardFunction"),_(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(v,"href","#simulate.RewardFunction"),_(w,"class","relative group"),_(R,"href","https://github.com/huggingface/simulate/blob/main/examples/rl/sb3_move_boxes.py"),_(R,"rel","nofollow"),_(g,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,i){n(document.head,p),f(e,W,i),f(e,w,i),n(w,v),n(v,I),He(x,I,null),n(w,ee),n(w,N),n(N,te),f(e,k,i),f(e,F,i),n(F,ne),f(e,z,i),f(e,A,i),n(A,oe),f(e,U,i),f(e,b,i),n(b,ae),n(b,R),n(R,re),n(b,ie),f(e,B,i),f(e,E,i),n(E,se),f(e,G,i),f(e,m,i),n(m,D),n(D,le),n(m,ce),n(m,$),n($,de),n(m,fe),n(m,O),n(O,me),n(m,ue),n(m,C),n(C,he),n(m,pe),n(m,P),n(P,we),f(e,K,i),f(e,L,i),n(L,ge),f(e,H,i),f(e,u,i),n(u,S),n(S,_e),n(u,ve),n(u,V),n(V,be),n(u,ye),n(u,j),n(j,xe),n(u,Re),n(u,M),n(M,Te),f(e,J,i),f(e,g,i),He(T,g,null),n(g,Fe),n(g,q),n(q,Ae),Q=!0},p:nt,i(e){Q||(Je(x.$$.fragment,e),Je(T.$$.fragment,e),Q=!0)},o(e){Qe(x.$$.fragment,e),Qe(T.$$.fragment,e),Q=!1},d(e){t(p),e&&t(W),e&&t(w),Xe(x),e&&t(k),e&&t(F),e&&t(z),e&&t(A),e&&t(U),e&&t(b),e&&t(B),e&&t(E),e&&t(G),e&&t(m),e&&t(K),e&&t(L),e&&t(H),e&&t(u),e&&t(J),e&&t(g),Xe(T)}}}const st={local:"simulate.RewardFunction",title:"Reward Functions"};function lt(Ee){return ot(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mt extends Ye{constructor(p){super();Ze(this,p,lt,it,et,{})}}export{mt as default,st as metadata};
