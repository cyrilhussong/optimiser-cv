import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Helmet } from 'react-helmet';

export default function MentionsLegales() {
  return (
    <div
      id="mentions-legales-page"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: '40px',
      }}
    >
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions légales</title>
      </Helmet>

      <div className="container text-center mb-3">
        <h2 style={{ fontSize: '48px' }}>MENTIONS LÉGALES</h2>
        <hr
          className="mx-auto"
          style={{ width: '80px', borderTop: '3px solid #007bff' }}
        />
      </div>

      <div style={{ width: '100%' }}>
        <div
          className="container bg-white p-4 rounded shadow"
          style={{ maxWidth: '90vw' }}
        >
          <div className="accordion" id="accordionMentions">
            {/* Éditeur */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading1">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapse1"
                >
                  Éditeur du site
                </button>
              </h2>
              <div
                id="collapse1"
                className="accordion-collapse collapse"
                aria-labelledby="heading1"
                data-bs-parent="#accordionMentions"
              >
                <div className="accordion-body">
                  Ce site est édité par <strong>John Doe</strong>, étudiant au
                  CEF. Il s'agit d'un projet pédagogique.
                </div>
              </div>
            </div>

            {/* Hébergeur */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  Hébergeur
                </button>
              </h2>
              <div
                id="collapse2"
                className="accordion-collapse collapse"
                aria-labelledby="heading2"
                data-bs-parent="#accordionMentions"
              >
                <div className="accordion-body">
                  Le site est hébergé par <strong>OVHcloud</strong>, dont le
                  siège social est situé au 2 Rue Kellermann, 59100 Roubaix,
                  France.
                </div>
              </div>
            </div>

            {/* Crédits */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  Crédits
                </button>
              </h2>
              <div
                id="collapse3"
                className="accordion-collapse collapse"
                aria-labelledby="heading3"
                data-bs-parent="#accordionMentions"
              >
                <div className="accordion-body">
                  Site développé par John Doe, étudiant du CEF.
                  <br />
                  Les images libres de droit sont issues de{' '}
                  <a
                    href="https://pixabay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pixabay
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
