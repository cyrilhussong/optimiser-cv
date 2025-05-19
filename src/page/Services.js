import React from "react";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio | John Doe</title>
        <meta
          name="description"
          content="Découvrez mon portfolio, mes compétences et les services que je propose en développement web, UX design et référencement SEO."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-dyZ4fp+Pq0H4XvYyP6X7F3O0fGxw9b+6AaD2F3k58j5QjlNHRcYB98GvgCUjyTn7bhM5vV7b1Ay5C4nVx6K3Lg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Helmet>

      {/* Banner Section */}
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/banner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        <h1 className="display-4">Bienvenue sur mon portfolio</h1>
      </div>

      {/* Services Section */}
      <section
        className="text-center py-5"
        style={{
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="container">
          <h2 className="display-6 fw-bold mb-4">MON OFFRE DE SERVICES</h2>
          <p className="text-muted mb-5">
            Voici les prestations sur lesquelles je peux intervenir.
          </p>
          <hr
            className="mx-auto mb-5"
            style={{ width: "100px", borderTop: "3px solid #007bff" }}
          />

          <div className="row g-4 justify-content-center">
            {/* UX DESIGN Service */}
            <div className="col-md-4">
              <div className="bg-white rounded shadow p-4 h-100">
                <i className="fas fa-desktop fa-2x mb-3 text-primary"></i>
                <h5 className="fw-bold">UX DESIGN</h5>
                <p className="text-muted">
                  L’<strong>UX Design</strong> est une méthode de conception
                  centrée sur l’utilisateur. Son but est d’offrir une
                  expérience de navigation optimale à l’internaute.
                </p>
              </div>
            </div>

            {/* Développement Web Service */}
            <div className="col-md-4">
              <div className="bg-white rounded shadow p-4 h-100">
                <i className="fas fa-code fa-2x mb-3 text-primary"></i>
                <h5 className="fw-bold">DÉVELOPPEMENT WEB</h5>
                <p className="text-muted">
                  Le <strong>développement</strong> de sites web repose sur
                  l’utilisation des langages HTML, CSS, JavaScript et PHP.
                </p>
              </div>
            </div>

            {/* Référencement Service */}
            <div className="col-md-4">
              <div className="bg-white rounded shadow p-4 h-100">
                <i className="fas fa-search fa-2x mb-3 text-primary"></i>
                <h5 className="fw-bold">RÉFÉRENCEMENT</h5>
                <p className="text-muted">
                  Le <strong>référencement</strong> naturel d’un site, aussi
                  appelé <em>SEO</em>, consiste à mettre en œuvre des techniques
                  pour améliorer sa position dans les résultats des moteurs de
                  recherche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
