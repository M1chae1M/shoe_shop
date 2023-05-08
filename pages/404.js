import React, {Component} from "react";
import {HOC} from "./HOC";
import Router from "next/router";

class ErrorPage extends Component{
  state={
    timeToRoute:4,
  }
  componentDidMount(){
    this.loop(this)
  }
  loop(comp){
    comp.state.timeToRoute-1>=0 &&
    comp.setState({timeToRoute:comp.state.timeToRoute-1},
      ()=>{setTimeout(()=>{
        this.loop(this)
      },1000)})
    comp.state.timeToRoute===0 && window.location.replace('/');

  }
  render(){
    const {timeToRoute}=this.state;
    const styles={
      Allert:{
        textAlign:'center',
        fontWeight:'bold',
      },
      Time:{
        color:'red',
        fontSize:'1.45rem',
        verticalAlign:'middle',
      },
    }
    return(
      <div style={styles.Allert}>
        <div>incorrect address!</div>
        <div>you will be taken to the home page for... <a style={styles.Time}>{timeToRoute}</a></div>
      </div>
    )
  }
}

export default HOC(ErrorPage);