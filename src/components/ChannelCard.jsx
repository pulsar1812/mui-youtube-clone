import React from 'react'
import { Link } from 'react-router-dom'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alighItems: 'center',
        width: { xs: '22.25rem', md: '20rem' },
        height: '20.375rem',
        margin: 'auto',
        marginTop,
        boxShadow: 'none',
        borderRadius: '1.25rem',
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: '12rem',
              width: '12rem',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}{' '}
            <CheckCircle sx={{ fontSize: 16, color: 'gray', ml: '0.3rem' }} />
          </Typography>
          {parseInt(
            channelDetail?.statistics?.subscriberCount
          ).toLocaleString()}{' '}
          Subscribers
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
