import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const EightyTwo = () => {
  return (
    <div>
      <Helmet>
        <title>082 - سورة الإنفطار</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الإنفطار</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
        إِذَا ٱلسَّمَآءُ ٱنفَطَرَتۡ (1) وَإِذَا ٱلۡكَوَاكِبُ ٱنتَثَرَتۡ (2) وَإِذَا ٱلۡبِحَارُ فُجِّرَتۡ (3) وَإِذَا ٱلۡقُبُورُ بُعۡثِرَتۡ (4) عَلِمَتۡ نَفۡسٞ مَّا قَدَّمَتۡ وَأَخَّرَتۡ (5) يَٰٓأَيُّهَا ٱلۡإِنسَٰنُ مَا غَرَّكَ بِرَبِّكَ ٱلۡكَرِيمِ (6) ٱلَّذِي خَلَقَكَ فَسَوَّىٰكَ فَعَدَلَكَ (7) فِيٓ أَيِّ صُورَةٖ مَّا شَآءَ رَكَّبَكَ (8) كَلَّا بَلۡ تُكَذِّبُونَ بِٱلدِّينِ (9) وَإِنَّ عَلَيۡكُمۡ لَحَٰفِظِينَ (10) كِرَامٗا كَٰتِبِينَ (11) يَعۡلَمُونَ مَا تَفۡعَلُونَ (12) إِنَّ ٱلۡأَبۡرَارَ لَفِي نَعِيمٖ (13) وَإِنَّ ٱلۡفُجَّارَ لَفِي جَحِيمٖ (14) يَصۡلَوۡنَهَا يَوۡمَ ٱلدِّينِ (15) وَمَا هُمۡ عَنۡهَا بِغَآئِبِينَ (16) وَمَآ أَدۡرَىٰكَ مَا يَوۡمُ ٱلدِّينِ (17) ثُمَّ مَآ أَدۡرَىٰكَ مَا يَوۡمُ ٱلدِّينِ (18) يَوۡمَ لَا تَمۡلِكُ نَفۡسٞ لِّنَفۡسٖ شَيۡـٔٗاۖ وَٱلۡأَمۡرُ يَوۡمَئِذٖ لِّلَّهِ (19)

        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default EightyTwo;
