import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const NinetyFive = () => {
  return (
    <div>
      <Helmet>
        <title>095 - سورة التين</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة التين</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلتِّينِ وَٱلزَّيۡتُونِ
          <span className="numberTheme"> (1) </span> وَطُورِ سِينِينَ
          <span className="numberTheme"> (2) </span> وَهَٰذَا ٱلۡبَلَدِ
          ٱلۡأَمِينِ
          <span className="numberTheme"> (3) </span> لَقَدۡ خَلَقۡنَا
          ٱلۡإِنسَٰنَ فِيٓ أَحۡسَنِ تَقۡوِيمٖ
          <span className="numberTheme"> (4) </span> ثُمَّ رَدَدۡنَٰهُ أَسۡفَلَ
          سَٰفِلِينَ
          <span className="numberTheme"> (5) </span> إِلَّا ٱلَّذِينَ ءَامَنُواْ
          وَعَمِلُواْ ٱلصَّٰلِحَٰتِ فَلَهُمۡ أَجۡرٌ غَيۡرُ مَمۡنُونٖ
          <span className="numberTheme"> (6) </span> فَمَا يُكَذِّبُكَ بَعۡدُ
          بِٱلدِّينِ
          <span className="numberTheme"> (7) </span> أَلَيۡسَ ٱللَّهُ بِأَحۡكَمِ
          ٱلۡحَٰكِمِينَ
          <span className="numberTheme"> (8) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetyFive;
