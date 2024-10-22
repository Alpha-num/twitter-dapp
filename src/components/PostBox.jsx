import React from "react";

function PostBox() {
  return (
    <div className="flex-grow">
      <textarea
        className="border rounded-md w-full p-3"
        placeholder="Enter your tweets...."
      />
    </div>
  );
}

export default PostBox;
