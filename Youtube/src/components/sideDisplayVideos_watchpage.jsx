import React from 'react'

const sideDisplayVideos_watchpage = ({ snippet, statistics, contentDetails }) => {
    return (
        <div className='flex justify-between w-[300px] h-44'>
            <div>
                <img src={snippet?.thumbnails?.maxres?.url} width={60} className=' rounded-xl' alt="" />
            </div>
            <div className='flex'>   <h1 className='w-[330px] h-14 overflow-hidden font-semibold text-lg text-slate-700 ml-3 mt-[215px]'>{snippet.title}</h1>
                <h2 className='flex items-center gap-1 text-lg font-bold  ml-3'>{snippet.channelTitle}<FcOk /></h2>
                <h3 className=' ml-3'>{statistics.viewCount} Views</h3></div>
        </div>
    )
}

export default sideDisplayVideos_watchpage
