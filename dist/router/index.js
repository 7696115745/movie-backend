"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const route = (0, express_1.Router)();
route.post("/signup", controller_1.createAccount);
exports.default = route;
//# sourceMappingURL=index.js.map