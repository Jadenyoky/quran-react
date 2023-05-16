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
          سَبِّحِ ٱسۡمَ رَبِّكَ ٱلۡأَعۡلَى (1) ٱلَّذِي خَلَقَ فَسَوَّىٰ (2)
          وَٱلَّذِي قَدَّرَ فَهَدَىٰ (3) وَٱلَّذِيٓ أَخۡرَجَ ٱلۡمَرۡعَىٰ (4)
          فَجَعَلَهُۥ غُثَآءً أَحۡوَىٰ (5) سَنُقۡرِئُكَ فَلَا تَنسَىٰٓ (6)
          إِلَّا مَا شَآءَ ٱللَّهُۚ إِنَّهُۥ يَعۡلَمُ ٱلۡجَهۡرَ وَمَا يَخۡفَىٰ
          (7) وَنُيَسِّرُكَ لِلۡيُسۡرَىٰ (8) فَذَكِّرۡ إِن نَّفَعَتِ ٱلذِّكۡرَىٰ
          (9) سَيَذَّكَّرُ مَن يَخۡشَىٰ (10) وَيَتَجَنَّبُهَا ٱلۡأَشۡقَى (11)
          ٱلَّذِي يَصۡلَى ٱلنَّارَ ٱلۡكُبۡرَىٰ (12) ثُمَّ لَا يَمُوتُ فِيهَا
          وَلَا يَحۡيَىٰ (13) قَدۡ أَفۡلَحَ مَن تَزَكَّىٰ (14) وَذَكَرَ ٱسۡمَ
          رَبِّهِۦ فَصَلَّىٰ (15) بَلۡ تُؤۡثِرُونَ ٱلۡحَيَوٰةَ ٱلدُّنۡيَا (16)
          وَٱلۡأٓخِرَةُ خَيۡرٞ وَأَبۡقَىٰٓ (17) إِنَّ هَٰذَا لَفِي ٱلصُّحُفِ
          ٱلۡأُولَىٰ (18) صُحُفِ إِبۡرَٰهِيمَ وَمُوسَىٰ (19)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default EightySeven;