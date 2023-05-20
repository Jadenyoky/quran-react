import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const NinetyEight = () => {
  return (
    <div>
      <Helmet>
        <title>098 - سورة البينة</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة البينة</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          لَمۡ يَكُنِ ٱلَّذِينَ كَفَرُواْ مِنۡ أَهۡلِ ٱلۡكِتَٰبِ
          وَٱلۡمُشۡرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأۡتِيَهُمُ ٱلۡبَيِّنَةُ
          <span className="numberTheme"> (1) </span>
          رَسُولٞ مِّنَ ٱللَّهِ يَتۡلُواْ صُحُفٗا مُّطَهَّرَةٗ
          <span className="numberTheme"> (2) </span> فِيهَا كُتُبٞ قَيِّمَةٞ
          <span className="numberTheme"> (3) </span> وَمَا تَفَرَّقَ ٱلَّذِينَ
          أُوتُواْ ٱلۡكِتَٰبَ إِلَّا مِنۢ بَعۡدِ مَا جَآءَتۡهُمُ ٱلۡبَيِّنَةُ
          <span className="numberTheme"> (4) </span> وَمَآ أُمِرُوٓاْ إِلَّا
          لِيَعۡبُدُواْ ٱللَّهَ مُخۡلِصِينَ لَهُ ٱلدِّينَ حُنَفَآءَ
          وَيُقِيمُواْ ٱلصَّلَوٰةَ وَيُؤۡتُواْ ٱلزَّكَوٰةَۚ وَذَٰلِكَ دِينُ
          ٱلۡقَيِّمَةِ
          <span className="numberTheme"> (5) </span> إِنَّ ٱلَّذِينَ كَفَرُواْ
          مِنۡ أَهۡلِ ٱلۡكِتَٰبِ وَٱلۡمُشۡرِكِينَ فِي نَارِ جَهَنَّمَ خَٰلِدِينَ
          فِيهَآۚ أُوْلَٰٓئِكَ هُمۡ شَرُّ ٱلۡبَرِيَّةِ
          <span className="numberTheme"> (6) </span> إِنَّ ٱلَّذِينَ ءَامَنُواْ
          وَعَمِلُواْ ٱلصَّٰلِحَٰتِ أُوْلَٰٓئِكَ هُمۡ خَيۡرُ ٱلۡبَرِيَّةِ
          <span className="numberTheme"> (7) </span> جَزَآؤُهُمۡ عِندَ
          رَبِّهِمۡ جَنَّٰتُ عَدۡنٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ
          خَٰلِدِينَ فِيهَآ أَبَدٗاۖ رَّضِيَ ٱللَّهُ عَنۡهُمۡ وَرَضُواْ عَنۡهُۚ
          ذَٰلِكَ لِمَنۡ خَشِيَ رَبَّهُۥ
          <span className="numberTheme"> (8) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetyEight;
