import React from 'react'
import { Typography } from '@mui/material'

const Title = ({video, variant="videoTitle1", style={} }) => {
  return (
    <Typography 
      variant={variant} 
      align="center"
      sx={style}
    >
      {video.title}
    </Typography>
  )
}
export default Title