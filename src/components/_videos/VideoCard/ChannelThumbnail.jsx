import React from 'react'
import { Avatar } from '@mui/material'

const ChannelThumbnail = ({video}) => {

  return (
    <Avatar sx={{ width: 34, height: 34 }}>
      <img src={video.channel.thumbnails.best.url} />
    </Avatar>
  )
}
export default ChannelThumbnail