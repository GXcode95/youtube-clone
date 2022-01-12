import React from 'react'
import { Box, Stack, Chip, IconButton} from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './index.scss'
const TagList = ({tags, setSelectedTag, selectedTag }) => {

  const handleClick = (tag) => {
    setSelectedTag(tag)
  }

  const defineChipStyle = (tag) => {
    return (selectedTag && selectedTag.id === tag.id ) ? 
    { fontSize: "1.4rem", border: "none", bgcolor: "black", color: "white" } :
    { fontSize: "1.4rem", borderColor: "light.light" }  
  } 
    
  return (
      <Stack 
        className="invisible-scroll chip-group"
        overflow="scroll"
        direction="row"
        spacing={2} 
        position="sticky"
        bgcolor="light.main"
        mb="2rem" 
        zIndex={10}
        pb={1.5}
        pl={"3rem"}
        pr={"1rem"}
      >
        <Box display="flex" justifyContent="center" alignItems="center" 
          sx={{width: "3.5rem", height: "3.5rem", position: "fixed", bgcolor: "white", transform:"translateX(-3rem)", zIndex: "15"}}
          onClick={e => {
            let cg = document.querySelector(".chip-group")
            cg.scrollLeft += 150
          }}
        >
          <ArrowBackIosIcon sx={{fontSize: "2.5rem", ml: 1}}/>
        </Box>
        
        {tags && tags.map( (tag,i) => 
          <Chip 
          key={i}
          id={`tag ${i}`}
          label={tag.snippet.title}
          variant="outlined"
          sx={e => defineChipStyle(tag)}
          onClick={e  => handleClick(tag)}
          />
        )}
        
        <Box display="flex" justifyContent="center" alignItems="center" 
          sx={{width: "3.5rem", height: "3.5rem", position: "fixed", right: 0, bgcolor: "white", zIndex: "15"}}
          onClick={e => {
            let cg = document.querySelector(".chip-group")
            cg.scrollLeft -= 150
          }}
        >
          <ArrowForwardIosIcon sx={{fontSize: "2.5rem"}}/>
        </Box>

      </Stack>
  )
}
    
export default TagList
