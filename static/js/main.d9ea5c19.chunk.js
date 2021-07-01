(this.webpackJsonpcrud_app=this.webpackJsonpcrud_app||[]).push([[0],{68:function(e,t,c){},70:function(e,t,c){},77:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(20),r=c.n(a),i=c(28),l=c(44),j=c.n(l),o=c(52),d=c(15),b=c(21),u=c(7),x=(c(68),c(1)),h=function(){return Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)("div",{className:"lds-dual-ring"})})},O=c(100),m=c(102),p=c(101),f=c(55),v=(c(70),function(){var e=Object(n.useContext)(_),t=Object(n.useRef)();return Object(x.jsxs)(O.a,{className:"header-main",expand:"lg",children:[Object(x.jsx)(O.a.Brand,{className:"heading",href:"/",children:Object(x.jsx)("b",{children:"CRUD Application"})}),Object(x.jsx)(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsxs)(O.a.Collapse,{id:"basic-navbar-nav",className:"collapse",children:[Object(x.jsxs)(m.a,{className:"mr-auto",children:[Object(x.jsx)(b.b,{to:"/create",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Create a post"}),Object(x.jsx)(b.b,{to:"/liked",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Liked Posts"}),Object(x.jsx)(b.b,{to:"/disliked",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Disliked Posts"}),Object(x.jsx)(b.b,{to:"/",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Home"})]}),Object(x.jsx)(p.a,{className:"form-search",children:Object(x.jsx)(f.a,{type:"text",ref:t,placeholder:"Search Posts...",className:"mr-sm-2",onChange:function(){return e(t.current.value)}})})]})]})}),g=c(103),k=c(41),C=c.n(k),N=c(97),y=c(42),D=c.n(y),w=(c(77),function(e){var t=e.statusDisplay,c=Object(n.useContext)(R),s=Object(n.useContext)(A),a=Object(n.useContext)(T),r=a.likedList,i=a.handleLiked,l=Object(n.useContext)(H),j=l.dislikedList,o=l.handleDisliked,d=Object(n.useContext)(I),b=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(g.a,{className:"text-center m-4 w-75",children:[Object(x.jsxs)(g.a.Header,{className:"card-header bg-dark text-white",children:[e.id," ",Object(x.jsxs)("b",{children:[e.title," "]})]}),Object(x.jsx)(g.a.Body,{children:e.body}),Object(x.jsxs)(g.a.Footer,{className:"d-flex justify-content-between align-items-center",children:[Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("div",{className:"".concat(r.includes(e)?"btn btn-success":"btn btn-light"," mx-2"),onClick:function(){return t=e.id,void i(t);var t},children:Object(x.jsx)(C.a,{})}),Object(x.jsx)("div",{className:"".concat(j.includes(e)?"btn btn-danger":"btn btn-light"),onClick:function(){return t=e.id,void o(t);var t},children:Object(x.jsx)(N.a,{})})]}),Object(x.jsxs)("b",{className:"d-flex ",children:["By"," ",Object(x.jsx)("div",{className:"mx-2",style:{textDecoration:"underline"},children:s.map((function(t){if(t.id==e.userId)return t.name}))})]}),Object(x.jsx)("div",{className:"d-flex",children:Object(x.jsx)("div",{className:"btn text-white d-flex align-items-center mx-2",style:{backgroundColor:"#ed0b4c"},onClick:function(){return d(e.id)},children:Object(x.jsx)(D.a,{})})})]})]})})};return Object(x.jsx)("div",{className:"d-flex flex-column align-items-center",children:"Disliked"==t?Object(x.jsx)(x.Fragment,{children:j.map(b)}):Object(x.jsx)(x.Fragment,{children:"Liked"==t?Object(x.jsx)(x.Fragment,{children:r.map(b)}):Object(x.jsx)(x.Fragment,{children:c.map(b)})})})}),S=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(w,{})]})},L=c(98),P=c(99),E=function(){var e=Object(u.f)(),t=Object(n.useState)(""),c=Object(d.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),i=Object(d.a)(r,2),l=i[0],j=i[1],o=Object(n.useState)(""),b=Object(d.a)(o,2),h=b[0],O=b[1],m=Object(n.useContext)(q);return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"75vh"},children:Object(x.jsxs)(g.a,{className:"w-100",style:{maxWidth:"800px",border:"1px solid"},children:[Object(x.jsx)(g.a.Header,{className:"card-heading text-center text-white bg-dark",children:Object(x.jsx)("b",{children:"Post Details"})}),Object(x.jsx)(g.a.Body,{children:Object(x.jsxs)(p.a,{onSubmit:function(t){return t.preventDefault(),e.push("/CRUD_Application"),void m(s,l,h)},children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"form-group col-md-6 ",children:Object(x.jsx)(p.a.Control,{className:"my-2",placeholder:"Name",value:s,onChange:function(e){return a(e.target.value)},required:!0})}),Object(x.jsx)("div",{className:"form-group col-md-6",children:Object(x.jsx)(p.a.Control,{className:"my-2",placeholder:"Title",value:l,onChange:function(e){return j(e.target.value)},required:!0})})]}),Object(x.jsx)(p.a.Group,{children:Object(x.jsx)(p.a.Control,{as:"textarea",rows:3,className:"my-2",placeholder:"Body",value:h,onChange:function(e){return O(e.target.value)},required:!0})}),Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)(P.a,{type:"submit",children:"CREATE"})})]})})]})})]})},B=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(w,{statusDisplay:"Disliked"})]})},F=function(){var e=Object(n.useContext)(T);e.likedList,e.handleLiked,Object(n.useContext)(A);return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(w,{statusDisplay:"Liked"})]})},R=s.a.createContext(),A=s.a.createContext(),T=s.a.createContext(),H=s.a.createContext(),I=s.a.createContext(),_=s.a.createContext(),q=s.a.createContext();var G=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),r=Object(d.a)(a,2),l=r[0],O=r[1],m=Object(n.useState)([]),p=Object(d.a)(m,2),f=p[0],v=p[1],g=Object(n.useState)(!0),k=Object(d.a)(g,2),C=k[0],N=k[1],y=Object(n.useState)([]),D=Object(d.a)(y,2),w=D[0],L=D[1],P=Object(n.useState)([]),G=Object(d.a)(P,2),U=G[0],J=G[1];return Object(n.useEffect)((function(){return function(){var e=Object(o.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,console.log(c),s(c),O(c),console.log(c),e.next=12,fetch("https://jsonplaceholder.typicode.com/users",{method:"GET"});case 12:return t=e.sent,e.next=15,t.json();case 15:c=e.sent,console.log(c),v(c),N(!1);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),Object(x.jsxs)("div",{className:"App",children:[C&&Object(x.jsx)(h,{}),!C&&Object(x.jsx)(b.a,{children:Object(x.jsx)(u.c,{children:Object(x.jsx)(R.Provider,{value:c,children:Object(x.jsx)(A.Provider,{value:f,children:Object(x.jsx)(T.Provider,{value:{likedList:w,handleLiked:function(e){var t=w,n=U;c.map((function(c){if(e==c.id&&!t.includes(c)&&(t.unshift(c),n.includes(c))){var s=n.indexOf(c);n.splice(s,1)}})),L(Object(i.a)(t)),J(Object(i.a)(n))}},children:Object(x.jsx)(H.Provider,{value:{dislikedList:U,handleDisliked:function(e){var t=U,n=w;c.map((function(c){if(e==c.id&&!t.includes(c)&&(t.unshift(c),n.includes(c))){var s=n.indexOf(c);n.splice(s,1)}})),J(Object(i.a)(t)),L(Object(i.a)(n))}},children:Object(x.jsx)(I.Provider,{value:function(e){s((function(t){return t.filter((function(t){return t.id!=e}))}))},children:Object(x.jsx)(_.Provider,{value:function(e){var t=[],c=new RegExp(e,"i");l.forEach((function(e){f.forEach((function(n){n.id==e.userId&&n.name.match(c)&&!t.includes(e)&&t.push(e)})),!e.title.match(c)&&!e.body.match(c)||t.includes(e)||t.push(e)})),s(t)},children:Object(x.jsxs)(q.Provider,{value:function(e,t,n){console.log(e,n,t);var s={},a={};s.userId=f.length+1,s.id=c.length+1,s.title=t,s.body=n,console.log(s),a.id=f.length+1,a.name=e,console.log(a),c.unshift(s),f.unshift(a),console.log(c)},children:[Object(x.jsx)(u.a,{exact:!0,path:"/",children:Object(x.jsx)(S,{})}),Object(x.jsx)(u.a,{path:"/liked",children:Object(x.jsx)(F,{})}),Object(x.jsx)(u.a,{path:"/disliked",children:Object(x.jsx)(B,{})}),Object(x.jsx)(u.a,{path:"/create",children:Object(x.jsx)(E,{})}),Object(x.jsx)(u.a,{path:"/CRUD_Application",children:Object(x.jsx)(S,{})})]})})})})})})})})})]})};c(79);r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(G,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.d9ea5c19.chunk.js.map