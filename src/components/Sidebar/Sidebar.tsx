import React from 'react'
import NavLogo from '../Nav/nav-logo'
import SidebarSection from './sidebar-section'
import { explorerSection, mainSection } from './links'


const Sidebar = () => {
  return (
    <>
        <div className='bg-black w-full h-screen absolute top-0 opacity-50'/>
        <div className='absolute w-[218px] h-full top-0 left-0 bg-[#0f0f0f] flex flex-col overlay'>
            <div className="pl-[20px] pt-[14px] mb-[11px]">
                <NavLogo></NavLogo>
            </div>
            <SidebarSection sectionTitle='' content={mainSection} />
            <SidebarSection sectionTitle='Explorar' content={explorerSection} />
        </div>
    </>
    )
}

export default Sidebar