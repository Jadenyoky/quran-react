import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndFive = () => {
  return (
    <div>
      <Helmet>
        <title>105 - سورة الفيل</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الفيل</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          أَلَمۡ تَرَ كَيۡفَ فَعَلَ رَبُّكَ بِأَصۡحَٰبِ ٱلۡفِيلِ (1) أَلَمۡ
          يَجۡعَلۡ كَيۡدَهُمۡ فِي تَضۡلِيلٖ (2) وَأَرۡسَلَ عَلَيۡهِمۡ طَيۡرًا
          أَبَابِيلَ (3) تَرۡمِيهِم بِحِجَارَةٖ مِّن سِجِّيلٖ (4) فَجَعَلَهُمۡ
          كَعَصۡفٖ مَّأۡكُولِۭ (5)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndFive;
