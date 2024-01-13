import React from 'react'
import mainLogo from "../assets/yt-logo-main.png"
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
    return (
        <div>
            <div className='flex gap-2 items-center pl-3 pt-2'>
                <GiHamburgerMenu className='text-3xl ' />
                <img src={mainLogo} alt="" width={100} className='h-6' />
            </div>
            <div>
                
            </div>
            <div></div>
        </div>
    )
}

export default Header
