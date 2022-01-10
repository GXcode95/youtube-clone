import React from 'react'
import { Box, Card, CardActionArea, Typography } from '@mui/material'
import ChannelThumbnail from './ChannelThumbnail.jsx'
import Statistics from './Statistics'
import ChannelTitle from './ChannelTitle'
import Thumbnail from './Thumbnail'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const CardStandard = ({video}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/video/${video.id}`)
  }

  return (
    <Card sx={{width:"95%",ml: "2.5%"}}>
      <CardActionArea onClick={handleClick}>
        <Thumbnail video={video} /> 

        <Box display="flex" pt={2}>
          <ChannelThumbnail video={video} />

          <Box pb={1} px={2}>
            <Box sx={{maxHeight: "4rem", overflow: "hidden"}}>
              <Title video={video} variant="videoTitle2" />
            </Box>

            <Box sx={{pt: 1}}>
              <ChannelTitle video={video} />
            </Box>

            <Box>
              <Statistics video={video} />
            </Box>
          </Box>
        </Box>

      </CardActionArea>
    </Card>
  )
}
    
export default CardStandard
