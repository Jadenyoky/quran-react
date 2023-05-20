import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const EightySix = () => {
  return (
    <div>
      <Helmet>
        <title>086 - سورة الطارق</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الطارق</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلسَّمَآءِ وَٱلطَّارِقِ
          <span className="numberTheme"> (1) </span> وَمَآ أَدۡرَىٰكَ مَا
          ٱلطَّارِقُ
          <span className="numberTheme"> (2) </span>
          ٱلنَّجۡمُ ٱلثَّاقِبُ
          <span className="numberTheme"> (3) </span> إِن كُلُّ نَفۡسٖ لَّمَّا
          عَلَيۡهَا حَافِظٞ
          <span className="numberTheme"> (4) </span> فَلۡيَنظُرِ ٱلۡإِنسَٰنُ
          مِمَّ خُلِقَ
          <span className="numberTheme"> (5) </span> خُلِقَ مِن مَّآءٖ دَافِقٖ
          <span className="numberTheme"> (6) </span> يَخۡرُجُ مِنۢ بَيۡنِ
          ٱلصُّلۡبِ وَٱلتَّرَآئِبِ
          <span className="numberTheme"> (7) </span>
          إِنَّهُۥ عَلَىٰ رَجۡعِهِۦ لَقَادِرٞ
          <span className="numberTheme"> (8) </span> يَوۡمَ تُبۡلَى
          ٱلسَّرَآئِرُ
          <span className="numberTheme"> (9) </span> فَمَا لَهُۥ مِن قُوَّةٖ
          وَلَا نَاصِرٖ
          <span className="numberTheme"> (10) </span> وَٱلسَّمَآءِ ذَاتِ
          ٱلرَّجۡعِ
          <span className="numberTheme"> (11) </span> وَٱلۡأَرۡضِ ذَاتِ
          ٱلصَّدۡعِ
          <span className="numberTheme"> (12) </span> إِنَّهُۥ لَقَوۡلٞ فَصۡلٞ
          <span className="numberTheme"> (13) </span> وَمَا هُوَ بِٱلۡهَزۡلِ
          <span className="numberTheme"> (14) </span> إِنَّهُمۡ يَكِيدُونَ
          كَيۡدٗا
          <span className="numberTheme"> (15) </span> وَأَكِيدُ كَيۡدٗا
          <span className="numberTheme"> (16) </span> فَمَهِّلِ ٱلۡكَٰفِرِينَ
          أَمۡهِلۡهُمۡ رُوَيۡدَۢا
          <span className="numberTheme"> (17) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default EightySix;
