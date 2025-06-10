let mysql = require('mysql');
const dotenv=require('dotenv').config()
 const DataBaseConn=mysql.createConnection({
    host:process.env.LOCAL_HOST,     
    port: 3306,             
    database:process.env.DB_NAME,        
    user:process.env.DB_USER, 
    password:process.env.DB_PASSWORD ,
    
})
export default DataBaseConn;