import {connection} from './connectionWithDB';

module.exports=(req, res)=>{
  const {method}=req;
  if(method==='POST'){
    const {boot}=req.body;
    const query=`SELECT * FROM products where id='${boot}'`;
    connection.query(query, (err,resp)=>{
      res.status(200).json({resp:resp[0]});
    });
  }
};