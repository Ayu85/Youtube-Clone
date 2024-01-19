import React from 'react'
import MainContent from './MainContent'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'
const Body = () => {
  const theme = useSelector(store => store.theme.isDark)
  return (
    <div className={`flex py-4 gap-10 ${theme && "bg-[#0F0F0F]"}`}>
      {/* sidebar and maincontainer */}
      <SideBar />
      <MainContent />
    </div>
  )
}

export default Body
