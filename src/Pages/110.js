import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndTen = () => {
  return (
    <div>
      <Helmet>
        <title>110 - سورة النصر</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة النصر</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          إِذَا جَآءَ نَصۡرُ ٱللَّهِ وَٱلۡفَتۡحُ 
          <span className="numberTheme"> (1) </span> وَرَأَيۡتَ ٱلنَّاسَ
          يَدۡخُلُونَ فِي دِينِ ٱللَّهِ أَفۡوَاجٗا 
          <span className="numberTheme"> (2) </span> فَسَبِّحۡ بِحَمۡدِ
          رَبِّكَ وَٱسۡتَغۡفِرۡهُۚ إِنَّهُۥ كَانَ تَوَّابَۢا 
          <span className="numberTheme"> (3) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndTen;
