import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import ProductDetails from '../components/ProductDetails'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, Product as SingleProduct } from '../types'
import { addProductCart, getAllProducts } from '../redux/actions'
import Button from '@mui/material/Button'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

export default function Product() {
  const [currentProduct, setCurrentProduct] = useState({} as SingleProduct)

  const { _id } = useParams() as any
  const dispatch = useDispatch()

  const allProducts = useSelector(
    (state: AppState) => state.productReducer.products
  )
  
  const cartItemsList = useSelector((state: AppState) => state.cartReducer.cart)

  const productDetails = allProducts.filter(
    (product: SingleProduct) => product._id === _id
  )[0]

  const navigate = useNavigate()

  const onProductsListHandler = () => {
    navigate('/products')
  }

  const addHandler = () => {
    console.log('add clicked')
  }
  const removeHandler = () => {
    console.log('removed clicked')
  }

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  useEffect(() => {
    setCurrentProduct(productDetails as any)
  }, [productDetails])

  const singlePro = currentProduct && (
    <ProductDetails
      title={currentProduct?.title}
      _id={currentProduct?._id}
      price={currentProduct?.price}
      details={currentProduct?.description}
      image={currentProduct?.image}
      onAddHandler={addHandler}
      onRemoveHandler={removeHandler}
      onAddToCartHandler={() => dispatch(addProductCart(currentProduct))}
      disabled={
        cartItemsList.includes(currentProduct) || currentProduct.quantity === 0
      }
    />
  )

  return (
    <div>
      <div>
        <Button
          style={{ maxHeight: '36px', padding: '48px 70px' }}
          startIcon={<ArrowBackIosIcon />}
          onClick={onProductsListHandler}
        >
          Back to Products
        </Button>
      </div>
      <Box>{singlePro}</Box>
    </div>
  )
}
