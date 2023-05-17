const productRepo = require("../repositories/product.repository");
module.exports.createOne = (product) => {
  
  return productRepo.createOne(product);
};
