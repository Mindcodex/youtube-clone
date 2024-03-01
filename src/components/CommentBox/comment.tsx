import Image from 'next/image'
import React from 'react'
import { MiduIcon } from '../../../public/Icons'
import CommentReport from './comment-report'
import CommentButtons from './comment-buttons'
import CommentReplyButton from './comment-reply-button'

const Comment = () => {
  return (
    <div className='flex gap-x-3 mt-5 '>
      <div className='w-6 h-6 bg-sky-600 rounded-full flex justify-center items-center text-sm'>
        R
      </div>
      <div className='w-full text-sm flex flex-col'>
        <div className='flex justify-between'>
            <div className='flex'>
                <h5 className='pb-[2px] mr-1 text-[13px]'>@richardsrodas.p495</h5>
                <span className='text-[#aaa] text-[13px]'>hace 11 dias</span>
            </div>
            <CommentReport/>
        </div>
        <div className='font-light'>
            50% del video: El Tato . 20%: Angula . 29%: React . 1% Los Datos dan poder.
        </div>
        <CommentButtons/>
        <CommentReplyButton/>
      </div>
      
    </div>
  )
}

export default Comment