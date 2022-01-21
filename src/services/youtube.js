import axios from 'axios'
import moment from 'moment';
import Cookies from 'js-cookie'

const API = axios.create({ 
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    key: process.env.REACT_APP_YOUTUBE_KEY,
    regionCode: "FR"
  },
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
  let seconds = duration.seconds > 9 ? duration.seconds : "0" + duration.seconds 
  return(min + ":" + seconds)
   
}

const buildVideoObj = async (data) => {
  try {
    const videos = await Promise.all(data.items.map( async (item) => {
      const video = {}
      // Video infos
      video.thumbnails = item.snippet.thumbnails
      video.thumbnails.best = bestThumbnails(video.thumbnails)
      video.id = item.contentDetails.id || item.id
      video.title = item.snippet.localized.title
      video.description = item.snippet.localized.description || ""
      video.duration = formatDuration(item.contentDetails.duration)
      video.categoryId = item.snippet.categoryId
      video.statistics = item.statistics
      video.publishedAt = item.snippet.publishedAt
      
      const channelRespsonse = await YTAPIManager.getChannelThumbnails(item.snippet.channelId)
      // Channel infos
      video.channel = {
        title: item.snippet.channelTitle,
        id: item.snippet.channelId,
        statistics: channelRespsonse.statistics,
        thumbnails: {...channelRespsonse.snippet.thumbnails, best:bestThumbnails(channelRespsonse.snippet.thumbnails)},
      }
      
      return video
    }))

    return videos

  } catch(error) {
    return { error }
  }
}

const buildVideoSearchObj = async (data) => {
  try {
    const tempVideos = await Promise.all(data.items.map( async (item) => {
      const video = await YTAPIManager.getVideoById(item.id.videoId) 
      return video
    }))
    // sometimes video don't have snippet, so i won't use this video (to much missing info without snippet)
    // when a video have no snippet the YTAPIManager.getVideoById() function will return undefined
    // so i loop through the tempvideos array to keep only the value that aren't undefined
    const videos = [] 
    tempVideos.map(video => {
        if(video) videos.push(video)
      })

    return videos
  } catch(error) {
    return { error }
  }
}

const buildCommentObj = async (data) => {
  try {
    const comments = await Promise.all(data.items.map( async (item) => {
      const comment = {
        id: item.id,
        text: item.snippet.topLevelComment.snippet.textDisplay,
        viewerRating: item.snippet.topLevelComment.snippet.viewerRating,
        likeCount: item.snippet.topLevelComment.snippet.likeCount,
        publishedAt: item.snippet.topLevelComment.snippet.publishedAt,
        updatedAt: item.snippet.topLevelComment.snippet.updatedAt,
        author: {
          name: item.snippet.topLevelComment.snippet.authorDisplayName,
          avatarUrl: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
          channelUrl: item.snippet.topLevelComment.snippet.authorChannelUrl,
          channelId: item.snippet.topLevelComment.snippet.authorChannelId.value,
        },
      }
      return comment
    }))

    return comments
  } catch (error) {
    return { error }
  }
}


export default class YTAPIManager {
    
  static async getMostPopular(pageToken) {
    const url = pageToken ? 
    `videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=20&pageToken=${pageToken}` :
    `videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=20`
    
    const videoResponse = await API.get(url)

    // console.log("APIM # getMostPopular", videoResponse)

    const videos = await buildVideoObj(videoResponse.data)

    videoResponse.data.nextPageToken ?
      Cookies.set("nextPageToken", videoResponse.data.nextPageToken) :
      Cookies.remove("nextPageToken")

    return videos
  }

  static async getChannelThumbnails(channelId) {
    const channelResponse = await API.get(`channels?part=statistics%2C%20snippet&id=${channelId}`)
    // console.log("APIM # getChannelThumbNail ", channelResponse)
    if (channelResponse.error) {
      // console.log("APIM # getChannelThumbNail # ERROR", channelResponse.error)
      return 
    }
    else {
      return channelResponse.data.items[0]
    }
  }

  static async getVideoSearch(query, pageToken) {
    const url = pageToken ? 
    `search?part=snippet&maxResults=15&q=${query}&pageToken=${pageToken}` :
    `search?part=snippet&maxResults=15&q=${query}`
    const videosResponse = await API.get(url)
    // console.log("APIM # getVideoSearch", videosResponse)
    
    const videos = await buildVideoSearchObj(videosResponse.data)

    videosResponse.data.nextPageToken ?
      Cookies.set("nextPageToken", videosResponse.data.nextPageToken) :
      Cookies.remove("nextPageToken")

    return videos
  }

  static async getVideoById(id) {
    const videoResponse = await API.get(`videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}`)
    // console.log("APIM # getVideoById", videoResponse)
    
    const videos = await buildVideoObj(videoResponse.data)
    return videos[0]
  }

  static async getRelatedVideos(videoId) {
    const videosResponse = await API.get(`search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=15`)

    // console.log("APIM # getRelatedVideo", videosResponse)
    
    const videos = await buildVideoSearchObj(videosResponse.data)

    return videos
  }

  static async getVideoComments(videoId, pageToken) {
    const url = pageToken ? 
      `commentThreads?part=snippet&videoId=${videoId}&pageToken=${pageToken}` :
      `commentThreads?part=snippet&videoId=${videoId}`

    const commentsResponse = await API.get(url)
    // console.log("APIM # getComments", commentsResponse)
    
    const comments = await buildCommentObj(commentsResponse.data)
    // console.log("APIM # getComments # RETURN", comments)

    commentsResponse.data.nextPageToken ?
      Cookies.set("nextPageToken", commentsResponse.data.nextPageToken) :
      Cookies.remove("nextPageToken")

    return comments
  }
}
