import React from "react";
import Avatar from "react-avatar";
import { IoArrowBack } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import useGetProfile from "../hooks/useGetProfile";

function Profile() {
  const { user, profile } = useSelector((store) => store.user);

  const { id } = useParams();
  useGetProfile(id);
  return (
    <div className="w-[50%] border-l border-r border-gray-200">
      <div>
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
          >
            <IoArrowBack size="24px" />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">{profile?.name}</h1>
            <p className="text-gray-500 text-sm">2600 Posts</p>
          </div>
        </div>
        <img
          src="https://pbs.twimg.com/profile_banners/1751470922379489280/1714232500/1080x360"
          alt="banner"
        />
        <div className="absolute top-60 ml-2 border-4 border-white rounded-full">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1755129211763761152/usD2zEBu_bigger.jpg"
            size="120"
            round={true}
          />
        </div>
        <div className="text-right m-4">
          {
          profile?._id === user?._id ? (
            <button className="px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400">Edit Profile</button>
          ) : (
            <button className="px-4 py-1 bg-black text-white rounded-full border border-gray-400">Follow</button>
          )}
        </div>
        <div className="m-4 mt-6">
          <h1 className="font-bold text-xl">{profile?.name}</h1>
          <p>{`@${profile?.username}`}</p>
        </div>
        <div className="m-4 text-[17px]">
          Web developer | C, C++, JavaScript, Python, HTML, CSS, and MERN Stack
          | Currently - Learning NextJs | Memes ❤️
        </div>
      </div>
    </div>
  );
}

export default Profile;
