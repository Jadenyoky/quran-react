import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faDroplet, faDropletSlash } from "@fortawesome/free-solid-svg-icons";
import "../CSS/downIcon.css";
import "../CSS/theme.css"

const DownIcon = () => {
  return (
    <div>
      <div className="theme">
        <div className="showMe" onClick={themeColorsShow}>
          <FontAwesomeIcon className="dropIcon" icon={faDroplet} />
        </div>
        <div className="hideMe" onClick={themeColorsHide}>
          <FontAwesomeIcon className="dropIconTwo" icon={faDropletSlash} />
        </div>
        <div className="themeColors">
          <span className="white" onClick={themeWhite}></span>
          <span className="blue" onClick={themeBlue}></span>
          <span className="coral" onClick={themeCoral}></span>
          <span className="black" onClick={themeBlack}></span>
        </div>
      </div>
      <div className="highlightTheme" onClick={themeColorsHide}></div>
      <div className="downIcon" onClick={toDown}>
        <div className="downIconProg">
          <FontAwesomeIcon
            className="downIconProgOne"
            icon={faAngleDown}
            size="2x"
          />
        </div>
      </div>
      <div className="end"></div>
    </div>
  );
};

export default DownIcon;

window.onscroll = () => {
  downIconShow();
  scrollPercent();
  headerShadow();
  hideAndShowOnScroll();
  changeTitleToSuraName();
};

function themeWhite(){
  const suraWords = document.querySelector('.suraWords')
  const sura = document.querySelector('.sura')
  const suraStart = document.querySelector('.suraStart')
  const suraTitle = document.querySelector('.suraTitle')
  const suraEnd = document.querySelector('.suraEnd')
  const header = document.querySelector('.header')
  const title = document.querySelector('.title')
  const facebookHeader = document.querySelector('.facebook')
  const twitterHeader = document.querySelector('.twitter')
  const instagramHeader = document.querySelector('.instagram')
  const leanOne = document.querySelector('.leanOne')
  const leanTwo = document.querySelector('.leanTwo')
  const leanThree = document.querySelector('.leanThree')
  const leanFour = document.querySelector('.leanFour')
  const footer = document.querySelector('.footer')

  suraWords.classList.remove('themeSuraBlue')
  sura.classList.remove('themeSuraBlue')
  suraStart.classList.remove('themeSuraStartEndBlue')
  suraTitle.classList.remove('themeSuraStartEndBlue')
  suraEnd.classList.remove('themeSuraStartEndBlue')
  header.classList.remove('themeHeaderBlue')
  title.classList.remove('themeTitleBlue')
  facebookHeader.classList.remove('themeLinksBlue')
  twitterHeader.classList.remove('themeLinksBlue')
  instagramHeader.classList.remove('themeLinksBlue')
  leanOne.classList.remove('themeLinksBlue')
  leanTwo.classList.remove('themeLinksBlue')
  leanThree.classList.remove('themeLinksBlue')
  leanFour.classList.remove('themeLinksBlue')
  footer.classList.remove('themeFooterBlue')

  suraWords.classList.remove('themeSuraCoral')
  sura.classList.remove('themeSuraCoral')
  suraStart.classList.remove('themeSuraStartEndCoral')
  suraTitle.classList.remove('themeSuraStartEndCoral')
  suraEnd.classList.remove('themeSuraStartEndCoral')
  header.classList.remove('themeHeaderCoral')
  title.classList.remove('themeTitleCoral')
  facebookHeader.classList.remove('themeLinksCoral')
  twitterHeader.classList.remove('themeLinksCoral')
  instagramHeader.classList.remove('themeLinksCoral')
  leanOne.classList.remove('themeLinksCoral')
  leanTwo.classList.remove('themeLinksCoral')
  leanThree.classList.remove('themeLinksCoral')
  leanFour.classList.remove('themeLinksCoral')
  footer.classList.remove('themeFooterCoral')

  suraWords.classList.remove('themeSuraBlack')
  sura.classList.remove('themeSuraBlack')
  suraStart.classList.remove('themeSuraStartEndBlack')
  suraTitle.classList.remove('themeSuraStartEndBlack')
  suraEnd.classList.remove('themeSuraStartEndBlack')
  header.classList.remove('themeHeaderBlack')
  title.classList.remove('themeTitleBlack')
  facebookHeader.classList.remove('themeLinksBlack')
  twitterHeader.classList.remove('themeLinksBlack')
  instagramHeader.classList.remove('themeLinksBlack')
  leanOne.classList.remove('themeLinksBlack')
  leanTwo.classList.remove('themeLinksBlack')
  leanThree.classList.remove('themeLinksBlack')
  leanFour.classList.remove('themeLinksBlack')
  footer.classList.remove('themeFooterBlack')
}

function themeBlue(){
  const suraWords = document.querySelector('.suraWords')
  const sura = document.querySelector('.sura')
  const suraStart = document.querySelector('.suraStart')
  const suraTitle = document.querySelector('.suraTitle')
  const suraEnd = document.querySelector('.suraEnd')
  const header = document.querySelector('.header')
  const title = document.querySelector('.title')
  const facebookHeader = document.querySelector('.facebook')
  const twitterHeader = document.querySelector('.twitter')
  const instagramHeader = document.querySelector('.instagram')
  const leanOne = document.querySelector('.leanOne')
  const leanTwo = document.querySelector('.leanTwo')
  const leanThree = document.querySelector('.leanThree')
  const leanFour = document.querySelector('.leanFour')
  const footer = document.querySelector('.footer')

  suraWords.classList.add('themeSuraBlue')
  sura.classList.add('themeSuraBlue')
  suraStart.classList.add('themeSuraStartEndBlue')
  suraTitle.classList.add('themeSuraStartEndBlue')
  suraEnd.classList.add('themeSuraStartEndBlue')
  header.classList.add('themeHeaderBlue')
  title.classList.add('themeTitleBlue')
  facebookHeader.classList.add('themeLinksBlue')
  twitterHeader.classList.add('themeLinksBlue')
  instagramHeader.classList.add('themeLinksBlue')
  leanOne.classList.add('themeLinksBlue')
  leanTwo.classList.add('themeLinksBlue')
  leanThree.classList.add('themeLinksBlue')
  leanFour.classList.add('themeLinksBlue')
  footer.classList.add('themeFooterBlue')


  suraWords.classList.remove('themeSuraCoral')
  sura.classList.remove('themeSuraCoral')
  suraStart.classList.remove('themeSuraStartEndCoral')
  suraTitle.classList.remove('themeSuraStartEndCoral')
  suraEnd.classList.remove('themeSuraStartEndCoral')
  header.classList.remove('themeHeaderCoral')
  title.classList.remove('themeTitleCoral')
  facebookHeader.classList.remove('themeLinksCoral')
  twitterHeader.classList.remove('themeLinksCoral')
  instagramHeader.classList.remove('themeLinksCoral')
  leanOne.classList.remove('themeLinksCoral')
  leanTwo.classList.remove('themeLinksCoral')
  leanThree.classList.remove('themeLinksCoral')
  leanFour.classList.remove('themeLinksCoral')
  footer.classList.remove('themeFooterCoral')

  suraWords.classList.remove('themeSuraBlack')
  sura.classList.remove('themeSuraBlack')
  suraStart.classList.remove('themeSuraStartEndBlack')
  suraTitle.classList.remove('themeSuraStartEndBlack')
  suraEnd.classList.remove('themeSuraStartEndBlack')
  header.classList.remove('themeHeaderBlack')
  title.classList.remove('themeTitleBlack')
  facebookHeader.classList.remove('themeLinksBlack')
  twitterHeader.classList.remove('themeLinksBlack')
  instagramHeader.classList.remove('themeLinksBlack')
  leanOne.classList.remove('themeLinksBlack')
  leanTwo.classList.remove('themeLinksBlack')
  leanThree.classList.remove('themeLinksBlack')
  leanFour.classList.remove('themeLinksBlack')
  footer.classList.remove('themeFooterBlack')
}

function themeCoral(){
  const suraWords = document.querySelector('.suraWords')
  const sura = document.querySelector('.sura')
  const suraStart = document.querySelector('.suraStart')
  const suraTitle = document.querySelector('.suraTitle')
  const suraEnd = document.querySelector('.suraEnd')
  const header = document.querySelector('.header')
  const title = document.querySelector('.title')
  const facebookHeader = document.querySelector('.facebook')
  const twitterHeader = document.querySelector('.twitter')
  const instagramHeader = document.querySelector('.instagram')
  const leanOne = document.querySelector('.leanOne')
  const leanTwo = document.querySelector('.leanTwo')
  const leanThree = document.querySelector('.leanThree')
  const leanFour = document.querySelector('.leanFour')
  const footer = document.querySelector('.footer')

  suraWords.classList.add('themeSuraCoral')
  sura.classList.add('themeSuraCoral')
  suraStart.classList.add('themeSuraStartEndCoral')
  suraTitle.classList.add('themeSuraStartEndCoral')
  suraEnd.classList.add('themeSuraStartEndCoral')
  header.classList.add('themeHeaderCoral')
  title.classList.add('themeTitleCoral')
  facebookHeader.classList.add('themeLinksCoral')
  twitterHeader.classList.add('themeLinksCoral')
  instagramHeader.classList.add('themeLinksCoral')
  leanOne.classList.add('themeLinksCoral')
  leanTwo.classList.add('themeLinksCoral')
  leanThree.classList.add('themeLinksCoral')
  leanFour.classList.add('themeLinksCoral')
  footer.classList.add('themeFooterCoral')

  suraWords.classList.remove('themeSuraBlue')
  sura.classList.remove('themeSuraBlue')
  suraStart.classList.remove('themeSuraStartEndBlue')
  suraTitle.classList.remove('themeSuraStartEndBlue')
  suraEnd.classList.remove('themeSuraStartEndBlue')
  header.classList.remove('themeHeaderBlue')
  title.classList.remove('themeTitleBlue')
  facebookHeader.classList.remove('themeLinksBlue')
  twitterHeader.classList.remove('themeLinksBlue')
  instagramHeader.classList.remove('themeLinksBlue')
  leanOne.classList.remove('themeLinksBlue')
  leanTwo.classList.remove('themeLinksBlue')
  leanThree.classList.remove('themeLinksBlue')
  leanFour.classList.remove('themeLinksBlue')
  footer.classList.remove('themeFooterBlue')

  suraWords.classList.remove('themeSuraBlack')
  sura.classList.remove('themeSuraBlack')
  suraStart.classList.remove('themeSuraStartEndBlack')
  suraTitle.classList.remove('themeSuraStartEndBlack')
  suraEnd.classList.remove('themeSuraStartEndBlack')
  header.classList.remove('themeHeaderBlack')
  title.classList.remove('themeTitleBlack')
  facebookHeader.classList.remove('themeLinksBlack')
  twitterHeader.classList.remove('themeLinksBlack')
  instagramHeader.classList.remove('themeLinksBlack')
  leanOne.classList.remove('themeLinksBlack')
  leanTwo.classList.remove('themeLinksBlack')
  leanThree.classList.remove('themeLinksBlack')
  leanFour.classList.remove('themeLinksBlack')
  footer.classList.remove('themeFooterBlack')
}

function themeBlack(){
  const suraWords = document.querySelector('.suraWords')
  const sura = document.querySelector('.sura')
  const suraStart = document.querySelector('.suraStart')
  const suraTitle = document.querySelector('.suraTitle')
  const suraEnd = document.querySelector('.suraEnd')
  const header = document.querySelector('.header')
  const title = document.querySelector('.title')
  const facebookHeader = document.querySelector('.facebook')
  const twitterHeader = document.querySelector('.twitter')
  const instagramHeader = document.querySelector('.instagram')
  const leanOne = document.querySelector('.leanOne')
  const leanTwo = document.querySelector('.leanTwo')
  const leanThree = document.querySelector('.leanThree')
  const leanFour = document.querySelector('.leanFour')
  const footer = document.querySelector('.footer')

  suraWords.classList.add('themeSuraBlack')
  sura.classList.add('themeSuraBlack')
  suraStart.classList.add('themeSuraStartEndBlack')
  suraTitle.classList.add('themeSuraStartEndBlack')
  suraEnd.classList.add('themeSuraStartEndBlack')
  header.classList.add('themeHeaderBlack')
  title.classList.add('themeTitleBlack')
  facebookHeader.classList.add('themeLinksBlack')
  twitterHeader.classList.add('themeLinksBlack')
  instagramHeader.classList.add('themeLinksBlack')
  leanOne.classList.add('themeLinksBlack')
  leanTwo.classList.add('themeLinksBlack')
  leanThree.classList.add('themeLinksBlack')
  leanFour.classList.add('themeLinksBlack')
  footer.classList.add('themeFooterBlack')

  suraWords.classList.remove('themeSuraBlue')
  sura.classList.remove('themeSuraBlue')
  suraStart.classList.remove('themeSuraStartEndBlue')
  suraTitle.classList.remove('themeSuraStartEndBlue')
  suraEnd.classList.remove('themeSuraStartEndBlue')
  header.classList.remove('themeHeaderBlue')
  title.classList.remove('themeTitleBlue')
  facebookHeader.classList.remove('themeLinksBlue')
  twitterHeader.classList.remove('themeLinksBlue')
  instagramHeader.classList.remove('themeLinksBlue')
  leanOne.classList.remove('themeLinksBlue')
  leanTwo.classList.remove('themeLinksBlue')
  leanThree.classList.remove('themeLinksBlue')
  leanFour.classList.remove('themeLinksBlue')
  footer.classList.remove('themeFooterBlue')

  suraWords.classList.remove('themeSuraCoral')
  sura.classList.remove('themeSuraCoral')
  suraStart.classList.remove('themeSuraStartEndCoral')
  suraTitle.classList.remove('themeSuraStartEndCoral')
  suraEnd.classList.remove('themeSuraStartEndCoral')
  header.classList.remove('themeHeaderCoral')
  title.classList.remove('themeTitleCoral')
  facebookHeader.classList.remove('themeLinksCoral')
  twitterHeader.classList.remove('themeLinksCoral')
  instagramHeader.classList.remove('themeLinksCoral')
  leanOne.classList.remove('themeLinksCoral')
  leanTwo.classList.remove('themeLinksCoral')
  leanThree.classList.remove('themeLinksCoral')
  leanFour.classList.remove('themeLinksCoral')
  footer.classList.remove('themeFooterCoral')
}

function themeColorsShow(){
  const showMe = document.querySelector('.showMe')
  const hideMe = document.querySelector('.hideMe')
  const highlightTheme = document.querySelector('.highlightTheme')
  const themeColors = document.querySelector('.themeColors')

  showMe.classList.add('showMeHidden')
  hideMe.classList.add('hideMeShow')
  highlightTheme.classList.add('highlightThemeShow')
  themeColors.classList.add('themeColorsShow')
}

function themeColorsHide(){
  const showMe = document.querySelector('.showMe')
  const hideMe = document.querySelector('.hideMe')
  const highlightTheme = document.querySelector('.highlightTheme')
  const themeColors = document.querySelector('.themeColors')

  showMe.classList.remove('showMeHidden')
  hideMe.classList.remove('hideMeShow')
  highlightTheme.classList.add('highlightThemeHide')
  themeColors.classList.remove('themeColorsShow')
  setTimeout(() => {
    highlightTheme.classList.remove('highlightThemeShow')
    highlightTheme.classList.remove('highlightThemeHide')
  }, 300);
}

function changeTitleToSuraName() {
  const title = document.querySelector(".title");
  const suraTitle = document.querySelector(".suraTitle");

  if (window.scrollY > suraTitle.offsetTop) {
    title.innerText = suraTitle.innerText;
  } else {
    title.innerText = "القرآن الكريم";
  }
}

function downIconShow() {
  const down = document.querySelector(".downIcon");
  if (window.scrollY > 10) {
    down.classList.add("downIconOne");
  } else if (window.scrollY < 10) {
    down.classList.remove("downIconOne");
  }
}

function scrollPercent() {
  const down = document.querySelector(".downIcon");
  let T = document.body.scrollTop || document.documentElement.scrollTop;
  let H =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let A = (T / H) * 100;

  down.style.background = `conic-gradient(#0069aa ${A}% , #c0cfd8 ${A}%)`;

  const downIcon = document.querySelector(".downIconProgOne");

  if (A < 50) {
    downIcon.style.transform = "translate(-50% , -50%) rotate(0deg)";
  } else if (A > 50) {
    downIcon.style.transform = "translate(-50% , -50%) rotate(180deg)";
  }
}

function toDown() {
  const end = document.querySelector(".end");

  let T = document.body.scrollTop || document.documentElement.scrollTop;
  let H =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let A = (T / H) * 100;

  if (A < 50) {
    end.scrollIntoView();
  } else if (A > 50) {
    document.documentElement.scrollTop = 0;
  }
}

function headerShadow() {
  let header = document.querySelector(".header");
  if (window.scrollY > 10) {
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }
}

let S = window.scrollY;

function hideAndShowOnScroll() {
  let header = document.querySelector(".header");
  let menu = document.querySelector(".menu");
  if (S < window.scrollY && S > window.innerHeight) {
    header.classList.add("headerHide");
    header.classList.remove("headerShow");
    menu.style.top = "0";
    menu.style.height = "100vh";
  } else {
    header.classList.add("headerShow");
    header.classList.remove("headerHide");
    menu.style.top = "49px";
    menu.style.height = "calc(100vh - 49px)";
  }

  S = window.scrollY;
}