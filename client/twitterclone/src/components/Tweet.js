import React from "react";
import Avatar from "react-avatar";
import { GoBookmark } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { BiComment } from "react-icons/bi";
import axios from "axios";
import {TWEET_API_END_POINT} from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getRefresh } from "../redux/tweetSlice";
import { AiOutlineDelete } from "react-icons/ai";

const Tweet = ({ tweet }) => {
  const {user} = useSelector(store=>store.user);
  const dispatch = useDispatch();
  const likeOrDislikeHandler = async (id) => {
    try {
      const res = await axios.put(`${TWEET_API_END_POINT}/like/${id}`, {id:user?._id}, {
        withCredentials:true
      })
      dispatch(getRefresh())
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);      
    }
  }
  const deleteTweetHandler = async(id) => {
    try {
      axios.defaults.withCredentials = true
      const res = await axios.delete(`${TWEET_API_END_POINT}/delete/${id}`)
      console.log(res);
      dispatch(getRefresh());
      toast.success(res.data.message);
      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
      
    }
  }
  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1755129211763761152/usD2zEBu_bigger.jpg"
            size="40"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">{tweet?.userDetails[0]?.name}</h1>
              <p className="text-gray-500 text-sm ml-1">{`@${tweet?.userDetails[0]?.username}  1m`}</p>
            </div>
            <div className="flex items-center">
              <p>{tweet?.description}</p>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <div onClick={()=>likeOrDislikeHandler(tweet?._id)} className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                  <CiHeart size="20px" />
                </div>
                <p>{tweet?.like?.length}</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                  <BiComment size="20px" />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center mr-10">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                  <GoBookmark size="20px" />
                </div>
                <p>0</p>
              </div>
              {user?._id === tweet?.userId && (<div className="flex items-center mr-10">
                <div onClick={()=>deleteTweetHandler(tweet?._id)} className="p-2 hover:bg-red-400 rounded-full cursor-pointer">
                  <AiOutlineDelete size="20px" />
                </div>
                <p>0</p>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
