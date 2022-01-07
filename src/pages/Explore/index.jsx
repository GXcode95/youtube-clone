import React from 'react'
import APIManager from 'services/youtube'
import { Box } from '@mui/material'
import VideoGrid from 'components/_videos/VideoGrid'
import TagList from 'components/TagList'
import { data } from 'services/data.js'
import { categories } from 'services/data.js'

const Explore = () => {
  const [videos, setVideos] = React.useState()
  const [tags, setTags] = React.useState()
  React.useEffect(
    () => {
      // const getVideos = async () => {
      //   const response = await APIManager.getMostPopular()
      //   if (!response.error)
      //     setVideos(response)
      // }
      // getVideos()
      setVideos(data)
      setTags(categories)
    },[data, categories]
  )

  return (
    <Box pr={{xs:2, sm:1}} pl={{xs:2, md:0}}>
      { videos && <VideoGrid  videos={videos}/> }
      { console.log("video: ", videos) }
    </Box>
  )
}
    
export default Explore