import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <Card style={{ width: '350px', margin: '50px auto', padding: '50px' }}>
      <Typography
        variant="h4"
        className="heading-text"
        gutterBottom
        component="div"
      >
        Account Login
      </Typography>
      <LoginForm />
      <Box
        className="form-footer"
        style={{ display: 'flex', padding: '10px 0' }}
      >
        <Typography
          className="form-footer--text"
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Need a new account?
        </Typography>
        <Link
          to="/register"
          className="form-footer--link"
          style={{ paddingLeft: '5px' }}
        >
          <Typography variant="subtitle1" gutterBottom component="div">
            Register
          </Typography>
        </Link>
      </Box>
    </Card>
  )
}

export default Login
