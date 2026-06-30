// Core course options the chef can choose from when adding a menu item.
// Defined as a constant array so it can be looped over (for loop) when
// rendering pickers and when calculating per-course averages.
export const COURSES = ['Starters', 'Mains', 'Desserts'] as const;

export type Course = (typeof COURSES)[number];

export interface MenuItem {
  id: string;
  dishName: string;
  description: string;
  course: Course;
  price: number;
}
