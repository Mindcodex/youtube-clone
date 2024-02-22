import React from 'react'
import SidebarLink from './sidebar-link';
import { SidebarSections } from './links';
interface Props {
    sectionTitle?: string;
    content: SidebarSections[]
}
const SidebarSection = ({ sectionTitle, content }: Props) => {
  return (
    <section className='mt-[15px] pl-[11px] pr-[22px] pb-[11px] border-b border-[#424242] flex flex-col '>
        <h5 className='ml-3 font-semibold'>{ sectionTitle ?? '' }</h5>
        {
            content.map(item =>{
               return <SidebarLink key={item.name} icon={item.icon} name={item.name}/>
            })
        }
    </section>
  )
}

export default SidebarSection