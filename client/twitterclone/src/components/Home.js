import React from 'react'
import LeftSiderbar from './LeftSiderbar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'

function Home() {
  return (
    <div>
      <LeftSiderbar/>
      <Feed/>
      <RightSidebar/>
    </div>
  )
}

export default Home
