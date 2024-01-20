import React from 'react'
import { ISO8601toDuration } from '../utils/useTime';
import { FcOk } from "react-icons/fc"
import { FaUserCircle } from "react-icons/fa";
import { MdOnlinePrediction } from "react-icons/md";
import { useSelector } from 'react-redux';
const VideoCard = ({ snippet, statistics, contentDetails }) => {
    const duration = ISO8601toDuration(contentDetails?.duration);
    const theme = useSelector(store => store.theme.isDark)
    return (
        <div className={`relative w-[375px] h-[330px] py-1   shadow-lg shadow-slate-200 ${theme && "text-slate-50 shadow-[#2c2c2c9d]  "}`}>
            <div className='relative'>
                <img src={snippet?.thumbnails?.maxres?.url} width={375} className='absolute rounded-xl' alt="" />
                <h4 className='absolute bg-[#000000ad] text-sm text-white px-2 py-1 rounded-lg top-48 right-2'>{duration || ""}</h4>
            </div>
            <h1 className={`w-[330px] h-14 overflow-hidden font-semibold text-lg text-slate-700 ml-3 mt-[215px]  ${theme && "text-slate-300"}`}>{snippet.title}</h1>
            <h2 className={`flex items-center gap-2 text-lg font-bold  ml-3 ${theme&& "text-slate-300"}`}> <FaUserCircle className='text-[#FF0000] text-2xl' />{snippet.channelTitle}</h2>
            <h3 className=' ml-3'>{statistics.viewCount} Views</h3>

        </div>
    )
}
// higher order functions
export const LiveVideoCard = ({ snippet, statistics, contentDetails }) => {

    return (
        <div className='relative'>
            <VideoCard snippet={snippet} statistics={statistics} contentDetails={contentDetails} />
            <div className=' top-2 left-2 absolute flex bg-[#000000b9] px-2 rounded-lg font-bold 
                text-xl items-center gap-1'>
                <MdOnlinePrediction className=' text-[#FF0000] ' />
                <h1 className='text-[#FF0000] '>LIVE</h1>
            </div>
        </div>
    )
}
export default VideoCard
