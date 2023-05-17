const path = require("path");
const express = require("express");
const multerMW = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "multer.mw"
));
const productController = require(path.join(
  __dirname,
  "..",
  "..",
  "controllers",
  "product.controller"
));
const productFilesMw = multerMW.fields([
  {
    name: "image",
    maxCount: 1,
  },
  {
    name: "thumbnails",
    maxCount: 5,
  },
]);
const router = express.Router();
router.route("/product").post(productFilesMw, productController.createOne);

module.exports = router;
