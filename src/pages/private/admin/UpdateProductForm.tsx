import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

import { editProduct, getAllProducts } from '../../../redux/actions'
import { AppState } from '../../../types'

const UpdateProductForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentProduct, setCurrentProduct] = useState([])
  
  const { _id } = useParams()
  const dispatch = useDispatch()

  const allProduct = useSelector(
    (state: AppState) => state.productReducer.products
  )

  const currentProductData: any = allProduct.filter(
    (product) => product._id === _id
  )[0]

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch, allProduct])

  useEffect(() => {
    setCurrentProduct(currentProductData)
  }, [currentProductData])

  const [inputData, setInputData] = useState({
    title: currentProductData?.title,
    description: currentProductData?.description,
    category: currentProductData?.category,
    image: currentProductData?.image,
    quantity: currentProductData?.quantity,
    price: currentProductData?.price,
  })

  const { title, description, category, image, quantity, price } = inputData

  const navigate = useNavigate()

  const handleInput = (e: any) => {
    let { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await dispatch(editProduct(inputData, _id))
    await navigate('/allproducts')
  }

  const onProductsListHandler = () => {
    navigate('/allproducts')
  }

  return (
    <Box style={{ width: '80vw', margin: '0 auto', padding: '32px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '24px 0',
        }}
      >
        <Button
          variant="outlined"
          style={{ maxHeight: '36px' }}
          startIcon={<ArrowBackIosIcon />}
          onClick={onProductsListHandler}
        >
          Back to Products
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '24px 0',
        }}
      >
        <Typography variant="h2" component="div" gutterBottom>
          Update Product
        </Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <Box className="form-box">
          <TextField
            required
            label="title"
            fullWidth
            name="title"
            type="text"
            variant="standard"
            placeholder="Product Title"
            className="display-block input-width"
            margin="normal"
            value={title}
            onChange={handleInput}
          />
          <TextField
            required
            label="Price"
            fullWidth
            name="price"
            type="number"
            variant="standard"
            placeholder="email@email.com"
            className="display-block input-width"
            margin="normal"
            value={price}
            onChange={handleInput}
          />
          <TextField
            required
            label="Image Url"
            fullWidth
            name="image"
            type="text"
            variant="standard"
            placeholder="Product image"
            className="display-block input-width"
            margin="normal"
            value={image}
            onChange={handleInput}
          />
          <TextField
            required
            label="Category"
            fullWidth
            name="category"
            type="text"
            variant="standard"
            placeholder="Product image"
            className="display-block input-width"
            margin="normal"
            value={category}
            onChange={handleInput}
          />
          <TextField
            required
            label="Quantity"
            fullWidth
            name="quantity"
            type="number"
            variant="standard"
            placeholder="Product image"
            className="display-block input-width"
            margin="normal"
            value={quantity}
            onChange={handleInput}
          />
          <TextField
            required
            id="standard-textarea"
            label="Description"
            fullWidth
            name="description"
            placeholder="Product details here"
            multiline
            variant="standard"
            value={description}
            onChange={handleInput}
          />
        </Box>
        <Button variant="contained" className="submit-btn" type="submit">
          Update Product
        </Button>
      </form>
    </Box>
  )
}

export default UpdateProductForm
