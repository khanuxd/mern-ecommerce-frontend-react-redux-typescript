import React, { useReducer } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'

import { userLogin as userLoginAction } from '../redux/actions'

const LoginForm = () => {
  const [formInput, setFormInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      email: '',
      password: '',
    }
  )

  const dispatch = useDispatch()
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || ''

  const loginGoogleSuccess = (response: any) => {
    const result = response?.profileObj
    const tokenId = response?.tokenId
    try {
      dispatch({ type: 'AUTH', data: { result, tokenId } })
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  const loginGoogleFailure = (error: any) => {
    console.log(error)
    console.error('google authentication failed')
  }

  const handleInput = (e: any) => {
    const name = e.target.name
    const newValue = e.target.value
    setFormInput({ [name]: newValue })
  }

  let loggedinUser
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await dispatch(userLoginAction(formInput))
    loggedinUser = localStorage.getItem('shop-user')

    if (loggedinUser) {
      window.location.reload()
    } else {
      console.log('wrong id')
    }
  }

  return (
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      <form onSubmit={handleSubmit}>
        <Box className="form-box">
          <TextField
            required
            label="Email"
            name="email"
            type="email"
            variant="standard"
            className="display-block input-width"
            margin="normal"
            onChange={handleInput}
          />
          <TextField
            required
            id="standard-password-input"
            name="password"
            label="Password"
            type="password"
            variant="standard"
            className="display-block input-width"
            margin="normal"
            onChange={handleInput}
          />
        </Box>
        <Button variant="contained" className="submit-btn" type="submit">
          Login
        </Button>
      </form>
      <br />
      <GoogleLogin
        clientId={googleClientId}
        className="google-btn"
        buttonText="Login with Google"
        onSuccess={loginGoogleSuccess}
        onFailure={loginGoogleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </Box>
  )
}

export default LoginForm
