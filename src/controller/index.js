"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = void 0;
const index_1 = __importDefault(require("../util/index"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const signup_model_1 = __importDefault(require("../models/signup.model"));
const createAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const transaction = yield index_1.default.transaction();
    try {
        const userExisits = yield signup_model_1.default.findOne({ where: { user_email: req.body.user_email } });
        if (userExisits) {
            return res.status(400).json({
                success: false,
                message: "User already exists with this email ID",
            });
        }
        const hashedPassword = yield bcrypt_1.default.hash(req.body.user_password, 10);
        const newTransaction = yield signup_model_1.default.create({
            date: new Date(),
            user_email: req.body.user_email,
            user_password: hashedPassword,
        }, { transaction });
        yield transaction.commit();
        return res.status(200).json({
            success: true,
            message: "Account created successfully",
            data: newTransaction,
        });
    }
    catch (error) {
        yield transaction.rollback();
        console.error("Account creation failed:", error);
        return res.status(500).json({
            success: false,
            message: error.message || "An error occurred while creating the account",
        });
    }
});
exports.createAccount = createAccount;
//# sourceMappingURL=index.js.map