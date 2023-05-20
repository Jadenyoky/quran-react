import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndThirteen = () => {
  return (
    <div>
      <Helmet>
        <title>113 - سورة الفلق</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الفلق</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ
          <span className="numberTheme"> (1) </span> مِن شَرِّ مَا خَلَقَ
          <span className="numberTheme"> (2) </span> وَمِن شَرِّ غَاسِقٍ إِذَا
          وَقَبَ
          <span className="numberTheme"> (3) </span> وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ
          فِي ٱلۡعُقَدِ
          <span className="numberTheme"> (4) </span> وَمِن شَرِّ حَاسِدٍ إِذَا
          حَسَدَ
          <span className="numberTheme"> (5) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndThirteen;
