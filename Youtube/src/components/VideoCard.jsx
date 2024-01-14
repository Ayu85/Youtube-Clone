import React from 'react'
import { ISO8601toDuration } from '../utils/useTime';
const VideoCard = ({ snippet, statistics, contentDetails }) => {
    const duration = ISO8601toDuration(contentDetails.duration);
    return (
        <div className='relative w-[375px] h-[330px] py-1   shadow-lg shadow-slate-200 '>
            <div className='relative'>
            <img src={snippet?.thumbnails?.maxres?.url} width={375} className='absolute rounded-xl' alt="" />
            <h4 className='absolute bg-[#000000ad] text-sm text-white px-2 py-1 rounded-lg top-48 right-2'>{duration}</h4>
            </div>
            <h1 className='w-[280px] font-bold text-lg text-slate-700 ml-3 mt-[215px]'>{snippet.title}</h1>
            <h2 className='text-lg font-semibold  ml-3'>{snippet.channelTitle}</h2>
            <h3 className=' ml-3'>{statistics.viewCount} Views</h3>
            
        </div>
    )
}

export default VideoCard
