import { useEffect, useState } from 'react'
import YTAPIManager from 'services/youtube'

export default function useMostPopularVideos(pageToken) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [videos, setVideos] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(
    () => {
      setLoading(true)
      setError(false)

      const response = await YTAPIManager.getMostPopular(pageToken)
      try {
        console.log("res", res)
        
        setVideos(prev => [...prev, ...response.videos] )
        
        pageToken ? setHasMore(true) : setHasMore(false) 
        
        setLoading(false)
      } catch (error) { 
        setError(true)
      }

    }, [query, pageNumber]
  )
  console.log("return")
  console.log("loading", loading)
  console.log("error", error)
  console.log("videos", videos)
  return { loading, error, videos, hasMore }
}