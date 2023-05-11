import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import '../CSS/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerLinks'>
        <Link to="https://www.facebook.com/jaden.yoky2014/" target='_blank'>
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link to="https://twitter.com/JadenYoky">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link to="https://www.instagram.com/jadenyoky/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </div>
      <div className='madeBy'>
          This Website Made By <span>Jaden Yoky</span> with Love <span>&copy; 2023</span>
      </div>
    </div>
  );
}

export default Footer;
