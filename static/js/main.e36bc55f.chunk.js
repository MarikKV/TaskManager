(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(22),o=t.n(r),l=(t(93),t(7)),i=t(8),c=t(10),m=t(9),d=t(11),u=t(34),p=t(32),h=t(40),b=t(24),k=t(15),E={email:"",password:""},T={email:"",password:"",repeatPassword:"",nickname:"",disabled:"disabled"},g={taskname:"",taskdescribe:"",shareTo:"",share:"false",deadline:"",logedIn:""},f={taskname:"",taskdescribe:""},_=Object(h.b)({signin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SIGNIN_CHANGE_EMAIL_TEXT":return Object(k.a)({},e,{email:a.payload});case"SIGNIN_CHANGE_PASSWORD_TEXT":return Object(k.a)({},e,{password:a.payload})}return e},signup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SIGNUP_CHANGE_EMAIL_TEXT":return Object(k.a)({},e,{email:a.payload});case"SIGNUP_CHANGE_PASSWORD_TEXT":return Object(k.a)({},e,{password:a.payload});case"SIGNUP_CHANGE_REPEAT_PASSWORD_TEXT":return Object(k.a)({},e,{repeatPassword:a.payload});case"SIGNUP_CHANGE_NICKNAME_TEXT":return Object(k.a)({},e,{nickname:a.payload});case"SIGNUP_CHANGE_DISABLED":return Object(k.a)({},e,{disabled:a.payload})}return e},addtask:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_TASKNAME_TEXT":return Object(k.a)({},e,{taskname:a.payload});case"ADD_TASKDESCRIBE_TEXT":return Object(k.a)({},e,{taskdescribe:a.payload});case"ADD_SHARE_TO_TEXT":return Object(k.a)({},e,{shareTo:a.payload});case"ADD_TASK_DEADLINE_CHANGE_DATE":return Object(k.a)({},e,{deadline:a.payload});case"ADD_TASK_SHARE":return Object(k.a)({},e,{share:a.payload})}return e},edittask:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_TASKNAME_TEXT":return Object(k.a)({},e,{taskname:a.payload});case"ADD_TASKDESCRIBE_TEXT":return Object(k.a)({},e,{taskdescribe:a.payload})}return e}}),v=t(51),S=t(69),O=(t(35),function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(v.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},n.a.createElement(v.a.Brand,{href:"home"},"TaskManager"),n.a.createElement(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(v.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(S.a,{className:"mr-auto"},n.a.createElement(u.b,{to:"/home"},"Home"),n.a.createElement(u.b,{to:"/tasks"},"My tasks"),n.a.createElement(u.b,{to:"/newTask"},"Create new task")),n.a.createElement(S.a,null,n.a.createElement(u.b,{to:"/SignIn"},"SignIn"),n.a.createElement(u.b,{to:"/SignUp"},"SignUp"))))}}]),a}(s.Component)),y=t(18),C=t(118),w=t(44),j=t(6),N=t(47),x=t(5),I=t(17),A=t.n(I),D=(s.Component,N.a),P=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(D,{show:this.props.show,onHide:this.props.onHide,refreshTasks:this.props.refreshTasks,task:this.props.task,taskname:this.props.taskname,taskdescribe:this.props.taskdescribe,setTasknameText:this.props.setTasknameText,setTaskdescribeText:this.props.setTaskdescribeText})}}]),a}(s.Component),G={setTasknameText:function(e){return{type:"ADD_TASKNAME_TEXT",payload:e}},setTaskdescribeText:function(e){return{type:"ADD_TASKDESCRIBE_TEXT",payload:e}}},H=Object(b.b)(function(e){return{taskname:e.edittask.taskname,taskdescribe:e.edittask.taskdescribe}},G)(P),R=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={taskToEdit:"",showModal:!1,users:"",username:"",error:null,isLoaded:!1,items:[],shareItems:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e,a=JSON.parse(localStorage.getItem("users")),t=localStorage.getItem("CurrentUser"),s=localStorage.getItem("CurrentUserEmail"),n=[];for(e in a){if(a[e].name==t){var r=void 0,o=[];for(r in a[e].tasks)o.push(a[e].tasks[r]),localStorage.setItem("users",JSON.stringify(a));this.setState({items:o})}var l=void 0;for(l in a[e].tasks)a[e].tasks[l].shareTo==s&&n.push(a[e].tasks[l]),this.setState({shareItems:n})}this.setState({isLoaded:!0})}},{key:"deleteTask",value:function(e){var a=this;console.log("deleted: ",e);var t=e.id;this.setState({isLoaded:!1});var s,n=JSON.parse(localStorage.getItem("users")),r=localStorage.getItem("CurrentUser");for(s in n)if(n[s].name==r){n[s].tasks.splice(t,1),console.log(n[s].tasks);var o=void 0,l=[];for(o in n[s].tasks)n[s].tasks[o].id>=t&&(console.log(n[s].tasks[o]),n[s].tasks[o].id--),l.push(n[s].tasks[o]);this.setState({items:l})}localStorage.setItem("users",JSON.stringify(n)),setTimeout(function(){return a.setState({isLoaded:!0})},800)}},{key:"render",value:function(){var e=this,a=this.state,t=a.error,s=a.isLoaded,r=a.items,o=a.shareItems;return t?n.a.createElement("div",null,"Error: ",t.message):s?n.a.createElement(y.a,null,n.a.createElement("div",null,n.a.createElement("h1",null,"My tasks"),r.map(function(a){return n.a.createElement("div",{className:A.a.task_block,key:a.taskname},n.a.createElement(y.a,{className:"text-center",key:a.taskname},n.a.createElement(y.a.Header,null,"Shared to: ",n.a.createElement("b",null,a.shareTo)),n.a.createElement(y.a.Body,null,n.a.createElement(y.a.Title,null,a.taskname),n.a.createElement(y.a.Text,null,a.taskdescribe,n.a.createElement("br",null)),n.a.createElement(C.a,null,n.a.createElement(w.a,{variant:"primary",onClick:function(){return e.setState({showModal:!0,taskToEdit:a})}},"Edit \u270e"),n.a.createElement(w.a,{align:"right",variant:"danger",onClick:function(){return e.deleteTask(a)}},"Delete \ue020"))),n.a.createElement(y.a.Footer,{className:"text-muted"})))})),n.a.createElement(H,{show:this.state.showModal,onHide:function(){return e.setState({showModal:!1})},task:this.state.taskToEdit,refreshTasks:function(){setTimeout(function(){var a,t=JSON.parse(localStorage.getItem("users")),s=localStorage.getItem("CurrentUser"),n=localStorage.getItem("CurrentUserEmail"),r=[];for(a in t){if(t[a].name==s){var o=void 0,l=[];for(o in t[a].tasks)l.push(t[a].tasks[o]);e.setState({items:l})}var i=void 0;for(i in t[a].tasks)t[a].tasks[i].shareTo==n&&r.push(t[a].tasks[i]),e.setState({shareItems:r})}console.log("refreshed"),e.setState({showModal:!1})},500)}}),n.a.createElement("br",null),n.a.createElement("div",{className:A.a.card_blok},n.a.createElement("h1",null,"Tasks shared to me"),n.a.createElement("hr",null),o.map(function(a){return n.a.createElement("div",{className:A.a.task_block,key:a.taskname},n.a.createElement(y.a,{className:"text-center"},n.a.createElement(y.a.Header,null,"Shared from: ",n.a.createElement("b",null,a.shareTo)),n.a.createElement(y.a.Body,null,n.a.createElement(y.a.Title,null,a.taskname),n.a.createElement(y.a.Text,null,a.taskdescribe,n.a.createElement("br",null)),n.a.createElement(w.a,{variant:"primary",onClick:function(){return e.setState({showModal:!0,taskToEdit:a})}},"Edit")),n.a.createElement(y.a.Footer,{className:"text-muted"})))}))):n.a.createElement("div",{className:A.a.lds_roller},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null))}}]),a}(n.a.Component),U=t(68),M=t(59),X=t.n(M),B=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(m.a)(a).call(this))).state={loaded:"",username:"",numerOfUserTasks:0,numerOfsharedTasks:0},e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e,a,t=JSON.parse(localStorage.getItem("users")),s=localStorage.getItem("CurrentUserEmail");for(e in this.state.username=localStorage.getItem("CurrentUser"),t)for(a in t[e].name==this.state.username&&(this.state.numerOfUserTasks=t[e].tasks.length),t[e].tasks)t[e].tasks[a].shareTo==s&&(this.state.numerOfsharedTasks++,console.log(this.state.numerOfsharedTasks));this.setState({loaded:!0})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Hello ",n.a.createElement("b",null,this.state.username),"! "),n.a.createElement("h4",null,"Check your tasks or create the new one by using header menu"),n.a.createElement("div",{className:X.a.tasks_info_block,align:"center"},n.a.createElement("h2",{className:X.a.tasks_info_left},"For now you have:"),n.a.createElement("div",{className:X.a.tasks_info_right},n.a.createElement("h3",null,"Your tasks: ",n.a.createElement(U.a,{variant:"success"},this.state.numerOfUserTasks)),n.a.createElement("h3",null,"Shared to you tasks: ",n.a.createElement(U.a,{variant:"warning"},this.state.numerOfsharedTasks)))))}}]),a}(s.Component),L=t(37),J=t(45),K=t(86),W=t(56),F=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={id:0,taskadded:!1},t.onChangeTaskname=t.onChangeTaskname.bind(Object(j.a)(Object(j.a)(t))),t.onChangeTaskdescribe=t.onChangeTaskdescribe.bind(Object(j.a)(Object(j.a)(t))),t.onChangeSharename=t.onChangeSharename.bind(Object(j.a)(Object(j.a)(t))),t.onChangeShare=t.onChangeShare.bind(Object(j.a)(Object(j.a)(t))),t.onSubmit=t.onSubmit.bind(Object(j.a)(Object(j.a)(t))),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"onChangeTaskname",value:function(e){this.props.setTasknameText(e.target.value)}},{key:"onChangeTaskdescribe",value:function(e){this.props.setTaskdescribeText(e.target.value)}},{key:"onChangeSharename",value:function(e){this.props.setShareToText(e.target.value)}},{key:"onChangeShare",value:function(e){this.props.setTaskShare(e.target.value)}},{key:"onSubmit",value:function(e){var a=this;e.preventDefault();var t,s=JSON.parse(localStorage.getItem("users")),n=localStorage.getItem("CurrentUser");for(t in console.log(n,s),s)console.log(s[t].name),s[t].name==n&&(this.state.id=s[t].tasks.length);var r={id:this.state.id,taskname:this.props.taskname,taskdescribe:this.props.taskdescribe,shareTo:this.props.shareTo};for(t in s)if(console.log(s[t].name),s[t].name==n){var o=s[t].tasks.length;this.setState({id:o+1}),s[t].tasks.push(r),console.log("task added to tasks")}localStorage.setItem("users",JSON.stringify(s)),this.setState({taskadded:!0}),setTimeout(function(){return a.setState({taskadded:!1})},1500)}},{key:"render",value:function(){var e,a,t,s;return 1==this.state.taskadded&&(t=n.a.createElement(J.a,{variant:"success"},n.a.createElement("b",null,"Task added"))),0==this.state.taskadded&&(t=n.a.createElement("div",null)),s="true"===this.props.share?n.a.createElement(x.a.Group,{controlId:"formBasicEmail"},n.a.createElement(x.a.Label,{className:A.a.new_task_label},"Add email of user yo want to share a task"),n.a.createElement(x.a.Control,{name:"shareTo",type:"text",placeholder:"Enter email to share",onChange:this.onChangeSharename})):n.a.createElement("div",null),n.a.createElement("div",null,t,n.a.createElement(x.a,{onSubmit:this.onSubmit,className:A.a.new_task_block},n.a.createElement(x.a.Group,{controlId:"formBasicEmail"},n.a.createElement(x.a.Label,{className:A.a.new_task_label},"Task name"),n.a.createElement(x.a.Control,{name:"taskname",type:"text",placeholder:"Enter short name of task",value:this.props.taskname,onChange:this.onChangeTaskname})),n.a.createElement(x.a.Group,{controlId:"formBasicEmail"},n.a.createElement(x.a.Label,{className:A.a.new_task_label},"Task describe"),n.a.createElement(x.a.Control,{className:A.a.describe_field,name:"taskdescribe",type:"text",placeholder:"Describe a task",value:this.props.taskdescribe,onChange:this.onChangeTaskdescribe})),n.a.createElement("fieldset",null,n.a.createElement(x.a.Group,{as:K.a},n.a.createElement(W.a,{sm:10},n.a.createElement(x.a.Check,(e={type:"radio",label:"task for me only",name:"formHorizontalRadios",id:"formHorizontalRadios1",value:"false"},Object(L.a)(e,"name","share"),Object(L.a)(e,"onChange",this.onChangeShare),e)),n.a.createElement(x.a.Check,(a={type:"radio",label:"share task",name:"formHorizontalRadios",id:"formHorizontalRadios2",value:"true"},Object(L.a)(a,"name","share"),Object(L.a)(a,"onChange",this.onChangeShare),a))))),s,n.a.createElement(w.a,{variant:"primary",type:"submit",disabled:this.props.disabled},"Submit")))}}]),a}(s.Component),z=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(F,{email:this.props.email,taskname:this.props.taskname,taskdescribe:this.props.taskdescribe,share:this.props.share,shareTo:this.props.shareTo,setShareToText:this.props.setShareToText,setTaskShare:this.props.setTaskShare,setTasknameText:this.props.setTasknameText,setTaskdescribeText:this.props.setTaskdescribeText})}}]),a}(s.Component),q={setTasknameText:function(e){return{type:"ADD_TASKNAME_TEXT",payload:e}},setTaskdescribeText:function(e){return{type:"ADD_TASKDESCRIBE_TEXT",payload:e}},setShareToText:function(e){return{type:"ADD_SHARE_TO_TEXT",payload:e}},setTaskShare:function(e){return{type:"ADD_TASK_SHARE",payload:e}}},Q=Object(b.b)(function(e){return{email:e.signin.email,taskname:e.addtask.taskname,taskdescribe:e.addtask.taskdescribe,share:e.addtask.share,shareTo:e.addtask.shareTo}},q)(z),V=t(57),Y=t.n(V),$=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={login:null},t.onSubmit=t.onSubmit.bind(Object(j.a)(Object(j.a)(t))),t.onEmailChange=t.onEmailChange.bind(Object(j.a)(Object(j.a)(t))),t.onPasswordChange=t.onPasswordChange.bind(Object(j.a)(Object(j.a)(t))),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"onEmailChange",value:function(e){this.props.setEmailText(e.target.value)}},{key:"onPasswordChange",value:function(e){this.props.setPasswordText(e.target.value)}},{key:"onSubmit",value:function(e){e.preventDefault();var a,t=JSON.parse(localStorage.getItem("users"));for(a in console.log("signining"),t){var s=void 0,n=void 0;t[a].email==this.props.email&&t[a].password==this.props.password?(s=t[a].name,n=t[a].email,localStorage.setItem("CurrentUser",s),localStorage.setItem("CurrentUserEmail",n),this.setState({login:!0}),window.location.href="/home"):(console.log("wrong email or password"),this.setState({login:null}))}}},{key:"render",value:function(){var e;return 0==this.state.login&&(e=n.a.createElement(J.a,{variant:"danger"}," Wrong email or passwor")),1==this.state.login&&(e=n.a.createElement("div",null)),n.a.createElement("div",{className:Y.a.form_sign_in},n.a.createElement("br",null),e,n.a.createElement(x.a,{onSubmit:this.onSubmit},n.a.createElement(x.a.Group,{controlId:"formBasicEmail"},n.a.createElement(x.a.Label,null,"Email address"),n.a.createElement(x.a.Control,{name:"email",type:"email",placeholder:"Enter email",onChange:this.onEmailChange,value:this.props.email})),n.a.createElement(x.a.Group,{controlId:"formBasicPassword"},n.a.createElement(x.a.Label,null,"Password"),n.a.createElement(x.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:this.onPasswordChange,value:this.props.password})),n.a.createElement(w.a,{variant:"primary",type:"submit"},"Sign in")))}}]),a}(s.Component),Z=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement($,{email:this.props.email,password:this.props.password,setEmailText:this.props.setEmailText,setPasswordText:this.props.setPasswordText})}}]),a}(s.Component),ee={setEmailText:function(e){return{type:"SIGNIN_CHANGE_EMAIL_TEXT",payload:e}},setPasswordText:function(e){return{type:"SIGNIN_CHANGE_PASSWORD_TEXT",payload:e}}},ae=Object(b.b)(function(e){return{email:e.signin.email,password:e.signin.password}},ee)(Z),te=function(e){function a(e,t){var s;return Object(l.a)(this,a),(s=Object(c.a)(this,Object(m.a)(a).call(this,e,t))).state={passCheck:null},s.onSubmit=s.onSubmit.bind(Object(j.a)(Object(j.a)(s))),s.onNicknameChange=s.onNicknameChange.bind(Object(j.a)(Object(j.a)(s))),s.onEmailChange=s.onEmailChange.bind(Object(j.a)(Object(j.a)(s))),s.onPasswordChange=s.onPasswordChange.bind(Object(j.a)(Object(j.a)(s))),s.onRepeatPasswordChange=s.onRepeatPasswordChange.bind(Object(j.a)(Object(j.a)(s))),s}return Object(d.a)(a,e),Object(i.a)(a,[{key:"onNicknameChange",value:function(e){this.props.setNicknameText(e.target.value)}},{key:"onEmailChange",value:function(e){this.props.setEmailText(e.target.value)}},{key:"onPasswordChange",value:function(e){this.props.setPasswordText(e.target.value),e.target.value===this.props.repeatPassword?this.props.setDisabledText(""):this.props.setDisabledText("disabled")}},{key:"onRepeatPasswordChange",value:function(e){this.props.setRepeatPasswordText(e.target.value),e.target.value===this.props.password?(this.props.setDisabledText(""),this.setState({passCheck:!0})):(this.setState({passCheck:!1}),console.log("not ok"),this.props.setDisabledText("disabled"))}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("saved");var a={name:this.props.nickname,email:this.props.email,password:this.props.password,tasks:[]},t=[a];if(console.log(localStorage.getItem("users")),localStorage.getItem("users")){console.log("adding user");var s=JSON.parse(localStorage.getItem("users"));s.push(a),localStorage.setItem("users",JSON.stringify(s))}else console.log("empty"),localStorage.setItem("users",JSON.stringify(t));this.context.router.transitionTo("/SignIn")}},{key:"render",value:function(){var e;return 0==this.state.passCheck&&(e=n.a.createElement(J.a,{variant:"danger"},"password do not match")),1==this.state.login&&(e=n.a.createElement("div",null)),n.a.createElement("div",{className:Y.a.form_sign_in},n.a.createElement(x.a,{onSubmit:this.onSubmit},n.a.createElement(x.a.Group,{controlId:"formBasicName"},n.a.createElement(x.a.Label,null,"Nickname"),n.a.createElement(x.a.Control,{type:"text",name:"nickname",placeholder:"Enter nickname",value:this.props.nickname,onChange:this.onNicknameChange})),n.a.createElement(x.a.Group,{controlId:"formBasicEmail"},n.a.createElement(x.a.Label,null,"Email address"),n.a.createElement(x.a.Control,{type:"email",name:"email",placeholder:"Enter email",value:this.props.email,onChange:this.onEmailChange}),n.a.createElement(x.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),n.a.createElement(x.a.Group,{controlId:"formBasicPassword"},n.a.createElement(x.a.Label,null,"Enter password"),n.a.createElement(x.a.Control,{type:"password",name:"password",placeholder:"Password",value:this.props.password,onChange:this.onPasswordChange})),e,n.a.createElement(x.a.Group,{controlId:"confirmFormBasicPassword"},n.a.createElement(x.a.Label,null,"Confirm your password"),n.a.createElement(x.a.Control,{type:"password",name:"password",placeholder:"Repeat password",value:this.props.repeatPassword,onChange:this.onRepeatPasswordChange})),n.a.createElement(w.a,{variant:"primary",name:"submitbutton",type:"submit",disabled:this.props.disabled},"Submit")))}}]),a}(s.Component);te.contextTypes={router:n.a.PropTypes.func.isRequired};var se=te,ne=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(se,{email:this.props.email,password:this.props.password,repeatPassword:this.props.repeatPassword,nickname:this.props.nickname,disabled:this.props.disabled,setDisabledText:this.props.setDisabledText,setEmailText:this.props.setEmailText,setPasswordText:this.props.setPasswordText,setRepeatPasswordText:this.props.setRepeatPasswordText,setNicknameText:this.props.setNicknameText})}}]),a}(s.Component),re={setEmailText:function(e){return{type:"SIGNUP_CHANGE_EMAIL_TEXT",payload:e}},setPasswordText:function(e){return{type:"SIGNUP_CHANGE_PASSWORD_TEXT",payload:e}},setRepeatPasswordText:function(e){return{type:"SIGNUP_CHANGE_REPEAT_PASSWORD_TEXT",payload:e}},setNicknameText:function(e){return{type:"SIGNUP_CHANGE_NICKNAME_TEXT",payload:e}},setDisabledText:function(e){return{type:"SIGNUP_CHANGE_DISABLED",payload:e}}},oe=Object(b.b)(function(e){return{email:e.signup.email,password:e.signup.password,repeatPassword:e.signup.repeatPassword,nickname:e.signup.nickname,disabled:e.signup.disabled}},re)(ne),le=Object(h.c)(_,{}),ie=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(b.a,{store:le},n.a.createElement(u.a,{basename:"/"},n.a.createElement("div",{className:"App",align:"center"},n.a.createElement(p.a,{path:"/",component:O}),n.a.createElement(p.a,{exact:!0,path:"/",component:ae}),n.a.createElement(p.a,{exact:!0,path:"/tasks",component:R}),n.a.createElement(p.a,{exact:!0,path:"/home",component:B}),n.a.createElement(p.a,{exact:!0,path:"/newTask",component:Q}),n.a.createElement(p.a,{path:"/SignUp",component:oe}),n.a.createElement(p.a,{path:"/SignIn",component:ae}))))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},17:function(e,a,t){e.exports={task_block:"Task_task_block__28CuS",new_task_block:"Task_new_task_block__2JVOd",new_task_label:"Task_new_task_label__2HMW7",describe_field:"Task_describe_field__38xFW",lds_roller:"Task_lds_roller__2Pirh"}},57:function(e,a,t){e.exports={form_sign_in:"Header_form_sign_in__lcRBA"}},59:function(e,a,t){e.exports={tasks_info_block:"Home_tasks_info_block__2WQ5x",tasks_info_right:"Home_tasks_info_right__2DycT",tasks_info_left:"Home_tasks_info_left__3Uu4_"}},88:function(e,a,t){e.exports=t(116)},93:function(e,a,t){}},[[88,1,2]]]);
//# sourceMappingURL=main.e36bc55f.chunk.js.map