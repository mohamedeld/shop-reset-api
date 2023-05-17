const express = require("express");
const router = express.Router();
const categoryCtrl = require("../../controllers/category.controller");
router.get("/category", categoryCtrl.getAll);
router.post("/category", categoryCtrl.createOne);
router.patch("/category/:id", categoryCtrl.updateOne);
router.get("/category/:id", categoryCtrl.getOne);
router.delete("/category/:id", categoryCtrl.deleteOne);

module.exports = router;
