import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

import RegisterForm from '../components/RegisterForm'

const Register = () => {
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
      <RegisterForm />
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
          Already have an account?
        </Typography>
        <Link
          to="/login"
          className="form-footer--link"
          style={{ paddingLeft: '5px' }}
        >
          <Typography variant="subtitle1" gutterBottom component="div">
            Login
          </Typography>
        </Link>
      </Box>
    </Card>
  )
}

export default Register
