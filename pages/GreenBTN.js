import React, {Component} from "react";
import {glbl} from "./_app";

export default class GreenBTN extends Component{
  render(){
    const {value,onClick,className,hidden}=this.props;
    const styles={
      BTN:{
        cursor:'pointer',
        fontWeight:'bold',
        color:glbl._yellow_color,
        bottom:'0%',
        padding:'5px 0px',
        boxShadow:'0px -2px grey, 2px 0px grey,-2px 0px grey,0px 2px grey',
        border:'none',
        width:'100%',
        textAlign:'center',
        backgroundColor:glbl._green_color,
        background:glbl._gradient,
        opacity:hidden?0:1,
        position:hidden?'absolute':'relative',
        transition:'all 0.125s ease-in-out',
      }
    }
    return <input type="button" value={value} style={styles.BTN} onClick={onClick} className={className}/>
  }
}