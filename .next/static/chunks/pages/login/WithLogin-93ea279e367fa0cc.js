(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[149],{4450:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login/WithLogin",function(){return s(9406)}])},9406:function(e,t,s){"use strict";s.r(t);var n=s(5893),o=s(7294);let i=o.createRef(),l=o.createRef(),r=e=>class extends o.Component{componentDidUpdate(e,t){return this.props.logged!==e.logged&&this.setState({logged:this.props.logged}),null}render(){let{message:t,logged:s}=this.state,{changeAuthState:o}=this.props,r={submit:{fontWeight:"bold",margin:"0px 3px",padding:"3px 3px",borderRadius:"5px",border:"solid black 2px",boxShadow:"2px 2px grey"},failed:{color:"red",fontWeight:"bold",textAlign:"center",minHeight:"45px",maxHeight:"45px"}},a=e=>{e.preventDefault(),fetch("".concat("http://localhost:3000/api/","login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:i.current.value,password:l.current.value})}).then(e=>e.json()).then(e=>{let{message:t,token:s,logged:n,login:i,img:l}=e;s&&localStorage.setItem("token",s),this.setState({message:t,logged:n}),o({login:i,logged:n,token:s,img:l})})},p=e=>{fetch("".concat("http://localhost:3000/api/","signIn"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:i.current.value,password:l.current.value})}).then(e=>e.json()).then(e=>{let{message:t}=e;this.setState({message:t})})};return(0,n.jsx)(n.Fragment,{children:s?(0,n.jsx)(e,{...this.props}):(0,n.jsxs)("form",{onSubmit:a,children:[(0,n.jsx)("input",{ref:i,type:"text",placeholder:"login",style:r.submit,className:"login"}),(0,n.jsx)("input",{ref:l,type:"password",placeholder:"password",style:r.submit,className:"login"}),(0,n.jsx)("input",{type:"submit",value:"Login",style:r.submit,className:"login"}),(0,n.jsx)("input",{type:"button",value:"sign in",style:r.submit,onClick:p}),(0,n.jsx)("div",{style:r.failed,children:t})]})})}constructor(...e){super(...e),this.state={logged:this.props.logged,message:""}}};t.default=r}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4450)}),_N_E=e.O()}]);