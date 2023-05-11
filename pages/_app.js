import React from 'react';
import ErrorPage from './404';
import '../styles/globals.css';
import '../styles/scroll.css';
import '../styles/hoverEffects.css';

export const glbl={
  _height:'30px',
  _width:'250px',
  _img_height:'200px',
  _field_height:'120px',
  _green_color:'#5fff33',
  _gradient:'linear-gradient(0deg,#5fff33 10%,#36c20f 31%,#36c20f 50%)',
  _yellow_color:'#fff625',
}

export const sort={
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

export default class App extends React.Component{
  static async getInitialProps(ctx){
    const legalPaths=[
      '/',
      '/profile',
      '/history/[order]',
      '/products/[boot]',
      '/cart',
    ];
    const {pathname}=ctx?.router;
    const legal=legalPaths.includes(pathname);
    return {legal};
  };
  render(){
    const {legal,Component,pageProps}=this.props;
    return(
      <>{
        legal?
          Component && <Component {...pageProps}/>:
        <ErrorPage/>
      }</>
    );
  }
}