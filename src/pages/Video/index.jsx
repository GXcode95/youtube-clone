import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import YTAPIManager from 'services/youtube'
import { oneVideo, related, videoComments} from 'services/data'
import './index.scss'
import VideoColumn from 'components/_videos/VideoColumn'
import CardBig from 'components/_videos/VideoCard/CardBig'
import CommentCard from 'components/CommentCard'
const Video = () => {
  const { videoId } = useParams()
  const [video, setVideo] = React.useState()
  const [relatedVideos, setRelatedVideos] = React.useState()
  const [comments, setComments] = React.useState()

  React.useEffect( //* oneVideo
    () => {
      const fetchVideo = async () => {
        const response = await YTAPIManager.getVideoById(videoId)
        if (!response.error) setVideo(response)
      }
      // if (videoId) fetchVideo()
      
      setVideo(oneVideo)
    },[videoId]
  )
  React.useEffect( //* related
    () => {
      const fetchRelated = async () => {
        const response = await YTAPIManager.getRelatedVideos(videoId)
        if (!response.error) setRelatedVideos(response)
      }
      // if (videoId)  fetchRelated()
      setRelatedVideos(related)
    },[videoId]
  )
  React.useEffect( //* videoComments
    () => {
      const fetchComments = async () => {
        const response = await YTAPIManager.getVideoComments(videoId)
        if (!response.error) setComments(response)
      }
      if (videoId) fetchComments()

      // setComments(videoComments)
    }, [videoId]
  )
  

  return (
    <Box display="flex" ml={4} mr={2} mt="5em" pt="4em">
      {video &&
        <Box flex="1"  maxWidth="100%" maxHeight="96vh" pr={{xs: 0, md:2}}>
          <CardBig video={video} />
          <Box display={{lg:"none"}}>
            <VideoColumn videos={relatedVideos} size="small"/> 
          </Box>
          <Stack spacing={1.5}>
            <Typography sx={{fontSize: "1.6rem", fontWeight: 400}}>
              {video.statistics.commentCount} commentaires
            </Typography>
            {comments && comments.map( comment => 
              <CommentCard comment={comment} />
            )}
          </Stack>
        </Box>
      }
      {relatedVideos && 
        <Box display={{xs: "none", lg:"block"}}>
          <VideoColumn videos={relatedVideos} size="small"/> 
        </Box>
      }

      {console.log("page comments :", video)}
    </Box>
  )
}
    
export default Video