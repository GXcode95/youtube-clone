import React from 'react'
import { Box, Card, CardActionArea } from '@mui/material'
import './index.scss'
import ChannelThumbnail from './ChannelThumbnail.jsx'
import ChannelStatistics from './Statistics'
import ChannelTitle from './ChannelTitle'
import Thumbnail from './Thumbnail'
import Title from './Title'

const VideoCard = ({video}) => {



  return (
    <Card sx={{width:"95%",ml: "2.5%"}}>
      <CardActionArea onClick={e => alert("hello")}>
        
        <Thumbnail video={video} />
       
        <Box display="flex" pt={2}>
          <ChannelThumbnail video={video} />
          
          <Box pb={1} px={2}>
            <Box sx={{maxHeight: "4rem", overflow: "hidden"}}>
              <ChannelTitle video={video} />
            </Box>

            <Box sx={{pt: 1}}>
              <Title video={video} />
            </Box>

            <Box>
              <ChannelStatistics video={video} />
            </Box>
          </Box>
        </Box>

      </CardActionArea>
    </Card>
  )
}
    
export default VideoCard


