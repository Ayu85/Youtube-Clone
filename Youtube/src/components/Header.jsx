import React from 'react'
import mainLogo from "../assets/yt-logo-main.png"
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
    return (
        <div className='flex   justify-between py-4 px-3'>
            <div className='flex gap-2 items-center  '>
                <GiHamburgerMenu className='text-3xl ' />
                <img src={mainLogo} alt=""  className='' width={110} />
            </div>
            <div className='flex '>
                <input type="text" placeholder='Search' className='border-slate-300 border pl-3  py-2 max-md:w-[200px] max-sm:w-[100px]  w-[500px] rounded-l-full' name="" id="" />
                <button className='py-2 font-bold px-4 rounded-r-full border text-xl border-l-white border-slate-300'><IoIosSearch /></button>
            </div>
            <div className='text-3xl'>
                <FaUserCircle />
            </div>
        </div>
    )
}

export default Header
