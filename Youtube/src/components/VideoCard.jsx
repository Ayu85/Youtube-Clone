import React from 'react'

const VideoCard = ({ snippet,statistics }) => {
    return (
        <div className='w-96 h-72 m-3 '>
            <img src={snippet?.thumbnails?.maxres?.url} width={350} className='rounded-xl' alt="" />
            <h1 className='w-[280px] font-bold text-lg text-slate-700'>{snippet.title}</h1>
            <h2 className='text-xl font-semibold'>{snippet.channelTitle}</h2>
            <h3>{statistics.viewCount}</h3>
        </div>
    )
}

export default VideoCard
