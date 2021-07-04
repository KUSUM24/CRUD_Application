(this.webpackJsonpcrud_app=this.webpackJsonpcrud_app||[]).push([[0],{68:function(e,t,c){},70:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(21),r=c.n(s),i=c(24),l=c(48),j=c.n(l),d=c(53),o=c(11),b=c(17),u=c(7),x=(c(68),c(1)),O=function(){return Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)("div",{className:"lds-dual-ring"})})},h=c(99),m=c(101),p=c(100),f=c(56),v=(c(70),function(){var e=Object(n.useContext)(G),t=Object(n.useRef)();return Object(x.jsxs)(h.a,{className:"header-main",expand:"lg",children:[Object(x.jsx)(h.a.Brand,{className:"heading",href:"/",children:Object(x.jsx)("b",{children:"CRUD Application"})}),Object(x.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsxs)(h.a.Collapse,{id:"basic-navbar-nav",className:"collapse",children:[Object(x.jsxs)(m.a,{className:"mr-auto",children:[Object(x.jsx)(b.b,{to:"/create",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Create a post"}),Object(x.jsx)(b.b,{to:"/liked",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Liked Posts"}),Object(x.jsx)(b.b,{to:"/disliked",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Disliked Posts"}),Object(x.jsx)(b.b,{to:"/CRUD_Application",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Home"})]}),Object(x.jsx)(p.a,{className:"form-search",children:Object(x.jsx)(f.a,{type:"text",ref:t,placeholder:"Search Posts...",className:"mr-sm-2",onChange:function(){return e(t.current.value)}})})]})]})}),g=c(102),C=c(44),y=c.n(C),N=c(96),k=c(45),D=c.n(k),w=c(46),S=c.n(w),P=function(e){var t=e.statusDisplay,c=Object(n.useContext)(_),a=Object(n.useContext)(F),s=Object(n.useContext)(I),r=Object(n.useContext)(W),i=(r.updateName,r.updatePost,r.handleUpdate),l=Object(n.useContext)(H),j=l.likedList,d=l.handleLiked,o=Object(n.useContext)(q),b=o.dislikedList,O=o.handleDisliked,h=Object(u.f)(),m=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(g.a,{className:"text-center m-4 w-75",style:{boxShadow:"5px 5px 10px rgb(131, 130, 130)"},children:[Object(x.jsx)(g.a.Header,{className:"card-header bg-dark text-white",children:Object(x.jsxs)("b",{children:[e.title," "]})}),Object(x.jsx)(g.a.Body,{children:e.body}),Object(x.jsxs)(g.a.Footer,{className:"d-flex justify-content-between align-items-center",children:[Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("div",{className:"".concat(j.includes(e)?"btn btn-success":"btn btn-light"," mx-2"),onClick:function(){return t=e.id,void d(t);var t},children:Object(x.jsx)(y.a,{})}),Object(x.jsx)("div",{className:"".concat(b.includes(e)?"btn btn-danger":"btn btn-light"),onClick:function(){return t=e.id,void O(t);var t},children:Object(x.jsx)(N.a,{})})]}),Object(x.jsxs)("b",{className:"d-flex ",children:["By"," ",Object(x.jsx)("div",{className:"mx-2",style:{textDecoration:"underline"},children:a.map((function(t){if(t.id==e.userId)return t.name}))})]}),Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("div",{className:"btn text-white d-flex align-items-center",style:{backgroundColor:"#5567ff"},onClick:function(){return t=e.id,i(t),void h.push("/update");var t},children:Object(x.jsx)(D.a,{})}),Object(x.jsx)("div",{className:"btn text-white d-flex align-items-center mx-2",style:{backgroundColor:"#ed0b4c"},onClick:function(){return s(e.id)},children:Object(x.jsx)(S.a,{})})]})]})]})})};return Object(x.jsx)("div",{className:"d-flex flex-column align-items-center",children:"Disliked"==t?Object(x.jsx)(x.Fragment,{children:b.map(m)}):Object(x.jsx)(x.Fragment,{children:"Liked"==t?Object(x.jsx)(x.Fragment,{children:j.map(m)}):Object(x.jsx)(x.Fragment,{children:c.map(m)})})})},E=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(P,{})]})},U=c(97),L=c(98),A=function(){var e=Object(u.f)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=(c[1],Object(n.useState)("")),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(n.useState)(""),d=Object(o.a)(j,2),b=d[0],O=d[1],h=Object(n.useContext)(J);return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(U.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"75vh"},children:Object(x.jsxs)(g.a,{className:"w-100",style:{maxWidth:"800px",border:"1px solid"},children:[Object(x.jsx)(g.a.Header,{style:{fontSize:"130%"},className:"card-heading text-center text-white bg-dark",children:Object(x.jsx)("b",{children:"Post Details"})}),Object(x.jsx)(g.a.Body,{children:Object(x.jsxs)(p.a,{onSubmit:function(t){return t.preventDefault(),e.push("/CRUD_Application"),void h(a,i,b)},children:[Object(x.jsx)("div",{className:"row"}),Object(x.jsxs)("div",{className:"form-group col-md-6",children:[Object(x.jsx)("label",{children:"Title"}),Object(x.jsx)(p.a.Control,{className:"my-2",placeholder:"Title",value:i,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(x.jsxs)(p.a.Group,{children:[Object(x.jsx)("label",{children:"Body"}),Object(x.jsx)(p.a.Control,{as:"textarea",rows:3,className:"my-2",placeholder:"Body",value:b,onChange:function(e){return O(e.target.value)},required:!0})]}),Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)(L.a,{type:"submit",children:"CREATE"})})]})})]})})]})},B=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(P,{statusDisplay:"Disliked"})]})},R=function(){var e=Object(n.useContext)(H);e.likedList,e.handleLiked,Object(n.useContext)(F);return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(P,{statusDisplay:"Liked"})]})},T=function(){var e=Object(n.useContext)(W),t=e.updateName,c=e.updatePost,a=(e.handleUpdate,e.handleUpdateDetails),s=Object(n.useState)(t),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(n.useState)(c.title),d=Object(o.a)(j,2),b=d[0],O=d[1],h=Object(n.useState)(c.body),m=Object(o.a)(h,2),f=m[0],C=m[1],y=Object(u.f)();return Object(x.jsxs)("div",{children:[" ",Object(x.jsx)(v,{}),Object(x.jsx)(U.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"75vh"},children:Object(x.jsxs)(g.a,{className:"w-100",style:{maxWidth:"800px",border:"1px solid"},children:[Object(x.jsx)(g.a.Header,{className:"card-heading text-center text-white bg-dark",children:Object(x.jsx)("b",{children:"Post Details"})}),Object(x.jsx)(g.a.Body,{children:Object(x.jsxs)(p.a,{onSubmit:function(e){return e.preventDefault(),y.push("/CRUD_Application"),void a(i,b,f,c.id)},children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"form-group col-md-6 ",children:[Object(x.jsx)("label",{children:"Creator Name"}),Object(x.jsx)(p.a.Control,{className:"my-2",value:i,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(x.jsxs)("div",{className:"form-group col-md-6",children:[Object(x.jsx)("label",{children:"Title"}),Object(x.jsx)(p.a.Control,{className:"my-2",value:b,onChange:function(e){return O(e.target.value)},required:!0})]})]}),Object(x.jsxs)(p.a.Group,{children:[Object(x.jsx)("label",{children:"Body"}),Object(x.jsx)(p.a.Control,{as:"textarea",rows:3,className:"my-2",value:f,onChange:function(e){return C(e.target.value)},required:!0})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsx)(L.a,{type:"submit",children:"UPDATE"}),Object(x.jsx)(L.a,{onClick:function(){y.push("/CRUD_Application")},className:"btn btn-dark",children:"BACK"})]})]})})]})})]})},_=a.a.createContext(),F=a.a.createContext(),H=a.a.createContext(),q=a.a.createContext(),I=a.a.createContext(),G=a.a.createContext(),J=a.a.createContext(),W=a.a.createContext();var z=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(o.a)(s,2),l=r[0],h=r[1],m=Object(n.useState)([]),p=Object(o.a)(m,2),f=p[0],v=p[1],g=Object(n.useState)(!0),C=Object(o.a)(g,2),y=C[0],N=C[1],k=Object(n.useState)([]),D=Object(o.a)(k,2),w=D[0],S=D[1],P=Object(n.useState)([]),U=Object(o.a)(P,2),L=U[0],z=U[1],K=Object(n.useState)({}),M=Object(o.a)(K,2),Q=M[0],V=M[1],X=Object(n.useState)(""),Y=Object(o.a)(X,2),Z=Y[0],$=Y[1];return Object(n.useEffect)((function(){return function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,a(c),h(c),e.next=10,fetch("https://jsonplaceholder.typicode.com/users",{method:"GET"});case 10:return t=e.sent,e.next=13,t.json();case 13:c=e.sent,v(c),N(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),Object(x.jsxs)("div",{className:"App",children:[y&&Object(x.jsx)(O,{}),!y&&Object(x.jsx)(b.a,{children:Object(x.jsx)(u.c,{children:Object(x.jsx)(_.Provider,{value:c,children:Object(x.jsx)(F.Provider,{value:f,children:Object(x.jsx)(H.Provider,{value:{likedList:w,handleLiked:function(e){var t=w,n=L;c.map((function(c){if(e==c.id&&!t.includes(c)&&(t.unshift(c),n.includes(c))){var a=n.indexOf(c);n.splice(a,1)}})),S(Object(i.a)(t)),z(Object(i.a)(n))}},children:Object(x.jsx)(q.Provider,{value:{dislikedList:L,handleDisliked:function(e){var t=L,n=w;c.map((function(c){if(e==c.id&&!t.includes(c)&&(t.unshift(c),n.includes(c))){var a=n.indexOf(c);n.splice(a,1)}})),z(Object(i.a)(t)),S(Object(i.a)(n))}},children:Object(x.jsx)(I.Provider,{value:function(e){a((function(t){return t.filter((function(t){return t.id!=e}))}))},children:Object(x.jsx)(G.Provider,{value:function(e){var t=[],c=(Object(i.a)(w),new RegExp(e,"i"));l.forEach((function(e){f.forEach((function(n){n.id==e.userId&&n.name.match(c)&&!t.includes(e)&&t.push(e)})),!e.title.match(c)&&!e.body.match(c)||t.includes(e)||t.push(e)})),a(t)},children:Object(x.jsx)(J.Provider,{value:function(e,t,n){var a={},s={};a.userId=f.length+1,a.id=c.length+1,a.title=t,a.body=n,s.id=f.length+1,s.name=e,c.unshift(a),f.unshift(s)},children:Object(x.jsxs)(W.Provider,{value:{updateName:Z,updatePost:Q,handleUpdate:function(e){c.map((function(t){e==t.id&&(V(t),f.forEach((function(e){e.id==t.userId&&$(e.name)})))}))},handleUpdateDetails:function(e,t,n,a){c.forEach((function(e){e.id==a&&(e.title=t,e.body=n)}))}},children:[Object(x.jsx)(u.a,{exact:!0,path:"/",children:Object(x.jsx)(E,{})}),Object(x.jsx)(u.a,{path:"/liked",children:Object(x.jsx)(R,{})}),Object(x.jsx)(u.a,{path:"/disliked",children:Object(x.jsx)(B,{})}),Object(x.jsx)(u.a,{path:"/create",children:Object(x.jsx)(A,{})}),Object(x.jsx)(u.a,{path:"/update",children:Object(x.jsx)(T,{})}),Object(x.jsx)(u.a,{path:"/CRUD_Application",children:Object(x.jsx)(E,{})})]})})})})})})})})})})]})};c(78);r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.d1c4175d.chunk.js.map