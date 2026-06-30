import { COURSES, Course, MenuItem } from '../types/menu';

// Uses a for loop to solve the problem of counting menu items.
export function getTotalItemCount(items: MenuItem[]): number {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    count++;
  }
  return count;
}

// Uses a for loop to total up prices for a single course.
function getCourseTotal(items: MenuItem[], course: Course): number {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].course === course) {
      total += items[i].price;
    }
  }
  return total;
}

// Uses a for loop to count how many items belong to a single course.
function getCourseCount(items: MenuItem[], course: Course): number {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].course === course) {
      count++;
    }
  }
  return count;
}

export interface CourseAverage {
  course: Course;
  average: number;
  itemCount: number;
}

// Loops through every defined course and works out the average price
// of the menu items that belong to it.
export function getAveragePricePerCourse(items: MenuItem[]): CourseAverage[] {
  const averages: CourseAverage[] = [];

  for (let i = 0; i < COURSES.length; i++) {
    const course = COURSES[i];
    const itemCount = getCourseCount(items, course);
    const total = getCourseTotal(items, course);
    const average = itemCount > 0 ? total / itemCount : 0;

    averages.push({ course, average, itemCount });
  }

  return averages;
}

// Uses a while loop to filter items down to a single course.
export function filterItemsByCourse(items: MenuItem[], course: Course): MenuItem[] {
  const filtered: MenuItem[] = [];
  let index = 0;

  while (index < items.length) {
    if (items[index].course === course) {
      filtered.push(items[index]);
    }
    index++;
  }

  return filtered;
}

// Simple formatter so prices look consistent everywhere in the app.
export function formatPrice(value: number): string {
  return `R ${value.toFixed(2)}`;
}

// Generates a reasonably unique id without needing an external package.
export function generateId(): string {
  return `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}
