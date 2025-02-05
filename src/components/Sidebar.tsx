import { menuItems, MenuItemType } from "@/components/menuItems";
import { MenuItem } from "@/components/MenuItem"; 

export const Sidebar: React.FC = () => (
  <div className="w-1/8 p-10 border-l border-white flex flex-col h-screen">
    {/* Top Section */}
    <div>
      <h1 className="text-xl font-bold text-white p-0">Instagram</h1>
      <ul className="mt-12 space-y-2 text-left text-xl font-roboto">
        {menuItems.slice(0, -2).map((item: MenuItemType) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            notification={item.notification}
            profileImage={item.profileImage} // here pod, kay na divide to two sections
          />
        ))}
      </ul>
    </div>

    {/* Bottom Section with Profile Image */}
    <ul className="mt-20 space-y-2 text-left text-xl font-roboto">
      {menuItems.slice(-2).map((item: MenuItemType) => (
        <MenuItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          notification={item.notification}
          profileImage={item.profileImage} // nara dri nako gi call
        />
      ))}
    </ul>
  </div>
);
