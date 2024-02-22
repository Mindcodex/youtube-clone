import React from 'react'
import VideoCardCover from './video-card-cover'
import VideoCardDescription from './video-card-description'

const VideoCard = () => {
  return (
    <div className='w-[400px] flex flex-col gap-x-2'>
        <VideoCardCover/>
        <VideoCardDescription/>
    </div>
  )
}

export default VideoCard