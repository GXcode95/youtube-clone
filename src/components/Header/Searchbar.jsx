import React from 'react'
import { Box, Button, IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const Searchbar = ({handleSubmit}) => {
  
  return (
    <>
      <Box 
        component="form" 
        display="flex" justifyContent="center" alignItems="center" 
        width="100%"
        onSubmit={handleSubmit}
      >
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


    </>
  )
}
export default Searchbar