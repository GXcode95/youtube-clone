import React from 'react'
import { Avatar, Box, Card, CardActionArea, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './index.scss'

const VideoCard = ({video}) => {


    const handlePublishDate = (date) => {
      const today = Date.now() 
      const publishDate = new Date(date).getTime()
    
      const daysSincePublish = Math.trunc( (today - publishDate) / 1000 / 60 / 60 / 24 )
      if (daysSincePublish >= 730)
        return  `${Math.truncate(daysSincePublish / 365)} ans`
      if (daysSincePublish >= 365)
        return "1 an"
      if (daysSincePublish >= 30)
        return  `${Math.truncate(daysSincePublish / 30)} mois`
      if (daysSincePublish >= 14 )
        return `${Math.truncate(daysSincePublish / 7)} semaines`
      if (daysSincePublish >= 7 )
        return `1 semaine`
      if (daysSincePublish >= 1)
        return `${daysSincePublish} jours`
      if (daysSincePublish < 1){
        const hoursSincePublish = Math.trunc( (today - publishDate) / 1000 / 60 / 60 )
        if (hoursSincePublish >= 1)
         return `${hoursSincePublish} heures`
         
        const minutesSincePublish = Math.trunc( (today - publishDate) / 1000 / 60 )
          return `${minutesSincePublish} minute`
      }
    }
  return (
    <Card sx={{width:"95%",ml: "2.5%"}}>
      <CardActionArea onClick={e => alert("hello")}>
        
        <Box className='img-container' 
          sx={{
            height:{
              xs: "calc(76vw / 1 * 0.56)",
              sm: "calc(76vw / 2 * 0.56)",
              md: "calc(76vw / 3 * 0.56)",
              lg: "calc(76vw / 4 * 0.56)",
            },
            position: "relative"
          }}
        >
          <LazyLoadImage className="cont" src={video.thumbnails.best.url} alt="" effect="blur"         />
          <div className="duration">
            <span>{video.duration}</span>
          </div>
        </Box>
       
        <Box display="flex" pt={2}>
          <Avatar sx={{ width: 34, height: 34 }}>
            <img src={video.channel.thumbnails.best.url} />
          </Avatar>
          
          <Box pb={1} px={2}>
            <Box sx={{maxHeight: "4rem", overflow: "hidden"}}>
              <Typography variant="videoTitle2" align="center">
                {video.title}
              </Typography>
            </Box>
            <Box sx={{pt: 1}}>
              <Typography variant="videoSubtitle" align="center">
                {video.channel.title} 
              </Typography>
            </Box>
            <Box>
              <Typography variant="videoSubtitle" align="center">
                { video.statistics.commentCount } k vues<span style={{margin: "0 4px"}} >•</span> Il y a {handlePublishDate(video.publishedAt)}
              </Typography>
            </Box>
          </Box>

        </Box>

      </CardActionArea>
    </Card>
  )
}
    
export default VideoCard


