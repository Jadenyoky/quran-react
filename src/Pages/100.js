import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const Hundred = () => {
  return (
    <div>
      <Helmet>
        <title>100 - سورة العاديات</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة العاديات</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلۡعَٰدِيَٰتِ ضَبۡحٗا (1) فَٱلۡمُورِيَٰتِ قَدۡحٗا (2)
          فَٱلۡمُغِيرَٰتِ صُبۡحٗا (3) فَأَثَرۡنَ بِهِۦ نَقۡعٗا (4) فَوَسَطۡنَ
          بِهِۦ جَمۡعًا (5) إِنَّ ٱلۡإِنسَٰنَ لِرَبِّهِۦ لَكَنُودٞ (6)
          وَإِنَّهُۥ عَلَىٰ ذَٰلِكَ لَشَهِيدٞ (7) وَإِنَّهُۥ لِحُبِّ ٱلۡخَيۡرِ
          لَشَدِيدٌ (8) ۞أَفَلَا يَعۡلَمُ إِذَا بُعۡثِرَ مَا فِي ٱلۡقُبُورِ (9)
          وَحُصِّلَ مَا فِي ٱلصُّدُورِ (10) إِنَّ رَبَّهُم بِهِمۡ يَوۡمَئِذٖ
          لَّخَبِيرُۢ (11)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default Hundred;