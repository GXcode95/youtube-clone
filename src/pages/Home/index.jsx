import React from 'react'
import YTAPIManager from 'services/youtube'
import { Box } from '@mui/material'
import VideoGrid from 'components/_videos/VideoGrid'
import TagList from 'components/TagList'
import { mostPopular } from 'services/data.js'
import { categories } from 'services/data.js'
import Sidebar from 'components/_nav/Sidebar'

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
      // //  }
      //   if (!response.error)
      //     setVideos(response)
      // }

      // getVideos()
      
      setVideos(mostPopular)
      setTags(categories)
    },[selectedTag]
  )

  return (
    <Box display="flex" mt="5em">
      {/* here mt is used to handle the size of the (fixed) header, otherwise the top of the box would be behind the header */}
        <Sidebar />
        <Box flex="1" maxWidth="100%" maxHeight="96vh" pt="4em">
            
          <Box pr={{xs:2, sm:1}} pl={{xs:2, md:0}} pt="4.5em">
            { tags && <TagList tags={tags} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/> }
            { videos && <VideoGrid  videos={videos}/> }
            { console.log("video: ", videos) }
          </Box>

        </Box>
    </Box>
  )

}
    
export default Home
