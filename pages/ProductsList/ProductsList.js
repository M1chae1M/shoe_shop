import React, {Component} from "react";
import {Store} from "../HOC";
import ProductsGridField from "./ProductsGridField";
import {glbl} from "../_app";

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
          return sorted?.map(({image,id})=><ProductsGridField id={id} key={id} src={image}/>)
        }}
        </Store.Consumer>
      </div>
    )
  }
}

const sort={
  price:{
    asc:function(products){
      return products?.sort((a, b)=>a.price - b.price);
    },
    dsc:function(products){
      return products?.sort((a, b) =>b.price-a.price);
    }
  },
  name:{
    dsc:  function(products){
      return products?.sort((a, b)=>{
        const nameA=a.name.toUpperCase();
        const nameB=b.name.toUpperCase();
        if (nameA>nameB) return -1
        if (nameA<nameB) return 1
        return 0;
      });
    },
    asc:function(products){
      return products?.sort(function(a, b){
        const nameA=a.name.toUpperCase();
        const nameB=b.name.toUpperCase();
        if (nameA<nameB) return -1;
        if (nameA>nameB) return 1;
        return 0;
      });
    },
  },
  quantity:{
    asc:function(products){
      return products?.sort((a, b)=>a.quantity-b.quantity);
    },
    dsc:function(products){
      return products?.sort((a, b) =>b.quantity-a.quantity);
    }
  },
  types:{
    sex:function(products,sex){
      return products?.filter(x=>x.sex.toLowerCase()===sex)
    },
    type:function(products,type){
      return products?.filter(x=>x.category===type)
    }
  }
}