const router = require(`express`).Router()

const { getAllItems } = require("../controllers/items")

router.get("/items", getAllItems)

module.exports = router
