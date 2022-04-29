import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const JoinCTA = () => {
  return (
    <div
      style={{
        backgroundColor: '#d7e1ff',
        width: '100%',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 100px',
      }}
    >
      <div>
        <h1>Join as a proud Member</h1>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <Button variant="contained">Register Now</Button>
        </Link>
      </div>
    </div>
  )
}

export default JoinCTA
