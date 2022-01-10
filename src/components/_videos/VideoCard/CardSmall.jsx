import React from 'react'
import { Box, Card, CardActionArea, Typography } from '@mui/material'
import ChannelThumbnail from './ChannelThumbnail.jsx'
import Statistics from './Statistics'
import ChannelTitle from './ChannelTitle'
import ThumbnailSmall from './ThumbnailSmall'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const CardSmall = ({video}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/video/${video.id}`)
  }


  return (
    <Card sx={{width:"100%",ml: "2.5%"}}>
      <CardActionArea onClick={handleClick}>
        <Box 
          display="flex" 
          height="94px"
          mb={1} 
          overflow="hidden"
        >

        {/*****  Thumbnails *****/}
        <Box width="168px"> 
          <ThumbnailSmall video={video}/>
        </Box>

        <Box flex="1" px={2}>
          
          {/*****  Video Title *****/}
          <Box sx={{maxHeight: "4rem", overflow: "hidden"}}>
            <Title video={video}  style={{ fontSize: "1.4rem", fontWeight: 600}}/>
          </Box>

          {/*****  Channel Infos *****/}
          <Box mt={1}>
            <ChannelTitle video={video} style={{fontSize: "1.2rem"}}/>
          </Box>
          <Box>
            <Statistics video={video} style={{fontSize: "1.2rem"}}/>
          </Box>
        
        </Box>

      </Box>
    </CardActionArea>
  </Card>
  )
}
    
export default CardSmall
