const express = require("express");
const router = express.Router();
const subcategoryCtrl = require("../../controllers/subcategory.controller");
router.get("/subcategory", subcategoryCtrl.getAll);
router.post("/subcategory", subcategoryCtrl.createOne);
router.patch("/subcategory/:id", subcategoryCtrl.updateOne);
router.get("/subcategory/:id", subcategoryCtrl.getOne);
router.delete("/subcategory/:id", subcategoryCtrl.deleteOne);

module.exports = router;
