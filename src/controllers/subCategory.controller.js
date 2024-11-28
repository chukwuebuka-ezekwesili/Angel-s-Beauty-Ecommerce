import subCategory from "../models/subCategory.model.js";
import Category from "../models/category.model.js";

export const createSubCategory = async (req, res) => {
  try {
    // Find the category by its ID
    const categoryExists = await Category.findById(req.body.category);
    if (!categoryExists) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    if (!req.body.subCategoryName || !req.body.categoryName) {
      return res.status(400).json({
        success: false,
        message: "SubCategory name and Category are required",
      });
    }

    // Create the new subcategory
    const newSubCategory = await subCategory.create({
      subCategoryName: req.body.subCategoryName,
      category: categoryExists._id, // Use the found category's ID
      // category: req.body.category, // Include the category field
    });

    return res.status(201).json({
      success: true,
      message: "SubCategory created successfully",
      data: newSubCategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
