
import "./Cards.scss";
import data from "../../data/locations.json";
import { Link } from "react-router-dom";

const Cards = () => {
  const rentalLink = (id) => `/rental/${id}`

  const containerCard = ({ id, title, cover, description }) => (
    <Link to={rentalLink(id)} className="cards-link" key={id}>
    <figure className="cards" key={id}>
      <img src={cover} alt={description} className="cards-img" />
      <figcaption className="cards-txt">{title}</figcaption>
    </figure>
    </Link>
  );

  return (
    <article className="cards-container">
      {data.map((article) => containerCard(article))}
    </article>
  );
};

export default Cards;