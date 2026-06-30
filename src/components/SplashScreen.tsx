import React, { useEffect } from "react"; 

interface SplashProps { 

 onFinish: () => void; 

} 

const SplashScreen: React.FC<SplashProps> = ({ onFinish }) => { 

 useEffect(() => { 

   const timer = setTimeout(onFinish, 2000); 

   return () => clearTimeout(timer); 

 }, [onFinish]); 

 return ( 

   <div style={styles.container}> 

     <img src="/chef-hat.png" alt="Chef Hat" style={styles.image} /> 

     <h1 style={styles.title}>Chef’s Menu</h1> 

   </div> 

 ); 

}; 

  

const styles: Record<string, React.CSSProperties> = { 

 container: { 

   height: "100vh", 

   display: "flex", 

   flexDirection: "column", 

   justifyContent: "center", 

   alignItems: "center", 

   backgroundColor: "#FFE082", 

 }, 

 image: { width: 150, height: 150 }, 

 title: { fontSize: "2.5rem", fontWeight: "bold", marginTop: 16 }, 

}; 

  



export default SplashScreen; 