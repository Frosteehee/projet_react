import "./Cards.scss"; // Importation du fichier de style
import data from "../../data/locations.json"; // Importation des données de localisation
import { Link } from "react-router-dom"; // Importation du composant de lien de React Router

// Composant Cards
const Cards = () => {
  // Fonction pour générer le lien vers la location
  const rentalLink = (id) => `/rental/${id}`;

  // Fonction pour créer chaque carte de localisation
  const renderCard = ({ id, title, cover, description }) => (
    // Utilisation du composant Link pour créer un lien vers la page de la location
    <Link to={rentalLink(id)} className="cards-link" key={id}>
      {/* Conteneur de la carte */}
      <figure className="cards" key={id}>
        {/* Image de la carte */}
        <img src={cover} alt={description} className="cards-img" />
        {/* Légende de la carte */}
        <figcaption className="cards-txt">{title}</figcaption>
      </figure>
    </Link>
  );

  // Rendu du composant Cards
  return (
    <article className="cards-container">
      {/* Mapping des données pour afficher chaque carte */}
      {data.map((location) => renderCard(location))}
    </article>
  );
};

export default Cards; // Exportation du composant Cards
