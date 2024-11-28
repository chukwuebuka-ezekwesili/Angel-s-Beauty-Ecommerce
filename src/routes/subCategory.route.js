import express from "express";
import { createSubCategory } from "../controllers/subCategory.controller.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
import { createCategory } from "../controllers/category.controller.js";

const subCategoryRoute = express.Router();

subCategoryRoute.post(
  "/subCategory/create",
  adminMiddleware,
  createSubCategory
);

export default subCategoryRoute;
