import React, { useEffect, useState } from 'react'
import { FcOnlineSupport } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { addComment, removeComment } from '../utils/slices/CommentSlice';
import useName from '../utils/useName';
const Comments = ({ name, text, logo }) => {
    return <div className=' flex gap-2 items-center pt-3 shadow-sm pb-1'>
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
            const username = useName();
            dispatch(addComment({
                name: username,
                text: `This is ${username} from UBER`,
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9t4ColDnY4w2KJuyo3VQk9l41rWpG35ullBgK_N31C9lKwMVdS9qm90BkeLUKStT4oY & usqp=CAU"
            }))
        }, 3000);

        setInterval(() => {
            dispatch(removeComment())
        }, 10000)

    }, [])
    return (
        <div className='flex flex-col-reverse'>
            {
                sliceComments.map((items) => {
                    return <Comments   {...items} />
                })
            }

        </div>
    )
}

export default LiveChat
