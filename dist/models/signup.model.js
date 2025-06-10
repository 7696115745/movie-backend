"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("../util"));
const sequelize_1 = require("sequelize");
const SignupTable = util_1.default.define("Signup", {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    user_email: {
        type: sequelize_1.DataTypes.STRING(255),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    user_password: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    timestamps: true,
});
exports.default = SignupTable;
//# sourceMappingURL=signup.model.js.map