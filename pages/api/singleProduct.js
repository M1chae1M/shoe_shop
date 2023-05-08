import {connection} from './connectionWithDB';

module.exports=(req, res)=>{
  const {body}=req;
  const {id}=body;
  const query=`SELECT * FROM products where id='${id}'`;
  connection.query(query, (err,resp)=>{
    res.status(200).json({resp:resp[0]});
  });
};