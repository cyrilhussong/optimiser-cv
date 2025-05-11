import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
  return (
    <div className="min-vh-100">

      {/* À propos Section */}
      <section className="py-5 bg-white min-vh-100 d-flex align-items-center">
        <div className="container">
          <h2 className="text-center display-6 fw-bold mb-4">À PROPOS</h2>
          <div className="row align-items-center">
            {/* Photo de profil */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src={`${process.env.PUBLIC_URL}/john-doe-about.jpg`}
                alt="John Doe"
                className="img-fluid rounded-circle shadow"
                style={{ maxWidth: '400px' }}
              />
            </div>

            {/* Texte + compétences */}
            <div className="col-md-8">
              <p className="mb-4">
                Je m'appelle <strong>John Doe</strong>, développeur web passionné avec une forte expertise en UX design,
                développement front-end et référencement naturel. Je mets mes compétences au service des entreprises
                pour créer des sites performants, ergonomiques et bien positionnés dans les moteurs de recherche.
              </p>

              {/* Compétences */}
              <div className="mb-3">
                <label className="fw-bold">HTML / CSS</label>
                <div className="progress">
                  <div className="progress-bar bg-primary" style={{ width: '90%' }}>
                    90%
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="fw-bold">JavaScript</label>
                <div className="progress">
                  <div className="progress-bar bg-success" style={{ width: '80%' }}>
                    80%
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="fw-bold">PHP / MySQL</label>
                <div className="progress">
                  <div className="progress-bar bg-info" style={{ width: '75%' }}>
                    75%
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="fw-bold">SEO</label>
                <div className="progress">
                  <div className="progress-bar bg-warning text-dark" style={{ width: '70%' }}>
                    70%
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
