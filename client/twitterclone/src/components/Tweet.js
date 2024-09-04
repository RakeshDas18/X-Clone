import React from "react";
import Avatar from "react-avatar";
import { GoBookmark } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { BiComment } from "react-icons/bi";

function Tweet() {
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
              <h1 className="font-bold">Rakesh Das</h1>
              <p className="text-gray-500 text-sm ml-1">@RD 1m</p>
            </div>
            <div className="flex items-center">
              <p>Hello World!</p>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                  <CiHeart size="20px" />
                </div>
                <p>0</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
