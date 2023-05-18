const express = require("express");
const router = express.Router();
const reviewController = require("../../controllers/review.controller");

router.route("/").get(reviewController.getAll).post(reviewController.createOne)

router.route("/:id").get(reviewController.findOne).patch(reviewController.updateOne).delete(reviewController.deleteOne);


module.exports = router;