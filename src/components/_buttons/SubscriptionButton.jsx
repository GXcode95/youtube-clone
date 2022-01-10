import React from 'react'
import { Button } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const SubscriptionButton = () => {
  
  const handleClick = async () => {
  }

  return (
    <Button 
      variant="contained"
      color="error"
      onClick={handleClick}
      sx={{fontSize: "1.4rem", borderRadius: "1px"}}
    >
      S'abonner
    </Button>
  )
}
export default SubscriptionButton
