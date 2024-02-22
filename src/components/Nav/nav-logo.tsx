import Image from "next/image";
import { BurgerIcon, YoutubeLogo } from "../../../public/Icons";

import React from 'react'
import Icon from "../Icon";

const NavLogo = () => {
  return (
    <div className="flex gap-x-[16px]">
        <Icon>
        <Image src={BurgerIcon} width={28} alt="Youtube clone burger icon"/>
        </Icon>
          <Image src={YoutubeLogo} width={90} alt="Youtube Logo"/>
    </div>
  )
}

export default NavLogo