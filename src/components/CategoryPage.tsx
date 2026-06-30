import React, { useState } from "react"; 

interface MenuItem { 

name: string; 

price: number; 

description: string; 

} 

interface CategoryPageProps { 

category: string; 

onBack: () => void; 

} 

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onBack }) => { 

const [items, setItems] = useState<MenuItem[]>([]); 

const [form, setForm] = useState<MenuItem>({ name: "", price: 0, description: "" }); 

const addItem = () => { 

  if (!form.name.trim()) return; 

  setItems([...items, form]); 

  setForm({ name: "", price: 0, description: "" }); 

}; 

  

return ( 

  <div style={styles.container}> 

    <h2>{category}</h2> 

    <button onClick={onBack} style={styles.backBtn}>← Back</button> 

  

    <div style={styles.form}> 

      <input 

         type="text" 

         placeholder="Item name" 

         value={form.name} 

         onChange={(e) => setForm({ ...form, name: e.target.value })} 

      /> 

      <input 

         type="number" 

         placeholder="Price" 

         value={form.price} 

         onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) || 0 })} 

      /> 

      <input 

         type="text" 

         placeholder="Description" 

         value={form.description} 

         onChange={(e) => setForm({ ...form, description: e.target.value })} 

      /> 

      <button onClick={addItem}>Add Item</button> 

    </div> 

  

    <ul style={styles.list}> 

      {items.map((item, i) => ( 

         <li key={i} style={styles.card}> 

          <strong>{item.name}</strong> — R{item.price.toFixed(2)} 

          <p>{item.description}</p> 

         </li> 

      ))} 

    </ul> 

  </div> 

); 

}; 

  

const styles: Record<string, React.CSSProperties> = { 

container: { padding: 20, textAlign: "center" }, 

form: { display: "flex", flexDirection: "column", gap: "8px", marginBottom: 16 }, 

backBtn: { position: "absolute", left: 20, top: 20 }, 

list: { listStyle: "none", padding: 0 }, 

card: { 

  border: "1px solid #ccc", 

  padding: "10px", 

  margin: "8px auto", 

  borderRadius: "8px", 

  width: "90%", 

  backgroundColor: "#FFFDE7", 

}, 

}; 

export default CategoryPage;