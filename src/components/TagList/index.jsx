import React from 'react'
import { Box, Stack, Chip } from '@mui/material'
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
        className="invisible-scroll"
        overflow="scroll"
        direction="row"
        spacing={2} 
        position="fixed"
        top="7em"
        bgcolor="light.main"
        mb="2rem" 
        zIndex={10}
        pb={1.5}
        pr={4}
        >
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
      </Stack>
  )
}
    
export default TagList
