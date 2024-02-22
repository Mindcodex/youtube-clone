import VideoCardTitle from './video-card-title'
import VideoCardUsername from './video-card-username'
import VideoCardMetrics from './video-card-metrics'
import VideoCardUser from './video-card-user'

const VideoCardDescription = () => {
  return (
    <div className='flex gap-x-3 mt-3'>
      <VideoCardUser/>
      <div className='flex flex-col '>
          <VideoCardTitle/>
          <VideoCardUsername/>
          <VideoCardMetrics/>
      </div>
    </div>
    )
}

export default VideoCardDescription