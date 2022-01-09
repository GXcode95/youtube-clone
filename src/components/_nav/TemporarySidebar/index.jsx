import * as React from 'react';
import { Box, Drawer, List, IconButton } from '@mui/material'

import ItemRow from 'components/_nav/Sidebar/ItemRow'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';

 const TemporarySidebar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       <List>
          <ItemRow
            icon={<HomeOutlinedIcon sx={{fontSize: "2.6rem"}} />}
            title="Accueil" 
            link="/"
          />
          <ItemRow
            icon={<ExploreOutlinedIcon sx={{fontSize: "2.6rem"}} />}
            title="Explorer" 
          />
          <ItemRow
            icon={<SubscriptionsOutlinedIcon sx={{fontSize: "2.6rem"}} />}
            title="Abonnement" 
          />
          <ItemRow
            icon={<VideoLibraryOutlinedIcon sx={{fontSize: "2.6rem"}} />}
            title="Bibliothèque" 
          />
      </List>
    </Box>
  );

  return (
    <Box >
      <IconButton onClick={toggleDrawer('left', true)} >
        <MenuOutlinedIcon sx={{fontSize:"2.7rem"}}/>
      </IconButton>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </Box>
  );
}

export default TemporarySidebar