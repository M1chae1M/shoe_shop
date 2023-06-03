import React, {Component} from "react";
import HOC,{Store} from "../HOC/HOC";
import WithAuth from "../HOC/WithAuth";
import ProductsHOC from "../HOC/ProductsHOC";
import ProductsInCartVariant from "./cartVariants/ProductsInCartVariant";
import EmptyCartVariant from "./cartVariants/EmptyCartVariant";

class OpenCart extends Component{
  render(){
    const styles={
      cart:{
        display:'grid',
        justifyItems:'center',
        alignContent:'center',
      },
      header:{
        fontSize:'1.2rem',
        fontWeight:'bold',
      },
    }
    return(
      <Store.Consumer>
      {value=>{
        const {cart}=value??{};
        return(
          <div style={styles.cart}>
            <div style={{...styles.header}}>Cart</div>
            {
              cart.length>0?
                <ProductsInCartVariant/>:
                  <EmptyCartVariant/>
            }
          </div>
        )
      }}
      </Store.Consumer>
    )
  }
}

export default WithAuth(ProductsHOC(HOC(OpenCart)));