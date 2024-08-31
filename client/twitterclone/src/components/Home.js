import React from 'react'
import LeftSiderBar from './LeftSiderBar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'

function Home() {
  return (
    <div>
      <LeftSiderBar/>
      <Feed/>
      <RightSidebar/>
    </div>
  )
}

export default Home
