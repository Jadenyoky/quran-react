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
          أَلۡهَىٰكُمُ ٱلتَّكَاثُرُ (1) حَتَّىٰ زُرۡتُمُ ٱلۡمَقَابِرَ (2) كَلَّا
          سَوۡفَ تَعۡلَمُونَ (3) ثُمَّ كَلَّا سَوۡفَ تَعۡلَمُونَ (4) كَلَّا لَوۡ
          تَعۡلَمُونَ عِلۡمَ ٱلۡيَقِينِ (5) لَتَرَوُنَّ ٱلۡجَحِيمَ (6) ثُمَّ
          لَتَرَوُنَّهَا عَيۡنَ ٱلۡيَقِينِ (7) ثُمَّ لَتُسۡـَٔلُنَّ يَوۡمَئِذٍ
          عَنِ ٱلنَّعِيمِ (8)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndTwo;
