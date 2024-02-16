import Collapsible from 'react-collapsible';
import collapses from '../../data/collapses.json';
import iconCollapse from '../../assets/images/arrow.svg';
import './Collapse.css'; // Importation du fichier CSS avec les nouvelles classes

const Collapse = () => {
  return (
   <Collapsible 
     trigger={<div className="collapse-trigger"><img src={iconCollapse} alt="Collapse Icon" /> Click me</div>}
     className="collapse"
     openedClassName="open"
   >
     {collapses.map(collapse => (
       <div key={collapse.id} className="collapse-item">
         <h3 className="collapse-title">{collapse.title}</h3>
         <p className="collapse-text">{collapse.text}</p>
       </div>
     ))}
   </Collapsible>
 );
};

export default Collapse;