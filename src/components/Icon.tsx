import Image from 'next/image'
import React, { ReactNode } from 'react'
interface Props{
  children: ReactNode
  bgFill?: boolean 
  size?: number
}
const Icon = ({ children, bgFill = false, size = 40 }: Props) => {
  return (
    <div style={{width:size, height:size}} className={`${ bgFill ? 'bg-[#272727] hover:bg-[#3e3e3e]': 'hover:bg-[#272727]' } flex justify-center items-center rounded-full `}>
       { children }
    </div>
  )
}

export default Icon