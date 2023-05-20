import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndThree = () => {
  return (
    <div>
      <Helmet>
        <title>103 - سورة العصر</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة العصر</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلۡعَصۡرِ 
          <span className="numberTheme"> (1) </span> إِنَّ ٱلۡإِنسَٰنَ لَفِي خُسۡرٍ 
          <span className="numberTheme"> (2) </span> إِلَّا ٱلَّذِينَ
          ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ وَتَوَاصَوۡاْ بِٱلۡحَقِّ
          وَتَوَاصَوۡاْ بِٱلصَّبۡرِ 
          <span className="numberTheme"> (3) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndThree;
