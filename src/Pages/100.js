import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const Hundred = () => {
  return (
    <div>
      <Helmet>
        <title>100 - سورة العاديات</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة العاديات</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلۡعَٰدِيَٰتِ ضَبۡحٗا
          <span className="numberTheme"> (1) </span> فَٱلۡمُورِيَٰتِ قَدۡحٗا
          <span className="numberTheme"> (2) </span>
          فَٱلۡمُغِيرَٰتِ صُبۡحٗا
          <span className="numberTheme"> (3) </span> فَأَثَرۡنَ بِهِۦ نَقۡعٗا
          <span className="numberTheme"> (4) </span> فَوَسَطۡنَ بِهِۦ جَمۡعًا
          <span className="numberTheme"> (5) </span> إِنَّ ٱلۡإِنسَٰنَ
          لِرَبِّهِۦ لَكَنُودٞ
          <span className="numberTheme"> (6) </span>
          وَإِنَّهُۥ عَلَىٰ ذَٰلِكَ لَشَهِيدٞ
          <span className="numberTheme"> (7) </span> وَإِنَّهُۥ لِحُبِّ
          ٱلۡخَيۡرِ لَشَدِيدٌ
          <span className="numberTheme"> (8) </span>
          <span className="partTheme"> ۞ </span>أَفَلَا يَعۡلَمُ إِذَا بُعۡثِرَ
          مَا فِي ٱلۡقُبُورِ
          <span className="numberTheme"> (9) </span>
          وَحُصِّلَ مَا فِي ٱلصُّدُورِ
          <span className="numberTheme"> (10) </span> إِنَّ رَبَّهُم بِهِمۡ
          يَوۡمَئِذٖ لَّخَبِيرُۢ
          <span className="numberTheme"> (11) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default Hundred;
