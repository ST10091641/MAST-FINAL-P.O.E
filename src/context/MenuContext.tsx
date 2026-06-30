import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem } from '../types/menu';
import { generateId } from '../utils/menuHelpers';

interface MenuContextValue {
  menuItems: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  removeMenuItem: (id: string) => void;
}

const MenuContext = createContext<MenuContextValue | undefined>(undefined);

// Starting data so the app isn't empty on first load.
// Nothing here is hardcoded into the screens themselves - it only lives
// in memory via useState, as required (no permanent storage needed).
const initialMenuItems: MenuItem[] = [
  {
    id: generateId(),
    dishName: 'Roasted Beet Carpaccio',
    description: 'Thin-sliced roasted beets, goat cheese, candied walnuts',
    course: 'Starters',
    price: 95,
  },
  {
    id: generateId(),
    dishName: 'Pan-Seared Springbok Loin',
    description: 'Juniper jus, sweet potato puree, seasonal greens',
    course: 'Mains',
    price: 245,
  },
  {
    id: generateId(),
    dishName: 'Malva Pudding',
    description: 'Warm spiced sponge with amarula custard',
    course: 'Desserts',
    price: 85,
  },
];

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);

  function addMenuItem(item: Omit<MenuItem, 'id'>) {
    const newItem: MenuItem = { ...item, id: generateId() };
    setMenuItems((previousItems) => [...previousItems, newItem]);
  }

  function removeMenuItem(id: string) {
    setMenuItems((previousItems) =>
      previousItems.filter((item) => item.id !== id)
    );
  }

  return (
    <MenuContext.Provider value={{ menuItems, addMenuItem, removeMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu(): MenuContextValue {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used inside a MenuProvider');
  }
  return context;
}
