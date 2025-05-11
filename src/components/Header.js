import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation(); // Hook pour obtenir la route actuelle

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">John DOE</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
                <Link className="nav-link" to="/">Accueil</Link>
              </li>
              <li className={`nav-item ${location.pathname === "/A-PROPOS" ? "active" : ""}`}>
                <Link className="nav-link" to="/A-PROPOS">A propos</Link>
              </li>
              <li className={`nav-item ${location.pathname === "/services" ? "active" : ""}`}>
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className={`nav-item ${location.pathname === "/realisations" ? "active" : ""}`}>
                <Link className="nav-link" to="/realisations">Réalisations</Link>
              </li>
              <li className={`nav-item ${location.pathname === "/blog" ? "active" : ""}`}>
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className={`nav-item ${location.pathname === "/mentions-legales" ? "active" : ""}`}>
                <Link className="nav-link" to="/mentions-legales">Mentions légales</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
