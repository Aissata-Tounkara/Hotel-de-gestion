import { Link, Outlet, useLocation } from "react-router-dom";
import { FaHotel, FaTachometerAlt } from "react-icons/fa";
import "./Layout.css";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="layout">
      {/* Barre latérale */}
      <aside className="sidebar">
        <h2 className="logo">🏨 RED PRODUCT</h2>
        <p className="section-title">Principal</p>

        <nav>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            <FaTachometerAlt /> Dashboard
          </Link>

          <Link
            to="/hotels"
            className={`nav-link ${location.pathname === "/hotels" ? "active" : ""}`}
          >
            <FaHotel /> Liste des Hôtels
          </Link>
        </nav>
      </aside>

      {/* Zone principale (contenu dynamique) */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
