import React, {Component} from "react";
import {API_READY} from '../../config';
import fetch from 'node-fetch';
import HOC,{Store} from "../HOC";
import {glbl} from "../_app";
import ImgFrame from "../ImgFrame";
import GreenBTN from "../GreenBTN";
import Number from "../Number";
import Router from "next/router";
import SelectC, {OptionC} from "../SelectC";
import Link from "next/link";

export async function getStaticPaths(){
  if(!API_READY){
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  const paths=await fetch(`${process.env.NEXT_PUBLIC_API_URL}products`)
  .then(res=>res.json())
  .then(res=>{
    return res.resp?.map((product)=>({
      params:{boot:product.id.toString()},
    }));
  })
  return{
    paths,
    fallback:false,
  };
}

export async function getStaticProps(ctx){
  const {boot}=ctx.params;

  const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}singleProduct`,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({id:boot})
  })
  .then(resp=>resp.json())
  .then(resp=>resp.resp);
  const data=res;
  return{props:{data}}
}

class Boot extends Component{
  state={
    sizeState:this.props?.data?.sizes.split(',')[0]||'0',
    howMany:1,
  }
  render(){
    const {data}=this.props;
    const {id,image,sex,description,category,name,price,quantity,sizes}=data;
    const {sizeState,howMany}=this.state;
    const styles={
      Product:{
        width:'70vw',
        padding:'5px',
        display:'grid',
        justifyItems:'center',
        alignItems:'center',
      },
      btn:{
        width:'fit-content',
        padding:'5px',
      },
      description:{
        width:glbl._width,
        padding:'5px',
      },
      path:{
        padding:'5px',
      },
      Link:{
        color:'black',
        textDecoration:'none',
      },
      change:{
        display:'grid',
        gridAutoFlow:'column',
        justifyItems:'center',
        alignItems:'center',
      },
    }
    const changeHowMany=(change)=>{
      const value=howMany+change;
      if(value<=quantity && value>0){
        this.setState({howMany:value});
      }
    }
    const addToCartNewBoot=()=>{
      Router.push('/');
      return {id,name,image,price,howMany,sizeState,time:new Date().getTime()}
    }
    const onChange=(e)=>this.setState({sizeState:e.target.value})
    const links=[
      {href:'/',text:'Boots > '},
      {href:`/?sex=${sex}`,text:`${sex} > `},
      {href:`/?type=${category}`,text:`${category} > `},
      {href:`/products/${id}`,text:name},
    ]
    return(
      <Store.Consumer>
      {value=>{
        const {saveToLocalStorage}=value??{};
        const addToCart=(e)=>{
          saveToLocalStorage(e,addToCartNewBoot())
        }
        return(
          <div style={styles.Product}>
            <div style={styles.path}>
              {links.map(({href,text})=><Link key={text} style={styles.Link} href={href}>{text}</Link>)}
            </div>
            <ImgFrame src={image} alt='' x={glbl._img_height} y={glbl._img_height}/>
            <div style={styles.description}>{description}</div>
            <div style={styles.path}>Price: {price} PLN</div>
            <div style={styles.path}>
              {'Sizes: '}
              <SelectC value={sizeState} onChange={onChange} className="GreenBTN">
                {sizes.split(',').map(x=><OptionC key={x} value={x}>{x}</OptionC>)}
              </SelectC>
            </div>
            <div style={styles.path}>Available quantity: {quantity}</div>
            <div style={{...styles.path,...styles.change}}>
              how many boots you need?
              <Number value={howMany} onChange={changeHowMany}/>
            </div>
            <div style={styles.btn}>
              <GreenBTN value='Add to cart' onClick={addToCart} className="GreenBTN"/>
            </div>
          </div>
        )
      }}
      </Store.Consumer>
    )
  }
}

export default HOC(Boot);