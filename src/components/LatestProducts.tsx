import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Typography } from '@mui/material'

import { addProductCart, getAllProducts } from '../redux/actions'
import { AppState, Product } from '../types'
import ProductCard from './ProductCard'

const LatestProducts = () => {
  const cartItemsList = useSelector((state: AppState) => state.cartReducer.cart)
  const dispatch = useDispatch()
  const productsList = useSelector(
    (state: AppState) => state.productReducer.products
  )

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  
  return (
    <Box style={{ padding: '50px 100px' }}>
      <Typography
        gutterBottom
        style={{ padding: '24px 50px' }}
        variant="h3"
        component="div"
      >
        Latest Products
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {productsList &&
          productsList
            .map((product: Product) => (
              <ProductCard
                key={product._id}
                _id={product._id}
                title={product.title}
                category={product.category}
                price={product.price}
                image={product.image}
                onClick={() => dispatch(addProductCart(product))}
                disabled={
                  cartItemsList.includes(product) || product.quantity === 0
                }
              />
            ))
            .slice(-3)}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 0',
        }}
      >
        <Link to="/products" style={{ textDecoration: 'none', color: '#fff' }}>
          <Button variant="outlined">Browse All Products</Button>
        </Link>
      </div>
    </Box>
  )
}

export default LatestProducts
