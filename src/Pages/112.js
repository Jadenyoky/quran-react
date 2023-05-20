import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndTwelve = () => {
  return (
    <div>
      <Helmet>
        <title>112 - سورة الإخلاص</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الإخلاص</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          قُلۡ هُوَ ٱللَّهُ أَحَدٌ
          <span className="numberTheme"> (1) </span> ٱللَّهُ ٱلصَّمَدُ
          <span className="numberTheme"> (2) </span> لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ
          <span className="numberTheme"> (3) </span> وَلَمۡ يَكُن لَّهُۥ كُفُوًا
          أَحَدُۢ
          <span className="numberTheme"> (4) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndTwelve;
