const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const electronicSchema = new Schema({
  screen: { size: String, depth: String },
  processor: { name: String, brand: String, speed: String, generation: String },
  storage: { ram: String, rom: String },
  graphicsCard: { type: String },
  operatingSystem: { type: String, required: true },
});
module.exports = mongoose.model("Electronic", electronicSchema);
