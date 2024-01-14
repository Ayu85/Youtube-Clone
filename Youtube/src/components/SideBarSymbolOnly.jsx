import React from 'react'
import { IoIosHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { MdFeaturedPlayList } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaFire } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { FaBagShopping } from "react-icons/fa6";
import { MdSportsCricket } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { SiStudyverse } from "react-icons/si";
const SideBarSymbolOnly = () => {
    return (
        <div className='flex flex-col w-48 gap-6 h-auto pl-3 pt-3'>
            <IoIosHome className='text-4xl text-zinc-700' />
            <SiYoutubeshorts className='text-4xl text-zinc-700' />
            <MdSubscriptions className='text-4xl text-zinc-700' />
            <MdFeaturedPlayList className='text-4xl text-zinc-7' />
            <FaHistory className='text-4xl text-zinc-700' />
            <FaFire className='text-4xl text-zinc-700' />
            <FaBagShopping className='text-4xl text-zinc-700' />
            <SiYoutubemusic className='text-4xl text-zinc-700'/>
            <RiMovie2Fill className='text-4xl text-zinc-700' />
            <IoGameController className='text-4xl text-zinc-700'/>
            <MdSportsCricket className='text-4xl text-zinc-700'/>
            <SiStudyverse className = 'text-4xl text-zinc-700' />
     </div >
    )
}

export default SideBarSymbolOnly
