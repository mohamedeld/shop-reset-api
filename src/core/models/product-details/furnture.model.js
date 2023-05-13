const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const furnitureSchema = new Schema({
  dimensions: {
    type: {
      width: { type: String, required: true },
      height: { type: String, required: true },
      depth: { type: String, required: true },
    },
    required: true,
  },
});
module.exports = mongoose.model("Furniture", furnitureSchema);
