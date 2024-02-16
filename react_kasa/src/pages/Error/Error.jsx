// Code: Error page
import { Link } from "react-router-dom";
import "./Error.scss";
const Error = () => {
  return (
    <div className="errorPage">
      <div className="errorText">
        <h1>404</h1>
      </div>
      <p>{"Oups! La page que vous demandez n'existe pas."}</p>
      <Link to="/" className="link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error;
