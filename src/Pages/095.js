import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const NinetyFive = () => {
  return (
    <div>
      <Helmet>
        <title>095 - سورة التين</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة التين</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلتِّينِ وَٱلزَّيۡتُونِ (1) وَطُورِ سِينِينَ (2) وَهَٰذَا ٱلۡبَلَدِ
          ٱلۡأَمِينِ (3) لَقَدۡ خَلَقۡنَا ٱلۡإِنسَٰنَ فِيٓ أَحۡسَنِ تَقۡوِيمٖ
          (4) ثُمَّ رَدَدۡنَٰهُ أَسۡفَلَ سَٰفِلِينَ (5) إِلَّا ٱلَّذِينَ
          ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ فَلَهُمۡ أَجۡرٌ غَيۡرُ مَمۡنُونٖ
          (6) فَمَا يُكَذِّبُكَ بَعۡدُ بِٱلدِّينِ (7) أَلَيۡسَ ٱللَّهُ
          بِأَحۡكَمِ ٱلۡحَٰكِمِينَ (8)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetyFive;
