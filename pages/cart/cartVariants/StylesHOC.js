import React, {Component} from "react";

const StylesHOC=(ToWrap)=>{
  return class HOC extends Component{
    render(){
      const styles={
        container:{
          display:'grid',
          justifyItems:'center',
        },
        cartList:{
          overflowY:'scroll',
        },
        size:{
          minHeight:'180px',
          display:'grid',
          width:'70vw',
        },
        empty:{
          display:'grid',
          width:'100%',
          height:'100%',
          justifyItems:'center',
          alignItems:'center',
        },
        total:{
          textAlign:'center',
          width:'70vw',
          maxWidth:'400px',
        },
        hidden:{
          display:'none',
        },
      }
      return(
        <ToWrap styles={styles} {...this.props}/>
      )
    }
  }
}

export default StylesHOC;