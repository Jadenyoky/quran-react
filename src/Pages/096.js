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
          ٱقۡرَأۡ بِٱسۡمِ رَبِّكَ ٱلَّذِي خَلَقَ (1) خَلَقَ ٱلۡإِنسَٰنَ مِنۡ
          عَلَقٍ (2) ٱقۡرَأۡ وَرَبُّكَ ٱلۡأَكۡرَمُ (3) ٱلَّذِي عَلَّمَ
          بِٱلۡقَلَمِ (4) عَلَّمَ ٱلۡإِنسَٰنَ مَا لَمۡ يَعۡلَمۡ (5) كَلَّآ
          إِنَّ ٱلۡإِنسَٰنَ لَيَطۡغَىٰٓ (6) أَن رَّءَاهُ ٱسۡتَغۡنَىٰٓ (7) إِنَّ
          إِلَىٰ رَبِّكَ ٱلرُّجۡعَىٰٓ (8) أَرَءَيۡتَ ٱلَّذِي يَنۡهَىٰ (9)
          عَبۡدًا إِذَا صَلَّىٰٓ (10) أَرَءَيۡتَ إِن كَانَ عَلَى ٱلۡهُدَىٰٓ (11)
          أَوۡ أَمَرَ بِٱلتَّقۡوَىٰٓ (12) أَرَءَيۡتَ إِن كَذَّبَ وَتَوَلَّىٰٓ
          (13) أَلَمۡ يَعۡلَم بِأَنَّ ٱللَّهَ يَرَىٰ (14) كَلَّا لَئِن لَّمۡ
          يَنتَهِ لَنَسۡفَعَۢا بِٱلنَّاصِيَةِ (15) نَاصِيَةٖ كَٰذِبَةٍ خَاطِئَةٖ
          (16) فَلۡيَدۡعُ نَادِيَهُۥ (17) سَنَدۡعُ ٱلزَّبَانِيَةَ (18) كَلَّا
          لَا تُطِعۡهُ وَٱسۡجُدۡۤ وَٱقۡتَرِب۩ (19)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetySix;