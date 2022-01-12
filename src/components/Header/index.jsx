import React from 'react'
import './index.scss'
import { Box, AppBar, Toolbar, IconButton, Stack } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LoginButton from "components/_buttons/LoginButton"
import TemporarySidebar from 'components/_nav/TemporarySidebar'
import { useNavigate } from 'react-router-dom';
import Searchbar from './Searchbar'

const Header = ({ setSearch }) => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.target.searchbar.value.match(/[a-zAZ0-9]/)) return

    setSearch(e.target.searchbar.value)
    navigate('/research')
  }

  return (
      <AppBar position="fixed" color="inherit" elevation={0} sx={{height: "7em", px: 3}}>
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
            <Searchbar handleSubmit={handleSubmit}/>

       

            {/***** Right Button Menu *****/}
            <Stack direction="row" justifyContent="center">
              <IconButton
                size="large"
                aria-label="applications"
              >
                <AppsIcon sx={{fontSize: "1.7em"}}/>          
              </IconButton>

              <IconButton
                size="large"
                aria-label="notifications"
              >
                <NotificationsNoneIcon sx={{fontSize: "1.7em"}} />          
              </IconButton>

              <LoginButton />
            </Stack>
            
          </Box>
        </Toolbar>
      </AppBar>
  )
}
    
export default Header