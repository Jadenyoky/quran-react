import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const NinetyOne = () => {
  return (
    <div>
      <Helmet>
        <title>091 - سورة الشمس</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الشمس</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلشَّمۡسِ وَضُحَىٰهَا (1) وَٱلۡقَمَرِ إِذَا تَلَىٰهَا (2)
          وَٱلنَّهَارِ إِذَا جَلَّىٰهَا (3) وَٱلَّيۡلِ إِذَا يَغۡشَىٰهَا (4)
          وَٱلسَّمَآءِ وَمَا بَنَىٰهَا (5) وَٱلۡأَرۡضِ وَمَا طَحَىٰهَا (6)
          وَنَفۡسٖ وَمَا سَوَّىٰهَا (7) فَأَلۡهَمَهَا فُجُورَهَا وَتَقۡوَىٰهَا
          (8) قَدۡ أَفۡلَحَ مَن زَكَّىٰهَا (9) وَقَدۡ خَابَ مَن دَسَّىٰهَا (10)
          كَذَّبَتۡ ثَمُودُ بِطَغۡوَىٰهَآ (11) إِذِ ٱنۢبَعَثَ أَشۡقَىٰهَا (12)
          فَقَالَ لَهُمۡ رَسُولُ ٱللَّهِ نَاقَةَ ٱللَّهِ وَسُقۡيَٰهَا (13)
          فَكَذَّبُوهُ فَعَقَرُوهَا فَدَمۡدَمَ عَلَيۡهِمۡ رَبُّهُم بِذَنۢبِهِمۡ
          فَسَوَّىٰهَا (14) وَلَا يَخَافُ عُقۡبَٰهَا (15)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetyOne;
