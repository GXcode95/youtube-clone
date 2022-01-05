import React from 'react'
import { ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'

const ItemRow = ({icon, title}) => {
  
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  )
}

export default ItemRow