export default function loginQuery(login,password){
  return `SELECT * FROM users WHERE login="${login}" AND password=SHA2("${password}",256)`;
}