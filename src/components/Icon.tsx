import Image from 'next/image'
import React, { ReactNode } from 'react'
interface Props{
  children: ReactNode
  bgFill?: boolean 
}
const Icon = ({ children, bgFill = false }: Props) => {
  return (
    <div className={`w-[40px] h-[40px] ${ bgFill ? 'bg-[#272727] hover:bg-[#3e3e3e]': 'hover:bg-[#272727]' } flex justify-center items-center rounded-full `}>
       { children }
    </div>
  )
}

export default Icon