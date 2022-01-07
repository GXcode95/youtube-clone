import axios from 'axios'
// import Cookies from 'js-cookie'
import moment from 'moment';

const API = axios.create({ 
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    key: process.env.REACT_APP_YOUTUBE_KEY
  }
});

// API.interceptors.request.use(({ headers, ...config }) => ({
//     ...config,
//     headers: {
//         ...headers,
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer   ${headers.Authorization ||  Cookies.get('token')}`,
//     },
// }));




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

const buildVideoObj = async (items) => {
  try {
    const videos = await Promise.all(items.map( async (item) => {
      const video = {}
      
      video.thumbnails = item.snippet.thumbnails
      video.thumbnails.best = bestThumbnails(video.thumbnails)
      video.title = item.snippet.localized.title
      video.description = item.snippet.localized.description
      video.duration = formatDuration(item.contentDetails.duration)
      video.channel = {
        title: item.snippet.channelTitle,
        id: item.snippet.channelId,
        description: item.snippet.description,
        categoryId: item.snippet.categoryId,
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




export default class YTAPIManager {
    
  static async getMostPopular() {
    
    const videoResponse = await API.get(`videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=25`)
   
    console.log("APIM # getMostPopular", videoResponse.data)
    const videos = await buildVideoObj(videoResponse.data.items)
    
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
}