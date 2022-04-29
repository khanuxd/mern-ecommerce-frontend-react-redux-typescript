import React from 'react'
import { Button, IconButton, Typography } from '@mui/material'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import Box from '@mui/system/Box'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'

export type productDetailsProps = {
  _id: string
  title: string
  price: number
  image: string
  onAddToCartHandler: Function
  onAddHandler: Function
  onRemoveHandler: Function
  onClick?: Function
  details: string
  disabled: boolean
}

const ProductDetails = ({
  _id,
  title,
  price,
  image,
  onAddToCartHandler,
  onAddHandler,
  onRemoveHandler,
  details,
  disabled,
}: productDetailsProps) => {
  return (
    <Box>
      <div>
        <div style={{ display: 'flex', padding: '0 64px 64px 64px' }}>
          <div
            style={{
              width: '50%',
              height: '500px',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img src={image} alt={title} />
          </div>
          <div style={{ padding: '0 32px' }}>
            <Typography variant="h3" component="div" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4" component="div" gutterBottom>
              {price}
            </Typography>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Typography
                variant="h5"
                style={{ paddingRight: '16px' }}
                component="div"
                gutterBottom
              >
                QTY
              </Typography>
              <IconButton
                style={{ border: '1px solid gray', padding: '0' }}
                onClick={() => onRemoveHandler()}
                aria-label="delete"
              >
                <RemoveCircleOutlineIcon className="cursor-click" />
              </IconButton>
              <Typography
                variant="h5"
                style={{ padding: '16px' }}
                component="div"
                gutterBottom
              >
                1
              </Typography>
              <IconButton
                style={{ border: '1px solid gray', padding: '0' }}
                onClick={() => onAddHandler()}
                aria-label="delete"
              >
                <AddCircleOutlineIcon className="cursor-click" />
              </IconButton>
            </div>
            <div style={{ margin: '32px 0' }}>
              <Button
                disabled={disabled}
                onClick={() => onAddToCartHandler()}
                variant="contained"
              >
                Add To Cart
              </Button>
            </div>
            <div>
              <Typography variant="body2" gutterBottom>
                {details}
              </Typography>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#dbdbdb',
            padding: '32px 16px',
          }}
        >
          <div>
            <LocalShippingOutlinedIcon />
            <Typography variant="overline" display="block" gutterBottom>
              free delivery over $50
            </Typography>
          </div>
          <div>
            <AccountBalanceWalletOutlinedIcon />
            <Typography variant="overline" display="block" gutterBottom>
              30 day's money back guarantee
            </Typography>
          </div>

          <div>
            <VerifiedOutlinedIcon />
            <Typography variant="overline" display="block" gutterBottom>
              quality ensured
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default ProductDetails
