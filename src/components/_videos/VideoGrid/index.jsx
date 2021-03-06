import React from 'react'
import VideoCard from 'components/_videos/VideoCard'
import { Box, Grid } from '@mui/material'

const VideoGrid = ({videos, loadMore}) => {

  return (
    <Grid container rowSpacing={2}>
      {videos && videos.map((video, i) => 
        <Grid item lg={3} md={4} sm={6} xs={12} key={i}>
          <VideoCard video={video} />
        </Grid>
      )}
    </Grid>
  )
}
    
export default VideoGrid
