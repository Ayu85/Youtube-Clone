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
const SideBar = () => {
    const isClicked = useSelector(store => store.slice.value)
    console.log(isClicked);
    return (
        <div className='w-72 pt-3 hidden lg:block  ' style={!isClicked ? { translate: "-265px", transition: ".3s all ease-in-out" } : { transition: ".3s all ease-in-out" }}>
            <div className='list-none  font-semibold pl-3 tracking-wide text-lg border-b border-slate-300'>
                <li className='flex mb-3 items-center gap-3'><IoIosHome className='text-3xl text-zinc-700' />Home</li>
                <li className='flex mb-3 items-center gap-3'> <SiYoutubeshorts className='text-3xl text-zinc-700' />Shorts</li>
                <li className='flex mb-3 items-center gap-3'> <MdSubscriptions className='text-3xl text-zinc-700' />Subscriptions</li>
            </div>
            <div className='list-none font-semibold pl-3 tracking-wide text-lg mt-6 border-b border-slate-300'>
                <li className='flex mb-3 items-center gap-3'><MdFeaturedPlayList className='text-2xl text-zinc-700' />You </li>
                <li className='flex mb-3 items-center gap-3'> <FaHistory className='text-2xl text-zinc-700' />History</li>
            </div>
            <div className='list-none font-semibold pl-3 tracking-wide text-lg mt-6 border-b border-slate-300'>
                <h1 className='mb-2 font-bold text-xl'>Explore</h1>
                <li className='flex mb-3 items-center gap-3'><FaFire className='text-2xl text-zinc-700' />Trending</li>
                <li className='flex mb-3 items-center gap-3'><FaBagShopping className='text-2xl text-zinc-700' />Shopping</li>
                <li className='flex mb-3 items-center gap-3'><SiYoutubemusic className='text-2xl text-zinc-700' />Music</li>
                <li className='flex mb-3 items-center gap-3'><RiMovie2Fill className='text-2xl text-zinc-700' />Movies</li>
                <li className='flex mb-3 items-center gap-3'><IoGameController className='text-2xl text-zinc-700' />Gaming</li>
                <li className='flex mb-3 items-center gap-3'><MdSportsCricket className='text-2xl text-zinc-700' />Sports</li>
                <li className='flex mb-3 items-center gap-3'><SiStudyverse className='text-2xl text-zinc-700' />Learning</li>

            </div>
        </div>
    )
}

export default SideBar
