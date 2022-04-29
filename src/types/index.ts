import { ProductReducerState } from './ProductTypes'
import { UserReducerState } from './UserTypes'
import { OrderReducerState } from './OrderTypes'
import { CartReducerState } from './CartTypes'

export * from './ProductTypes'
export * from './UserTypes'
export * from './AuthTypes'
export * from './OrderTypes'
export * from './CartTypes'

export type AppState = {
  productReducer: ProductReducerState
  userReducer: UserReducerState
  orderReducer: OrderReducerState
  cartReducer: CartReducerState
}
