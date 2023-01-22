import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material"
import { Add, Remove } from "@mui/icons-material"
import { shades } from "../theme"
import { addToCart } from "../state"
import { useNavigate } from "react-router-dom"

const Item = ({ item, width }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [count, setCount] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const {
    palette: { neutral },
  } = useTheme()

  const { category, price, name, image } = item
  console.log(image)

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={name}
          width="300px"
          height="400px"
          src={image}
          onClick={() => navigate(`/item/${item._id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <Remove />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <Add />
              </IconButton>
            </Box>
            <Button
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mr="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
          {category
            .replace(/(A-Z)/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">{price}</Typography>
      </Box>
    </Box>
  )
}

export default Item
