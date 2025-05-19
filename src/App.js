// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Composants communs
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import PageAccueil from './page/Page-accueil';
import APropos from './page/A-propos';
import Services from './page/Services';
import Realisations from './page/Realisation';
import Blog from './page/Blog';
import Contact from './page/Contact';
import PageLegale from './page/Page-Legal';

// Composant supplémentaire
import GitHubProfile from './components/GitHubProfile';

function App() {
  return (
    <Router basename="/optimiser-cv"> {/* adapte ce basename si tu déploies sur GitHub Pages */}
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
          <Route path="/profil-github" element={<GitHubProfile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
