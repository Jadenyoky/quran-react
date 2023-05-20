import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const EightyOne = () => {
  return (
    <div>
      <Helmet>
        <title>081 - سورة التكوير</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة التكوير</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          إِذَا ٱلشَّمۡسُ كُوِّرَتۡ
          <span className="numberTheme"> (1) </span> وَإِذَا ٱلنُّجُومُ
          ٱنكَدَرَتۡ
          <span className="numberTheme"> (2) </span>
          وَإِذَا ٱلۡجِبَالُ سُيِّرَتۡ
          <span className="numberTheme"> (3) </span> وَإِذَا ٱلۡعِشَارُ
          عُطِّلَتۡ
          <span className="numberTheme"> (4) </span>
          وَإِذَا ٱلۡوُحُوشُ حُشِرَتۡ
          <span className="numberTheme"> (5) </span> وَإِذَا ٱلۡبِحَارُ
          سُجِّرَتۡ
          <span className="numberTheme"> (6) </span>
          وَإِذَا ٱلنُّفُوسُ زُوِّجَتۡ
          <span className="numberTheme"> (7) </span> وَإِذَا ٱلۡمَوۡءُۥدَةُ
          سُئِلَتۡ
          <span className="numberTheme"> (8) </span>
          بِأَيِّ ذَنۢبٖ قُتِلَتۡ
          <span className="numberTheme"> (9) </span> وَإِذَا ٱلصُّحُفُ نُشِرَتۡ
          <span className="numberTheme"> (10) </span> وَإِذَا ٱلسَّمَآءُ
          كُشِطَتۡ
          <span className="numberTheme"> (11) </span> وَإِذَا ٱلۡجَحِيمُ
          سُعِّرَتۡ
          <span className="numberTheme"> (12) </span> وَإِذَا ٱلۡجَنَّةُ
          أُزۡلِفَتۡ
          <span className="numberTheme"> (13) </span> عَلِمَتۡ نَفۡسٞ مَّآ
          أَحۡضَرَتۡ
          <span className="numberTheme"> (14) </span>
          فَلَآ أُقۡسِمُ بِٱلۡخُنَّسِ
          <span className="numberTheme"> (15) </span> ٱلۡجَوَارِ ٱلۡكُنَّسِ
          <span className="numberTheme"> (16) </span>
          وَٱلَّيۡلِ إِذَا عَسۡعَسَ
          <span className="numberTheme"> (17) </span> وَٱلصُّبۡحِ إِذَا
          تَنَفَّسَ
          <span className="numberTheme"> (18) </span>
          إِنَّهُۥ لَقَوۡلُ رَسُولٖ كَرِيمٖ
          <span className="numberTheme"> (19) </span> ذِي قُوَّةٍ عِندَ ذِي
          ٱلۡعَرۡشِ مَكِينٖ
          <span className="numberTheme"> (20) </span> مُّطَاعٖ ثَمَّ أَمِينٖ
          <span className="numberTheme"> (21) </span> وَمَا صَاحِبُكُم
          بِمَجۡنُونٖ
          <span className="numberTheme"> (22) </span> وَلَقَدۡ رَءَاهُ
          بِٱلۡأُفُقِ ٱلۡمُبِينِ
          <span className="numberTheme"> (23) </span> وَمَا هُوَ عَلَى ٱلۡغَيۡبِ
          بِضَنِينٖ
          <span className="numberTheme"> (24) </span> وَمَا هُوَ بِقَوۡلِ
          شَيۡطَٰنٖ رَّجِيمٖ
          <span className="numberTheme"> (25) </span>
          فَأَيۡنَ تَذۡهَبُونَ
          <span className="numberTheme"> (26) </span> إِنۡ هُوَ إِلَّا ذِكۡرٞ
          لِّلۡعَٰلَمِينَ
          <span className="numberTheme"> (27) </span>
          لِمَن شَآءَ مِنكُمۡ أَن يَسۡتَقِيمَ
          <span className="numberTheme"> (28) </span> وَمَا تَشَآءُونَ إِلَّآ
          أَن يَشَآءَ ٱللَّهُ رَبُّ ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (29) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default EightyOne;
