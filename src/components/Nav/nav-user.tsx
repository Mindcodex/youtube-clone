import React from 'react'
import Icon from '../Icon'
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";

const NavUser = () => {
  return (
    <div className='flex items-center gap-x-[8px]'>
        <Icon>
          <RiVideoAddLine size={20}/>
        </Icon>
        <Icon>
          <FaRegBell size={20}/>
        </Icon>
        <div className='w-[32px] h-[32px] bg-violet-500 rounded-full ml-[14px]'></div>
    </div>
  )
}

export default NavUser