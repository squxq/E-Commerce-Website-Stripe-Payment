const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 100,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    longDescription: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    category: {
      type: String,
      required: true,
      enum: {
        values: ["newArrivals", "bestSellers", "topRated"],
        message: ["{VALUE} is not a valid category"],
      },
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("items", ItemSchema)
