const router = require(`express`).Router()

const {
  getAllItems,
  getSingleItem,
  createOrder,
} = require("../controllers/items")

router.get("/items", getAllItems)
router.get("/items/:id", getSingleItem)
router.post("/order", createOrder)

module.exports = router
