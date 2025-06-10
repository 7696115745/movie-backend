import  express  from "express";
const dontenv=require('dotenv').config()
import cors from "cors"
import bodyParser from "body-parser";
import DataBaseConn from "./config/conf";
import route from "./router";
import databaseSync from "./util";
const app = express();
const Port = process.env.PORT || 5001;

 app.use(cors({
  origin: true,
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());

 app.use('/api', route);

 const DataBaseConntion = () => {
  DataBaseConn.connect((err:any) => {
    if (err) {
      console.error("Database connection failed:", err.message);
      process.exit(1); 
    }
    console.log("Database connected successfully");
  });
  databaseSync.sync((err:any) => {
    if (err) {
      console.error("Database sync failed:", err.message);
      process.exit(1); 
    }
    console.log("Database sync successfully");
  })
};
 
 app.listen(Port, () => {
  DataBaseConntion();
  console.log(`Server is running on port ${Port}`);
});