const path = require("path");
const express = require("express");
const multerMW = require(path.join(__dirname, "..", "middlewares", "multer.mw"));
const { param, body } = require("express-validator");
const productController = require(path.join(
  __dirname,
  "..",
  "..",
  "controllers",
  "product.controller"
));
const router = express.Router();

router
  .route("/product")
  .post(productController.addNewProduct)
//   .put(productController.updateProduct);
router
  .route("/product/uploadImg")
  .post(multerMW, productController.uploadProductImg);
// router.route("/product/:id").get(productController.getProductDetails);
module.exports = router;
