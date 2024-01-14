import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { VIDEO_API } from '../utils/constants'
import VideoCard from './VideoCard'
const MainContent = () => {
    const isSideOpen = useSelector(store => store.slice.value)
    const [videos, setVideos] = useState([])
    useEffect(() => {
        const getVideoData = async () => {
            const raw = await fetch(VIDEO_API);
            const json = await raw.json();
            setVideos(json?.items)
        }
        getVideoData()
    }, [])
    console.log(videos);
    return (
        <div className=' w-[100%]' style={!isSideOpen ? { translate: "-30px", transition: "all .3s ease-in-out ", width: "6000px" } : { transition: "all .3s ease-in-out " }}>
            <div className='font-semibold'>
                {/* button list */}
                <button className='m-2 bg-slate-200 border-slate-300 border px-4 py-1 rounded-lg'>All</button>
                <button className='m-2 bg-slate-200 border-slate-300 border px-4 py-1 rounded-lg'>Shorts</button>
                <button className='m-2 bg-slate-200 border-slate-300 border px-4 py-1 rounded-lg'>Videos</button>
                <button className='m-2 bg-slate-200 border-slate-300 border px-4 py-1 rounded-lg'>Unwatched</button>
                <button className='m-2 bg-slate-200 border-slate-300 border px-4 py-1 rounded-lg'>Watched</button>
                <button className='m-2 bg-slate-200 border-slate-300 border px-4 py-1 rounded-lg'>Recently Uploaded</button>
            </div>
            <div className='flex flex-wrap gap-6 items-center justify-start pt-5  pl-3 overflow-y-scroll h-auto'>
                {/* video container */}
                {
                    videos.map((items)=>{
                        return <VideoCard {...items}/>
                    })
                }
            </div>
        </div>
    )
}

export default MainContent
