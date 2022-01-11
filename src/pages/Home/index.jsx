import React from 'react'
import YTAPIManager from 'services/youtube'
import { Box, Grid } from '@mui/material'
import Progress from 'components/Progress'
import TagList from 'components/TagList'
import { mostPopular } from 'services/data.js'
import { categories } from 'services/data.js'
import Sidebar from 'components/_nav/Sidebar'
import Cookies from 'js-cookie'
import VideoCard from 'components/_videos/VideoCard'

const Home = () => {
  const [videos, setVideos] = React.useState()
  const [tags, setTags] = React.useState()
  const [selectedTag, setSelectedTag] = React.useState()
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
      //  if (selectedTag) {
      //    const reponse = await YTAPImanager.getFeedByTag(tag.id)
      //  } else {
        const response = await YTAPIManager.getMostPopular()
      //  }

        if (!response.error)
          setVideos(response)
      }

      getVideos()
      
      // setVideos(mostPopular)
      setTags(categories)
    },[selectedTag]
  )

  return (
    <Box display="flex" mt="5em">
      {/* here mt is used to handle the size of the (fixed) header, otherwise the top of the box would be behind the header */}
        <Sidebar />
        <Box flex="1" maxWidth="100%" pt="4em">
          <Box pr={{xs:2, sm:1}} pl={{xs:2, md:0}} pt="4.5em">
            { tags && <TagList tags={tags} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/> }
            <Grid container rowSpacing={2}>
              {videos && videos.map((video, i) => {
                if (i === videos.length - 1) {
                  return (
                    <Grid item ref={lastVideoElementRef} lg={3} md={4} sm={6} xs={12} key={i}>
                      <VideoCard video={video} />
                    </Grid>
                  )
                }
                
                return (
                  <Grid item lg={3} md={4} sm={6} xs={12} key={i}>
                      <VideoCard video={video} />
                  </Grid>
                )
              }
                // {  ? 
                //   <Grid item ref={lastVideoElementRef} lg={3} md={4} sm={6} xs={12} key={i}>
                //       <VideoCard video={video} />
                //   </Grid>
                //   :
                  
                // }
              )}
              {loading && <Progress/> }
            </Grid>  
            
            
{console.log("videos", videos)}
          </Box>
        </Box>
    </Box>
  )

}
    
export default Home
