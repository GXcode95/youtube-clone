import axios from 'axios'
import moment from 'moment';

const API = axios.create({ 
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    key: process.env.REACT_APP_YOUTUBE_KEY
  }
});

const bestThumbnails = (thumbnails) => {
  if (thumbnails.maxres) 
    return thumbnails.maxres
  if (thumbnails.high) 
    return thumbnails.high
  if (thumbnails.medium) 
    return thumbnails.medium
  if (thumbnails.standard) 
    return thumbnails.standard
  if (thumbnails.default) 
    return thumbnails.default
}

const formatDuration = (isoDuration) => {
  // Yyoutbe api V3 give duration in ISO 8601 format
  // ex: PT4M13S, PT stand fortime duration , 4M is 4mintues and 13S is 13seconds
  // It can be parse manually be moment offer a faster way
  let duration = moment.duration(isoDuration)._data
  let min = duration.hours * 60 + duration.minutes
  return(min + ":" + duration.seconds)
   
}

const buildVideoObj = async (data) => {
  try {
    const videos = await Promise.all(data.items.map( async (item) => {
      const video = {}
      
      video.thumbnails = item.snippet.thumbnails
      video.thumbnails.best = bestThumbnails(video.thumbnails)
      video.title = item.snippet.localized.title
      video.description = item.snippet.localized.description
      video.duration = formatDuration(item.contentDetails.duration)
      video.categoryId = item.snippet.categoryId
      video.channel = {
        title: item.snippet.channelTitle,
        id: item.snippet.channelId,
      }
      video.statistics = item.statistics
      video.publishedAt = item.snippet.publishedAt
      const resp = await YTAPIManager.getChannelThumbnails(item.snippet.channelId)
      video.channel.thumbnails  = resp
      video.channel.thumbnails.best = bestThumbnails(resp)
      return video
    }))
    return videos

  } catch(error) {
    console.log("ERROR: ",error)
    return { error }
  }
}

const buildVideoSearchObj = async (data) => {
  try {
    const videos = await Promise.all(data.items.map( async (item) => {
      const video = {}
      
      video.thumbnails = item.snippet.thumbnails
      video.thumbnails.best = bestThumbnails(video.thumbnails)
      video.title = item.snippet.title
      video.description = item.snippet.description
      // video.duration = formatDuration(item.contentDetails.duration)
      video.duration = '00:00'
      video.categoryId= item.snippet.categoryId

      video.channel = {
        title: item.snippet.channelTitle,
        id: item.snippet.channelId,
      }
      // video.statistics = item.statistics
      video.statistics = {
        "viewCount": "3478285",
        "likeCount": "263599",
        "favoriteCount": "0",
        "commentCount": "24677"
      }
      video.publishedAt = item.snippet.publishedAt

      const resp = await YTAPIManager.getChannelThumbnails(item.snippet.channelId)
      video.channel.thumbnails  = resp
      video.channel.thumbnails.best = bestThumbnails(resp)
      
      return video
    }))
    return videos

  } catch(error) {
    console.log("ERROR: ",error)
    return { error }
  }
}

export default class YTAPIManager {
    
  static async getMostPopular() {
    const videoResponse = await API.get(`videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=25`)
    console.log("APIM # getMostPopular", videoResponse.data)

    const videos = await buildVideoObj(videoResponse.data)
    
    return videos
  }

  static async getChannelThumbnails(channelId) {
    const channelResponse = await API.get(`channels?part=snippet&id=${channelId}`)
    if (channelResponse.error) {
      console.log("APIM # getChannelThumbNail # ERROR", channelResponse.error)
      return 
    }
    else {
      return channelResponse.data.items[0].snippet.thumbnails
    }
  }

  static async getVideoSearch(query) {
    const videoResponse = await API.get(`search?part=snippet&maxResults=15&q=${query}`)
    console.log("APIM # getMostPopular", videoResponse.data)
    
    const videos = await buildVideoSearchObj(videoResponse.data)

    return videos
  }
}