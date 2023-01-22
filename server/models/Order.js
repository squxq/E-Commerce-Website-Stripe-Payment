const mongoose = require(`mongoose`)

const OrderSchema = new mongoose.Schema(
  {
    products: {
      type: Object,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    stripeSessionId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("orders", OrderSchema)
