import React from 'react'
import Icon from '../Icon'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const CommentButtons = () => {
  return (
    <div className='flex items-center'>
        <div className='flex'>
            <Icon size={32}>
                <AiOutlineLike size={20}/>
            </Icon>
            <Icon size={32}>
                <AiOutlineDislike size={20} className='rotate-180'/>
            </Icon>
        </div>
        <div className='text-[12px] px-3 py-1 hover:bg-[#3e3e3e] rounded-2xl'>
            Responder
        </div>
    </div>
  )
}

export default CommentButtons