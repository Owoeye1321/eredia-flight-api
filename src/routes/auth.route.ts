import express from "express";
const route = express.Router();
import { Authentication } from "../controllers/AuthController";
const { login, create } = new Authentication();
route.post("/login", login);
route.post("/create", create);
export default route;
