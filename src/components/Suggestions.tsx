// Suggestions.tsx
import React from "react";
import { AccountOwner } from "@/components/AccountOwner"; // Adjust according to your folder structure
import { suggestions } from "@/components/suggestionData";
import { Suggestion } from "./Suggestion";

export const Suggestions: React.FC = () => (
  <div className="w-1/3 p-4 border-l border-border">
    {/* Account Owner Info */}
    <AccountOwner
      displayName="carlos_adet"
      username="csadet_224"
      profilePic="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" // Replace with actual profile picture URL
    />

    <div className="mt-6 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-gray-500 font-roboto">Suggested for you</h2>
      <button className="text-white hover:text-blue-700 font-semibold font-roboto">
        See All
      </button>
    </div>

    <ul className="mt-4 space-y-2 font-roboto">
      {suggestions.map((user) => (
        <Suggestion
          key={user.username}
          username={user.username}
          followers={user.followers}
          profilePic={user.profilePic || "https://i.pinimg.com/474x/21/d2/9f/21d29f70c61cdfc6a90cf1e53004d22e.jpg"} // Default image if undefined
        />
      ))}
    </ul>
  </div>
);
