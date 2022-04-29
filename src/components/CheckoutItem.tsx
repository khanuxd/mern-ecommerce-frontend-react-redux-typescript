import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

type CartItemProps = {
  image: string
  title: string
  price: string
  onDeleteHandler: Function
}

const CheckoutItem = ({
  image,
  price,
  title,
  onDeleteHandler,
}: CartItemProps) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: '1px solid gray',
          padding: '10px 0',
        }}
      >
        <Avatar alt={title} src={image} />
        <div style={{ width: '200px', overflow: 'hidden', padding: '0 8px' }}>
          <Typography variant="subtitle2" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{price}</Typography>
        </div>
        <div>
          <DeleteIcon onClick={() => onDeleteHandler()} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem
