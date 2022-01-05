import React from 'react'
import './index.scss'
import { Box, List } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import ItemRow from './ItemRow'

const Sidebar = () => {

  return (
    <Box flex="0.2">
      <nav aria-label="sidebar menu">
        <List>

          <ItemRow icon={<HomeOutlinedIcon />} title="Accueil" />
          <ItemRow icon={<ExploreOutlinedIcon />} title="Explorer" />
          <ItemRow icon={<SubscriptionsOutlinedIcon />} title="Abonnement" />
          <ItemRow icon={<HistoryOutlinedIcon />} title="À regarder plus tard" />
          <ItemRow icon={<ThumbUpAltOutlinedIcon />} title={`Vidéos "J'aime"`} />

        </List>
      </nav>
      
    </Box>
  )
}
    
export default Sidebar
