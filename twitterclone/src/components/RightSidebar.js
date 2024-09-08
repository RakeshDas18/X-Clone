import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Avatar from "react-avatar";

function RightSidebar() {
  return (
    <div className="w-[20%]">
      <div className="flex items-center text-gray-500 p-2 bg-gray-100 rounded-full outline-none w-full">
        <IoSearchOutline size="20px" />
        <input
          type="text"
          className="bg-transparent outline-none px-2"
          placeholder="Search"
        />
      </div>
      <div className="p-4 bg-gray-100 rounded-2xl my-4">
        <h1 className="text-lg font-bold">Who to follow</h1>
        <div>
          <div className="flex items-center justify-between my-3">
            <div className="flex">
              <div>
                <Avatar
                  src="https://pbs.twimg.com/profile_images/1755129211763761152/usD2zEBu_bigger.jpg"
                  size="40"
                  round={true}
                />
              </div>
              <div className="ml-3">
                <h1 className="font-bold">Rakesh</h1>
                <p className="text-sm">RakeshDas_18</p>
              </div>
            </div>
            <div>
              <button className="px-4 py-1 bg-black text-white rounded-full">
                Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
