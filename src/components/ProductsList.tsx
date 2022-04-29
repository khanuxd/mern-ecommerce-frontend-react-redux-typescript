import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addProductCart, getAllProducts } from '../redux/actions'
import { AppState, Product } from '../types'
import ProductCard from './ProductCard'
import Search from './Search'

const ProductsList = () => {
  const [keyword, setKeyword] = useState<string>('')
  
  const dispatch = useDispatch()

  const productsList = useSelector(
    (state: AppState) => state.productReducer.products
  )

  const cartItemsList = useSelector((state: AppState) => state.cartReducer.cart)

  const handleChange = (e: React.BaseSyntheticEvent) => {
    let keyword = e.target.value
    setKeyword(keyword)
  }

  const filteredProducts = productsList.filter((product: Product) =>
    product.title.toLowerCase().includes(keyword.toLowerCase())
  )

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  return (
    <Box>
      <div style={{ width: '100%' }}>
        <Search keyword={keyword} onChange={handleChange} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts &&
          filteredProducts.map((product: Product) => (
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
          ))}
      </div>
    </Box>
  )
}

export default ProductsList
