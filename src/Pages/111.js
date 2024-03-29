import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndEleven = () => {
  return (
    <div>
      <Helmet>
        <title>111 - سورة المسد</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة المسد</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          تَبَّتۡ يَدَآ أَبِي لَهَبٖ وَتَبَّ
          <span className="numberTheme"> (1) </span> مَآ أَغۡنَىٰ عَنۡهُ
          مَالُهُۥ وَمَا كَسَبَ
          <span className="numberTheme"> (2) </span> سَيَصۡلَىٰ نَارٗا ذَاتَ
          لَهَبٖ
          <span className="numberTheme"> (3) </span> وَٱمۡرَأَتُهُۥ حَمَّالَةَ
          ٱلۡحَطَبِ
          <span className="numberTheme"> (4) </span> فِي جِيدِهَا حَبۡلٞ مِّن
          مَّسَدِۭ
          <span className="numberTheme"> (5) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndEleven;
