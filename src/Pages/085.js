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
          وَٱلسَّمَآءِ ذَاتِ ٱلۡبُرُوجِ
          <span className="numberTheme"> (1) </span> وَٱلۡيَوۡمِ ٱلۡمَوۡعُودِ
          <span className="numberTheme"> (2) </span>
          وَشَاهِدٖ وَمَشۡهُودٖ
          <span className="numberTheme"> (3) </span> قُتِلَ أَصۡحَٰبُ
          ٱلۡأُخۡدُودِ
          <span className="numberTheme"> (4) </span> ٱلنَّارِ ذَاتِ ٱلۡوَقُودِ
          <span className="numberTheme"> (5) </span> إِذۡ هُمۡ عَلَيۡهَا قُعُودٞ
          <span className="numberTheme"> (6) </span> وَهُمۡ عَلَىٰ مَا
          يَفۡعَلُونَ بِٱلۡمُؤۡمِنِينَ شُهُودٞ
          <span className="numberTheme"> (7) </span> وَمَا نَقَمُواْ مِنۡهُمۡ
          إِلَّآ أَن يُؤۡمِنُواْ بِٱللَّهِ ٱلۡعَزِيزِ ٱلۡحَمِيدِ
          <span className="numberTheme"> (8) </span> ٱلَّذِي لَهُۥ مُلۡكُ
          ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۚ وَٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ شَهِيدٌ
          <span className="numberTheme"> (9) </span> إِنَّ ٱلَّذِينَ فَتَنُواْ
          ٱلۡمُؤۡمِنِينَ وَٱلۡمُؤۡمِنَٰتِ ثُمَّ لَمۡ يَتُوبُواْ فَلَهُمۡ عَذَابُ
          جَهَنَّمَ وَلَهُمۡ عَذَابُ ٱلۡحَرِيقِ
          <span className="numberTheme"> (10) </span> إِنَّ ٱلَّذِينَ ءَامَنُواْ
          وَعَمِلُواْ ٱلصَّٰلِحَٰتِ لَهُمۡ جَنَّٰتٞ تَجۡرِي مِن تَحۡتِهَا
          ٱلۡأَنۡهَٰرُۚ ذَٰلِكَ ٱلۡفَوۡزُ ٱلۡكَبِيرُ
          <span className="numberTheme"> (11) </span> إِنَّ بَطۡشَ رَبِّكَ
          لَشَدِيدٌ
          <span className="numberTheme"> (12) </span> إِنَّهُۥ هُوَ يُبۡدِئُ
          وَيُعِيدُ
          <span className="numberTheme"> (13) </span> وَهُوَ ٱلۡغَفُورُ
          ٱلۡوَدُودُ
          <span className="numberTheme"> (14) </span> ذُو ٱلۡعَرۡشِ ٱلۡمَجِيدُ
          <span className="numberTheme"> (15) </span> فَعَّالٞ لِّمَا يُرِيدُ
          <span className="numberTheme"> (16) </span> هَلۡ أَتَىٰكَ حَدِيثُ
          ٱلۡجُنُودِ
          <span className="numberTheme"> (17) </span> فِرۡعَوۡنَ وَثَمُودَ
          <span className="numberTheme"> (18) </span> بَلِ ٱلَّذِينَ كَفَرُواْ
          فِي تَكۡذِيبٖ
          <span className="numberTheme"> (19) </span> وَٱللَّهُ مِن وَرَآئِهِم
          مُّحِيطُۢ
          <span className="numberTheme"> (20) </span>
          بَلۡ هُوَ قُرۡءَانٞ مَّجِيدٞ
          <span className="numberTheme"> (21) </span> فِي لَوۡحٖ مَّحۡفُوظِۭ
          <span className="numberTheme"> (22) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default EightyFive;
