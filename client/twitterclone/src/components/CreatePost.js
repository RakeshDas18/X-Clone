import axios from "axios";
import React, { useState } from "react";
import Avatar from "react-avatar"
import { CiImageOn } from "react-icons/ci"
import { TWEET_API_END_POINT } from "../utils/constant";
import toast from  "react-hot-toast"
import { useDispatch, useSelector } from "react-redux";
import { getIsActive, getRefresh } from '../redux/tweetSlice';

function CreatePost() {
  const [description, setDescription] = useState("");
  const {user} = useSelector(store => store.user);
  const dispatch = useDispatch();
  const {isActive} = useSelector(store=>store.tweet)

  const submitHandler = async () => {
    try {
      const res = await axios.post(`${TWEET_API_END_POINT}/create`, { description, id: user?._id }, {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });

      dispatch(getRefresh());

      if(res.data.success){
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);    
    }
  }

  const forYouHandler = () => {
    dispatch(getIsActive(true));
  }
  const followingHandler  = () => {
    dispatch(getIsActive(false));
  }


  return (
    <div className="w-[100%]">
      <div>
        <div className="flex items-center justify-evenly border-b border-gray-200">
          <div onClick={forYouHandler} className={`${isActive ? "border-b-4 border-blue-500" : "border-b-4 border-transparent"} cursor-pointer hover:bg-gray-200 w-full px-4 py-3`}>
            <h1 className="font-semibold text-grey-600 text-lg text-center">For You</h1>
          </div>
          <div onClick={followingHandler} className={`${!isActive ? "border-b-4 border-blue-500" : "border-b-4 border-transparent"} cursor-pointer hover:bg-gray-200 w-full px-4 py-3`}>
            <h1 className="font-semibold text-grey-600 text-lg text-center">Following</h1>
          </div>
        </div>
        <div>
          <div className="flex items-center p-4">
            <div>
            <Avatar src="https://pbs.twimg.com/profile_images/1755129211763761152/usD2zEBu_bigger.jpg" size="40" round={true} />
            </div>
            <input value={description} onChange={(e) => setDescription(e.target.value)} className="w-full outline-none border-none text-xl ml-2" type="text" placeholder="What is happening?!"/>
          </div>
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <div>
              <CiImageOn size="24px"/>
            </div>
            <button onClick={submitHandler} className="bg-[#1D9BF0] px-4 py-1 text-lg border-none rounded-full text-white">POST</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
