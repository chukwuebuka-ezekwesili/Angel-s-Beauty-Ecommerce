import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/category.controller.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

const categoryRoute = express.Router();

categoryRoute.post("/category/create", adminMiddleware, createCategory);
categoryRoute.put("/category/update/:id", adminMiddleware, updateCategory);
categoryRoute.get("/category/all", getCategories);
categoryRoute.get("/category/:id", getCategoryById);
categoryRoute.delete("/category/delete/:id", adminMiddleware, deleteCategory);
// categoryRoute.patch("/category/update/:id", adminMiddleware, updateCategory);

export default categoryRoute;
