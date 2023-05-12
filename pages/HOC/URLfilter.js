import React, {Component} from "react";
import {withRouter} from "next/router";

const URLfilters=(WrappedComponent)=>{
  return withRouter(
    class WithFilter extends Component{
      static async getInitialProps({query}){
        const {sex, type}=query;
        return {sex, type};
      }
      render(){
        const {router}=this.props;
        const {query}=router;
        const {sex, type}=query;
        return <WrappedComponent sex={sex} type={type} {...this.props}/>
      }
    }
  )
}

export default URLfilters;