import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import SliderImg from '../assets/images/banner.jpg'

const Slider = () => {
  return (
    <Box>
      <div
        style={{
          backgroundColor: '#f0f0f0',
          height: '500px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div>
          <Typography variant="h2" component="div" gutterBottom>
            Amazing shopping website
          </Typography>
          <Link
            to="/products"
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            <Button variant="contained">Shop Now</Button>
          </Link>
        </div>
        <div>
          <img
            style={{ height: '300px', width: '300px', borderRadius: '50%' }}
            src={SliderImg}
            alt="Hero Banner"
          />
        </div>
      </div>
    </Box>
  )
}

export default Slider
