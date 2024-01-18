import React, { useEffect, useState } from 'react'
import { FcOnlineSupport } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../utils/slices/CommentSlice';
const Comments = ({ name, text }) => {
    const sliceComments = useSelector(store => store.comment.data)
    return <div className='flex gap-2 items-center pt-3 shadow-sm pb-1'>
        <FcOnlineSupport className='text-2xl' />
        <div className='font-bold text-lg'>{name}</div>
        <div className='pl-2 pt-[2px]'>{text}</div>
    </div>
}
const LiveChat = () => {
    const sliceComments = useSelector(store => store.comment.data)

    const dispatch = useDispatch();
    useEffect(() => {
        // setInterval(() => {
        //     dispatch(addComment({
        //         name: "Akshay Saini",
        //         text: "This is akshay from UBER"
        //     }))
        // }, 2000);
        
    }, [])
    return (
        <div>
            {sliceComments.map((items) => {
                return <Comments   {...items} />
            })}
            {/* <Comments   {...sliceComments[0]} /> */}
        </div>
    )
}

export default LiveChat
