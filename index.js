import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./src/routes/auth.route.js";
import categoryRoute from "./src/routes/category.route.js";
import subCategoryRoute from "./src/routes/subCategory.route.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/angels-ecommerce", authRoute);
app.use("/api/v1/angels-ecommerce", categoryRoute);
app.use("/api/v1/angels-ecommerce", subCategoryRoute);

app.get("/api/v1/angels-ecommerce", (req, res) => {
  res.send("Angel's E-commerce");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error(err));
