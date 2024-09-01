import React from "react";

function CreatePost() {
  return (
    <div className="w-[50%]">
      <div className="m-3">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer">
            <h1 className="font-bold text-grey-700 text-lg">For You</h1>
          </div>
          <div className="cursor-pointer">
            <h1 className="font-bold text-grey-700 text-lg">Following</h1>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default CreatePost;
