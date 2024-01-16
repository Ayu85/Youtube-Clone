import React, { useEffect, useState } from 'react'
import mainLogo from "../assets/yt-logo-main.png"
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../utils/slices/HamburgerSlice';
import { SEARCH_API } from '../utils/constants';
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

const Header = () => {
    const dispatch = useDispatch();
    const isClicked = useSelector(store => store.slice.value)
    const [searchText, setSearchText] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [showResults, setShowResults] = useState(false)
    // console.log(isClicked);
    useEffect(() => {
        const getSearchMatch = async () => {
            const raw = await fetch(SEARCH_API + searchText);
            const json = await raw.json();
            setSearchResults(json[1]);
            // console.log(json);
        }
        getSearchMatch();
    }, [searchText])
    console.log(searchResults);
    return (
        <div className='flex   justify-between py-4 px-3 shadow-slate-100  shadow-lg'>
            <div className='flex gap-2 items-center pl-2 '>
                <GiHamburgerMenu className='text-3xl cursor-pointer hover:bg-slate-300 hover:rounded-full transition-all ' onClick={() => {
                    !isClicked ? dispatch(setValue(true)) : dispatch(setValue(false))
                }} />
                <img src={mainLogo} alt="" className='' width={110} />
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
                    type="text" placeholder='Search'
                    className='  border-slate-300 border pl-3  py-2 max-md:w-[200px] max-sm:w-[100px]  w-[500px] rounded-l-full' name="" id="" />
                <button className='py-2 font-bold px-4 rounded-r-full border text-xl border-l-white border-slate-300'><IoIosSearch /></button>
                <div className='absolute
                 h-20 overflow-hidden sm:h-20 sm:overflow-hidden lg:h-auto md:h-auto top-11 left-2 bg-slate-50 py-3 rounded-xl z-50 pl-3
                  max-md:w-[200px] max-sm:w-[100px]  w-[500px] '>
                    {
                        showResults && searchResults.map((results) => {
                            return <h1 className='text-lg flex items-center gap-3 font-semibold
                             border-b-slate-200 border-b py-[1px] hover:bg-slate-200 transition-all cursor-pointer'><IoSearch />
                                {results}</h1>
                        })

                    }

                </div>
            </div>

            <div className='text-3xl'>
                <FaUserCircle />
            </div>
        </div>
    )
}

export default Header
