import React, { useEffect, useState } from 'react'
import { COMMENTS } from '../utils/__mocks__'
import { FaUserLarge } from "react-icons/fa6";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";

const CommentSection = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        setComments(COMMENTS)
        console.log(comments);
    }, [comments])
    return (
        comments.map((com) => {
            return <div className='flex flex-col gap-[2px] py-2 border-b-slate-100 border-b'>
                <h1 className='flex items-center gap-2 font-semibold'><FaUserLarge />
                    {com?.name}</h1>
                <h1 className='pl-5'>{com?.comment}</h1>
                <h1 className='pl-5 text-2xl flex items-center gap-6' >
                    <BiLike />
                    <BiDislike />


                </h1>
            </div>
        })
    )
}

export default CommentSection
