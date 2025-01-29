import React from "react";
import { Card } from "@/components/ui/Card";

export const Post: React.FC = () => (
  <Card className="relative w-full max-w-[600px] mx-auto"> {/* Center and set max width */}
    {/* User Profile */}
    <div className="flex items-center space-x-3 p-2">
      <img
        src="https://placehold.co/100x100" // Replace with actual profile image
        alt="Profile"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex items-center space-x-2">
        {/* Badge check icon */}
        <i className="fa-solid fa-circle-check text-blue-500"></i>

        <div>
          <span className="font-bold font-roboto">jennierubyjane</span>
          <span className="text-sm text-gray-400 font-roboto"> • 11h</span>
        </div>
      </div>
    </div>

    {/* Instagram-Style Post Image */}
    <div className="w-full aspect-[1/1] overflow-hidden">
      <img
        src="https://i.pinimg.com/736x/0e/3f/e7/0e3fe7f3e1da1ac7baeab1947dfd08c3.jpg"
        alt="Post"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Post Interaction */}
    <div className="flex justify-center space-x-1 mt-2">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`w-2 h-2 rounded-full ${index === 0 ? "bg-white" : "bg-gray-500"}`}
        ></span>
      ))}
    </div>
  </Card>
);
