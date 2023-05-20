import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const ThirtySix = () => {
  return (
    <div>
      <Helmet>
        <title>036 - سورة يس</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة يس</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          يسٓ
          <span className="numberTheme"> (1) </span> وَٱلۡقُرۡءَانِ ٱلۡحَكِيمِ
          <span className="numberTheme"> (2) </span> إِنَّكَ لَمِنَ
          ٱلۡمُرۡسَلِينَ
          <span className="numberTheme"> (3) </span> عَلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ
          <span className="numberTheme"> (4) </span> تَنزِيلَ ٱلۡعَزِيزِ
          ٱلرَّحِيمِ
          <span className="numberTheme"> (5) </span>
          لِتُنذِرَ قَوۡمٗا مَّآ أُنذِرَ ءَابَآؤُهُمۡ فَهُمۡ غَٰفِلُونَ
          <span className="numberTheme"> (6) </span>
          لَقَدۡ حَقَّ ٱلۡقَوۡلُ عَلَىٰٓ أَكۡثَرِهِمۡ فَهُمۡ لَا يُؤۡمِنُونَ
          <span className="numberTheme"> (7) </span>
          إِنَّا جَعَلۡنَا فِيٓ أَعۡنَٰقِهِمۡ أَغۡلَٰلٗا فَهِيَ إِلَى
          ٱلۡأَذۡقَانِ فَهُم مُّقۡمَحُونَ
          <span className="numberTheme"> (8) </span> وَجَعَلۡنَا مِنۢ بَيۡنِ
          أَيۡدِيهِمۡ سَدّٗا وَمِنۡ خَلۡفِهِمۡ سَدّٗا فَأَغۡشَيۡنَٰهُمۡ فَهُمۡ
          لَا يُبۡصِرُونَ
          <span className="numberTheme"> (9) </span> وَسَوَآءٌ عَلَيۡهِمۡ
          ءَأَنذَرۡتَهُمۡ أَمۡ لَمۡ تُنذِرۡهُمۡ لَا يُؤۡمِنُونَ
          <span className="numberTheme"> (10) </span> إِنَّمَا تُنذِرُ مَنِ
          ٱتَّبَعَ ٱلذِّكۡرَ وَخَشِيَ ٱلرَّحۡمَٰنَ بِٱلۡغَيۡبِۖ فَبَشِّرۡهُ
          بِمَغۡفِرَةٖ وَأَجۡرٖ كَرِيمٍ
          <span className="numberTheme"> (11) </span> إِنَّا نَحۡنُ نُحۡيِ
          ٱلۡمَوۡتَىٰ وَنَكۡتُبُ مَا قَدَّمُواْ وَءَاثَٰرَهُمۡۚ وَكُلَّ شَيۡءٍ
          أَحۡصَيۡنَٰهُ فِيٓ إِمَامٖ مُّبِينٖ
          <span className="numberTheme"> (12) </span> وَٱضۡرِبۡ لَهُم مَّثَلًا
          أَصۡحَٰبَ ٱلۡقَرۡيَةِ إِذۡ جَآءَهَا ٱلۡمُرۡسَلُونَ
          <span className="numberTheme"> (13) </span> إِذۡ أَرۡسَلۡنَآ
          إِلَيۡهِمُ ٱثۡنَيۡنِ فَكَذَّبُوهُمَا فَعَزَّزۡنَا بِثَالِثٖ
          فَقَالُوٓاْ إِنَّآ إِلَيۡكُم مُّرۡسَلُونَ
          <span className="numberTheme"> (14) </span> قَالُواْ مَآ أَنتُمۡ
          إِلَّا بَشَرٞ مِّثۡلُنَا وَمَآ أَنزَلَ ٱلرَّحۡمَٰنُ مِن شَيۡءٍ إِنۡ
          أَنتُمۡ إِلَّا تَكۡذِبُونَ
          <span className="numberTheme"> (15) </span> قَالُواْ رَبُّنَا يَعۡلَمُ
          إِنَّآ إِلَيۡكُمۡ لَمُرۡسَلُونَ
          <span className="numberTheme"> (16) </span>
          وَمَا عَلَيۡنَآ إِلَّا ٱلۡبَلَٰغُ ٱلۡمُبِينُ
          <span className="numberTheme"> (17) </span> قَالُوٓاْ إِنَّا
          تَطَيَّرۡنَا بِكُمۡۖ لَئِن لَّمۡ تَنتَهُواْ لَنَرۡجُمَنَّكُمۡ
          وَلَيَمَسَّنَّكُم مِّنَّا عَذَابٌ أَلِيمٞ
          <span className="numberTheme"> (18) </span> قَالُواْ طَٰٓئِرُكُم
          مَّعَكُمۡ أَئِن ذُكِّرۡتُمۚ بَلۡ أَنتُمۡ قَوۡمٞ مُّسۡرِفُونَ
          <span className="numberTheme"> (19) </span>
          وَجَآءَ مِنۡ أَقۡصَا ٱلۡمَدِينَةِ رَجُلٞ يَسۡعَىٰ قَالَ يَٰقَوۡمِ
          ٱتَّبِعُواْ ٱلۡمُرۡسَلِينَ
          <span className="numberTheme"> (20) </span> ٱتَّبِعُواْ مَن لَّا
          يَسۡـَٔلُكُمۡ أَجۡرٗا وَهُم مُّهۡتَدُونَ
          <span className="numberTheme"> (21) </span> وَمَا لِيَ لَآ أَعۡبُدُ
          ٱلَّذِي فَطَرَنِي وَإِلَيۡهِ تُرۡجَعُونَ
          <span className="numberTheme"> (22) </span> ءَأَتَّخِذُ مِن دُونِهِۦٓ
          ءَالِهَةً إِن يُرِدۡنِ ٱلرَّحۡمَٰنُ بِضُرّٖ لَّا تُغۡنِ عَنِّي
          شَفَٰعَتُهُمۡ شَيۡـٔٗا وَلَا يُنقِذُونِ
          <span className="numberTheme"> (23) </span> إِنِّيٓ إِذٗا لَّفِي
          ضَلَٰلٖ مُّبِينٍ
          <span className="numberTheme"> (24) </span> إِنِّيٓ ءَامَنتُ
          بِرَبِّكُمۡ فَٱسۡمَعُونِ
          <span className="numberTheme"> (25) </span>
          قِيلَ ٱدۡخُلِ ٱلۡجَنَّةَۖ قَالَ يَٰلَيۡتَ قَوۡمِي يَعۡلَمُونَ
          <span className="numberTheme"> (26) </span>
          بِمَا غَفَرَ لِي رَبِّي وَجَعَلَنِي مِنَ ٱلۡمُكۡرَمِينَ
          <span className="numberTheme"> (27) </span>
          <span className="partTheme"> ۞ </span>وَمَآ أَنزَلۡنَا عَلَىٰ
          قَوۡمِهِۦ مِنۢ بَعۡدِهِۦ مِن جُندٖ مِّنَ ٱلسَّمَآءِ وَمَا كُنَّا
          مُنزِلِينَ
          <span className="numberTheme"> (28) </span> إِن كَانَتۡ إِلَّا
          صَيۡحَةٗ وَٰحِدَةٗ فَإِذَا هُمۡ خَٰمِدُونَ
          <span className="numberTheme"> (29) </span> يَٰحَسۡرَةً عَلَى
          ٱلۡعِبَادِۚ مَا يَأۡتِيهِم مِّن رَّسُولٍ إِلَّا كَانُواْ بِهِۦ
          يَسۡتَهۡزِءُونَ
          <span className="numberTheme"> (30) </span>
          أَلَمۡ يَرَوۡاْ كَمۡ أَهۡلَكۡنَا قَبۡلَهُم مِّنَ ٱلۡقُرُونِ أَنَّهُمۡ
          إِلَيۡهِمۡ لَا يَرۡجِعُونَ
          <span className="numberTheme"> (31) </span> وَإِن كُلّٞ لَّمَّا
          جَمِيعٞ لَّدَيۡنَا مُحۡضَرُونَ
          <span className="numberTheme"> (32) </span> وَءَايَةٞ لَّهُمُ
          ٱلۡأَرۡضُ ٱلۡمَيۡتَةُ أَحۡيَيۡنَٰهَا وَأَخۡرَجۡنَا مِنۡهَا حَبّٗا
          فَمِنۡهُ يَأۡكُلُونَ
          <span className="numberTheme"> (33) </span>
          وَجَعَلۡنَا فِيهَا جَنَّٰتٖ مِّن نَّخِيلٖ وَأَعۡنَٰبٖ وَفَجَّرۡنَا
          فِيهَا مِنَ ٱلۡعُيُونِ
          <span className="numberTheme"> (34) </span> لِيَأۡكُلُواْ مِن
          ثَمَرِهِۦ وَمَا عَمِلَتۡهُ أَيۡدِيهِمۡۚ أَفَلَا يَشۡكُرُونَ
          <span className="numberTheme"> (35) </span> سُبۡحَٰنَ ٱلَّذِي خَلَقَ
          ٱلۡأَزۡوَٰجَ كُلَّهَا مِمَّا تُنۢبِتُ ٱلۡأَرۡضُ وَمِنۡ أَنفُسِهِمۡ
          وَمِمَّا لَا يَعۡلَمُونَ
          <span className="numberTheme"> (36) </span> وَءَايَةٞ لَّهُمُ ٱلَّيۡلُ
          نَسۡلَخُ مِنۡهُ ٱلنَّهَارَ فَإِذَا هُم مُّظۡلِمُونَ
          <span className="numberTheme"> (37) </span> وَٱلشَّمۡسُ تَجۡرِي
          لِمُسۡتَقَرّٖ لَّهَاۚ ذَٰلِكَ تَقۡدِيرُ ٱلۡعَزِيزِ ٱلۡعَلِيمِ
          <span className="numberTheme"> (38) </span> وَٱلۡقَمَرَ قَدَّرۡنَٰهُ
          مَنَازِلَ حَتَّىٰ عَادَ كَٱلۡعُرۡجُونِ ٱلۡقَدِيمِ
          <span className="numberTheme"> (39) </span> لَا ٱلشَّمۡسُ يَنۢبَغِي
          لَهَآ أَن تُدۡرِكَ ٱلۡقَمَرَ وَلَا ٱلَّيۡلُ سَابِقُ ٱلنَّهَارِۚ
          وَكُلّٞ فِي فَلَكٖ يَسۡبَحُونَ
          <span className="numberTheme"> (40) </span>
          وَءَايَةٞ لَّهُمۡ أَنَّا حَمَلۡنَا ذُرِّيَّتَهُمۡ فِي ٱلۡفُلۡكِ
          ٱلۡمَشۡحُونِ
          <span className="numberTheme"> (41) </span> وَخَلَقۡنَا لَهُم مِّن
          مِّثۡلِهِۦ مَا يَرۡكَبُونَ
          <span className="numberTheme"> (42) </span> وَإِن نَّشَأۡ نُغۡرِقۡهُمۡ
          فَلَا صَرِيخَ لَهُمۡ وَلَا هُمۡ يُنقَذُونَ
          <span className="numberTheme"> (43) </span> إِلَّا رَحۡمَةٗ مِّنَّا
          وَمَتَٰعًا إِلَىٰ حِينٖ
          <span className="numberTheme"> (44) </span>
          وَإِذَا قِيلَ لَهُمُ ٱتَّقُواْ مَا بَيۡنَ أَيۡدِيكُمۡ وَمَا خَلۡفَكُمۡ
          لَعَلَّكُمۡ تُرۡحَمُونَ
          <span className="numberTheme"> (45) </span> وَمَا تَأۡتِيهِم مِّنۡ
          ءَايَةٖ مِّنۡ ءَايَٰتِ رَبِّهِمۡ إِلَّا كَانُواْ عَنۡهَا مُعۡرِضِينَ
          <span className="numberTheme"> (46) </span> وَإِذَا قِيلَ لَهُمۡ
          أَنفِقُواْ مِمَّا رَزَقَكُمُ ٱللَّهُ قَالَ ٱلَّذِينَ كَفَرُواْ
          لِلَّذِينَ ءَامَنُوٓاْ أَنُطۡعِمُ مَن لَّوۡ يَشَآءُ ٱللَّهُ
          أَطۡعَمَهُۥٓ إِنۡ أَنتُمۡ إِلَّا فِي ضَلَٰلٖ مُّبِينٖ
          <span className="numberTheme"> (47) </span>
          وَيَقُولُونَ مَتَىٰ هَٰذَا ٱلۡوَعۡدُ إِن كُنتُمۡ صَٰدِقِينَ
          <span className="numberTheme"> (48) </span> مَا يَنظُرُونَ إِلَّا
          صَيۡحَةٗ وَٰحِدَةٗ تَأۡخُذُهُمۡ وَهُمۡ يَخِصِّمُونَ
          <span className="numberTheme"> (49) </span> فَلَا يَسۡتَطِيعُونَ
          تَوۡصِيَةٗ وَلَآ إِلَىٰٓ أَهۡلِهِمۡ يَرۡجِعُونَ
          <span className="numberTheme"> (50) </span> وَنُفِخَ فِي ٱلصُّورِ
          فَإِذَا هُم مِّنَ ٱلۡأَجۡدَاثِ إِلَىٰ رَبِّهِمۡ يَنسِلُونَ
          <span className="numberTheme"> (51) </span> قَالُواْ يَٰوَيۡلَنَا مَنۢ
          بَعَثَنَا مِن مَّرۡقَدِنَاۜۗ هَٰذَا مَا وَعَدَ ٱلرَّحۡمَٰنُ وَصَدَقَ
          ٱلۡمُرۡسَلُونَ
          <span className="numberTheme"> (52) </span> إِن كَانَتۡ إِلَّا
          صَيۡحَةٗ وَٰحِدَةٗ فَإِذَا هُمۡ جَمِيعٞ لَّدَيۡنَا مُحۡضَرُونَ
          <span className="numberTheme"> (53) </span> فَٱلۡيَوۡمَ لَا تُظۡلَمُ
          نَفۡسٞ شَيۡـٔٗا وَلَا تُجۡزَوۡنَ إِلَّا مَا كُنتُمۡ تَعۡمَلُونَ
          <span className="numberTheme"> (54) </span> إِنَّ أَصۡحَٰبَ ٱلۡجَنَّةِ
          ٱلۡيَوۡمَ فِي شُغُلٖ فَٰكِهُونَ
          <span className="numberTheme"> (55) </span> هُمۡ وَأَزۡوَٰجُهُمۡ فِي
          ظِلَٰلٍ عَلَى ٱلۡأَرَآئِكِ مُتَّكِـُٔونَ
          <span className="numberTheme"> (56) </span>
          لَهُمۡ فِيهَا فَٰكِهَةٞ وَلَهُم مَّا يَدَّعُونَ
          <span className="numberTheme"> (57) </span> سَلَٰمٞ قَوۡلٗا مِّن
          رَّبّٖ رَّحِيمٖ
          <span className="numberTheme"> (58) </span> وَٱمۡتَٰزُواْ ٱلۡيَوۡمَ
          أَيُّهَا ٱلۡمُجۡرِمُونَ
          <span className="numberTheme"> (59) </span>
          <span className="partTheme"> ۞ </span>أَلَمۡ أَعۡهَدۡ إِلَيۡكُمۡ
          يَٰبَنِيٓ ءَادَمَ أَن لَّا تَعۡبُدُواْ ٱلشَّيۡطَٰنَۖ إِنَّهُۥ لَكُمۡ
          عَدُوّٞ مُّبِينٞ
          <span className="numberTheme"> (60) </span>
          وَأَنِ ٱعۡبُدُونِيۚ هَٰذَا صِرَٰطٞ مُّسۡتَقِيمٞ
          <span className="numberTheme"> (61) </span> وَلَقَدۡ أَضَلَّ مِنكُمۡ
          جِبِلّٗا كَثِيرًاۖ أَفَلَمۡ تَكُونُواْ تَعۡقِلُونَ
          <span className="numberTheme"> (62) </span>
          هَٰذِهِۦ جَهَنَّمُ ٱلَّتِي كُنتُمۡ تُوعَدُونَ
          <span className="numberTheme"> (63) </span> ٱصۡلَوۡهَا ٱلۡيَوۡمَ بِمَا
          كُنتُمۡ تَكۡفُرُونَ
          <span className="numberTheme"> (64) </span> ٱلۡيَوۡمَ نَخۡتِمُ عَلَىٰٓ
          أَفۡوَٰهِهِمۡ وَتُكَلِّمُنَآ أَيۡدِيهِمۡ وَتَشۡهَدُ أَرۡجُلُهُم بِمَا
          كَانُواْ يَكۡسِبُونَ
          <span className="numberTheme"> (65) </span> وَلَوۡ نَشَآءُ
          لَطَمَسۡنَا عَلَىٰٓ أَعۡيُنِهِمۡ فَٱسۡتَبَقُواْ ٱلصِّرَٰطَ فَأَنَّىٰ
          يُبۡصِرُونَ
          <span className="numberTheme"> (66) </span>
          وَلَوۡ نَشَآءُ لَمَسَخۡنَٰهُمۡ عَلَىٰ مَكَانَتِهِمۡ فَمَا
          ٱسۡتَطَٰعُواْ مُضِيّٗا وَلَا يَرۡجِعُونَ
          <span className="numberTheme"> (67) </span> وَمَن نُّعَمِّرۡهُ
          نُنَكِّسۡهُ فِي ٱلۡخَلۡقِۚ أَفَلَا يَعۡقِلُونَ
          <span className="numberTheme"> (68) </span> وَمَا عَلَّمۡنَٰهُ
          ٱلشِّعۡرَ وَمَا يَنۢبَغِي لَهُۥٓۚ إِنۡ هُوَ إِلَّا ذِكۡرٞ وَقُرۡءَانٞ
          مُّبِينٞ
          <span className="numberTheme"> (69) </span> لِّيُنذِرَ مَن كَانَ
          حَيّٗا وَيَحِقَّ ٱلۡقَوۡلُ عَلَى ٱلۡكَٰفِرِينَ
          <span className="numberTheme"> (70) </span> أَوَ لَمۡ يَرَوۡاْ أَنَّا
          خَلَقۡنَا لَهُم مِّمَّا عَمِلَتۡ أَيۡدِينَآ أَنۡعَٰمٗا فَهُمۡ لَهَا
          مَٰلِكُونَ
          <span className="numberTheme"> (71) </span>
          وَذَلَّلۡنَٰهَا لَهُمۡ فَمِنۡهَا رَكُوبُهُمۡ وَمِنۡهَا يَأۡكُلُونَ
          <span className="numberTheme"> (72) </span> وَلَهُمۡ فِيهَا مَنَٰفِعُ
          وَمَشَارِبُۚ أَفَلَا يَشۡكُرُونَ
          <span className="numberTheme"> (73) </span>
          وَٱتَّخَذُواْ مِن دُونِ ٱللَّهِ ءَالِهَةٗ لَّعَلَّهُمۡ يُنصَرُونَ
          <span className="numberTheme"> (74) </span>
          لَا يَسۡتَطِيعُونَ نَصۡرَهُمۡ وَهُمۡ لَهُمۡ جُندٞ مُّحۡضَرُونَ
          <span className="numberTheme"> (75) </span>
          فَلَا يَحۡزُنكَ قَوۡلُهُمۡۘ إِنَّا نَعۡلَمُ مَا يُسِرُّونَ وَمَا
          يُعۡلِنُونَ
          <span className="numberTheme"> (76) </span> أَوَ لَمۡ يَرَ ٱلۡإِنسَٰنُ
          أَنَّا خَلَقۡنَٰهُ مِن نُّطۡفَةٖ فَإِذَا هُوَ خَصِيمٞ مُّبِينٞ
          <span className="numberTheme"> (77) </span> وَضَرَبَ لَنَا مَثَلٗا
          وَنَسِيَ خَلۡقَهُۥۖ قَالَ مَن يُحۡيِ ٱلۡعِظَٰمَ وَهِيَ رَمِيمٞ
          <span className="numberTheme"> (78) </span>
          قُلۡ يُحۡيِيهَا ٱلَّذِيٓ أَنشَأَهَآ أَوَّلَ مَرَّةٖۖ وَهُوَ بِكُلِّ
          خَلۡقٍ عَلِيمٌ
          <span className="numberTheme"> (79) </span> ٱلَّذِي جَعَلَ لَكُم مِّنَ
          ٱلشَّجَرِ ٱلۡأَخۡضَرِ نَارٗا فَإِذَآ أَنتُم مِّنۡهُ تُوقِدُونَ
          <span className="numberTheme"> (80) </span> أَوَلَيۡسَ ٱلَّذِي خَلَقَ
          ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ بِقَٰدِرٍ عَلَىٰٓ أَن يَخۡلُقَ مِثۡلَهُمۚ
          بَلَىٰ وَهُوَ ٱلۡخَلَّٰقُ ٱلۡعَلِيمُ
          <span className="numberTheme"> (81) </span> إِنَّمَآ أَمۡرُهُۥٓ
          إِذَآ أَرَادَ شَيۡـًٔا أَن يَقُولَ لَهُۥ كُن فَيَكُونُ
          <span className="numberTheme"> (82) </span> فَسُبۡحَٰنَ ٱلَّذِي
          بِيَدِهِۦ مَلَكُوتُ كُلِّ شَيۡءٖ وَإِلَيۡهِ تُرۡجَعُونَ
          <span className="numberTheme"> (83) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default ThirtySix;
