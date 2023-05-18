import React from "react";
import { Helmet } from "react-helmet-async";
import {} from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "react-router-dom";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const One = () => {
  return (
    <div className="app">
      <Helmet>
        <title>001 - سورة الفاتحة</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الفاتحة</p>
        <p className="suraStart">
          بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
          <span className="numberTheme"> (1) </span>
        </p>
        <p className="suraWords">
          ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (2) </span>
          ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
          <span className="numberTheme"> (3) </span>
          مَٰلِكِ يَوۡمِ ٱلدِّينِ
          <span className="numberTheme"> (4) </span>
          إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ
          <span className="numberTheme"> (5) </span>
          ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ
          <span className="numberTheme"> (6) </span>
          صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ
          وَلَا ٱلضَّآلِّينَ
          <span className="numberTheme"> (7) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default One;
