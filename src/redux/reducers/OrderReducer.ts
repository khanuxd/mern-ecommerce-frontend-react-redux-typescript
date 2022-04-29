import {
  CREATE_ORDER,
  GET_ORDERS,
  GET_ORDER_BY_ID,
  OrderActions,
  OrderReducerState,
} from '../../types'

const initState: OrderReducerState = {
  orders: [],
  loading: true,
}

export default function orderReducer(
  state: OrderReducerState = initState,
  action: OrderActions
) {
  switch (action.type) {
  case GET_ORDERS:
    return {
      ...state,
      orders: action.payload,
      loading: false,
    }
  case GET_ORDER_BY_ID:
    return {
      ...state,
      orders: action.payload,
      loading: false,
    }

  case CREATE_ORDER:
    return {
      ...state,
      orders: action.payload,
      loading: false,
    }

  default:
    return state
  }
}
