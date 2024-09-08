import React from 'react'
import LeftSiderbar from './LeftSiderbar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='flex justify-between w-[90%] mx-auto'>
      <LeftSiderbar/>
      <Outlet/>
      <RightSidebar/>
    </div>
  )
}

export default Home
