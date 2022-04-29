import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useNavigate } from 'react-router-dom'

import { AppState } from '../../types'
import { getAllOrders } from '../../redux/actions'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const UserOrderDataTable = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentUserOrder, setCurrentUserOrder] = useState([])
  const dispatch = useDispatch()
  const loggedinUser = JSON.parse(localStorage.getItem('shop-user') || '{}')
  const loggedinUserId = loggedinUser.id

  const allOrders = useSelector((state: AppState) => state.orderReducer.orders)
  const loggedinUserOrder: any = allOrders.filter(
    (order) => order.userId === loggedinUserId
  )

  const navigate = useNavigate()

  const onBackToAdminDashboardHandler = () => {
    navigate('/dashboard')
  }

  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch])

  useEffect(() => {
    setCurrentUserOrder(loggedinUserOrder)
  }, [])

  const orderTable = loggedinUserOrder.map((orders: any) => {
    return (
      <StyledTableRow key={orders._id}>
        <StyledTableCell component="th" scope="row">
          {orders._id}
        </StyledTableCell>
        <StyledTableCell align="left">{orders.status}</StyledTableCell>
        <StyledTableCell align="left">{orders.products.length}</StyledTableCell>
        <StyledTableCell align="left">{orders.amount}</StyledTableCell>
        <StyledTableCell align="left">
          {orders.createdAt.toString().slice(0, 10)}
        </StyledTableCell>
        <StyledTableCell align="left">
          {orders.updatedAt.toString().slice(0, 10)}
        </StyledTableCell>
      </StyledTableRow>
    )
  })

  return (
    <div
      style={{
        margin: '16px 72px',
        padding: '0 24px',
      }}
    >
      <div>
        <Button
          style={{ maxHeight: '36px', padding: '8px 0' }}
          startIcon={<ArrowBackIosIcon />}
          onClick={onBackToAdminDashboardHandler}
        >
          Back to Dashboard
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '24px 0',
        }}
      >
        <Typography variant="h2" component="div" gutterBottom>
          All Orders
        </Typography>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">ID</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Products No</StyledTableCell>
                <StyledTableCell align="left">Amount ($)</StyledTableCell>
                <StyledTableCell align="left">Created</StyledTableCell>
                <StyledTableCell align="left">Updated</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loggedinUserOrder.length === 0 && (
                <StyledTableRow>
                  <StyledTableCell align="center">
                    No Order available
                  </StyledTableCell>
                </StyledTableRow>
              )}
              {orderTable}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default UserOrderDataTable
