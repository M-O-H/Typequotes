(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{69:function(e,n,t){},80:function(e,n,t){},81:function(e,n,t){},82:function(e,n,t){"use strict";t.r(n);var c,r,a,i,o,s,l,u,d,j,b,f,m,p,O,x,h,g,v,y,w,k,N,S,B,E,q,C,z,T,L,F,I,D,J,M,R,W,A=t(1),G=t(38),H=t.n(G),_=t(4),K=t.n(_),P=t(9),Q=t(7),U=t(2),V=(t(44),t(3)),X=t(8),Y=t.n(X),Z=t(0),$=V.a.div(c||(c=Object(U.a)(["\n\tpadding: 0em;\n\twidth: 100%;\n\tdisplay:flex;\n\t// justify-content: center;\n"]))),ee=V.a.div(r||(r=Object(U.a)(["\n\tcolor: var(\t--text-color);\n\tpadding: 1.5rem 2rem;\n\tfont-size: 4rem;\n\tmargin: .5rem;\n"]))),ne=V.a.div(a||(a=Object(U.a)(["\n\tdisplay: flex;\n\tfont-family: var(--quoteBox-fontFamily);\n\tbackground-color: var(--quoteBox-background);\n\tjustify-content: center;\n\talign-items: center;\n\tflex-directoin: column;\n"]))),te=function(e){var n=e.result,t=function(){var e=Object(P.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.id){e.next=3;break}return e.next=3,Y.a.post("/result",n).catch((function(e){if(e)throw e}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(A.useEffect)((function(){document.onkeydown=null,t()}),[n]),Object(Z.jsxs)($,{children:[Object(Z.jsx)(ne,{children:Object(Z.jsx)(ee,{className:"wpm",children:n.wpm})}),Object(Z.jsx)(ne,{children:Object(Z.jsx)(ee,{className:"acc",children:n.accuracy})})]})},ce=t(17),re=t.n(ce),ae=(t(69),t(70),V.a.div(i||(i=Object(U.a)(["\ndisplay: flex;\nborder-radius; 10px;\njustify-content: center;\nalign-items: center;\nflex-direction: column;\n"])))),ie=V.a.div(o||(o=Object(U.a)(["\nalign-items: center;\ndisplay: grid;\ngrid-row-flow: column;\ngap: 2rem;\nwidth: fit-content;\nfont-family: var(--quoteBox-fontFamily);\nbackground-color: var(--quoteBox-background);\ncolor: var(--quoteBox-text-color);\ntransition: background 500ms, color 700ms ease-in-out;\npadding: 1em;\nborder-radius: .6em;\n"]))),oe=V.a.div(s||(s=Object(U.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 100%;\nheight: 100%;"]))),se=V.a.div(l||(l=Object(U.a)(["\n\tpadding-top: .4rem;\n"]))),le=V.a.button(u||(u=Object(U.a)(["\nbackground: none;\ncolor: #E9E1E1;\nborder: none;\nmargin-left: auto;\n"]))),ue=(V.a.button(d||(d=Object(U.a)(["\nfont-family: var(--quoteBox-fontFamily);\nbackground-color: var(--quoteBox-background);\ncolor: var(\t--text-color);\nborder: none;\n"]))),V.a.div(j||(j=Object(U.a)(["\n\tdisplay: flex;\n\tcolor: #E9E1E1;\n\tpadding: .4em 0;\n"])))),de=V.a.div(b||(b=Object(U.a)(["\ndisplay: grid;\ngrid-template-columns: repeat(2, 1fr);\ngap: 1.5em;\n"]))),je=function(){var e=Object(A.useState)(null),n=Object(Q.a)(e,2),t=n[0],c=n[1],r=Object(A.useState)({}),a=Object(Q.a)(r,2),i=a[0],o=a[1],s=Object(A.useState)((function(){})),l=Object(Q.a)(s,2),u=l[0],d=l[1],j=Object(A.useState)(null),b=Object(Q.a)(j,2),f=b[0],m=b[1],p=Object(A.useState)((function(){return!1})),O=Object(Q.a)(p,2),x=O[0],h=O[1],g=Object(A.useState)({c:0}),v=Object(Q.a)(g,2),y=v[0],w=v[1],k=Object(A.useState)({t:null}),N=Object(Q.a)(k,2),S=N[0],B=N[1],E=Object(A.useState)((function(){return"off"})),q=Object(Q.a)(E,2),C=q[0],z=q[1],T=Object(A.useRef)([]),L=function(){var e=Object(P.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(),e.next=3,Y.a.get("https://api.quotable.io/random").then((function(e){T.current=Array(e.data.content.length).fill().map((function(e,n){return T.current[n]||Object(A.createRef)()})),o(e.data),h(!0)})).catch((function(e){throw e}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(P.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("/user").then((function(e){200==e.status&&c(e.data.id)})).catch((function(e){500===e.response.status?console.log("server error"):console.log(e.response.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e,n){var c=u,r=y;null==S.t&&B(S.t=new Date),e===n[c.i].current.innerText?(n[c.i].current.className="done",c.i+=1,r.c+=1,w(r),d(c)):"Backspace"===e&&c.i>0?(r.c-=1,n[c.i].current.className="",c.i-=1,d(c),n[c.i].current.className=""):e!==n[c.i].current.innerHTMLL&&(n[c.i].current.className="incorrect",c.i+=1,d(c)),c.i==n.length?(!function(){var e=(new Date-S.t)/1e3,n=i.content.split(" ").length,c=Math.floor(n/e*60),r=i.content.split("").length-y.c,a=Math.floor((y.c-r)/i.content.length*100);m({wpm:c,accuracy:a>0?a:0,quoteInfo:i,id:t})}(),window.removeEventListener("keydown",D)):n[c.i].current.className="cursor"},D=function(e){var n=T.current;"off"===C&&z("on"),I(e.key,n)},J=function(e){e.target.blur(),L()},M=function(){m(null),h(!1),d({i:0}),w({c:0}),z("off")};return Object(A.useEffect)((function(){L(),F(),console.log("once")}),[]),Object(A.useEffect)((function(){return 1==x&&T.current.map((function(e,n){e.current.className=0==n?"cursor":null})),window.addEventListener("keydown",D),function(){return window.removeEventListener("keydown",D)}}),[i]),Object(Z.jsx)(ae,{children:Object(Z.jsx)(ie,{children:Object(Z.jsx)(se,{children:null==f?Object(Z.jsx)(Z.Fragment,{children:x?Object(Z.jsxs)(Z.Fragment,{children:[i.content.split("").map((function(e,n){return Object(Z.jsx)("span",{ref:T.current[n],className:"",children:e.toLowerCase()},n)})),Object(Z.jsxs)(ue,{children:[Object(Z.jsxs)(de,{children:[Object(Z.jsxs)("div",{children:["Game / ",C]}),Object(Z.jsxs)("div",{children:["Words / ",i.content.split(" ").length]})]}),Object(Z.jsxs)(le,{type:"submit",tabindex:"-1",onClick:J,className:"disabled",children:["Next quote",Object(Z.jsx)("span",{className:"iconify","data-icon":"grommet-icons:form-next-link"})]})]})]}):Object(Z.jsx)(oe,{className:"SpinnerWrapper",children:Object(Z.jsx)(re.a,{className:"spinner",animation:"border"})})}):Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(te,{result:f}),Object(Z.jsxs)(le,{type:"submit",tabindex:"-1",onClick:J,className:"disabled",children:["Next quote",Object(Z.jsx)("span",{className:"iconify","data-icon":"grommet-icons:form-next-link"})]})]})})})})},be=t(14),fe=V.a.div(f||(f=Object(U.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding: 0 2rem;\n"]))),me=V.a.div(m||(m=Object(U.a)(["\nfont-size: 1rem;\nalign-items: center;\ndisplay: grid;\ngrid-auto-flow: column;\ngap: 2rem;\nwidth: fit-content;\n"]))),pe=V.a.div(p||(p=Object(U.a)(['\nfont-size: 2em;\nfont-family:  "Roboto Mono";\ncolor: lightgoldenrodyellow;\n']))),Oe=V.a.span(O||(O=Object(U.a)(["\n\tcolor: var(--icons-text-color);\n\tbackground-color: var(--icons-background);\n\tcursor: pointer;\n\tfont-size: 1.7em;\n"]))),xe=V.a.span(x||(x=Object(U.a)(["\n\tcolor: var(--icons-text-color);\n\tbackground-color: var(--icons-background);\n\tcursor: pointer;\n\tfont-size: 1.5em;\n"]))),he=function(){return Object(Z.jsxs)(fe,{children:[Object(Z.jsxs)(pe,{children:[Object(Z.jsx)("div",{children:"Type"}),Object(Z.jsx)("div",{children:"quotes"})]}),Object(Z.jsxs)(me,{children:[Object(Z.jsx)(be.b,{to:"/",children:Object(Z.jsx)(Oe,{className:"iconify","data-icon":"fluent:keyboard-layout-split-24-filled"})}),Object(Z.jsx)(be.b,{to:"/settings",children:Object(Z.jsx)(Oe,{className:"iconify","data-icon":"fluent:dark-theme-24-filled"})}),Object(Z.jsx)(be.b,{to:"/profile",children:Object(Z.jsx)(Oe,{className:"iconify","data-icon":"carbon:user-avatar-filled"})}),Object(Z.jsx)(be.b,{to:"/rank",children:Object(Z.jsx)(xe,{className:"iconify","data-icon":"fa-solid:crown"})})]})]})},ge=V.a.div(h||(h=Object(U.a)(["\nheight: 100%;\n"]))),ve=V.a.div(g||(g=Object(U.a)(["\nalign-self: start;\ntext-align: center;\nfont-size: 1rem;\npadding: .4rem;\ncursor: pointer;\ncolor: #fff;\nbox-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;\nborder-radius: 4px;\ntransition: all 500ms;\n"]))),ye=V.a.div(v||(v=Object(U.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n"]))),we=V.a.div(y||(y=Object(U.a)(["\ndisplay: grid;\nalign-items: center;\ngrid-template-columns: repeat(3, 1fr);\ngrid-template-columns: repeat(3, minmax(200px, 1fr));\ngrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\ngap: 1rem;\npadding: 0 3rem;\nwidth: 100%;\n"]))),ke=V.a.div(w||(w=Object(U.a)(["\n\tfont-size: 20px;\n\tpadding: 2rem;\n\ttext-align: center;\n\tcolor: var(--text-color)\n"]))),Ne=function(){var e=Object(A.useRef)("default"),n=function(n){document.body.classList.replace(e.current,n),e.current=n,localStorage.setItem("theme",e.current)};return Object(Z.jsxs)(ge,{children:[Object(Z.jsx)(ke,{children:"Themes"}),Object(Z.jsx)(ye,{children:Object(Z.jsxs)(we,{children:[Object(Z.jsx)(ve,{className:"DefaultBtn",onClick:function(){return n("default")},children:"Default"}),Object(Z.jsx)(ve,{className:"ishtarBtn",onClick:function(){return n("ishtar")},children:"Ishtar"}),Object(Z.jsx)(ve,{className:"bentoBtn",onClick:function(){return n("bento")},children:"bento"}),Object(Z.jsx)(ve,{className:"archBtn",onClick:function(){return n("arch")},children:"Arch"}),Object(Z.jsx)(ve,{className:"campingBtn",onClick:function(){return n("camping")},children:"camping"})]})})]})},Se=V.a.div(k||(k=Object(U.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: var(--quoteBox-background);\n"]))),Be=V.a.h1(N||(N=Object(U.a)(["\n\tcolor: var(--text-color);\n"]))),Ee=(V.a.img(S||(S=Object(U.a)(["\n\twidth: 3em;\n\theight: 3em;\n"]))),V.a.span(B||(B=Object(U.a)(["\nbackground: lightblue;\npadding: 3rem;\nborder-radius: 5rem;\n"]))),function(e,n){var t=e.props,c=n.serialize,r=void 0===c?JSON.stringify:c,a=n.deserialize;void 0===a&&JSON.parse;return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("img",{width:"25%",src:t.img}),Object(Z.jsx)(Se,{}),Object(Z.jsx)(Be,{children:t.username}),Object(Z.jsx)(Be,{children:r(t.wpm)}),Object(Z.jsx)(Be,{children:r(t.rank)})]})}),qe=V.a.div(E||(E=Object(U.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-item: center;\n\tpadding: 0 3em;\n"]))),Ce=V.a.div(q||(q=Object(U.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 100%;\nheight: 100%;"]))),ze=function(){var e=Object(A.useState)((function(){return null})),n=Object(Q.a)(e,2),t=n[0],c=n[1];return Object(A.useEffect)((function(){var e=Y.a.CancelToken.source(),n=function(){var e=Object(P.a)(K.a.mark((function e(n){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("/userInfo",{cancelToken:n}).then((function(e){200==e.status?c(e.data):c(null)})).catch((function(e){500===e.response.status?console.log("server error"):console.log(e.response.data),c(null)}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return n(e.token),function(){e.cancel()}}),[]),Object(Z.jsx)(qe,{children:null===t?Object(Z.jsx)(Ce,{className:"SpinnerWrapper",children:Object(Z.jsx)(re.a,{className:"spinner",animation:"border"})}):Object(Z.jsx)(Ee,{props:t})})},Te=t(5),Le=t(43),Fe=t.n(Le),Ie=V.a.div(C||(C=Object(U.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-item: center;\n\tpadding: 3rem;\n"]))),De=function(){var e=Object(P.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"/auth/google",window.open("/auth/google","_self","width=500, height=600");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Je=function(){var e=Object(A.useState)((function(){return!1})),n=Object(Q.a)(e,2),t=n[0],c=n[1];return Object(A.useEffect)((function(){var e=Y.a.CancelToken.source(),n=function(){var e=Object(P.a)(K.a.mark((function e(n){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("/user",{cancelToken:n}).then((function(e){200==e.status?c(!0):c(!1)})).catch((function(e){500===e.response.status?console.log("server error"):console.log(e.response.data)}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return n(e.token),function(){e.cancel()}}),[]),Object(Z.jsx)(Ie,{children:t?Object(Z.jsx)(Te.a,{to:"/profile"}):Object(Z.jsx)(Fe.a,{onClick:De,style:{width:"17em"}})})},Me=V.a.div(z||(z=Object(U.a)(["\n"]))),Re=V.a.div(T||(T=Object(U.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(6, 1fr);\n\tbackground: var(--quoteBox-background);\n\talign-items: center;\n\tborder-radius: .6em;\n\tmargin: 1em 0;\n\tpadding: .6em 0; \n"]))),We=V.a.div(L||(L=Object(U.a)(["\n\ttext-align: center;\n\tfont-size: .9rem;\n\tcolor: #fff;\n"]))),Ae=V.a.img(F||(F=Object(U.a)(["\n\twidth: 3em;\n\theight: 3em;\n"]))),Ge=V.a.div(I||(I=Object(U.a)(["\ndisplay: grid;\ngrid-template-columns: repeat(6, 1fr);\nalign-items: center;\nborder-radius: .7em;\n"]))),He=V.a.div(D||(D=Object(U.a)(["\n\tfont-size: 1rem;\n\ttext-align: center;\n\tcolor: #fff;\n\tcolor: var(\t--quoteBox-text-color)\n"]))),_e=V.a.div(J||(J=Object(U.a)(["\n\tbackground-color: var--quoteBox-background);\n\theight: 100%;\n\t"]))),Ke=V.a.div(M||(M=Object(U.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 100%;\nheight: 100%;\n"]))),Pe=function(){var e=Object(A.useState)((function(){return null})),n=Object(Q.a)(e,2),t=n[0],c=n[1],r=1;return Object(A.useEffect)((function(){var e=Y.a.CancelToken.source(),n=function(){var e=Object(P.a)(K.a.mark((function e(n){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("/board",{cancelToken:n}).then((function(e){200==e.status?c(e.data):c(null)})).catch((function(e){500==e.response.status&&console.log("netwrok error")}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return n(e.token),function(){e.cancel()}}),[]),Object(Z.jsxs)(Me,{children:[Object(Z.jsxs)(Ge,{children:[Object(Z.jsx)(He,{children:"#"}),Object(Z.jsx)(He,{}),Object(Z.jsx)(He,{children:"username"}),Object(Z.jsx)(He,{children:"rank"}),Object(Z.jsx)(He,{children:"wpm"}),Object(Z.jsx)(He,{children:"accuracy"})]}),Object(Z.jsx)(_e,{children:null===t?Object(Z.jsx)(Ke,{className:"SpinnerWrapper",children:Object(Z.jsx)(re.a,{className:"spinner",animation:"border"})}):t.map((function(e){return Object(Z.jsx)("div",{children:Object(Z.jsxs)(Re,{className:"box",children:[Object(Z.jsx)(We,{children:r++}),Object(Z.jsx)(We,{children:Object(Z.jsx)(Ae,{src:e.img})}),Object(Z.jsx)(We,{children:e.username}),Object(Z.jsx)(We,{children:e.rank}),Object(Z.jsx)(We,{children:e.wpm}),Object(Z.jsxs)(We,{children:[e.accuracy,"%"]})]})},e.googleId)}))})]})},Qe=(t(80),t(81),V.a.div(R||(R=Object(U.a)(["\nmax-width: 1000px;\nwidth: 100%;\ndisplay: grid;\ngrid-template-rows: auto 1fr auto;\ngrid-auto-flow: row;\ngap: 1em;\nmin-height: 100vh;\npadding: 2rem;\n"]))));V.a.div(W||(W=Object(U.a)(["\n  color: #fff;\n"])));var Ue=function(){var e=Object(A.useState)((function(){return!1})),n=Object(Q.a)(e,2),t=n[0],c=n[1],r=function(){var e=Object(P.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("/user").then((function(e){200==e.status?c(!0):c(!1)})).catch((function(e){500===e.response.status?console.log("server error"):console.log(e.response.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(A.useEffect)((function(){r()}),[]),Object(Z.jsx)("div",{className:"App",children:Object(Z.jsx)(be.a,{children:Object(Z.jsxs)(Qe,{children:[Object(Z.jsx)(he,{}),Object(Z.jsxs)(Te.d,{children:[Object(Z.jsx)(Te.b,{path:"/",exact:!0,component:je}),Object(Z.jsx)(Te.b,{path:"/settings",exact:!0,component:Ne}),Object(Z.jsx)(Te.b,{path:"/failed",children:"Error loging in. please try again later!"}),Object(Z.jsx)(Te.b,{path:"/success",exact:!0,children:"thanks for login in "}),Object(Z.jsx)(Te.b,{path:"/login",exact:!0,component:Je}),Object(Z.jsx)(Te.b,{path:"/rank",exact:!0,component:Pe}),!0===t?Object(Z.jsx)(Te.b,{path:"/profile",exact:!0,component:ze}):Object(Z.jsx)(Te.a,{to:"/login"})]})]})})})},Ve=localStorage.getItem("theme"),Xe=function(){return Ve&&document.body.classList.add(Ve),Object(Z.jsx)(Ue,{})};H.a.render(Object(Z.jsx)(Xe,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.73195a7b.chunk.js.map