import React from 'react'
import { useSelector } from 'react-redux'

const MainContent = () => {
    const isSideOpen = useSelector(store => store.slice.value)
    return (
        <div className=' w-[1400px]' style={!isSideOpen ? { translate: "-30px", transition: "all .3s ease-in-out ", width: "6000px" } : { transition: "all .3s ease-in-out "}}>
            <div className='font-semibold'>
                {/* button list */}
                <button className='m-2 border-slate-300 border px-4 py-1 rounded-lg'>All</button>
                <button className='m-2 border-slate-300 border px-4 py-1 rounded-lg'>Shorts</button>
                <button className='m-2 border-slate-300 border px-4 py-1 rounded-lg'>Videos</button>
                <button className='m-2 border-slate-300 border px-4 py-1 rounded-lg'>Unwatched</button>
                <button className='m-2 border-slate-300 border px-4 py-1 rounded-lg'>Watched</button>
                <button className='m-2 border-slate-300 border px-4 py-1 rounded-lg'>Recently Uploaded</button>
            </div>
            <div>
                {/* video container */}
            </div>
        </div>
    )
}

export default MainContent
