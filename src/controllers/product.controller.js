import Product from "../models/product.model";
import subCategory from "../models/subCategory.model";

//logic for creating a product
export const createProduct = async (req, res) => {

  try {

    const subCategoryExists = await subCategory.findById(subCategory);

    if (!subCategoryExists) {
      return res.status(404).json({
        success: false,
        message: "SubCategory not found",
      });
    }

    const { productName} = req.body;

    if (!req.body.name || !req.body.subCategory) {
        return res.status(400).json({
            success: false,
            message: "Product name and SubCategory are required"
        })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
