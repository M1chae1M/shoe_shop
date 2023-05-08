import React, {Component} from "react";
import HOC,{Store} from "../HOC";
import InCart from "./InCart";
import GreenBTN from "../GreenBTN";
import Link from "next/link";
import WithAuth from "../WithAuth";
import Router from "next/router";

class OpenCart extends Component{
  render(){
    const styles={
      cart:{
        display:'grid',
        justifyItems:'center',
        alignContent:'center',
      },
      cartList:{
        overflowY:'scroll',
      },
      size:{
        maxHeight:'300px',
        minHeight:'300px',
        height:'300px',
      },
      empty:{
        display:'grid',
        width:'100%',
        height:'100%',
        justifyItems:'center',
        alignItems:'center',
      },
      total:{
        width:'300px',
        textAlign:'center',
      },
      header:{
        fontSize:'1.2rem',
        fontWeight:'bold',
      },
    }
    return(
      <Store.Consumer>
      {value=>{
        const {cart,profile,changeState}=value??{};
        const {token}=profile??{};
        const totalPaid=(cart.reduce((acc, elem)=>acc+elem.price*elem.howMany,0)).toFixed(2);
        const addToOrders=()=>{
          if(token){
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/addorder`,{
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({token, cart})
            })
            .then(localStorage.removeItem('cart'))
            .then(changeState({cart:[]}))
          }else Router.push('/profile')
        }
        return(
          <div style={styles.cart}>
            <div style={styles.header}>Cart</div>
            {cart.length>0? 
              <>
                <div style={{...styles.cartList,...styles.size}}>
                  {cart.map(({id,image,name,price,howMany,sizeState,time})=><InCart key={time} id={id} src={image} alt='' name={name} price={price} quantity={howMany} size={sizeState} cart={cart}/>)}
                </div>
                <div style={styles.total}>
                Total to be paid: {totalPaid} PLN
                  <GreenBTN value="PAY" className="GreenBTN" onClick={addToOrders}/>
                </div>
              </>:
              <>
                <div style={styles.size}>
                  <div style={styles.empty}>Your cart is empty</div>
                </div>
                <div style={styles.total}>
                  First you need to add your orders to the cart
                  <Link href='/'>
                    <GreenBTN value="Back to shop" className="GreenBTN"/>
                  </Link>
                </div>
              </>
            }
          </div>
        )
      }}
      </Store.Consumer>
    )
  }
}

export default WithAuth(HOC(OpenCart));