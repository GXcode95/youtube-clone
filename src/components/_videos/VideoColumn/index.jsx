import React from 'react'
import VideoCard from 'components/_videos/VideoCard'
import { Box } from '@mui/material'

const VideoColumn = ({videos}) => {

  return (
    <Box>
      {videos && videos.map((video, i) => 
        <Box key={i}>
          <VideoCard video={video} type="horizontal" />
        </Box>
      )}
    </Box>
  )
}
    
export default VideoColumn
