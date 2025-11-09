import Connexion from "./Connexion";   // importer la page Login
import Inscription from "./Inscription";
import "./style.css";                  // importer le style
import MotdepasseOublier from "./MpOublier";
import Accueil from "./Accueil";
import "./ListeDesHotel.css";

import ListeDesHotel from "./ListeDesHotel";  
import Dashboard from "./Dashboard";
import "./Dashboard";



function App() {
  return (
    <body>
      {/* <Connexion />
     <Inscription /> */}
     <MotdepasseOublier />
     <Accueil />
     

    <ListeDesHotel />
    <Dashboard />
        </body>
    
  );
}

export default App;
