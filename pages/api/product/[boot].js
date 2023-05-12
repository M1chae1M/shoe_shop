import {connection} from '../connectionWithDB';

module.exports=(req, res)=>{
  const {method}=req;
  if(method==='GET'){
    const {boot}=req.query;
    const query=`SELECT * FROM products where id='${boot}'`;
    connection.query(query, (err,resp)=>{
      res.status(200).json({resp:resp[0]});
    });
  }
};