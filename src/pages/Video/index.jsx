import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Progress from 'components/Progress'
import { useParams } from 'react-router-dom'
import YTAPIManager from 'services/youtube'
import { oneVideo, related, videoComments} from 'services/data'
import './index.scss'
import VideoColumn from 'components/_videos/VideoColumn'
import CardBig from 'components/_videos/VideoCard/CardBig'
import CommentCard from 'components/CommentCard'
import addSpaceToNumber from 'helpers/addSpaceToNumbers'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'

const Video = () => {
  const { videoId } = useParams()
  const [video, setVideo] = React.useState()
  const [relatedVideos, setRelatedVideos] = React.useState()
  const [comments, setComments] = React.useState()
  const [loading, setLoading] = React.useState(false)
 
  const observer = React.useRef()
  const lastCommentElementRef = React.useCallback(
    (node) => {
      const getNextPage = async () => {
        setLoading(true)
        const response = await YTAPIManager.getVideoComments(videoId, Cookies.get('nextPageToken'))
        if(!response.error) setComments(prev => [...prev, ...response])    
        setLoading(false)
      }

      if (loading || !Cookies.get('nextPageToken')) return
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver( entries => {
        if (entries[0].isIntersecting) {
          getNextPage()
        }
      })

      if (node) observer.current.observe(node)
    }, [loading]
  )
  
  React.useEffect( //* oneVideo
    () => {
      const fetchVideo = async () => {
        const response = await YTAPIManager.getVideoById(videoId)
        console.log("DATA --- ONEVIDEO --- : ", response)
        if (!response.error) setVideo(response)
      }
      if (videoId) fetchVideo()
      
      // setVideo(oneVideo)
    },[videoId]
  )
  React.useEffect( //* related
    () => {
      const fetchRelated = async () => {
        const response = await YTAPIManager.getRelatedVideos(videoId)
        console.log("DATA --- RELATED --- : ", response)
        if (!response.error) setRelatedVideos(response)
      }
      if (videoId)  fetchRelated()
      // setRelatedVideos(related)
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
        <Box flex="1"  maxWidth="1300px" maxHeight="96vh" pr={{xs: 0, md:2}} >
          <CardBig video={video} />
          <Box display={{lg:"none"}}>
            <VideoColumn videos={relatedVideos} size="small"/> 
          </Box>
          <Stack spacing={1.5}>
            <Typography sx={{fontSize: "1.6rem", fontWeight: 400}}>
              {addSpaceToNumber(video.statistics.commentCount)} commentaires
            </Typography>

            {comments && comments.map( (comment, i) => {
              if (i === comments.length - 1 ) {
                return (
                  <div key={i} ref={lastCommentElementRef}>
                    <CommentCard comment={comment} />
                  </div>
                )
              }
            
              return (
                <div key={i}>
                  <CommentCard comment={comment} />
                </div>
              )
            })}
          </Stack>
          {loading && <Progress /> }
        </Box>
      }

      {relatedVideos && 
        <Box display={{xs: "none", lg:"block"}}>
          <VideoColumn videos={relatedVideos} size="small"/> 
        </Box>
      }

    </Box>
  )
}
    
export default Video