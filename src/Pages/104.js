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
          وَيۡلٞ لِّكُلِّ هُمَزَةٖ لُّمَزَةٍ
          <span className="numberTheme"> (1) </span> ٱلَّذِي جَمَعَ مَالٗا
          وَعَدَّدَهُۥ
          <span className="numberTheme"> (2) </span> يَحۡسَبُ أَنَّ مَالَهُۥٓ
          أَخۡلَدَهُۥ
          <span className="numberTheme"> (3) </span> كَلَّاۖ لَيُنۢبَذَنَّ فِي
          ٱلۡحُطَمَةِ
          <span className="numberTheme"> (4) </span> وَمَآ أَدۡرَىٰكَ مَا
          ٱلۡحُطَمَةُ
          <span className="numberTheme"> (5) </span> نَارُ ٱللَّهِ ٱلۡمُوقَدَةُ
          <span className="numberTheme"> (6) </span> ٱلَّتِي تَطَّلِعُ عَلَى
          ٱلۡأَفۡـِٔدَةِ
          <span className="numberTheme"> (7) </span> إِنَّهَا عَلَيۡهِم
          مُّؤۡصَدَةٞ
          <span className="numberTheme"> (8) </span> فِي عَمَدٖ مُّمَدَّدَةِۭ
          <span className="numberTheme"> (9) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default HundredAndFour;
