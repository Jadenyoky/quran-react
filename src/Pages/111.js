import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndEleven = () => {
  return (
    <div>
      <Helmet>
        <title>111 - سورة المسد</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة المسد</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          تَبَّتۡ يَدَآ أَبِي لَهَبٖ وَتَبَّ (1) مَآ أَغۡنَىٰ عَنۡهُ مَالُهُۥ
          وَمَا كَسَبَ (2) سَيَصۡلَىٰ نَارٗا ذَاتَ لَهَبٖ (3) وَٱمۡرَأَتُهُۥ
          حَمَّالَةَ ٱلۡحَطَبِ (4) فِي جِيدِهَا حَبۡلٞ مِّن مَّسَدِۭ (5)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndEleven;
