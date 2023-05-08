import React, {Component} from "react";
import GreenBTN from "./GreenBTN";

export default class Number extends Component{
  render(){
    const {value,onChange}=this.props;
    const styles={
      Number:{
        textAlign:'center',
        margin:'5px',
      },
      btn:{
        width:'20px',
      },
      changeNumber:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
        padding:'0px 7px',
        width:'fit-content',
      },
    }
    const minus=()=>onChange(-1)
    const plus=()=>onChange(+1)
    return(
      <div style={styles.changeNumber}>
        <div style={styles.btn}>
          <GreenBTN value='-' onClick={minus} className="GreenBTN"/>
        </div>
          <div style={styles.Number}>{value}</div>
        <div style={styles.btn}>
          <GreenBTN value='+' onClick={plus} className="GreenBTN"/>
        </div>
      </div>
    )
  }
}