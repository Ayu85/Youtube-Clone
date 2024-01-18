import React, { useEffect, useState } from 'react'
import SideBarSymbolOnly from "./SideBarSymbolOnly"
import SideBar from './SIdeBar'
import { liveVideoData } from '../utils/__mocks__'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { LiveVideoCard } from './VideoCard'
const LiveVideosPage = () => {
    const [liveVideos, setLiveVideos] = useState([])
    useEffect(() => {
        setLiveVideos(liveVideoData)
    })
    return (
        <div className='flex  gap-8'>
            <SideBar />
            <div className='flex flex-wrap gap-6 items-center justify-start pt-10  pl-12 overflow-y-scroll h-auto'>
                {/* video container */}
                {
                    liveVideos?.map((items) => {
                        return <Link to={"live/watch" + items.id}><LiveVideoCard {...items} /></Link >
                    })
                }
            </div>
        </div>
    )
}

export default LiveVideosPage
