import React from 'react'
import './index.scss'
import { Box, List } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import ItemRow from './ItemRow'

const Sidebar = () => {

  return (
    <Box flex={{md: 0, lg:0.2, xl:0.17 }} display={{xs: "none", sm:"block", position: "relative"}}>
      <nav aria-label="sidebar menu" style={{ position: "sticky"}}>
        <List>
          <ItemRow
            icon={<HomeOutlinedIcon sx={{fontSize: "2.6rem"}} />}
            title="Accueil" 
            sxText={{display: {xs: "none", md: "none", lg: "block"} }}
            sxIcon={{ minWidth: {xs: 0, lg:56 } }}
            link='/'
          />
          <ItemRow
            icon={<ExploreOutlinedIcon sx={{fontSize: "2.6rem"}} />}
            title="Explorer" 
            sxText={{display: {xs: "none", lg: "block"} }}
            sxIcon={{ minWidth: {xs: 0, lg:56 } }}
          />
          <ItemRow
            icon={<SubscriptionsOutlinedIcon sx={{fontSize: "2.6rem"}} />}
            title="Abonnements" 
            sxText={{display: {xs: "none", lg: "block"} }}
            sxIcon={{ minWidth: {xs: 0, lg:56 } }}
          />
          <ItemRow
            icon={<VideoLibraryOutlinedIcon sx={{fontSize: "2.6rem"}} />}
            title="Bibliothèque" 
            sxText={{display: {xs: "none", lg: "block"} }}
            sxIcon={{ minWidth: {xs: 0, lg:56 } }}
          />
        </List>
      </nav>
      
    </Box>
  )
}
    
export default Sidebar
