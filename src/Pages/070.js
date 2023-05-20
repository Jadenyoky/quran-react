import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const Seventy = () => {
  return (
    <div>
      <Helmet>
        <title>070 - سورة المعارج </title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة المعارج </p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          سَأَلَ سَآئِلُۢ بِعَذَابٖ وَاقِعٖ
          <span className="numberTheme"> (1) </span> لِّلۡكَٰفِرِينَ لَيۡسَ
          لَهُۥ دَافِعٞ
          <span className="numberTheme"> (2) </span> مِّنَ ٱللَّهِ ذِي
          ٱلۡمَعَارِجِ
          <span className="numberTheme"> (3) </span> تَعۡرُجُ ٱلۡمَلَٰٓئِكَةُ
          وَٱلرُّوحُ إِلَيۡهِ فِي يَوۡمٖ كَانَ مِقۡدَارُهُۥ خَمۡسِينَ أَلۡفَ
          سَنَةٖ
          <span className="numberTheme"> (4) </span> فَٱصۡبِرۡ صَبۡرٗا جَمِيلًا
          <span className="numberTheme"> (5) </span> إِنَّهُمۡ يَرَوۡنَهُۥ
          بَعِيدٗا
          <span className="numberTheme"> (6) </span> وَنَرَىٰهُ قَرِيبٗا
          <span className="numberTheme"> (7) </span> يَوۡمَ تَكُونُ ٱلسَّمَآءُ
          كَٱلۡمُهۡلِ
          <span className="numberTheme"> (8) </span> وَتَكُونُ ٱلۡجِبَالُ
          كَٱلۡعِهۡنِ
          <span className="numberTheme"> (9) </span> وَلَا يَسۡـَٔلُ حَمِيمٌ
          حَمِيمٗا
          <span className="numberTheme"> (10) </span> يُبَصَّرُونَهُمۡۚ يَوَدُّ
          ٱلۡمُجۡرِمُ لَوۡ يَفۡتَدِي مِنۡ عَذَابِ يَوۡمِئِذِۭ بِبَنِيهِ
          <span className="numberTheme"> (11) </span> وَصَٰحِبَتِهِۦ وَأَخِيهِ
          <span className="numberTheme"> (12) </span> وَفَصِيلَتِهِ ٱلَّتِي
          تُـٔۡوِيهِ
          <span className="numberTheme"> (13) </span> وَمَن فِي ٱلۡأَرۡضِ
          جَمِيعٗا ثُمَّ يُنجِيهِ
          <span className="numberTheme"> (14) </span> كَلَّآۖ إِنَّهَا لَظَىٰ
          <span className="numberTheme"> (15) </span>
          نَزَّاعَةٗ لِّلشَّوَىٰ
          <span className="numberTheme"> (16) </span> تَدۡعُواْ مَنۡ أَدۡبَرَ
          وَتَوَلَّىٰ
          <span className="numberTheme"> (17) </span>
          وَجَمَعَ فَأَوۡعَىٰٓ
          <span className="numberTheme"> (18) </span>
          <span className="partTheme"> ۞ </span>إِنَّ ٱلۡإِنسَٰنَ خُلِقَ
          هَلُوعًا
          <span className="numberTheme"> (19) </span>
          إِذَا مَسَّهُ ٱلشَّرُّ جَزُوعٗا
          <span className="numberTheme"> (20) </span> وَإِذَا مَسَّهُ ٱلۡخَيۡرُ
          مَنُوعًا
          <span className="numberTheme"> (21) </span> إِلَّا ٱلۡمُصَلِّينَ
          <span className="numberTheme"> (22) </span> ٱلَّذِينَ هُمۡ عَلَىٰ
          صَلَاتِهِمۡ دَآئِمُونَ
          <span className="numberTheme"> (23) </span> وَٱلَّذِينَ فِيٓ
          أَمۡوَٰلِهِمۡ حَقّٞ مَّعۡلُومٞ
          <span className="numberTheme"> (24) </span> لِّلسَّآئِلِ
          وَٱلۡمَحۡرُومِ
          <span className="numberTheme"> (25) </span> وَٱلَّذِينَ يُصَدِّقُونَ
          بِيَوۡمِ ٱلدِّينِ
          <span className="numberTheme"> (26) </span> وَٱلَّذِينَ هُم مِّنۡ
          عَذَابِ رَبِّهِم مُّشۡفِقُونَ
          <span className="numberTheme"> (27) </span> إِنَّ عَذَابَ رَبِّهِمۡ
          غَيۡرُ مَأۡمُونٖ
          <span className="numberTheme"> (28) </span> وَٱلَّذِينَ هُمۡ
          لِفُرُوجِهِمۡ حَٰفِظُونَ
          <span className="numberTheme"> (29) </span> إِلَّا عَلَىٰٓ
          أَزۡوَٰجِهِمۡ أَوۡ مَا مَلَكَتۡ أَيۡمَٰنُهُمۡ فَإِنَّهُمۡ غَيۡرُ
          مَلُومِينَ
          <span className="numberTheme"> (30) </span> فَمَنِ ٱبۡتَغَىٰ وَرَآءَ
          ذَٰلِكَ فَأُوْلَٰٓئِكَ هُمُ ٱلۡعَادُونَ
          <span className="numberTheme"> (31) </span> وَٱلَّذِينَ هُمۡ
          لِأَمَٰنَٰتِهِمۡ وَعَهۡدِهِمۡ رَٰعُونَ
          <span className="numberTheme"> (32) </span> وَٱلَّذِينَ هُم
          بِشَهَٰدَٰتِهِمۡ قَآئِمُونَ
          <span className="numberTheme"> (33) </span>
          وَٱلَّذِينَ هُمۡ عَلَىٰ صَلَاتِهِمۡ يُحَافِظُونَ
          <span className="numberTheme"> (34) </span> أُوْلَٰٓئِكَ فِي جَنَّٰتٖ
          مُّكۡرَمُونَ
          <span className="numberTheme"> (35) </span> فَمَالِ ٱلَّذِينَ
          كَفَرُواْ قِبَلَكَ مُهۡطِعِينَ
          <span className="numberTheme"> (36) </span> عَنِ ٱلۡيَمِينِ وَعَنِ
          ٱلشِّمَالِ عِزِينَ
          <span className="numberTheme"> (37) </span>
          أَيَطۡمَعُ كُلُّ ٱمۡرِيٕٖ مِّنۡهُمۡ أَن يُدۡخَلَ جَنَّةَ نَعِيمٖ
          <span className="numberTheme"> (38) </span>
          كَلَّآۖ إِنَّا خَلَقۡنَٰهُم مِّمَّا يَعۡلَمُونَ
          <span className="numberTheme"> (39) </span> فَلَآ أُقۡسِمُ بِرَبِّ
          ٱلۡمَشَٰرِقِ وَٱلۡمَغَٰرِبِ إِنَّا لَقَٰدِرُونَ
          <span className="numberTheme"> (40) </span> عَلَىٰٓ أَن نُّبَدِّلَ
          خَيۡرٗا مِّنۡهُمۡ وَمَا نَحۡنُ بِمَسۡبُوقِينَ
          <span className="numberTheme"> (41) </span>
          فَذَرۡهُمۡ يَخُوضُواْ وَيَلۡعَبُواْ حَتَّىٰ يُلَٰقُواْ يَوۡمَهُمُ
          ٱلَّذِي يُوعَدُونَ
          <span className="numberTheme"> (42) </span> يَوۡمَ يَخۡرُجُونَ مِنَ
          ٱلۡأَجۡدَاثِ سِرَاعٗا كَأَنَّهُمۡ إِلَىٰ نُصُبٖ يُوفِضُونَ
          <span className="numberTheme"> (43) </span> خَٰشِعَةً أَبۡصَٰرُهُمۡ
          تَرۡهَقُهُمۡ ذِلَّةٞۚ ذَٰلِكَ ٱلۡيَوۡمُ ٱلَّذِي كَانُواْ يُوعَدُونَ
          <span className="numberTheme"> (44) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default Seventy;
