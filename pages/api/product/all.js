import mysql from 'mysql2';
import {connection} from '../connectionWithDB';

module.exports=(req, res)=>{
  const query=`SELECT * FROM products`;
  connection.query(query, (err,resp)=>{
    if(err){
      console.error(err);
    }
    else{
      res.status(200).json({resp});
    }
  });
};