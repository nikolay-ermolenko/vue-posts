(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},n={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a68c07e9"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,o){a=n[t]=[e,o]}));e.push(a[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0df2":function(t,e,a){},"36c0":function(t,e,a){},"5c0b":function(t,e,a){"use strict";a("9c0c")},"66f6":function(t,e,a){"use strict";a("a7aa")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.07d1e22e.svg"},"9c0c":function(t,e,a){},a7aa:function(t,e,a){},ab42:function(t,e,a){"use strict";a("0df2")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("a026"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{class:t.isIE11},[t.isAuthorized?a("BaseLayout"):a("AuthLayout",{attrs:{isLoading:t.isLoading}},[a("LoginForm",{on:{login:t.onLogin}})],1)],1)},r=[],i=(a("ac1f"),a("466d"),a("9ab4")),s=a("60a3"),c=a("4bb5"),l=a("17f5"),u=a("3fab"),d=a("bee6"),f=a("c4cc"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"auth-layout",attrs:{"fill-height":"",fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"5",xl:"3"}},[a("v-card",{attrs:{tile:"",loading:t.isLoading,disabled:t.isLoading,color:"loginForm",elevation:"2"},scopedSlots:t._u([{key:"progress",fn:function(){return[a("v-progress-linear",{attrs:{absolute:"",indeterminate:"",value:2,color:"progress",height:"2"}})]},proxy:!0}])},[t._t("default")],2)],1)],1)],1)},m=[],b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["b"])(e,t),Object(i["a"])([Object(s["c"])({default:!1})],e.prototype,"isLoading",void 0),e=Object(i["a"])([s["a"]],e),e}(s["d"]),h=b,v=h,g=a("2877"),y=a("6544"),O=a.n(y),_=a("b0af"),j=a("62ad"),w=a("a523"),T=a("8e36"),I=a("0fd9"),A=Object(g["a"])(v,p,m,!1,null,"6ff90377",null),E=A.exports;O()(A,{VCard:_["a"],VCol:j["a"],VContainer:w["a"],VProgressLinear:T["a"],VRow:I["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("v-card",{staticClass:"main-card col-xl-7 col-lg-8 col-md-10 pa-0 mx-auto overflow-scroll",attrs:{tile:""}},[a("AppBar",{on:{logout:t.logout,toggleDrawer:function(e){t.drawer=!t.drawer}}}),a("h1",[t._v("HI")]),a("virtual-list",{staticClass:"px-5",attrs:{keeps:20,"page-mode":!0,"data-key":"id","data-sources":t.posts,"data-component":t.PostItem,"estimate-size":20}})],1),a("v-navigation-drawer",{staticStyle:{width:"80%","min-width":"300px","max-width":"600px"},attrs:{temporary:"",fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"pa-0",attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text"}},[a("virtual-list",{staticClass:"list",staticStyle:{height:"100vh","overflow-y":"auto"},attrs:{"page-mode":!1,"data-key":"id","data-sources":t.array,"data-component":t.MenuItem,keeps:50,"estimate-size":40}})],1)],1)],1)],1)},L=[],k=(a("d81d"),a("89c1")),x=a.n(k),C=a("94ed"),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticClass:"app-bar-main",attrs:{dark:"",height:58,color:"deep-purple accent-4"}},[a("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}}),a("v-toolbar-title",{staticClass:"font-weight-light"},[t._v("My files")]),a("v-spacer"),a("v-switch",{staticClass:"mr-4 mt-6 font-weight-light",attrs:{label:"Dark Mode"},model:{value:t.darkMode,callback:function(e){t.darkMode=e},expression:"darkMode"}}),a("v-btn",{attrs:{icon:""},on:{click:t.logout}},[a("v-icon",[t._v(t._s(t.icons.mdiLogout))])],1)],1)},D=[],V=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.icons={mdiLogout:C["g"]},e}return Object(i["b"])(e,t),e.prototype.logout=function(){return this},e.prototype.toggleDrawer=function(){return this},Object.defineProperty(e.prototype,"darkMode",{get:function(){return this.$vuetify.theme.dark},set:function(t){this.$vuetify.theme.dark=Boolean(t),localStorage.darkmode=Boolean(t)},enumerable:!1,configurable:!0}),Object(i["a"])([Object(s["b"])("logout")],e.prototype,"logout",null),Object(i["a"])([Object(s["b"])("toggleDrawer")],e.prototype,"toggleDrawer",null),e=Object(i["a"])([s["a"]],e),e}(s["d"]),M=V,G=M,U=(a("ab42"),a("40dc")),R=a("5bc1"),P=a("8336"),$=a("132d"),B=a("2fa4"),H=a("b73d"),z=a("2a7f"),F=Object(g["a"])(G,N,D,!1,null,"42841942",null),W=F.exports;O()(F,{VAppBar:U["a"],VAppBarNavIcon:R["a"],VBtn:P["a"],VIcon:$["a"],VSpacer:B["a"],VSwitch:H["a"],VToolbarTitle:z["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",{attrs:{tile:""}},[a("v-list-item-title",[t._v(t._s(t.source.name))])],1)},J=[],K=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["b"])(e,t),Object(i["a"])([Object(s["c"])()],e.prototype,"source",void 0),e=Object(i["a"])([s["a"]],e),e}(s["d"]),Y=K,Z=Y,Q=a("da13"),X=a("5d23"),tt=Object(g["a"])(Z,q,J,!1,null,null,null),et=tt.exports;O()(tt,{VListItem:Q["a"],VListItemTitle:X["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-3"},[a("v-card",[a("v-card-title",[t._v(t._s(t.source.id)+" :: "+t._s(t.source.title))]),a("v-card-text",[t._v(t._s(t.source.text))])],1)],1)},ot=[],nt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["b"])(e,t),Object(i["a"])([Object(s["c"])()],e.prototype,"source",void 0),e=Object(i["a"])([s["a"]],e),e}(s["d"]),rt=nt,it=rt,st=a("99d9"),ct=Object(g["a"])(it,at,ot,!1,null,null,null),lt=ct.exports;O()(ct,{VCard:_["a"],VCardText:st["b"],VCardTitle:st["c"]});a("a15b");var ut=["I can almost see it","That dream I'm dreamin' but","There's a voice inside my head saying","You'll never reach it","Every step I'm taking","Every move I make feels","Lost with no direction","My faith is shakin","But I I gotta keep tryin","Gotta keep my head held high","There's always gonna be another mountain","I'm always gonna wanna make it move","Always gonna be an uphill battle","Sometimes I'm gonna have to lose","Ain't about how fast I get there","Ain't about what's waitin on the other side","It's the climb","The struggles I'm facing","The chances I'm taking","Sometimes might knock me down but","No I'm not breaking","I may not know it","But these are the moments that","I'm gonna remember most yeah","Just gotta keep going","And I I gotta be strong","Just keep pushing on 'cause","There's always gonna be another mountain","I'm always gonna wanna make it move","Always gonna be an uphill battle","But Sometimes I'm gonna have to lose","Ain't about how fast I get there","Ain't about what's waitin on the other side","It's the climb","Yeah-yeah","There's always gonna be another mountain","I'm always gonna wanna make it move","Always gonna be an uphill battle","Sometimes you're gonna have to lose","Ain't about how fast I get there","Ain't about what's waitin on the other side","It's the climb","Yeah-yeah-yea","Keep on moving","Keep climbing","Keep the faith","Baby It's all about","It's all about the climb","Keep your faith","Whoa O Whoa"];function dt(t,e){void 0===t&&(t=1),void 0===e&&(e=6);var a=[],o=t+Math.floor((e-t)*Math.random());while(o)o-=1,a.push(ut[Math.floor(ut.length*Math.random())]);return a.join(". ")+"."}var ft,pt,mt=a("d96a"),bt=a("ebb6"),ht=function(){function t(){}return t.prototype.login=function(t){var e=t.username,a=t.password,o={isAuthorized:!0,username:e,permissions:["ALL"]},n={isAuthorized:!1,username:null,permissions:[]};return Object(l["a"])("user"===e&&"123"===a?o:n).pipe(Object(d["a"])(400))},t.prototype.logout=function(){return Object(l["a"])(null).pipe(Object(d["a"])(400),Object(bt["a"])((function(){return null})))},t.prototype.status=function(){return Object(l["a"])(localStorage.authStatus).pipe(Object(d["a"])(400),Object(bt["a"])((function(t){try{return JSON.parse(t)}catch(e){return null}})))},t}(),vt=new ht;(function(t){t["INCREMENT_LOADING"]="INCREMENT_LOADING",t["DECREMENT_LOADING"]="DECREMENT_LOADING",t["SET_AUTH_STATUS"]="SET_AUTH_STATUS",t["RESET_AUTH_STATUS"]="RESET_AUTH_STATUS"})(pt||(pt={}));var gt,yt,Ot=(ft={},ft[pt.INCREMENT_LOADING]=function(t){t.isLoading+=1},ft[pt.DECREMENT_LOADING]=function(t){t.isLoading-=1},ft[pt.SET_AUTH_STATUS]=function(t,e){localStorage.authStatus=JSON.stringify(e),t.authStatus=e},ft[pt.RESET_AUTH_STATUS]=function(t){localStorage.authStatus=null,t.authStatus={isAuthorized:!1,username:null,permissions:[]}},ft);(function(t){t["INCREMENT_LOADING"]="INCREMENT_LOADING",t["DECREMENT_LOCADING"]="DECREMENT_LOCADING",t["LOAD_STATUS"]="LOAD_STATUS",t["LOGIN"]="LOGIN",t["LOGOUT"]="LOGOUT"})(yt||(yt={}));var _t=(gt={},gt[yt.INCREMENT_LOADING]=function(t){var e=t.commit;e(pt.INCREMENT_LOADING)},gt[yt.DECREMENT_LOCADING]=function(t){var e=t.commit;e(pt.DECREMENT_LOADING)},gt[yt.LOAD_STATUS]=function(t){var e=t.commit;e(pt.INCREMENT_LOADING),vt.status().pipe(Object(u["a"])(),Object(mt["a"])((function(){return e(pt.DECREMENT_LOADING)}))).subscribe((function(t){null!==t&&e(pt.SET_AUTH_STATUS,t)}))},gt[yt.LOGIN]=function(t,e){var a=t.commit;a(pt.INCREMENT_LOADING),vt.login(e).pipe(Object(u["a"])(),Object(mt["a"])((function(){return a(pt.DECREMENT_LOADING)}))).subscribe((function(t){a(pt.SET_AUTH_STATUS,t)}))},gt[yt.LOGOUT]=function(t){var e=t.commit;e(pt.INCREMENT_LOADING),vt.logout().pipe(Object(u["a"])(),Object(mt["a"])((function(){return e(pt.DECREMENT_LOADING)}))).subscribe((function(){e(pt.RESET_AUTH_STATUS)}))},gt),jt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.drawer=!1,e.MenuItem=et,e.PostItem=lt,e.array=Object(i["c"])(new Array(300)).map((function(t,e){return{id:e,name:"Item # "+e+" :: "+Math.random()}})),e.posts=Object(i["c"])(new Array(1500)).map((function(t,e){return{id:e,title:dt(1,3),text:dt(3,22)}})),e.icons={mdiLogout:C["g"]},e}return Object(i["b"])(e,t),Object.defineProperty(e.prototype,"darkMode",{get:function(){return this.$vuetify.theme.dark},set:function(t){this.$vuetify.theme.dark=Boolean(t),localStorage.darkmode=Boolean(t)},enumerable:!1,configurable:!0}),Object(i["a"])([Object(c["a"])(yt.LOGOUT)],e.prototype,"logout",void 0),e=Object(i["a"])([Object(s["a"])({components:{AppBar:W,VirtualList:x.a}})],e),e}(s["d"]),wt=jt,Tt=wt,It=(a("d21a"),a("8860")),At=a("1baa"),Et=a("f6c4"),St=a("f774"),Lt=Object(g["a"])(Tt,S,L,!1,null,null,null),kt=Lt.exports;O()(Lt,{VCard:_["a"],VList:It["a"],VListItemGroup:At["a"],VMain:Et["a"],VNavigationDrawer:St["a"]});var xt,Ct,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"form",staticClass:"form-login",on:{submit:function(e){return e.preventDefault(),t.onSubmitForm(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-title",{staticClass:"justify-center"},[a("v-avatar",{staticClass:"ma-6",attrs:{tile:"",size:"140"}},[a("Logo")],1)],1),a("v-card-title",{staticClass:"justify-center py-0"},[a("p",{staticClass:"login-title text-h4 font-weight-thin text-center"},[t._v("Заголовок приложения")])]),a("v-card-text",{staticClass:"px-sm-8 px-md-12"},[a("v-text-field",{attrs:{autofocus:"",required:"",rules:t.rules,label:"Логин"},scopedSlots:t._u([{key:"prepend-inner",fn:function(){return[a("v-icon",[t._v(t._s(t.icons.mdiAccount))])]},proxy:!0},{key:"append",fn:function(){return[a("v-icon",{directives:[{name:"show",rawName:"v-show",value:!t.isFormEmpty,expression:"!isFormEmpty"}],attrs:{tabindex:"66"},on:{click:t.onClearClick}},[t._v(t._s(t.icons.mdiClose))])]},proxy:!0}]),model:{value:t.formValue.username,callback:function(e){t.$set(t.formValue,"username",e)},expression:"formValue.username"}}),a("v-text-field",{attrs:{required:"",rules:t.rules,type:t.showPassword?"text":"password",label:"Пароль"},scopedSlots:t._u([{key:"prepend-inner",fn:function(){return[a("v-icon",[t._v(t._s(t.icons.mdiLock))])]},proxy:!0},{key:"append",fn:function(){return[a("v-icon",{attrs:{tabindex:"88"},on:{click:function(e){t.showPassword=!t.showPassword}}},[t._v(" "+t._s(t.showPassword?t.icons.mdiEye:t.icons.mdiEyeOff)+" ")])]},proxy:!0}]),model:{value:t.formValue.password,callback:function(e){t.$set(t.formValue,"password",e)},expression:"formValue.password"}})],1),a("v-card-actions",[a("v-spacer"),a("v-switch",{staticClass:"mr-4",attrs:{label:"Dark Mode"},model:{value:t.darkMode,callback:function(e){t.darkMode=e},expression:"darkMode"}}),a("v-btn",{attrs:{dark:t.valid,"min-width":"100",large:"",tile:"",disabled:t.isLoading||!t.valid,type:"submit"}},[t._v("Войти")])],1)],1)},Dt=[],Vt=(a("d3b7"),a("25f0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{viewBox:"0 0 600 476.6",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"m0 259.8v-259.8l225 129.9v86.6l-150-86.6v173.2z",fill:t.colors.color1}}),a("path",{attrs:{d:"m225 129.9 225-129.9v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z",fill:t.colors.color2}}),a("path",{attrs:{d:"m225 303.1v86.6l150 86.6v-86.6z",fill:t.colors.color1}}),a("path",{attrs:{d:"m375 476.3 225-129.9v-173.2l-75 43.3v86.6l-150 86.6zm150-346.4v-86.6l75-43.3v86.6z",fill:t.colors.color2}})])}),Mt=[],Gt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["b"])(e,t),Object.defineProperty(e.prototype,"colors",{get:function(){return{color1:this.color1||"#00b0ff",color2:this.color2||"#0081cb"}},enumerable:!1,configurable:!0}),Object(i["a"])([Object(s["c"])()],e.prototype,"color1",void 0),Object(i["a"])([Object(s["c"])()],e.prototype,"color2",void 0),e=Object(i["a"])([s["a"]],e),e}(s["d"]),Ut=Gt,Rt=Ut,Pt=Object(g["a"])(Rt,Vt,Mt,!1,null,"189ab0e2",null),$t=Pt.exports,Bt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.valid=!0,e.isLoading=!1,e.showPassword=!1,e.rules=[function(t){return!!t||"Это поле обязательно для заполнения"}],e.icons={mdiAccount:C["a"],mdiEye:C["d"],mdiEyeOff:C["e"],mdiLock:C["f"],mdiClose:C["c"]},e.formValue={username:null,password:null},e}return Object(i["b"])(e,t),Object.defineProperty(e.prototype,"darkMode",{get:function(){return this.$vuetify.theme.dark},set:function(t){this.$vuetify.theme.dark=Boolean(t),localStorage.darkmode=Boolean(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isFormEmpty",{get:function(){var t=this.formValue||{},e=t.username,a=t.password;return!(null!==e&&void 0!==e&&""!==e.toString()||null!==a&&void 0!==a&&""!==a.toString())},enumerable:!1,configurable:!0}),e.prototype.onClearClick=function(){this.$refs.form.reset()},e.prototype.login=function(){return this.formValue},e.prototype.onSubmitForm=function(){this.login()},Object(i["a"])([Object(s["b"])("login")],e.prototype,"login",null),e=Object(i["a"])([Object(s["a"])({components:{Logo:$t}})],e),e}(s["d"]),Ht=Bt,zt=Ht,Ft=(a("66f6"),a("8212")),Wt=a("4bd4"),qt=a("8654"),Jt=Object(g["a"])(zt,Nt,Dt,!1,null,"75c25e40",null),Kt=Jt.exports;O()(Jt,{VAvatar:Ft["a"],VBtn:P["a"],VCardActions:st["a"],VCardText:st["b"],VCardTitle:st["c"],VForm:Wt["a"],VIcon:$["a"],VSpacer:B["a"],VSwitch:H["a"],VTextField:qt["a"]}),function(t){t["IS_LOADING"]="IS_LOADING",t["IS_AUTHORIZED"]="IS_AUTHORIZED"}(Ct||(Ct={}));var Yt=(xt={},xt[Ct.IS_LOADING]=function(t){var e=t.isLoading;return e>0},xt[Ct.IS_AUTHORIZED]=function(t){var e=t.authStatus;return e.isAuthorized},xt);function Zt(){var t=document.getElementById("init-loader");t&&Object(l["a"])(1).pipe(Object(u["a"])(),Object(d["a"])(600),Object(f["a"])((function(){return t.classList.add("fade-out")})),Object(d["a"])(1e3)).subscribe((function(){t.style.setProperty("display","none"),t.classList.remove("fade-out")}))}var Qt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.group=!1,e}return Object(i["b"])(e,t),e.prototype.mounted=function(){this.$vuetify.theme.dark="true"===localStorage.darkmode,this.loadStatus(),Zt.apply(this)},e.prototype.onLogin=function(t){this.login(t)},Object.defineProperty(e.prototype,"isIE11",{get:function(){return{"ie-css":null!==navigator.userAgent.match(/rv:11.0/i)}},enumerable:!1,configurable:!0}),Object(i["a"])([Object(c["b"])(Ct.IS_LOADING)],e.prototype,"isLoading",void 0),Object(i["a"])([Object(c["b"])(Ct.IS_AUTHORIZED)],e.prototype,"isAuthorized",void 0),Object(i["a"])([Object(c["a"])(yt.INCREMENT_LOADING)],e.prototype,"incrementLoading",void 0),Object(i["a"])([Object(c["a"])(yt.DECREMENT_LOCADING)],e.prototype,"decrementLoading",void 0),Object(i["a"])([Object(c["a"])(yt.LOAD_STATUS)],e.prototype,"loadStatus",void 0),Object(i["a"])([Object(c["a"])(yt.LOGIN)],e.prototype,"login",void 0),e=Object(i["a"])([Object(s["a"])({components:{AuthLayout:E,BaseLayout:kt,LoginForm:Kt}})],e),e}(s["d"]),Xt=Qt,te=Xt,ee=(a("5c0b"),a("7496")),ae=Object(g["a"])(te,n,r,!1,null,null,null),oe=ae.exports;O()(ae,{VApp:ee["a"]});var ne=a("8c4f"),re=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},ie=[],se=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"text-center"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),o("v-col",{staticClass:"mb-4"},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),o("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),o("br"),t._v("please join our online "),o("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},ce=[],le=o["default"].extend({name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}}),ue=le,de=a("adda"),fe=Object(g["a"])(ue,se,ce,!1,null,null,null),pe=fe.exports;O()(fe,{VCol:j["a"],VContainer:w["a"],VImg:de["a"],VRow:I["a"]});var me=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["b"])(e,t),e=Object(i["a"])([Object(s["a"])({components:{HelloWorld:pe}})],e),e}(s["d"]),be=me,he=be,ve=Object(g["a"])(he,re,ie,!1,null,null,null),ge=ve.exports;o["default"].use(ne["a"]);var ye,Oe,_e="Home",je="About",we=[{path:"/",name:_e,component:ge},{path:"/about",name:je,component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Te=new ne["a"]({routes:we}),Ie=Te,Ae=a("2f62");(function(t){t["IS_LOADING"]="isLoading",t["AUTH_STATUS"]="authStatus"})(Oe||(Oe={}));var Ee=(ye={},ye[Oe.IS_LOADING]=0,ye[Oe.AUTH_STATUS]={isAuthorized:!1,username:null,permissions:[]},ye);o["default"].use(Ae["a"]);var Se={state:Ee,getters:Yt,mutations:Ot,actions:_t,modules:{}},Le=new Ae["a"].Store(Se),ke=a("f309"),xe=a("0879"),Ce=a("fcf4");o["default"].use(ke["a"]);var Ne={primary:Ce["a"].red.base,secondary:Ce["a"].red.base,accent:Ce["a"].red.base,info:Ce["a"].red.base,warning:Ce["a"].red.base,error:Ce["a"].red.base,success:Ce["a"].red.base,progress:Ce["a"].blue.base,loginForm:Ce["a"].blueGrey.lighten4},De={primary:Ce["a"].blue.base,secondary:Ce["a"].blue.base,accent:Ce["a"].blue.base,info:Ce["a"].blue.base,warning:Ce["a"].blue.base,error:Ce["a"].blue.base,success:Ce["a"].blue.base,progress:Ce["a"].lime.base,loginForm:Ce["a"].blue.darken4},Ve={dark:!1,disable:!1,default:"light",options:{},currentTheme:Ne,themes:{light:Ne,dark:De}},Me=new ke["a"]({theme:Ve,icons:{iconfont:"mdiSvg",values:{sort:C["b"]}},lang:{locales:{ru:xe["a"]},current:"ru"}});a("d5e8");o["default"].config.productionTip=!1,new o["default"]({router:Ie,store:Le,vuetify:Me,render:function(t){return t(oe)}}).$mount("#app")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d21a:function(t,e,a){"use strict";a("36c0")}});
//# sourceMappingURL=app.e9e105f0.js.map