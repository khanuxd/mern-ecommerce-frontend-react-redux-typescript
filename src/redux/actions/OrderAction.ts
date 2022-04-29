import axios from 'axios'
import { Dispatch } from 'redux'
import { Product } from '../../types'
import {
  GET_ORDERS,
  GET_ORDER_BY_ID,
  OrderActions,
  CREATE_ORDER,
} from '../../types/OrderTypes'

export function getOrders(orders: []): OrderActions {
  return {
    type: GET_ORDERS,
    payload: orders,
  }
}

export function getOrderById(orders: []): OrderActions {
  return {
    type: GET_ORDER_BY_ID,
    payload: orders,
  }
}

// export function approveAnOrder(products: Product[]): OrderActions {
//   return {
//     type: CREATE_ORDER,
//     payload: products,
//   }
// }

export function getAllOrders() {
  const user = JSON.parse(localStorage.getItem('shop-user') || '{}')
  const config = {
    headers: {
      'Content-type': 'application/json',
      token: `${user.accessToken}`,
    },
  }
  const baseApiUrl = process.env.REACT_APP_BASE_API_URL

  return async (dispatch: Dispatch) => {
    const orderApiResponse = await axios.get(`${baseApiUrl}/orders`, config)

    const orders = await orderApiResponse.data

    dispatch(getOrders(orders))
  }
}

export function createNewOrder(product: Product[]) {
  const user = JSON.parse(localStorage.getItem('shop-user') || '{}')
  const userId = user.id
  const amount = product
    .map((item: any) => item.price)
    .reduce((prev: any, cur: any) => prev + cur, 0)

  const orderObj = {
    userId: userId,
    products: product.map((item: any) => {
      return {
        productId: item._id,
      }
    }),
    amount: amount,
  }
  console.log(orderObj)

  const config = {
    headers: {
      'Content-type': 'application/json',
      token: `${user.accessToken}`,
    },
  }

  const baseApiUrl = process.env.REACT_APP_BASE_API_URL

  return async (dispatch: Dispatch) => {
    const orderApiResponse = await axios.post(
      `${baseApiUrl}/orders`,
      orderObj,
      config
    )

    dispatch(createOrder(orderApiResponse as any))
  }
}

export function createOrder(products: Product[]): OrderActions {
  return {
    type: CREATE_ORDER,
    payload: products,
  }
}
