import React from 'react'
import { Typography } from '@mui/material'
import formatPublishDate from 'helpers/formatPublishDate'
import addSpaceToNumber from 'helpers/addSpaceToNumbers'
import formatBigNumber from 'helpers/formatBigNumber'

const Statistics = ({video, style={}, compact=true }) => {
  
  const handleViews = () => {
    console.log("//////////////////////////////")
    console.log(video.statistics)
    return compact ?
      formatBigNumber(video.statistics.viewCount) :
      addSpaceToNumber(video.statistics.viewCount)
  }
  

  return (
    <Typography variant="videoSubtitle" align="center" sx={style}>
      { handleViews() } vues
      <span style={{margin: "0 4px"}} >•</span>
      Il y a {formatPublishDate(video.publishedAt)}
    </Typography>
  )
}
export default Statistics