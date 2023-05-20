import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const NinetyTwo = () => {
  return (
    <div>
      <Helmet>
        <title>092 - سورة الليل</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الليل</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلَّيۡلِ إِذَا يَغۡشَىٰ
          <span className="numberTheme"> (1) </span> وَٱلنَّهَارِ إِذَا
          تَجَلَّىٰ
          <span className="numberTheme"> (2) </span> وَمَا خَلَقَ ٱلذَّكَرَ
          وَٱلۡأُنثَىٰٓ
          <span className="numberTheme"> (3) </span> إِنَّ سَعۡيَكُمۡ لَشَتَّىٰ
          <span className="numberTheme"> (4) </span>
          فَأَمَّا مَنۡ أَعۡطَىٰ وَٱتَّقَىٰ
          <span className="numberTheme"> (5) </span> وَصَدَّقَ بِٱلۡحُسۡنَىٰ
          <span className="numberTheme"> (6) </span>
          فَسَنُيَسِّرُهُۥ لِلۡيُسۡرَىٰ
          <span className="numberTheme"> (7) </span> وَأَمَّا مَنۢ بَخِلَ
          وَٱسۡتَغۡنَىٰ
          <span className="numberTheme"> (8) </span> وَكَذَّبَ بِٱلۡحُسۡنَىٰ
          <span className="numberTheme"> (9) </span> فَسَنُيَسِّرُهُۥ
          لِلۡعُسۡرَىٰ
          <span className="numberTheme"> (10) </span>
          وَمَا يُغۡنِي عَنۡهُ مَالُهُۥٓ إِذَا تَرَدَّىٰٓ
          <span className="numberTheme"> (11) </span> إِنَّ عَلَيۡنَا لَلۡهُدَىٰ
          <span className="numberTheme"> (12) </span> وَإِنَّ لَنَا لَلۡأٓخِرَةَ
          وَٱلۡأُولَىٰ
          <span className="numberTheme"> (13) </span>
          فَأَنذَرۡتُكُمۡ نَارٗا تَلَظَّىٰ
          <span className="numberTheme"> (14) </span> لَا يَصۡلَىٰهَآ إِلَّا
          ٱلۡأَشۡقَى
          <span className="numberTheme"> (15) </span> ٱلَّذِي كَذَّبَ
          وَتَوَلَّىٰ
          <span className="numberTheme"> (16) </span> وَسَيُجَنَّبُهَا
          ٱلۡأَتۡقَى
          <span className="numberTheme"> (17) </span> ٱلَّذِي يُؤۡتِي مَالَهُۥ
          يَتَزَكَّىٰ
          <span className="numberTheme"> (18) </span> وَمَا لِأَحَدٍ عِندَهُۥ
          مِن نِّعۡمَةٖ تُجۡزَىٰٓ
          <span className="numberTheme"> (19) </span> إِلَّا ٱبۡتِغَآءَ وَجۡهِ
          رَبِّهِ ٱلۡأَعۡلَىٰ
          <span className="numberTheme"> (20) </span> وَلَسَوۡفَ يَرۡضَىٰ
          <span className="numberTheme"> (21) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetyTwo;
