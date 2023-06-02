import React, {Component} from "react";
import HOC,{Store} from "../HOC/HOC";
import InCart from "./InCart";
import GreenBTN from "../SmallComponents/GreenBTN";
import Link from "next/link";
import WithAuth from "../HOC/WithAuth";
import Router from "next/router";
import ProductsHOC from "../HOC/ProductsHOC";

class OpenCart extends Component{
  render(){
    const styles={
      cart:{
        display:'grid',
        justifyItems:'center',
        alignContent:'center',
        // border:'solid black 3px',
        // width:'60%',
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
        textAlign:'center',
      },
      header:{
        fontSize:'1.2rem',
        fontWeight:'bold',
      },
      hidden:{
        display:'none',
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
            fetch(`${process.env.NEXT_PUBLIC_API_URL}order/add`,{
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
            <div style={{...styles.header}}>Cart</div>
            {
              cart.length>0?
                <div>
                  <div style={{...styles.cartList,...styles.size}}>
                    {cart?.map(({time,...x})=><InCart key={time} data={x} cart={cart}/>)}
                  </div>
                  <div style={styles.total}>
                  Total to be paid: {totalPaid} PLN
                    <GreenBTN value="PAY" className="GreenBTN" onClick={addToOrders}/>
                  </div>
                </div>:
                <div>
                  <div style={styles.size}>
                    <div style={styles.empty}>Your cart is empty</div>
                  </div>
                  <div style={styles.total}>
                    First you need to add your orders to the cart
                    <Link href='/'>
                      <GreenBTN value="Back to shop" className="GreenBTN"/>
                    </Link>
                  </div>
                </div>
            }
          </div>
        )
      }}
      </Store.Consumer>
    )
  }
}

export default WithAuth(ProductsHOC(HOC(OpenCart)));