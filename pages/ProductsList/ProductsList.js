import React, {Component} from "react";
import {Store} from "../HOC";
import ProductsGridField from "./ProductsGridField";
import {glbl,sort} from "../_app";
import Spinner from "../Spinner";

export default class ProductsList extends Component{
  render(){
    const styles={
      ProductsList:{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(120px, 120px))',
        gridAutoRows:'min-content',
        padding:'6px',
        minWidth:'60%',
        gridColumnGap:'6px',
        gridRowGap:'6px',
        width:'fit-content',
        minHeight:`calc(${glbl._field_height} * 3 + 4 * 4px)`,
        maxHeight:`calc(${glbl._field_height} * 3 + 4 * 4px)`,
        height:'fit-content',
        position:'relative',
      },
      loading:{
        position:'absolute',
        display:'grid',
        justifyItems:'center',
        alignItems:'center',
        top:0,
        bottom:0,
        left:0,
        right:0,
        margin:'auto',
      }
    }
    return(
      <div style={styles.ProductsList}>
        <Store.Consumer>
        {value=>{
          const {products,order,sex,type}=value??{};
          let sorted=(()=>{
            switch(order){
              case 'cheapest':{
                return sort.price.asc(products);
              }
              case 'expensive':{
                return sort.price.dsc(products);
              }
              case 'AtoZ':{
                return sort.name.asc(products);
              }
              case 'ZtoA':{
                return sort.name.dsc(products);
              }
              case 'quantityDsc':{
                return sort.quantity.asc(products);
              }
              case 'quantityAsc':{
                return sort.quantity.dsc(products);
              }
              default:{
          return products;
              }
            };
          })()
          sorted=(()=>{
            switch(sex){
              case 'man':{
                return sort.types.sex(sorted,sex);
              }
              case 'woman':{
                return sort.types.sex(sorted,sex);
              }
              default:{
                return sorted;
              }
            }
          })()
          sorted=(()=>{
            switch(type){
              case 'sport':{
                return sort.types.type(sorted,type);
              }
              case 'casual':{
                return sort.types.type(sorted,type);
              }
              default:{
                return sorted;
              }
            }
          })()
          return(
            <>
              {
                products?.length>0?
                  sorted?.map(({image,id})=><ProductsGridField id={id} key={id} src={image}/>)
                  :
                    <div style={styles.loading}><Spinner/></div>
              }
            </>
          )
        }}
        </Store.Consumer>
      </div>
    )
  }
}