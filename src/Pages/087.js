import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const EightySeven = () => {
  return (
    <div>
      <Helmet>
        <title>087 - سورة الأعلي</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الأعلي</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          سَبِّحِ ٱسۡمَ رَبِّكَ ٱلۡأَعۡلَى
          <span className="numberTheme"> (1) </span> ٱلَّذِي خَلَقَ فَسَوَّىٰ
          <span className="numberTheme"> (2) </span>
          وَٱلَّذِي قَدَّرَ فَهَدَىٰ
          <span className="numberTheme"> (3) </span> وَٱلَّذِيٓ أَخۡرَجَ
          ٱلۡمَرۡعَىٰ
          <span className="numberTheme"> (4) </span>
          فَجَعَلَهُۥ غُثَآءً أَحۡوَىٰ
          <span className="numberTheme"> (5) </span> سَنُقۡرِئُكَ فَلَا تَنسَىٰٓ
          <span className="numberTheme"> (6) </span>
          إِلَّا مَا شَآءَ ٱللَّهُۚ إِنَّهُۥ يَعۡلَمُ ٱلۡجَهۡرَ وَمَا يَخۡفَىٰ
          <span className="numberTheme"> (7) </span> وَنُيَسِّرُكَ لِلۡيُسۡرَىٰ
          <span className="numberTheme"> (8) </span> فَذَكِّرۡ إِن نَّفَعَتِ
          ٱلذِّكۡرَىٰ
          <span className="numberTheme"> (9) </span> سَيَذَّكَّرُ مَن يَخۡشَىٰ
          <span className="numberTheme"> (10) </span> وَيَتَجَنَّبُهَا
          ٱلۡأَشۡقَى
          <span className="numberTheme"> (11) </span>
          ٱلَّذِي يَصۡلَى ٱلنَّارَ ٱلۡكُبۡرَىٰ
          <span className="numberTheme"> (12) </span> ثُمَّ لَا يَمُوتُ فِيهَا
          وَلَا يَحۡيَىٰ
          <span className="numberTheme"> (13) </span> قَدۡ أَفۡلَحَ مَن
          تَزَكَّىٰ
          <span className="numberTheme"> (14) </span> وَذَكَرَ ٱسۡمَ رَبِّهِۦ
          فَصَلَّىٰ
          <span className="numberTheme"> (15) </span> بَلۡ تُؤۡثِرُونَ
          ٱلۡحَيَوٰةَ ٱلدُّنۡيَا
          <span className="numberTheme"> (16) </span>
          وَٱلۡأٓخِرَةُ خَيۡرٞ وَأَبۡقَىٰٓ
          <span className="numberTheme"> (17) </span> إِنَّ هَٰذَا لَفِي
          ٱلصُّحُفِ ٱلۡأُولَىٰ
          <span className="numberTheme"> (18) </span> صُحُفِ إِبۡرَٰهِيمَ
          وَمُوسَىٰ
          <span className="numberTheme"> (19) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default EightySeven;
