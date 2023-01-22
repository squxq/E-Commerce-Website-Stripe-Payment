import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { IconButton, Box, Typography, Button, Tabs, Tab } from "@mui/material"
import { Add, Remove, FavoriteBorderOutlined } from "@mui/icons-material"
import { shades } from "../../theme"
import { addToCart } from "../../state"
import { useParams } from "react-router-dom"
import Item from "../../components/Item"
import axios from "axios"

const ItemDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [value, setValue] = useState("description")
  const [count, setCount] = useState(1)
  const [item, setItem] = useState({})
  const [items, setItems] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  async function getItem() {
    await axios({
      method: "get",
      url: `http://localhost:8000/api/v1/items/${id}`,
    })
      .then((res) => setItem(res.data.item))
      .catch((err) => console.log(err))
    console.log(item)
  }

  async function getItems() {
    await axios({
      method: "get",
      url: `http://localhost:8000/api/v1/items/`,
    })
      .then((res) => setItems(res.data.items))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getItem()
    getItems()
  }, [id]) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={item?.image}
            style={{ objectFit: "contain" }}
          />
        </Box>
        {/* Actions */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box>Home/Item</Box>
            <Box>Prev/Next</Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item.name}</Typography>
            <Typography>${item.price}</Typography>
            <Typography sx={{ mt: "20px" }}>{item.longDescription}</Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <Remove />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <Add />
              </IconButton>
            </Box>

            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              ADD TO CART
            </Button>
          </Box>

          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlined />
              <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES: {item?.category}</Typography>
          </Box>
        </Box>
      </Box>

      {/* information */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && <div>{item?.longDescription}</div>}
        {value === "reviews" && <div>reviews</div>}
      </Box>

      {/* related items */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {items.slice(0, 4).map((item, index) => (
            <Item key={`${item.name}-${item._id}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default ItemDetails
