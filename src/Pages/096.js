import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const NinetySix = () => {
  return (
    <div>
      <Helmet>
        <title>096 - سورة العلق</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة العلق</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          ٱقۡرَأۡ بِٱسۡمِ رَبِّكَ ٱلَّذِي خَلَقَ
          <span className="numberTheme"> (1) </span> خَلَقَ ٱلۡإِنسَٰنَ مِنۡ
          عَلَقٍ
          <span className="numberTheme"> (2) </span> ٱقۡرَأۡ وَرَبُّكَ
          ٱلۡأَكۡرَمُ
          <span className="numberTheme"> (3) </span> ٱلَّذِي عَلَّمَ بِٱلۡقَلَمِ
          <span className="numberTheme"> (4) </span> عَلَّمَ ٱلۡإِنسَٰنَ مَا
          لَمۡ يَعۡلَمۡ
          <span className="numberTheme"> (5) </span> كَلَّآ إِنَّ ٱلۡإِنسَٰنَ
          لَيَطۡغَىٰٓ
          <span className="numberTheme"> (6) </span> أَن رَّءَاهُ ٱسۡتَغۡنَىٰٓ
          <span className="numberTheme"> (7) </span> إِنَّ إِلَىٰ رَبِّكَ
          ٱلرُّجۡعَىٰٓ
          <span className="numberTheme"> (8) </span> أَرَءَيۡتَ ٱلَّذِي يَنۡهَىٰ
          <span className="numberTheme"> (9) </span>
          عَبۡدًا إِذَا صَلَّىٰٓ
          <span className="numberTheme"> (10) </span> أَرَءَيۡتَ إِن كَانَ عَلَى
          ٱلۡهُدَىٰٓ
          <span className="numberTheme"> (11) </span>
          أَوۡ أَمَرَ بِٱلتَّقۡوَىٰٓ
          <span className="numberTheme"> (12) </span> أَرَءَيۡتَ إِن كَذَّبَ
          وَتَوَلَّىٰٓ
          <span className="numberTheme"> (13) </span> أَلَمۡ يَعۡلَم بِأَنَّ
          ٱللَّهَ يَرَىٰ
          <span className="numberTheme"> (14) </span> كَلَّا لَئِن لَّمۡ يَنتَهِ
          لَنَسۡفَعَۢا بِٱلنَّاصِيَةِ
          <span className="numberTheme"> (15) </span> نَاصِيَةٖ كَٰذِبَةٍ
          خَاطِئَةٖ
          <span className="numberTheme"> (16) </span> فَلۡيَدۡعُ نَادِيَهُۥ
          <span className="numberTheme"> (17) </span> سَنَدۡعُ ٱلزَّبَانِيَةَ
          <span className="numberTheme"> (18) </span> كَلَّا لَا تُطِعۡهُ
          وَٱسۡجُدۡۤ وَٱقۡتَرِب۩
          <span className="numberTheme"> (19) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetySix;
