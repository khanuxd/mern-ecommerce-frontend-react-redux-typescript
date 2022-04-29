import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addNewProduct } from '../../../redux/actions'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useNavigate } from 'react-router-dom'

const AddProductForm = () => {
  const [inputData, setInputData] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
    quantity: 0,
    price: 0,
  })

  const { title, description, category, image, quantity, price } = inputData
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleInput = (e: any) => {
    let { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }

  const onProductsListHandler = () => {
    navigate('/allproducts')
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const data = await dispatch(addNewProduct(inputData))
    if (data !== null) {
      navigate('/allproducts')
    }
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
          Add Product
        </Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <Box className="form-box">
          <TextField
            required
            fullWidth
            label="title"
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
            fullWidth
            label="Price"
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
            fullWidth
            label="Image Url"
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
            fullWidth
            label="Category"
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
            fullWidth
            label="Quantity"
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
            fullWidth
            id="standard-textarea"
            label="Description"
            name="description"
            placeholder="Product details here"
            multiline
            variant="standard"
            value={description}
            onChange={handleInput}
          />
        </Box>
        <Button variant="contained" className="submit-btn" type="submit">
          Add Product
        </Button>
      </form>
    </Box>
  )
}

export default AddProductForm
