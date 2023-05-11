import React,{Component} from "react";
import {Store} from "../HOC";
import ImgFrame from "../ImgFrame";
import {CgClose} from 'react-icons/cg';
import {glbl} from "../_app";
import Link from "next/link";

export default class InCart extends Component{
  render(){
    const {id,src,name,price,quantity,size,alt,cart,endloading}=this.props;
    const styles={
      inCart:{
        display:'grid',
        gridTemplateColumns:`calc(${glbl._field_height} + 8px) calc(${glbl._field_height} * 2) auto`,
        margin:'8px 0px',
        justifyItems:'center',
        alignItems:'center',
        position:'relative',
        overflow:'hidden',
      },
      close:{
        fontSize:'60px',
        color:'red',
      },
    };
    return(
      <Store.Consumer>
      {value=>{
        const {changeState}=value??{};
        const totalPrice=(price * quantity)?.toFixed?.(2);
        const removeFromCart=()=>{
          let removeIndex;
          cart.map((x,i)=>{
            if(x.name===name) removeIndex=i;
          });
          const newCart=[...cart.slice(0,removeIndex),...cart.slice((removeIndex+1))];
          localStorage.setItem('cart', JSON.stringify(newCart));
          changeState({cart:newCart})
        }
        return(
          <div style={styles.inCart}>
            <Link href={`/products/${id}`}>
              <ImgFrame src={src} alt={alt} x='95px' y='95px' id="bigPhoto" endloading={endloading}/>
            </Link>
            <div>
              <div>Name: {name}</div>
              <div>Size: {size}</div>
              <div>Price: {price?.toFixed?.(2)} PLN</div>
              <div>How many: {quantity}</div>
              <div>Total: {totalPrice} PLN</div>
            </div>
            <CgClose style={styles.close} onClick={removeFromCart} className="GreenBTN"/>
          </div>
        );
      }}
      </Store.Consumer>
    );
  }
}