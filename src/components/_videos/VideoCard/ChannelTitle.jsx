import React from 'react'
import { Typography } from '@mui/material'

const ChannelTitle = ({video, style}) => {

  return (
    <Typography variant="videoSubtitle" align="center" sx={style}>
      {video.channel.title} 
    </Typography>
  )
}
export default ChannelTitle