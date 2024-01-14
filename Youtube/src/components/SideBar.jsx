import React from 'react'
import { IoIosHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { MdFeaturedPlayList } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
const SideBar = () => {
    return (
        <div className='w-72 pt-3 hidden lg:block'>
            <div className='list-none  font-semibold pl-3 tracking-wide text-lg border-b border-slate-300'>
                <li className='flex mb-3 items-center gap-3'><IoIosHome className='text-3xl' />Home</li>
                <li className='flex mb-3 items-center gap-3'> <SiYoutubeshorts className='text-3xl' />Shorts</li>
                <li className='flex mb-3 items-center gap-3'> <MdSubscriptions className='text-3xl' />Subscriptions</li>
            </div>
            <div className='list-none font-semibold pl-3 tracking-wide text-lg mt-6'>
                <li className='flex mb-3 items-center gap-3'><MdFeaturedPlayList className='text-3xl' />You </li>
                <li className='flex mb-3 items-center gap-3'> <FaHistory className='text-3xl' />History</li>
            </div>
        </div>
    )
}

export default SideBar
