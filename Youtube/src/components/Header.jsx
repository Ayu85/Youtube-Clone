import React from 'react'
import mainLogo from "../assets/yt-logo-main.png"
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../utils/slices/HamburgerSlice';
const Header = () => {
    const dispatch = useDispatch();
    const isClicked = useSelector(store => store.slice.value)
    // console.log(isClicked);
    return (
        <div className='flex   justify-between py-4 px-3 shadow-slate-100  shadow-lg'>
            <div className='flex gap-2 items-center pl-2 '>
                <GiHamburgerMenu className='text-3xl cursor-pointer hover:bg-slate-300 hover:rounded-full transition-all ' onClick={() => {
                    !isClicked ? dispatch(setValue(true)) : dispatch(setValue(false))
                }} />
                <img src={mainLogo} alt="" className='' width={110} />
            </div>
            <div className='flex '>
                <input type="text" placeholder='Search' className='  border-slate-300 border pl-3  py-2 max-md:w-[200px] max-sm:w-[100px]  w-[500px] rounded-l-full' name="" id="" />
                <button className='py-2 font-bold px-4 rounded-r-full border text-xl border-l-white border-slate-300'><IoIosSearch /></button>
            </div>
            <div className='text-3xl'>
                <FaUserCircle />
            </div>
        </div>
    )
}

export default Header
