import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SideBarSymbolOnly from './sideBarSymbolOnly';
import { API_KEY } from '../utils/constants';
import { FaCircleCheck } from "react-icons/fa6";
import { AiTwotoneLike } from "react-icons/ai";
import { PiShareFatDuotone } from "react-icons/pi";
import { VIDEO_API } from '../utils/constants';
import sideDisplayVideos_watchpage from './sideDisplayVideos_watchpage';
const WatchPage = () => {
  const [SearchVideoId] = useSearchParams();
  const [currentVideoData, setData] = useState([])
  const [sideDisplayVideos, setDisplayVideos] = useState([])
  const videoId = SearchVideoId.get('v');
  useEffect(() => {
    const getVideoData = async () => {
      const raw = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
      const json = await raw.json();
      console.log(json);
      setData(json?.items[0])
    }
    getVideoData();
  }, [])
  useEffect(() => {
    const getVideoData = async () => {
      const raw = await fetch(VIDEO_API);
      const json = await raw.json();
      setDisplayVideos(json?.items)
    }
    getVideoData()
  }, [])
  return (
    <div className='flex '>
      <SideBarSymbolOnly />
      <div className='pt-8 '>
        <iframe width={400} height={300} style={{ borderRadius: "25px" }}
          src={"https://www.youtube.com/embed/" + videoId}
          title="Video Player"
          frameborder="0"
          className='rounded-xl lg:h-[460px] lg:w-[900px]  md:w-[700px] md:h-[420px] p-3 sm:w-[500px] sm:h-[300px]'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media
           ; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <h1 className='text-2xl p-1 font-semibold  lg:w-[900px]  md:w-[700px]   sm:w-[500px]'>{currentVideoData?.snippet?.title}</h1>
        <div className='flex justify-between items-center  lg:w-[900px]  md:w-[700px]  p-3 sm:w-[500px] '>
          <div className='flex flex-col'> <h2 className='flex items-center gap-1 text-xl font-bold'><FaCircleCheck />
            {currentVideoData?.snippet?.channelTitle}
          </h2>
            <h2 className='font-semibold pl-6'>{currentVideoData?.statistics?.viewCount} Views</h2></div>
          <div className='flex gap-4'>
            <button className='flex items-center gap-1 border-slate-300 border rounded-full text-xl font-semibold px-5 py-2'>
              <AiTwotoneLike className='text-2xl' />
              Like</button>
            <button className='flex items-center gap-1 border-slate-300 border rounded-full text-xl font-semibold px-5 py-2'><PiShareFatDuotone className='text-2xl' />
              Share</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        {
            sideDisplayVideos.map((items)=>{
              
            })
        }
      </div>
    </div>
  )
}

export default WatchPage
