import React, { useState } from "react";

const tweetsData = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "Alice",
    content: "Loving the Web3 world 🌐! #blockchain",
    likes: 5,
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=2",
    name: "Bob",
    content: "Building my first dApp today 💻! Excited to learn.",
    likes: 8,
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Charlie",
    content: "Crypto to the moon 🚀🌕",
    likes: 12,
  },
];

function Tweet({ tweet }) {
  const [likes, setLikes] = useState(tweet.likes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md mb-4 flex">
      {/* Avatar Section */}
      <img
        src={tweet.avatar}
        alt="avatar"
        className="w-12 h-12 rounded-full mr-4"
      />
      <div className="flex-grow">
        {/* Name and Tweet Content */}
        <div className="font-bold text-lg">{tweet.name}</div>
        <p className="text-gray-700">{tweet.content}</p>
      </div>
      {/* Like Section */}
      <div className="flex items-center">
        <button
          onClick={handleLike}
          className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 mr-2"
        >
          Like
        </button>
        <span className="text-gray-700">{likes}</span>
      </div>
    </div>
  );
}

function TweetList() {
  return (
    <div className="max-w-2xl">
      <h3 className="text-2xl font-bold mb-4 text-center">Latest Tweets</h3>
      {tweetsData.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}

export default TweetList;
