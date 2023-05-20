import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const EightyEight = () => {
  return (
    <div>
      <Helmet>
        <title>088 - سورة الغاشية</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الغاشية</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          هَلۡ أَتَىٰكَ حَدِيثُ ٱلۡغَٰشِيَةِ
          <span className="numberTheme"> (1) </span> وُجُوهٞ يَوۡمَئِذٍ
          خَٰشِعَةٌ
          <span className="numberTheme"> (2) </span> عَامِلَةٞ نَّاصِبَةٞ
          <span className="numberTheme"> (3) </span> تَصۡلَىٰ نَارًا حَامِيَةٗ
          <span className="numberTheme"> (4) </span> تُسۡقَىٰ مِنۡ عَيۡنٍ
          ءَانِيَةٖ
          <span className="numberTheme"> (5) </span> لَّيۡسَ لَهُمۡ طَعَامٌ
          إِلَّا مِن ضَرِيعٖ
          <span className="numberTheme"> (6) </span> لَّا يُسۡمِنُ وَلَا يُغۡنِي
          مِن جُوعٖ
          <span className="numberTheme"> (7) </span> وُجُوهٞ يَوۡمَئِذٖ
          نَّاعِمَةٞ
          <span className="numberTheme"> (8) </span> لِّسَعۡيِهَا رَاضِيَةٞ
          <span className="numberTheme"> (9) </span> فِي جَنَّةٍ عَالِيَةٖ
          <span className="numberTheme"> (10) </span>
          لَّا تَسۡمَعُ فِيهَا لَٰغِيَةٗ
          <span className="numberTheme"> (11) </span> فِيهَا عَيۡنٞ جَارِيَةٞ
          <span className="numberTheme"> (12) </span>
          فِيهَا سُرُرٞ مَّرۡفُوعَةٞ
          <span className="numberTheme"> (13) </span> وَأَكۡوَابٞ مَّوۡضُوعَةٞ
          <span className="numberTheme"> (14) </span>
          وَنَمَارِقُ مَصۡفُوفَةٞ
          <span className="numberTheme"> (15) </span> وَزَرَابِيُّ مَبۡثُوثَةٌ
          <span className="numberTheme"> (16) </span> أَفَلَا يَنظُرُونَ إِلَى
          ٱلۡإِبِلِ كَيۡفَ خُلِقَتۡ
          <span className="numberTheme"> (17) </span> وَإِلَى ٱلسَّمَآءِ كَيۡفَ
          رُفِعَتۡ
          <span className="numberTheme"> (18) </span> وَإِلَى ٱلۡجِبَالِ كَيۡفَ
          نُصِبَتۡ
          <span className="numberTheme"> (19) </span> وَإِلَى ٱلۡأَرۡضِ كَيۡفَ
          سُطِحَتۡ
          <span className="numberTheme"> (20) </span> فَذَكِّرۡ إِنَّمَآ أَنتَ
          مُذَكِّرٞ
          <span className="numberTheme"> (21) </span> لَّسۡتَ عَلَيۡهِم
          بِمُصَيۡطِرٍ
          <span className="numberTheme"> (22) </span> إِلَّا مَن تَوَلَّىٰ
          وَكَفَرَ
          <span className="numberTheme"> (23) </span> فَيُعَذِّبُهُ ٱللَّهُ
          ٱلۡعَذَابَ ٱلۡأَكۡبَرَ
          <span className="numberTheme"> (24) </span> إِنَّ إِلَيۡنَآ
          إِيَابَهُمۡ
          <span className="numberTheme"> (25) </span> ثُمَّ إِنَّ عَلَيۡنَا
          حِسَابَهُم
          <span className="numberTheme"> (26) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default EightyEight;
