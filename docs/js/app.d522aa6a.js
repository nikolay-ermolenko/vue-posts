(function(e){function t(t){for(var r,u,i=t[0],l=t[1],c=t[2],s=0,p=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&p.push(a[u][0]),a[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"4f43":function(e,t,n){},b689:function(e,t,n){"use strict";var r=n("4f43"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);var r=n("a026"),a=n("f309");r["a"].use(a["a"]);var o=new a["a"]({}),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("v-container",{staticClass:"fill-heightd"},[n("v-row",{attrs:{align:"center"}},[n("h3",[e._v('Hello vue [avoid value = "zzz"]')])]),n("v-row",[n("v-slider",{attrs:{label:"Buffer size (ms)",hint:e.buffer.toString(),"persistent-hint":"",step:"50",min:"0",max:"900"},model:{value:e.buffer,callback:function(t){e.buffer=t},expression:"buffer"}})],1),n("v-row",{attrs:{align:"center"}},[n("v-text-field",{ref:"input",attrs:{label:"Value"},on:{input:e.onTextFieldChange}})],1),n("v-row",{attrs:{align:"center"}},[n("p",{staticClass:"value"},[e._v(e._s(e.text))])])],1)],1)],1)},i=[],l=n("9ab4"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span")},f=[],s=n("2fe1"),p=n("4b96"),b=n("9f2d"),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.destroy$$=new p["a"](2),t}return Object(l["b"])(t,e),t.prototype.beforeDestroy=function(){this.destroy$$.next(null),this.destroy$$.complete()},t.prototype.observerSafe$=function(e){return e.pipe(Object(b["a"])(this.destroy$$))},t=Object(l["a"])([s["a"]],t),t}(r["a"]),v=d,h=v,y=n("2877"),j=Object(y["a"])(h,c,f,!1,null,null,null),O=j.exports,w=n("dba1"),g=n("808d"),x=n("6d6a"),m=n("69dd"),$=n("5670"),_=n("ebb6"),V=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buffer=500,t.defaultValue="DEFAULT",t.inputValue="",t.text="",t.subject$=new w["a"](t.defaultValue),t}return Object(l["b"])(t,e),t.prototype.created=function(){var e=this;this.observerSafe$(this.subject$).pipe(Object(x["a"])((function(){return Object(g["a"])(e.buffer)})),Object(m["a"])(),Object($["a"])((function(e){return"zzz"!==e.toLowerCase()})),Object(_["a"])((function(e){return e.toLowerCase()}))).subscribe((function(t){return e.text=t}))},t.prototype.onTextFieldChange=function(e){this.subject$.next(e||this.defaultValue)},t=Object(l["a"])([s["a"]],t),t}(O),S=V,z=S,C=(n("b689"),n("6544")),P=n.n(C),T=n("7496"),M=n("a523"),k=n("f6c4"),A=n("0fd9"),F=n("ba0d"),E=n("8654"),L=Object(y["a"])(z,u,i,!1,null,"e0cc5b84",null),D=L.exports;P()(L,{VApp:T["a"],VContainer:M["a"],VMain:k["a"],VRow:A["a"],VSlider:F["a"],VTextField:E["a"]}),r["a"].config.productionTip=!1,new r["a"]({components:{App:D},vuetify:o,el:"#app",template:"<App />"})}});
//# sourceMappingURL=app.d522aa6a.js.map