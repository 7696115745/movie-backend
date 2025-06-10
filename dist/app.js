"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dontenv = require('dotenv').config();
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const conf_1 = __importDefault(require("./config/conf"));
const router_1 = __importDefault(require("./router"));
const util_1 = __importDefault(require("./util"));
const app = (0, express_1.default)();
const Port = process.env.PORT || 5001;
app.use((0, cors_1.default)({
    origin: true,
    credentials: true
}));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use('/api', router_1.default);
const DataBaseConntion = () => {
    conf_1.default.connect((err) => {
        if (err) {
            console.error("Database connection failed:", err.message);
            process.exit(1);
        }
        console.log("Database connected successfully");
    });
    util_1.default.sync((err) => {
        if (err) {
            console.error("Database sync failed:", err.message);
            process.exit(1);
        }
        console.log("Database sync successfully");
    });
};
app.listen(Port, () => {
    DataBaseConntion();
    console.log(`Server is running on port ${Port}`);
});
//# sourceMappingURL=app.js.map