import React, {Component} from 'react';
import Router from 'next/router';
import Spinner from '../SmallComponents/Spinner';

export default class OrdersList extends Component{
  state={
    message:'',
    data:[],
    loading:true,
  }
  componentDidMount(){
    const {token}=this.props;
    fetch(`${process.env.NEXT_PUBLIC_API_URL}order/all`,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({token})
    })
    .then(res=>res.json())
    .then(res=>{
      const {data,message}=res;
      this.setState({data,message,loading:false});
    })
  }
  render(){
    const {message,data,loading}=this.state;
    const styles={
      order:{
        textDecoration:'none',
        color:'black',
      },
      table:{
        table:{
          textAlign:'center',
          width:'80%',
          height:'80%',
        },
        thead:{
          position:'sticky',
          top:'0%',
          background:'white',
          left:'0%',
        },
        tr:{
          cursor:'pointer',
          width:'100%',
          transition:'all 0.125s ease-in-out',
        },
        td:{
          border:'solid black 1px',
          padding:'3px',
        },
      },
      OrdersList:{
        overflowY:'auto',
        display:'grid',
        justifyItems:'center',
        alignItems:'center',
        height:'80%',
      },
    }
    return(
      <div style={styles.OrdersList}>
      {
        loading?<Spinner/>:
          data.length>0?
            <table cellSpacing={1} style={styles.table.table}>
              <thead style={styles.table.thead}>
                <tr style={styles.table.tr}>
                  <th style={styles.table.td}>Id</th>
                  <th style={styles.table.td}>State</th>
                  <th style={styles.table.td}>Date</th>
                </tr>
              </thead>
                <tbody>
                {data.map((x,i)=>
                  <tr style={styles.table.tr} className='tr' key={x.id} onClick={()=>{Router.push(`/history/${x.id}`)}}>
                    <td style={styles.table.td}>{x.id}.</td>
                    <td style={styles.table.td}>{x.state}</td>
                    <td style={styles.table.td}>{new Date(x.date).toLocaleString()}</td>
                  </tr>
                )}
              </tbody>
            </table>:
          <div>{message}</div>
      }
      </div>
    )
  }
}