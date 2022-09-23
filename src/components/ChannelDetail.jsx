import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'

import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()

  console.log({ channelDetail, videos })

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    )

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    )
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(139,208,215,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%',
            height: '18.75rem',
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-6.5rem' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '6.25rem' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
