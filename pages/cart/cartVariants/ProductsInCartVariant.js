import React, {Component} from "react";
import {Store} from "../../HOC/HOC";
import InCart from "../InCart";
import GreenBTN from "../../SmallComponents/GreenBTN";
import StylesHOC from "./StylesHOC";

class ProductsInCartVariant extends Component{
  render(){
    const {styles}=this.props;
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
        const cartStyles={...styles.cartList,...styles.size}
        return(
          <div style={styles.container}>
            <div style={cartStyles}>
              {cart?.map(({time,...x})=><InCart key={time} data={x} cart={cart}/>)}
            </div>
            <div style={styles.total}>
            Total to be paid: {totalPaid} PLN
              <GreenBTN value="PAY" className="GreenBTN" onClick={addToOrders}/>
            </div>
          </div>
        )
      }}
      </Store.Consumer>
    )
  }
}

export default StylesHOC(ProductsInCartVariant)