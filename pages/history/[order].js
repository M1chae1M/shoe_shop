import React, {Component} from "react";
import HOC from "../HOC";
import WithAuth from "../WithAuth";
import ImgFrame from "../ImgFrame";
import Link from "next/link";
import {HiOutlineArrowUturnLeft} from 'react-icons/hi2';
import Router from "next/router";

export async function getStaticPaths(){
  return{
    paths:[{params:{order:'15'}}],
    fallback:true,
  };
}

export async function getStaticProps(context){
  const {order}=context.params;
  return{props:{order}}
}

let task;

class Order extends Component{
  state={
    data:[],
  }
  componentDidMount(){
    this.fetchOrder(this)
  }
  componentDidUpdate(){
      this.fetchOrder(this);
      if(task) clearTimeout(task)
      task=setTimeout(()=>{
        if(this.state.data.length<1){
          Router.push('/profile')
        }
      },1000)
  }
  shouldComponentUpdate(prevProps, prevState){
    const condition1=JSON.stringify(prevState.data)!==JSON.stringify(this.state.data)
    const condition2=this.props.order!==prevProps.order
    if(condition1||condition2) return true
    return false
  }
  fetchOrder(comp){
    (async function(){
      if(localStorage?.getItem('token')){
        const {order}=comp.props;
        const token=await localStorage.getItem('token')
        const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}singleOrder`,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({token,id:order})
        })
        .then(res=>res.json())
        .then(({data})=>{
          comp.setState({data:data})
        })
      }
    })()
  }
  render(){
    const {data}=this.state;
    const order_cart=data?.order_cart?JSON.parse(data.order_cart):[];
    const styles={
      product:{
        display:'grid',
        alignItems:'center',
        justifyItems:'center',
        gridTemplateColumns:'70px auto',
        border:'solid black 1px',
        margin:'3px 0px',
        padding:'5px 3px',
      },
      productList:{
        display:'grid',
        justifyItems:'center',
        alignItems:'center',
        minHeight:'110px',
        maxHeight:'130px',
        overflowY:'scroll',
        overflowY:'auto',
        padding:'0px 3px',
        width:'fit-content',
      },
      order:{
        position:'relative',
        padding:'18px',
      },
      backBTN:{
        cursor:'pointer',
        top:'0%',
        left:'0%',
        position:'absolute',
        color:'black',
        fontSize:'18px',
        transition:'all 0.125s ease-in-out',
        fontWeight:'bold',
      },
      table:{
        table:{
          textAlign:'center',
        },
        td:{
          border:'solid black 1px',
          padding:'5px',
        },
        tr:{
          cursor:'pointer',
          width:'100%',
          transition:'all 0.125s ease-in-out',
        },
      }
    }
    const totalPrice=(order_cart?order_cart?.reduce((acc, elem)=>acc+elem.price*elem.howMany,0):0).toFixed(2);
    return(
      <div style={styles.order}>
        <Link href='/profile'>
          <HiOutlineArrowUturnLeft style={styles.backBTN} id="backBTN"/>
        </Link>
        <table style={styles.table.table} cellSpacing={1}>
          <thead>
            <tr>
              <td style={styles.table.td}>Date</td>
              <td style={styles.table.td}>State</td>
              <td style={styles.table.td}>Order</td>
              <td style={styles.table.td}>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.table.tr}>
              <td style={styles.table.td}>{new Date(data.date).toLocaleString()}</td>
              <td style={styles.table.td}>{data.state}</td>
              <td style={styles.table.td}>
                <div style={styles.productList}>
                  {order_cart.map((x,i)=>
                    <div key={i} style={styles.product}>
                      <ImgFrame src={x.image} alt={`image of ${x.name}`} x='60px' y='40px'/>
                      <div>{x.howMany} * {x.price}</div>
                    </div>
                  )}
                </div>
              </td>
              <td style={styles.table.td}>{totalPrice} PLN</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default WithAuth(HOC(Order));