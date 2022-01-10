import React from 'react'
import { Box, Card, CardActionArea, Typography } from '@mui/material'
import ChannelThumbnail from './ChannelThumbnail.jsx'
import Statistics from './Statistics'
import ChannelTitle from './ChannelTitle'
import ThumbnailLarge from './ThumbnailLarge'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const CardLarge = ({video}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/video/${video.id}`)
  }

  return (
    <Card sx={{width:"100%",ml: "2.5%"}}>
    <CardActionArea onClick={handleClick}>
      <Box 
        display="flex" 
        height="30vw"
        maxHeight="202px"
        mb={2} 
        overflow="hidden"
      >

        {/*****  Thumbnails *****/}
        <Box flex="1" maxWidth="360px">
          <ThumbnailLarge video={video}/>
        </Box> 

        <Box flex="1" px={2}>

          {/*****  Video Title *****/}
          <Box sx={{maxHeight: "4rem", overflow: "hidden"}}>
            <Title video={video} />
          </Box>

          {/*****  Video infos *****/}
          <Box>
            <Statistics video={video} />
          </Box>

          <Box display="flex" gap={2} alignItems="center" py={2}>
            <ChannelThumbnail video={video} />
            <ChannelTitle video={video} />
          </Box>

          <Box>
            <Typography variant="subtitle" overflow="hidden" height="100%">
              {video.description}
            </Typography>
          </Box>
        </Box>

      </Box>
    </CardActionArea>
  </Card>
  )
}
    
export default CardLarge
