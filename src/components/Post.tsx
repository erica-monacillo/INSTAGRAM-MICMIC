import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShare,
  faCircleCheck,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

// Define the PostProps interface
interface PostProps {
  username: string;
  profileImage: string;
  postImages: string | string[]; // Allow a single image or an array of images
  heartCount: string;
  commentCount: string;
  shareCount: string;
  timeAgo: string;
}

// Use the PostProps interface to type the props
const Post: React.FC<PostProps> = ({
  username,
  profileImage,
  postImages,
  heartCount,
  commentCount,
  shareCount,
  timeAgo,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ensure postImages is always treated as an array
  const images = Array.isArray(postImages) ? postImages : [postImages];

  // Handlers for navigating the images
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-[600px] mx-auto p-4">
      {/* User Profile */}
      <div className="flex items-center space-x-3 p-2">
        <img
          src={profileImage}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <span className="font-roboto font-bold text-white">{username}</span>
            <FontAwesomeIcon icon={faCircleCheck} className="text-blue-500 w-4 h-4" />
          </div>
          <span className="font-roboto text-sm text-gray-400"> • {timeAgo}</span>
        </div>
      </div>

      {/* Post Image Carousel */}
      <div className="relative w-full aspect-[1/1] overflow-hidden">
        <img
          src={images[currentImageIndex]} // Display the current image
          alt={`Post ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Left Arrow (only shows when we're not on the first image) */}
        {images.length > 1 && currentImageIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-white w-6 h-6" />
          </button>
        )}

        {/* Right Arrow */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-white w-6 h-6" />
          </button>
        )}
      </div>

      {/* Post Interaction */}
      <div className="flex justify-center space-x-1 mt-2">
      {[...Array(images.length)].map((_, index) => (
        <span
          key={index}
          className={`w-2 h-2 rounded-full ${index === 0 ? "bg-white" : "bg-gray-500"}`}
        ></span>
      ))}
    </div>

      <div className="flex justify-start space-x-6 mt-3">
        {/* Heart Button */}
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faHeartRegular} className="text-white w-6 h-6" />
          <span className="font-roboto text-white">{heartCount}</span>
        </div>

        {/* Comment Button */}
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faComment} className="text-white w-6 h-6" />
          <span className="font-roboto text-white">{commentCount}</span>
        </div>

        {/* Share Button */}
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faShare} className="text-white w-6 h-6" />
          <span className="font-roboto text-white">{shareCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
