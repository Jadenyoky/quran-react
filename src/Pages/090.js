import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const Ninety = () => {
  return (
    <div>
      <Helmet>
        <title>090 - سورة البلد</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة البلد</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          لَآ أُقۡسِمُ بِهَٰذَا ٱلۡبَلَدِ
          <span className="numberTheme"> (1) </span> وَأَنتَ حِلُّۢ بِهَٰذَا
          ٱلۡبَلَدِ
          <span className="numberTheme"> (2) </span> وَوَالِدٖ وَمَا وَلَدَ
          <span className="numberTheme"> (3) </span> لَقَدۡ خَلَقۡنَا
          ٱلۡإِنسَٰنَ فِي كَبَدٍ
          <span className="numberTheme"> (4) </span> أَيَحۡسَبُ أَن لَّن
          يَقۡدِرَ عَلَيۡهِ أَحَدٞ
          <span className="numberTheme"> (5) </span> يَقُولُ أَهۡلَكۡتُ مَالٗا
          لُّبَدًا
          <span className="numberTheme"> (6) </span> أَيَحۡسَبُ أَن لَّمۡ
          يَرَهُۥٓ أَحَدٌ
          <span className="numberTheme"> (7) </span> أَلَمۡ نَجۡعَل لَّهُۥ
          عَيۡنَيۡنِ
          <span className="numberTheme"> (8) </span> وَلِسَانٗا وَشَفَتَيۡنِ
          <span className="numberTheme"> (9) </span>
          وَهَدَيۡنَٰهُ ٱلنَّجۡدَيۡنِ
          <span className="numberTheme"> (10) </span> فَلَا ٱقۡتَحَمَ
          ٱلۡعَقَبَةَ
          <span className="numberTheme"> (11) </span>
          وَمَآ أَدۡرَىٰكَ مَا ٱلۡعَقَبَةُ
          <span className="numberTheme"> (12) </span> فَكُّ رَقَبَةٍ
          <span className="numberTheme"> (13) </span> أَوۡ إِطۡعَٰمٞ فِي يَوۡمٖ
          ذِي مَسۡغَبَةٖ
          <span className="numberTheme"> (14) </span> يَتِيمٗا ذَا مَقۡرَبَةٍ
          <span className="numberTheme"> (15) </span>
          أَوۡ مِسۡكِينٗا ذَا مَتۡرَبَةٖ
          <span className="numberTheme"> (16) </span> ثُمَّ كَانَ مِنَ ٱلَّذِينَ
          ءَامَنُواْ وَتَوَاصَوۡاْ بِٱلصَّبۡرِ وَتَوَاصَوۡاْ بِٱلۡمَرۡحَمَةِ
          <span className="numberTheme"> (17) </span> أُوْلَٰٓئِكَ أَصۡحَٰبُ
          ٱلۡمَيۡمَنَةِ
          <span className="numberTheme"> (18) </span> وَٱلَّذِينَ كَفَرُواْ
          بِـَٔايَٰتِنَا هُمۡ أَصۡحَٰبُ ٱلۡمَشۡـَٔمَةِ
          <span className="numberTheme"> (19) </span> عَلَيۡهِمۡ نَارٞ
          مُّؤۡصَدَةُۢ
          <span className="numberTheme"> (20) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default Ninety;
