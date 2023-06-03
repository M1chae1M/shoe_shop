import React, {Component} from "react";
import SearchingList from "./SearchingList";
import Icons from "./Icons";
import {glbl} from "../_app";

export default class Menu extends Component{
  render(){
    const {searchItem,searchValue}=this.props;
    const styles={
      Menu:{
        width:'fit-content',
        width:glbl._width,
        position:'fixed',
        justifyContent:'space-between',
        top:'3%',
        right:'5%',
        display:'flex',
        zIndex:'1410',
      },
      input:{
        zIndex:'1410',
        border:'solid black 2px',
        borderRadius:'7px',
        transition:'all 0.125s ease-in-out',
      },
    }
    return(
      <div id="Menu" style={styles.Menu}>
        <input className="search" style={styles.input} type="text" placeholder="search" onChange={searchItem} value={searchValue}/>
        <SearchingList/>
        <Icons/>
      </div>
    )
  }
}