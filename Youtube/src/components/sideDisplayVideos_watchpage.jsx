import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
const SideDisplayVideos_watchpage = ({ snippet, statistics, contentDetails }) => {
    return (
        <div className='flex justify-between items-center h-28 '>
            <div>
                <img src={snippet?.thumbnails?.standard?.url}   className=' h-28 w-52  md:rounded-none rounded-xl' alt="" />
            </div>
            <div ><h1 className='w-[200px] h-12 b line-clamp-2 overflow-hidden font-bold text-base text-slate-700 ml-3 '>{snippet?.title}</h1>
                <h2 className='flex items-center gap-1  font-semibold  ml-3'>{snippet?.channelTitle}<FaCircleCheck /></h2>
                <h3 className=' ml-3'>{statistics?.viewCount} Views</h3></div>
             </div>
    )
}

export default SideDisplayVideos_watchpage
