import React, {Component} from "react";
import WithAuth from "../HOC/WithAuth";
import Router from "next/router";
import ErrorPage from '../404';
import OrderTable from "./OrderTable";

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
        const token=await localStorage.getItem('token');

        // const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}order/${order}`,{
        //   method:'POST',
        //   headers:{'Content-Type':'application/json'},
        //   body:JSON.stringify({token})
        // })
        const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}order`,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({token,order})
        })
        .then(res=>res.json())
        .then(({data})=>comp.setState({data:data}))
      }
    })()
  }
  render(){
    const {data}=this.state;
    const order_cart=data?.order_cart?JSON.parse(data.order_cart):[];
    const order_date=new Date(data.date).toLocaleString();
    const totalPrice=(order_cart?order_cart?.reduce((acc, elem)=>acc+elem.price*elem.howMany,0):0).toFixed(2);
    return(
      <>
        {
          // order_date!=='Invalid Date'?
            <OrderTable order_date={order_date} data={data} order_cart={order_cart} totalPrice={totalPrice}/>
            // :<ErrorPage/>
        }
      </>
    )
  }
}

export default WithAuth(Order);