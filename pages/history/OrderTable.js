import React, {Component} from "react";
import ImgFrame from "../SmallComponents/ImgFrame";
import Link from "next/link";
import {HiOutlineArrowUturnLeft} from 'react-icons/hi2';
import HOC from "../HOC/HOC";
import ProductsHOC from "../HOC/ProductsHOC";

class OrderTable extends Component{
  render(){
    const {order_date,data,order_cart,totalPrice}=this.props;
    const styles={
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
      },
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
    }
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
            <td style={styles.table.td}>{order_date}</td>
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

export default ProductsHOC(HOC(OrderTable));