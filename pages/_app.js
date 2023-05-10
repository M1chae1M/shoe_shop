import React from 'react';
import '@/styles/globals.css';
import '@/styles/scroll.css';
import '@/styles/hoverEffects.css';
// import ErrorPage from './404';

export const glbl={
  _height:'30px',
  _width:'250px',
  _img_height:'200px',
  _field_height:'120px',
  _green_color:'#5fff33',
  _gradient:'linear-gradient(0deg,#5fff33 10%,#36c20f 31%,#36c20f 50%)',
  _yellow_color:'#fff625',
}

export default class App extends React.Component{
  // static async getInitialProps(ctx){
  //   const legalPaths=[
  //     '/',
  //     '/profile',
  //     '/history/[order]',
  //     '/products/[boot]',
  //     '/cart',
  //   ];
  //   const {pathname}=ctx?.router;
  //   const legal=legalPaths.includes(pathname);
  //   return {legal};
  // };
  render(){
    return(
      <>{
        // this.props.legal?
          this.props.Component &&
          <this.props.Component {...this.props.pageProps}/>
          // :
        // <ErrorPage/>
      }</>
    );
  }
}