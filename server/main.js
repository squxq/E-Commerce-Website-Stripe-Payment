const express = require("express")
const app = express()
const bodyParser = require("body-parser")
require("dotenv").config()
const multer = require("multer")
const data = require("./data")
const Item = require("./models/Item")

const fs = require("fs")
const path = require("path")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 5000
const connectDB = require("./db/connect")

// upload pictures to db

// multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cd(null, "uploads")
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
    name: data[11].name,
    shortDescription: data[11].shortDescription,
    longDescription: data[11].longDescription,
    price: data[11].price,
    category: data[11].category,
    createdAt: data[11].createdAt,
    updatedAt: data[11].updatedAt,
    publishedAt: data[11].publishedAt,
    image: {
      data: fs.readFileSync(path.join(__dirname + "/uploads/" + req.body.file)),
      contentType: "image/jpeg",
    },
  }
  Item.create(obj, (err, item) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect("/")
    }
  })
})

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
