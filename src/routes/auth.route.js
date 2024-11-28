import express from "express";
import { registerUser, userLogin } from "../controllers/auth.controller.js";

const authRoute = express.Router();

authRoute.post("/auth/register", registerUser);
authRoute.post("/auth/login", userLogin);

export default authRoute;
