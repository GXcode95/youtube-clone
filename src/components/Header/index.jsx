import React from 'react'
import './index.scss'
import { Box, AppBar, Toolbar, Button, IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LoginButton from "components/_buttons/LoginButton"
import TemporarySidebar from 'components/_nav/TemporarySidebar'
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from 'react-router-dom';

const Header = ({setSearch}) => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.target.searchbar.value.match(/[a-zAZ0-9]/)) return

    setSearch(e.target.searchbar.value)
    navigate('/research')
  }

  return (
      <AppBar position="fixed" color="inherit" elevation={0} sx={{height: "7em"}}>
        <Toolbar disableGutters={true}>
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" pl={3} pr={2}>

            {/***** Left Menu + Logo *****/}
            <Box display="flex" alignItems="center" gap={2}>
              <TemporarySidebar />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
                alt="youtube-logo" 
                height="22px"
                style={{paddingRight: "4em"}}
              />
            </Box>
              
            {/***** SearchBar *****/}
            <Box component="form" sx={{width:"100%", maxWidth:"650px"}} display="flex" justifyContent="center" alignItems="center" onSubmit={handleSubmit}>
              <TextField 
                name="searchbar"
                variant="outlined"
                placeholder="Rechercher"
                size="small"
                sx={{borderRadius: 0, width: "100%"}}
                inputProps={{style: {fontSize: "1.6rem"}}}
              />
              <Button
                aria-label="magnifying glass"
                disableRipple
                type="submit"
                sx={{
                  border: "1px solid",
                  borderColor:"grey.400", // default grey for textField
                  borderLeft: "none",
                  borderRadius: "0 2px 2px 0" ,
                  padding: "0.6rem 0", // to have the searchButton's height equals to the textField's height
                }}
                className="search-button"
              >
                <SearchIcon sx={{color: "dark.light", fontSize: "2.6rem"}}/>
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