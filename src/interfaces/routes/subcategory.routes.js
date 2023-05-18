const express = require("express");
const router = express.Router();
const subcategoryCtrl = require("../../controllers/subcategory.controller");
const validatorError = require("../middlewares/validator/validationError");
const validator = require("../middlewares/validator/subCategory.validator");
router.get("/subcategory", subcategoryCtrl.getAll);
router.post(
  "/subcategory",
  validator.addSubCategory,
  validatorError,
  subcategoryCtrl.createOne
);
router.patch(
  "/subcategory/:id",
  validator.updateSubCategory,
  validatorError,
  subcategoryCtrl.updateOne
);
router.get(
  "/subcategory/:id",
  validator.getOne,
  validatorError,
  subcategoryCtrl.getOne
);
router.delete(
  "/subcategory/:id",
  validator.deleteSubCategory,
  validatorError,
  subcategoryCtrl.deleteOne
);

module.exports = router;
