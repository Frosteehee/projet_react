import React from "react"; // Importe la bibliothèque React
import PropTypes from "prop-types"; // Importe PropTypes pour définir les types des props
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; // Importe les icônes FaAngleLeft et FaAngleRight
import locations from "../../data/locations.json"; // Importe les données de localisation à partir du fichier JSON
import "./Carousel.scss"; // Importe les styles CSS du composant Carousel

// Définition du composant CustomCarousel
const CustomCarousel = ({ rentalId }) => {
  // Recherche de la location correspondant à l'ID donné, utilise un objet par défaut avec un tableau vide de pictures s'il n'est pas trouvé
  const rental = locations.find(item => item.id === rentalId) || { pictures: [] };
  const total = rental.pictures.length; // Détermine le nombre total d'images dans la location

  // Hook useState pour gérer l'état de l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Fonction pour passer à l'image précédente
  const previous = () => setCurrentIndex(prev => (prev === 0 ? total - 1 : prev - 1));

  // Fonction pour passer à l'image suivante
  const next = () => setCurrentIndex(prev => (prev === total - 1 ? 0 : prev + 1));

  // Rendu du composant
  return (
    <div className="custom-carousel" tabIndex="0" onKeyDown={e => e.key === "ArrowLeft" ? previous() : e.key === "ArrowRight" ? next() : null}>
      {total > 1 && ( // Vérifie si le nombre total d'images est supérieur à 1
        <>
          <button aria-label="Previous image" onClick={previous} className="arrow left"><FaAngleLeft /></button> {/* Bouton pour passer à l'image précédente */}
          <button aria-label="Next image" onClick={next} className="arrow right"><FaAngleRight /></button> {/* Bouton pour passer à l'image suivante */}
          <div className="image-counter">{currentIndex + 1} / {total}</div> {/* Affichage du compteur d'images */}
        </>
      )}
      <img className="carousel-img" src={rental.pictures[currentIndex]} alt={rental.title} /> {/* Affichage de l'image actuelle */}
    </div>
  );
};

// Définition des types de props attendus par le composant CustomCarousel
CustomCarousel.propTypes = {
  rentalId: PropTypes.string.isRequired, // rentalId doit être de type string et obligatoire
};

export default CustomCarousel; // Exporte le composant CustomCarousel
