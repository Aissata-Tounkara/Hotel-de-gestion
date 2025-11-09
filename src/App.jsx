import Connexion from "./Connexion";   // importer la page Login
import Inscription from "./Inscription";
import "./style.css";                  // importer le style
import MotdepasseOublier from "./MpOublier";

import "./ListeDesHotel.css";

import ListeDesHotel from "./ListeDesHotel";  
import Dashboard from "./Dashboard";
import "./Dashboard.css";
import Layout from "./Layout.jsx"; 





function App() {
  return (
    <div>
       <Connexion />
     <Inscription /> 
     <MotdepasseOublier />
    
     <Layout />
    <ListeDesHotel />
    <Dashboard />
        </div>
    
  );
}

export default App;
