import React, {Component} from "react";

const ProductsHOC=(ToWrap)=>{
  return class HOC extends Component{
    state={
      products:[],
    }
    componentDidMount(){
      fetch(`${process.env.NEXT_PUBLIC_API_URL}products`)
      .then(res=>res.json())
      .then(({resp})=>this.setState({products:resp},console.log(this.state.products)))
    }
    render(){
      const {products}=this.state;
      return <ToWrap products={products} {...this.props}/>
    }
  }
}

export default ProductsHOC;