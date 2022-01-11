import React from 'react'
import YouTube from 'react-youtube'
import { Box, Button, Typography, Stack } from '@mui/material'
import Title from './Title'
import Statistics from './Statistics'
import ChannelThumbnail from './ChannelThumbnail'
import ChannelTitle from './ChannelTitle'
import SubscriptionButton from 'components/_buttons/SubscriptionButton'
import formatBigNumber from 'helpers/formatBigNumber'

const CardBig = ({video}) => {
  const [readMore, setReadMore] = React.useState(false)

  const toggleReadMore = () => {
    setReadMore(!readMore)
  }

  const handleSubscriberCount = (count) => {
    const nbSubscribers = formatBigNumber(count)
    let text = " abonné"
    if (count > 1) text = " abonnés"
    if (count > 1000000) text = " d'abonnés"
    return nbSubscribers + text
  }

  return (
    <Box>
      <YouTube
        videoId={video.id}                  
        containerClassName={'yt-container'}
        opts={{height: '100%', width: '100%' }}
        onReady={e => e.target.playVideo()}
      />

      <Box mt={2}>
        <Title video={video} sx={{fontSize: "1.8rem", fontWeight: 400}}/>
        <Box mt={2}>
          {/* <Statistics video={video} style={{fontSize: "1.4rem"}} compact={false}/> */}
        </Box>
      </Box>
      
      {console.log("video", video)}

      <Box display="flex" gap={2} alignItems="start" pt={2} pb={6}>
        <ChannelThumbnail video={video} size="48"/>
        
        <Stack flex="1">
          <ChannelTitle video={video} style={{fontSize: "1.4rem", fontWeight: 500, textAlign: "start"}}/>
          
          <Typography color="dark.light" sx={{fontSize: "1.2rem"}}>
            {handleSubscriberCount(video.channel.statistics.subscriberCount)}
          </Typography>
          
          <Typography variant="subtitle" overflow="hidden" maxHeight={readMore ? "100%" : "6rem"} sx={{fontSize: "1.4rem"}}>
            {video.description}
          </Typography>
          
          <Typography 
            component="span"
            sx={{color: "dark.light",fontSize: "12px",fontWeight: 800, cursor: "pointer", mt: 2}}
            onClick={toggleReadMore}
          >
            {readMore ? "MOINS" : "PLUS"}
          </Typography>

        </Stack>

        <SubscriptionButton />
      </Box>

    </Box>
  )
}
    
export default CardBig
