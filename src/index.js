// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Utilisé pour React 18 et plus
import './index.css'; // Si tu as un fichier CSS global
import App from './App';  // L'application principale
import reportWebVitals from './reportWebVitals'; // Utilisé pour analyser les performances
import 'bootstrap/dist/css/bootstrap.min.css';  // Si tu utilises Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // Si tu utilises Font Awesome

// On cible l'élément avec l'ID 'root' dans ton fichier HTML pour y rendre l'application
const root = ReactDOM.createRoot(document.getElementById('root'));

// On rend l'application dans ce 'root'
root.render(
  <React.StrictMode>
    <App />  {/* L'application principale */}
  </React.StrictMode>
);

// Si tu veux mesurer les performances de ton app, tu peux envoyer les résultats à un service d'analyse
reportWebVitals();
