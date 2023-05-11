import React, {Component} from "react";

export default class ImgFrame extends Component{
  render(){
    const {src,alt,children,className,x,y,id,endloading}=this.props;
    const styles={
      ImgFrame:{
        height:y,
        width:x,
        overflow:'hidden',
        display:'grid',
        justifyItems:'center',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        textDecoration:'none',
        color:'black',
        position:'relative',
        boxShadow:'2px 2px grey, -2px -2px grey',
        justifyItems:'center',
        transition:'all 0.125s ease-in-out',
      },
      img:{
        height:y,
      },
    }
    return(
      <div style={{...styles.ImgFrame,...this.props.shadow}} id={id}>
        <img style={styles.img} src={src} alt={alt} onLoad={endloading}/>
        {children}
      </div>
    )
  }
}