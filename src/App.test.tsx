import React, { useState } from "react"; 

import SplashScreen from "./components/SplashScreen"; 

import MainMenu from "./components/MainMenu"; 

import CategoryPage from "./components/CategoryPage"; 

const App: React.FC = () => { 

const [showSplash, setShowSplash] = useState(true); 

const [selectedCategory, setSelectedCategory] = useState<string | null>(null); 

if (showSplash) { 

  return <SplashScreen onFinish={() => setShowSplash(false)} />; 

} 

  

if (selectedCategory) { 

  return ( 

    <CategoryPage 

      category={selectedCategory} 

      onBack={() => setSelectedCategory(null)} 

    /> 

  ); 

} 

  

return <MainMenu onSelectCategory={setSelectedCategory} />; 

}; 

export default App;