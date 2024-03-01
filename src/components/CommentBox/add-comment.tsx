import Image from 'next/image'
import React from 'react'
import { MiduIcon } from '../../../public/Icons'

const AddComment = () => {
  return (
    <div className='flex gap-x-3 mt-6 mb-[34px]'>
      <Image src={MiduIcon} className='rounded-full' width={24} alt='midu icon'/>
      <div className='w-full h-[25px] text-[#aaa] text-sm border-[#3f3f3f] border-b-[1px] '>Agrega un comentario...</div>
    </div>
  )
}

export default AddComment