import React from 'react'
import { Box, Card, CardActionArea, Typography } from '@mui/material'
import ChannelThumbnail from './ChannelThumbnail.jsx'
import ChannelStatistics from './Statistics'
import ChannelTitle from './ChannelTitle'
import Thumbnail from './Thumbnail'
import ThumbnailLarge from './ThumbnailLarge'
import Title from './Title'

const VideoCard = ({video, type="vertical"}) => {

  const handleClick = () => {
    if(type === "horizontal") return

    alert("hello video")
  }

  return (

    <>
      {type === "vertical" ? 
        <Card sx={{width:"95%",ml: "2.5%"}}>
          <CardActionArea onClick={handleClick}>
            <Thumbnail video={video} /> 

            <Box display="flex" pt={2}>
              <ChannelThumbnail video={video} />

              <Box pb={1} px={2}>
                <Box sx={{maxHeight: "4rem", overflow: "hidden"}}>
                  <Title video={video} />
                </Box>

                <Box sx={{pt: 1}}>
                  <ChannelTitle video={video} />
                </Box>

                <Box>
                  <ChannelStatistics video={video} />
                </Box>
              </Box>
            </Box>

          </CardActionArea>
        </Card>
        :
        <Card sx={{width:"100%",ml: "2.5%"}}>
          <CardActionArea onClick={handleClick}>
          <Box display="flex" my={2} height="30vw" maxHeight="202px"> 
            <Box flex="1" maxWidth="360px">
              <ThumbnailLarge video={video}/>
            </Box>

            

              <Box flex="1" px={2}>
                <Box sx={{maxHeight: "4rem", overflow: "hidden"}}>
                  <Title video={video} type={type}/>
                </Box>

                <Box>
                  <ChannelStatistics video={video} />
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

      }
    </>

    
  )
}
    
export default VideoCard


