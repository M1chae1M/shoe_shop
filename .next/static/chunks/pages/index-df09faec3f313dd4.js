(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6616)}])},1316:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),s=n(7294),l=n(8117),i=n(1163),o=n.n(i),a=n(9130);class d extends s.Component{render(){let e={TopFilters:{display:"flex",flexWrap:"wrap",gap:"5px",margin:"5px 0px"}},t=["all","sport","casual"],n=["All","Man","Woman"],s=[{value:"cheapest",text:"from the cheapest"},{value:"expensive",text:"from the most expensive"},{value:"AtoZ",text:"A to Z"},{value:"ZtoA",text:"Z to A"},{value:"quantityDsc",text:"quantity descending"},{value:"quantityAsc",text:"quantity ascending"}],i=e=>{let t=Object.keys(e);o().push({pathname:"/",query:{...o().query,[t]:e[t]}})};return(0,r.jsx)(l.Store.Consumer,{children:l=>{var o,d;let{changeState:u,sex:c,type:p}=null!=l?l:{},h=(e,t)=>{let n=e.target.value.toLowerCase();u({[t]:n}),i({[t]:n})},x=e=>u({order:e.target.value}),g=(null==c?void 0:null===(o=c.charAt)||void 0===o?void 0:o.call(c,0).toUpperCase())+(null==c?void 0:null===(d=c.slice)||void 0===d?void 0:d.call(c,1)),f=s.map(e=>{let{value:t,text:n}=e;return(0,r.jsx)(a.OptionC,{value:t,children:n},n)});return(0,r.jsxs)("div",{style:e.TopFilters,children:[(0,r.jsxs)("div",{id:"order",children:["Order by: ",(0,r.jsx)(a.default,{onChange:x,children:f})]}),(0,r.jsxs)("div",{id:"sex",children:["Sex: ",(0,r.jsx)(a.default,{value:g,onChange:e=>{h(e,"sex")},children:n.map(e=>(0,r.jsx)(a.OptionC,{value:e,children:e},e))})]}),(0,r.jsxs)("div",{id:"types",children:["Types: ",(0,r.jsx)(a.default,{value:p,onChange:e=>{h(e,"type")},children:t.map(e=>(0,r.jsx)(a.OptionC,{value:e,children:e},e))})]})]})}})}}},2500:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(7294),l=n(1163);let i=e=>(0,l.withRouter)(class extends s.Component{static async getInitialProps(e){let{query:t}=e,{sex:n,type:r}=t;return{sex:n,type:r}}render(){let{router:t}=this.props,{query:n}=t,{sex:s,type:l}=n;return(0,r.jsx)(e,{sex:s,type:l,...this.props})}});t.default=i},8519:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(7294);let l=e=>class extends s.Component{componentDidMount(){let e=localStorage.getItem("token");fetch("".concat("http://localhost:3000/api/","auth"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})}).then(e=>e.json()).then(e=>{let{logged:t,login:n,token:r,img:s}=e;this.setState({logged:t,login:n,token:r,img:s})})}render(){let{logged:t,login:n,token:s,img:l}=this.state,i=()=>this.setState({logged:!1,login:"",token:"",img:""}),o=e=>this.setState(e);return(0,r.jsx)(e,{profile:{login:n,token:s,img:l,resetLoggedState:i},changeAuthState:o,logged:t,...this.props})}constructor(...e){super(...e),this.state={logged:!1}}};t.default=l},4845:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),s=n(7294),l=n(2639),i=n(7505),o=n(744),a=n(9130);class d extends s.Component{render(){let{howMany:e,size:t}=this.state,{quantity:n,sizes:s,closeModal:d,addToCart:u}=this.props,c={Modal:{display:"grid",color:"white"},background:{display:"grid",justifyItems:"center",alignItems:"center",position:"fixed",top:"0%",left:"0%",background:"rgb(128 128 128 / 60%)",width:"100vw",height:"100vh",zIndex:"2000"},change:{display:"grid",gridAutoFlow:"column",alignItems:"center"}},p=t=>{let r=e+t;r<=n&&r>0&&this.setState({howMany:r})},h=n=>{d(n),u(n,e,t)},x=e=>"Background"===e.target.id&&d(e),g=e=>this.setState({size:e.target.value});return(0,r.jsx)(i.default,{bgc:"rgb(128 128 128/60%)",zidx:"2000",onMouseDown:x,children:(0,r.jsxs)("div",{style:c.Modal,children:[(0,r.jsxs)("div",{style:c.change,children:["How many: ",(0,r.jsx)(o.default,{value:e,onChange:p})," Size: ",(0,r.jsx)(a.default,{value:t,onChange:g,className:"GreenBTN",children:null==s?void 0:s.map(e=>(0,r.jsx)(a.OptionC,{value:e,children:e},e))})]}),(0,r.jsx)(l.default,{value:"Add to cart",onClick:h,className:"GreenBTN"})]})})}constructor(...e){var t;super(...e),this.state={howMany:0,size:null===(t=this.props.sizes)||void 0===t?void 0:t[0]}}}},9303:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),s=n(7294),l=n(1664),i=n.n(l),o=n(8117),a=n(7069),d=n(2639),u=n(4845),c=n(6004);n(4065);class p extends s.Component{render(){let{openModal:e}=this.state,{src:t,id:n}=this.props,s={field:{transition:"all 0.125s ease-in-out"},hide:{display:"none"}};return(0,r.jsx)(o.Store.Consumer,{children:l=>{var o,p;let{saveToLocalStorage:h,products:x}=null!=l?l:{},g=null===(o=null==x?void 0:x.filter(e=>e.id===n))||void 0===o?void 0:o[0],{name:f,image:v,price:m,quantity:y}=null!=g?g:"",j=null==g?void 0:null===(p=g.sizes)||void 0===p?void 0:p.split(","),b=e=>{e.preventDefault(),this.setState({openModal:!1})},C=(e,t,r)=>{if(t>0){let s={id:n,name:f,image:v,price:m,howMany:t,sizeState:r,time:new Date().getTime()};h(e,s)}},w=e=>{e.preventDefault(),this.setState({openModal:!0})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{href:"products/".concat(n),children:(0,r.jsx)("div",{className:"field",style:s.field,children:(0,r.jsx)(a.default,{src:t,alt:"photo of boots with id: ".concat(n),x:c.glbl._field_height,y:c.glbl._field_height,children:(0,r.jsx)(d.default,{value:"Add to cart",onClick:w,className:"addBTN",hidden:!0})})})}),e&&(0,r.jsx)(u.default,{quantity:y,sizes:j,closeModal:b,addToCart:C})]})}})}constructor(...e){super(...e),this.state={openModal:!1}}}},11:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),s=n(7294),l=n(8117),i=n(9303),o=n(6004),a=n(4065);class d extends s.Component{render(){let e={ProductsList:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(120px, 120px))",gridAutoRows:"min-content",padding:"6px",minWidth:"60%",gridColumnGap:"6px",gridRowGap:"6px",width:"fit-content",minHeight:"calc(".concat(o.glbl._field_height," * 3 + 4 * 4px)"),maxHeight:"calc(".concat(o.glbl._field_height," * 3 + 4 * 4px)"),height:"fit-content",position:"relative"},loading:{position:"absolute",display:"grid",justifyItems:"center",alignItems:"center",top:0,bottom:0,left:0,right:0,margin:"auto"}};return(0,r.jsx)("div",{style:e.ProductsList,children:(0,r.jsx)(l.Store.Consumer,{children:t=>{let{products:n,order:s,sex:l,type:d}=null!=t?t:{},u=(()=>{switch(s){case"cheapest":return o.sort.price.asc(n);case"expensive":return o.sort.price.dsc(n);case"AtoZ":return o.sort.name.asc(n);case"ZtoA":return o.sort.name.dsc(n);case"quantityDsc":return o.sort.quantity.asc(n);case"quantityAsc":return o.sort.quantity.dsc(n);default:return n}})();return u=(()=>{switch(l){case"man":case"woman":return o.sort.types.sex(u,l);default:return u}})(),u=(()=>{switch(d){case"sport":case"casual":return o.sort.types.type(u,d);default:return u}})(),(0,r.jsx)(r.Fragment,{children:(null==n?void 0:n.length)>0?null==u?void 0:u.map(e=>{let{image:t,id:n}=e;return(0,r.jsx)(i.default,{id:n,src:t},n)}):(0,r.jsx)("div",{style:e.loading,children:(0,r.jsx)(a.default,{})})})}})})}}},2639:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),s=n(7294),l=n(6004);class i extends s.Component{render(){let{value:e,onClick:t,className:n,hidden:s}=this.props,i={BTN:{cursor:"pointer",fontWeight:"bold",color:l.glbl._yellow_color,bottom:"0%",padding:"5px 0px",boxShadow:"0px -2px grey, 2px 0px grey,-2px 0px grey,0px 2px grey",border:"none",width:"100%",textAlign:"center",backgroundColor:l.glbl._green_color,background:l.glbl._gradient,opacity:s?0:1,position:s?"absolute":"relative",transition:"all 0.125s ease-in-out"}};return(0,r.jsx)("input",{type:"button",value:e,style:i.BTN,onClick:t,className:n})}}},744:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),s=n(7294),l=n(2639);class i extends s.Component{render(){let{value:e,onChange:t}=this.props,n={Number:{textAlign:"center",margin:"5px"},btn:{width:"20px"},changeNumber:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",padding:"0px 7px",width:"fit-content"}},s=()=>t(-1),i=()=>t(1);return(0,r.jsxs)("div",{style:n.changeNumber,children:[(0,r.jsx)("div",{style:n.btn,children:(0,r.jsx)(l.default,{value:"-",onClick:s,className:"GreenBTN"})}),(0,r.jsx)("div",{style:n.Number,children:e}),(0,r.jsx)("div",{style:n.btn,children:(0,r.jsx)(l.default,{value:"+",onClick:i,className:"GreenBTN"})})]})}}},9130:function(e,t,n){"use strict";n.r(t),n.d(t,{OptionC:function(){return o},default:function(){return a}});var r=n(5893),s=n(7294),l=n(6004);let i={select:{cursor:"pointer",backgroundColor:l.glbl._green_color,background:l.glbl._gradient,border:"none",boxShadow:"0px -2px grey, 2px 0px grey,-2px 0px grey,0px 2px grey"},option:{fontWeight:"bold",color:l.glbl._yellow_color,padding:"3px 0px",border:"solid black 1px",textAlign:"center",backgroundColor:"#36c20f"}};class o extends s.Component{render(){let{children:e}=this.props;return(0,r.jsx)("option",{style:i.option,...this.props,children:e})}}class a extends s.Component{render(){let{children:e,className:t}=this.props;return(0,r.jsx)("select",{style:{...i.option,...i.select},className:t,...this.props,children:e})}}},6616:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(7294),l=n(11),i=n(1316),o=n(8117),a=n(2500),d=n(8519),u=n(4143);class c extends s.Component{render(){return(0,r.jsxs)("div",{id:"App",style:{justifyItems:"center",display:"grid",alignContent:"center",height:"fit-content",overflowY:"scroll",padding:"5px",width:"70vw"},children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(l.default,{})]})}}t.default=(0,d.default)((0,a.default)((0,u.default)((0,o.default)(c))))}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);