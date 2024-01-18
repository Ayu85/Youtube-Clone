import React, { useEffect, useState } from 'react'
import { FcOnlineSupport } from "react-icons/fc";

const Comments = () => {
    return <div className='flex gap-2 items-center pt-3 shadow-sm pb-1'>
        <FcOnlineSupport className='text-2xl' />
        <div className='font-bold text-lg'>Aayush Singh</div>
        <div className='pl-2 pt-[2px]'>This is aayush SDE 1 at AMAZON</div>
    </div>
}
const LiveChat = () => {
    return (
        <div>
            <Comments />
        </div>
    )
}

export default LiveChat
