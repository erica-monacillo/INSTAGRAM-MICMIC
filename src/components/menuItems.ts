import {  
  faHome, faSearch, faCompass, faFilm, 
  faHeart, faPlus, faBars
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"; // declare panako here HAHAHAHA
import { faThreads } from "@fortawesome/free-brands-svg-icons";

// Update interface to make `icon` optional
export interface MenuItemType {
  label: string;
  icon?: any;  // icon is now optional
  notification?: number;
  profileImage?: string;  
}

export const menuItems: MenuItemType[] = [
  { label: "Home", icon: faHome },
  { label: "Search", icon: faSearch },
  { label: "Explore", icon: faCompass },
  { label: "Reels", icon: faFilm },
  { label: "Messages", icon: faFacebookMessenger, notification: 3 }, 
  { label: "Notifications", icon: faHeart, notification: 5 },
  { label: "Create", icon: faPlus },
  { 
    label: "Profile", 
    profileImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"  
  }, // Profile image without icon
  { label: "Threads", icon: faThreads, notification: 56 },
  { label: "More", icon: faBars }, 
];
