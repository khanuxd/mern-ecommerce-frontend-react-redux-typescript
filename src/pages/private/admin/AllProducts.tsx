import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductTable from '../../../components/ProductTable'
import { getAllProducts } from '../../../redux/actions'
import { AppState, Product } from '../../../types'

const Checkout = () => {
  const dispatch = useDispatch()
  const productsList = useSelector(
    (state: AppState) => state.productReducer.products
  )

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  
  const onDeleteHandler = () => {
    alert('delete button clicked')
  }
  const onEditHandler = () => {
    alert('edit button clicked')
  }
  return (
    <div>
      {productsList &&
        productsList.map((product: Product) => (
          <ProductTable
            title={product.title}
            src={product.image}
            onDeleteHandler={onDeleteHandler}
            onEditHandler={onEditHandler}
          />
        ))}
    </div>
  )
}

export default Checkout
