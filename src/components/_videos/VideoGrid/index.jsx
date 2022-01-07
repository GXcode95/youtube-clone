import React from 'react'
import VideoCard from 'components/_videos/VideoCard'
import { Grid } from '@mui/material'

const VideoGrid = ({videos}) => {

  return (
    <Grid container  rowSpacing={2}>
      {videos && videos.map((video, i) => 
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <VideoCard video={video} key={i}/>
        </Grid>
      )}
    </Grid>
  )
}
    
export default VideoGrid
