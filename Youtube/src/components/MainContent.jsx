import React from 'react'

const MainContent = () => {
    return (
        <div>
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
