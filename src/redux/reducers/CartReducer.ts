import {
  ADD_PRODUCTS_CART,
  CartActions,
  CartReducerState,
  REMOVE_PRODUCTS_CART,
} from '../../types'

const localStorageCart = localStorage.getItem('cart')
let initialCart: [] = []
if (localStorageCart) {
  initialCart = JSON.parse(localStorageCart)
}
const initState: CartReducerState = {
  cart: initialCart,
  loading: true,
}

export default function cartReducer(
  state: CartReducerState = initState,
  action: CartActions
): CartReducerState {
  switch (action.type) {
  case ADD_PRODUCTS_CART: {
    const product = action.payload
    // saving cart products to local storage
    const cartProduct = [...state.cart, product]
    localStorage.setItem('cart', JSON.stringify(cartProduct))
    return {
      ...state,
      cart: [...state.cart, product],
      loading: false,
    }
  }

  case REMOVE_PRODUCTS_CART: {
    const productToRemove = action.payload
    const filterredProduct = state.cart.filter(
      (product) => product !== productToRemove
    )
    // removing cart products from local storage
    const cartProduct = [...filterredProduct]
    localStorage.setItem('cart', JSON.stringify(cartProduct))
    return {
      ...state,
      cart: [...filterredProduct],
      loading: false,
    }
  }

  default:
    return state
  }
}
