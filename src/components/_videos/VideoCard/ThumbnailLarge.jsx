import React from 'react'
import { Box } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './thumbnailLarge.scss'
const ThumbnailLarge = ({video}) => {

  return (
    <Box className='img-container' 
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <LazyLoadImage src={video.thumbnails.best.url} alt="" effect="blur" />
      <div className="duration">
        <span>{video.duration}</span>
      </div>
    </Box>
  )
}

export default ThumbnailLarge