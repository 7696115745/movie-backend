import { Router } from "express";
import { createAccount } from "../controller";
const route=Router();
route.post("/signup",createAccount)
export default route;