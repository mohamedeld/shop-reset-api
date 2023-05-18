const mongoose = require("mongoose");
const Category = mongoose.model("Category");

const {
  getAll,
  createOne,
  deleteOne,
  updateOne,
  getOne,
} = require("../core/services/subcategory.service");
module.exports.getAll = (req, res, next) => {
  getAll()
    .then((subcategories) => {
      res.status(200).json({
        message: "get all subcategories",
        subcategories,
      });
    })
    .catch((err) => next(err));
};
module.exports.createOne = (req, res, next) => {
  createOne(req.body)
    .then((subcategory) => {
      res.status(200).json({
        message: "create new subcategory",
        subcategory,
      });
    })
    .catch((err) => next(err));
};
module.exports.updateOne = (req, res, next) => {
  updateOne(req.params["id"], req.body)
    .then((subcategory) => {
      res.status(200).json({
        message: "update subcategory",
        subcategory,
      });
    })
    .catch((err) => next(err));
};
module.exports.getOne = (req, res, next) => {
  getOne(req.params["id"])
    .then((subcategory) => {
      res.status(200).json(subcategory);
    })
    .catch((err) => next(err));
};
module.exports.deleteOne = (req, res, next) => {
  deleteOne(req.params["id"])
    .then((object) => {
      return Category.updateOne(
        { subCategory: req.params.id },
        { $pull: { subCategory: req.params.id } }
      );
    })
    .then((subcategory) => {
      res.status(200).json({
        message: "delete a subcategory",
        subcategory,
      });
    })
    .catch((err) => next(err));
};
