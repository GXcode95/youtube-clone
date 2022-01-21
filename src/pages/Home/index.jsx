import React from 'react'
import YTAPIManager from 'services/youtube'
import { Box, Grid } from '@mui/material'
import Progress from 'components/Progress'
import { categories } from 'services/data.js'
import Sidebar from 'components/_nav/Sidebar'
import Cookies from 'js-cookie'
import VideoCard from 'components/_videos/VideoCard'

const Home = () => {
  const [videos, setVideos] = React.useState()
  const [loading, setLoading] = React.useState(false)
  const observer = React.useRef()

  const lastVideoElementRef = React.useCallback(
    (node) => {
      const getNextPage = async () => {
        setLoading(true)
        const response = await YTAPIManager.getMostPopular(Cookies.get('nextPageToken'))
        if(!response.error) setVideos(prev => [...prev, ...response])    
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
    }, []
  )
  

  React.useEffect(
    () => {
      const getVideos = async () => {
        const  response = await YTAPIManager.getMostPopular()
        if (!response.error) setVideos(response)
      }

      getVideos()
    },[]
  )

  return (
    <Box display="flex">
        <Sidebar />
        <Box flex="1" maxWidth={{ xs: "100%", lg:"90%" }} pt="4em" pl={{xs: 0, sm: "4rem"}} >
          <Box  pt="4.5em">
            <Grid container rowSpacing={2} >
              {videos && videos.map((video, i) => {
                if (i === videos.length - 1) {
                  return (
                    <Grid item ref={lastVideoElementRef} lg={3} md={4} sm={6} xs={12} key={i}>
                      <VideoCard video={video} variant="standard" />
                    </Grid>
                  )
                }
                
                return (
                  <Grid item lg={3} md={4} sm={6} xs={12} key={i}>
                      <VideoCard video={video} variant="standard" />
                  </Grid>
                )
              })}
              {loading && <Progress/> }
            </Grid>  
            
            
{console.log("videos", videos)}
          </Box>
        </Box>
    </Box>
  )

}
    
export default Home
