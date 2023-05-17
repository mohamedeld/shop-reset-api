const {
  getAll,
  createOne,
  deleteOne,
  updateOne,
  getOne,
} = require("../repositories/category.repostiory");
module.exports.getAll = () => getAll();
module.exports.createOne = (category) => createOne(category);
module.exports.updateOne = (id, data) => {
  return updateOne(id, data);
};
module.exports.getOne = (id) => {
  return getOne(id);
};
module.exports.deleteOne = (id) => {
  return deleteOne(id);
};
