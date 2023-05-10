import {Store} from "../HOC";
import Link from "next/link";
import {glbl} from "../_app";
import React, {Component} from "react";
import ImgFrame from "../ImgFrame";
import Background from "../Modal/Background";

export default class SearchingList extends Component{
  render(){
    const styles={
      miniature:{
        height:'40px',
      },
      frame:{
        height:'40px',
        width:'60px',
        overflow:'hidden',
        display:'grid',
        justifyItems:'center',
        alignItems:'center',
      },
      ul:{
        position:'fixed',
        transform:`translateY(calc(${glbl._height} + 3px))`,
        width:glbl._width,
        zIndex:'1410',
      },
      li:{
        display:'flex',
        alignItems:'center',
        margin:'2px 0px',
        backgroundColor:'#e3e3e3',
        background:'linear-gradient(275deg,#e3e3e3 0%,#ffffff 29%)',
        boxShadow:'2px 2px gray',
        transition:'all 0.125s ease-in-out',
        borderRadius:'5px',
        overflow:'hidden',
        paddingLeft:'5px',
      },
      link:{
        textDecoration:'none',
        color:'black',
      },
      shadowNone:{
        boxShadow:'none',
        border:'solid black 1px',
        borderRadius:'5px',
      }
    }
    return(
      <Store.Consumer>
      {value=>{
        const {search,changeState}=value??{};
        const sliced=search?.slice(0,5)||search;
        const closeList=()=>changeState({searchValue:'',search:[]});
        const clickBground=(e)=>{if(e.target.id==='Background') closeList()};
        return(
          <>
            <ul style={styles.ul}>
              {
              sliced?.map(({name,id,image})=>
                <Link href={`/products/${id}`} key={name} style={styles.link} onClick={closeList}>
                  <li style={styles.li} className="searchingElement">
                    <ImgFrame src={image} shadow={styles.shadowNone} alt={`image of ${name}`} x='60px' y='40px'/> {name}
                  </li>
                </Link>
              )}
            </ul>
            {search?.length>0 && <Background bgc={'transparent'} zidx='1300' onMouseDown={clickBground}/>}
          </>
        )
      }}
      </Store.Consumer>
    )
  }
}