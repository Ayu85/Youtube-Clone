import React from 'react'

const VideoDetailsSection_watchpage = ({ snippet, statistics }) => {
    const date = new Date();
    console.log();
    return (
        <div>
            <div className='flex gap-3 font-semibold'>
                <h1>{statistics?.viewCount} Views</h1>
                <h1>{date.toDateString(snippet?.publishedAt)}</h1>
                <h1 className='font-bold'>{snippet?.localized?.title}</h1>
            </div>
            <h1>{snippet?.description}</h1>
            <div>
                {snippet?.tags.map((tag) => {
                    return <h1>{tag}</h1>
                })}
            </div>
        </div>
    )
}

export default VideoDetailsSection_watchpage
