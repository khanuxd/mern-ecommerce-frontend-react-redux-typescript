import {
  ADD_PRODUCTS_CART,
  CartActions,
  CartProduct,
  REMOVE_PRODUCTS_CART,
} from '../../types'

export function addProductCart(product: CartProduct): CartActions {
  return {
    type: ADD_PRODUCTS_CART,
    payload: product,
  }
}

export function removeProductCart(product: CartProduct): CartActions {
  return {
    type: REMOVE_PRODUCTS_CART,
    payload: product,
  }
}
