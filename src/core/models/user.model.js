const mongoose = require("mongoose");
const nameSchema = new mongoose.Schema(
  {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);
const addressSchema = new mongoose.Schema(
  {
    governorate: {
      type: String,
      required: true,
    },
    city: { type: String, required: true },
    street: {
      type: String,
      required: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);
const userSchema = new mongoose.Schema(
  {
    name: nameSchema,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: Number,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default: "https://examples.com/images/mahmoud.jpg",
    },
    address: addressSchema,
  },
  { timestamps: true }
  // mongoose model option which create tow property in the document
  //createdAt , updatedAt
);
module.exports = mongoose.model("User", userSchema);
