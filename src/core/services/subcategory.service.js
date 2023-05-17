const {
  getAll,
  createOne,
  deleteOne,
  updateOne,
  getOne,
} = require("../repositories/subcategory.repostiory.js");

module.exports.getAll = () => getAll();
module.exports.createOne = (subcategory) => createOne(subcategory);
module.exports.updateOne = (id, data) => {
  return updateOne(id, data);
};
module.exports.getOne = (id) => {
  return getOne(id);
};
module.exports.deleteOne = (id) => {
  return deleteOne(id);
};
