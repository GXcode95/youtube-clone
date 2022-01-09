import React from 'react'
import YTAPIManager from 'services/youtube'
import { Box } from '@mui/material'
import VideoGrid from 'components/_videos/VideoGrid'
import TagList from 'components/TagList'
import { data } from 'services/data.js'
import { categories } from 'services/data.js'

const Home = () => {
  const [videos, setVideos] = React.useState()
  const [tags, setTags] = React.useState()
  const [selectedTag, setSelectedTag] = React.useState()

  React.useEffect(
    () => {
      // const getVideos = async () => {
      //  if (selectedTag) {
      //    const reponse = await YTAPImanager.getFeedByTag(tag.id)
      //  } else {
      //    const response = await YTAPIManager.getMostPopular()
      //  }
      //   if (!response.error)
      //     setVideos(response)
      // }

      // getVideos()
      
      // if (selectedTag) alert(selectedTag.snippet.title)
      setVideos(data)
      setTags(categories)
    },[selectedTag]
  )

  return (
    <Box pr={{xs:2, sm:1}} pl={{xs:2, md:0}} pt="4.5em">
      { tags && <TagList tags={tags} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/> }
      { videos && <VideoGrid  videos={videos}/> }
      { console.log("video: ", videos) }
    </Box>
  )
}
    
export default Home
