import { combineReducers } from 'redux'

import productReducer from './ProductReducer'
import userReducer from './UserReducer'
import authReducer from './AuthReducer'
import orderReducer from './OrderReducer'
import cartReducer from './CartReducer'

const createRootReducer = () =>
  combineReducers({
    productReducer,
    userReducer,
    orderReducer,
    authReducer,
    cartReducer
  })

export default createRootReducer
