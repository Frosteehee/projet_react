import logo_footer from "../../assets/images/logofooter.png";
import './Footer.scss';
const Footer = () => {
    return (
        <footer>

<div className="footer-container">
        <img src={logo_footer} alt="Logo Kasa" className="logo" /> {/** Logo Kasa revoir le className ?*/}
        <h3 className="footer-text">© 2020 Kasa. All rights reserved</h3>
      </div>
        </footer>
    )
} 

export default Footer; 