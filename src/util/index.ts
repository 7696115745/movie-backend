 const {Sequelize} = require("sequelize");
const dotenv=require('dotenv').config()
const databaseSync=new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
     timezone: '+00:00'
   }
)
export default databaseSync