import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { VIDEO_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { allVideos } from '../utils/__mocks__'
const MainContent = () => {
    const isSideOpen = useSelector(store => store.slice.value)
    const [videos, setVideos] = useState([])
    const theme = useSelector(store => store.theme.isDark)
    useEffect(() => {
        const getVideoData = async () => {
            const raw = await fetch(VIDEO_API);
            const json = await raw.json();
            setVideos(allVideos?.items)
        }
        // getVideoData()
        setVideos(allVideos)
    }, [])
    console.log(videos);
    return (
        <div className=' w-[100%]' >
            <div className='font-semibold'>
                {/* button list */}
                <button className={`m-2 bg-slate-200 border-slate-300 border px-4 py-1 rounded-lg ${theme && "bg-[#3F3F3F] text-white border-none"}`}>All</button>
                <button className={`m-2 bg-slate-200 border-slate-300 border px-4 py-1 rounded-lg ${theme && "bg-[#3F3F3F] text-white border-none"}`}>Shorts</button>
                <button className={`m-2 bg-slate-200 border-slate-300 border px-4 py-1 rounded-lg ${theme && "bg-[#3F3F3F] text-white border-none"}`}>Videos</button>
                <button className={`m-2 bg-slate-200 border-slate-300 border px-4 py-1 rounded-lg ${theme && "bg-[#3F3F3F] text-white border-none"}`}>Unwatched</button>
                <button className={`m-2 bg-slate-200 border-slate-300 border px-4 py-1 rounded-lg ${theme && "bg-[#3F3F3F] text-white border-none"}`}>Watched</button>
                <button className={`m-2 bg-slate-200 border-slate-300 border px-4 py-1 rounded-lg ${theme && "bg-[#3F3F3F] text-white border-none"}`}>Recently Uploaded</button>
            </div>
            <div className='flex flex-wrap gap-6 items-center justify-start pt-5  pl-3 overflow-y-scroll h-auto'>
                {/* video container */}
                {
                    videos?.map((items) => {
                        return <Link to={"/watch?v=" + items.id}><VideoCard {...items} /></Link >
                    })
                }
            </div>

        </div>
    )
}

export default MainContent
