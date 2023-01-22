const router = require(`express`).Router()

const { getAllItems, getSingleItem } = require("../controllers/items")

router.get("/items", getAllItems)
router.get("/items/:id", getSingleItem)

module.exports = router
