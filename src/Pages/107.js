import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndSeven = () => {
  return (
    <div>
      <Helmet>
        <title>107 - سورة الماعون</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الماعون</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          أَرَءَيۡتَ ٱلَّذِي يُكَذِّبُ بِٱلدِّينِ (1) فَذَٰلِكَ ٱلَّذِي يَدُعُّ
          ٱلۡيَتِيمَ (2) وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلۡمِسۡكِينِ (3) فَوَيۡلٞ
          لِّلۡمُصَلِّينَ (4) ٱلَّذِينَ هُمۡ عَن صَلَاتِهِمۡ سَاهُونَ (5)
          ٱلَّذِينَ هُمۡ يُرَآءُونَ (6) وَيَمۡنَعُونَ ٱلۡمَاعُونَ (7)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndSeven;
