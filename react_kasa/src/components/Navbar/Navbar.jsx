import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav>
        <img src ={logo} alt='logo' className="logo"/>
        <ul>
        <li>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
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