import React, { useEffect } from 'react'
import LeftSiderbar from './LeftSiderbar'
import RightSidebar from './RightSidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useOtherUsers from '../hooks/useOtherUsers'
import useGetMyTweets from '../hooks/useGetMyTweets'

function Home() {
  const { user, otherUsers } = useSelector(store=>store.user);

  const navigate = useNavigate();
  useEffect(() => {
    if(!user){
      navigate('/login')
    }
  }, [])
  
  //hooks
  useOtherUsers(user?._id);
  useGetMyTweets(user?._id);

  return (
    <div className='flex justify-between w-[90%] mx-auto'>
      <LeftSiderbar/>
      <Outlet/>
      <RightSidebar otherUsers={otherUsers}/>
    </div>
  )
}

export default Home
