// Import des hooks et des modules nécessaires depuis react-router-dom
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Import des données de localisation et des composants nécessaires
import locations from "../../data/locations.json";
import CustomCarousel from "../../components/Carousel/Carousel";
import CollapseRental from "../../components/Collapse/CollapseRental";
import "./RentalPage.scss";
import { FaStar } from 'react-icons/fa';

// Composant RentalPages
const RentalPages = () => {
  // Utilisation de useParams pour obtenir les paramètres de l'URL
  const { id } = useParams();
  // Utilisation de useNavigate pour obtenir une fonction de navigation
  const navigate = useNavigate();
  // Recherche de la location correspondant à l'ID dans les données
  const location = locations.find(item => item.id === id);

  // Effet de rendu pour la gestion de la non-existence de la location
  useEffect(() => { 
    // Si aucune location correspondante n'est trouvée, naviguer vers une page d'erreur
    if (!location) navigate("/error"); 
  }, [id, location, navigate]);

  // Rendu conditionnel basé sur l'existence de la location
  return location ? (
    <div className="rental-page">
      {/* Affichage du composant CustomCarousel pour afficher les images de la location */}
      <CustomCarousel rentalId={id} />
      <div className="loc-container-up-down">
        <div className="loc-content-up">
          {/* Affichage du titre, de la localisation et des tags de la location */}
          <h2>{location.title}</h2>
          <h3>{location.location}</h3>
          <div className="container-tags">{location.tags.map((tag, index) => <span key={index}>{tag}</span>)}</div>
        </div>
        <div className="hostRating">
          <div className="host">
            {/* Affichage du nom de l'hôte et de son image */}
            <h3 className="host_name">{location.host.name}</h3>
            <img src={location.host.picture} alt={location.host.name} />
          </div>
          <div className="rating">
            {/* Affichage de la notation de la location sous forme d'étoiles */}
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar key={index} className={index < parseInt(location.rating) ? "star-icon active" : "star-icon"} />
            ))}
          </div>
        </div>
      </div>
      <div className="loc-content-down">
        {/* Affichage du composant CollapseRental pour afficher la description et les équipements de la location */}
        <CollapseRental description={location.description} equipments={location.equipments} />
      </div>
    </div>
  ) : null;
};

export default RentalPages; // Exportation du composant RentalPages
