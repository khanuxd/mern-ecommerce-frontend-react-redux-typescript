import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export const IsUserAuthenticated = () => {

  let loggedinUser =
    localStorage.getItem('shop-user') ||
    localStorage.getItem('shop-user-google')
    
  if (loggedinUser) {
    let parsedUser = JSON.parse(loggedinUser)

    if (parsedUser.isBanned === false || parsedUser.result) {
      return <Outlet />
    } else {
      alert(parsedUser.message)
      localStorage.removeItem('shop-user')
      return <Navigate to="/login" />
    }
  }
  return <Navigate to="/login" />
}

export const IsUserUnauthenticated = () => {
  if (
    localStorage.getItem('shop-user') ||
    localStorage.getItem('shop-user-google')
  ) {
    return <Navigate to="/" />
  }
  return <Outlet />
}

export const IsUserAdmin = () => {
  let loggedinUser = localStorage.getItem('shop-user')
  if (loggedinUser) {
    let parsedUser = JSON.parse(loggedinUser)
    //not admin
    if (parsedUser.isAdmin === false) {
      return <Navigate to="/" />
    }
    //admin
    return <Outlet />
  }
  return <Navigate to="/login" />
}
