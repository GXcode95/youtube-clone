import React from 'react'
import { Box } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './thumbnail.scss'
const Thumbnail = ({video, height}) => {
  height = height ||  { xs: "calc(76vw / 1 * 0.56)",
                        sm: "calc(76vw / 2 * 0.56)",
                        md: "calc(76vw / 3 * 0.56)",
                        lg: "calc(76vw / 4 * 0.56)" }

  return (
    <Box className='img-container' 
     sx={{height: height, position: "relative"}}
    >
      <LazyLoadImage className="cont" src={video.thumbnails.best.url} alt="" effect="blur" />
      <div className="duration">
        <span>{video.duration}</span>
      </div>
    </Box>
  )
}
export default Thumbnail
