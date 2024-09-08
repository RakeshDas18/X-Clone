import React from "react";
import Avatar from "react-avatar"
import { CiImageOn } from "react-icons/ci"

function CreatePost() {
  return (
    <div className="w-[100%]">
      <div>
        <div className="flex items-center justify-evenly border-b border-gray-200">
          <div className="cursor-pointer hover:bg-gray-200 w-full px-4 py-3">
            <h1 className="font-semibold text-grey-600 text-lg text-center">For You</h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 w-full px-4 py-3">
            <h1 className="font-semibold text-grey-600 text-lg text-center">Following</h1>
          </div>
        </div>
        <div>
          <div className="flex items-center p-4">
            <div>
            <Avatar src="https://pbs.twimg.com/profile_images/1755129211763761152/usD2zEBu_bigger.jpg" size="40" round={true} />
            </div>
            <input className="w-full outline-none border-none text-xl ml-2" type="text" placeholder="What is happening?!"/>
          </div>
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <div>
              <CiImageOn size="24px"/>
            </div>
            <button className="bg-[#1D9BF0] px-4 py-1 text-lg border-none rounded-full text-white">POST</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
