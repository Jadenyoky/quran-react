import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const NinetyThree = () => {
  return (
    <div>
      <Helmet>
        <title>093 - سورة الضحى</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الضحى</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلضُّحَىٰ
          <span className="numberTheme"> (1) </span> وَٱلَّيۡلِ إِذَا سَجَىٰ
          <span className="numberTheme"> (2) </span> مَا وَدَّعَكَ رَبُّكَ وَمَا
          قَلَىٰ
          <span className="numberTheme"> (3) </span> وَلَلۡأٓخِرَةُ خَيۡرٞ لَّكَ
          مِنَ ٱلۡأُولَىٰ
          <span className="numberTheme"> (4) </span>
          وَلَسَوۡفَ يُعۡطِيكَ رَبُّكَ فَتَرۡضَىٰٓ
          <span className="numberTheme"> (5) </span> أَلَمۡ يَجِدۡكَ يَتِيمٗا
          فَـَٔاوَىٰ
          <span className="numberTheme"> (6) </span> وَوَجَدَكَ ضَآلّٗا
          فَهَدَىٰ
          <span className="numberTheme"> (7) </span> وَوَجَدَكَ عَآئِلٗا
          فَأَغۡنَىٰ
          <span className="numberTheme"> (8) </span> فَأَمَّا ٱلۡيَتِيمَ فَلَا
          تَقۡهَرۡ
          <span className="numberTheme"> (9) </span> وَأَمَّا ٱلسَّآئِلَ فَلَا
          تَنۡهَرۡ
          <span className="numberTheme"> (10) </span> وَأَمَّا بِنِعۡمَةِ
          رَبِّكَ فَحَدِّثۡ
          <span className="numberTheme"> (11) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetyThree;
