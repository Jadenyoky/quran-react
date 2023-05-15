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
          وَٱلسَّمَآءِ وَٱلطَّارِقِ (1) وَمَآ أَدۡرَىٰكَ مَا ٱلطَّارِقُ (2)
          ٱلنَّجۡمُ ٱلثَّاقِبُ (3) إِن كُلُّ نَفۡسٖ لَّمَّا عَلَيۡهَا حَافِظٞ
          (4) فَلۡيَنظُرِ ٱلۡإِنسَٰنُ مِمَّ خُلِقَ (5) خُلِقَ مِن مَّآءٖ
          دَافِقٖ (6) يَخۡرُجُ مِنۢ بَيۡنِ ٱلصُّلۡبِ وَٱلتَّرَآئِبِ (7)
          إِنَّهُۥ عَلَىٰ رَجۡعِهِۦ لَقَادِرٞ (8) يَوۡمَ تُبۡلَى ٱلسَّرَآئِرُ
          (9) فَمَا لَهُۥ مِن قُوَّةٖ وَلَا نَاصِرٖ (10) وَٱلسَّمَآءِ ذَاتِ
          ٱلرَّجۡعِ (11) وَٱلۡأَرۡضِ ذَاتِ ٱلصَّدۡعِ (12) إِنَّهُۥ لَقَوۡلٞ
          فَصۡلٞ (13) وَمَا هُوَ بِٱلۡهَزۡلِ (14) إِنَّهُمۡ يَكِيدُونَ كَيۡدٗا
          (15) وَأَكِيدُ كَيۡدٗا (16) فَمَهِّلِ ٱلۡكَٰفِرِينَ أَمۡهِلۡهُمۡ
          رُوَيۡدَۢا (17)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default EightySix;
