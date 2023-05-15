import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndOne = () => {
  return (
    <div>
      <Helmet>
        <title>101 - سورة القارعة</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة القارعة</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          ٱلۡقَارِعَةُ (1) مَا ٱلۡقَارِعَةُ (2) وَمَآ أَدۡرَىٰكَ مَا
          ٱلۡقَارِعَةُ (3) يَوۡمَ يَكُونُ ٱلنَّاسُ كَٱلۡفَرَاشِ ٱلۡمَبۡثُوثِ (4)
          وَتَكُونُ ٱلۡجِبَالُ كَٱلۡعِهۡنِ ٱلۡمَنفُوشِ (5) فَأَمَّا مَن ثَقُلَتۡ
          مَوَٰزِينُهُۥ (6) فَهُوَ فِي عِيشَةٖ رَّاضِيَةٖ (7) وَأَمَّا مَنۡ
          خَفَّتۡ مَوَٰزِينُهُۥ (8) فَأُمُّهُۥ هَاوِيَةٞ (9) وَمَآ أَدۡرَىٰكَ
          مَا هِيَهۡ (10) نَارٌ حَامِيَةُۢ (11)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndOne;
