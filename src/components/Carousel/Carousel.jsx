import { useState } from "react";
import PropTypes from "prop-types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import locations from "../../data/locations.json";
import "./Carousel.scss";

// Définit le composant CustomCarousel
const CustomCarousel = ({ rentalId }) => { // Recherche la location correspondant à l'ID donné dans les données de localisation
  const rental = locations.find(item => item.id === rentalId) || { pictures: [] };// Si aucune location correspondante n'est trouvée, retourne un objet avec un tableau vide de pictures
 
  const total = rental.pictures.length;// Détermine la longueur totale du tableau d'images de la location
 
  const [currentIndex, setCurrentIndex] = useState(0);  // Initialise l'état local currentIndex à 0 pour suivre l'index de l'image actuellement affichée
 
  const previous = () => { // Fonction pour passer à l'image précédente dans le carrousel

  const newIndex = currentIndex - 1;   // Calcule le nouvel index en décrémentant l'index actuel de 1  // Met à jour l'état currentIndex en vérifiant si le nouvel index est inférieur à 0
  
    setCurrentIndex(newIndex < 0 ? total - 1 : newIndex);  // Si c'est le cas, retourne l'index de la dernière image, sinon retourne le nouvel index calculé
  };

  // Fonction pour passer à l'image suivante dans le carrousel
  const next = () => {
    const newIndex = currentIndex + 1;// Calcule le nouvel index en incrémentant l'index actuel de 1
 
   
    setCurrentIndex(newIndex >= total ? 0 : newIndex);    // Met à jour l'état currentIndex en vérifiant si le nouvel index dépasse le nombre total d'images
    // Si c'est le cas, retourne l'index de la première image, sinon retourne le nouvel index calculé
  };

  return (
    <div className="custom-carousel">
      {/* Conditionnellement, rend le contenu à l'intérieur des parenthèses si le nombre total d'images est supérieur à 1 */}
      {total > 1 && (
        <>
        <div className="carousel-controls">
          {/* Bouton pour passer à l'image précédente */}
          <button className="angleLeft" onClick={previous}><FaAngleLeft /></button>
          {/* Bouton pour passer à l'image suivante */}
          <button className="angleRight" onClick={next}><FaAngleRight /></button>
          </div>
          {/* Affiche le compteur d'images indiquant l'index de l'image actuelle sur le total */}
          <div className="currentIndex">{currentIndex + 1} / {total}</div>
          
        </>
      )}
      {/* Affiche l'image actuelle à partir des données de location */}
      <img src={rental.pictures[currentIndex]} alt={rental.title} />
    </div>
  );
};

// Définit les types de props attendus par le composant CustomCarousel
CustomCarousel.propTypes = {
  rentalId: PropTypes.string.isRequired, // rentalId doit être de type string et obligatoire
};

// Exporte le composant CustomCarousel pour qu'il puisse être utilisé dans d'autres fichiers
export default CustomCarousel;

/////////////////////////////////////////////Commentaires sur le code/////////////////////////////////////////////

/*
useState est un hook de React qui permet à un composant fonctionnel de gérer son propre état interne. Avant l'introduction des hooks dans React, 
les composants fonctionnels ne pouvaient pas conserver leur propre état, ce qui était l'une des principales différences entre les composants fonctionnels et les composants de classe.

L'utilisation de useState dans un composant fonctionnel permet de déclarer une variable d'état et une fonction pour la mettre à jour. Voici comment cela fonctionne :

Déclaration de l'état initial : déclarer une variable d'état en appelant la fonction useState et en lui passant la valeur initiale de l'état. Par exemple :

const [count, setCount] = useState(0);
Ici, count est la variable d'état et setCount est la fonction qui permet de mettre à jour cette variable.

Utilisation de l'état :  utiliser la variable d'état (count dans l'exemple ci-dessus) dansle composant comme n'importe quelle autre variable JavaScript. 
Par ex,  l'afficher dans JSX ou utiliser sa valeur dans des calculs.

Mise à jour de l'état : Pour mettre à jour l'état, appeler la fonction de mise à jour (setCount par ex ici) et passer la nouvelle valeur de l'état. React s'occupera ensuite de mettre à jour le 
composant en conséquence. Par exemple :

setCount(count + 1);
Passage d'une fonction à useState : passer une fonction à useState pour calculer la valeur initiale de l'état. Cela peut être utile si le calcul de la valeur initiale est coûteux en ressources, 
car la fonction ne sera exécutée qu'une seule fois lors du rendu initial du composant.
En gros : useState est un hook de React qui permet aux composants fonctionnels de conserver leur propre état interne, ce qui les rend + puissants et + flexible. */