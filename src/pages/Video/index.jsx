import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Progress from 'components/Progress'
import { useParams } from 'react-router-dom'
import YTAPIManager from 'services/youtube'
import './index.scss'
import VideoColumn from 'components/_videos/VideoColumn'
import CommentCard from 'components/CommentCard'
import addSpaceToNumber from 'helpers/addSpaceToNumbers'
import Cookies from 'js-cookie'
import VideoCard from 'components/_videos/VideoCard'

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
        if (!response.error) setVideo(response)
      }
      if (videoId) fetchVideo()
    },[videoId]
  )
  React.useEffect( //* related
    () => {
      const fetchRelated = async () => {
        const response = await YTAPIManager.getRelatedVideos(videoId)
        if (!response.error) setRelatedVideos(response)
      }
      if (videoId)  fetchRelated()
    },[videoId]
  )
  React.useEffect( //* videoComments
    () => {
      const fetchComments = async () => {
        const response = await YTAPIManager.getVideoComments(videoId)
        if (!response.error) setComments(response)
      }
      if (videoId) fetchComments()
    }, [videoId]
  )

  return (
    <Box display="flex" mt="5em" pt="4em" justifyContent="center" gap={2}>
      {video &&
        <Box flex="1"  maxWidth="1300px" maxHeight="96vh">
          <VideoCard video={video} variant="big"/>
          <Box display={{lg:"none"}}>
            {/* <VideoColumn videos={relatedVideos} size="small"/> */}

            <Box sx={{pb: 5}}>
              {relatedVideos && relatedVideos.map((video, i) => 
                <Box key={i} width={"402px"}>
                  <VideoCard video={video} variant="small"/>
                </Box>
              )}
            </Box>
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
           <Box sx={{pb: 5}}>
              {relatedVideos && relatedVideos.map((video, i) => 
                <Box key={i} width={"402px"}>
                  <VideoCard video={video} variant="small"/>
                </Box>
              )}
            </Box>
        </Box>
      }

    </Box>
  )
}
    
export default Video