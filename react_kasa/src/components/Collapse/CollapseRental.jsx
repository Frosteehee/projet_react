import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';
import "./CollapseRental.scss";
import arrowCollapse from "../../assets/images/arrow.svg";

const CollapseRental = ({ description, equipments }) => {
  return (
    <div className='collapsedRental'>
      {/* Collapsible pour la description */}
      <Collapsible trigger={<TriggerLabel title="Description" />} className="collapse-container">
        <p className='description'>{description}</p>
      </Collapsible>
      
      {/* Collapsible pour les équipements */}
      <Collapsible trigger={<TriggerLabel title="Equipements" />} className="collapse-container">
        <ul className='equipment'>
          {equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}
        </ul>
      </Collapsible>
    </div>
  );
};

// Définition des types de props attendues
CollapseRental.propTypes = {
  description: PropTypes.string.isRequired,
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Composant pour le libellé du trigger
const TriggerLabel = ({ title }) => (
  <div className="trigger-container__rental">
    {title}
    <img src={arrowCollapse} alt="Arrow" className='arrowCollapsed' />
  </div>
);

// Types de props attendues pour TriggerLabel
TriggerLabel.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CollapseRental;
