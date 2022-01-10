import React from 'react'
import { Box, Card, CardActionArea, Typography } from '@mui/material'
import ChannelThumbnail from './ChannelThumbnail.jsx'
import ChannelStatistics from './Statistics'
import ChannelTitle from './ChannelTitle'
import Thumbnail from './Thumbnail'
import ThumbnailLarge from './ThumbnailLarge'
import ThumbnailSmall from './ThumbnailSmall'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import CardStandard from './CardStandard.jsx'
import CardLarge from './CardLarge.jsx'
import CardSmall from './CardSmall.jsx'

const VideoCard = ({video, type="vertical", size="standard"}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/video/${video.id}`)
  }

  const chooseCard = () => {
    if(type === "vertical") return <CardStandard video={video} />
    if(size === "small") return <CardSmall video={video} />
    return <CardLarge video={video} />

  }
  return (

    <>

      {chooseCard()}
    </>

    
  )
}
    
export default VideoCard


