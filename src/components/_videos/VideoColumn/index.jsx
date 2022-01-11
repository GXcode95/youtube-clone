import React from 'react'
import VideoCard from 'components/_videos/VideoCard'
import { Box } from '@mui/material'

const VideoColumn = ({videos, size}) => {
  const width = size === "small" ? "402px" : "inherit"
  return (
    <Box sx={{pb: 5}}>
      {videos && videos.map((video, i) => 
        <Box key={i} width={width}>
          <VideoCard video={video} type="horizontal" size={size} />
        </Box>
      )}
    </Box>
  )
}
    
export default VideoColumn
