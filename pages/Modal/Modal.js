import React, {Component} from "react";
import GreenBTN from "../SmallComponents/GreenBTN";
import Background from "./Background";
import Number from "../SmallComponents/Number";
import SelectC,{OptionC} from "../SmallComponents/SelectC";

export default class Modal extends Component{
  state={
    howMany:0,
    size:this.props.sizes?.[0],
  }
  render(){
    const {howMany,size}=this.state;
    const {quantity,sizes,closeModal,addToCart}=this.props;
    const styles={
      Modal:{
        display:'grid',
        color:'white',
      },
      background:{
        display:'grid',
        justifyItems:'center',
        alignItems:'center',
        position:'fixed',
        top:'0%',
        left:'0%',
        background:'rgb(128 128 128 / 60%)',
        width:'100vw',
        height:'100vh',
        zIndex:'2000',
      },
      change:{
        display:'grid',
        gridAutoFlow:'column',
        alignItems:'center',
      },
    }
    const changeHowMany=(change)=>{
      const value=howMany+change;
      if(value<=quantity && value>0) this.setState({howMany:value})
    }
    const addAndClose=(e)=>{
      closeModal(e);
      addToCart(e,howMany,size);
    }
    const clickModal=(e)=>e.target.id==='Background'&&closeModal(e);
    const onChange=(e)=>this.setState({size:e.target.value});
    return(
      <Background bgc='rgb(128 128 128/60%)' zidx='2000' onMouseDown={clickModal}>
        <div style={styles.Modal}>
          <div style={styles.change}>
            How many: <Number value={howMany} onChange={changeHowMany}/>
            {' Size: '}
            <SelectC value={size} onChange={onChange} className="GreenBTN">
              {sizes?.map(x=><OptionC key={x} value={x}>{x}</OptionC>)}
            </SelectC>
          </div>
          <GreenBTN value='Add to cart' onClick={addAndClose} className="GreenBTN"/>
        </div>
      </Background>
    )
  }
}