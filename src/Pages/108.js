import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndEight = () => {
  return (
    <div>
      <Helmet>
        <title>108 - سورة الكوثر</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الكوثر</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          إِنَّآ أَعۡطَيۡنَٰكَ ٱلۡكَوۡثَرَ 
          <span className="numberTheme"> (1) </span> فَصَلِّ لِرَبِّكَ وَٱنۡحَرۡ 
          <span className="numberTheme"> (2) </span>
          إِنَّ شَانِئَكَ هُوَ ٱلۡأَبۡتَرُ 
          <span className="numberTheme"> (3) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndEight;
