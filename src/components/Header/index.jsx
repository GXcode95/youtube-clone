import React from 'react'
import './index.scss'
import { Box, AppBar, Toolbar, Button, IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LoginButton from "components/_buttons/LoginButton"
import TemporarySidebar from 'components/_nav/TemporarySidebar'
import MicIcon from '@mui/icons-material/Mic';
const Header = () => {

  return (
      <AppBar position="fixed" color="inherit" elevation={0} sx={{height: "7em"}}>
        <Toolbar disableGutters={true}>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" px={2}>

          {/***** Left Menu + Logo *****/}
          <Box display="flex" alignItems="center" gap={1}>
            <TemporarySidebar />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
              alt="youtube-logo" 
              height="22px"
              style={{paddingRight: "4em"}}
              />
          </Box>
            
        {/***** SearchBar *****/}
          <Box sx={{width:"100%", maxWidth:"650px"}} display="flex" justifyContent="center">
            <TextField 
              variant="outlined"
              placeholder="Rechercher"
              size="small"
              sx={{borderRadius: 0, width: "100%"}}
              inputProps={{style: {fontSize: "1.7rem"}}}
            />
            <Button
              aria-label="magnifying glass"
              sx={{
                border: "1px solid",
                borderColor:"grey.400", // default grey for textField
                borderLeft: "none",
                borderRadius: 0,
                padding: "7px 0", // to have the searchButton's height equals to the textField's height
              }}
              disableRipple
            >
              <SearchIcon sx={{color: "dark.light"}}/>
            </Button>
            <IconButton>
              <MicIcon sx={{fontSize: "2.7rem", color: "dark.main"}}/>

            </IconButton>
          </Box>

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
              <NotificationsNoneIcon sx={{fontSize: "1.7em"}}/>          
            </IconButton>

            <LoginButton />
          </Stack>
          
        </Box>
        </Toolbar>
      </AppBar>
  )
}
    
export default Header