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
    <Card sx={{width:"100%",ml: "2.5%", mb: 2}}>
    <CardActionArea onClick={handleClick}>
      <Box 
        display="flex" 
        justifyContent="center"
        height="30vw"
        maxHeight="202px"
        minHeight="202px"
        overflow="hidden"
      >

        {/*****  Thumbnails *****/}
        <Box minWidth="360px" maxWidth="360px" height="200px">
          <ThumbnailLarge video={video}/>
        </Box> 

        <Box flex="1" px={2} display={{xs: "none", sm:"block"}}>

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

          <Box overflow="hidden" maxHeight={{xs:'6rem', xl:"7rem"}}>
            <Typography variant="subtitle" >
              {video.description.map( (description,i) => 
                <Typography key={i}>{description}</Typography>
              )}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{maxHeight: "5rem", overflow: "hidden"}} 
        display={{xs:"flex", sm: "none"}}
        justifyContent="center"
        pt={1} pb={2}>
        <Title video={video} />
      </Box>
    </CardActionArea>
  </Card>
  )
}
    
export default CardLarge
