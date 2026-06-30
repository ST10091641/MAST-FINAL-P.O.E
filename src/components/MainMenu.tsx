
import React from "react"; 

interface MainMenuProps { 

onSelectCategory: (category: string) => void; 

} 

const MainMenu: React.FC<MainMenuProps> = ({ onSelectCategory }) => { 

const categories = ["Starters", "Mains", "Desserts"]; 

return ( 

  <div style={styles.container}> 

    <h2>Choose a Category</h2> 

    {categories.map((cat) => ( 

      <button key={cat} onClick={() => onSelectCategory(cat)} style={styles.button}> 

         {cat} 

      </button> 

    ))} 

  </div> 

); 

}; 

const styles: Record<string, React.CSSProperties> = { 

container: { 

  display: "flex", 

  flexDirection: "column", 

  alignItems: "center", 

  height: "100vh", 

  justifyContent: "center", 

  backgroundColor: "#FFF8E1", 

}, 

button: { 

  padding: "10px 20px", 

  margin: "8px", 

  fontSize: "1.2rem", 

  cursor: "pointer", 

}, 

}; 

export default MainMenu;