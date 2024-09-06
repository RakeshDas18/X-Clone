import React from "react";
import { IoArrowBack } from "react-icons/io5";

function Profile() {
  return (
    <div className="w-[50%]">
      <div>
        <div className="flex items-center py-2">
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <IoArrowBack size="24px"/>
          </div>
          <div className="ml-2">
          <h1 className="font-bold text-lg">Rakesh Das</h1>
          <p className="text-gray-500 text-sm">2600 Posts</p>
          </div>
        </div>
        <img
          src="https://pbs.twimg.com/profile_banners/1751470922379489280/1714232500/1080x360"
          alt="banner"
        />
      </div>
    </div>
  );
}

export default Profile;
