import React, { useState } from "react";
<<<<<<< Updated upstream
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShare,
  faCircleCheck,
  faChevronLeft,
  faChevronRight,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
=======
>>>>>>> Stashed changes

interface PostProps {
  username: string;
  profileImage: string;
  postImages: string | string[];
  heartCount: string;
  commentCount: string;
  shareCount: string;
  timeAgo: string;
}

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
  const images = Array.isArray(postImages) ? postImages : [postImages];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
<<<<<<< Updated upstream
    <div className="relative w-full max-w-[568px] mx-[228px] p-6">
      {/* User Profile */}
      <div className="flex items-center space-x-3 p-2 relative">
        {/* Three Dots (Settings Button) */}
        <div className="absolute right-0 top-0 p-2 cursor-pointer">
          <FontAwesomeIcon icon={faEllipsisH} className="text-white w-5 h-5"
          />
        </div>
=======
    <div className="relative w-full max-w-[600px] mx-auto p-4">
      <div className="flex items-center space-x-3 p-2">
>>>>>>> Stashed changes
        <img
          src={profileImage}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <span className="font-roboto font-bold text-white">{username}</span>
          </div>
          <span className="font-roboto text-sm text-gray-400"> • {timeAgo}</span>
        </div>
      </div>

<<<<<<< Updated upstream
      {/* Post Image Carousel */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
=======
      <div className="relative w-full aspect-[1/1] overflow-hidden">
>>>>>>> Stashed changes
        <img
          src={images[currentImageIndex]}
          alt={`Post ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && currentImageIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
          >
            &#9664;
          </button>
        )}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
          >
            &#9654;
          </button>
        )}
      </div>

      <div className="flex justify-center space-x-1 mt-2">
        {[...Array(images.length)].map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-gray-500"}`}
          ></span>
        ))}
      </div>

      {/* Fixed the alignment of icons and their counts to be horizontal */}
      <div className="flex items-center space-x-4 mt-2">
        {/* Heart Icon with Hover Effect */}
        <div className="flex items-center space-x-1 cursor-pointer group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
            className="transition-all duration-300 group-hover:fill-red-500 group-hover:stroke-red-500"
            fill="white"
            stroke="white"
            strokeWidth="2"
          >
            <g transform="translate(1.4 1.4) scale(2.81 2.81)">
              <path
                d="M 45 84.9 L 6.95 46.85 C 2.468 42.368 0 36.409 0 30.071 c 0 -6.338 2.468 -12.296 6.95 -16.778 c 9.252 -9.25 24.306 -9.251 33.556 0 L 45 17.787 l 4.494 -4.494 c 9.251 -9.251 24.303 -9.253 33.556 0 c 9.252 9.251 9.252 24.305 0 33.557 L 45 84.9 z"
                className="transition-all duration-20 group-hover:fill-red-500"
              />
            </g>
          </svg>
          <span className="font-roboto text-white">{heartCount}</span>
        </div>

        {/* Comment Icon and Count */}
        <div className="flex items-center space-x-1">
          <svg width="24" height="24" viewBox="0 0 256 256" fill="white" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(1.41 1.41) scale(2.81 2.81)">
              <path
                d="M 86.999 90 c -0.367 0 -0.737 -0.067 -1.092 -0.206 l -17.016 -6.655 C 61.734 87.633 53.509 90 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 c 0 8.509 -2.367 16.734 -6.861 23.892 l 6.655 17.016 c 0.434 1.11 0.17 2.371 -0.673 3.214 C 88.548 89.694 87.78 90 86.999 90 z M 45 6 C 23.495 6 6 23.495 6 45 s 17.495 39 39 39 c 7.839 0 15.398 -2.317 21.862 -6.7 c 0.818 -0.555 1.855 -0.671 2.776 -0.312 l 12.07 4.721 l -4.721 -12.07 c -0.36 -0.92 -0.243 -1.959 0.312 -2.776 C 81.683 60.398 84 52.839 84 45 C 84 23.495 66.505 6 45 6 z"
                fill="white"
              />
            </g>
          </svg>
          <span className="font-roboto text-white">{commentCount}</span>
        </div>

        {/* Share Icon and Count */}
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <defs></defs>
            <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
              <path
                d="M 31.121 43.543 c -0.852 0 -1.689 -0.362 -2.275 -1.042 L 0.727 9.836 C -0.051 8.934 -0.22 7.656 0.295 6.581 c 0.516 -1.074 1.607 -1.748 2.81 -1.7 l 84 2.952 c 1.356 0.047 2.513 1 2.817 2.324 c 0.306 1.323 -0.315 2.686 -1.515 3.323 l -55.88 29.712 C 32.083 43.429 31.6 43.543 31.121 43.543 z M 9.747 11.118 l 22.082 25.65 L 75.71 13.436 L 9.747 11.118 z"
                fill="white"
                stroke="none"
              />
              <path
                d="M 42.475 85.121 c -0.145 0 -0.291 -0.011 -0.437 -0.032 c -1.179 -0.173 -2.144 -1.027 -2.458 -2.178 L 28.226 41.333 c -0.37 -1.353 0.248 -2.781 1.486 -3.439 l 55.88 -29.712 c 1.196 -0.637 2.676 -0.39 3.602 0.603 c 0.927 0.993 1.07 2.484 0.352 3.636 L 45.019 83.71 C 44.466 84.596 43.5 85.121 42.475 85.121 z M 34.646 42.066 l 8.917 32.651 l 34.965 -55.983 L 34.646 42.066 z"
                fill="white"
                stroke="none"
              />
            </g>
          </svg>
          <span className="font-roboto text-white">{shareCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
