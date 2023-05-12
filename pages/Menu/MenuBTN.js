import React, {Component} from "react";
import Link from "next/link";
import {Store} from "../HOC/HOC";

export default class MenuBTN extends Component{
  render() {
    const {number,children,href}=this.props;
    const styles={
      a:{
        cursor:'pointer',
        color:'yellow',
        fontWeight:'bold',
        border:'solid black 1px',
        height:'20px',
        width:'20px',
        borderRadius:'50%',
        position:'absolute',
        display:number > 0 ? 'grid' :'none',
        justifyItems:'center',
        alignItems:'center',
        top:'-5px',
        right:'-5px',
        background:'red',
        transition:'all 0.125s ease-in-out',
      },
      relative:{
        position:'relative',
        textDecoration:'none',
        color:'black',
      },
    };
    return(
      <Store.Consumer>
      {value=>{
        const {changeState}=value??{};
        const resetFilters=()=>changeState({sex:'all',type:'all'});
        return(
          <Link href={`${href}`}>
            <div style={styles.relative} className="MenuBTN" onClick={resetFilters}>
              {children}
              <div style={styles.a}>{number}</div>
            </div>
          </Link>
        )
      }}
      </Store.Consumer>
    )
  }
}