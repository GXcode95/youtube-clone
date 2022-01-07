import React from 'react'
import APIManager from 'services/youtube'
import { Box } from '@mui/material'
import VideoGrid from 'components/_videos/VideoGrid'
import TagList from 'components/TagList'
import { data } from 'services/data.js'

const Research = ({search}) => {
  const [videos, setVideos] = React.useState()

  React.useEffect(
    () => {
      const getVideos = async () => {
        const response = await APIManager.getVideoSearch(search)
          if (!response.error)
            setVideos(response)
      }
      if (search){
        console.log("--------")
        getVideos(search)
      }
      // setVideos(data)
    },[search]
  )

  return (
    <Box pr={{xs:2, sm:1}} pl={{xs:2, md:0}}>
      { videos && <VideoGrid  videos={videos}/> }
      { console.log("video: ", videos) }
    </Box>
  )
}
    
export default Research
