import { Product } from './ProductTypes'

export const GET_ORDERS = 'GET_ORDERS'
export const CREATE_ORDER = 'CREATE_ORDER'
export const GET_ORDER_BY_ID = 'GET_ORDER_BY_ID'
export const PROCESS_ORDER = 'PROCESS_ORDER'
export const REJECT_ORDER = 'REJECT_ORDER'

export type OrderReducerState = {
  orders: Order[]
  loading: true | false
}

export type Order = {
  _id?: string
  status: string
  userId: string
  products: ProductOrder[]
  amount: Number
  createdAt?: Date
  updatedAt?: Date
}

export type ProductOrder = {
  quantity: Number
  _id: string
  productId: string
}

export type CreateOrderAction = {
  type: typeof CREATE_ORDER
  payload: Product[]
}

export type GetOrdersAction = {
  type: typeof GET_ORDERS
  payload: Order[]
}

export type GetOrderByIdAction = {
  type: typeof GET_ORDER_BY_ID
  payload: Order[]
}

export type ProcessOrderAction = {
  type: typeof PROCESS_ORDER
  payload: Order
}

export type OrderActions =
  | GetOrdersAction
  | GetOrderByIdAction
  | CreateOrderAction
  | ProcessOrderAction
