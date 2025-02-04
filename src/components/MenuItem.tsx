
import React from 'react';

interface MenuItemProps {
  label: string;
  icon: string; // The icon name will be passed as a string
  notification?: number;
}

export const MenuItem: React.FC<MenuItemProps> = ({ label, icon, notification }) => (
  <li className="flex items-center text-white space-x-2">
    <i className={`fa fa-${icon}`}></i> {/* Dynamically render the Font Awesome icon based on the passed icon name */}
    <span>{label}</span>
    {notification && (
      <span className="bg-red-500 text-white rounded-full px-2 text-xs">
        {notification}
      </span>
    )}
  </li>
);
