import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MenuItemProps {
  label: string;
  icon?: any;
  notification?: number;
  profileImage?: string; 
}

export const MenuItem: React.FC<MenuItemProps> = ({ label, icon, notification, profileImage }) => (
  <li className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-800 rounded-xl transition-all duration-200 cursor-pointer relative">
    {/* Icon or Profile Image */}
    <div className="relative w-10 h-10 flex justify-center items-center">
      {profileImage ? (
        // If profile image is provided, render image
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        // Otherwise, render FontAwesome icon
        <FontAwesomeIcon icon={icon} className="text-white text-2xl" />
      )}

      {/* Notification Badge */}
      {notification !== undefined && notification > 0 && (
        <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full absolute -top-1 -right-1 min-w-[18px] min-h-[18px] flex items-center justify-center">
          {notification}
        </span>
      )}
    </div>

    {/* Label */}
    <span className="text-white text-lg font-medium">{label}</span>
  </li>
);
