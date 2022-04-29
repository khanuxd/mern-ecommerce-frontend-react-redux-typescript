import axios from 'axios'
import { Dispatch } from 'redux'
import { BAN_USER, GET_USERS, User, UserActions } from '../../types'

export function getUsers(users: []): UserActions {
  return {
    type: GET_USERS,
    payload: users,
  }
}

export function banUser(user: User): UserActions {
  return {
    type: BAN_USER,
    payload: user,
  }
}

export function getAllUsers() {
  const user = JSON.parse(localStorage.getItem('shop-user') || '{}')
  const config = {
    headers: {
      'Content-type': 'application/json',
      token: `${user.accessToken}`,
    },
  }
  const baseApiUrl = process.env.REACT_APP_BASE_API_URL

  return async (dispatch: Dispatch) => {
    const userApiResponse = await axios.get(`${baseApiUrl}/users`, config)
    const users = await userApiResponse.data
    dispatch(getUsers(users))
  }
}

export function banAUser(_id: any) {
  const user = JSON.parse(localStorage.getItem('shop-user') || '{}')
  const config = {
    headers: {
      'Content-type': 'application/json',
      token: `${user.accessToken}`,
    },
  }
  const baseApiUrl = process.env.REACT_APP_BASE_API_URL
  return async (dispatch: Dispatch) => {
    const bannedUser = await axios.patch(
      `${baseApiUrl}/users/${_id}/ban`,
      { _id },
      config
    )
    dispatch(banUser(bannedUser as any))
  }
}
