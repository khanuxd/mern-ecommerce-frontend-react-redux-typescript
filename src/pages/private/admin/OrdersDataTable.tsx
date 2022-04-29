import React, { useEffect } from 'react'
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

import { getAllOrders } from '../../../redux/actions'
import { AppState } from '../../../types'

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

const OrdersDataTable = () => {
  const dispatch = useDispatch()
  const { orders } = useSelector((state: AppState) => state.orderReducer)
  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch, orders])

  const navigate = useNavigate()

  const onBackToAdminDashboardHandler = () => {
    navigate('/admindashboard')
  }

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
          Back to Admin Dashboard
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
                <StyledTableCell align="left">User ID</StyledTableCell>
                <StyledTableCell align="left">Products No</StyledTableCell>
                <StyledTableCell align="left">Amount ($)</StyledTableCell>
                <StyledTableCell align="left">Created</StyledTableCell>
                <StyledTableCell align="left">Updated</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders &&
                orders.map((order) => (
                  <StyledTableRow key={order._id}>
                    <StyledTableCell component="th" scope="row">
                      {order._id}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {order.status}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {order.userId}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {order.products.length}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {order.amount}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {order.createdAt?.toString().slice(0, 10)}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {order.updatedAt?.toString().slice(0, 10)}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Button variant="text" style={{ maxHeight: '36px' }}>
                        Approve
                      </Button>
                      <Button
                        variant="text"
                        color="error"
                        style={{ maxHeight: '36px' }}
                      >
                        Reject
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default OrdersDataTable
