import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/outline';


const Feed = ({ imageUrl }: { imageUrl: string }) => {
  // State to track whether the post is liked
  const [isLiked, setIsLiked] = useState(false);  // Fix the state variable name

  // Toggle the like state when button is clicked
  const toggleLike = () => {
    setIsLiked(!isLiked);  // Corrected to match the state name
  };

  return (
    <div className="bg-white shadow-md rounded-lg mb-4 p-4">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="flex-1">
          <h3 className="font-semibold">Cute Dogs</h3>
          <p className="text-gray-500 text-sm">USTP</p>
        </div>
      </div>
      <div className="mb-4">
        <img 
          src="https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*400x400" 
          alt="Post" 
          className="w-full rounded-lg" 
        />
      </div>
      <div className="flex justify-between items-center">
        {/* Like Button with dynamic style */}
        <button
          onClick={toggleLike}
          className={`${
            isLiked ? 'text-blue-600 font-bold' : 'text-gray-600'
          }`}
        >
          {isLiked ? 'Unlike' : 'Like'}
        </button>
        <button className="text-gray-600">Comment</button>
        <button className="text-gray-600">Share</button>
      </div>
    </div>
  );
};

export default Feed;
