import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const EightyFive = () => {
  return (
    <div>
      <Helmet>
        <title>085 - سورة البروج</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة البروج</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلسَّمَآءِ ذَاتِ ٱلۡبُرُوجِ (1) وَٱلۡيَوۡمِ ٱلۡمَوۡعُودِ (2)
          وَشَاهِدٖ وَمَشۡهُودٖ (3) قُتِلَ أَصۡحَٰبُ ٱلۡأُخۡدُودِ (4) ٱلنَّارِ
          ذَاتِ ٱلۡوَقُودِ (5) إِذۡ هُمۡ عَلَيۡهَا قُعُودٞ (6) وَهُمۡ عَلَىٰ مَا
          يَفۡعَلُونَ بِٱلۡمُؤۡمِنِينَ شُهُودٞ (7) وَمَا نَقَمُواْ مِنۡهُمۡ
          إِلَّآ أَن يُؤۡمِنُواْ بِٱللَّهِ ٱلۡعَزِيزِ ٱلۡحَمِيدِ (8) ٱلَّذِي
          لَهُۥ مُلۡكُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۚ وَٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ
          شَهِيدٌ (9) إِنَّ ٱلَّذِينَ فَتَنُواْ ٱلۡمُؤۡمِنِينَ وَٱلۡمُؤۡمِنَٰتِ
          ثُمَّ لَمۡ يَتُوبُواْ فَلَهُمۡ عَذَابُ جَهَنَّمَ وَلَهُمۡ عَذَابُ
          ٱلۡحَرِيقِ (10) إِنَّ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ
          لَهُمۡ جَنَّٰتٞ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُۚ ذَٰلِكَ ٱلۡفَوۡزُ
          ٱلۡكَبِيرُ (11) إِنَّ بَطۡشَ رَبِّكَ لَشَدِيدٌ (12) إِنَّهُۥ هُوَ
          يُبۡدِئُ وَيُعِيدُ (13) وَهُوَ ٱلۡغَفُورُ ٱلۡوَدُودُ (14) ذُو
          ٱلۡعَرۡشِ ٱلۡمَجِيدُ (15) فَعَّالٞ لِّمَا يُرِيدُ (16) هَلۡ أَتَىٰكَ
          حَدِيثُ ٱلۡجُنُودِ (17) فِرۡعَوۡنَ وَثَمُودَ (18) بَلِ ٱلَّذِينَ
          كَفَرُواْ فِي تَكۡذِيبٖ (19) وَٱللَّهُ مِن وَرَآئِهِم مُّحِيطُۢ (20)
          بَلۡ هُوَ قُرۡءَانٞ مَّجِيدٞ (21) فِي لَوۡحٖ مَّحۡفُوظِۭ (22)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default EightyFive;