import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndNine = () => {
  return (
    <div>
      <Helmet>
        <title>109 - سورة الكافرون</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الكافرون</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          قُلۡ يَٰٓأَيُّهَا ٱلۡكَٰفِرُونَ 
          <span className="numberTheme"> (1) </span> لَآ أَعۡبُدُ مَا تَعۡبُدُونَ 
          <span className="numberTheme"> (2) </span>
          وَلَآ أَنتُمۡ عَٰبِدُونَ مَآ أَعۡبُدُ 
          <span className="numberTheme"> (3) </span> وَلَآ أَنَا۠ عَابِدٞ مَّا
          عَبَدتُّمۡ 
          <span className="numberTheme"> (4) </span> وَلَآ أَنتُمۡ عَٰبِدُونَ مَآ أَعۡبُدُ 
          <span className="numberTheme"> (5) </span> لَكُمۡ
          دِينُكُمۡ وَلِيَ دِينِ 
          <span className="numberTheme"> (6) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndNine;
