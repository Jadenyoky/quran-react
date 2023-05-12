import React from "react";
import { Helmet } from "react-helmet-async";
import {} from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "react-router-dom";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";

const One = () => {
  return (
    <div className="app">
      <Helmet>
        <title>001 - سورة الفاتحة</title>
      </Helmet>
      <Header />
      <Menu />
      <div className="sura">
        <p className="suraTitle">سورة الفاتحة</p>
        <p className="suraStart">
          بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ (1)
        </p>
        <p className="suraWords">
          ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ (2) ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ (3)
          مَٰلِكِ يَوۡمِ ٱلدِّينِ (4) إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ
          (5) ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ (6) صِرَٰطَ ٱلَّذِينَ
          أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا
          ٱلضَّآلِّينَ (7)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default One;
