import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: '100vh',
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay noir semi-transparent */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>

        {/* Contenu */}
        <div className="position-relative z-1">
          <h1 className="display-4 fw-bold mb-3">Bonjour, je suis John Doe</h1>
          <h2 className="fs-4 mb-4">Développeur web full stack</h2>
          <a href="#about" className="btn btn-primary">En savoir plus</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-5">
        <div className="row g-5">
          <div className="col-md-6">
            <h3 className="h4 border-bottom border-primary pb-2 mb-4">À propos</h3>
            <p>
              Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.
            </p>
            <p>
              Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.
            </p>
            <p>
              J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/john-doe-about.jpg" alt="Développeur" className="img-fluid rounded shadow mb-4" />
            <h4 className="mb-3">Mes compétences</h4>
            <SkillBar name="HTML5" percent={90} color="bg-danger" />
            <SkillBar name="CSS3" percent={80} color="bg-info" />
            <SkillBar name="JAVASCRIPT" percent={70} color="bg-warning" />
            <SkillBar name="PHP" percent={60} color="bg-success" />
            <SkillBar name="REACT" percent={50} color="bg-primary" />
          </div>
        </div>
      </section>

      
    </div>
  );
}

function SkillBar({ name, percent, color }) {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>
      <div className="progress">
        <div className={`progress-bar ${color}`} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}
