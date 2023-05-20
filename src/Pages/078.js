import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const SeventyEight = () => {
  return (
    <div>
      <Helmet>
        <title>078 - سورة النبأ</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة النبأ</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          عَمَّ يَتَسَآءَلُونَ
          <span className="numberTheme"> (1) </span> عَنِ ٱلنَّبَإِ ٱلۡعَظِيمِ
          <span className="numberTheme"> (2) </span> ٱلَّذِي هُمۡ فِيهِ
          مُخۡتَلِفُونَ
          <span className="numberTheme"> (3) </span> كَلَّا سَيَعۡلَمُونَ
          <span className="numberTheme"> (4) </span> ثُمَّ كَلَّا سَيَعۡلَمُونَ
          <span className="numberTheme"> (5) </span> أَلَمۡ نَجۡعَلِ ٱلۡأَرۡضَ
          مِهَٰدٗا
          <span className="numberTheme"> (6) </span> وَٱلۡجِبَالَ أَوۡتَادٗا
          <span className="numberTheme"> (7) </span> وَخَلَقۡنَٰكُمۡ أَزۡوَٰجٗا
          <span className="numberTheme"> (8) </span> وَجَعَلۡنَا نَوۡمَكُمۡ
          سُبَاتٗا
          <span className="numberTheme"> (9) </span> وَجَعَلۡنَا ٱلَّيۡلَ
          لِبَاسٗا
          <span className="numberTheme"> (10) </span> وَجَعَلۡنَا ٱلنَّهَارَ
          مَعَاشٗا
          <span className="numberTheme"> (11) </span> وَبَنَيۡنَا فَوۡقَكُمۡ
          سَبۡعٗا شِدَادٗا
          <span className="numberTheme"> (12) </span> وَجَعَلۡنَا سِرَاجٗا
          وَهَّاجٗا
          <span className="numberTheme"> (13) </span> وَأَنزَلۡنَا مِنَ
          ٱلۡمُعۡصِرَٰتِ مَآءٗ ثَجَّاجٗا
          <span className="numberTheme"> (14) </span> لِّنُخۡرِجَ بِهِۦ حَبّٗا
          وَنَبَاتٗا
          <span className="numberTheme"> (15) </span> وَجَنَّٰتٍ أَلۡفَافًا
          <span className="numberTheme"> (16) </span> إِنَّ يَوۡمَ ٱلۡفَصۡلِ
          كَانَ مِيقَٰتٗا
          <span className="numberTheme"> (17) </span> يَوۡمَ يُنفَخُ فِي
          ٱلصُّورِ فَتَأۡتُونَ أَفۡوَاجٗا
          <span className="numberTheme"> (18) </span> وَفُتِحَتِ ٱلسَّمَآءُ
          فَكَانَتۡ أَبۡوَٰبٗا
          <span className="numberTheme"> (19) </span> وَسُيِّرَتِ ٱلۡجِبَالُ
          فَكَانَتۡ سَرَابًا
          <span className="numberTheme"> (20) </span> إِنَّ جَهَنَّمَ كَانَتۡ
          مِرۡصَادٗا
          <span className="numberTheme"> (21) </span> لِّلطَّٰغِينَ مَـَٔابٗا
          <span className="numberTheme"> (22) </span> لَّٰبِثِينَ فِيهَآ
          أَحۡقَابٗا
          <span className="numberTheme"> (23) </span> لَّا يَذُوقُونَ فِيهَا
          بَرۡدٗا وَلَا شَرَابًا
          <span className="numberTheme"> (24) </span> إِلَّا حَمِيمٗا
          وَغَسَّاقٗا
          <span className="numberTheme"> (25) </span>
          جَزَآءٗ وِفَاقًا
          <span className="numberTheme"> (26) </span> إِنَّهُمۡ كَانُواْ لَا
          يَرۡجُونَ حِسَابٗا
          <span className="numberTheme"> (27) </span>
          وَكَذَّبُواْ بِـَٔايَٰتِنَا كِذَّابٗا
          <span className="numberTheme"> (28) </span> وَكُلَّ شَيۡءٍ
          أَحۡصَيۡنَٰهُ كِتَٰبٗا
          <span className="numberTheme"> (29) </span> فَذُوقُواْ فَلَن
          نَّزِيدَكُمۡ إِلَّا عَذَابًا
          <span className="numberTheme"> (30) </span> إِنَّ لِلۡمُتَّقِينَ
          مَفَازًا
          <span className="numberTheme"> (31) </span> حَدَآئِقَ وَأَعۡنَٰبٗا
          <span className="numberTheme"> (32) </span> وَكَوَاعِبَ أَتۡرَابٗا
          <span className="numberTheme"> (33) </span> وَكَأۡسٗا دِهَاقٗا
          <span className="numberTheme"> (34) </span>
          لَّا يَسۡمَعُونَ فِيهَا لَغۡوٗا وَلَا كِذَّٰبٗا
          <span className="numberTheme"> (35) </span> جَزَآءٗ مِّن رَّبِّكَ
          عَطَآءً حِسَابٗا
          <span className="numberTheme"> (36) </span> رَّبِّ ٱلسَّمَٰوَٰتِ
          وَٱلۡأَرۡضِ وَمَا بَيۡنَهُمَا ٱلرَّحۡمَٰنِۖ لَا يَمۡلِكُونَ مِنۡهُ
          خِطَابٗا
          <span className="numberTheme"> (37) </span> يَوۡمَ يَقُومُ ٱلرُّوحُ
          وَٱلۡمَلَٰٓئِكَةُ صَفّٗاۖ لَّا يَتَكَلَّمُونَ إِلَّا مَنۡ أَذِنَ لَهُ
          ٱلرَّحۡمَٰنُ وَقَالَ صَوَابٗا
          <span className="numberTheme"> (38) </span> ذَٰلِكَ ٱلۡيَوۡمُ
          ٱلۡحَقُّۖ فَمَن شَآءَ ٱتَّخَذَ إِلَىٰ رَبِّهِۦ مَـَٔابًا
          <span className="numberTheme"> (39) </span> إِنَّآ أَنذَرۡنَٰكُمۡ
          عَذَابٗا قَرِيبٗا يَوۡمَ يَنظُرُ ٱلۡمَرۡءُ مَا قَدَّمَتۡ يَدَاهُ
          وَيَقُولُ ٱلۡكَافِرُ يَٰلَيۡتَنِي كُنتُ تُرَٰبَۢا
          <span className="numberTheme"> (40) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default SeventyEight;
