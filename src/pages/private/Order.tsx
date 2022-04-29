import React from 'react'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import CheckoutItem from '../../components/CheckoutItem'
import { AppState } from '../../types'
import { createNewOrder } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartItems: any = useSelector(
    (state: AppState) => state.cartReducer.cart
  )

  const totalCartAmount = cartItems
    .map((item: any) => item.price)
    .reduce((prev: any, cur: any) => prev + cur, 0)

  const onDeleteItem = () => {
    console.log('delete icon clicked')
  }

  const onOrderConfirm = (e: any) => {
    if (cartItems.length > 0) {
      dispatch(createNewOrder(cartItems))
      window.location.reload()
      localStorage.removeItem('cart')
      navigate('/dashboard')
    }
  }

  const checkoutProudct =
    cartItems.length > 0 &&
    cartItems.map((product: any) => (
      <CheckoutItem
        key={product._id}
        image={product.image}
        title={product.title}
        price={product.price}
        onDeleteHandler={onDeleteItem}
      />
    ))

  return (
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ margin: '16px 0' }}>{checkoutProudct}</div>
      <div>{`Total: $${totalCartAmount}`}</div>
      <div>
        <Button
          variant="contained"
          onClick={onOrderConfirm}
          style={{ maxHeight: '36px' }}
        >
          Confirm Order
        </Button>
      </div>
    </div>
  )
}

export default Checkout
