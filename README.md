Christoffel's Menu App
 
A React Native (Expo) app for private chef Christoffel to manage his nightly dining menus across iOS and Android.
 
---
 
## Features
 
### Part 2 Features
- ✅ Chef can enter dish name, description, course, and price
- ✅ Predefined course list: Starters, Mains, Dessert
- ✅ Home screen displays the full prepared menu
- ✅ Home screen shows total number of menu items
- ✅ Chef can add all menu items to the list from the homepage
### Final PoE Features (Part 3)
- ✅ Average price per course displayed on the home screen (Starters, Mains, Dessert averages)
- ✅ Separate "Add Dishes" screen — adding items moved off the homepage to a dedicated screen
- ✅ Chef can add multiple dishes and remove any before saving
- ✅ Menu items saved in an array using the global store
- ✅ Remove items from the menu on the home screen
- ✅ Filter screen: guests can browse menu filtered by course (Starters / Mains / Dessert)
---
 
## Project Structure
 
```
ChristoffelMenu/
├── App.tsx                  # Navigation setup & root component
├── types/
│   └── index.ts             # MenuItem type, Course type, COURSES constant
├── state/
│   └── menuStore.ts         # Global variables & functions (addMenuItem, removeMenuItem, etc.)
├── screens/
│   ├── HomeScreen.tsx       # Main menu view with stats, filter bar, remove
│   ├── AddDishScreen.tsx    # Form to add dishes with animations
│   └── FilterScreen.tsx    # Guest-facing course filter view
├── package.json
└── tsconfig.json
```
 
---
 
## Change Log (Part 3 Refactor)
 
### v1.0.0 — Part 2 Submission
- Basic home screen listing menu items
- Inline add-dish form on the home screen
- Course selection buttons
- Display total item count
### v2.0.0 — Final PoE Refactor
 
**New features added:**
- `state/menuStore.ts` — Extracted all global state and functions into a dedicated module using global variables as required. Functions include `addMenuItem`, `removeMenuItem`, `getMenuItems`, `getTotalCount`, `getAveragePriceByCourse`.
- `screens/AddDishScreen.tsx` — Moved the entire add-dish form to a separate screen as required. Supports adding multiple dishes to a pending list before committing to the menu.
- `screens/FilterScreen.tsx` — New screen for guests to filter the menu by course with live counts.
- Average price per course now displayed on the home screen stats row.
- Animation feedback: success banner animation when a dish is added; shake animation on validation errors.
- `useFocusEffect` used on Home and Filter screens to refresh data when navigating back.
**Refactoring improvements:**
- Separated concerns: types, state, and screens are now in distinct folders/files.
- Used TypeScript throughout: strict typing, `Course` union type, `MenuItem` interface.
- Replaced inline state mutation with pure functions in `menuStore.ts`.
- Consistent design system: colour palette, spacing, and typography unified across all screens.
---
 
## How to Run
 
```bash
npm install
npx expo start
```
 
Scan the QR code with Expo Go on Android or iOS.
 
---
 
## Tech Stack
 
- React Native (Expo ~50)
- TypeScript
- React Navigation v6 (Native Stack)
 # MAST-FINAL-P.O.E
