import React from 'react'
import { Typography } from '@mui/material'

const Title = ({video}) => {

  return (
    <Typography variant="videoTitle2" align="center">
      {video.title}
    </Typography>
  )
}
export default Title