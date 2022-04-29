import { BAN_USER, GET_USERS, UserActions, UserReducerState } from '../../types'

const initState: UserReducerState = {
  users: [],
  loading: true,
}

export default function userReducer(
  state: UserReducerState = initState,
  action: UserActions
) {
  switch (action.type) {
  case GET_USERS:
    return {
      ...state,
      users: action.payload,
      loading: false,
    }

  case BAN_USER:
    const user = action.payload
    return {
      ...state,
      users: [...state.users, user],
      loading: false,
    }

  default:
    return state
  }
}
