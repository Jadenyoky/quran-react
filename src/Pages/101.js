import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndOne = () => {
  return (
    <div>
      <Helmet>
        <title>101 - سورة القارعة</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة القارعة</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          ٱلۡقَارِعَةُ
          <span className="numberTheme"> (1) </span> مَا ٱلۡقَارِعَةُ
          <span className="numberTheme"> (2) </span> وَمَآ أَدۡرَىٰكَ مَا
          ٱلۡقَارِعَةُ
          <span className="numberTheme"> (3) </span> يَوۡمَ يَكُونُ ٱلنَّاسُ
          كَٱلۡفَرَاشِ ٱلۡمَبۡثُوثِ
          <span className="numberTheme"> (4) </span>
          وَتَكُونُ ٱلۡجِبَالُ كَٱلۡعِهۡنِ ٱلۡمَنفُوشِ
          <span className="numberTheme"> (5) </span> فَأَمَّا مَن ثَقُلَتۡ
          مَوَٰزِينُهُۥ
          <span className="numberTheme"> (6) </span> فَهُوَ فِي عِيشَةٖ
          رَّاضِيَةٖ
          <span className="numberTheme"> (7) </span> وَأَمَّا مَنۡ خَفَّتۡ
          مَوَٰزِينُهُۥ
          <span className="numberTheme"> (8) </span> فَأُمُّهُۥ هَاوِيَةٞ
          <span className="numberTheme"> (9) </span> وَمَآ أَدۡرَىٰكَ مَا
          هِيَهۡ
          <span className="numberTheme"> (10) </span> نَارٌ حَامِيَةُۢ
          <span className="numberTheme"> (11) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndOne;
