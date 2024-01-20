import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SideBarSymbolOnly from './SideBarSymbolOnly';
import { API_KEY } from '../utils/constants';
import { FaCircleCheck } from "react-icons/fa6";
import { AiTwotoneLike } from "react-icons/ai";
import { PiShareFatDuotone } from "react-icons/pi";
import { VIDEO_API } from '../utils/constants';
import SideDisplayVideos_watchpage from './sideDisplayVideos_watchpage';
import VideoDetailsSection_watchpage from './VideoDetailsSection_watchpage';
import VideoPlayer from './VideoPlayer';
// import { Link } from 'react-router-dom';
import { allVideos } from '../utils/__mocks__'
import { useSelector } from 'react-redux';

const WatchPage = () => {
  const [SearchVideoId] = useSearchParams();
  const [currentVideoData, setData] = useState([])
  const [sideDisplayVideos, setDisplayVideos] = useState([])
  const [videos, setVideos] = useState([])
  const theme = useSelector(store => store.theme.isDark)

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
    // const getVideoData2 = async () => {
    //   const raw = await fetch(VIDEO_API);
    //   const json = await raw.json();
    //   setDisplayVideos(json?.items)
    // }
    setDisplayVideos(allVideos)
    // getVideoData2()
  }, [])
  //  console.log("display", sideDisplayVideos);
  return (
    <div className={`flex ${theme && "bg-[#0F0F0F] text-white"}`}>
      <SideBarSymbolOnly />
      <div className='pt-8 ml-10'>
        {/* VIDEO PLAYER AND NAME */}
        <div>
          <VideoPlayer videoId={videoId} currentVideoData={currentVideoData} />
        </div>
        {/* CURRENT VIDEO ABOUT  */}
        <div className={`rounded-xl lg:h-[460px] lg:w-[800px] md:w-[700px] md:h-[420px] p-3 sm:w-[500px] sm:h-[300px]`}>
          <VideoDetailsSection_watchpage {...currentVideoData} />
        </div>
        {/* COMMENT SECTION */}
      </div>

      {/* SIDE DISPLAY VIDEOS */}
      <div className=' flex-col gap-6 w-[380px] ml-10 pt-10 hidden lg:flex'>
        {
          sideDisplayVideos?.map((items) => {
            return <Link to={"/watch?v=" + items.id}><SideDisplayVideos_watchpage {...items} /></Link>
          })
        }
      </div>
    </div>
  )
}

export default WatchPage
