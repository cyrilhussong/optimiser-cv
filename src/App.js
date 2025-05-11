// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import des composants Header et Footer
import Header from './components/Header';
import Footer from './components/Footer';

// Import des pages
import PageAccueil from './page/Page-accueil';
import APropos from './page/A-propos';
import Services from './page/Services';
import Realisations from './page/Realisation';
import Blog from './page/Blog';
import Contact from './page/Contact';
import PageLegale from './page/Page-Legal';

// Import du composant GitHubProfile
import GitHubProfile from './components/GitHubProfile';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PageAccueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<PageLegale />} />
          
          {/* Ajouter la route pour afficher le profil GitHub */}
          <Route path="/profil-github" element={<GitHubProfile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
