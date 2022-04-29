import React, { useReducer } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'

import { userRegister as userRegisterAction } from '../redux/actions'

const RegisterForm = () => {
  const [formInput, setFormInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      name: '',
      email: '',
      password: '',
      address: '',
    }
  )

  const dispatch = useDispatch()

  const handleInput = (e: any) => {
    const name = e.target.name
    const newValue = e.target.value
    setFormInput({ [name]: newValue })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await dispatch(userRegisterAction(formInput))
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box className="form-box">
          <TextField
            required
            label="Name"
            name="name"
            type="text"
            variant="standard"
            placeholder="Your name"
            className="display-block input-width"
            margin="normal"
            onChange={handleInput}
          />
          <TextField
            required
            label="Email"
            name="email"
            type="email"
            variant="standard"
            placeholder="email@email.com"
            className="display-block input-width"
            margin="normal"
            onChange={handleInput}
          />
          <TextField
            required
            name="password"
            label="Password"
            type="password"
            variant="standard"
            inputProps={{ minLength: 6 }}
            placeholder="Must be minimum 6 character"
            className="display-block input-width"
            margin="normal"
            onChange={handleInput}
          />
          <TextField
            required
            id="standard-textarea"
            label="Address"
            name="address"
            placeholder="Your address"
            multiline
            variant="standard"
            onChange={handleInput}
          />
        </Box>
        <Button variant="contained" className="submit-btn" type="submit">
          Register
        </Button>
      </form>
    </Box>
  )
}

export default RegisterForm
