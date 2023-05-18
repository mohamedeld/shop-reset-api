const SubCategory = require("../models/subcategory.model");

module.exports.getAll = () => SubCategory.find();
module.exports.createOne = (subCategory) => new SubCategory(subCategory).save();
module.exports.updateOne = (id, data) => {
  return SubCategory.findByIdAndUpdate(id, data, { new: true });
};
module.exports.getOne = (id) => {
  return SubCategory.findById(id);
};
module.exports.deleteOne = (id) => {
  return SubCategory.findByIdAndDelete(id);
};
