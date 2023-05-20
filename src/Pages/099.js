import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const NinetyNine = () => {
  return (
    <div>
      <Helmet>
        <title>099 - سورة الزلزلة</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الزلزلة</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          إِذَا زُلۡزِلَتِ ٱلۡأَرۡضُ زِلۡزَالَهَا 
          <span className="numberTheme"> (1) </span> وَأَخۡرَجَتِ ٱلۡأَرۡضُ
          أَثۡقَالَهَا 
          <span className="numberTheme"> (2) </span> وَقَالَ ٱلۡإِنسَٰنُ مَا لَهَا 
          <span className="numberTheme"> (3) </span> يَوۡمَئِذٖ
          تُحَدِّثُ أَخۡبَارَهَا 
          <span className="numberTheme"> (4) </span> بِأَنَّ رَبَّكَ أَوۡحَىٰ لَهَا 
          <span className="numberTheme"> (5) </span>
          يَوۡمَئِذٖ يَصۡدُرُ ٱلنَّاسُ أَشۡتَاتٗا لِّيُرَوۡاْ أَعۡمَٰلَهُمۡ 
          <span className="numberTheme"> (6) </span>
          فَمَن يَعۡمَلۡ مِثۡقَالَ ذَرَّةٍ خَيۡرٗا يَرَهُۥ 
          <span className="numberTheme"> (7) </span> وَمَن يَعۡمَلۡ
          مِثۡقَالَ ذَرَّةٖ شَرّٗا يَرَهُۥ 
          <span className="numberTheme"> (8) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetyNine;
