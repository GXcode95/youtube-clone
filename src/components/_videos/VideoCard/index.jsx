import React from 'react'
import CardStandard from './CardStandard.jsx'
import CardLarge from './CardLarge.jsx'
import CardSmall from './CardSmall.jsx'
import CardBig from './CardBig.jsx'
import './index.scss'

const VideoCard = ({video, variant}) => {

  const chooseCard = () => {
    if(variant === "big") return <CardBig video={video} />
    if(variant === "small") return <CardSmall video={video} />
    if(variant === "standard") return <CardStandard video={video} />
    if(variant === "large") return <CardLarge video={video} />
    return <CardLarge video={video} />

  }
  return (

    <>
      {chooseCard()}
    </>

    
  )
}
    
export default VideoCard


