import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
  return (
    <div>
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: 'url(/banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', /* Remplir toute la hauteur de l'écran */
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        }}
      >
        </div>
      
      {/* Services Section */}
      <section className="text-center py-5" style={{
        
        backgroundColor: '#f8f9fa',
        minHeight: '100vh', /* Remplir toute la hauteur de la page */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <div className="container">
          <h2 className="display-6 fw-bold mb-4">MON OFFRE DE SERVICES</h2>
          <p className="text-muted mb-5">
            Voici les prestations sur lesquelles je peux intervenir.
          </p>
          <hr className="mx-auto mb-5" style={{ width: '100px', borderTop: '3px solid #007bff' }} />

          <div className="row g-4 justify-content-center">
            {/* UX DESIGN Service */}
            <div className="col-md-4">
              <div className="bg-white rounded shadow p-4 h-100">
                <i className="fas fa-desktop fa-2x mb-3 text-primary"></i>
                <h5 className="fw-bold">UX DESIGN</h5>
                <p className="text-muted">
                  L’<strong>UX Design</strong> est une méthode de conception centrée sur l’utilisateur. Son but est d’offrir une expérience de navigation optimale à l’internaute.
                </p>
              </div>
            </div>
            {/* Développement Web Service */}
            <div className="col-md-4">
              <div className="bg-white rounded shadow p-4 h-100">
                <i className="fas fa-code fa-2x mb-3 text-primary"></i>
                <h5 className="fw-bold">DÉVELOPPEMENT WEB</h5>
                <p className="text-muted">
                  Le <strong>développement</strong> de sites web repose sur l’utilisation des langages <a href="#">HTML</a>, <a href="#">CSS</a>, <a href="#">JavaScript</a> et <a href="#">PHP</a>.
                </p>
              </div>
            </div>
            {/* Référencement Service */}
            <div className="col-md-4">
              <div className="bg-white rounded shadow p-4 h-100">
                <i className="fas fa-search fa-2x mb-3 text-primary"></i>
                <h5 className="fw-bold">RÉFÉRENCEMENT</h5>
                <p className="text-muted">
                  Le <strong>référencement</strong> naturel d’un site, aussi appelé <a href="#">SEO</a>, consiste à mettre des techniques en œuvre pour <em>améliorer sa position</em> dans les résultats des moteurs de recherche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
