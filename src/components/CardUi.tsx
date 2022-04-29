import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

type CardUi = {
  title: string
  subtitle: string
  text: string
}

const CardUI = ({ title, subtitle, text }: CardUi) => {
  return (
    <Box>
      <Paper style={{ padding: '8px 16px' }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {subtitle}
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          {title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {text}
        </Typography>
      </Paper>
    </Box>
  )
}

export default CardUI
