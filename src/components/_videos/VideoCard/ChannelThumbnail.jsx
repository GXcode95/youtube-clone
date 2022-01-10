import React from 'react'
import { Avatar } from '@mui/material'

const ChannelThumbnail = ({video, size=34 }) => {

  return (
    <Avatar sx={{ width: size, height: size }}>
      <img src={video.channel.thumbnails.best.url} />
    </Avatar>
  )
}
export default ChannelThumbnail