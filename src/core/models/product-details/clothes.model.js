const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const clothesSchema = new Schema({
  size: { type: String, required: true, enum: ["mid", "lg", "xl", "xxl"] },
  gender: {
    type: String,
    required: true,
    enum: ["male", "femal"],
  },
  style: {
    type: String,
    required: true,
    enum: ["casual", "formal", "sportswear", "all"],
  },
});
module.exports = mongoose.model("Clothes", clothesSchema);
