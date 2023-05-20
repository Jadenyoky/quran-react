import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const NinetyFour = () => {
  return (
    <div>
      <Helmet>
        <title>094 - سورة الشرح</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الشرح</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          أَلَمۡ نَشۡرَحۡ لَكَ صَدۡرَكَ
          <span className="numberTheme"> (1) </span> وَوَضَعۡنَا عَنكَ وِزۡرَكَ
          <span className="numberTheme"> (2) </span>
          ٱلَّذِيٓ أَنقَضَ ظَهۡرَكَ
          <span className="numberTheme"> (3) </span> وَرَفَعۡنَا لَكَ ذِكۡرَكَ
          <span className="numberTheme"> (4) </span> فَإِنَّ مَعَ ٱلۡعُسۡرِ
          يُسۡرًا
          <span className="numberTheme"> (5) </span> إِنَّ مَعَ ٱلۡعُسۡرِ
          يُسۡرٗا
          <span className="numberTheme"> (6) </span> فَإِذَا فَرَغۡتَ فَٱنصَبۡ
          <span className="numberTheme"> (7) </span> وَإِلَىٰ رَبِّكَ فَٱرۡغَب
          <span className="numberTheme"> (8) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetyFour;
