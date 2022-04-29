import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SellIcon from '@mui/icons-material/Sell'
import ListItemIcon from '@mui/material/ListItemIcon'
import Logout from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'

const UserMenuControl = () => {
  // eslint-disable-next-line no-unused-vars
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const navigate = useNavigate()

  const ownUser = localStorage.getItem('shop-user') || '{}'
  const googleUser = localStorage.getItem('shop-user-google') || '{}'

  const userLoggedin = ownUser || googleUser

  const isUserAdmin: Boolean =
    userLoggedin && ownUser ? JSON.parse(ownUser)?.isAdmin : ''

  const handleLogout = (): void => {
    if (localStorage.getItem('shop-user')) {
      localStorage.removeItem('shop-user')
      navigate('/login')
      setAnchorElUser(null)
    } else {
      localStorage.removeItem('shop-user-google')
      navigate('/login')
      setAnchorElUser(null)
    }
  }

  const handleAdminDashboardRoute = (): void => {
    setAnchorElUser(null)
    if (userLoggedin) {
      navigate('/admindashboard')
    }
  }

  const handleDashboardRoute = (): void => {
    setAnchorElUser(null)
    if (userLoggedin) {
      navigate('/dashboard')
    }
  }

  const handleOrdersRoute = (): void => {
    setAnchorElUser(null)
    if (userLoggedin) {
      navigate('/orders')
    }
  }

  const adminMenuControl = userLoggedin && isUserAdmin && (
    <Box>
      <MenuItem onClick={handleAdminDashboardRoute}>
        <ListItemIcon>
          <ManageAccountsIcon fontSize="small" />
        </ListItemIcon>
        Admin Dashboard
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleDashboardRoute}>
        <ListItemIcon>
          <DashboardIcon fontSize="small" />
        </ListItemIcon>
        Dashboard
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleOrdersRoute}>
        <ListItemIcon>
          <SellIcon fontSize="small" />
        </ListItemIcon>
        Orders
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Box>
  )

  const userMenuControl = userLoggedin && !isUserAdmin && (
    <Box>
      <MenuItem onClick={handleDashboardRoute}>
        <ListItemIcon>
          <DashboardIcon fontSize="small" />
        </ListItemIcon>
        Dashboard
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleOrdersRoute}>
        <ListItemIcon>
          <SellIcon fontSize="small" />
        </ListItemIcon>
        Orders
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Box>
  )

  return (
    <Box className="user-control">
      {adminMenuControl}
      {userMenuControl}
    </Box>
  )
}

export default UserMenuControl
