import React, {Component} from "react";
import {AiOutlineShoppingCart,AiOutlineHome} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {Store} from "../HOC";
import MenuBTN from "./MenuBTN";
import {glbl} from "../_app";

export default class Icons extends Component{
  render(){
    const styles={
      icon:{
        fontSize:glbl._height,
      },
      profile:{
        height:glbl._height,
      },
    }
    return(
      <Store.Consumer>
      {value=>{
        const {cart,profile,logged}=value??{};
        const {img}=profile??{};
        return(
          <>
            {/* <MenuBTN href="/">
              <AiOutlineHome style={styles.icon}/>
            </MenuBTN>
            <MenuBTN href="/profile">
              {logged?
                <img style={{...styles.icon,...styles.profile}} src={img} alt='profile icon'/>:
              <CgProfile style={styles.icon}/>}
            </MenuBTN>
            <MenuBTN number={cart.length} href='/cart'>
              <AiOutlineShoppingCart style={styles.icon}/>
            </MenuBTN> */}
          </>
        )
      }}
      </Store.Consumer>
    )
  }
}