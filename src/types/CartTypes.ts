export const ADD_PRODUCTS_CART = 'ADD_PRODUCTS_CART'
export const REMOVE_PRODUCTS_CART = 'REMOVE_PRODUCTS_CART'

// types
export type CartReducerState = {
  cart: CartProduct[]
  loading: true | false
}

export type CartProduct = {}

export type AddProductsCartAction = {
  type: typeof ADD_PRODUCTS_CART
  payload: CartProduct
}

export type RemoveProductsCartAction = {
  type: typeof REMOVE_PRODUCTS_CART
  payload: CartProduct
}

export type CartActions = AddProductsCartAction | RemoveProductsCartAction
