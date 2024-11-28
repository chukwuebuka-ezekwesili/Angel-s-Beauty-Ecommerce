import mongoose from "mongoose";
// import Category from "./category.model";

const { Schema } = mongoose;

const subCategorySchema = new mongoose.Schema(
  {
    subCategoryName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const subCategory = mongoose.model("subCategory", subCategorySchema);

export default subCategory;
