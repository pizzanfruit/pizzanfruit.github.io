(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1d0e9cb3":"663e15a3","chunk-5c807ec2":"c8a37753","chunk-66d3a6b4":"73dde73e","chunk-79de6dfb":"e90e5603"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-1d0e9cb3":1,"chunk-5c807ec2":1,"chunk-66d3a6b4":1,"chunk-79de6dfb":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1d0e9cb3":"b252b25b","chunk-5c807ec2":"45b82870","chunk-66d3a6b4":"c2eda8c6","chunk-79de6dfb":"633e8de4"}[e]+".css",a=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],u=s.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,n(o)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e),u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/fun/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1a5d":function(e,t,n){var r={"./CreateRoom.vue":["992f","chunk-79de6dfb"],"./Room.vue":["3ab1","chunk-66d3a6b4"],"./Rooms.vue":["b924","chunk-1d0e9cb3"],"./Setup.vue":["da7d","chunk-5c807ec2"]};function a(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(r)},a.id="1a5d",e.exports=a},"2de2":function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"e",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"g",function(){return s}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u}),n.d(t,"d",function(){return r});n("cadf"),n("551c"),n("097d");var r,a=4,o=20,i=20,s="fpt-building",c="https://ancient-mesa-14421.herokuapp.com",u="wss://ancient-mesa-14421.herokuapp.com/ws";(function(e){e[e["MissingRequiredItem"]=1]="MissingRequiredItem",e[e["MaxLengthExceeded"]=2]="MaxLengthExceeded"})(r||(r={}))},4045:function(e,t,n){e.exports=n.p+"img/loading.6e8767f1.svg"},"4b4d":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},"71ad":function(e,t,n){},a507:function(e,t,n){"use strict";var r=n("ae8f"),a=n.n(r);a.a},ae8f:function(e,t,n){},c214:function(e,t,n){"use strict";var r=n("4b4d"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("69b4"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"top-menu"}},[n("Chat"),n("PlayerInfo"),n("GlobalLoading")],1),n("router-view")],1)},i=[],s=n("d4ec"),c=n("99de"),u=n("7e84"),l=n("262e"),d=n("9ab4"),f=n("60a3");r["default"].directive("focus",{inserted:function(e){e.focus()}}),r["default"].directive("click-outside",{bind:function(e,t,n){e.clickOutsideEvent=function(r){e===r.target||e.contains(r.target)||n.context[t.expression](r)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}});var p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"setup"!==e.$route.name?n("div",{staticClass:"player-info"},[n("div",{staticClass:"greetings"},[e._v("\n    Hi,\n    "),n("span",{staticClass:"blue"},[e._v(e._s(e.playerName))])]),n("div",{staticClass:"menus"},[n("button",{attrs:{type:"button"},on:{click:e.handleChangeName}},[e._v("Change name")])])]):e._e()},h=[],b=(n("7f7f"),n("bee2")),m=n("4bb5"),v=Object(m["c"])("players"),y=function(e){function t(){return Object(s["a"])(this,t),Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(b["a"])(t,[{key:"handleChangeName",value:function(){this.$router.push({name:"setup"})}}]),t}(f["c"]);d["__decorate"]([v.State(function(e){return e.current.name})],y.prototype,"playerName",void 0),y=d["__decorate"]([f["a"]],y);var g=y,O=g,_=(n("a507"),n("2877")),k=Object(_["a"])(O,p,h,!1,null,"19d98d52",null);k.options.__file="PlayerInfo.vue";var w=k.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$route.name&&"setup"===e.$route.name?e._e():n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closeList,expression:"closeList"}],staticClass:"chat"},[n("div",{staticClass:"box",on:{click:e.handleBoxClick}},[e._v("\n    Online\n    "),n("span",{class:e.onlinePlayersCount>0?"green":"red",staticStyle:{"margin-left":"0.2rem"}},[e._v(e._s(e.onlinePlayersCount))]),n("div",{class:e.showOnlineList?"up caret":"down caret"})]),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.showOnlineList,expression:"showOnlineList"}],staticClass:"list"},e._l(e.onlinePlayers,function(t){return n("li",{key:t.id,class:{active:e.currentPlayerName===t.id},on:{click:function(n){e.setCurrentPlayer(t.id)}}},[e._v(e._s(t.id))])})),n("div",{staticClass:"chatbox"})])},j=[],P=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.currentPlayerName="",e.showOnlineList=!1,e}return Object(l["a"])(t,e),Object(b["a"])(t,[{key:"handleBoxClick",value:function(){this.showOnlineList=!this.showOnlineList}},{key:"setCurrentPlayer",value:function(e){this.currentPlayerName=this.currentPlayerName===e?"":e}},{key:"closeList",value:function(){this.showOnlineList=!1}},{key:"onlinePlayersCount",get:function(){return this.onlinePlayers.length}}]),t}(f["c"]);d["__decorate"]([Object(m["b"])("onlinePlayers")],P.prototype,"onlinePlayers",void 0),P=d["__decorate"]([f["a"]],P);var L=P,x=L,E=(n("c214"),Object(_["a"])(x,C,j,!1,null,"7a283021",null));E.options.__file="Chat.vue";var N=E.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.showGlobalLoading,expression:"showGlobalLoading"}],staticClass:"loading"},[r("img",{attrs:{src:n("4045")}})])},I=[],S=function(e){function t(){return Object(s["a"])(this,t),Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(f["c"]);d["__decorate"]([m["b"]],S.prototype,"showGlobalLoading",void 0),S=d["__decorate"]([f["a"]],S);var A=S,T=A,$=(n("fa5f"),Object(_["a"])(T,R,I,!1,null,"ba9e8c68",null));$.options.__file="GlobalLoading.vue";var M=$.exports,F=function(e){function t(){return Object(s["a"])(this,t),Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(f["c"]);F=d["__decorate"]([Object(f["a"])({components:{PlayerInfo:w,Chat:N,GlobalLoading:M}})],F);var G=F,B=G,D=(n("5c0b"),Object(_["a"])(B,o,i,!1,null,null,null));D.options.__file="App.vue";var q=D.exports,z=n("8c4f"),J=n("be94"),U=n("59ca"),V=n.n(U),Y=(n("e71f"),n("2f62")),H=n("3317"),K=n("2de2"),X=(n("6762"),n("2fdb"),{current:{name:""}}),Z={allInRoom:function(e,t,n,r){return n.onlinePlayers.filter(function(e){return r["rooms/current"]&&r["rooms/current"].playerByIds.includes(e.id)})}},Q={},W={setCurrentName:function(e,t){sessionStorage.setItem("pepper-session-playerName",t),e.current.name=t}},ee={namespaced:!0,state:X,getters:Z,actions:Q,mutations:W},te=ee,ne=(n("7514"),{all:[],currentId:void 0,currentChat:{messages:[]}}),re={current:function(e){return e.all.find(function(t){return t.id===e.currentId})}},ae=Object(H["a"])(function(e,t){var n=e.bindFirebaseRef;e.unbindFirebaseRef;n("all",t)}),oe=Object(H["a"])(function(e,t){var n=e.bindFirebaseRef;e.unbindFirebaseRef;n("currentChat",t)}),ie={setAllRef:ae,setCurrentChatRef:oe,setCurrentChat:function(e){var t=e.state,n=(e.commit,e.dispatch);n("setCurrentChatRef",le.collection("chats").doc(t.currentId))}},se={addNew:function(e,t){e.all.push(t)},setCurrentId:function(e,t){e.currentId=t},appendChat:function(e,t){e.currentChat||(e.currentChat={messages:[]}),e.currentChat.messages.push(t)}},ce={namespaced:!0,state:ne,getters:re,actions:ie,mutations:se},ue=ce;V.a.initializeApp({apiKey:"AIzaSyCZkf74YzoEd0177IhFAs13gDnOj3LDJt0",authDomain:"fpt-building.firebaseapp.com",projectId:K["g"]});var le=V.a.firestore();le.settings({timestampsInSnapshots:!0}),r["default"].use(Y["a"]);var de=Object(H["a"])(function(e,t){var n=e.bindFirebaseRef;e.unbindFirebaseRef;n("onlinePlayers",t)}),fe={state:{showGlobalLoading:!1,DEFAULT_MAX_PLAYERS:K["c"],socket:void 0,onlinePlayers:[]},modules:{players:te,rooms:ue},mutations:Object(J["a"])({setSocket:function(e,t){e.socket=t},setGlobalLoading:function(e,t){e.showGlobalLoading=t}},H["b"]),actions:{setOnlinePlayersRef:de},getters:{}},pe=new Y["a"].Store(fe);function he(e,t,r){return{path:e,name:t,component:function(){return n("1a5d")("./".concat(r,".vue"))}}}r["default"].use(z["a"]);var be=new z["a"]({routes:[{path:"/",redirect:function(e){return"/setup"}},he("/setup","setup","Setup"),he("/rooms","rooms","Rooms"),he("/rooms/create","create-room","CreateRoom"),he("/rooms/:id","room","Room")]});be.beforeEach(function(e,t,n){if("/setup"!==e.path){if(!pe.state.socket)return void n("/setup");if(pe.state.players&&pe.state.players.current.name)n();else{var r=sessionStorage.getItem("pepper-session-playerName");r?(pe.commit("players/setCurrentName",r),n()):n("/setup")}}else n()});var me=be;r["default"].config.productionTip=!1,new r["default"]({router:me,store:pe,render:function(e){return e(q)},created:function(){this.$store.dispatch("setOnlinePlayersRef",le.collection("players")),this.$store.dispatch("rooms/setAllRef",le.collection("rooms"))}}).$mount("#app"),a["init"]({dsn:"https://be427c7158c94035a0e835e44cddcdf2@sentry.io/1325746",integrations:[new a["Integrations"].Vue({Vue:r["default"]})]})},fa5f:function(e,t,n){"use strict";var r=n("71ad"),a=n.n(r);a.a}});
//# sourceMappingURL=app.14435fd2.js.map