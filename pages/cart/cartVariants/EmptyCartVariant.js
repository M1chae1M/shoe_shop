import React,{Component} from "react";
import Link from "next/link";
import GreenBTN from "../../SmallComponents/GreenBTN";
import StylesHOC from "./StylesHOC";

class EmptyCartVariant extends Component{
  render(){
    const {styles}=this.props;
    return(
      <div style={styles.container}>
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
    )
  }
}

export default StylesHOC(EmptyCartVariant)