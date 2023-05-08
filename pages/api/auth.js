import auth from './authPromise';

module.exports=(req, res)=>{
  auth(req, res)
  .then(({data,login,token})=>{
    if(data?.length>0){
      const {img}=data[0];
      res.status(200).json({login, logged:true, img, token});
    }
    else res.status(200).json({logged:false})
  })
}