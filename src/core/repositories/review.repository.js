const Review = require("../models/review.model");

module.exports.createOne = (review) => new Review(review).save();

module.exports.getAll = Review.find();
module.exports.findOne = (id) => Review.findById(id);

module.exports.updateOne = (id,data)=> Review.findByIdAndUpdate(id,data,{new:true});

module.exports.deleteOne = (id) => Review.findByIdAndDelete(id);
