import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const EightyTwo = () => {
  return (
    <div>
      <Helmet>
        <title>082 - سورة الإنفطار</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الإنفطار</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          إِذَا ٱلسَّمَآءُ ٱنفَطَرَتۡ
          <span className="numberTheme"> (1) </span> وَإِذَا ٱلۡكَوَاكِبُ
          ٱنتَثَرَتۡ
          <span className="numberTheme"> (2) </span>
          وَإِذَا ٱلۡبِحَارُ فُجِّرَتۡ
          <span className="numberTheme"> (3) </span> وَإِذَا ٱلۡقُبُورُ
          بُعۡثِرَتۡ
          <span className="numberTheme"> (4) </span>
          عَلِمَتۡ نَفۡسٞ مَّا قَدَّمَتۡ وَأَخَّرَتۡ
          <span className="numberTheme"> (5) </span> يَٰٓأَيُّهَا ٱلۡإِنسَٰنُ
          مَا غَرَّكَ بِرَبِّكَ ٱلۡكَرِيمِ
          <span className="numberTheme"> (6) </span> ٱلَّذِي خَلَقَكَ
          فَسَوَّىٰكَ فَعَدَلَكَ
          <span className="numberTheme"> (7) </span> فِيٓ أَيِّ صُورَةٖ مَّا
          شَآءَ رَكَّبَكَ
          <span className="numberTheme"> (8) </span> كَلَّا بَلۡ تُكَذِّبُونَ
          بِٱلدِّينِ
          <span className="numberTheme"> (9) </span> وَإِنَّ عَلَيۡكُمۡ
          لَحَٰفِظِينَ
          <span className="numberTheme"> (10) </span> كِرَامٗا كَٰتِبِينَ
          <span className="numberTheme"> (11) </span> يَعۡلَمُونَ مَا
          تَفۡعَلُونَ
          <span className="numberTheme"> (12) </span> إِنَّ ٱلۡأَبۡرَارَ لَفِي
          نَعِيمٖ
          <span className="numberTheme"> (13) </span> وَإِنَّ ٱلۡفُجَّارَ لَفِي
          جَحِيمٖ
          <span className="numberTheme"> (14) </span> يَصۡلَوۡنَهَا يَوۡمَ
          ٱلدِّينِ
          <span className="numberTheme"> (15) </span> وَمَا هُمۡ عَنۡهَا
          بِغَآئِبِينَ
          <span className="numberTheme"> (16) </span> وَمَآ أَدۡرَىٰكَ مَا
          يَوۡمُ ٱلدِّينِ
          <span className="numberTheme"> (17) </span> ثُمَّ مَآ أَدۡرَىٰكَ مَا
          يَوۡمُ ٱلدِّينِ
          <span className="numberTheme"> (18) </span> يَوۡمَ لَا تَمۡلِكُ نَفۡسٞ
          لِّنَفۡسٖ شَيۡـٔٗاۖ وَٱلۡأَمۡرُ يَوۡمَئِذٖ لِّلَّهِ
          <span className="numberTheme"> (19) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default EightyTwo;
