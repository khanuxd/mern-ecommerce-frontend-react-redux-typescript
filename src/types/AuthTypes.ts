export const AUTH = 'AUTH'
export const USER_LOGOUT = 'USER_LOGOUT'

export type LoginReqObject = {
  email: string
  password: string
}

export type RegisterReqObject = {
  name: string
  email: string
  password: string
  address: string
}
