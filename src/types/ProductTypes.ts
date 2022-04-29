export const GET_PRODUCTS = 'GET_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'

// types
export type ProductReducerState = {
  products: Product[]
  loading: true | false
}

// A Product
export type Product = {
  _id?: any
  title: string
  price: number
  description: string
  category: string
  variants?: string[]
  sizes?: string[]
  image: string
  quantity: number
}

export type Keyword = string

export type GetProductsAction = {
  type: typeof GET_PRODUCTS
  payload: Product[]
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: Product
}

export type UpdateProductAction = {
  type: typeof UPDATE_PRODUCT
  payload: Product
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
}

export type ProductActions =
  | GetProductsAction
  | AddProductAction
  | UpdateProductAction
  | RemoveProductAction
