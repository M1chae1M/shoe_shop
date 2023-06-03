import React, {Component} from 'react';

const loginRef=React.createRef();
const passwordRef=React.createRef();

const WithLogin=(ToWrap)=>{
  return(
    class Login extends Component{
      state={
        logged:this.props.logged,
        message:'',
      }
      componentDidUpdate(prevProps, prevState){
        if(this.props.logged !== prevProps.logged) this.setState({logged: this.props.logged})
        return null
      }
      render(){
        const {message,logged}=this.state;
        const {changeAuthState}=this.props;
        const styles={
          submit:{
            fontWeight:'bold',
            margin:'0px 3px',
            padding:'3px 3px',
            borderRadius:'5px',
            border:'solid black 2px',
            boxShadow:'2px 2px grey',
          },
          failed:{
            color:'red',
            fontWeight:'bold',
            textAlign:'center',
            minHeight:'45px',
            maxHeight:'45px',
            position:'absolute',
            bottom:'0%',
            left:'50%',
            transform:'translate(-50%,120%)',
          },
          loginForm:{
            display:'grid',
            position:'relative',
            gridTemplateColumns:'repeat(auto-fit, minmax(120px, 120px))',
            padding:'6px',
            minWidth:'60%',
            gridRowGap:'6px',
            width:'fit-content',
            alignItems:'center',
            justifyContent:'center',
          }
        }
        const tryToLogIn=(e)=>{
          e.preventDefault();
          fetch(`${process.env.NEXT_PUBLIC_API_URL}login`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              login: loginRef.current.value,
              password: passwordRef.current.value
            })
          })
          .then(res=>res.json())
          .then(res=>{
            const {message,token,logged,login,img}=res;
            if(token) localStorage.setItem('token', token);
            this.setState({message: message, logged:logged});
            changeAuthState({login,logged,token,img});
          })
        }
        const signIn=(e)=>{
          fetch(`${process.env.NEXT_PUBLIC_API_URL}signIn`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              login: loginRef.current.value,
              password: passwordRef.current.value
            })
          })
          .then(res=>res.json())
          .then(res=>{
            const {message}=res;
            this.setState({message:message});
          })
        }
        return(
          <>
            {
              !logged? 
                <form onSubmit={tryToLogIn}>
                  <input ref={loginRef} type='text' placeholder='login' style={styles.submit} className='login'/>
                  <input ref={passwordRef} type='password' placeholder='password' style={styles.submit} className='login'/>
                  <input type='submit' value='Login' style={styles.submit} className='login'/>
                  <input type='button' value='sign in' style={styles.submit} onClick={signIn}/>
                  <div style={styles.failed}>{message}</div>
                </form>:
              <ToWrap {...this.props}/>
            }
          </>
        )
      }
    }
  )
}

export default WithLogin;