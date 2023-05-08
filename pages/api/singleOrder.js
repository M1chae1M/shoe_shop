import {connection} from './connectionWithDB';
import auth from './authPromise';

module.exports=(req, res)=>{
  const {body}=req;
  const {id}=body;
  auth(req, res)
  .then(({data,login})=>{
    if(data?.length>0){
      const query=`SELECT * FROM orders WHERE user="${login}" AND id='${id}'`;
      connection.query(query, (err,data)=>{
        if(data.length>0) res.status(200).json({data:data[0],message:''});
        else res.status(200).json({data:[],message:'no orders'})
      })
    }
    else res.status(200).json({data:[],message:'no orders'})
  })
}