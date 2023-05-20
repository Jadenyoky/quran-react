import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndSeven = () => {
  return (
    <div>
      <Helmet>
        <title>107 - سورة الماعون</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الماعون</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          أَرَءَيۡتَ ٱلَّذِي يُكَذِّبُ بِٱلدِّينِ
          <span className="numberTheme"> (1) </span> فَذَٰلِكَ ٱلَّذِي يَدُعُّ
          ٱلۡيَتِيمَ
          <span className="numberTheme"> (2) </span> وَلَا يَحُضُّ عَلَىٰ
          طَعَامِ ٱلۡمِسۡكِينِ
          <span className="numberTheme"> (3) </span> فَوَيۡلٞ لِّلۡمُصَلِّينَ
          <span className="numberTheme"> (4) </span> ٱلَّذِينَ هُمۡ عَن
          صَلَاتِهِمۡ سَاهُونَ
          <span className="numberTheme"> (5) </span>
          ٱلَّذِينَ هُمۡ يُرَآءُونَ
          <span className="numberTheme"> (6) </span> وَيَمۡنَعُونَ ٱلۡمَاعُونَ
          <span className="numberTheme"> (7) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndSeven;
