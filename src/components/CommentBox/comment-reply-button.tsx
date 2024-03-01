import React from 'react'
import Icon from '../Icon'
import { HiChevronDown } from "react-icons/hi";

const CommentReplyButton = () => {
  return (
    <div className='px-3 py-2 rounded-2xl hover:bg-[#263850] w-fit text-[#3da1f7] flex items-center gap-x-3'>
        <HiChevronDown size={20}/>
        1 respuesta
    </div>
  )
}

export default CommentReplyButton