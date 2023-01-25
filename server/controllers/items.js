const Item = require("../models/Item")
const Order = require("../models/Order")
const stripe = require(`stripe`)(
  "sk_test_51MU6wMEdZCpDX0G2J7MHNbn6JiAFYKDyeUvrOO1VWK5vKkSXcFwqripuQKBKZViGHwD3hgq1Z2FIlg5vbufaJd1Z003xHdGO6E"
)

const getAllItems = (req, res) => {
  Item.find({}, (err, docs) => {
    if (err) {
      return res.status(500).json({
        success: false,
        err: err.message,
      })
    } else if (docs.length === 0) {
      return res.status(404).json({
        success: false,
        err: "No items found...",
      })
    }
    return res.status(200).json({
      success: true,
      items: docs,
    })
  })
}

const getSingleItem = (req, res) => {
  Item.findById(req.params.id, (err, item) => {
    if (err) {
      return res.status(500).json({
        success: false,
        err: err.message,
      })
    } else if (!item) {
      return res.status(404).json({
        success: false,
        err: "No items found...",
      })
    }
    return res.status(200).json({
      success: true,
      item,
    })
  })
}

const createOrder = (req, res) => {
  const { products, userName, email } = req.body.data
  Item.find(
    { _id: { $in: products.map((product) => product._id) } },
    async (err, docs) => {
      if (err) {
        return res.status(500).json({
          success: false,
          err: err.message,
        })
      }
      if (docs.length === 0) {
        return res.status(404).json({
          success: false,
          err: `No products found, please retry...`,
        })
      }

      // format the products

      const newProducts = docs.map((doc) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: doc.name,
            },
            unit_amount: doc.price * 100,
          },
          quantity: products.find(
            (product) =>
              product._id === JSON.stringify(doc._id).match(/"(.*?)"/)[1]
          ).count,
        }
      })

      try {
        // create the strapi session

        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          customer_email: email,
          mode: "payment",
          success_url: "http://localhost:3000/checkout/success",
          cancel_url: "http://localhost:3000",
          line_items: newProducts,
        })

        await Order.create({
          products,
          username: userName,
          stripeSessionId: session.id,
        })

        // return the session id

        return res.status(201).json({
          session: session.id,
        })
      } catch (err) {
        return res.status(500).json({
          success: false,
          err: err.message,
        })
      }
    }
  )
}

module.exports = { getAllItems, getSingleItem, createOrder }
