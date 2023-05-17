const SubCategory = require("../models/subcategory.model");
// const addSubCategory = (subcategory) => {
//   return new SubCategory(subcategory).save();
// };

// module.exports = { addSubCategory };
module.exports.getAll = () => SubCategory.find();
module.exports.createOne = (subCategory) => new SubCategory(subCategory).save();
// module.exports.createOne = (SubCategory) => new SubCategory(SubCategory).save();
module.exports.updateOne = (id, data) => {
  return SubCategory.findByIdAndUpdate(id, data, { new: true });
};
module.exports.getOne = (id) => {
  return SubCategory.findById(id);
};
module.exports.deleteOne = (id) => {
  return SubCategory.findByIdAndDelete(id);
};
