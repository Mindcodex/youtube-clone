import React from 'react'
import VideoCardUser from '../VideoCard/video-card-user'
import VideoCardUsername from '../VideoCard/video-card-username'
import VideoCardMetrics from '../VideoCard/video-card-metrics'
import Image from 'next/image'
import { MiduIcon } from '../../../public/Icons'
import VideoOwnerDescription from './video-owner-description'

const ChannelOwner = () => {
  return (
    <div className='flex gap-x-4 items-center ml-2 mt-2 justify-between'>
      <div className='flex gap-x-4 items-center'>
        <Image src={MiduIcon} alt='a' className='rounded-full w-[36px] h-[36px]' />
        <VideoOwnerDescription/>
      </div>
      <div className='bg-white text-[#0f0f0f] flex justify-center items-center px-4 py-2 rounded-3xl text-sm'>
        Suscribirse
      </div>
    </div>
  )
}

export default ChannelOwner