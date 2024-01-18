import React, { useEffect, useState } from 'react'
import SideBarSymbolOnly from "./SideBarSymbolOnly"
import SideBar from './SIdeBar'
import { liveVideoData } from '../utils/__mocks__'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
const LiveWatchPage = () => {
    const [liveVideos, setLiveVideos] = useState([])
    useEffect(() => {
        setLiveVideos(liveVideoData)
    })
    return (
        <div className='flex  gap-8'>
            <SideBar/>
            <div className='flex flex-wrap gap-6 items-center justify-start pt-5  pl-10 overflow-y-scroll h-auto'>
                {/* video container */}
                {
                    liveVideos?.map((items) => {
                        return <Link to={"/watch?v=" + items.id}><VideoCard {...items} /></Link >
                    })
                }
            </div>
        </div>
    )
}

export default LiveWatchPage
