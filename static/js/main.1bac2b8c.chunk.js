(this["webpackJsonpfood-koala"]=this["webpackJsonpfood-koala"]||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);var i,n,o=t(2),c=t(0),s=t.n(c),l=t(10),r=t.n(l),d=t(66),p=t(11),j=(t(96),t(26)),b=t(67),m=t(29),g=(t(97),t(139)),h=t(144),f=t(145),u=t(146),x=t(44),O=t(147),y=t(141),k=t(163),w=t(15),N=t(143),M=Object(g.a)((function(e){return{search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(w.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(w.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(j.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),G=function(e){var a=e.setIsSearch,t=M();return Object(c.useEffect)((function(){document.getElementById("searchInputField").focus()}),[]),Object(o.jsxs)("div",{className:t.search,children:[Object(o.jsx)("div",{className:t.searchIcon,children:Object(o.jsx)(y.a,{})}),Object(o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(o.jsx)(k.a,{placeholder:"Search\u2026",id:"searchInputField",classes:{root:t.inputRoot,input:t.inputInput},style:{flexGrow:1},inputProps:{"aria-label":"search"}}),Object(o.jsx)(N.a,{style:{marginRight:10},onClick:function(){return a(!1)}})]})]})},S=Object(g.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),T=function(e){var a=e.toggleDrawer,t=Object(c.useState)(!1),i=Object(m.a)(t,2),n=i[0],s=i[1],l=S();return Object(o.jsx)("div",{children:Object(o.jsx)(h.a,{position:"static",style:{backgroundColor:"#FB9F00"},children:Object(o.jsx)(f.a,{children:n?Object(o.jsx)(G,{setIsSearch:s}):Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)(u.a,{edge:"start",onClick:a("left",!0),className:l.menuButton,color:"inherit","aria-label":"menu",children:Object(o.jsx)(O.a,{})}),Object(o.jsx)(x.a,{variant:"h6",className:l.title,children:"FoodKoala"}),Object(o.jsx)(u.a,{onClick:function(){return s(!n)},children:Object(o.jsx)(y.a,{style:{color:"#fff"}})})]})})})})},v=t(148),B=t(149),C=t(150),P=t(151),L=t(152),D=Object(g.a)({root:{width:"100%",WebkitBoxShadow:"0px -2px 5px 0px rgba(0,0,0,0.25)",MozBoxShadow:"0px -2px 5px 0px rgba(0,0,0,0.25)",boxShadow:"0px -2px 5px 0px rgba(0,0,0,0.25)","& .Mui-selected":{color:"#FB9F00"}}}),F=function(){var e=s.a.useState(0),a=Object(m.a)(e,2),t=a[0],i=a[1],n=D(),c=Object(p.e)(),l=function(e){c.push(e)};return Object(o.jsxs)(v.a,{value:t,onChange:function(e,a){i(a)},showLabels:!0,className:n.root,children:[Object(o.jsx)(B.a,{onClick:function(){return l("/")},icon:Object(o.jsx)(C.a,{})}),Object(o.jsx)(B.a,{icon:Object(o.jsx)(P.a,{}),disabled:!0}),Object(o.jsx)(B.a,{onClick:function(){return l("/cart")},icon:Object(o.jsx)(L.a,{})}),Object(o.jsx)(B.a,{icon:Object(o.jsx)(O.a,{}),disabled:!0})]})},A=t(153),I=t(76),E=t(54),R=t(7),z=t(77),W=t(78),J=t(70),K=(t(103),i=function(){function e(){Object(E.a)(this,e),Object(z.a)(this,"showDetailsModal",n,this)}return Object(W.a)(e,[{key:"toggleDetailsModal",value:function(e){this.showDetailsModal=e}}]),e}(),n=Object(J.a)(i.prototype,"showDetailsModal",[R.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(J.a)(i.prototype,"toggleDetailsModal",[R.f],Object.getOwnPropertyDescriptor(i.prototype,"toggleDetailsModal"),i.prototype),i);Object(R.g)({enforceActions:"always"});var V=new function e(){Object(E.a)(this,e),this.appStore=new K},Y=Object(c.createContext)(V),q=function(){return Object(c.useContext)(Y)},H=t(55),Q=Object(H.a)((function(){var e=q().appStore;return Object(o.jsx)("div",{style:{backgroundColor:"#EDF2F3",flexGrow:1,overflowY:"scroll"},children:Object(o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",margin:".5em",gridGap:".5em"},children:I.map((function(a,t){return Object(o.jsxs)("div",{style:{backgroundColor:"#fff",borderRadius:3,WebkitBoxShadow:"0px 0px 9px 1px rgba(0,0,0,0.2)",MozBoxShadow:"0px 0px 9px 1px rgba(0,0,0,0.2)",boxShadow:"0px 0px 9px 1px rgba(0,0,0,0.2)"},onClick:function(){return e.toggleDetailsModal(!0)},children:[Object(o.jsxs)("div",{style:{textAlign:"center",margin:"10px 0 5px 0",paddingTop:a.isNew||a.isBestSeller?15:0,position:"relative"},children:[a.isNew&&Object(o.jsx)("span",{style:{clipPath:"polygon(0 0, 100% 0%, 84% 100%, 0% 100%)",backgroundColor:"#de0c17",fontSize:9,fontWeight:"bold",position:"absolute",top:-7,left:0,padding:"2px 10px 2px 5px",color:"#fff"},children:"NEW"}),a.isBestSeller&&Object(o.jsx)("span",{style:{clipPath:"polygon(0 0, 100% 0%, 84% 100%, 0% 100%)",backgroundColor:"#de0c17",fontSize:9,fontWeight:"bold",position:"absolute",top:-7,left:0,padding:"2px 15px 2px 5px",color:"#fff"},children:"BEST SELLER"}),Object(o.jsx)("img",{src:"".concat("https://hermilanastacio.github.io/food-koala","/products/").concat(a.imageName),alt:"Product",style:{height:70}})]}),Object(o.jsx)("h5",{style:{textAlign:"center",margin:0},children:a.name}),Object(o.jsxs)("p",{style:{textAlign:"center",margin:"5px 0"},children:["\u20b1",a.price," ",Object(o.jsx)("del",{style:{fontSize:9,color:"#c1bcbc"},children:"".concat(a.oldPrice?"\u20b1".concat(a.oldPrice):"")})]}),Object(o.jsx)("p",{style:{textAlign:"center",margin:"10px 0"},children:Object(o.jsx)(A.a,{variant:"contained",onClick:function(e){return function(e){e.stopPropagation()}(e)},style:{backgroundColor:"#FB9F00",color:"#fff",padding:"3px 7px",fontSize:8},children:"Add to cart"})})]},t)}))})})})),U=t(154),X=t(157),Z=t(155),$=t(156),_=t.p+"static/media/milktea.58ab2a81.png",ee=Object(H.a)((function(){var e=q().appStore;return Object(o.jsxs)(U.a,{open:e.showDetailsModal,onClose:function(){return e.toggleDetailsModal(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:20},children:[Object(o.jsx)("h3",{style:{margin:0},children:"Product Details"}),Object(o.jsx)(N.a,{onClick:function(){return e.toggleDetailsModal(!1)}})]}),Object(o.jsxs)(Z.a,{children:[Object(o.jsx)("div",{style:{textAlign:"center"},children:Object(o.jsx)("img",{src:_,alt:"Product",style:{height:150}})}),Object(o.jsx)("h3",{children:"Matcha Milk Tea"}),Object(o.jsx)($.a,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google."}),Object(o.jsx)("p",{children:"\u20b1 120.00"})]}),Object(o.jsxs)(X.a,{children:[Object(o.jsx)(A.a,{onClick:function(){return e.toggleDetailsModal(!1)},color:"primary",children:"Cancel"}),Object(o.jsx)(A.a,{onClick:function(){return e.toggleDetailsModal(!1)},variant:"contained",style:{backgroundColor:"#FB9F00",color:"#fff"},autoFocus:!0,children:"Add to cart"})]})]})})),ae=t(4),te=t(164),ie=t(158),ne=t(159),oe=t(160),ce=t(161),se=t(37),le=t.n(se),re=t(79),de=t.n(re),pe=t(80),je=t.n(pe),be=t(162),me=t(38),ge=t.n(me),he=Object(g.a)((function(e){return{list:{width:250},fullList:{width:"auto"},nested:{paddingLeft:e.spacing(4)}}})),fe=function(e){var a=e.toggleDrawer,t=e.state,i=s.a.useState(!0),n=Object(m.a)(i,2),c=n[0],l=n[1],r=he(),d=function(e){return Object(o.jsx)("div",{className:Object(ae.a)(r.list,Object(j.a)({},r.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:a(e,!1),onKeyDown:a(e,!1),children:Object(o.jsxs)(ie.a,{children:[Object(o.jsxs)(ne.a,{button:!0,children:[Object(o.jsx)(oe.a,{children:Object(o.jsx)(le.a,{})}),Object(o.jsx)(ce.a,{primary:"All"})]}),Object(o.jsxs)(ne.a,{button:!0,onClick:function(e){return function(e){e.stopPropagation(),l(!c)}(e)},children:[Object(o.jsx)(oe.a,{children:Object(o.jsx)(le.a,{})}),Object(o.jsx)(ce.a,{primary:"Categories"}),c?Object(o.jsx)(de.a,{}):Object(o.jsx)(je.a,{})]}),Object(o.jsx)(be.a,{in:c,open:c,timeout:"auto",unmountOnExit:!0,children:Object(o.jsxs)(ie.a,{component:"div",disablePadding:!0,children:[Object(o.jsxs)(ne.a,{button:!0,className:r.nested,children:[Object(o.jsx)(oe.a,{children:Object(o.jsx)(ge.a,{})}),Object(o.jsx)(ce.a,{primary:"Milktea"})]}),Object(o.jsxs)(ne.a,{button:!0,className:r.nested,children:[Object(o.jsx)(oe.a,{children:Object(o.jsx)(ge.a,{})}),Object(o.jsx)(ce.a,{primary:"Frappe"})]}),Object(o.jsxs)(ne.a,{button:!0,className:r.nested,children:[Object(o.jsx)(oe.a,{children:Object(o.jsx)(ge.a,{})}),Object(o.jsx)(ce.a,{primary:"Silog"})]}),Object(o.jsxs)(ne.a,{button:!0,className:r.nested,children:[Object(o.jsx)(oe.a,{children:Object(o.jsx)(ge.a,{})}),Object(o.jsx)(ce.a,{primary:"Ala carte"})]}),Object(o.jsxs)(ne.a,{button:!0,className:r.nested,children:[Object(o.jsx)(oe.a,{children:Object(o.jsx)(ge.a,{})}),Object(o.jsx)(ce.a,{primary:"Others"})]})]})}),Object(o.jsxs)(ne.a,{button:!0,children:[Object(o.jsx)(oe.a,{children:Object(o.jsx)(le.a,{})}),Object(o.jsx)(ce.a,{primary:"Best Sellers"})]}),Object(o.jsxs)(ne.a,{button:!0,children:[Object(o.jsx)(oe.a,{children:Object(o.jsx)(le.a,{})}),Object(o.jsx)(ce.a,{primary:"Promos"})]}),Object(o.jsxs)(ne.a,{button:!0,children:[Object(o.jsx)(oe.a,{children:Object(o.jsx)(le.a,{})}),Object(o.jsx)(ce.a,{primary:"New"})]})]})})};return Object(o.jsx)("div",{children:["left"].map((function(e){return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsx)(te.a,{anchor:e,open:t[e],onClose:a(e,!1),children:d(e)})},e)}))})};var ue=function(){var e=Object(c.useState)({left:!1}),a=Object(m.a)(e,2),t=a[0],i=a[1],n=function(e,a){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&i(Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},e,a)))}};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(ee,{}),Object(o.jsx)(fe,{state:t,toggleDrawer:n}),Object(o.jsx)(T,{toggleDrawer:n}),Object(o.jsx)(Q,{}),Object(o.jsx)(F,{})]})},xe=function(){return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("div",{children:"Cart"}),Object(o.jsx)(F,{})]})};r.a.render(Object(o.jsxs)(d.a,{children:[Object(o.jsx)(p.a,{exact:!0,path:"/",children:Object(o.jsx)(ue,{})}),Object(o.jsx)(p.a,{exact:!0,path:"/cart",children:Object(o.jsx)(xe,{})})]}),document.getElementById("root"))},76:function(e){e.exports=JSON.parse('[{"id":"753c09e7-ca1d-4ad2-a6b7-d9c2993eb06b","name":"Matcha Milk Tea","imageName":"matcha-milk-tea.png","price":79,"oldPrice":120,"isNew":true,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"a9c20d5c-38f9-405e-ba8d-ffec7680b7e8","name":"Mocha Milk Tea","imageName":"mocha-milk-tea.png","price":82,"oldPrice":0,"isNew":true,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"9ae65ce5-3806-4b7c-af5c-5dd23ee8d81f","name":"Choco Milk Tea","imageName":"choco-milk-tea.png","price":75,"oldPrice":124,"isNew":true,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"65785a06-2ded-478b-b5c1-07125f45ed98","name":"Coffee Milk Tea","imageName":"coffee-milk-tea.png","price":92,"oldPrice":0,"isNew":false,"isBestSeller":true,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"3b7d4393-2302-4ae3-a1a5-65b8f35f5431","name":"Vanilla Milk Tea","imageName":"vanilla-milk-tea.png","price":72,"oldPrice":89,"isNew":false,"isBestSeller":true,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"75d61ffa-fe9f-40f5-9c6f-d14e2017d6d7","name":"Mango Milk Tea","imageName":"mango-milk-tea.png","price":79,"oldPrice":0,"isNew":false,"isBestSeller":true,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"6f25c076-a19e-415d-b382-6e260d04702e","name":"Orange Milk Tea","imageName":"orange-milk-tea.png","price":99,"oldPrice":119,"isNew":false,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"6de4e83e-2212-49b3-a3fc-adfbd7f7031c","name":"Guava Milk Tea","imageName":"guava-milk-tea.png","price":78,"oldPrice":0,"isNew":false,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"0f949f5b-97ba-42a0-8f4b-fe9a1632d34c","name":"Lemon Milk Tea","imageName":"lemon-milk-tea.png","price":90,"oldPrice":0,"isNew":false,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"d7b18585-f26d-43a4-be4a-5d2c3aa1f1d4","name":"Cheese Milk Tea","imageName":"cheese-milk-tea.png","price":"76","oldPrice":0,"isNew":false,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"a47540ac-2df3-4008-ad08-050f9c0c58e4","name":"Green Milk Tea","imageName":"green-milk-tea.png","price":200,"oldPrice":0,"isNew":false,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"2f52dd46-dc86-4d23-9a43-71e2d799dab1","name":"Avocado Milk Tea","imageName":"avocado-milk-tea.png","price":200,"oldPrice":0,"isNew":false,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"2ccc1533-1dea-4482-9b35-fd1b2b885f88","name":"Matcha Milk Tea","imageName":"matcha-milk-tea.png","price":200,"oldPrice":0,"isNew":false,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"03775809-2f9c-4291-9d74-1e1ca05cb1fe","name":"Matcha Milk Tea","imageName":"matcha-milk-tea.png","price":200,"oldPrice":0,"isNew":false,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"39169fec-2501-4a86-ae3a-5273e93c8b02","name":"Matcha Milk Tea","imageName":"matcha-milk-tea.png","price":200,"oldPrice":0,"isNew":false,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"9d27c161-fc33-4a91-8572-29fd0d0c7a43","name":"Matcha Milk Tea","imageName":"matcha-milk-tea.png","price":200,"oldPrice":0,"isNew":false,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"2d82edbf-3310-4af3-91f5-372934671aff","name":"Matcha Milk Tea","imageName":"matcha-milk-tea.png","price":200,"oldPrice":0,"isNew":false,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"3f8b7579-4110-48f8-8ef4-033f2b4f7a15","name":"Matcha Milk Tea","imageName":"matcha-milk-tea.png","price":200,"oldPrice":0,"isNew":false,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"f258c00e-e60a-4faa-a623-34893619849c","name":"Matcha Milk Tea","imageName":"matcha-milk-tea.png","price":200,"oldPrice":0,"isNew":false,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."},{"id":"579fc1b8-3a89-49f5-bc7f-cb7bda3fd559","name":"Matcha Milk Tea","imageName":"matcha-milk-tea.png","price":200,"oldPrice":0,"isNew":false,"isBestSeller":false,"description":"Let Google help apps determine location. This means sending anonymous location data to Google."}]')},96:function(e,a,t){},97:function(e,a,t){}},[[105,1,2]]]);
//# sourceMappingURL=main.1bac2b8c.chunk.js.map