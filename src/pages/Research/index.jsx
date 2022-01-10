import React from 'react'
import YTAPIManager from 'services/youtube'
import { Box } from '@mui/material'
import VideoColumn from 'components/_videos/VideoColumn'
import TagList from 'components/TagList'
import { searchData } from 'services/data.js'
import Sidebar from 'components/_nav/Sidebar'

const Research = ({search}) => {
  const [videos, setVideos] = React.useState()

  React.useEffect(
    () => {
      // const getVideos = async () => {
      //   alert(search)
      //   const response = await YTAPIManager.getVideoSearch(search)
      //     if (!response.error)
      //       setVideos(response)
      // }
      // if (search){
      //   console.log("--------")
      //   getVideos(search)
      // }
      setVideos(searchData)
    },[search]
  )

  return (
    <Box display="flex" mt="5em">
    {/* here mt is used to handle the size of the (fixed) header, otherwise the top of the box would be behind the header */}
      <Sidebar />
      <Box flex="1" maxWidth="100%" maxHeight="96vh" pt="4em">

        <Box pr={{xs:2, sm:1}} pl={{xs:2, md:0}}>
          { videos && <VideoColumn  videos={videos}/> }
          { console.log("video: ", videos) }
        </Box>

      </Box>
    </Box>
  )
}
    
export default Research
