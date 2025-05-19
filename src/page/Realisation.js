import React from "react";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio | John Doe</title>
        <meta
          name="description"
          content="Découvrez mes réalisations web : sites vitrines, e-commerce et projets personnels."
        />
      </Helmet>

      <div>
        {/* Banner Section */}
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/banner.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          <h1 className="display-4 text-center">Mes réalisations</h1>
        </div>

        {/* Portfolio Section */}
        <section className="text-center py-5" style={{ backgroundColor: '#ffffff' }}>
          <div className="container">
            <h2 className="display-6 fw-bold mb-2">PORTFOLIO</h2>
            <p className="text-muted mb-5">Voici quelques-unes de mes réalisations.</p>
            <hr className="mx-auto mb-5" style={{ width: '100px', borderTop: '3px solid #007bff' }} />

            <div className="row g-4">
              {/* Projet 1 */}
              <div className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img src={`${process.env.PUBLIC_URL}/fresh-food.jpg`} className="card-img-top" alt="Site Fresh Food" />
                  <div className="card-body">
                    <h5 className="card-title">Fresh Food</h5>
                    <p className="card-text">Réalisation d’un site avec commande en ligne.</p>
                    <Link to="/fresh-food" className="btn btn-outline-primary btn-sm">Voir</Link>
                  </div>
                  <div className="card-footer text-muted small">Site réalisé avec PHP et MySQL</div>
                </div>
              </div>

              {/* Projet 2 */}
              <div className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img src={`${process.env.PUBLIC_URL}/restaurant-japonais.jpg`} className="card-img-top" alt="Site Restaurant Akira" />
                  <div className="card-body">
                    <h5 className="card-title">Restaurant Akira</h5>
                    <p className="card-text">Réalisation d’un site vitrine.</p>
                    <Link to="/restaurant-akira" className="btn btn-outline-primary btn-sm">Voir</Link>
                  </div>
                  <div className="card-footer text-muted small">Site réalisé avec WordPress</div>
                </div>
              </div>

              {/* Projet 3 */}
              <div className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img src={`${process.env.PUBLIC_URL}/espace-bien-etre.jpg`} className="card-img-top" alt="Site Espace bien-être" />
                  <div className="card-body">
                    <h5 className="card-title">Espace bien-être</h5>
                    <p className="card-text">Réalisation d’un site vitrine pour un praticien de bien-être.</p>
                    <Link to="/espace-bien-etre" className="btn btn-outline-primary btn-sm">Voir</Link>
                  </div>
                  <div className="card-footer text-muted small">Site réalisé en HTML/CSS</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
