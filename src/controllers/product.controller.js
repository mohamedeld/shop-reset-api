const { error } = require("console");
const path = require("path");
const fs = require("fs");
const ProductModel = require(path.join(
  __dirname,
  "..",
  "core",
  "models",
  "product.model"
));
const { getResErr } = require(path.join(
  __dirname,
  "..",
  "core",
  "utils",
  "error.util"
));
const { uploadImage } = require(path.join(
  __dirname,
  "..",
  "core",
  "utils",
  "upload-img.util"
));

exports.addNewProduct = async (req, res, next) => {
  let newProduct = new ProductModel({
    title: req.body.title,
    brand: req.body.brand,
    description: req.body.description,
    material: req.body.material,
    price: req.body.price,
    stockCount: req.body.stockCount,
    discount: req.body.discount,
    category: req.body.category,
    subCategory: req.body.subCategory,
    details: req.body.details,
    onModel: req.body.onModel,
  });
  try {
    let result = await newProduct.save();
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = () => {};

exports.uploadProductImg = async (req, res, next) => {
  const image = req.file;
  // check if there is image after multer middleware
  if (!image) {
    next(getResErr("Not valid image.", 422));
  } else {
    try {
      const imageUrl = await uploadImage(image.path);
      // delete the image from local storage
      fs.unlinkSync(image.path);
      let result = await ProductModel.updateOne(
        { _id: req.body.id },
        { image: imageUrl }
      );
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
};

exports.getProductDetails = () => {};
