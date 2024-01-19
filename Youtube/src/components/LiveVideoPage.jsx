import React, { useEffect, useState } from 'react'
import SideBarSymbolOnly from "./SideBarSymbolOnly"
import SideBar from './SideBar'
import { liveVideoData } from '../utils/__mocks__'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { LiveVideoCard } from './VideoCard'
import { useSelector } from 'react-redux'
const LiveVideosPage = () => {
    const [liveVideos, setLiveVideos] = useState([])
    useEffect(() => {
        setLiveVideos(liveVideoData)
    })
    const theme = useSelector(store => store.theme.isDark)
    return (
        <div className={`flex ${theme && "bg-[#0F0F0F]"}`}>
            < div > <SideBar />
            </div >
            <div className={`ml-9 flex flex-wrap gap-6 items-center justify-start pt-10  pl-12 overflow-y-scroll h-auto ${theme && "bg-[#0F0F0F]"}`}>
                {/* video container */}
                {
                    liveVideos?.map((items) => {
                        return <Link to={"live/watch?v=" + items.id}><LiveVideoCard {...items} /></Link >
                    })
                }
            </div>
        </div >
    )
}

export default LiveVideosPage
