const productSchema = require("../models/productSchema");

const createProduct = async (req, res) => {
  const product = new productSchema(req.body);
  try {
    const filepath = `/uploads/${req.file.filename}`;
    product.product_Pic = filepath;
    const create = await product.save();
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Add Product Successfully",
      results: {
        create,
      },
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      error_code: 400,
      message: err.message,
    });
  }
};

const editProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updated = await productSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "Success",
      message: "Category Updated Successfully",
      updated,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports = {
  createProduct,
  editProduct,
};
