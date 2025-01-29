import { menuItems, MenuItemType } from "@/components/menuItems";
import { MenuItem } from "@/components/MenuItem";  // Make sure the path is correct

export const Sidebar: React.FC = () => (
    <div className="w-1/8 p-10 border-r border-border">
      <h1 className="text-xl font-bold text-black p-0">Instagram</h1>
      <ul className="mt-12 space-y-7 text-left text-xl font-roboto">
        {menuItems.map((item: MenuItemType) => (
          <MenuItem key={item.label} icon={item.icon} label={item.label} notification={item.notification} />
        ))}
      </ul>
    </div>
  );
