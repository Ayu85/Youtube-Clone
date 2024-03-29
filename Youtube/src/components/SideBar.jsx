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
import SideBarSymbolOnly from './SideBarSymbolOnly';
import { RiLiveFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
const SideBar = () => {
    const theme = useSelector(store => store.theme.isDark)
    const isClicked = useSelector(store => store.slice.value)
    // console.log(isClicked);
    return !isClicked ? <SideBarSymbolOnly /> : (
        <div className={`w-72 pt-3  overflow-y-scroll h-[100vh] scroll-smooth ${theme && "bg-[#0F0F0F] text-white font-light"}`} style={!isClicked ? { translate: "-265px" } : {}}>
            <div className='list-none  font-semibold pl-6 tracking-wide text-lg border-b border-slate-300'>
                <Link to={'/'}>  <li className='flex mb-3 items-center gap-3 cursor-pointer'><IoIosHome className='text-2xl ' />Home</li></Link>
                <li className='flex mb-3 items-center gap-3 cursor-pointer'> <SiYoutubeshorts className={`text-2xl `} />Shorts</li>
                <li className='flex mb-3 items-center gap-3 cursor-pointer'> <MdSubscriptions className='text-2xl ' />Subscriptions</li>
                <Link to={'/watch/live'}><li className='flex mb-3 items-center gap-3 cursor-pointer text-[#FF0000]'> <RiLiveFill className='text-2xl text-[#FF0000]' />Live</li>
                </Link>
            </div>
            <div className='list-none font-semibold pl-6 tracking-wide text-lg mt-6 border-b border-slate-300'>
                <li className='flex mb-3 items-center gap-3 cursor-pointer'><MdFeaturedPlayList className='text-2xl ' />You </li>
                <li className='flex mb-3 items-center gap-3 cursor-pointer'> <FaHistory className='text-2xl ' />History</li>
            </div>
            <div className='list-none font-semibold pl-6 tracking-wide text-lg mt-6 border-b border-slate-300'>
                <h1 className='mb-2 font-bold text-xl'>Explore</h1>
                <li className='flex mb-3 items-center gap-3 cursor-pointer'><FaFire className='text-2xl ' />Trending</li>
                <li className='flex mb-3 items-center gap-3 cursor-pointer'><FaBagShopping className='text-2xl ' />Shopping</li>
                <li className='flex mb-3 items-center gap-3 cursor-pointer'><SiYoutubemusic className='text-2xl ' />Music</li>
                <li className='flex mb-3 items-center gap-3 cursor-pointer'><RiMovie2Fill className='text-2xl ' />Movies</li>
                <li className='flex mb-3 items-center gap-3 cursor-pointer'><IoGameController className='text-2xl ' />Gaming</li>
                <li className='flex mb-3 items-center gap-3 cursor-pointer'><MdSportsCricket className='text-2xl ' />Sports</li>
                <li className='flex mb-3 items-center gap-3 cursor-pointer'><SiStudyverse className='text-2xl ' />Learning</li>

            </div>
            <div className='list-none font-semibold pl-6 tracking-wide text-lg mt-6 border-b border-slate-300'>
                <h1 className='mb-2 font-bold text-xl'>Explore</h1>
                <li className='flex mb-3 items-center gap-3'><FaFire className='text-2xl ' />Trending</li>
                <li className='flex mb-3 items-center gap-3'><FaBagShopping className='text-2xl ' />Shopping</li>
                <li className='flex mb-3 items-center gap-3'><SiYoutubemusic className='text-2xl ' />Music</li>
                <li className='flex mb-3 items-center gap-3'><RiMovie2Fill className='text-2xl ' />Movies</li>
                <li className='flex mb-3 items-center gap-3'><IoGameController className='text-2xl ' />Gaming</li>
                <li className='flex mb-3 items-center gap-3'><MdSportsCricket className='text-2xl ' />Sports</li>
                <li className='flex mb-3 items-center gap-3'><SiStudyverse className='text-2xl ' />Learning</li>

            </div>   <div className='list-none font-semibold pl-6 tracking-wide text-lg mt-6 border-b border-slate-300'>
                <h1 className='mb-2 font-bold text-xl'>Explore</h1>
                <li className='flex mb-3 items-center gap-3'><FaFire className='text-2xl ' />Trending</li>
                <li className='flex mb-3 items-center gap-3'><FaBagShopping className='text-2xl ' />Shopping</li>
                <li className='flex mb-3 items-center gap-3'><SiYoutubemusic className='text-2xl ' />Music</li>
                <li className='flex mb-3 items-center gap-3'><RiMovie2Fill className='text-2xl ' />Movies</li>
                <li className='flex mb-3 items-center gap-3'><IoGameController className='text-2xl ' />Gaming</li>
                <li className='flex mb-3 items-center gap-3'><MdSportsCricket className='text-2xl ' />Sports</li>
                <li className='flex mb-3 items-center gap-3'><SiStudyverse className='text-2xl ' />Learning</li>

            </div>
        </div>
    )
}

export default SideBar
