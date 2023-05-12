import React, {Component} from "react";
import {BiLoaderCircle} from 'react-icons/bi';

export default class Spinner extends Component{
  render(){
    const styles={
      spinner:{
        fontSize:'35px',
        animation:'spin 1s ease-in-out infinite',
      }
    }
    return <BiLoaderCircle style={styles.spinner}/>
  }
}