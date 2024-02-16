import Collapsible from 'react-collapsible';
import CollapseData from "../../data/collapses.json";
import "./Collapse.scss";
import arrowCollapse from "../../assets/images/arrow.svg";

const Collapse = () => {
  return (
    <div>
      {CollapseData.map(collapse => (
        <Collapsible key={collapse.id} trigger={<div className="trigger-container">{collapse.title}<img src={arrowCollapse} alt="Arrow" className='arrowCollapsed' /></div>}>
          <p>{collapse.text}</p>
        </Collapsible>
      ))}
    </div>
  );
};

export default Collapse;
