import React, {Component} from 'react';

const WithAuth=(ToWrap)=>{
  return(
    class Login extends Component{
      state={
        logged:false,
      }
      componentDidMount(){
        const token=localStorage.getItem('token');
        fetch(`${process.env.NEXT_PUBLIC_API_URL}auth`,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({token})
        })
        .then(res=>res.json())
        .then(res=>{
          const {logged,login,token,img}=res;
          this.setState({logged,login,token,img});
        })
      }
      render(){
        const {logged,login,token,img}=this.state;
        const resetLoggedState=()=>this.setState({logged:false,login:'',token:'',img:''});
        const changeAuthState=(newState)=>this.setState(newState)
        return <ToWrap profile={{login,token,img,resetLoggedState}} changeAuthState={changeAuthState} logged={logged} {...this.props}/>
      }
    }
  )
}

export default WithAuth;