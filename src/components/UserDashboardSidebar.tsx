import * as React from 'react'
import Box from '@mui/material/Box'
import { styled, ThemeProvider, createTheme } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import { Link } from 'react-router-dom'
import DevicesIcon from '@mui/icons-material/Devices'

const data = [
  { icon: <LocalOfferIcon />, label: 'Orders', link: '/orders' },
  { icon: <DevicesIcon />, label: 'Products', link: '/products' },
]

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
})

export default function UserDashboardSidebar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: 'rgb(5, 30, 52)' },
          },
        })}
      >
        <Paper
          elevation={0}
          sx={{ maxWidth: 256 }}
          style={{ minHeight: '80vh', minWidth: '300px' }}
        >
          <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemText
                sx={{ my: 0 }}
                primary="Admin Dashboard"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
            <Box>
              {data.map((item) => (
                <Link
                  to={item.link}
                  key={item.label}
                  style={{
                    textDecoration: 'none',
                    color: '#fff',
                    display: 'flex',
                    padding: '8px 0',
                  }}
                >
                  <ListItemButton key={item.label}>
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: 'medium',
                      }}
                    />
                  </ListItemButton>
                </Link>
              ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  )
}
