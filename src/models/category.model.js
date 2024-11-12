import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  img_url: {
    type: String,
    required: false,
    trim: true,
  },
});

// Changed CategorySchema to Category in model name
const Category = mongoose.model("Category", categorySchema);

export default Category;
