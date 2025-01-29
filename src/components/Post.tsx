import React from "react";
import { Card } from "@/components/ui/Card";

export const Post: React.FC = () => (
  <Card className="relative">
    {/* User Profile */}
    <div className="flex items-center space-x-3 p-2">
      <img
        src="https://placehold.co/100x100" // Replace with actual profile image
        alt="Profile"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex items-center space-x-2">
        {/* Badge check icon */}
        <i className="fa-solid fa-badge-check text-blue-500"></i>
        
        <div>
          <span className="font-bold font-roboto">jennierubyjane</span>
          <span className="text-sm text-gray-400 font-roboto"> • 11h</span>
        </div>
      </div>
    </div>

    {/* Post Image */}
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOlr02OlCnqYBfDO0fY0uFpzQgC5NselsI3w&s/300x300"
      alt="Post"
      className="w-full h-auto rounded-lg"
    />

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
