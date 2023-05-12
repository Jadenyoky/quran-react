import React from "react";
import "../CSS/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLinesLeaning } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="items links">
        <Link to="https://www.facebook.com/jaden.yoky2014/" target="_blank">
          <div className="facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
        </Link>
        <Link to="https://twitter.com/JadenYoky">
          <div className="twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </Link>
        <Link to="https://www.instagram.com/jadenyoky/">
          <div className="instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </Link>
      </div>
      <div className="items title">القرآن الكريم</div>
      <div className="items icon leanOne" onClick={hideShowMenu}>
        <FontAwesomeIcon icon={faLinesLeaning} />
      </div>
      <div className="items icon leanTwo" onClick={hideShowMenuTwo}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default Header;

function hideShowMenu(){
  const menu = document.querySelector('.menu')
  const downIcon = document.querySelector('.downIcon')
  const sura = document.querySelector('.sura')
  const footer = document.querySelector('.footer')
  menu.classList.toggle('hideShowMenu')
  downIcon.classList.toggle('downIconRight')
  sura.classList.toggle('suraWidth')
  footer.classList.toggle('footerWidth')
}

function hideShowMenuTwo(){
  const downIcon = document.querySelector('.downIcon')
  downIcon.classList.toggle('downIconRight')
}