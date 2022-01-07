import React from 'react'
import { Stack, Chip } from '@mui/material'
import './index.scss'
const TagList = ({tags}) => {

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
          label={tag.snippet.title}
          variant="outlined"
          sx={{fontSize: "1.4rem", borderColor: "light.light" }}
        />
      )}
    </Stack>
  )
}
    
export default TagList
