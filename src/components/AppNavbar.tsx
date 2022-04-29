import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import { Link, useNavigate } from 'react-router-dom'
import { Badge, Divider, ListItemIcon, MenuItem } from '@mui/material'
import { Logout } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import UserMenuControl from './UserMenuControl'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../types'
import CartItem from './CartItem'
import { removeProductCart } from '../redux/actions'

const AppNavbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  // eslint-disable-next-line no-unused-vars
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )
  
  const dispatch = useDispatch()

  // User data from local storage
  
  const ownUser = localStorage.getItem('shop-user') || '{}'
  const googleUser = localStorage.getItem('shop-user-google') || '{}'
  const userLoggedin = ownUser || googleUser

  const userName = userLoggedin
    ? JSON.parse(ownUser)?.name || JSON.parse(googleUser).result?.givenName
    : ''

  const currentUserLoggedIn = userName !== undefined ? true : false

  const loggedinUserAvater =
    userName !== undefined ? userName.split(' ')[0].charAt(0).toUpperCase() : ''

  const loggedinUserNameAndRole =
    userName !== undefined ? userName.split(' ')[0].toUpperCase() : ''

  useEffect(() => {
    if (userLoggedin) {
      setLoggedIn(true)
    }
  }, [userLoggedin])

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const cartItem: any = useSelector((state: AppState) => state.cartReducer.cart)

  const totalCartAmount = cartItem
    .map((item: any) => item.price)
    .reduce((prev: any, cur: any) => prev + cur, 0)

  const navigate = useNavigate()

  const onCartListHandler = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onCheckoutHandler = () => {
    setAnchorEl(null)
    navigate('/buy')
  }

  return (
    <AppBar position="static" style={{ backgroundColor: '#1d3444' }}>
      {/* Logo */}
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              E-Shop
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              style={{ minWidth: '350px' }}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Typography textAlign="center">Home</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/products" style={{ textDecoration: 'none' }}>
                  <Typography textAlign="center">Products</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            E-Shop
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
            </Link>
            <Link to="/products" style={{ textDecoration: 'none' }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Products
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              className="nav-bar__nav--favourite-list"
              id="menu-appbar"
              style={{
                padding: '16px !important',
                width: '350px',
                marginTop: '24px',
              }}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Typography
                variant="h5"
                component="div"
                style={{ padding: '16px' }}
              >
                Cart Items
              </Typography>
              <Divider />
              <MenuItem style={{ display: 'flex', flexDirection: 'column' }}>
                {cartItem.length === 0 && (
                  <div>
                    <p>No product in the cart list</p>
                  </div>
                )}
                {cartItem &&
                  cartItem.map((item: any) => (
                    <CartItem
                      key={`${item._id}${Math.random() * 9999}`}
                      image={item.image}
                      title={item.title}
                      price={`$ ${item.price}`}
                      onClick={() => dispatch(removeProductCart(item))}
                    />
                  ))}
              </MenuItem>
              {cartItem.length > 0 && (
                <div style={{ padding: '8px 16px' }}>
                  <div style={{ padding: '8px 0' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <Typography variant="subtitle1" component="div">
                          Total amount
                        </Typography>
                        <Typography
                          variant="caption"
                          gutterBottom
                          component="div"
                        >
                          VAT 24% included
                        </Typography>
                      </div>

                      <Typography variant="h5" gutterBottom component="div">
                        {`$ ${totalCartAmount}`}
                      </Typography>
                    </div>
                    <Typography gutterBottom display="block" variant="caption">
                      Shipping cost $50
                    </Typography>
                  </div>
                  <Button
                    onClick={onCheckoutHandler}
                    style={{ width: '100%' }}
                    variant="contained"
                  >
                    Checkout Order
                  </Button>
                </div>
              )}
            </Menu>
            <Badge
              onClick={onCartListHandler}
              color="secondary"
              badgeContent={cartItem && cartItem.length}
            >
              <ShoppingCartIcon />
            </Badge>
          </Box>
          <Box sx={{ flexGrow: 0 }} className="user-control">
            <Tooltip title="Open profile">
              <IconButton
                size="small"
                onClick={handleOpenUserMenu}
                sx={{ ml: 2 }}
              >
                {currentUserLoggedIn ? (
                  <Box className="user-control-menu">
                    <Avatar sx={{ width: 32, height: 32 }}>
                      {loggedinUserAvater}
                    </Avatar>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      className="user-control-item"
                    >
                      {loggedinUserNameAndRole}
                    </Typography>
                  </Box>
                ) : (
                  <Box className="user-control-menu">
                    <Avatar sx={{ width: 32, height: 32 }} />
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      className="user-control-item"
                    >
                      Login
                    </Typography>
                  </Box>
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUserLoggedIn ? (
                <UserMenuControl />
              ) : (
                <Box className="user-control">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to="/login" className="link-text">
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Login
                    </Link>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to="/register" className="link-text">
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Register
                    </Link>
                  </MenuItem>
                </Box>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppNavbar
