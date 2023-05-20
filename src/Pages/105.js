import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndFive = () => {
  return (
    <div>
      <Helmet>
        <title>105 - سورة الفيل</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الفيل</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          أَلَمۡ تَرَ كَيۡفَ فَعَلَ رَبُّكَ بِأَصۡحَٰبِ ٱلۡفِيلِ
          <span className="numberTheme"> (1) </span> أَلَمۡ يَجۡعَلۡ كَيۡدَهُمۡ
          فِي تَضۡلِيلٖ
          <span className="numberTheme"> (2) </span> وَأَرۡسَلَ عَلَيۡهِمۡ
          طَيۡرًا أَبَابِيلَ
          <span className="numberTheme"> (3) </span> تَرۡمِيهِم بِحِجَارَةٖ مِّن
          سِجِّيلٖ
          <span className="numberTheme"> (4) </span> فَجَعَلَهُمۡ كَعَصۡفٖ
          مَّأۡكُولِۭ
          <span className="numberTheme"> (5) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndFive;
