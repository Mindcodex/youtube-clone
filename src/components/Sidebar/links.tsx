import Image from "next/image";
import { GoHome, GoTrophy } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { SuscriptionIcon } from "../../../public/Icons";
import { ReactNode } from "react";
import { ImFire } from "react-icons/im";
import { PiLightbulb, PiMusicNote } from "react-icons/pi";
import { BiMovie, BiNews } from "react-icons/bi";
import { HiMiniSignal } from "react-icons/hi2";
import { IoGameControllerOutline } from "react-icons/io5";
export interface SidebarSections {
    name: string;
    link: string;
    icon: ReactNode
}
const iconSize = 20
export const mainSection = [
    {
        name: 'Principal',
        link: '/',
        icon: <GoHome size={iconSize}/>
    },
    {
        name: 'Shorts',
        link: '/',
        icon: <SiYoutubeshorts size={iconSize}/>
    },
    {
        name: 'Suscripciones',
        link: '/',
        icon: <Image width={iconSize} src={SuscriptionIcon} alt="YT Suscription Icon"/>
    }
]
export const explorerSection = [
    {
        name: 'Tendencias',
        link:'/',
        icon: <ImFire size={iconSize}/>
    },
    {
        name: 'Musica',
        link:'/',
        icon: <PiMusicNote size={iconSize} />
    },
    {
        name: 'Peliculas',
        link:'/',
        icon: <BiMovie size = {iconSize} />
    },    
    {
        name: 'En Vivo',
        link:'/',
        icon: <HiMiniSignal size = {iconSize} />
    },
    {
        name: 'Videojuegos',
        link:'/',
        icon: <IoGameControllerOutline size = {iconSize} />
    },
    {
        name: 'Noticias',
        link:'/',
        icon: <BiNews size={iconSize} />
    },
    {
        name: 'Deportes',
        link:'/',
        icon: <GoTrophy size = {iconSize} />
    },
    {
        name: 'Aprendizaje',
        link:'/',
        icon: <PiLightbulb size = {iconSize} />
    }
]