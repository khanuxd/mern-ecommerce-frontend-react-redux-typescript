import { AUTH } from '../../types'

const authReducer = (state = { authData: null }, action: any) => {
  switch (action.type) {
  case AUTH:
    localStorage.setItem(
      'shop-user-google',
      JSON.stringify({ ...action?.data })
    )
    return { ...state, authData: action?.data }
  default:
    return state
  }
}
export default authReducer