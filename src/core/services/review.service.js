const {createOne,getAll,findOne,updateOne,deleteOne} = require("../repositories/review.repository");

module.exports.createOne = createOne();
module.exports.getAll = getAll();

module.exports.findOne = (id) => findOne(id);
module.exports.updateOne = (id) => updateOne(id)
module.exports.deleteOne = (id) => deleteOne(id)