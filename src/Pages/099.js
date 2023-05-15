import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const NinetyNine = () => {
  return (
    <div>
      <Helmet>
        <title>099 - سورة الزلزلة</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الزلزلة</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          إِذَا زُلۡزِلَتِ ٱلۡأَرۡضُ زِلۡزَالَهَا (1) وَأَخۡرَجَتِ ٱلۡأَرۡضُ
          أَثۡقَالَهَا (2) وَقَالَ ٱلۡإِنسَٰنُ مَا لَهَا (3) يَوۡمَئِذٖ
          تُحَدِّثُ أَخۡبَارَهَا (4) بِأَنَّ رَبَّكَ أَوۡحَىٰ لَهَا (5)
          يَوۡمَئِذٖ يَصۡدُرُ ٱلنَّاسُ أَشۡتَاتٗا لِّيُرَوۡاْ أَعۡمَٰلَهُمۡ (6)
          فَمَن يَعۡمَلۡ مِثۡقَالَ ذَرَّةٍ خَيۡرٗا يَرَهُۥ (7) وَمَن يَعۡمَلۡ
          مِثۡقَالَ ذَرَّةٖ شَرّٗا يَرَهُۥ (8)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetyNine;
