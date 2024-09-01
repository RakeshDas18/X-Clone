import React from "react";
import { MdHome } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";

function LeftSiderbar() {
  return (
    <div>
      <div>
        <div>
          <img src="X-logo.png" alt="X-logo" width={"60px"} />
        </div>
        <div className="my-4">
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <MdHome size={"24px"}/>
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <FaHashtag size={"24px"}/>
            </div>
            <h1 className="font-bold text-lg ml-2">Explore</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <IoMdNotifications size={"24px"}/>
            </div>
            <h1 className="font-bold text-lg ml-2">Notification</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <FaBookmark size={"23px"}/>
            </div>
            <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <CgProfile size={"24px"}/>
            </div>
            <h1 className="font-bold text-lg ml-2">Profile</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <IoLogOut size={"24px"}/>
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
