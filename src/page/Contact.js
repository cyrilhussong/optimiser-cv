import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <div>
      {/* Title */}
      <div className="container text-center mt-5 mb-3">
        <h2>ME CONTACTER</h2>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
        </p>
        <hr className="mx-auto" style={{ width: '80px', borderTop: '3px solid #007bff' }} />
      </div>

      {/* Contact Section with Full Background and Blue Transparent Overlay */}
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/contact-bg.jpg)`, // Utilisation du dossier public
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          padding: '60px 0',
          position: 'relative',
        }}
      >
        {/* Blue Transparent Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 105, 255, 0.5)',  // Fond bleu transparent
            zIndex: 1,
          }}
        ></div>

        {/* Form and Contact Info */}
        <div
          className="container bg-white p-4 rounded shadow"
          style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}
        >
          <div className="row">
            {/* Form */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h5 className="border-bottom pb-2">Formulaire de contact</h5>
              <form>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Votre nom"
                  required
                />
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Votre adresse email"
                  required
                />
                <input
                  type="tel"
                  className="form-control mb-2"
                  placeholder="Votre numéro de téléphone"
                  required
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Sujet"
                  required
                />
                <textarea
                  className="form-control mb-3"
                  rows="5"
                  placeholder="Votre message"
                  required
                ></textarea>
                <button type="submit" className="btn btn-primary">Envoyer</button>
              </form>
            </div>

            {/* Coordonnées */}
            <div className="col-md-6">
              <h5 className="border-bottom pb-2">Mes coordonnées</h5>
              <p>📍 40 Rue Laure Diebold, 69009 Lyon, France</p>
              <p>📞 06 20 30 40 50</p>
              <iframe
                src="https://www.google.com/maps?q=40+Rue+Laure+Diebold,+69009+Lyon,+France&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
