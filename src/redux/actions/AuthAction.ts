import axios from 'axios'

const baseApiUrl = process.env.REACT_APP_BASE_API_URL

export const userLogin = (reqObj: Object) => async (dispatch: any) => {
  dispatch({ type: 'LOADING', payload: true })
  try {
    const res = await axios.post(`${baseApiUrl}/auth/login`, reqObj)
    localStorage.setItem('shop-user', JSON.stringify(res.data))
    dispatch({ type: 'LOADING', payload: false })
  } catch (error) {
    console.log(error)
    dispatch({ type: 'LOADING', payload: false })
  }
}

export const userRegister = (reqObj: Object) => async (dispatch: any) => {
  dispatch({ type: 'LOADING', payload: true })
  try {
    await axios.post(`${baseApiUrl}/auth/register`, reqObj)
    dispatch({ type: 'LOADING', payload: false })
  } catch (error) {
    console.log(error)
    dispatch({ type: 'LOADING', payload: false })
  }
}
