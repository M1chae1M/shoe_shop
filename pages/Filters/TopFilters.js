import React, {Component} from "react";
import {Store} from "../HOC/HOC";
import Router from "next/router";
import SelectC, {OptionC} from "../SmallComponents/SelectC";
import {order,types,sexes} from "../_document";

export default class TopFilters extends Component{
  render(){
    const styles={
      TopFilters:{
        display:'flex',
        flexWrap:'wrap',
        gap:'5px',
        margin:'5px 0px',
        justifyContent:'center',
      },
    }
    const changeURL=(newURL)=>{
      const key=Object.keys(newURL)
      Router.push({
        pathname: '/',
        query: { ...Router.query, [key]: newURL[key]}
      });
    }
    return(
      <Store.Consumer>
      {value=>{
        const {changeState,sex,type}=value??{};

        const onChange=(e,key)=>{
          const value=e.target.value.toLowerCase();
          changeState({[key]:value});
          changeURL({[key]:value});
        }
        const changeOrder=(e)=>changeState({order:e.target.value});
        const sexSelectCValue=sex?.charAt?.(0).toUpperCase()+sex?.slice?.(1);
        const allOptionCs=order.map(({value,text})=><OptionC key={text} value={value}>{text}</OptionC>);
        return(
          <div style={styles.TopFilters}>
            <div id="order">
              {'Order by: '}
              <SelectC onChange={changeOrder}>
                {allOptionCs}
              </SelectC>
            </div>
            <div id="sex">
              {'Sex: '}
              <SelectC value={sexSelectCValue} onChange={(e)=>{onChange(e,'sex')}}>
                {sexes.map(x=><OptionC value={x} key={x}>{x}</OptionC>)}
              </SelectC>
            </div>
            <div id="types">
              {'Types: '}
              <SelectC value={type} onChange={(e)=>{onChange(e,'type')}}>
                {types.map((kind)=><OptionC value={kind} key={kind}>{kind}</OptionC>)}
              </SelectC>
            </div>
          </div>
        )
      }}
      </Store.Consumer>
    )
  }
}