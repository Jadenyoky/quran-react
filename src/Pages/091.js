import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const NinetyOne = () => {
  return (
    <div>
      <Helmet>
        <title>091 - سورة الشمس</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الشمس</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلشَّمۡسِ وَضُحَىٰهَا
          <span className="numberTheme"> (1) </span> وَٱلۡقَمَرِ إِذَا تَلَىٰهَا
          <span className="numberTheme"> (2) </span>
          وَٱلنَّهَارِ إِذَا جَلَّىٰهَا
          <span className="numberTheme"> (3) </span> وَٱلَّيۡلِ إِذَا
          يَغۡشَىٰهَا
          <span className="numberTheme"> (4) </span>
          وَٱلسَّمَآءِ وَمَا بَنَىٰهَا
          <span className="numberTheme"> (5) </span> وَٱلۡأَرۡضِ وَمَا طَحَىٰهَا
          <span className="numberTheme"> (6) </span>
          وَنَفۡسٖ وَمَا سَوَّىٰهَا
          <span className="numberTheme"> (7) </span> فَأَلۡهَمَهَا فُجُورَهَا
          وَتَقۡوَىٰهَا
          <span className="numberTheme"> (8) </span> قَدۡ أَفۡلَحَ مَن
          زَكَّىٰهَا
          <span className="numberTheme"> (9) </span> وَقَدۡ خَابَ مَن دَسَّىٰهَا
          <span className="numberTheme"> (10) </span>
          كَذَّبَتۡ ثَمُودُ بِطَغۡوَىٰهَآ
          <span className="numberTheme"> (11) </span> إِذِ ٱنۢبَعَثَ أَشۡقَىٰهَا
          <span className="numberTheme"> (12) </span>
          فَقَالَ لَهُمۡ رَسُولُ ٱللَّهِ نَاقَةَ ٱللَّهِ وَسُقۡيَٰهَا
          <span className="numberTheme"> (13) </span>
          فَكَذَّبُوهُ فَعَقَرُوهَا فَدَمۡدَمَ عَلَيۡهِمۡ رَبُّهُم بِذَنۢبِهِمۡ
          فَسَوَّىٰهَا
          <span className="numberTheme"> (14) </span> وَلَا يَخَافُ عُقۡبَٰهَا
          <span className="numberTheme"> (15) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetyOne;
