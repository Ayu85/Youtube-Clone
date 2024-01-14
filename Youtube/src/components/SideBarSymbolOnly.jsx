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
        <div className='flex flex-col w-48 gap-3  h-auto pl-2 pt-3 transition-all '>
            <IoIosHome className='text-5xl text-zinc-700 cursor-pointer border-b border-slate-300 pb-3 ' />
            <SiYoutubeshorts className='text-5xl text-zinc-700 cursor-pointer border-b border-slate-300 pb-3' />
            <MdSubscriptions className='text-5xl text-zinc-700 cursor-pointer border-b border-slate-300 pb-3' />
            <MdFeaturedPlayList className='text-5xl text-zinc-7 cursor-pointer border-b border-slate-300 pb-3' />
            <FaHistory className='text-5xl text-zinc-700 cursor-pointer border-b border-slate-300 pb-3' />
            <FaFire className='text-5xl text-zinc-700 cursor-pointer border-b border-slate-300 pb-3' />
            <FaBagShopping className='text-5xl text-zinc-700 cursor-pointer border-b border-slate-300 pb-3' />
            <SiYoutubemusic className='text-5xl text-zinc-700 cursor-pointer border-b border-slate-300 pb-3'/>
            <RiMovie2Fill className='text-5xl text-zinc-700 cursor-pointer border-b border-slate-300 pb-3' />
            <IoGameController className='text-5xl text-zinc-700 cursor-pointer border-b border-slate-300 pb-3'/>
            <MdSportsCricket className='text-5xl text-zinc-700 cursor-pointer border-b border-slate-300 pb-3'/>
            <SiStudyverse className = 'text-5xl text-zinc-700 cursor-pointer border-b border-slate-300 pb-3' />
     </div >
    )
}

export default SideBarSymbolOnly
