import mongoose, { Schema } from "mongoose";
import subCategory from "./subCategory.model";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  img_url: {
    type: String,
    required: true,
    trim: true,
  },
  attributes: {
    color: String,
    size: String,
    weight: Number,
    length: String,
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: "subCategory",
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
