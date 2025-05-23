import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';

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
    image: 'img.blog.jpg',
  },
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog - Développement Web</title>
        <meta
          name="description"
          content="Découvrez des articles sur le développement web, le référencement et le design responsive."
        />
      </Helmet>

      <div>
        {/* Bannière */}
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
         {/*  <h1 className="display-4">Bienvenue sur mon Blog</h1>  */}
        </div>

        {/* En-tête du blog */}
        <div className="container text-center mt-5 mb-4">
          <h2>BLOG</h2>
          <p>Retrouvez ici quelques articles sur le développement web.</p>
        </div>

        {/* Cartes des articles */}
        <div className="container">
          <div className="row">
            {articles.map((article, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={`${process.env.PUBLIC_URL}/${article.image}`}
                    className="card-img-top"
                    alt={article.title}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text text-muted">Publié le {article.date}</p>
                    {/* Remplacement du <a href="#"> par un <button> accessible */}
                    <button
                      className="btn btn-primary mt-auto"
                      onClick={() => alert(`Lire la suite de : ${article.title}`)}
                      type="button"
                    >
                      Lire la suite
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
