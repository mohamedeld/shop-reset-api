const {
  getAll,
  createOne,
  deleteOne,
  updateOne,
  getOne,
} = require("../core/services/category.service");
module.exports.getAll = (req, res, next) => {
  getAll()
    .then((categories) => {
      res.status(200).json({
        message: "get all categories",
        categories,
      });
    })
    .catch((err) => next(err));
};
module.exports.createOne = (req, res, next) => {
  createOne(req.body)
    .then((category) => {
      res.status(200).json({
        message: "create new category",
        category,
      });
    })
    .catch((err) => next(err));
};
module.exports.updateOne = (req, res, next) => {
  updateOne(req.params["id"], req.body)
    .then((category) => {
      res.status(200).json({
        message: "update category",
        category,
      });
    })
    .catch((err) => next(err));
};
module.exports.getOne = (req, res, next) => {
  getOne(req.params["id"])
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => next(err));
};
module.exports.deleteOne = (req, res, next) => {
  deleteOne(req.params["id"])
    .then((category) => {
      res.status(200).json({
        message: "get one category",
        category,
      });
    })
    .catch((err) => next(err));
};
