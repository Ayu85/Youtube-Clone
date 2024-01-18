import React, { useEffect, useState } from 'react'
import { FcOnlineSupport } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../utils/slices/CommentSlice';
const Comments = () => {
    const sliceComments = useSelector(store => store.comment.data)
    return <div className='flex gap-2 items-center pt-3 shadow-sm pb-1'>
        <FcOnlineSupport className='text-2xl' />
        <div className='font-bold text-lg'>{sliceComments[0].name}</div>
        <div className='pl-2 pt-[2px]'>{sliceComments[0].text}</div>
    </div>
}
const LiveChat = () => {
    const sliceComments = useSelector(store => store.comment.data)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addComment({
            name: "Akshay",
            text: "This is akshay from UBER"
        }))
    }, [])
    return (
        <div>
            <Comments />
        </div>
    )
}

export default LiveChat
