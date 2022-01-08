import React from 'react'
import APIManager from 'services/youtube'
import { Box } from '@mui/material'
import VideoColumn from 'components/_videos/VideoColumn'
import TagList from 'components/TagList'
import { searchData } from 'services/data.js'

const Research = ({search}) => {
  const [videos, setVideos] = React.useState()

  React.useEffect(
    () => {
      // const getVideos = async () => {
      //   const response = await APIManager.getVideoSearch(search)
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
    <Box pr={{xs:2, sm:1}} pl={{xs:2, md:0}}>
      { videos && <VideoColumn  videos={videos}/> }
      { console.log("video: ", videos) }
    </Box>
  )
}
    
export default Research
