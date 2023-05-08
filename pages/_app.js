import React from 'react';
import '@/styles/globals.css';
import '@/styles/scroll.css';
import '@/styles/hoverEffects.css';
import ErrorPage from './404';

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