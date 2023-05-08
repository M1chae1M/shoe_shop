import mysql from 'mysql2';
import {connection} from './connectionWithDB';
import JWT from 'jsonwebtoken';
import {verificationKey} from './verificationKey';
import loginQuery from './loginQuery';

module.exports=(req, res)=>{
  const {body}=req;
  const {login,password}=body;
  const query=loginQuery(login,password);

  connection.query(query, (err,data)=>{
    if(data.length>0){
      const {img}=data[0];
      const token=JWT.sign({login,password}, verificationKey);
      res.status(200).json({login, logged:true, token,img, message:''});
    }
    else res.status(200).json({logged:false, message:'Failed login! Try again!'})
  });
};