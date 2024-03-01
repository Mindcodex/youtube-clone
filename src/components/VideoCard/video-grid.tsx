import React from 'react'
import VideoCard from './VideoCard'

const VideoGrid = () => {
  return (
    <div className='w-full flex justify-between gap-y-5 flex-wrap mt-5'>
         <VideoCard/>
         <VideoCard/>
         <VideoCard/>
         <VideoCard/>
    </div>
  )
}

export default VideoGrid