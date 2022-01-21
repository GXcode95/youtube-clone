import React, { useState } from 'react'
import './index.scss'
import { Box, AppBar, Avatar, Toolbar, IconButton, Stack } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TemporarySidebar from 'components/_nav/TemporarySidebar'
import { useNavigate } from 'react-router-dom';
import Searchbar from './Searchbar'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Header = ({ setSearch }) => {
  const navigate = useNavigate()
  const [showSearchbar, setShowSearchbar] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.target.searchbar.value.match(/[a-zAZ0-9]/)) return

    setSearch(e.target.searchbar.value)
    navigate('/research')
  }

  const toggleSearchbar = () => {
    setShowSearchbar(!showSearchbar)
  }

  return (
    <>
      { showSearchbar &&
        <Box width="calc(100% - 4em)" display="flex" alignItems="center"  position="fixed" zIndex={5} bgcolor="white" height="7em" >
          <IconButton onClick={toggleSearchbar}>
            <ArrowBackOutlinedIcon sx={{fontSize:"3rem"}} />
          </IconButton>
          <Searchbar handleSubmit={handleSubmit}/>
        </Box>
      }

      <AppBar position="fixed" color="inherit" elevation={0} sx={{height: "7em", px: 3, zIndex: 3}}>
        <Toolbar disableGutters={true}>
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" >

            {/***** Left Menu + Logo *****/}
            <Box display="flex" alignItems="center" gap={2}>
              <TemporarySidebar />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
                alt="youtube-logo" 
                height="22px"
                style={{paddingRight: "4em"}}
                onClick={e => navigate('/')}
              />
            </Box>
              
            {/***** SearchBar *****/}
              <IconButton sx={{display: {sm:"none"}}} onClick={toggleSearchbar}>
                <SearchIcon sx={{color: "dark.light", fontSize: "2.6rem"}}/>
              </IconButton>

              <Box width="100%" maxWidth="650px" display={{xs:"none", sm:"inherit"}}>
                <Searchbar handleSubmit={handleSubmit}/>
              </Box>

              

            {/***** Right Button Menu *****/}
            <Stack direction="row" justifyContent="center" alignItems="center">
              
              <IconButton
                size="large"
                aria-label="creator"
              >
                <VideoCallOutlinedIcon sx={{fontSize: "3rem"}}/>          
              </IconButton>

              <IconButton
                size="large"
                aria-label="applications"
              >
                <AppsIcon sx={{fontSize: "3rem"}}/>          
              </IconButton>

              <IconButton
                size="large"
                aria-label="notifications"
              >
                <NotificationsNoneIcon sx={{fontSize: "3rem"}} />          
              </IconButton>

                <Avatar sx={{bgcolor: "warning.main", fontSize: "2rem", mx: 2}}>
                  X
                </Avatar>
            </Stack>
            
          </Box>
        </Toolbar>
      </AppBar>

      
    </>
  )
}
    
export default Header