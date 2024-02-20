import Collapsible from 'react-collapsible'; // Importe le composant Collapsible
import CollapseData from '../../data/collapses.json'; // Importe les données des collapses à partir du fichier JSON
import './Collapse.scss'; // Importe les styles CSS du composant Collapse
import arrowCollapse from '../../assets/images/arrow.svg'; // Importe l'icône d'arrow

// Définition du composant Collapse
const Collapse = () => {
  return (
    <div>
      {/* Mapping sur les données des collapses */}
      {CollapseData.map(collapse => ( // Pour chaque collapse, affiche le titre et le texte
       // Définit le titre du collapse et l'icône d'arrow
        <Collapsible key={collapse.id} trigger={<div className="trigger-container">{collapse.title}<img src={arrowCollapse} alt="Arrow" className='arrowCollapsedAbout' /></div>}>
          <p>{collapse.text}</p> {/* Affiche le texte du collapse */}
        </Collapsible>
      ))}
    </div>
  );
};

export default Collapse; // Exporte le composant Collapse
