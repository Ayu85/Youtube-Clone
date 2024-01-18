import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";
import { PiShareFatDuotone } from "react-icons/pi";
const VideoPlayer = ({videoId,currentVideoData}) => {
    return (
        <div>  <iframe width={400} height={300} style={{ borderRadius: "25px" }}
            src={"https://www.youtube.com/embed/" + videoId}
            title="Video Player"
            frameborder="0"
            className='rounded-xl lg:h-[460px] lg:w-[800px]  md:w-[700px] md:h-[420px] p-3 sm:w-[500px] sm:h-[300px]'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media
     ; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            <h1 className='text-xl pl-4 font-semibold  lg:w-[800px]  md:w-[700px]   sm:w-[500px]'>{currentVideoData?.snippet?.title}</h1>
            <div className='flex justify-between items-center  lg:w-[800px]  md:w-[700px]  p-3 sm:w-[500px] '>
                <div className='flex flex-col '> <h2 className='flex items-center gap-1 text-xl font-bold'>
                    <FaUserCircle className='text-4xl' />{currentVideoData?.snippet?.channelTitle}
                </h2>
                    {/* <h2 className='font-semibold pl-6'>{currentVideoData?.statistics?.viewCount} Views</h2> */}
                </div>
                <div className='flex gap-4'>
                    <button className='flex items-center gap-1 border-slate-300 border rounded-full text-xl font-semibold px-5 py-2'>
                        <AiTwotoneLike className='text-2xl' />
                        Like</button>
                    <button className='flex items-center gap-1 border-slate-300 border rounded-full text-xl font-semibold px-5 py-2'><PiShareFatDuotone className='text-2xl' />
                        Share</button>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer
