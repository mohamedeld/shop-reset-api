const express = require("express");
const router = express.Router();
const categoryCtrl = require("../../controllers/category.controller");
const validatorError = require("../middlewares/validator/validationError");
const validator = require("../middlewares/validator/category.validator");
router.get("/category", categoryCtrl.getAll);
router.post(
  "/category",
  validator.addCategory,
  validatorError,
  categoryCtrl.createOne
);
router.patch(
  "/category/:id",
  validator.updateCategory,
  validatorError,
  categoryCtrl.updateOne
);
router.get(
  "/category/:id",
  validator.getOne,
  validatorError,
  categoryCtrl.getOne
);
router.delete(
  "/category/:id",
  validator.deleteCategory,
  validatorError,
  categoryCtrl.deleteOne
);

module.exports = router;
