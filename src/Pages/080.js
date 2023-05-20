import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const Eighty = () => {
  return (
    <div>
      <Helmet>
        <title>080 - سورة عبس</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة عبس</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          عَبَسَ وَتَوَلَّىٰٓ
          <span className="numberTheme"> (1) </span> أَن جَآءَهُ ٱلۡأَعۡمَىٰ
          <span className="numberTheme"> (2) </span> وَمَا يُدۡرِيكَ لَعَلَّهُۥ
          يَزَّكَّىٰٓ
          <span className="numberTheme"> (3) </span> أَوۡ يَذَّكَّرُ فَتَنفَعَهُ
          ٱلذِّكۡرَىٰٓ
          <span className="numberTheme"> (4) </span> أَمَّا مَنِ ٱسۡتَغۡنَىٰ
          <span className="numberTheme"> (5) </span> فَأَنتَ لَهُۥ تَصَدَّىٰ
          <span className="numberTheme"> (6) </span> وَمَا عَلَيۡكَ أَلَّا
          يَزَّكَّىٰ
          <span className="numberTheme"> (7) </span> وَأَمَّا مَن جَآءَكَ
          يَسۡعَىٰ
          <span className="numberTheme"> (8) </span>
          وَهُوَ يَخۡشَىٰ
          <span className="numberTheme"> (9) </span> فَأَنتَ عَنۡهُ تَلَهَّىٰ
          <span className="numberTheme"> (10) </span> كَلَّآ إِنَّهَا
          تَذۡكِرَةٞ
          <span className="numberTheme"> (11) </span> فَمَن شَآءَ ذَكَرَهُۥ
          <span className="numberTheme"> (12) </span> فِي صُحُفٖ مُّكَرَّمَةٖ
          <span className="numberTheme"> (13) </span> مَّرۡفُوعَةٖ مُّطَهَّرَةِۭ
          <span className="numberTheme"> (14) </span> بِأَيۡدِي سَفَرَةٖ
          <span className="numberTheme"> (15) </span> كِرَامِۭ بَرَرَةٖ
          <span className="numberTheme"> (16) </span> قُتِلَ ٱلۡإِنسَٰنُ مَآ
          أَكۡفَرَهُۥ
          <span className="numberTheme"> (17) </span> مِنۡ أَيِّ شَيۡءٍ
          خَلَقَهُۥ
          <span className="numberTheme"> (18) </span> مِن نُّطۡفَةٍ خَلَقَهُۥ
          فَقَدَّرَهُۥ
          <span className="numberTheme"> (19) </span> ثُمَّ ٱلسَّبِيلَ
          يَسَّرَهُۥ
          <span className="numberTheme"> (20) </span> ثُمَّ أَمَاتَهُۥ
          فَأَقۡبَرَهُۥ
          <span className="numberTheme"> (21) </span> ثُمَّ إِذَا شَآءَ
          أَنشَرَهُۥ
          <span className="numberTheme"> (22) </span> كَلَّا لَمَّا يَقۡضِ مَآ
          أَمَرَهُۥ
          <span className="numberTheme"> (23) </span>
          فَلۡيَنظُرِ ٱلۡإِنسَٰنُ إِلَىٰ طَعَامِهِۦٓ
          <span className="numberTheme"> (24) </span> أَنَّا صَبَبۡنَا ٱلۡمَآءَ
          صَبّٗا
          <span className="numberTheme"> (25) </span> ثُمَّ شَقَقۡنَا ٱلۡأَرۡضَ
          شَقّٗا
          <span className="numberTheme"> (26) </span>
          فَأَنۢبَتۡنَا فِيهَا حَبّٗا
          <span className="numberTheme"> (27) </span> وَعِنَبٗا وَقَضۡبٗا
          <span className="numberTheme"> (28) </span> وَزَيۡتُونٗا وَنَخۡلٗا
          <span className="numberTheme"> (29) </span> وَحَدَآئِقَ غُلۡبٗا
          <span className="numberTheme"> (30) </span> وَفَٰكِهَةٗ وَأَبّٗا
          <span className="numberTheme"> (31) </span>
          مَّتَٰعٗا لَّكُمۡ وَلِأَنۡعَٰمِكُمۡ
          <span className="numberTheme"> (32) </span> فَإِذَا جَآءَتِ
          ٱلصَّآخَّةُ
          <span className="numberTheme"> (33) </span> يَوۡمَ يَفِرُّ ٱلۡمَرۡءُ
          مِنۡ أَخِيهِ
          <span className="numberTheme"> (34) </span> وَأُمِّهِۦ وَأَبِيهِ
          <span className="numberTheme"> (35) </span> وَصَٰحِبَتِهِۦ وَبَنِيهِ
          <span className="numberTheme"> (36) </span> لِكُلِّ ٱمۡرِيٕٖ مِّنۡهُمۡ
          يَوۡمَئِذٖ شَأۡنٞ يُغۡنِيهِ
          <span className="numberTheme"> (37) </span> وُجُوهٞ يَوۡمَئِذٖ
          مُّسۡفِرَةٞ
          <span className="numberTheme"> (38) </span>
          ضَاحِكَةٞ مُّسۡتَبۡشِرَةٞ
          <span className="numberTheme"> (39) </span> وَوُجُوهٞ يَوۡمَئِذٍ
          عَلَيۡهَا غَبَرَةٞ
          <span className="numberTheme"> (40) </span> تَرۡهَقُهَا قَتَرَةٌ
          <span className="numberTheme"> (41) </span> أُوْلَٰٓئِكَ هُمُ
          ٱلۡكَفَرَةُ ٱلۡفَجَرَةُ
          <span className="numberTheme"> (42) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default Eighty;
