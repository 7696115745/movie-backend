import databaseSync from "../util";
import { DataTypes } from "sequelize";

const SignupTable = databaseSync.define("Signup", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,  
    autoIncrement: true,               
    primaryKey: true,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,     
  },
  user_email: {
    type: DataTypes.STRING(255),     
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,                  
    },
  },
  user_password: {
    type: DataTypes.STRING(255),     
    allowNull: false,
  },
}, {
  timestamps: true,                   
});

export default SignupTable;
