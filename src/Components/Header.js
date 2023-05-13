import React from "react";
import "../CSS/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLinesLeaning, faXmark } from "@fortawesome/free-solid-svg-icons";
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
      <div className="items icon leanOne" onClick={ShowMenu}>
        <FontAwesomeIcon icon={faLinesLeaning} />
      </div>
      <div className="items icon leanTwo" onClick={ShowMenuTwo}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="items icon leanThree" onClick={HideMenuTwo}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className="items icon leanFour" onClick={HideMenu}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
};

export default Header;

function ShowMenu(){
  // const footer = document.querySelector('.footer')

  // footer.classList.toggle('footerWidth')
  const leanOne = document.querySelector('.leanOne')
  const leanFour = document.querySelector('.leanFour')
  const menu = document.querySelector('.menu')
  const downIcon = document.querySelector('.downIcon')
  const sura = document.querySelector('.sura')
  const footer = document.querySelector('.footer')

  leanOne.classList.add('leanOneHide')
  leanFour.classList.add('leanFourShow')
  menu.classList.add('showMenu')
  downIcon.classList.add('downIconRight')
  sura.classList.add('suraWidth')
  footer.classList.add('footerWidth')
}

function HideMenu(){
  const leanOne = document.querySelector('.leanOne')
  const leanFour = document.querySelector('.leanFour')
  const menu = document.querySelector('.menu')
  const downIcon = document.querySelector('.downIcon')
  const sura = document.querySelector('.sura')
  const footer = document.querySelector('.footer')

  leanOne.classList.remove('leanOneHide')
  leanFour.classList.remove('leanFourShow')
  menu.classList.remove('showMenu')
  downIcon.classList.remove('downIconRight')
  sura.classList.remove('suraWidth')
  footer.classList.remove('footerWidth')
}

function ShowMenuTwo(){
  const menuTwoDiv = document.querySelector('.menuTwoDiv')
  const menuTwo = document.querySelector('.menuTwo')
  const highlight = document.querySelector('.highlight')
  const leanTwo = document.querySelector('.leanTwo')
  const leanThree = document.querySelector('.leanThree')
  
  leanTwo.classList.add('leanTwoHide')
  menuTwoDiv.classList.toggle('menuTwoDivShow')
  leanThree.classList.add('leanThreeShow')

  menuTwo.classList.remove('menuTwoDivHide')
  highlight.classList.remove('highlightHide')

  document.body.style.overflow = 'hidden'
}

function HideMenuTwo(){
  const leanThree = document.querySelector('.leanThree')
  const leanTwo = document.querySelector('.leanTwo')
  const menuTwoDiv = document.querySelector('.menuTwoDiv')
  const menuTwo = document.querySelector('.menuTwo')
  const highlight = document.querySelector('.highlight')

  leanTwo.classList.remove('leanTwoHide')
  leanThree.classList.remove('leanThreeShow')

  menuTwo.classList.add('menuTwoDivHide')
  highlight.classList.add('highlightHide')
  setTimeout(() => {
    menuTwoDiv.classList.remove('menuTwoDivShow')
  }, 300);

  document.body.style.overflow = 'overlay'
}