import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav>
        <img src ={logo} alt='logo' className="logo"/>
        <ul>
        <li>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}> {/* NavLink pour gerer les liens nav-active pour underline le lien actif*/}
         Accueil
        </NavLink>
        </li>
        <li>
        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          A Propos
        </NavLink>
        </li>
      </ul>
    </nav>
    );
}

export default Navbar;



/** 
 * Commentaires du code :
 * 
Import des ressources -> Importe les styles SCSS, le composant NavLink de react-router-dom, et le logo de l'application.
Composant Navbar-> composant fonctionnel qui retourne le JSX représentant la barre de navigation.
Barre de navigation ->Comprend un élément <nav> englobant tout.
Affiche le logo de l'application.
Contient une liste non ordonnée <ul> avec des éléments de liste <li>.

Liens de navigation -> Utilise NavLink pour créer des liens vers différentes pages de l'application.
Applique la classe "nav-active" si le lien est actif.
Export du composant -> Rend le composant Navbar disponible pour être utilisé dans d'autres parties de l'application.
*
*
**/