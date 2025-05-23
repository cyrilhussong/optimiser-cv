import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(open => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            John DOE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contrôle l'affichage via style inline */}
          <div
            className="navbar-collapse"
            style={{
              display: menuOpen ? 'block' : 'none'
            }}
          >
            <ul className="navbar-nav ms-auto">
              {[
                { path: '/', label: 'Accueil' },
               /* { path: '/A-PROPOS', label: 'A propos' },*/
                { path: '/services', label: 'Services' },
                { path: '/realisations', label: 'Réalisations' },
                { path: '/blog', label: 'Blog' },
                { path: '/contact', label: 'Contact' },
                { path: '/mentions-legales', label: 'Mentions légales' },
              ].map(({ path, label }) => (
                <li key={path} className={`nav-item ${location.pathname === path ? 'active' : ''}`}>
                  <Link className="nav-link" to={path} onClick={closeMenu}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
