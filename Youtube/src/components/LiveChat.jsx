import React, { useEffect, useState } from 'react'
import { FcOnlineSupport } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { addComment, removeComment } from '../utils/slices/CommentSlice';
const Comments = ({ name, text, logo }) => {
    return <div className='cmnt flex gap-2 items-center pt-3 shadow-sm pb-1'>
        <img src={logo} alt="" width={20} />
        <div className='font-bold text-lg'>{name}</div>
        <div className='pl-2 pt-[2px]'>{text}</div>
    </div>
}
const LiveChat = () => {
    const sliceComments = useSelector(store => store.comment.data)

    const dispatch = useDispatch();
    useEffect(() => {
        setInterval(() => {
            dispatch(addComment({
                name: "Akshay Saini",
                text: "This is akshay from UBER",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9t4ColDnY4w2KJuyo3VQk9l41rWpG35ullBgK_N31C9lKwMVdS9qm90BkeLUKStT4oY & usqp=CAU"
            }))
        }, 3000);
      
         setInterval(() => {
             dispatch(removeComment())
         }, 80000)

    }, [])
    return (
        <div>
            {
                sliceComments.map((items) => {
                    return <Comments   {...items} />
                })
            }
            
        </div>
    )
}

export default LiveChat
