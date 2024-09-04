import React from 'react'
import LeftSiderbar from './LeftSiderbar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'

function Home() {
  return (
    <div className='flex justify-between w-[90%] mx-auto'>
      <LeftSiderbar/>
      <Feed/>
      <RightSidebar/>
    </div>
  )
}

export default Home
