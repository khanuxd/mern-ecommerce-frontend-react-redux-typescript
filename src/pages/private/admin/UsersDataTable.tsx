import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Avatar } from '@mui/material'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

import { banAUser, getAllUsers } from '../../../redux/actions'
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

const UsersDataTable = () => {
  const onBanUserHandler = (_id: any) => {
    dispatch(banAUser(_id))
    dispatch(getAllUsers())
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const users = useSelector((state: AppState) => state.userReducer.users)


  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch, users])

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
          All Users
        </Typography>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Image</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">ID</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Is Banned</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                users.map((user) => (
                  <StyledTableRow key={user._id}>
                    <StyledTableCell component="th" scope="row">
                      <Avatar alt={user.name} />
                    </StyledTableCell>
                    <StyledTableCell align="left">{user.name}</StyledTableCell>
                    <StyledTableCell align="left">{user._id}</StyledTableCell>
                    <StyledTableCell align="left">{user.email}</StyledTableCell>
                    <StyledTableCell align="left">
                      {user.isBanned?.toString()}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Button
                        variant="outlined"
                        style={{ maxHeight: '36px', width: '90px' }}
                        onClick={() => onBanUserHandler(user._id)}
                      >
                        {user.isBanned === true ? 'Unban' : 'Ban'}
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

export default UsersDataTable
