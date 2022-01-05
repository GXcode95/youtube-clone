import React from 'react'
import './index.scss'
import { Box, AppBar, Toolbar, Button, IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Header = () => {

  return (
    <Box>
      <AppBar position="fixed" color="inherit" elevation={0}>
        <Toolbar>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">

          {/***** Left Menu + Icon *****/}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
              alt="youtube-logo" 
              height="22px"
            />
            
          {/***** SearchBar *****/}
            <Box>
              <TextField 
                variant="outlined"
                sx={{width:"650px"}}
                placeholder="recherche"
                size="small"
              />
              <Button
                aria-label="magnifying glass"
                sx={{
                 border: "1px solid",
                 borderColor:"grey.400", // default grey for textField
                 borderLeft: "none",
                 padding: "7px 0" // to have the searchButton's height equals to the textField's height
                }}
                disableRipple
              >
                <SearchIcon sx={{color: "dark.light"}}/>
              </Button>
            </Box>

          {/***** Right Button Menu *****/}
            <Stack direction="row">
              <IconButton
                size="large"
                aria-label="applications"
              >
                <AppsIcon/>          
              </IconButton>

              <IconButton
                size="large"
                aria-label="notifications"
              >
                <NotificationsNoneIcon />          
              </IconButton>

              <Button variant="outlined" color="inherit" size="small">Login</Button>
            </Stack>
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
    
export default Header