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
const productService = require("../core/services/product.service");
exports.createOne = (req, res, next) => {
  productService
    .createOne(req.body)
    .then((product) => {
      res.status(200).json({ message: "product created", product });
    })
    .catch((err) => next(err));
};

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
