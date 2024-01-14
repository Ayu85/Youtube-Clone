import React from 'react'
import MainContent from './MainContent'
import SideBar from './SIdeBar'
const Body = () => {
  return (
    <div className='flex mt-5 gap-10'>
      {/* sidebar and maincontainer */}
      <SideBar />
      <MainContent />
    </div>
  )
}

export default Body
