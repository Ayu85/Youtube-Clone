import React, { useEffect, useState } from 'react'
import lightLogo from "../assets/yt-logo-main.png"
import darkLogo from "../assets/yt_logo_rgb_dark.png"
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../utils/slices/HamburgerSlice';
import { SEARCH_API } from '../utils/constants';
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { toogleTheme } from '../utils/slices/ThemeSlice';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import LoginButton from './LoginButton';

const Header = () => {
    const dispatch = useDispatch();
    const isClicked = useSelector(store => store.slice.value)
    const theme = useSelector(store => store.theme.isDark)
    const [searchText, setSearchText] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [showResults, setShowResults] = useState(false)
    console.log(theme);
    useEffect(() => {
        const getSearchMatch = async () => {
            const raw = await fetch(SEARCH_API + searchText);
            const json = await raw.json();
            setSearchResults(json[1]);
            // console.log(json);
        }
        getSearchMatch();
    }, [searchText])
    // console.log(searchResults);
    return (
        <div className={`flex   justify-between py-4 px-3 shadow-slate-100  shadow-lg 
         ${theme && "bg-[#0F0F0F]"}`}>
            <div className='flex gap-2 items-center pl-2 '>
                <RxHamburgerMenu className={`text-3xl cursor-pointer  hover:bg-slate-300 hover:rounded-full transition-all ${theme && "text-white font-extralight"}`} onClick={() => {
                    !isClicked ? dispatch(setValue(true)) : dispatch(setValue(false))
                }} />
                <img src={theme ? darkLogo : lightLogo} alt="" className='' width={110} />
            </div>
            <div className='flex relative '>
                <input
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    onFocus={() => {
                        setShowResults(true)
                    }}
                    onBlur={() => {
                        setShowResults(false)
                    }}
                    type="text" placeholder='Search' value={searchText}
                    className={`   pl-3  py-2 max-md:w-[200px] max-sm:w-[100px]  w-[500px] rounded-l-full ${!theme && "border-slate-300 border"} ${showResults && "outline-[#3C9CEF] outline z-50"} ${theme && "bg-[#0F0F0F] border-[#292929]   border-2 shadow-sm shadow-[#292929] text-gray-300"}`} name="" id="" />
                {searchResults.length !== 0 && <RxCross1 onClick={() => {
                    setSearchText("")
                }} className={`absolute ${theme && "text-white"} ${!theme && "text-slate-700"} right-20 top-[8px] z-50 text-2xl cursor-pointer`} />

                }
                <button className={`py-2 font-bold px-6 rounded-r-full border text-xl   ${!theme && "border-slate-300 border"}  ${theme && "bg-[#292929] border-[#292929] border-2  shadow-sm shadow-[#292929]"}`}><IoIosSearch className={`${theme && "text-white "}`} /></button>

                {showResults && searchResults.length !== 0 && <div className={`absolute h-0 overflow-hidden sm:h-auto sm:overflow-hidden lg:h-auto md:h-auto top-11 left-2 ${!theme && "bg-slate-50"} py-6 rounded-xl z-50 pl-3
                  max-md:w-[200px] max-sm:w-[100px]  w-[500px]    ${theme && "bg-[#292929] border-[#292929] border-2  shadow-lg shadow-[#292929] text-white"}`} >
                    {
                        showResults && searchResults.map((results) => {
                            return <h1 className='text-lg flex items-center gap-3 font-semibold
                             border-[#585858] border-b py-[1px] hover:bg-slate-200 transition-all cursor-pointer'><IoSearch />
                                {results}</h1>
                        })

                    }

                </div>}
            </div>
            {/* theme toogler */}
            <div className=' flex gap-3 items-center pr-2'>
                {/* <FaUserCircle className={`text-3xl ${theme && "text-white"}`} /> */}
                <LoginButton />
                <label className={`relative flex items-center cursor-pointer `}>
                    <input type="checkbox" value="" className="sr-only peer"
                        onChange={(e) => {
                            dispatch(toogleTheme())
                        }}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3C9CEF] "></div>
                    <span className={`ms-3 text-lg font-medium  ${theme && "text-[#3C9CEF]"}`}>Dark Mode</span>
                </label>
            </div>
        </div >
    )
}

export default Header
