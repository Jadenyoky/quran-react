import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const SeventyTwo = () => {
  return (
    <div>
      <Helmet>
        <title>072 - سورة الجن</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الجن</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          قُلۡ أُوحِيَ إِلَيَّ أَنَّهُ ٱسۡتَمَعَ نَفَرٞ مِّنَ ٱلۡجِنِّ
          فَقَالُوٓاْ إِنَّا سَمِعۡنَا قُرۡءَانًا عَجَبٗا
          <span className="numberTheme"> (1) </span> يَهۡدِيٓ إِلَى ٱلرُّشۡدِ
          فَـَٔامَنَّا بِهِۦۖ وَلَن نُّشۡرِكَ بِرَبِّنَآ أَحَدٗا
          <span className="numberTheme"> (2) </span>
          وَأَنَّهُۥ تَعَٰلَىٰ جَدُّ رَبِّنَا مَا ٱتَّخَذَ صَٰحِبَةٗ وَلَا
          وَلَدٗا
          <span className="numberTheme"> (3) </span> وَأَنَّهُۥ كَانَ يَقُولُ
          سَفِيهُنَا عَلَى ٱللَّهِ شَطَطٗا
          <span className="numberTheme"> (4) </span> وَأَنَّا ظَنَنَّآ أَن لَّن
          تَقُولَ ٱلۡإِنسُ وَٱلۡجِنُّ عَلَى ٱللَّهِ كَذِبٗا
          <span className="numberTheme"> (5) </span> وَأَنَّهُۥ كَانَ رِجَالٞ
          مِّنَ ٱلۡإِنسِ يَعُوذُونَ بِرِجَالٖ مِّنَ ٱلۡجِنِّ فَزَادُوهُمۡ
          رَهَقٗا
          <span className="numberTheme"> (6) </span> وَأَنَّهُمۡ ظَنُّواْ كَمَا
          ظَنَنتُمۡ أَن لَّن يَبۡعَثَ ٱللَّهُ أَحَدٗا
          <span className="numberTheme"> (7) </span> وَأَنَّا لَمَسۡنَا
          ٱلسَّمَآءَ فَوَجَدۡنَٰهَا مُلِئَتۡ حَرَسٗا شَدِيدٗا وَشُهُبٗا
          <span className="numberTheme"> (8) </span> وَأَنَّا كُنَّا نَقۡعُدُ
          مِنۡهَا مَقَٰعِدَ لِلسَّمۡعِۖ فَمَن يَسۡتَمِعِ ٱلۡأٓنَ يَجِدۡ لَهُۥ
          شِهَابٗا رَّصَدٗا
          <span className="numberTheme"> (9) </span> وَأَنَّا لَا نَدۡرِيٓ
          أَشَرٌّ أُرِيدَ بِمَن فِي ٱلۡأَرۡضِ أَمۡ أَرَادَ بِهِمۡ رَبُّهُمۡ
          رَشَدٗا
          <span className="numberTheme"> (10) </span> وَأَنَّا مِنَّا
          ٱلصَّٰلِحُونَ وَمِنَّا دُونَ ذَٰلِكَۖ كُنَّا طَرَآئِقَ قِدَدٗا
          <span className="numberTheme"> (11) </span> وَأَنَّا ظَنَنَّآ أَن
          لَّن نُّعۡجِزَ ٱللَّهَ فِي ٱلۡأَرۡضِ وَلَن نُّعۡجِزَهُۥ هَرَبٗا
          <span className="numberTheme"> (12) </span>
          وَأَنَّا لَمَّا سَمِعۡنَا ٱلۡهُدَىٰٓ ءَامَنَّا بِهِۦۖ فَمَن يُؤۡمِنۢ
          بِرَبِّهِۦ فَلَا يَخَافُ بَخۡسٗا وَلَا رَهَقٗا
          <span className="numberTheme"> (13) </span> وَأَنَّا مِنَّا
          ٱلۡمُسۡلِمُونَ وَمِنَّا ٱلۡقَٰسِطُونَۖ فَمَنۡ أَسۡلَمَ فَأُوْلَٰٓئِكَ
          تَحَرَّوۡاْ رَشَدٗا
          <span className="numberTheme"> (14) </span> وَأَمَّا ٱلۡقَٰسِطُونَ
          فَكَانُواْ لِجَهَنَّمَ حَطَبٗا
          <span className="numberTheme"> (15) </span> وَأَلَّوِ ٱسۡتَقَٰمُواْ
          عَلَى ٱلطَّرِيقَةِ لَأَسۡقَيۡنَٰهُم مَّآءً غَدَقٗا
          <span className="numberTheme"> (16) </span> لِّنَفۡتِنَهُمۡ فِيهِۚ
          وَمَن يُعۡرِضۡ عَن ذِكۡرِ رَبِّهِۦ يَسۡلُكۡهُ عَذَابٗا صَعَدٗا
          <span className="numberTheme"> (17) </span> وَأَنَّ ٱلۡمَسَٰجِدَ
          لِلَّهِ فَلَا تَدۡعُواْ مَعَ ٱللَّهِ أَحَدٗا
          <span className="numberTheme"> (18) </span>
          وَأَنَّهُۥ لَمَّا قَامَ عَبۡدُ ٱللَّهِ يَدۡعُوهُ كَادُواْ يَكُونُونَ
          عَلَيۡهِ لِبَدٗا
          <span className="numberTheme"> (19) </span> قُلۡ إِنَّمَآ أَدۡعُواْ
          رَبِّي وَلَآ أُشۡرِكُ بِهِۦٓ أَحَدٗا
          <span className="numberTheme"> (20) </span> قُلۡ إِنِّي لَآ أَمۡلِكُ
          لَكُمۡ ضَرّٗا وَلَا رَشَدٗا
          <span className="numberTheme"> (21) </span> قُلۡ إِنِّي لَن يُجِيرَنِي
          مِنَ ٱللَّهِ أَحَدٞ وَلَنۡ أَجِدَ مِن دُونِهِۦ مُلۡتَحَدًا
          <span className="numberTheme"> (22) </span> إِلَّا بَلَٰغٗا مِّنَ
          ٱللَّهِ وَرِسَٰلَٰتِهِۦۚ وَمَن يَعۡصِ ٱللَّهَ وَرَسُولَهُۥ فَإِنَّ
          لَهُۥ نَارَ جَهَنَّمَ خَٰلِدِينَ فِيهَآ أَبَدًا
          <span className="numberTheme"> (23) </span> حَتَّىٰٓ إِذَا رَأَوۡاْ
          مَا يُوعَدُونَ فَسَيَعۡلَمُونَ مَنۡ أَضۡعَفُ نَاصِرٗا وَأَقَلُّ
          عَدَدٗا
          <span className="numberTheme"> (24) </span> قُلۡ إِنۡ أَدۡرِيٓ
          أَقَرِيبٞ مَّا تُوعَدُونَ أَمۡ يَجۡعَلُ لَهُۥ رَبِّيٓ أَمَدًا
          <span className="numberTheme"> (25) </span> عَٰلِمُ ٱلۡغَيۡبِ فَلَا
          يُظۡهِرُ عَلَىٰ غَيۡبِهِۦٓ أَحَدًا
          <span className="numberTheme"> (26) </span> إِلَّا مَنِ ٱرۡتَضَىٰ مِن
          رَّسُولٖ فَإِنَّهُۥ يَسۡلُكُ مِنۢ بَيۡنِ يَدَيۡهِ وَمِنۡ خَلۡفِهِۦ
          رَصَدٗا
          <span className="numberTheme"> (27) </span>
          لِّيَعۡلَمَ أَن قَدۡ أَبۡلَغُواْ رِسَٰلَٰتِ رَبِّهِمۡ وَأَحَاطَ بِمَا
          لَدَيۡهِمۡ وَأَحۡصَىٰ كُلَّ شَيۡءٍ عَدَدَۢا
          <span className="numberTheme"> (28) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default SeventyTwo;
