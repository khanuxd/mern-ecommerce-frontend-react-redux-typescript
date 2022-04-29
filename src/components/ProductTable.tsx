import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import DeleteIcon from '@mui/icons-material/Delete'
import { ListItemButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

export type productTableProps = {
  title: string
  src: string
  onDeleteHandler: Function
  onEditHandler: Function
}

const ProductTable = ({
  title,
  src,
  onDeleteHandler,
  onEditHandler,
}: productTableProps) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <List>
            <ListItem
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <ListItemAvatar>
                <Avatar alt={title} src={src} />
              </ListItemAvatar>
              <div
                style={{
                  backgroundColor: 'red',
                  maxWidth: '300px',
                  textAlign: 'left',
                }}
              >
                <ListItemText primary={title} />
              </div>
              <div style={{ maxWidth: '100px' }}>
                <ListItemButton>
                  <EditIcon onClick={() => onEditHandler()} />
                </ListItemButton>
                <ListItemButton>
                  <DeleteIcon onClick={() => onDeleteHandler()} />
                </ListItemButton>
              </div>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductTable
