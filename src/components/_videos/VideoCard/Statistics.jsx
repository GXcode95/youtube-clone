import React from 'react'
import { Typography } from '@mui/material'
import formatPublishDate from 'helpers/formatPublishDate'
const Statistics = ({video, style={} }) => {

  return (
    <Typography variant="videoSubtitle" align="center" sx={style}>
      { video.statistics.viewCount } vues<span style={{margin: "0 4px"}} >•</span> Il y a {formatPublishDate(video.publishedAt)}
    </Typography>
  )
}
export default Statistics