(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,i=1;i<o.length;i++){var c=o[i];0!==a[c]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var r={},a={app:0},n=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8c7a9e9e"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o=a[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,r){o=a[t]=[e,r]}));e.push(o[2]=r);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(l);var o=a[t];if(0!==o){if(o){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,o[1](u)}a[t]=void 0}};var l=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"66f6":function(t,e,o){"use strict";o("a7aa")},"9b19":function(t,e,o){t.exports=o.p+"img/logo.07d1e22e.svg"},a7aa:function(t,e,o){},cd49:function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("a026"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[t.isAuthorized?o("div",[o("v-card",[o("v-card-title",[t._v("AUTH")]),o("v-card-actions",[o("v-spacer"),o("v-switch",{staticClass:"mr-4",attrs:{label:"Dark Mode"},model:{value:t.darkMode,callback:function(e){t.darkMode=e},expression:"darkMode"}}),o("v-btn",{on:{click:t.logout}},[t._v("LOGOUT")])],1)],1)],1):o("AuthLayout",{attrs:{isLoading:t.isLoading}},[o("LoginForm",{on:{login:t.onLogin}})],1)],1)},n=[],i=o("9ab4"),s=o("60a3"),c=o("4bb5"),u=o("17f5"),l=o("3fab"),d=o("bee6"),f=o("c4cc"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"auth-layout",attrs:{"fill-height":"",fluid:""}},[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12",sm:"8",md:"5",xl:"3"}},[o("v-card",{attrs:{tile:"",loading:t.isLoading,disabled:t.isLoading,color:"loginForm",elevation:"2"},scopedSlots:t._u([{key:"progress",fn:function(){return[o("v-progress-linear",{attrs:{absolute:"",indeterminate:"",value:2,color:"progress",height:"2"}})]},proxy:!0}])},[t._t("default")],2)],1)],1)],1)},b=[],m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["b"])(e,t),Object(i["a"])([Object(s["c"])({default:!1})],e.prototype,"isLoading",void 0),e=Object(i["a"])([s["a"]],e),e}(s["d"]),v=m,h=v,y=o("2877"),g=o("6544"),O=o.n(g),_=o("b0af"),j=o("62ad"),T=o("a523"),E=o("8e36"),S=o("0fd9"),A=Object(y["a"])(h,p,b,!1,null,"6ff90377",null),L=A.exports;O()(A,{VCard:_["a"],VCol:j["a"],VContainer:T["a"],VProgressLinear:E["a"],VRow:S["a"]});var w,C,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-form",{ref:"form",staticClass:"form-login",on:{submit:function(e){return e.preventDefault(),t.onSubmitForm(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-card-title",{staticClass:"justify-center"},[o("v-avatar",{staticClass:"ma-6",attrs:{tile:"",size:"140"}},[o("Logo")],1)],1),o("v-card-title",{staticClass:"justify-center py-0"},[o("p",{staticClass:"login-title text-h4 font-weight-thin text-center"},[t._v("Заголовок приложения")])]),o("v-card-text",{staticClass:"px-sm-8 px-md-12"},[o("v-text-field",{attrs:{autofocus:"",required:"",rules:t.rules,label:"Логин"},scopedSlots:t._u([{key:"prepend-inner",fn:function(){return[o("v-icon",[t._v(t._s(t.icons.mdiAccount))])]},proxy:!0},{key:"append",fn:function(){return[o("v-icon",{directives:[{name:"show",rawName:"v-show",value:!t.isFormEmpty,expression:"!isFormEmpty"}],attrs:{tabindex:"66"},on:{click:t.onClearClick}},[t._v(t._s(t.icons.mdiClose))])]},proxy:!0}]),model:{value:t.formValue.username,callback:function(e){t.$set(t.formValue,"username",e)},expression:"formValue.username"}}),o("v-text-field",{attrs:{required:"",rules:t.rules,type:t.showPassword?"text":"password",label:"Пароль"},scopedSlots:t._u([{key:"prepend-inner",fn:function(){return[o("v-icon",[t._v(t._s(t.icons.mdiLock))])]},proxy:!0},{key:"append",fn:function(){return[o("v-icon",{attrs:{tabindex:"88"},on:{click:function(e){t.showPassword=!t.showPassword}}},[t._v(" "+t._s(t.showPassword?t.icons.mdiEye:t.icons.mdiEyeOff)+" ")])]},proxy:!0}]),model:{value:t.formValue.password,callback:function(e){t.$set(t.formValue,"password",e)},expression:"formValue.password"}})],1),o("v-card-actions",[o("v-spacer"),o("v-switch",{staticClass:"mr-4",attrs:{label:"Dark Mode"},model:{value:t.darkMode,callback:function(e){t.darkMode=e},expression:"darkMode"}}),o("v-btn",{attrs:{dark:t.valid,"min-width":"100",large:"",tile:"",disabled:t.isLoading||!t.valid,type:"submit"}},[t._v("Войти")])],1)],1)},x=[],I=(o("d3b7"),o("25f0"),o("94ed")),k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{viewBox:"0 0 600 476.6",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"m0 259.8v-259.8l225 129.9v86.6l-150-86.6v173.2z",fill:t.colors.color1}}),o("path",{attrs:{d:"m225 129.9 225-129.9v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z",fill:t.colors.color2}}),o("path",{attrs:{d:"m225 303.1v86.6l150 86.6v-86.6z",fill:t.colors.color1}}),o("path",{attrs:{d:"m375 476.3 225-129.9v-173.2l-75 43.3v86.6l-150 86.6zm150-346.4v-86.6l75-43.3v86.6z",fill:t.colors.color2}})])},D=[],V=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["b"])(e,t),Object.defineProperty(e.prototype,"colors",{get:function(){return{color1:this.color1||"#00b0ff",color2:this.color2||"#0081cb"}},enumerable:!1,configurable:!0}),Object(i["a"])([Object(s["c"])()],e.prototype,"color1",void 0),Object(i["a"])([Object(s["c"])()],e.prototype,"color2",void 0),e=Object(i["a"])([s["a"]],e),e}(s["d"]),G=V,M=G,U=Object(y["a"])(M,k,D,!1,null,"189ab0e2",null),R=U.exports,H=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.valid=!0,e.isLoading=!1,e.showPassword=!1,e.rules=[function(t){return!!t||"Это поле обязательно для заполнения"}],e.icons={mdiAccount:I["a"],mdiEye:I["d"],mdiEyeOff:I["e"],mdiLock:I["f"],mdiClose:I["c"]},e.formValue={username:null,password:null},e}return Object(i["b"])(e,t),Object.defineProperty(e.prototype,"darkMode",{get:function(){return this.$vuetify.theme.dark},set:function(t){this.$vuetify.theme.dark=Boolean(t),localStorage.darkmode=Boolean(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isFormEmpty",{get:function(){var t=this.formValue||{},e=t.username,o=t.password;return!(null!==e&&void 0!==e&&""!==e.toString()||null!==o&&void 0!==o&&""!==o.toString())},enumerable:!1,configurable:!0}),e.prototype.onClearClick=function(){this.$refs.form.reset()},e.prototype.login=function(){return this.formValue},e.prototype.onSubmitForm=function(){this.login()},Object(i["a"])([Object(s["b"])("login")],e.prototype,"login",null),e=Object(i["a"])([Object(s["a"])({components:{Logo:R}})],e),e}(s["d"]),P=H,$=P,z=(o("66f6"),o("8212")),F=o("8336"),B=o("99d9"),q=o("4bd4"),W=o("132d"),J=o("2fa4"),Z=o("b73d"),Q=o("8654"),Y=Object(y["a"])($,N,x,!1,null,"669c6708",null),K=Y.exports;O()(Y,{VAvatar:z["a"],VBtn:F["a"],VCardActions:B["a"],VCardText:B["b"],VCardTitle:B["c"],VForm:q["a"],VIcon:W["a"],VSpacer:J["a"],VSwitch:Z["a"],VTextField:Q["a"]}),function(t){t["IS_LOADING"]="IS_LOADING",t["IS_AUTHORIZED"]="IS_AUTHORIZED"}(C||(C={}));var X,tt,et=(w={},w[C.IS_LOADING]=function(t){var e=t.isLoading;return e>0},w[C.IS_AUTHORIZED]=function(t){var e=t.authStatus;return e.isAuthorized},w),ot=o("d96a"),rt=o("ebb6"),at=function(){function t(){}return t.prototype.login=function(t){var e=t.username,o=t.password,r={isAuthorized:!0,username:e,permissions:["ALL"]},a={isAuthorized:!1,username:null,permissions:[]};return Object(u["a"])("user"===e&&"123"===o?r:a).pipe(Object(d["a"])(400))},t.prototype.logout=function(){return Object(u["a"])(null).pipe(Object(d["a"])(400),Object(rt["a"])((function(){return null})))},t.prototype.status=function(){return Object(u["a"])(localStorage.authStatus).pipe(Object(d["a"])(400),Object(rt["a"])((function(t){return JSON.parse(t)||null})))},t}(),nt=new at;(function(t){t["INCREMENT_LOADING"]="INCREMENT_LOADING",t["DECREMENT_LOADING"]="DECREMENT_LOADING",t["SET_AUTH_STATUS"]="SET_AUTH_STATUS",t["RESET_AUTH_STATUS"]="RESET_AUTH_STATUS"})(tt||(tt={}));var it,st,ct=(X={},X[tt.INCREMENT_LOADING]=function(t){t.isLoading+=1},X[tt.DECREMENT_LOADING]=function(t){t.isLoading-=1},X[tt.SET_AUTH_STATUS]=function(t,e){localStorage.authStatus=JSON.stringify(e),t.authStatus=e},X[tt.RESET_AUTH_STATUS]=function(t){localStorage.authStatus=null,t.authStatus={isAuthorized:!1,username:null,permissions:[]}},X);(function(t){t["INCREMENT_LOADING"]="INCREMENT_LOADING",t["DECREMENT_LOCADING"]="DECREMENT_LOCADING",t["LOAD_STATUS"]="LOAD_STATUS",t["LOGIN"]="LOGIN",t["LOGOUT"]="LOGOUT"})(st||(st={}));var ut=(it={},it[st.INCREMENT_LOADING]=function(t){var e=t.commit;e(tt.INCREMENT_LOADING)},it[st.DECREMENT_LOCADING]=function(t){var e=t.commit;e(tt.DECREMENT_LOADING)},it[st.LOAD_STATUS]=function(t){var e=t.commit;e(tt.INCREMENT_LOADING),nt.status().pipe(Object(l["a"])(),Object(ot["a"])((function(){return e(tt.DECREMENT_LOADING)}))).subscribe((function(t){(null===t||void 0===t?void 0:t.isAuthorized)&&e(tt.SET_AUTH_STATUS,t)}))},it[st.LOGIN]=function(t,e){var o=t.commit;o(tt.INCREMENT_LOADING),nt.login(e).pipe(Object(l["a"])(),Object(ot["a"])((function(){return o(tt.DECREMENT_LOADING)}))).subscribe((function(t){o(tt.SET_AUTH_STATUS,t)}))},it[st.LOGOUT]=function(t){var e=t.commit;e(tt.INCREMENT_LOADING),nt.logout().pipe(Object(l["a"])(),Object(ot["a"])((function(){return e(tt.DECREMENT_LOADING)}))).subscribe((function(){e(tt.RESET_AUTH_STATUS)}))},it);function lt(){var t=document.getElementById("init-loader");t&&Object(u["a"])(1).pipe(Object(l["a"])(),Object(d["a"])(800),Object(f["a"])((function(){return t.classList.add("fade-out")})),Object(d["a"])(1e3)).subscribe((function(){t.style.setProperty("display","none"),t.classList.remove("fade-out")}))}var dt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["b"])(e,t),Object.defineProperty(e.prototype,"darkMode",{get:function(){return this.$vuetify.theme.dark},set:function(t){this.$vuetify.theme.dark=Boolean(t),localStorage.darkmode=Boolean(t)},enumerable:!1,configurable:!0}),e.prototype.mounted=function(){this.$vuetify.theme.dark="true"===localStorage.darkmode,this.loadStatus(),lt.apply(this)},e.prototype.onLogin=function(t){this.login(t)},Object(i["a"])([Object(c["b"])(C.IS_LOADING)],e.prototype,"isLoading",void 0),Object(i["a"])([Object(c["b"])(C.IS_AUTHORIZED)],e.prototype,"isAuthorized",void 0),Object(i["a"])([Object(c["a"])(st.INCREMENT_LOADING)],e.prototype,"incrementLoading",void 0),Object(i["a"])([Object(c["a"])(st.DECREMENT_LOCADING)],e.prototype,"decrementLoading",void 0),Object(i["a"])([Object(c["a"])(st.LOAD_STATUS)],e.prototype,"loadStatus",void 0),Object(i["a"])([Object(c["a"])(st.LOGIN)],e.prototype,"login",void 0),Object(i["a"])([Object(c["a"])(st.LOGOUT)],e.prototype,"logout",void 0),e=Object(i["a"])([Object(s["a"])({components:{AuthLayout:L,LoginForm:K}})],e),e}(s["d"]),ft=dt,pt=ft,bt=o("7496"),mt=Object(y["a"])(pt,a,n,!1,null,null,null),vt=mt.exports;O()(mt,{VApp:bt["a"],VBtn:F["a"],VCard:_["a"],VCardActions:B["a"],VCardTitle:B["c"],VSpacer:J["a"],VSwitch:Z["a"]});var ht=o("8c4f"),yt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},gt=[],Ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:o("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),r("br"),t._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,o){return r("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,o){return r("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,o){return r("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},_t=[],jt=r["a"].extend({name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}}),Tt=jt,Et=o("adda"),St=Object(y["a"])(Tt,Ot,_t,!1,null,null,null),At=St.exports;O()(St,{VCol:j["a"],VContainer:T["a"],VImg:Et["a"],VRow:S["a"]});var Lt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["b"])(e,t),e=Object(i["a"])([Object(s["a"])({components:{HelloWorld:At}})],e),e}(s["d"]),wt=Lt,Ct=wt,Nt=Object(y["a"])(Ct,yt,gt,!1,null,null,null),xt=Nt.exports;r["a"].use(ht["a"]);var It,kt,Dt="Home",Vt="About",Gt=[{path:"/",name:Dt,component:xt},{path:"/about",name:Vt,component:function(){return o.e("about").then(o.bind(null,"f820"))}}],Mt=new ht["a"]({routes:Gt}),Ut=Mt,Rt=o("2f62");(function(t){t["IS_LOADING"]="isLoading",t["AUTH_STATUS"]="authStatus"})(kt||(kt={}));var Ht=(It={},It[kt.IS_LOADING]=0,It[kt.AUTH_STATUS]={isAuthorized:!1,username:null,permissions:[]},It);r["a"].use(Rt["a"]);var Pt={state:Ht,getters:et,mutations:ct,actions:ut,modules:{}},$t=new Rt["a"].Store(Pt),zt=o("f309"),Ft=o("0879"),Bt=o("fcf4");r["a"].use(zt["a"]);var qt={primary:Bt["a"].red.base,secondary:Bt["a"].red.base,accent:Bt["a"].red.base,info:Bt["a"].red.base,warning:Bt["a"].red.base,error:Bt["a"].red.base,success:Bt["a"].red.base,progress:Bt["a"].blue.base,loginForm:Bt["a"].blueGrey.lighten4},Wt={primary:Bt["a"].blue.base,secondary:Bt["a"].blue.base,accent:Bt["a"].blue.base,info:Bt["a"].blue.base,warning:Bt["a"].blue.base,error:Bt["a"].blue.base,success:Bt["a"].blue.base,progress:Bt["a"].lime.base,loginForm:Bt["a"].blue.darken4},Jt={dark:!1,disable:!1,default:"light",options:{},currentTheme:qt,themes:{light:qt,dark:Wt}},Zt=new zt["a"]({theme:Jt,icons:{iconfont:"mdiSvg",values:{sort:I["b"]}},lang:{locales:{ru:Ft["a"]},current:"ru"}});o("d5e8");r["a"].config.productionTip=!1,new r["a"]({router:Ut,store:$t,vuetify:Zt,render:function(t){return t(vt)}}).$mount("#app")},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.2a56263a.js.map