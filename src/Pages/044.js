import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const FourtyFour = () => {
  return (
    <div>
      <Helmet>
        <title>044 - سورة الدخان</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الدخان</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          حمٓ
          <span className="numberTheme"> (1) </span> وَٱلۡكِتَٰبِ ٱلۡمُبِينِ
          <span className="numberTheme"> (2) </span> إِنَّآ أَنزَلۡنَٰهُ فِي
          لَيۡلَةٖ مُّبَٰرَكَةٍۚ إِنَّا كُنَّا مُنذِرِينَ
          <span className="numberTheme"> (3) </span> فِيهَا يُفۡرَقُ كُلُّ
          أَمۡرٍ حَكِيمٍ
          <span className="numberTheme"> (4) </span> أَمۡرٗا مِّنۡ عِندِنَآۚ
          إِنَّا كُنَّا مُرۡسِلِينَ
          <span className="numberTheme"> (5) </span> رَحۡمَةٗ مِّن رَّبِّكَۚ
          إِنَّهُۥ هُوَ ٱلسَّمِيعُ ٱلۡعَلِيمُ
          <span className="numberTheme"> (6) </span>
          رَبِّ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَمَا بَيۡنَهُمَآۖ إِن كُنتُم
          مُّوقِنِينَ
          <span className="numberTheme"> (7) </span> لَآ إِلَٰهَ إِلَّا هُوَ
          يُحۡيِۦ وَيُمِيتُۖ رَبُّكُمۡ وَرَبُّ ءَابَآئِكُمُ ٱلۡأَوَّلِينَ
          <span className="numberTheme"> (8) </span> بَلۡ هُمۡ فِي شَكّٖ
          يَلۡعَبُونَ
          <span className="numberTheme"> (9) </span> فَٱرۡتَقِبۡ يَوۡمَ تَأۡتِي
          ٱلسَّمَآءُ بِدُخَانٖ مُّبِينٖ
          <span className="numberTheme"> (10) </span> يَغۡشَى ٱلنَّاسَۖ هَٰذَا
          عَذَابٌ أَلِيمٞ
          <span className="numberTheme"> (11) </span> رَّبَّنَا ٱكۡشِفۡ عَنَّا
          ٱلۡعَذَابَ إِنَّا مُؤۡمِنُونَ
          <span className="numberTheme"> (12) </span> أَنَّىٰ لَهُمُ ٱلذِّكۡرَىٰ
          وَقَدۡ جَآءَهُمۡ رَسُولٞ مُّبِينٞ
          <span className="numberTheme"> (13) </span> ثُمَّ تَوَلَّوۡاْ عَنۡهُ
          وَقَالُواْ مُعَلَّمٞ مَّجۡنُونٌ
          <span className="numberTheme"> (14) </span> إِنَّا كَاشِفُواْ
          ٱلۡعَذَابِ قَلِيلًاۚ إِنَّكُمۡ عَآئِدُونَ
          <span className="numberTheme"> (15) </span> يَوۡمَ نَبۡطِشُ
          ٱلۡبَطۡشَةَ ٱلۡكُبۡرَىٰٓ إِنَّا مُنتَقِمُونَ
          <span className="numberTheme"> (16) </span>
          <span className="partTheme"> ۞ </span>وَلَقَدۡ فَتَنَّا قَبۡلَهُمۡ
          قَوۡمَ فِرۡعَوۡنَ وَجَآءَهُمۡ رَسُولٞ كَرِيمٌ
          <span className="numberTheme"> (17) </span> أَنۡ أَدُّوٓاْ إِلَيَّ
          عِبَادَ ٱللَّهِۖ إِنِّي لَكُمۡ رَسُولٌ أَمِينٞ
          <span className="numberTheme"> (18) </span>
          وَأَن لَّا تَعۡلُواْ عَلَى ٱللَّهِۖ إِنِّيٓ ءَاتِيكُم بِسُلۡطَٰنٖ
          مُّبِينٖ
          <span className="numberTheme"> (19) </span> وَإِنِّي عُذۡتُ بِرَبِّي
          وَرَبِّكُمۡ أَن تَرۡجُمُونِ
          <span className="numberTheme"> (20) </span> وَإِن لَّمۡ تُؤۡمِنُواْ
          لِي فَٱعۡتَزِلُونِ
          <span className="numberTheme"> (21) </span> فَدَعَا رَبَّهُۥٓ أَنَّ
          هَٰٓؤُلَآءِ قَوۡمٞ مُّجۡرِمُونَ
          <span className="numberTheme"> (22) </span> فَأَسۡرِ بِعِبَادِي
          لَيۡلًا إِنَّكُم مُّتَّبَعُونَ
          <span className="numberTheme"> (23) </span> وَٱتۡرُكِ ٱلۡبَحۡرَ
          رَهۡوًاۖ إِنَّهُمۡ جُندٞ مُّغۡرَقُونَ
          <span className="numberTheme"> (24) </span> كَمۡ تَرَكُواْ مِن
          جَنَّٰتٖ وَعُيُونٖ
          <span className="numberTheme"> (25) </span> وَزُرُوعٖ وَمَقَامٖ
          كَرِيمٖ
          <span className="numberTheme"> (26) </span> وَنَعۡمَةٖ كَانُواْ فِيهَا
          فَٰكِهِينَ
          <span className="numberTheme"> (27) </span> كَذَٰلِكَۖ
          وَأَوۡرَثۡنَٰهَا قَوۡمًا ءَاخَرِينَ
          <span className="numberTheme"> (28) </span> فَمَا بَكَتۡ عَلَيۡهِمُ
          ٱلسَّمَآءُ وَٱلۡأَرۡضُ وَمَا كَانُواْ مُنظَرِينَ
          <span className="numberTheme"> (29) </span> وَلَقَدۡ نَجَّيۡنَا بَنِيٓ
          إِسۡرَٰٓءِيلَ مِنَ ٱلۡعَذَابِ ٱلۡمُهِينِ
          <span className="numberTheme"> (30) </span> مِن فِرۡعَوۡنَۚ إِنَّهُۥ
          كَانَ عَالِيٗا مِّنَ ٱلۡمُسۡرِفِينَ
          <span className="numberTheme"> (31) </span> وَلَقَدِ ٱخۡتَرۡنَٰهُمۡ
          عَلَىٰ عِلۡمٍ عَلَى ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (32) </span> وَءَاتَيۡنَٰهُم مِّنَ
          ٱلۡأٓيَٰتِ مَا فِيهِ بَلَٰٓؤٞاْ مُّبِينٌ
          <span className="numberTheme"> (33) </span> إِنَّ هَٰٓؤُلَآءِ
          لَيَقُولُونَ
          <span className="numberTheme"> (34) </span> إِنۡ هِيَ إِلَّا
          مَوۡتَتُنَا ٱلۡأُولَىٰ وَمَا نَحۡنُ بِمُنشَرِينَ
          <span className="numberTheme"> (35) </span>
          فَأۡتُواْ بِـَٔابَآئِنَآ إِن كُنتُمۡ صَٰدِقِينَ
          <span className="numberTheme"> (36) </span> أَهُمۡ خَيۡرٌ أَمۡ قَوۡمُ
          تُبَّعٖ وَٱلَّذِينَ مِن قَبۡلِهِمۡ أَهۡلَكۡنَٰهُمۡۚ إِنَّهُمۡ كَانُواْ
          مُجۡرِمِينَ
          <span className="numberTheme"> (37) </span> وَمَا خَلَقۡنَا
          ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ وَمَا بَيۡنَهُمَا لَٰعِبِينَ
          <span className="numberTheme"> (38) </span> مَا خَلَقۡنَٰهُمَآ إِلَّا
          بِٱلۡحَقِّ وَلَٰكِنَّ أَكۡثَرَهُمۡ لَا يَعۡلَمُونَ
          <span className="numberTheme"> (39) </span> إِنَّ يَوۡمَ ٱلۡفَصۡلِ
          مِيقَٰتُهُمۡ أَجۡمَعِينَ
          <span className="numberTheme"> (40) </span> يَوۡمَ لَا يُغۡنِي مَوۡلًى
          عَن مَّوۡلٗى شَيۡـٔٗا وَلَا هُمۡ يُنصَرُونَ
          <span className="numberTheme"> (41) </span> إِلَّا مَن رَّحِمَ
          ٱللَّهُۚ إِنَّهُۥ هُوَ ٱلۡعَزِيزُ ٱلرَّحِيمُ
          <span className="numberTheme"> (42) </span> إِنَّ شَجَرَتَ ٱلزَّقُّومِ
          <span className="numberTheme"> (43) </span> طَعَامُ ٱلۡأَثِيمِ
          <span className="numberTheme"> (44) </span> كَٱلۡمُهۡلِ يَغۡلِي فِي
          ٱلۡبُطُونِ
          <span className="numberTheme"> (45) </span> كَغَلۡيِ ٱلۡحَمِيمِ
          <span className="numberTheme"> (46) </span> خُذُوهُ فَٱعۡتِلُوهُ
          إِلَىٰ سَوَآءِ ٱلۡجَحِيمِ
          <span className="numberTheme"> (47) </span> ثُمَّ صُبُّواْ فَوۡقَ
          رَأۡسِهِۦ مِنۡ عَذَابِ ٱلۡحَمِيمِ
          <span className="numberTheme"> (48) </span> ذُقۡ إِنَّكَ أَنتَ
          ٱلۡعَزِيزُ ٱلۡكَرِيمُ
          <span className="numberTheme"> (49) </span>
          إِنَّ هَٰذَا مَا كُنتُم بِهِۦ تَمۡتَرُونَ
          <span className="numberTheme"> (50) </span> إِنَّ ٱلۡمُتَّقِينَ فِي
          مَقَامٍ أَمِينٖ
          <span className="numberTheme"> (51) </span> فِي جَنَّٰتٖ وَعُيُونٖ
          <span className="numberTheme"> (52) </span> يَلۡبَسُونَ مِن سُندُسٖ
          وَإِسۡتَبۡرَقٖ مُّتَقَٰبِلِينَ
          <span className="numberTheme"> (53) </span> كَذَٰلِكَ وَزَوَّجۡنَٰهُم
          بِحُورٍ عِينٖ
          <span className="numberTheme"> (54) </span> يَدۡعُونَ فِيهَا بِكُلِّ
          فَٰكِهَةٍ ءَامِنِينَ
          <span className="numberTheme"> (55) </span>
          لَا يَذُوقُونَ فِيهَا ٱلۡمَوۡتَ إِلَّا ٱلۡمَوۡتَةَ ٱلۡأُولَىٰۖ
          وَوَقَىٰهُمۡ عَذَابَ ٱلۡجَحِيمِ
          <span className="numberTheme"> (56) </span> فَضۡلٗا مِّن رَّبِّكَۚ
          ذَٰلِكَ هُوَ ٱلۡفَوۡزُ ٱلۡعَظِيمُ
          <span className="numberTheme"> (57) </span> فَإِنَّمَا يَسَّرۡنَٰهُ
          بِلِسَانِكَ لَعَلَّهُمۡ يَتَذَكَّرُونَ
          <span className="numberTheme"> (58) </span> فَٱرۡتَقِبۡ إِنَّهُم
          مُّرۡتَقِبُونَ
          <span className="numberTheme"> (59) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default FourtyFour;
