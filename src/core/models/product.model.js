const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const discountSchema = new Schema(
  {
    percentage: { type: Number, default: 0, min: 0, max: 100 },
    expireDate: Date,
  },
  { _id: false }
);
const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // colors: {
    //   type: [String],
    //   required: true,
    // }, //ToDo adding color needs stockCount for every color || different product for every color.
    // material: { type: String, required: true }, // In details I think (What about food or Elc ...etc)
    price: {
      type: Number,
      required: true,
    },
    stockCount: { type: Number, required: true, min: 0 },
    discount: discountSchema,
    thumbnail: String,
    image: String,
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    subCategory: { type: Schema.Types.ObjectId, ref: "SubCategory" },
    details: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "onModel",
      default: null,
    },
    onModel: {
      type: String,
      required: true,
      enum: ["Furniture", "Electronic", "Clothes"],
    },
  },
  { timeseries: true /*, toJSON: { vir }*/ } // error
);
productSchema.virtual("priceAfterDiscount").get(function () {
  let { price, discount } = this;
  price = price - price * (discount.percentage / 100);
  return price.toFixed(2);
});
discountSchema.virtual("isValid").get(function () {
  const { percentage, expireDate } = this;
  const isValid = percentage > 0 && expireDate > new Date();
  return isValid;
});
productSchema.virtual("avgRating").get(function () {
  const reviews = this.reviews;
  if (reviews.length === 0) {
    return 0;
  }
  const avgRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  return avgRating.toFixed(2);
});
module.exports = mongoose.model("Product", productSchema);
