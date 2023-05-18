const { param, body } = require("express-validator");

module.exports.deleteCategory = param("id")
  .isMongoId()
  .withMessage("id must be mongodID");

module.exports.getOne = param("id")
  .isMongoId()
  .withMessage("id must be mongodID");

module.exports.addCategory = [
  body("name")
    .notEmpty()
    .withMessage("name cant be empty")
    .isAlpha()
    .withMessage("name must be string")
    .optional(),
  body("description")
    .notEmpty()
    .withMessage("description cant be empty")
    .isString()
    .withMessage("description must be string")
    .optional(),
  body("subCategory"),
];

module.exports.updateCategory = [
  param("id").isMongoId().withMessage("id must be mongodID"),
  body("name")
    .notEmpty()
    .withMessage("name cant be empty")
    .isAlpha()
    .withMessage("name must be string")
    .optional(),
  body("description")
    .notEmpty()
    .withMessage("description cant be empty")
    .isString()
    .withMessage("description must be string")
    .optional(),
  body("subCategory"),
];
