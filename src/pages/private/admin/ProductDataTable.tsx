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
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

import { deleteProduct, getAllProducts } from '../../../redux/actions'
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

const ProductDataTable = () => {
  const navigate = useNavigate()
  const onAddProductHandler = () => {
    navigate('/addproduct')
  }

  const onEditHandler = (_id: string) => {
    navigate(`/editproduct/${_id}`)
  }

  const onDeleteHandler = (_id: any) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteProduct(_id))
    }
  }
  const dispatch = useDispatch()
  const { products } = useSelector((state: AppState) => state.productReducer)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch, products])

  const onDashboardPageNavigation = () => {
    navigate('/admindashboard')
  }

  return (
    <div
      style={{
        margin: '16px 72px',
        padding: '0 24px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '24px 0',
        }}
      >
        <Button
          variant="outlined"
          style={{ maxHeight: '36px' }}
          startIcon={<ArrowBackIosIcon />}
          onClick={onDashboardPageNavigation}
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
          All Products
        </Typography>
        <Button
          variant="contained"
          style={{ maxHeight: '36px' }}
          startIcon={<AddIcon />}
          onClick={onAddProductHandler}
        >
          Add Product
        </Button>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Image</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">ID</StyledTableCell>
                <StyledTableCell align="left">Price ($)</StyledTableCell>
                <StyledTableCell align="left">Stock</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products &&
                products.map((product) => (
                  <StyledTableRow key={product._id}>
                    <StyledTableCell component="th" scope="row">
                      <Avatar alt={product.title} src={product.image} />
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {product.title}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {product._id}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {product.price}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {product.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <IconButton
                          onClick={() => onEditHandler(product._id)}
                          aria-label="delete"
                          size="large"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => onDeleteHandler(product._id)}
                          aria-label="delete"
                          size="large"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
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

export default ProductDataTable
