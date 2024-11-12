import Category from "../models/category.model.js";

export const createCategory = async (req, res) => {
  try {
    if (!req.body.categoryName) {
      return res.status(400).json({
        success: false,
        message: "Category name required",
      });
    }

    const newCategory = await Category.create({
      categoryName: req.body.categoryName
    });

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


