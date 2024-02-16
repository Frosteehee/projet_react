import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import locationsData from "../../data/locations.json";
//import TagsComponent from "./Tags";
import CollapsisComponent from "../Collapse/Collapse";
//import RatingComponent from "./Rating";
import CarouselComponent from "../Carousel/Carousel";
import "./RentalPage.scss"

const LocationComponent = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const locationData = getLocationData(id);

  useEffect(() => {
    if (!locationData) {
      navigator("/error");
    }
  }, [id, locationData, navigator]);

  if (!locationData) {
    return null;
  }

  return (
    <>
      <div className="location">
        <CarouselComponent slides={locationData.pictures}/>
        <div className="location-container-up-down">
          <div className="location-content-up">
            <div className="location-content-up-left">
              <h2>{locationData.title}</h2>
              <h3>{locationData.location}</h3>
              <div className="container-tags">
               {/*} {locationData.tags.map((tag, index) => (
                 <TagsComponent key={index} text={tag} />
               ))}*/}
              </div>
            </div>
            <div className="hostRating">
              <div className="host">
                <h3>{locationData.host.name}</h3>
                <img src={locationData.host.picture} alt={locationData.title} />
              </div>
              <div className="rating">
               {/* <RatingComponent rating={parseInt(locationData.rating, 10)} />*/}
              </div>
            </div>
          </div>
          <div className="location-content-down">
            <CollapsisComponent title="Description">{locationData.description}</CollapsisComponent>
            <CollapsisComponent title="Equipement">
              <ul>
                {locationData.equipments.map((equip, index) => (
                  <li key={index}>{equip}</li>
                ))}
              </ul>
            </CollapsisComponent>
          </div>
        </div>
      </div>
    </>
  );
};

const getLocationData = (id) => {
  return locationsData.find((item) => item.id === id);
};

export default LocationComponent;
