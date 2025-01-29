import React from "react";
import { storiesData } from "@/components/storiesData";

export const Stories: React.FC = () => (
    <div className="flex justify-center items-center space-x-5 overflow-x-auto p-3 w-full">
    {storiesData.map((story, index) => (
      <div key={index} className="flex flex-col items-center">
        <img
          src={story.image}
          alt={story.username}
          className="w-16 h-16 rounded-full border-2 border-pink-500"
        />
        <span className="font-roboto text-sm mt-2 text-center">{story.username}</span>
      </div>
    ))}
  </div>
);
