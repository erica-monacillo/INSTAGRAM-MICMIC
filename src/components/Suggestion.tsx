import React from "react";
import { Button } from "@/components/ui/button";

interface SuggestionProps {
  username: string;
  followers: string[]; // Array of follower usernames
  profilePic: string;  // URL or path to the user's profile picture
}

export const Suggestion: React.FC<SuggestionProps> = ({ username, followers, profilePic }) => {
  return (
    <li className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-3 flex-1">
        {/* Profile picture */}
        <img 
          src={profilePic} 
          alt={`${username}'s profile`} 
          className="w-12 h-12 bg-gray-300 rounded-full object-cover"
        />
        <div>
          <span className="block font-semibold text-white text-sm">{username}</span>
          <span className="block text-xs text-gray-500">
            Followed by{" "}
            {followers.map((follower, index) => (
              <span key={follower}>
                {follower}
                {index < followers.length - 1 && ", "}
              </span>
            ))}
            {followers.length > 1 && ` + ${followers.length - 1} more`}
          </span>
        </div>
      </div>
      <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-1 text-blue-500 text-sm rounded ml-auto">
        Follow
      </Button>
    </li>
  );
};
