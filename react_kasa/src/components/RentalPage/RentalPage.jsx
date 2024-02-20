import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import locations from "../../data/locations.json";
import CustomCarousel from "../../components/Carousel/Carousel";
import CollapseRental from "../../components/Collapse/CollapseRental";
import "./RentalPage.scss";
import { FaStar } from 'react-icons/fa';

const RentalPages = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = locations.find(item => item.id === id);

  useEffect(() => { if (!location) navigate("/error"); }, [id, location, navigate]);

  return location ? (
    <div className="rental-page">
      <CustomCarousel rentalId={id} />
      <div className="loc-container-up-down">
        <div className="loc-content-up">
          <h2>{location.title}</h2>
          <h3>{location.location}</h3>
          <div className="container-tags">{location.tags.map((tag, index) => <span key={index}>{tag}</span>)}</div>
        </div>
        <div className="hostRating">
          <div className="host">
            <h3 className="host_name">{location.host.name}</h3>
            <img src={location.host.picture} alt={location.host.name} />
          </div>
          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar key={index} className={index < parseInt(location.rating) ? "star-icon active" : "star-icon"} />
            ))}
          </div>
        </div>
      </div>
      <div className="loc-content-down"><CollapseRental description={location.description} equipments={location.equipments} /></div>
    </div>
  ) : null;
};

export default RentalPages;
