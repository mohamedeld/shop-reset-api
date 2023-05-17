const Category = require("../models/category.model");

// const options = (props) => {
//   return {
//     path: "subCategories",
//     select: props || "",
//   };
// };
module.exports.getAll = () => Category.find();
module.exports.createOne = (category) => new Category(category).save();
module.exports.updateOne = (id, data) => {
  return Category.findByIdAndUpdate(id, data, { new: true });
};
module.exports.getOne = (id) => {
  return Category.findById(id);
};
module.exports.deleteOne = (id) => {
  return Category.findByIdAndDelete(id);
};
