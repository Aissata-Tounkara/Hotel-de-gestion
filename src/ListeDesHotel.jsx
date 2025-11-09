 import Beach from "./images/Beach.webp";
 import King from "./images/King.webp";
 import Lac from "./images/Lac.webp";
 import Pullman from "./images/Pullman.webp";
 import Radisson from "./images/Radisson.webp";
 import Saly from "./images/Saly.webp";
 import Teranga from "./images/Teranga.webp";
import Terrou from "./images/Terrou.webp";

// function ListeDesHotel() {
//   return (
//     <div>
//       <h2>Liste des Hôtels</h2>

//       <div>
//         <img src={Terrou} alt="Terrou Hotel" width="250" />
//         <p>Boulevard Martin Luther King Dakar, 11500</p>
//         <h2>Hôtel Terrou-Bi</h2>
//         <h3>25.000 XOF par nuit</h3>
//       </div>

//       <div>
//         <img src={King} alt="King Hotel" width="250" />
//         <p>King Fahd Palace</p>
//         <h2>Rte des Almadies, Dakar</h2>
//         <h3>20.000 XOF par nuit</h3>



        
//       </div>


//       <div>
//         <img src={Radisson} alt="Radisson Hotel" width="250" />
//         <p> Radisson Blu Hotel</p>
        
//        <h2>Rte de la Corniche O, Dakar 16868</h2>
//        <h3>22.000 XOF par nuit</h3>

//       </div>

//       <div>
//         <img src={Pullman} alt="Pullman Hotel" width="250" />
//         <p>Pullman Dakar Teranga</p>
//         <h2>Place de l'Independance, 10 Rue PL 29, Dakar</h2>
//         <h3>30.000 XOF par nuit</h3>
//       </div>


//       <div>
//         <img src={Lac} alt="Lac Hotel" width="250" />
//         <p> Hôtel Lac Rose</p>
//         <h2>Lac Rose, Dakar</h2>
//         <h3>25.000 XOF par nuit</h3>
//       </div>


//       <div>
//         <img src={Saly} alt="Saly Hotel" width="250" />
//         <p>Hôtel Saly</p>
//         <h2>Mbour, Sénégal</h2>
//         <h3>20.000 XOF par nuit</h3>
//       </div>


//       <div>
//         <img src={Beach} alt="Beach Hotel" width="250" />
//         <p>Palm Beach Resort & Spa</p>
//         <h2>BP64, Saly 23000</h2>
//         <h3>20.000 XOF par nuit</h3>
//       </div>


//       <div>
//         <img src={Teranga} alt="Teranga Hotel" width="250" />
//         <p>King Fahd Palace</p>
//         <h2>Hôtel Teranga</h2>
//         <h3>20.000 XOF par nuit</h3>
//       </div>
//       </div>

//   );
// }

// export default ListeDesHotel;


function ListeDesHotel() {
  return (
    <div className="hotel-container">

      <h2>Liste des Hôtels</h2>

      <div className="hotels-grid">

        <div className="hotel-card">
          <img src={Terrou} alt="Terrou Hotel" width="250" />
          <p>Boulevard Martin Luther King Dakar, 11500</p>
          <h2>Hôtel Terrou-Bi</h2>
          <h3>25.000 XOF par nuit</h3>
        </div>

        <div className="hotel-card">
          <img src={King} alt="King Hotel" width="250" />
          <p>King Fahd Palace</p>
          <h2>Rte des Almadies, Dakar</h2>
          <h3>20.000 XOF par nuit</h3>
        </div>

        <div className="hotel-card">
          <img src={Radisson} alt="Radisson Hotel" width="250" />
          <p> Radisson Blu Hotel</p>
          <h2>Rte de la Corniche O, Dakar 16868</h2>
          <h3>22.000 XOF par nuit</h3>
        </div>

        <div className="hotel-card">
          <img src={Pullman} alt="Pullman Hotel" width="250" />
          <p>Pullman Dakar Teranga</p>
          <h2>Place de l'Independance</h2>
          <h3>30.000 XOF par nuit</h3>
        </div>

        <div className="hotel-card">
          <img src={Lac} alt="Lac Hotel" width="250" />
          <p> Hôtel Lac Rose</p>
          <h2>Lac Rose, Dakar</h2>
          <h3>25.000 XOF par nuit</h3>
        </div>

        <div className="hotel-card">
          <img src={Saly} alt="Saly Hotel" width="250" />
          <p>Hôtel Saly</p>
          <h2>Mbour, Sénégal</h2>
          <h3>20.000 XOF par nuit</h3>
        </div>


         <div className="hotel-card">
          <img src={Beach} alt="Beach Hotel" width="250" />
          <p>Palm Beach Resort & Spa</p>
          <h2>BP64, Saly 23000</h2>
          <h3>20.000 XOF par nuit</h3>
        </div>


        <div className="hotel-card">
          <img src={Teranga} alt="Teranga Hotel" width="250" />
           <p>King Fahd Palace</p>
           <h2>Hôtel Teranga</h2>
           <h3>20.000 XOF par nuit</h3>
         </div>



      </div>
    </div>
  );
}

export default ListeDesHotel;

