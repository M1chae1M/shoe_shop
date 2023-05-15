import {connection} from './connectionWithDB';
import loginQuery from './loginQuery';

module.exports=(req, res)=>{
  const {body}=req;
  const {login,password}=body;
  const query=loginQuery(login,password);

  connection.query(query, (err,data)=>{
    if(err){
      console.error(err);
    }
    else{
      if(login===''||password===''||login===password){
        res.status(409).json({message:'Illegal login or password!'})
      }
      else{
        if(data.length>0){
          res.status(409).json({message:'This login is taken, try to enter another one.'});
        }
        else{
          const addUserQuery=`INSERT INTO users (login, password, typeAdmin, img) VALUES ("${login}", SHA2("${password}",256), 0, "https://cdn-icons-png.flaticon.com/128/552/552721.png");`;
          connection.query(addUserQuery, (err,data)=>{
            res.status(200).json({message:'User created! Have a great shopping experience.'});
          });
        }
      }
    }
  })
}