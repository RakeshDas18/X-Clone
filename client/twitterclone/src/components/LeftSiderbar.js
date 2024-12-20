import React from "react";
import { GoHome } from "react-icons/go";
import { GoHash } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"
import {USER_API_END_POINT} from "../utils/constant"
import toast from "react-hot-toast"
import { getMyProfile, getOtherUser, getUser } from "../redux/userSlice";

function LeftSiderbar() {
  const { user } = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = async() =>{
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`);
      dispatch(getUser(null));
      dispatch(getOtherUser(null));
      dispatch(getMyProfile(null));
      navigate('/login')
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);      
    }
  }
  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img src="X-logo.png" alt="X-logo" width={"60px"} />
        </div>
        <div className="my-4">
          <Link to="/" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <GoHome size={"24px"}/>
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </Link>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <GoHash size={"24px"}/>
            </div>
            <h1 className="font-bold text-lg ml-2">Explore</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <IoMdNotificationsOutline size={"24px"}/>
            </div>
            <h1 className="font-bold text-lg ml-2">Notification</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <FaRegBookmark size={"23px"}/>
            </div>
            <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
          </div>
          <Link to={`/profile/${user?._id}`} className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <CgProfile size={"24px"}/>
            </div>
            <h1 className="font-bold text-lg ml-2">Profile</h1>
          </Link>
          <div onClick={logoutHandler} className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <MdOutlineLogout size={"24px"}/>
            </div>
            <h1 className="font-bold text-lg ml-2">Logout</h1>
          </div>
          <button className="px-4 py-2 border-none text-lg bg-[#1D9BF0] w-full rounded-full text-white font-bold">Post</button>
        </div>
      </div>
    </div>
  );
}

export default LeftSiderbar;
