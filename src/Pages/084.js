import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const EightyFour = () => {
  return (
    <div>
      <Helmet>
        <title>084 - سورة الإنشقاق</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الإنشقاق</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          إِذَا ٱلسَّمَآءُ ٱنشَقَّتۡ
          <span className="numberTheme"> (1) </span> وَأَذِنَتۡ لِرَبِّهَا
          وَحُقَّتۡ
          <span className="numberTheme"> (2) </span>
          وَإِذَا ٱلۡأَرۡضُ مُدَّتۡ
          <span className="numberTheme"> (3) </span> وَأَلۡقَتۡ مَا فِيهَا
          وَتَخَلَّتۡ
          <span className="numberTheme"> (4) </span>
          وَأَذِنَتۡ لِرَبِّهَا وَحُقَّتۡ
          <span className="numberTheme"> (5) </span> يَٰٓأَيُّهَا ٱلۡإِنسَٰنُ
          إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدۡحٗا فَمُلَٰقِيهِ
          <span className="numberTheme"> (6) </span> فَأَمَّا مَنۡ أُوتِيَ
          كِتَٰبَهُۥ بِيَمِينِهِۦ
          <span className="numberTheme"> (7) </span> فَسَوۡفَ يُحَاسَبُ حِسَابٗا
          يَسِيرٗا
          <span className="numberTheme"> (8) </span>
          وَيَنقَلِبُ إِلَىٰٓ أَهۡلِهِۦ مَسۡرُورٗا
          <span className="numberTheme"> (9) </span> وَأَمَّا مَنۡ أُوتِيَ
          كِتَٰبَهُۥ وَرَآءَ ظَهۡرِهِۦ
          <span className="numberTheme"> (10) </span> فَسَوۡفَ يَدۡعُواْ
          ثُبُورٗا
          <span className="numberTheme"> (11) </span>
          وَيَصۡلَىٰ سَعِيرًا
          <span className="numberTheme"> (12) </span> إِنَّهُۥ كَانَ فِيٓ
          أَهۡلِهِۦ مَسۡرُورًا
          <span className="numberTheme"> (13) </span>
          إِنَّهُۥ ظَنَّ أَن لَّن يَحُورَ
          <span className="numberTheme"> (14) </span> بَلَىٰٓۚ إِنَّ رَبَّهُۥ
          كَانَ بِهِۦ بَصِيرٗا
          <span className="numberTheme"> (15) </span> فَلَآ أُقۡسِمُ
          بِٱلشَّفَقِ
          <span className="numberTheme"> (16) </span> وَٱلَّيۡلِ وَمَا وَسَقَ
          <span className="numberTheme"> (17) </span> وَٱلۡقَمَرِ إِذَا ٱتَّسَقَ
          <span className="numberTheme"> (18) </span> لَتَرۡكَبُنَّ طَبَقًا عَن
          طَبَقٖ
          <span className="numberTheme"> (19) </span> فَمَا لَهُمۡ لَا
          يُؤۡمِنُونَ
          <span className="numberTheme"> (20) </span> وَإِذَا قُرِئَ عَلَيۡهِمُ
          ٱلۡقُرۡءَانُ لَا يَسۡجُدُونَۤ۩
          <span className="numberTheme"> (21) </span> بَلِ ٱلَّذِينَ كَفَرُواْ
          يُكَذِّبُونَ
          <span className="numberTheme"> (22) </span> وَٱللَّهُ أَعۡلَمُ بِمَا
          يُوعُونَ
          <span className="numberTheme"> (23) </span>
          فَبَشِّرۡهُم بِعَذَابٍ أَلِيمٍ
          <span className="numberTheme"> (24) </span> إِلَّا ٱلَّذِينَ
          ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ لَهُمۡ أَجۡرٌ غَيۡرُ مَمۡنُونِۭ
          <span className="numberTheme"> (25) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default EightyFour;
