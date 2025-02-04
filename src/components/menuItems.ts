export interface MenuItemType {
    label: string;
    icon: string;
    notification?: number;
  }
  
  export const menuItems: MenuItemType[] = [
    { label: "Home", icon: "home" },
    { label: "Search", icon: "search" },
    { label: "Explore", icon: "compass" }, // Use the correct icon name for Explore
    { label: "Reels", icon: "film" }, // You can replace with the appropriate icon
    { label: "Messages", icon: "envelope", notification: 100000 },
    { label: "Notifications", icon: "heart" },
    { label: "Create", icon: "plus" },
    { label: "Profile", icon: "user" },
    { label: "Threads", icon: "home" },
  ];
  
  