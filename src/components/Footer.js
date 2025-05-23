import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const Footer = () => {

  useEffect(() => {
    const scrollToTopButton = document.getElementById("scrollToTop");

    // Fonction pour afficher ou masquer le bouton "Remonter en haut"
    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show'); // Ajoute la classe pour l'affichage du bouton
      } else {
        scrollToTopButton.classList.remove('show'); // Retire la classe pour masquer le bouton
      }
    };

    // Ajouter un écouteur d'événements pour le défilement
    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="text-white py-5 mt-5" style={{ backgroundColor: '#343a40' }}>
      <div className="container">
        <div className="row">
          {/* Colonne 1 - Informations de contact et réseaux sociaux */}
          <div className="col-md-3">
            <h6>John Doe</h6>
            <p>40 Rue Laure Diebold<br />69009 Lyon, France</p>
            <p>Téléphone : 06 20 30 40 50</p>
            <div>
              {/* Liens vers les réseaux sociaux */}
              <a href="https://github.com/johndoe" className="text-white me-2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/johndoe" className="text-white me-2" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/in/johndoe" className="text-white" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 - Liens utiles */}
          <div className="col-md-3">
            <h6>Liens utiles</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Accueil</Link></li>
              <li><Link to="/a-propos" className="text-white text-decoration-none">À propos</Link></li>
              <li><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Me contacter</Link></li>
              <li><Link to="/mentions-legales" className="text-white text-decoration-none">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Colonne 3 - Dernières réalisations */}
          <div className="col-md-3">
            <h6>Mes dernières réalisations</h6>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white text-decoration-none">Fresh food</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Restaurant Akira</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Espace bien-être</Link></li>
            </ul>
          </div>

          {/* Colonne 4 - Derniers articles */}
          <div className="col-md-3">
            <h6>Mes derniers articles</h6>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white text-decoration-none">Coder son site en HTML/CSS</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Vendre ses produits sur le web</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Se positionner sur Google</Link></li>
            </ul>
          </div>
        </div>

        {/* Ligne de copyright */}
        <div className="text-center text-white mt-4">
          <p>&copy; 2025 John Doe - Tous droits réservés.</p>
        </div>

        {/* Bouton "Retour en haut" */}
        <button
          id="scrollToTop"
          onClick={scrollToTop}
          className="btn btn-primary position-fixed bottom-0 end-0 m-4"
        >
          <i className="fas fa-arrow-up"></i> Remonter
        </button>
      </div>
    </footer>
  );
};

export default Footer;
