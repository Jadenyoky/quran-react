import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndSix = () => {
  return (
    <div>
      <Helmet>
        <title>106 - سورة قريش</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة قريش</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          لِإِيلَٰفِ قُرَيۡشٍ
          <span className="numberTheme"> (1) </span> إِۦلَٰفِهِمۡ رِحۡلَةَ
          ٱلشِّتَآءِ وَٱلصَّيۡفِ
          <span className="numberTheme"> (2) </span> فَلۡيَعۡبُدُواْ رَبَّ
          هَٰذَا ٱلۡبَيۡتِ
          <span className="numberTheme"> (3) </span> ٱلَّذِيٓ أَطۡعَمَهُم مِّن
          جُوعٖ وَءَامَنَهُم مِّنۡ خَوۡفِۭ
          <span className="numberTheme"> (4) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndSix;
