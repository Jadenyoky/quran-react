import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const NinetyFour = () => {
  return (
    <div>
      <Helmet>
        <title>094 - سورة الشرح</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الشرح</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          أَلَمۡ نَشۡرَحۡ لَكَ صَدۡرَكَ (1) وَوَضَعۡنَا عَنكَ وِزۡرَكَ (2)
          ٱلَّذِيٓ أَنقَضَ ظَهۡرَكَ (3) وَرَفَعۡنَا لَكَ ذِكۡرَكَ (4) فَإِنَّ
          مَعَ ٱلۡعُسۡرِ يُسۡرًا (5) إِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرٗا (6) فَإِذَا
          فَرَغۡتَ فَٱنصَبۡ (7) وَإِلَىٰ رَبِّكَ فَٱرۡغَب (8)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetyFour;
