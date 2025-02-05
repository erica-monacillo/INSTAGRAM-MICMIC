import { menuItems, MenuItemType } from "@/components/menuItems";
import { MenuItem } from "@/components/MenuItem"; 

export const Sidebar: React.FC = () => (
  <div className="w-[274px] p-10 border-r border-gray-700 flex flex-col h-screen sticky top-0">
    {/* Top Section */}
    <div>
      <h1 className="text-xl font-bold text-white p-0">Instagram</h1>
      <ul className="mt-11 -space-y-[2px] text-left text-sm font-roboto -ml-8">
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
    <ul className="mt-24 -space-y-[3px] text-left text-xl font-roboto -ml-8">
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
