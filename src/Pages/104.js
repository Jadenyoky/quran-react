import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const HundredAndFour = () => {
  return (
    <div>
      <Helmet>
        <title>104 - سورة الهمزة</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الهمزة</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَيۡلٞ لِّكُلِّ هُمَزَةٖ لُّمَزَةٍ (1) ٱلَّذِي جَمَعَ مَالٗا
          وَعَدَّدَهُۥ (2) يَحۡسَبُ أَنَّ مَالَهُۥٓ أَخۡلَدَهُۥ (3) كَلَّاۖ
          لَيُنۢبَذَنَّ فِي ٱلۡحُطَمَةِ (4) وَمَآ أَدۡرَىٰكَ مَا ٱلۡحُطَمَةُ
          (5) نَارُ ٱللَّهِ ٱلۡمُوقَدَةُ (6) ٱلَّتِي تَطَّلِعُ عَلَى
          ٱلۡأَفۡـِٔدَةِ (7) إِنَّهَا عَلَيۡهِم مُّؤۡصَدَةٞ (8) فِي عَمَدٖ
          مُّمَدَّدَةِۭ (9)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndFour;
