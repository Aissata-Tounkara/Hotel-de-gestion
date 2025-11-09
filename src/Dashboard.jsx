import { FaSearch, FaBell, FaUser, FaSignOutAlt, FaUserAlt, FaEnvelope, FaUsers } from "react-icons/fa";
import "./Dashboard.css";

export default function Dashboard() {
  const stats = [
    { icon: <FaUserAlt />, number: 125, text: "Formulaires", color: "#E8D9FF" },
    { icon: <FaEnvelope />, number: 40, text: "Messages", color: "#DFFFE8" },
    { icon: <FaEnvelope />, number: 25, text: "E-mails", color: "#FFE2E2" },
    { icon: <FaUsers />, number: 600, text: "Utilisateurs", color: "#FFF5C5" }
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="top-bar">
        <h2>Dashboard</h2>

        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Recherche" />
        </div>

        <div className="icons">
          <FaBell />
          <FaUser />
          <FaSignOutAlt />
        </div>
      </header>

      {/* Welcome area */}
      <div className="welcome">
        <h3>Bienvenue sur RED Product</h3>
        <p>Votre meilleure expérience hôtelière commence ici</p>
      </div>

      {/* Stats cards */}
      <div className="cards">
        {stats.map((item, index) => (
          <div className="card" key={index}>
            <div className="icon-circle" style={{ background: item.color }}>
              {item.icon}
            </div>
            <h2>{item.number}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
