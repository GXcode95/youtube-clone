import React from 'react'
import { Stack, Chip } from '@mui/material'
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
      zIndex={10}
      bgcolor="light.main"
      mb="2rem" 
      pb={1.5}
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
      {console.log("tagtag => ", selectedTag)}
    </Stack>
  )
}
    
export default TagList
