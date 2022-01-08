import React from 'react'
import { Typography } from '@mui/material'

const Title = ({video, type="vertical"}) => {

  return (
    <Typography variant={type === "vertical" ? "videoTitle2" : "videoTitle1"} align="center">
      {video.title}
    </Typography>
  )
}
export default Title