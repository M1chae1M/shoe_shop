import {connection} from './connectionWithDB';
import JWT from 'jsonwebtoken';
import {verificationKey} from './verificationKey';
import loginQuery from './loginQuery';

export default function auth(req, res){
  const {body}=req;
  const {token}=body;

  if(token){
    const decoded=JWT.decode(token, verificationKey);
    const {login, password}=decoded;
    const query=loginQuery(login,password);

    return new Promise((resolve, reject)=>{
      connection.query(query, (err, data)=>{
        if(err) reject(err);
        else if(data.length > 0) resolve({data, login, token});
        else resolve({data:[], login, token});
      });
    });
  }
  else return Promise.resolve([]);
}