import React from 'react'
import { Typography } from '@mui/material'

const ChannelTitle = ({video}) => {

  return (
    <Typography variant="videoSubtitle" align="center">
      {video.channel.title} 
    </Typography>
  )
}
export default ChannelTitle