const Product = require("../models/product.model");
module.exports.createOne = (product) => {
  return new Product(product).save();
};
