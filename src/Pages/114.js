import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndFourteen = () => {
  return (
    <div>
      <Helmet>
        <title>114 - سورة الناس</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الناس</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ
          <span className="numberTheme"> (1) </span> مَلِكِ ٱلنَّاسِ
          <span className="numberTheme"> (2) </span> إِلَٰهِ ٱلنَّاسِ
          <span className="numberTheme"> (3) </span> مِن شَرِّ ٱلۡوَسۡوَاسِ
          ٱلۡخَنَّاسِ
          <span className="numberTheme"> (4) </span> ٱلَّذِي يُوَسۡوِسُ فِي
          صُدُورِ ٱلنَّاسِ
          <span className="numberTheme"> (5) </span> مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ
          <span className="numberTheme"> (6) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndFourteen;
