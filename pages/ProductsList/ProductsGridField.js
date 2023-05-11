import React, {Component} from "react";
import Link from "next/link";
import {Store} from "../HOC";
import ImgFrame from "../ImgFrame";
import GreenBTN from "../GreenBTN";
import Modal from '../Modal/Modal';
import {glbl} from "../_app";

export default class ProductsGridField extends Component{
  state={
    loading:true,
    openModal:false,
  }
  render(){
    const {openModal,loading}=this.state;
    const {src,id}=this.props;
    const styles={
      field:{
        transition:'all 0.125s ease-in-out',
      },
      loading:{
        height:glbl._field_height,
        width:glbl._field_height,
        overflow:'hidden',
        display:'grid',
        justifyItems:'center',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        textDecoration:'none',
        color:'black',
        position:'relative',
        boxShadow:'2px 2px grey, -2px -2px grey',
        justifyItems:'center',
        transition:'all 0.125s ease-in-out',
      },
      hide:{
        display:'none',
      }
    }
    return(
      <Store.Consumer>
      {value=>{
        const {saveToLocalStorage,products}=value??{};
        const acObj=products?.filter(x=>x.id===id)?.[0];
        const {name,image,price,quantity}=acObj??'';
        const sizes=acObj?.sizes?.split(',');

        const closeModal=(e)=>{
          e.preventDefault();
          this.setState({openModal:false});
        }
        const addToCart=(e,newHowMany,newSize)=>{
          if(newHowMany>0){
            const addToCart={id,name,image,price,howMany:newHowMany,sizeState:newSize,time:new Date().getTime()};
            saveToLocalStorage(e,addToCart);
          }
        }
        const showModal=(e)=>{
          e.preventDefault();
          this.setState({openModal:true});
        }
        const loaded=()=>{
          this.setState({loading:false});
        }
        return(
          <>
            {loading && <div className="field" style={{...styles.field,...styles.loading}}>loading</div>}
            <Link href={`products/${id}`} style={loading?styles.hide:{display:'grid'}}>
              <div className="field" style={styles.field}>
                <ImgFrame src={src} alt={`photo of boots with id: ${id}`} x={glbl._field_height} y={glbl._field_height} loaded={loaded}>
                  <GreenBTN value="Add to cart" onClick={showModal} className="addBTN" hidden={true}/>
                </ImgFrame>
              </div>
            </Link>
            {openModal && <Modal quantity={quantity} sizes={sizes} closeModal={closeModal} addToCart={addToCart}/>}
          </>
        )
      }}
      </Store.Consumer>
    )
  }
}