import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndNine = () => {
  return (
    <div>
      <Helmet>
        <title>109 - سورة الكافرون</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الكافرون</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          قُلۡ يَٰٓأَيُّهَا ٱلۡكَٰفِرُونَ (1) لَآ أَعۡبُدُ مَا تَعۡبُدُونَ (2)
          وَلَآ أَنتُمۡ عَٰبِدُونَ مَآ أَعۡبُدُ (3) وَلَآ أَنَا۠ عَابِدٞ مَّا
          عَبَدتُّمۡ (4) وَلَآ أَنتُمۡ عَٰبِدُونَ مَآ أَعۡبُدُ (5) لَكُمۡ
          دِينُكُمۡ وَلِيَ دِينِ (6)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndNine;
