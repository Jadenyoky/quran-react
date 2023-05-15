import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const NinetyThree = () => {
  return (
    <div>
      <Helmet>
        <title>093 - سورة الضحى</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الضحى</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلضُّحَىٰ (1) وَٱلَّيۡلِ إِذَا سَجَىٰ (2) مَا وَدَّعَكَ رَبُّكَ
          وَمَا قَلَىٰ (3) وَلَلۡأٓخِرَةُ خَيۡرٞ لَّكَ مِنَ ٱلۡأُولَىٰ (4)
          وَلَسَوۡفَ يُعۡطِيكَ رَبُّكَ فَتَرۡضَىٰٓ (5) أَلَمۡ يَجِدۡكَ يَتِيمٗا
          فَـَٔاوَىٰ (6) وَوَجَدَكَ ضَآلّٗا فَهَدَىٰ (7) وَوَجَدَكَ عَآئِلٗا
          فَأَغۡنَىٰ (8) فَأَمَّا ٱلۡيَتِيمَ فَلَا تَقۡهَرۡ (9) وَأَمَّا
          ٱلسَّآئِلَ فَلَا تَنۡهَرۡ (10) وَأَمَّا بِنِعۡمَةِ رَبِّكَ فَحَدِّثۡ
          (11)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetyThree;
