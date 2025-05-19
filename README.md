# Optimiser CV - Projet React & Bootstrap

Ce projet est une application web responsive réalisée avec **React.js** et **Bootstrap 5**, suivant un cahier des charges précis. Il s'agit d'un site portfolio fictif pour un développeur nommé **John Doe**.

## 🎯 Objectifs pédagogiques

- Utiliser **React avec des composants fonctionnels** et les **hooks** (`useState`, `useEffect`)
- Maîtriser l'intégration de **Bootstrap 5** pour le responsive design
- Appliquer une **identité graphique complète** (polices, couleurs, favicon, logo)
- Créer une **expérience utilisateur fluide** avec effets CSS et transitions
- Afficher dynamiquement un **profil GitHub via l'API**

---

## 📄 Pages du site

- **Accueil** : image plein écran, titres, bouton vers "À propos", superposition noire (`rgba(0, 0, 0, 0.3)`)
- **À propos** : présentation de John Doe, photo, compétences avec progress bars Bootstrap
- **Services** : offres de service de John Doe avec effets au survol
- **Réalisations** : portfolio de 3 projets en Bootstrap Cards
- **Blog** : aperçu de 6 articles sous forme de Cards
- **Contact** :
  - Formulaire avec champs obligatoires : nom, e-mail, téléphone, sujet, message
  - Coordonnées complètes
  - Carte Google Map
  - Image de fond avec overlay bleu transparent `rgba(0, 105, 255, 0.5)`
- **Mentions légales** :
  - Éditeur, hébergeur, crédits (Pixabay)
  - Présentation en **accordéon Bootstrap**
  - Non indexée par les moteurs de recherche

---

## 🧩 Fonctionnalités techniques

- **Header** présent sur toutes les pages :
  - Logo textuel
  - Navigation responsive (hamburger menu)
  - Lien actif en couleur distincte
  - Liens en majuscules
- **Footer** commun à toutes les pages avec :
  - 4 colonnes : infos personnelles, navigation, réalisations, articles
  - Réseaux sociaux cliquables (GitHub, Twitter, LinkedIn) ouvrant dans un nouvel onglet, non suivis pour le SEO
  - Copyright
  - Bouton "Retour en haut" visible uniquement au scroll (Vanilla JS)
- **Effets visuels** :
  - Hover sur les liens de navigation : blanc avec opacité 0.8
  - Icônes des services : couleur `#cde1f8` au survol
  - Bouton retour haut : fond `#298eff` au hover
- **API GitHub** :
  - Affichage dynamique des données de `https://api.github.com/users/github-john-doe`

---

## 🛠️ Technologies utilisées

- [React](https://reactjs.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Font Awesome 6](https://fontawesome.com/)
- [Google Fonts - Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
- [API GitHub Users](https://docs.github.com/en/rest/users/users)

---

## 📁 Lien du projet

🔗 [https://github.com/cyrilhussong/optimiser-cv](https://github.com/cyrilhussong/optimiser-cv)

---

## 👨‍💻 Auteur

Cyril Hussong  
Étudiant développeur web  
Projet réalisé dans le cadre d’un devoir React & Bootstrap

