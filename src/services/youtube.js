import axios from 'axios'
import moment from 'moment';
import Cookies from 'js-cookie'
const API = axios.create({ 
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    key: process.env.REACT_APP_YOUTUBE_KEY
  },
});

const authAPI = axios.create({ 
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
});

authAPI.interceptors.request.use(({ headers, ...config }) => ({
  ...config,
  headers: {
      ...headers,
      'Content-Type': 'application/json',
      'Authorization': `Bearer  ${headers.Authorization || Cookies.get('token')}`,
  },
}));

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
      
      // Video infos
      video.thumbnails = item.snippet.thumbnails
      video.thumbnails.best = bestThumbnails(video.thumbnails)
      video.title = item.snippet.localized.title
      video.description = item.snippet.localized.description || ""
      video.duration = formatDuration(item.contentDetails.duration)
      video.categoryId = item.snippet.categoryId
      video.id = item.contentDetails.id
      video.statistics = item.statistics
      video.publishedAt = item.snippet.publishedAt
      
      // Channel infos
      video.channel = {
        title: item.snippet.channelTitle,
        id: item.snippet.channelId,
      }
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
      console.log("lkfjdlksf", item)
      const video = await YTAPIManager.getVideoById(item.id.videoId) 
      return video
    }))

    return videos
  } catch(error) {
    console.log("ERROR: ",error)
    return { error }
  }
}

const buildSubscriptions = async (data) => {
  try {
    const subscriptions = data.items.map( item => {
      console.log("lkfjdlksf", item)
      const subscription = {
        id: item.id,
        channelId: item.snippet.resourceId.channelId,
        channelTitle: item.snippet.title,
        channelthumbnails: {
          ...item.snippet.thumbnails,
          best: bestThumbnails(item.snippet.thumbnails)
        }
      }
      return subscription
    })

    return subscriptions
  } catch(error) {
    console.log("ERROR: ",error)
    return { error }
  }
}


export default class YTAPIManager {
    
  static async getMostPopular() {
    const videoResponse = await API.get(`videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=25`)
    console.log("APIM # getMostPopular", videoResponse)

    const videos = await buildVideoObj(videoResponse.data)
    
    return videos
  }

  static async getChannelThumbnails(channelId) {
    const channelResponse = await API.get(`channels?part=snippet&id=${channelId}`)
    // console.log("APIM # getChannelThumbNail ", channelResponse)
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
    console.log("APIM # getVideoSearch", videoResponse)
    
    const videos = await buildVideoSearchObj(videoResponse.data)

    return videos
  }

  static async getVideoById (id) {
    const videoResponse = await API.get(`videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}`)
    // console.log("APIM # getVideoById", videoResponse)
    
    const videos = await buildVideoObj(videoResponse.data)

    return videos[0]
  }

  static async  getSubscriptions () {
    try {
      const subscriptionsResponse = await authAPI.get("/subscriptions?part=snippet%2CcontentDetails&mine=true")
      console.log("APIM # getSubscriptions", subscriptionsResponse)
      
      const subscriptions = await buildSubscriptions(subscriptionsResponse.data)
      console.log("reponse subs", subscriptions)

      return subscriptions
    } catch (error) {
      console.log("APIM # getSubscriptions", error)
      return {error}
    }
  }

}
