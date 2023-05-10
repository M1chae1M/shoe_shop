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
          function sortByPriceAsc(products){
            return products.sort((a, b)=>a.price - b.price);
          }
          function sortByPriceDsc(products){
            return products.sort((a, b) =>b.price-a.price);
          }
          function sortByNameAsc(products){
            return products.sort(function(a, b){
              var nameA=a.name.toUpperCase();
              var nameB=b.name.toUpperCase();
              if (nameA<nameB) return -1;
              if (nameA>nameB) return 1;
              return 0;
            });
          }
          function sortByNameDsc(products){
            return products.sort((a, b)=>{
              const nameA=a.name.toUpperCase();
              const nameB=b.name.toUpperCase();
              if (nameA>nameB) return -1
              if (nameA<nameB) return 1
              return 0;
            });
          }
          function sortByQuantityAsc(products){
            return products.sort((a, b)=>a.quantity-b.quantity);
          }
          function sortByQuantityDsc(products){
            return products.sort((a, b) =>b.quantity-a.quantity);
          }
          function sortBySex(products){
            return products.filter(x=>x.sex.toLowerCase()===sex)
          }
          function sortByType(products){
            return products.filter(x=>x.category===type)
          }
          let sorted=(()=>{
            switch(order){
              case 'cheapest':{
                return sortByPriceAsc(products);
              }
              case 'expensive':{
                return sortByPriceDsc(products);
              }
              case 'AtoZ':{
                return sortByNameAsc(products);
              }
              case 'ZtoA':{
                return sortByNameDsc(products);
              }
              case 'quantityDsc':{
                return sortByQuantityAsc(products);
              }
              case 'quantityAsc':{
                return sortByQuantityDsc(products);
              }
              default:{
          return products;
              }
            };
          })()
          sorted=(()=>{
            switch(sex){
              case 'man':{
                return sortBySex(sorted);
              }
              case 'woman':{
                return sortBySex(sorted);
              }
              default:{
                return sorted;
              }
            }
          })()
          sorted=(()=>{
            switch(type){
              case 'sport':{
                return sortByType(sorted);
              }
              case 'casual':{
                return sortByType(sorted);
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