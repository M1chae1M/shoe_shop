import React, {Component} from "react";
import {Store} from "../HOC";
import Router from "next/router";
import Select, {Option} from "../Select";

export default class TopFilters extends Component{
  render(){
    const styles={
      TopFilters:{
        display:'flex',
        flexWrap:'wrap',
        gap:'5px',
        margin:'5px 0px',
      },
    }
    const types=['all','sport','casual'];
    const sexes=['All','Man','Woman'];
    const order=[
      {value:'cheapest',text:'from the cheapest'},
      {value:'expensive',text:'from the most expensive'},
      {value:'AtoZ',text:'A to Z'},
      {value:'ZtoA',text:'Z to A'},
      {value:'quantityDsc',text:'quantity descending'},
      {value:'quantityAsc',text:'quantity ascending'}
    ];
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
        const sexSelectValue=sex.charAt(0).toUpperCase()+sex.slice(1);
        const allOptions=order.map(({value,text})=><Option key={text} value={value}>{text}</Option>);
        return(
          <div style={styles.TopFilters}>
            <div id="order">
              {'Order by: '}
              <Select onChange={changeOrder}>
                {allOptions}
              </Select>
            </div>
            <div id="sex">
              {'Sex: '}
              <Select value={sexSelectValue} onChange={(e)=>{onChange(e,'sex')}}>
                {sexes.map(x=><Option value={x} key={x}>{x}</Option>)}
              </Select>
            </div>
            <div id="types">
              {'Types: '}
              <Select value={type} onChange={(e)=>{onChange(e,'type')}}>
                {types.map((kind)=><Option value={kind} key={kind}>{kind}</Option>)}
              </Select>
            </div>
          </div>
        )
      }}
      </Store.Consumer>
    )
  }
}