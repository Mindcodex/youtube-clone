import React from 'react'
import Icon from '../Icon'
import { BsFilterLeft } from "react-icons/bs";
import { BsChevronExpand } from "react-icons/bs";

const CommentFilter = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-x-4'>
        <h4>76 comentarios</h4>
        <div className='p-2 flex rounded-2xl'>
          <BsFilterLeft size={24}/>
          <h5>Ordenar por</h5>
        </div>
      </div>
      <Icon>
        <BsChevronExpand size={24}/>
      </Icon>
    </div>
  )
}

export default CommentFilter