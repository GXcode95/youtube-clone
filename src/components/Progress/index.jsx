import React from 'react'
import { Box, CircularProgress } from '@mui/material'
const Progress = () => {

  return (
    <Box sx={{width: "100%"}} display="flex" justifyContent="center" my={4}>
      <CircularProgress size={60} color='dark'  />
    </Box>
  )
}
    
export default Progress
