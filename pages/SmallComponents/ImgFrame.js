import React, {Component} from "react";
import Spinner from "./Spinner";

const imgref=React.createRef();

export default class ImgFrame extends Component{
  state={
    loading:true,
  }
  componentDidMount(){
    imgref?.current && this.loadIMG(this);
  }
  loadIMG(comp){
    comp.setState({loading:false})
  }
  render(){
    const {loading}=this.state;
    const {src,alt,children,className,x,y,id,endloading,shadow}=this.props;
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
      hidden:{
        display:'none',
      }
    }
    const onLoad=()=>{
      this.loadIMG(this)
    }
    return(
      <div style={{...styles.ImgFrame,...shadow}} id={id}>
        {loading && <Spinner/>}
        <img ref={imgref} src={src} alt={alt} onLoad={onLoad} style={{...styles.img,...(loading?styles.hidden:{})}}/>
        {children}
      </div>
    )
  }
}