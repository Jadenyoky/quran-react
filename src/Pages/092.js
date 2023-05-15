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
          وَٱلَّيۡلِ إِذَا يَغۡشَىٰ (1) وَٱلنَّهَارِ إِذَا تَجَلَّىٰ (2) وَمَا
          خَلَقَ ٱلذَّكَرَ وَٱلۡأُنثَىٰٓ (3) إِنَّ سَعۡيَكُمۡ لَشَتَّىٰ (4)
          فَأَمَّا مَنۡ أَعۡطَىٰ وَٱتَّقَىٰ (5) وَصَدَّقَ بِٱلۡحُسۡنَىٰ (6)
          فَسَنُيَسِّرُهُۥ لِلۡيُسۡرَىٰ (7) وَأَمَّا مَنۢ بَخِلَ وَٱسۡتَغۡنَىٰ
          (8) وَكَذَّبَ بِٱلۡحُسۡنَىٰ (9) فَسَنُيَسِّرُهُۥ لِلۡعُسۡرَىٰ (10)
          وَمَا يُغۡنِي عَنۡهُ مَالُهُۥٓ إِذَا تَرَدَّىٰٓ (11) إِنَّ عَلَيۡنَا
          لَلۡهُدَىٰ (12) وَإِنَّ لَنَا لَلۡأٓخِرَةَ وَٱلۡأُولَىٰ (13)
          فَأَنذَرۡتُكُمۡ نَارٗا تَلَظَّىٰ (14) لَا يَصۡلَىٰهَآ إِلَّا
          ٱلۡأَشۡقَى (15) ٱلَّذِي كَذَّبَ وَتَوَلَّىٰ (16) وَسَيُجَنَّبُهَا
          ٱلۡأَتۡقَى (17) ٱلَّذِي يُؤۡتِي مَالَهُۥ يَتَزَكَّىٰ (18) وَمَا
          لِأَحَدٍ عِندَهُۥ مِن نِّعۡمَةٖ تُجۡزَىٰٓ (19) إِلَّا ٱبۡتِغَآءَ
          وَجۡهِ رَبِّهِ ٱلۡأَعۡلَىٰ (20) وَلَسَوۡفَ يَرۡضَىٰ (21)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetyTwo;
