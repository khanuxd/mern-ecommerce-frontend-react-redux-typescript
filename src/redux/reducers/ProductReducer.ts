import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  ProductActions,
  ProductReducerState,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from '../../types'

const initState: ProductReducerState = {
  products: [],
  loading: true
}

export default function productReducer(
  state: ProductReducerState = initState,
  action: ProductActions
) {
  switch (action.type) {
  case GET_PRODUCTS:
    return {
      ...state,
      products: action.payload,
      loading: false,
    }

  case UPDATE_PRODUCT: {
    const product = action.payload

    return {
      ...state,
      products: [...state.products, product],
    }
  }

  case ADD_PRODUCT: {
    const product = action.payload
    return {
      ...state,
      products: [...state.products, product],
    }
  }

  case REMOVE_PRODUCT: {
    return {
      ...state,
      loading: false,
    }
  }

  default:
    return state
  }
}