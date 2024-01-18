import React from 'react'
import { useState, useEffect } from 'react'
import SideBarSymbolOnly from './SideBarSymbolOnly'
import VideoPlayer from './VideoPlayer'
import { useSearchParams } from 'react-router-dom'
import { API_KEY } from '../utils/constants'
import LiveChat from './LiveChat'
const LiveWatchPage = () => {
    const [currentVideoData, setData] = useState([])
    const [rawvideoId] = useSearchParams();
    const videoId = rawvideoId.get("v")
    useEffect(() => {
        const getVideoData = async () => {
            const raw = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
            const json = await raw.json();
            console.log(json);
            setData(json?.items[0])
        }
        //  getVideoData();
    }, [])
    return (
        <div className='flex '>
            <SideBarSymbolOnly />
            <div className='pt-5 ml-10'>
                <VideoPlayer videoId={videoId} currentVideoData={currentVideoData} />
            </div>
            <div className='pt-8 w-full ml-20 mr-10 rounded-xl px-3 '>
                <LiveChat />
            </div>
        </div>
    )
}

export default LiveWatchPage
