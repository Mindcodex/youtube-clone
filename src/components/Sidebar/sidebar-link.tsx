import Link from 'next/link'
import React, { ReactNode } from 'react'
import { GoHome } from 'react-icons/go'
interface Props {
    name: string;
    icon: ReactNode;
}
const SidebarLink = ({name, icon}: Props) => {
  return (
    <Link href={'/'} className='w-full h-[38px] hover:bg-[#272727] rounded-xl flex items-center px-[11px] text-sm'>
       {icon}
       <h5 className='ml-[20px]'>{name}</h5>
    </Link>
  )
}

export default SidebarLink