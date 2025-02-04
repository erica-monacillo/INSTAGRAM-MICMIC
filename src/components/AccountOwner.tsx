import React from "react";

interface AccountOwnerProps {
  username: string;
  displayName: string;
  profilePic: string;
}

export const AccountOwner: React.FC<AccountOwnerProps> = ({ username, displayName, profilePic }) => (
  <div className="flex items-center justify-between mb-4 mt-4">
    {/* Profile Picture and Username/Display Name */}
    <div className="flex items-center space-x-3">
      <img className="w-12 h-12 rounded-full" src={profilePic} alt={`${displayName}'s profile`} />
      <div>
        <div className="block text-sm font-semibold font-roboto">{displayName}</div>
        <div className="block text-xs font-roboto text-gray-500">{username}</div>
      </div>
    </div>

    {/* Switch Button with Blue Text */}
    <button className="text-blue-500 hover:text-blue-700 font-semibold font-roboto">
      Switch
    </button>
  </div>
);
