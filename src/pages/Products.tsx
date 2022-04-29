import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from '@mui/material'
import { getAllProducts } from '../redux/actions'

import ProductsList from '../components/ProductsList'

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <ProductsList />
      </div>
    </Container>
  )
}

export default Products
