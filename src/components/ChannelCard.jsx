import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box sx={{ boxShadow: 'none', borderRadius: '1.25rem' }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        ></CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
