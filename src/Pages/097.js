import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const NinetySeven = () => {
  return (
    <div>
      <Helmet>
        <title>097 - سورة القدر</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة القدر</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          إِنَّآ أَنزَلۡنَٰهُ فِي لَيۡلَةِ ٱلۡقَدۡرِ
          <span className="numberTheme"> (1) </span> وَمَآ أَدۡرَىٰكَ مَا
          لَيۡلَةُ ٱلۡقَدۡرِ
          <span className="numberTheme"> (2) </span> لَيۡلَةُ ٱلۡقَدۡرِ خَيۡرٞ
          مِّنۡ أَلۡفِ شَهۡرٖ
          <span className="numberTheme"> (3) </span> تَنَزَّلُ ٱلۡمَلَٰٓئِكَةُ
          وَٱلرُّوحُ فِيهَا بِإِذۡنِ رَبِّهِم مِّن كُلِّ أَمۡرٖ
          <span className="numberTheme"> (4) </span> سَلَٰمٌ هِيَ حَتَّىٰ
          مَطۡلَعِ ٱلۡفَجۡرِ
          <span className="numberTheme"> (5) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default NinetySeven;
