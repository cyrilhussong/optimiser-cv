// src/components/GitHubProfile.js
import React, { useState, useEffect } from 'react';

const GitHubProfile = () => {
  // Définir l'état pour les informations du profil GitHub
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Utiliser useEffect pour récupérer les données au chargement du composant
  useEffect(() => {
    // URL de l'API GitHub
    const apiUrl = 'https://api.github.com/users/github-john-doe';

    // Effectuer l'appel API pour récupérer les informations du profil
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de récupération du profil GitHub');
        }
        return response.json();
      })
      .then(data => {
        setProfile(data);  // Mettre à jour l'état avec les données du profil
        setLoading(false);  // Fin du chargement
      })
      .catch(error => {
        setError(error.message);  // Gérer les erreurs
        setLoading(false);
      });
  }, []); // Ce useEffect s'exécute une seule fois au montage du composant

  // Si les données sont en cours de chargement
  if (loading) {
    return <div>Chargement...</div>;
  }

  // Si une erreur s'est produite lors de la récupération des données
  if (error) {
    return <div>Erreur: {error}</div>;
  }

  // Si les données sont disponibles, les afficher
  return (
    <div>
      <h1>Profil GitHub de {profile.name}</h1>
      <img src={profile.avatar_url} alt="Avatar" width="150" />
      <p><strong>Nom :</strong> {profile.name}</p>
      <p><strong>Bio :</strong> {profile.bio}</p>
      <p><strong>Location :</strong> {profile.location}</p>
      <p><strong>Followers :</strong> {profile.followers}</p>
      <p><strong>Following :</strong> {profile.following}</p>
      <p><strong>Repos :</strong> {profile.public_repos}</p>
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer">Voir le profil GitHub</a>
    </div>
  );
};

export default GitHubProfile;
