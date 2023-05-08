import React, {Component} from "react";
import {glbl} from "./_document";

const styles={
  select:{
    cursor:'pointer',
    backgroundColor:glbl._green_color,
    background:glbl._gradient,
    border:'none',
    boxShadow:'0px -2px grey, 2px 0px grey,-2px 0px grey,0px 2px grey',
  },
  option:{
    fontWeight:'bold',
    color:glbl._yellow_color,
    padding:'3px 0px',
    border:'solid black 1px',
    textAlign:'center',
    backgroundColor:'#36c20f',
  },
}

export class Option extends Component{
  render(){
    const {children}=this.props;
    return(
      <option style={styles.option} {...this.props}>
        {children}
      </option>
    )
  }
}

export default class Select extends Component{
  render(){
    const {children, className}=this.props;
    return(
      <select style={{...styles.option,...styles.select}} className={className} {...this.props}>
        {children}
      </select>
    )
  }
}