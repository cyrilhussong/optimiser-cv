import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const articles = [
  {
    title: 'Coder son site en HTML/CSS',
    date: '22 août 2022',
    image: 'google.jpg',
  },
  {
    title: 'Vendre ses produits sur le web',
    date: '20 août 2022',
    image: 'seo.jpg',
  },
  {
    title: 'Se positionner sur Google',
    date: '1 août 2022',
    image: 'screens.jpg',
  },
  {
    title: 'Coder en responsive design',
    date: '31 juillet 2022',
    image: 'croissance.jpg',
  },
  {
    title: 'Techniques de référencement',
    date: '30 juillet 2022',
    image: 'coder.jpg',
  },
  {
    title: 'Apprendre à coder facilement',
    date: '12 juillet 2022',
    image: 'hero-bg.jpg',
  },
];

export default function Blog() {
  return (
    <div>
      {/* Banner */}
      <div
        style={{
           backgroundImage: `url(${process.env.PUBLIC_URL}/banner.jpg)`, // Utilisation du dossier public
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
        <h1 className="display-4">Bienvenue sur mon Blog</h1>
      </div>

      {/* Blog header */}
      <div className="container text-center mt-5 mb-4">
        <h2>BLOG</h2>
        <p>Retrouvez ici quelques articles sur le développement web.</p>
      </div>

      {/* Blog Cards */}
      <div className="container">
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img src={article.image} className="card-img-top" alt={article.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text text-muted">Publié le {article.date}</p>
                  <a href="#" className="btn btn-primary mt-auto">Lire la suite</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
