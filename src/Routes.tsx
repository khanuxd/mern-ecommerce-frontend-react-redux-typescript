import React from 'react'
// import { Switch, Route } from 'react-router-dom' //
import { Routes as Switch, Route } from 'react-router-dom' // updated to latest
import {
  IsUserUnauthenticated,
  IsUserAuthenticated,
  IsUserAdmin,
} from './components/UserAuth'
//https://reactrouter.com/docs/en/v6/upgrading/v5
//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom

import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Products from './pages/Products'
import Register from './pages/Register'
import Dashboard from './pages/private/Dashboard'
import Order from './pages/private/Order'
import PageNotFound from './pages/PageNotFound'
import AddProductForm from './pages/private/admin/AddProductForm'
import OrdersDataTable from './pages/private/admin/OrdersDataTable'
import UserOrderDataTable from './pages/private/UserOrderDataTable'
import UpdateProductForm from './pages/private/admin/UpdateProductForm'
import AdminDashboard from './pages/private/admin/AdminDashboard'
import UsersDataTable from './pages/private/admin/UsersDataTable'
import ProductDataTable from './pages/private/admin/ProductDataTable'

const Routes = () => (
  <Switch>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/:_id" element={<Product />} />
    <Route path="/products/:category" element={<Product />} />
    <Route path="*" element={<PageNotFound />} />
    <Route element={<IsUserUnauthenticated />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
    <Route element={<IsUserAuthenticated />}>
      <Route path="/buy" element={<Order />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<UserOrderDataTable />} />
    </Route>
    <Route element={<IsUserAdmin />}>
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/users" element={<UsersDataTable />} />
      <Route path="/allproducts" element={<ProductDataTable />} />
      <Route path="/allorders" element={<OrdersDataTable />} />
      <Route path="/addproduct" element={<AddProductForm />} />
      <Route path="/editproduct/:_id" element={<UpdateProductForm />} />
    </Route>
  </Switch>
)

export default Routes
