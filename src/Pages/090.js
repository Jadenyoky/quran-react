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
          لَآ أُقۡسِمُ بِهَٰذَا ٱلۡبَلَدِ (1) وَأَنتَ حِلُّۢ بِهَٰذَا ٱلۡبَلَدِ
          (2) وَوَالِدٖ وَمَا وَلَدَ (3) لَقَدۡ خَلَقۡنَا ٱلۡإِنسَٰنَ فِي كَبَدٍ
          (4) أَيَحۡسَبُ أَن لَّن يَقۡدِرَ عَلَيۡهِ أَحَدٞ (5) يَقُولُ
          أَهۡلَكۡتُ مَالٗا لُّبَدًا (6) أَيَحۡسَبُ أَن لَّمۡ يَرَهُۥٓ أَحَدٌ
          (7) أَلَمۡ نَجۡعَل لَّهُۥ عَيۡنَيۡنِ (8) وَلِسَانٗا وَشَفَتَيۡنِ (9)
          وَهَدَيۡنَٰهُ ٱلنَّجۡدَيۡنِ (10) فَلَا ٱقۡتَحَمَ ٱلۡعَقَبَةَ (11)
          وَمَآ أَدۡرَىٰكَ مَا ٱلۡعَقَبَةُ (12) فَكُّ رَقَبَةٍ (13) أَوۡ
          إِطۡعَٰمٞ فِي يَوۡمٖ ذِي مَسۡغَبَةٖ (14) يَتِيمٗا ذَا مَقۡرَبَةٍ (15)
          أَوۡ مِسۡكِينٗا ذَا مَتۡرَبَةٖ (16) ثُمَّ كَانَ مِنَ ٱلَّذِينَ
          ءَامَنُواْ وَتَوَاصَوۡاْ بِٱلصَّبۡرِ وَتَوَاصَوۡاْ بِٱلۡمَرۡحَمَةِ
          (17) أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلۡمَيۡمَنَةِ (18) وَٱلَّذِينَ كَفَرُواْ
          بِـَٔايَٰتِنَا هُمۡ أَصۡحَٰبُ ٱلۡمَشۡـَٔمَةِ (19) عَلَيۡهِمۡ نَارٞ
          مُّؤۡصَدَةُۢ (20)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default Ninety;
