import React from 'react'
import { Avatar, Box, Button, IconButton, Stack, Typography } from '@mui/material'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import formatPublishDate from 'helpers/formatPublishDate'

const CommentCard = ({comment}) => {


  const handleDate = (comment) => {
    let date = formatPublishDate(comment.updatedAt) 
    if (comment.updatedAt !== comment.publishedAt)
      date += " (modifié)"
    return date
  }

  return (
    <Box display="flex" gap={2}>
      <Avatar sx={{height: 40, width: 40}}>
        <img src={comment.author.avatarUrl} />
      </Avatar>
      {console.log("comment", comment)}
      <Box>
        <Stack direction="row" spacing={1} mb={0.5}>
          <Typography sx={{fontSize: "1.3rem", fontWeight: 600}}>{comment.author.name}</Typography>
          <Typography variant="videoSubtitle">il y a {handleDate(comment)}</Typography>
        </Stack>
        <Typography sx={{fontSize: '1.4rem'}}>
          {comment.text}
        </Typography>
        <Box display="flex" alignItems="center" my={0.4}>
          <IconButton>
            <ThumbUpOutlinedIcon sx={{fontSize:'1.6rem'}}/>
          </IconButton>
          <Typography mr={0.8} sx={{fontSize: "1.2rem"}}>
            {comment.likeCount}
          </Typography>
          <IconButton>
            <ThumbDownAltOutlinedIcon />
          </IconButton>
          <Button variant="text" sx={{fontSize: "1.2rem",color: "dark.light"}}>Répondre</Button>
        </Box>
      </Box>
    </Box>
  )
}
    
export default CommentCard
