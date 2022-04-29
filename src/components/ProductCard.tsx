import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Chip from '@mui/material/Chip'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export type productCardProps = {
  title: string
  category: string
  price: number
  image: string
  _id?: string
  onClick: Function
  disabled: boolean
}

const ProductCard = ({
  title,
  category,
  price,
  image,
  _id,
  onClick,
  disabled,
}: productCardProps) => {
  return (
    <Card
      sx={{ width: 345 }}
      style={{
        margin: '16px',
      }}
    >
      <div>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={image}
        />
      </div>

      <CardContent>
        <Chip
          style={{ backgroundColor: '#e3f2fd' }}
          size="small"
          label={category}
        />
        <Link
          to={`/products/${_id}`}
          style={{ textDecoration: 'none', color: 'blue' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </Link>
        <Typography variant="body1" color="text.secondary">
          {`$${price}`}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {`Product ID: ${_id}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          disabled={disabled}
          startIcon={<ShoppingCartIcon />}
          onClick={() => onClick()}
        >
          Add To Cart
        </Button>
        <Link to={`/products/${_id}`} style={{ textDecoration: 'none' }}>
          <Button>Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default ProductCard
