import Image from 'next/image'
import React from 'react'
import { MiduIcon } from '../../../public/Icons'

const VideoCardUser = () => {
  return (
    <Image src={MiduIcon} alt='a' className='rounded-full w-[36px] h-[36px]' />
  )
}

export default VideoCardUser