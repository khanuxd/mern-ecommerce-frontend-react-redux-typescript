export const GET_USERS = 'GET_USERS'
export const BAN_USER = 'BAN_USER'

export type UserReducerState = {
  users: User[]
  loading: true | false
}

export type User = {
  _id?: string
  name: string
  email: string
  isBanned?: Boolean
  address?: string
  isAdmin?: Boolean
}

export type GetUsersAction = {
  type: typeof GET_USERS
  payload: User[]
}

export type BanUserAction = {
  type: typeof BAN_USER
  payload: User
}

export type UserActions = GetUsersAction | BanUserAction
