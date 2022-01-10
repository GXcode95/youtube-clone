import React from 'react'
import { Box } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './thumbnail.scss'

const ThumbnailSmall = ({video}) => {

  return (
    <Box className='img-container-small'>
      <LazyLoadImage src={video.thumbnails.best.url} alt="thumbnail" effect="blur" />
      <div className="duration">
        <span>{video.duration}</span>
      </div>
    </Box>
  )
}

export default ThumbnailSmall