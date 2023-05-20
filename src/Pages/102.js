import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndTwo = () => {
  return (
    <div>
      <Helmet>
        <title>102 - سورة التكاثر</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة التكاثر</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          أَلۡهَىٰكُمُ ٱلتَّكَاثُرُ 
          <span className="numberTheme"> (1) </span> حَتَّىٰ زُرۡتُمُ ٱلۡمَقَابِرَ 
          <span className="numberTheme"> (2) </span> كَلَّا
          سَوۡفَ تَعۡلَمُونَ 
          <span className="numberTheme"> (3) </span> ثُمَّ كَلَّا سَوۡفَ تَعۡلَمُونَ 
          <span className="numberTheme"> (4) </span> كَلَّا لَوۡ
          تَعۡلَمُونَ عِلۡمَ ٱلۡيَقِينِ 
          <span className="numberTheme"> (5) </span> لَتَرَوُنَّ ٱلۡجَحِيمَ 
          <span className="numberTheme"> (6) </span> ثُمَّ
          لَتَرَوُنَّهَا عَيۡنَ ٱلۡيَقِينِ 
          <span className="numberTheme"> (7) </span> ثُمَّ لَتُسۡـَٔلُنَّ يَوۡمَئِذٍ
          عَنِ ٱلنَّعِيمِ 
          <span className="numberTheme"> (8) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndTwo;
