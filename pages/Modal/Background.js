import React, {Component} from "react";

export default class Background extends Component{
  render(){
    const {children,bgc,zidx}=this.props;
    const styles={
      Bground:{
        display:'grid',
        justifyItems:'center',
        alignItems:'center',
        position:'fixed',
        top:'0%',
        left:'0%',
        background:bgc,
        width:'100vw',
        height:'100vh',
        zIndex:'2000',
        zIndex:zidx,
        backdropFilter:'blur(1.8px)',
      }
    }
    return(
      <div id="Background" style={styles.Bground} {...this.props}>
        {children}
      </div>
    )
  }
}