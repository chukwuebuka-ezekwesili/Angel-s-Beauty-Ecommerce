import express from "express";
import {createCategory} from '../controllers/category.controller.js'
import { adminMiddleware } from "../middlewares/admin.middleware.js";

const categoryRoute = express.Router();

categoryRoute.post("/category/create", adminMiddleware, createCategory);

export default categoryRoute;
