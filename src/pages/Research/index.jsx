import React from 'react'
import YTAPIManager from 'services/youtube'
import { Box } from '@mui/material'
import Progress from 'components/Progress'

import VideoColumn from 'components/_videos/VideoColumn'
import TagList from 'components/TagList'
import { searchData } from 'services/data.js'
import Sidebar from 'components/_nav/Sidebar'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import VideoCard from 'components/_videos/VideoCard'

const Research = ({search}) => {
  const [videos, setVideos] = React.useState()
  const [loading, setLoading] = React.useState(false)
 
  const observer = React.useRef()
  const lastVideoElementRef = React.useCallback(
    (node) => {
      const getNextPage = async () => {
        setLoading(true)
        const response = await YTAPIManager.getVideoSearch(search, Cookies.get('nextPageToken'))
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
    }, [loading]
  )

  React.useEffect(
    () => {
      const getVideos = async () => {
        const response = await YTAPIManager.getVideoSearch(search)
        if (!response.error)
          setVideos(response)
      }
      if (search){
        getVideos(search)
      }
      // setVideos(searchData)
    },[search]
  )

  return (
    <Box display="flex" mt="5em">
    {/* here mt is used to handle the size of the (fixed) header, otherwise the top of the box would be behind the header */}
      <Sidebar />
      <Box flex="1" maxWidth="100%" maxHeight="96vh" pt="4em">

        <Box pr={{xs:2, sm:1}} pl={{xs:2, md:0}} pb={5}>
          {videos && videos.map((video, i) => 
            <Box key={i} ref={lastVideoElementRef}>
              <VideoCard video={video} type="horizontal"/>
            </Box>
          )}
        </Box>
        {loading && <Progress /> }
      </Box>
    </Box>
  )
}
    
export default Research
