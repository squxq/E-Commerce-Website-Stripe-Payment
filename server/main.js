const express = require("express")
const app = express()
const bodyParser = require("body-parser")
require("dotenv").config()
const multer = require("multer")
const data = require("./data")
const Item = require("./models/Item")
const cors = require("cors")

const fs = require("fs")
const path = require("path")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use("/public/uploads", express.static(__dirname + "/public/uploads"))

const port = process.env.PORT || 5000
const connectDB = require("./db/connect")

// upload pictures to db

// multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cd(null, "public/uploads")
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname, +"-" + Date.now())
  },
})

const upload = multer({ storage })

app.get("/api/v1/pictures", (req, res) => {
  Item.find({}, (err, docs) => {
    if (err) {
      console.log(err)
    } else {
      console.log(docs)
      res.status(200).send(docs)
    }
  })
})

app.post(`/api/v1/pictures`, upload.single("image"), (req, res) => {
  const obj = {
    name: data[0].name,
    shortDescription: data[0].shortDescription,
    longDescription: data[0].longDescription,
    price: data[0].price,
    category: data[0].category,
    createdAt: data[0].createdAt,
    updatedAt: data[0].updatedAt,
    publishedAt: data[0].publishedAt,
    image: `${req.protocol}://${req.header(
      "host"
    )}/public/uploads/${req.body.file.replace(/\s/g, "")}`,
  }
  Item.create(obj, (err, item) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect("/")
    }
  })
})

// get all items
const itemsRouter = require("./routes/items")
app.use("/api/v1", itemsRouter)

// end of upload pictures to db

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(
        `Server is connected to database and listening on port: ${port}...`
      )
    })
  } catch (err) {
    console.log(`Something went wrong.`, err)
  }
}

start()
