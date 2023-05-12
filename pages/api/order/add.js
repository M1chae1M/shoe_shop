import {connection} from '../connectionWithDB';
import auth from '../authPromise';

const createDate=()=>{
  const today=new Date();
  const year=today.getFullYear().toString().padStart(4, '0');
  const month=(today.getMonth() + 1).toString().padStart(2, '0');
  const day=today.getDate().toString().padStart(2, '0');
  const hours=today.getHours().toString().padStart(2, '0');
  const minutes=today.getMinutes().toString().padStart(2, '0');
  const seconds=today.getSeconds().toString().padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

module.exports=(req, res)=>{
  const {body,method}=req;
  if(method==='POST'){
    const cart=JSON.stringify(body.cart);
    auth(req, res)
    .then(({data,login})=>{
      if(data.length>0){
        const date=createDate();
        const state='we are waiting for the payment to be posted';
        const query=`INSERT INTO orders (id, user, order_cart, state, date) VALUES (NULL, "${login}", '${cart}', "${state}", "${date}");`;
        connection.query(query);
      }
    })
  }
}