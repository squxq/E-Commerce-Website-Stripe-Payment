const Item = require("../models/Item")

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

module.exports = { getAllItems, getSingleItem }
