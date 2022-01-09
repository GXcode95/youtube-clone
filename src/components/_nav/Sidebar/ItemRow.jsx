import React from 'react'
import { Box, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ItemRow = ({icon, title, sxText, sxIcon, link}) => {
  const navigate = useNavigate()
  const onClick = () => {
    if (link) navigate(link)
  }
  return (
    <ListItem disablePadding sx={{fontSize:"3rem", p:2, m:0, position: "relative"}} onClick={onClick}>
      <Box className='smallTitle' display={{lg: "none"}}>
        <span>{title}</span>
      </Box>
      <ListItemButton >
        <ListItemIcon sx={sxIcon}>
          {icon}
        </ListItemIcon>
        
        <ListItemText primary={title} sx={sxText} />
      </ListItemButton>
    </ListItem>
  )
}

export default ItemRow

// left: 0; 
// right: 0; 
// margin-left: auto; 
// margin-right: auto; 