import React, { useState } from 'react'
import { MdDateRange } from "react-icons/md";
import CommentSection from './CommentSection';
import { useSelector } from 'react-redux';
const VideoDetailsSection_watchpage = ({ snippet, statistics }) => {
    const [isViewMore, setViewMore] = useState(false)
    const theme = useSelector(store => store.theme.isDark)
    const date = new Date();
    console.log();
    return (
        <>
            <div className={` cursor-pointer h-[100px] overflow-hidden  px-4 py-3 rounded-xl' ${theme && "bg-[#4f4f4f] rounded-xl"}`} id='about'>
                <div className='flex gap-3 font-semibold justify-between'>
                    <h1>{statistics?.viewCount} Views</h1>
                    <h1 className='flex items-center gap-1'>{date.toDateString(snippet?.publishedAt)}<MdDateRange />
                    </h1>
                    <h1 className='font-bold'>{snippet?.localized?.title.substring(0, 50)}</h1>
                    <button className='font-bold' onClick={() => {
                        // snippet?.tags.map((tag) => {
                        //     return <h1>#{tag}</h1>
                        // })
                        if (!isViewMore) {
                            document.getElementById('about').style.height = '400px'
                            document.getElementById('about').style.transition = ' all '
                            setViewMore(true)
                        }
                        else {
                            document.getElementById('about').style.height = '100px'
                            document.getElementById('about').style.transition = ' all '
                            setViewMore(false)
                        }

                    }}>{isViewMore ? '...view less' : '...view more'}</button>
                </div>
                <h1>{snippet?.description?.substring(0, 100)}</h1>
                {<div className='text-blue-600 font-semibold mt-5 '>
                    {snippet?.tags?.map((tag) => {
                        return <h1>#{tag}</h1>
                    })}
                </div>}


            </div>
            <div >
                <h1 className='text-xl font-bold pl-3 py-3'>Comments : </h1>
                <CommentSection />
            </div>

        </>
    )
}

export default VideoDetailsSection_watchpage
