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
import { Link } from 'react-router-dom';
import { RiLiveFill } from "react-icons/ri";

const SideBarSymbolOnly = () => {
    const theme = useSelector(store => store.theme.isDark)
    return (
        <div className={`flex flex-col px-4 gap-3  h-auto pl-2 pt-3 transition-all ${theme && "text-white bg-[#0F0F0F]"}`} >
            <Link to={'/'}><IoIosHome className='text-5xl  cursor-pointer   pb-3 ' /></Link>
            <SiYoutubeshorts className='text-5xl  cursor-pointer   pb-3' />
            <MdSubscriptions className='text-5xl  cursor-pointer   pb-3' />
            <RiLiveFill className=' text-[#FF0000] text-5xl cursor-pointer   pb-3' />
            <MdFeaturedPlayList className='text-5xl text-zinc-7 cursor-pointer   pb-3' />
            <FaHistory className='text-5xl  cursor-pointer   pb-3' />
            <FaFire className='text-5xl  cursor-pointer   pb-3' />
            <FaBagShopping className='text-5xl  cursor-pointer   pb-3' />
            <SiYoutubemusic className='text-5xl  cursor-pointer   pb-3' />
            <RiMovie2Fill className='text-5xl  cursor-pointer   pb-3' />
            <IoGameController className='text-5xl  cursor-pointer   pb-3' />
            <MdSportsCricket className='text-5xl  cursor-pointer   pb-3' />
            <SiStudyverse className='text-5xl  cursor-pointer   pb-3' />
        </div >
    )
}

export default SideBarSymbolOnly
