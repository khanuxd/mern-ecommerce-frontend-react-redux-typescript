import axios from 'axios'
import { Dispatch } from 'redux'
import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  Product,
  ProductActions,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from '../../types'

export function getProducts(products: []): ProductActions {
  return {
    type: GET_PRODUCTS,
    payload: products,
  }
}

export function addProduct(product: Product): ProductActions {
  return {
    type: ADD_PRODUCT,
    payload: product,
  }
}

export function updateProduct(product: Product): ProductActions {
  return {
    type: UPDATE_PRODUCT,
    payload: product,
  }
}

export function removeProduct(): ProductActions {
  return {
    type: REMOVE_PRODUCT,
  }
}

// Async action processed by redux-thunk middleware
export function getAllProducts() {
  const baseApiUrl = process.env.REACT_APP_BASE_API_URL

  return async (dispatch: Dispatch) => {
    const productApiResponse = await axios.get(`${baseApiUrl}/products`)
    const products = await productApiResponse.data
    dispatch(getProducts(products))
  }
}

export function addNewProduct(reqObj: Object) {
  const user = JSON.parse(localStorage.getItem('shop-user') || '{}')
  const config = {
    headers: {
      'Content-type': 'application/json',
      token: `${user.accessToken}`,
    },
  }
  const baseApiUrl = process.env.REACT_APP_BASE_API_URL
  return async (dispatch: Dispatch) => {
    const productObj = await axios.post(
      `${baseApiUrl}/products`,
      reqObj,
      config
    )
    dispatch(addProduct(productObj as any))
  }
}

export function editProduct(reqObj: Object, _id: any) {
  const user = JSON.parse(localStorage.getItem('shop-user') || '{}')
  const config = {
    headers: {
      'Content-type': 'application/json',
      token: `${user.accessToken}`,
    },
  }
  const baseApiUrl = process.env.REACT_APP_BASE_API_URL
  return async (dispatch: Dispatch) => {
    const product = await axios.put(
      `${baseApiUrl}/products/${_id}`,
      reqObj,
      config
    )
    dispatch(updateProduct(product as any))
  }
}

export function deleteProduct(id: string) {
  const user = JSON.parse(localStorage.getItem('shop-user') || '{}')
  const config = {
    headers: {
      'Content-type': 'application/json',
      token: `${user.accessToken}`,
    },
  }

  const baseApiUrl = process.env.REACT_APP_BASE_API_URL
  return async (dispatch: Dispatch) => {
    await axios.delete(`${baseApiUrl}/products/${id}`, config)
    dispatch(removeProduct())
  }
}
