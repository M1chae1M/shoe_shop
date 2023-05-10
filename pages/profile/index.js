import React, {Component} from "react";
import HOC from "../HOC";
import WithAuth from "../WithAuth";
import WithLogin from "../login/WithLogin";
import {TbLogout} from 'react-icons/tb';
// import {glbl} from "../_app";
import {Store} from "../HOC";
import OrdersList from "./OrdersList";

class Profile extends Component{
  render(){
    const {profile}=this.props;
    const {login}=profile;
    const styles={
      ProfileLogged:{
        display:'grid',
        position:'relative',
        width:'80vw',
        height:'80vh',
        alignItems:'center',
        gridTemplateRows:'15% 85%',
      },
      logout:{
        cursor:'pointer',
        // fontSize:glbl._height,
        position:'absolute',
        right:'0%',
        top:'0%',
        transition:'all 0.125s ease-in-out',
      },
      bold:{
        fontWeight:'bold',
      },
    }
    return(
      <Store.Consumer>
      {value=>{
        const {changeState,profile}=value??{};
        const {resetLoggedState,token}=profile??{};
        const logOut=()=>{
          localStorage.removeItem('token');
          localStorage.removeItem('cart');
          resetLoggedState();
        }
        return(
          <div style={styles.ProfileLogged} id='ProfileLogged'>
            <div>
              You are login as: <a style={styles.bold}>{login}</a>
              <TbLogout className="logout" style={styles.logout} onClick={logOut}/>
            </div>
            <OrdersList token={token}/>
          </div>
        )
      }}
      </Store.Consumer>
    )
  }
}

export default WithAuth(HOC(WithLogin(Profile)));