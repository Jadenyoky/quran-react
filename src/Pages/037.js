import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const ThirtySeven = () => {
  return (
    <div>
      <Helmet>
        <title>037 - سورة الصافات</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الصافات</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلصَّٰٓفَّٰتِ صَفّٗا
          <span className="numberTheme"> (1) </span> فَٱلزَّٰجِرَٰتِ زَجۡرٗا
          <span className="numberTheme"> (2) </span> فَٱلتَّٰلِيَٰتِ ذِكۡرًا
          <span className="numberTheme"> (3) </span> إِنَّ إِلَٰهَكُمۡ لَوَٰحِدٞ
          <span className="numberTheme"> (4) </span> رَّبُّ ٱلسَّمَٰوَٰتِ
          وَٱلۡأَرۡضِ وَمَا بَيۡنَهُمَا وَرَبُّ ٱلۡمَشَٰرِقِ
          <span className="numberTheme"> (5) </span> إِنَّا زَيَّنَّا
          ٱلسَّمَآءَ ٱلدُّنۡيَا بِزِينَةٍ ٱلۡكَوَاكِبِ
          <span className="numberTheme"> (6) </span> وَحِفۡظٗا مِّن كُلِّ
          شَيۡطَٰنٖ مَّارِدٖ
          <span className="numberTheme"> (7) </span> لَّا يَسَّمَّعُونَ إِلَى
          ٱلۡمَلَإِ ٱلۡأَعۡلَىٰ وَيُقۡذَفُونَ مِن كُلِّ جَانِبٖ
          <span className="numberTheme"> (8) </span> دُحُورٗاۖ وَلَهُمۡ عَذَابٞ
          وَاصِبٌ
          <span className="numberTheme"> (9) </span> إِلَّا مَنۡ خَطِفَ
          ٱلۡخَطۡفَةَ فَأَتۡبَعَهُۥ شِهَابٞ ثَاقِبٞ
          <span className="numberTheme"> (10) </span> فَٱسۡتَفۡتِهِمۡ أَهُمۡ
          أَشَدُّ خَلۡقًا أَم مَّنۡ خَلَقۡنَآۚ إِنَّا خَلَقۡنَٰهُم مِّن طِينٖ
          لَّازِبِۭ
          <span className="numberTheme"> (11) </span> بَلۡ عَجِبۡتَ
          وَيَسۡخَرُونَ
          <span className="numberTheme"> (12) </span> وَإِذَا ذُكِّرُواْ لَا
          يَذۡكُرُونَ
          <span className="numberTheme"> (13) </span>
          وَإِذَا رَأَوۡاْ ءَايَةٗ يَسۡتَسۡخِرُونَ
          <span className="numberTheme"> (14) </span> وَقَالُوٓاْ إِنۡ هَٰذَآ
          إِلَّا سِحۡرٞ مُّبِينٌ
          <span className="numberTheme"> (15) </span> أَءِذَا مِتۡنَا وَكُنَّا
          تُرَابٗا وَعِظَٰمًا أَءِنَّا لَمَبۡعُوثُونَ
          <span className="numberTheme"> (16) </span> أَوَ ءَابَآؤُنَا
          ٱلۡأَوَّلُونَ
          <span className="numberTheme"> (17) </span> قُلۡ نَعَمۡ وَأَنتُمۡ
          دَٰخِرُونَ
          <span className="numberTheme"> (18) </span> فَإِنَّمَا هِيَ زَجۡرَةٞ
          وَٰحِدَةٞ فَإِذَا هُمۡ يَنظُرُونَ
          <span className="numberTheme"> (19) </span> وَقَالُواْ يَٰوَيۡلَنَا
          هَٰذَا يَوۡمُ ٱلدِّينِ
          <span className="numberTheme"> (20) </span> هَٰذَا يَوۡمُ ٱلۡفَصۡلِ
          ٱلَّذِي كُنتُم بِهِۦ تُكَذِّبُونَ
          <span className="numberTheme"> (21) </span>
          <span className="partTheme"> ۞ </span>ٱحۡشُرُواْ ٱلَّذِينَ ظَلَمُواْ
          وَأَزۡوَٰجَهُمۡ وَمَا كَانُواْ يَعۡبُدُونَ
          <span className="numberTheme"> (22) </span> مِن دُونِ ٱللَّهِ
          فَٱهۡدُوهُمۡ إِلَىٰ صِرَٰطِ ٱلۡجَحِيمِ
          <span className="numberTheme"> (23) </span> وَقِفُوهُمۡۖ إِنَّهُم
          مَّسۡـُٔولُونَ
          <span className="numberTheme"> (24) </span> مَا لَكُمۡ لَا
          تَنَاصَرُونَ
          <span className="numberTheme"> (25) </span> بَلۡ هُمُ ٱلۡيَوۡمَ
          مُسۡتَسۡلِمُونَ
          <span className="numberTheme"> (26) </span> وَأَقۡبَلَ بَعۡضُهُمۡ
          عَلَىٰ بَعۡضٖ يَتَسَآءَلُونَ
          <span className="numberTheme"> (27) </span> قَالُوٓاْ إِنَّكُمۡ
          كُنتُمۡ تَأۡتُونَنَا عَنِ ٱلۡيَمِينِ
          <span className="numberTheme"> (28) </span> قَالُواْ بَل لَّمۡ
          تَكُونُواْ مُؤۡمِنِينَ
          <span className="numberTheme"> (29) </span> وَمَا كَانَ لَنَا
          عَلَيۡكُم مِّن سُلۡطَٰنِۭۖ بَلۡ كُنتُمۡ قَوۡمٗا طَٰغِينَ
          <span className="numberTheme"> (30) </span> فَحَقَّ عَلَيۡنَا قَوۡلُ
          رَبِّنَآۖ إِنَّا لَذَآئِقُونَ
          <span className="numberTheme"> (31) </span>
          فَأَغۡوَيۡنَٰكُمۡ إِنَّا كُنَّا غَٰوِينَ
          <span className="numberTheme"> (32) </span> فَإِنَّهُمۡ يَوۡمَئِذٖ فِي
          ٱلۡعَذَابِ مُشۡتَرِكُونَ
          <span className="numberTheme"> (33) </span> إِنَّا كَذَٰلِكَ نَفۡعَلُ
          بِٱلۡمُجۡرِمِينَ
          <span className="numberTheme"> (34) </span> إِنَّهُمۡ كَانُوٓاْ إِذَا
          قِيلَ لَهُمۡ لَآ إِلَٰهَ إِلَّا ٱللَّهُ يَسۡتَكۡبِرُونَ
          <span className="numberTheme"> (35) </span> وَيَقُولُونَ أَئِنَّا
          لَتَارِكُوٓاْ ءَالِهَتِنَا لِشَاعِرٖ مَّجۡنُونِۭ
          <span className="numberTheme"> (36) </span> بَلۡ جَآءَ بِٱلۡحَقِّ
          وَصَدَّقَ ٱلۡمُرۡسَلِينَ
          <span className="numberTheme"> (37) </span> إِنَّكُمۡ لَذَآئِقُواْ
          ٱلۡعَذَابِ ٱلۡأَلِيمِ
          <span className="numberTheme"> (38) </span> وَمَا تُجۡزَوۡنَ إِلَّا
          مَا كُنتُمۡ تَعۡمَلُونَ
          <span className="numberTheme"> (39) </span> إِلَّا عِبَادَ ٱللَّهِ
          ٱلۡمُخۡلَصِينَ
          <span className="numberTheme"> (40) </span>
          أُوْلَٰٓئِكَ لَهُمۡ رِزۡقٞ مَّعۡلُومٞ
          <span className="numberTheme"> (41) </span> فَوَٰكِهُ وَهُم
          مُّكۡرَمُونَ
          <span className="numberTheme"> (42) </span> فِي جَنَّٰتِ ٱلنَّعِيمِ
          <span className="numberTheme"> (43) </span> عَلَىٰ سُرُرٖ
          مُّتَقَٰبِلِينَ
          <span className="numberTheme"> (44) </span> يُطَافُ عَلَيۡهِم بِكَأۡسٖ
          مِّن مَّعِينِۭ
          <span className="numberTheme"> (45) </span>
          بَيۡضَآءَ لَذَّةٖ لِّلشَّٰرِبِينَ
          <span className="numberTheme"> (46) </span> لَا فِيهَا غَوۡلٞ وَلَا
          هُمۡ عَنۡهَا يُنزَفُونَ
          <span className="numberTheme"> (47) </span> وَعِندَهُمۡ قَٰصِرَٰتُ
          ٱلطَّرۡفِ عِينٞ
          <span className="numberTheme"> (48) </span>
          كَأَنَّهُنَّ بَيۡضٞ مَّكۡنُونٞ
          <span className="numberTheme"> (49) </span> فَأَقۡبَلَ بَعۡضُهُمۡ
          عَلَىٰ بَعۡضٖ يَتَسَآءَلُونَ
          <span className="numberTheme"> (50) </span> قَالَ قَآئِلٞ مِّنۡهُمۡ
          إِنِّي كَانَ لِي قَرِينٞ
          <span className="numberTheme"> (51) </span> يَقُولُ أَءِنَّكَ لَمِنَ
          ٱلۡمُصَدِّقِينَ
          <span className="numberTheme"> (52) </span> أَءِذَا مِتۡنَا وَكُنَّا
          تُرَابٗا وَعِظَٰمًا أَءِنَّا لَمَدِينُونَ
          <span className="numberTheme"> (53) </span> قَالَ هَلۡ أَنتُم
          مُّطَّلِعُونَ
          <span className="numberTheme"> (54) </span> فَٱطَّلَعَ فَرَءَاهُ فِي
          سَوَآءِ ٱلۡجَحِيمِ
          <span className="numberTheme"> (55) </span> قَالَ تَٱللَّهِ إِن كِدتَّ
          لَتُرۡدِينِ
          <span className="numberTheme"> (56) </span> وَلَوۡلَا نِعۡمَةُ رَبِّي
          لَكُنتُ مِنَ ٱلۡمُحۡضَرِينَ
          <span className="numberTheme"> (57) </span> أَفَمَا نَحۡنُ
          بِمَيِّتِينَ
          <span className="numberTheme"> (58) </span> إِلَّا مَوۡتَتَنَا
          ٱلۡأُولَىٰ وَمَا نَحۡنُ بِمُعَذَّبِينَ
          <span className="numberTheme"> (59) </span> إِنَّ هَٰذَا لَهُوَ
          ٱلۡفَوۡزُ ٱلۡعَظِيمُ
          <span className="numberTheme"> (60) </span>
          لِمِثۡلِ هَٰذَا فَلۡيَعۡمَلِ ٱلۡعَٰمِلُونَ
          <span className="numberTheme"> (61) </span> أَذَٰلِكَ خَيۡرٞ نُّزُلًا
          أَمۡ شَجَرَةُ ٱلزَّقُّومِ
          <span className="numberTheme"> (62) </span> إِنَّا جَعَلۡنَٰهَا
          فِتۡنَةٗ لِّلظَّٰلِمِينَ
          <span className="numberTheme"> (63) </span> إِنَّهَا شَجَرَةٞ تَخۡرُجُ
          فِيٓ أَصۡلِ ٱلۡجَحِيمِ
          <span className="numberTheme"> (64) </span> طَلۡعُهَا كَأَنَّهُۥ
          رُءُوسُ ٱلشَّيَٰطِينِ
          <span className="numberTheme"> (65) </span> فَإِنَّهُمۡ لَأٓكِلُونَ
          مِنۡهَا فَمَالِـُٔونَ مِنۡهَا ٱلۡبُطُونَ
          <span className="numberTheme"> (66) </span> ثُمَّ إِنَّ لَهُمۡ
          عَلَيۡهَا لَشَوۡبٗا مِّنۡ حَمِيمٖ
          <span className="numberTheme"> (67) </span> ثُمَّ إِنَّ مَرۡجِعَهُمۡ
          لَإِلَى ٱلۡجَحِيمِ
          <span className="numberTheme"> (68) </span> إِنَّهُمۡ أَلۡفَوۡاْ
          ءَابَآءَهُمۡ ضَآلِّينَ
          <span className="numberTheme"> (69) </span> فَهُمۡ عَلَىٰٓ
          ءَاثَٰرِهِمۡ يُهۡرَعُونَ
          <span className="numberTheme"> (70) </span> وَلَقَدۡ ضَلَّ قَبۡلَهُمۡ
          أَكۡثَرُ ٱلۡأَوَّلِينَ
          <span className="numberTheme"> (71) </span> وَلَقَدۡ أَرۡسَلۡنَا
          فِيهِم مُّنذِرِينَ
          <span className="numberTheme"> (72) </span> فَٱنظُرۡ كَيۡفَ كَانَ
          عَٰقِبَةُ ٱلۡمُنذَرِينَ
          <span className="numberTheme"> (73) </span>
          إِلَّا عِبَادَ ٱللَّهِ ٱلۡمُخۡلَصِينَ
          <span className="numberTheme"> (74) </span> وَلَقَدۡ نَادَىٰنَا نُوحٞ
          فَلَنِعۡمَ ٱلۡمُجِيبُونَ
          <span className="numberTheme"> (75) </span> وَنَجَّيۡنَٰهُ وَأَهۡلَهُۥ
          مِنَ ٱلۡكَرۡبِ ٱلۡعَظِيمِ
          <span className="numberTheme"> (76) </span> وَجَعَلۡنَا ذُرِّيَّتَهُۥ
          هُمُ ٱلۡبَاقِينَ
          <span className="numberTheme"> (77) </span> وَتَرَكۡنَا عَلَيۡهِ فِي
          ٱلۡأٓخِرِينَ
          <span className="numberTheme"> (78) </span> سَلَٰمٌ عَلَىٰ نُوحٖ فِي
          ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (79) </span> إِنَّا كَذَٰلِكَ نَجۡزِي
          ٱلۡمُحۡسِنِينَ
          <span className="numberTheme"> (80) </span>
          إِنَّهُۥ مِنۡ عِبَادِنَا ٱلۡمُؤۡمِنِينَ
          <span className="numberTheme"> (81) </span> ثُمَّ أَغۡرَقۡنَا
          ٱلۡأٓخَرِينَ
          <span className="numberTheme"> (82) </span>
          <span className="partTheme"> ۞ </span>وَإِنَّ مِن شِيعَتِهِۦ
          لَإِبۡرَٰهِيمَ
          <span className="numberTheme"> (83) </span> إِذۡ جَآءَ رَبَّهُۥ
          بِقَلۡبٖ سَلِيمٍ
          <span className="numberTheme"> (84) </span> إِذۡ قَالَ لِأَبِيهِ
          وَقَوۡمِهِۦ مَاذَا تَعۡبُدُونَ
          <span className="numberTheme"> (85) </span> أَئِفۡكًا ءَالِهَةٗ دُونَ
          ٱللَّهِ تُرِيدُونَ
          <span className="numberTheme"> (86) </span> فَمَا ظَنُّكُم بِرَبِّ
          ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (87) </span> فَنَظَرَ نَظۡرَةٗ فِي
          ٱلنُّجُومِ
          <span className="numberTheme"> (88) </span> فَقَالَ إِنِّي سَقِيمٞ
          <span className="numberTheme"> (89) </span> فَتَوَلَّوۡاْ عَنۡهُ
          مُدۡبِرِينَ
          <span className="numberTheme"> (90) </span> فَرَاغَ إِلَىٰٓ
          ءَالِهَتِهِمۡ فَقَالَ أَلَا تَأۡكُلُونَ
          <span className="numberTheme"> (91) </span> مَا لَكُمۡ لَا تَنطِقُونَ
          <span className="numberTheme"> (92) </span> فَرَاغَ عَلَيۡهِمۡ
          ضَرۡبَۢا بِٱلۡيَمِينِ
          <span className="numberTheme"> (93) </span> فَأَقۡبَلُوٓاْ إِلَيۡهِ
          يَزِفُّونَ
          <span className="numberTheme"> (94) </span>
          قَالَ أَتَعۡبُدُونَ مَا تَنۡحِتُونَ
          <span className="numberTheme"> (95) </span> وَٱللَّهُ خَلَقَكُمۡ وَمَا
          تَعۡمَلُونَ
          <span className="numberTheme"> (96) </span> قَالُواْ ٱبۡنُواْ لَهُۥ
          بُنۡيَٰنٗا فَأَلۡقُوهُ فِي ٱلۡجَحِيمِ
          <span className="numberTheme"> (97) </span> فَأَرَادُواْ بِهِۦ كَيۡدٗا
          فَجَعَلۡنَٰهُمُ ٱلۡأَسۡفَلِينَ
          <span className="numberTheme"> (98) </span> وَقَالَ إِنِّي ذَاهِبٌ
          إِلَىٰ رَبِّي سَيَهۡدِينِ
          <span className="numberTheme"> (99) </span> رَبِّ هَبۡ لِي مِنَ
          ٱلصَّٰلِحِينَ
          <span className="numberTheme"> (100) </span> فَبَشَّرۡنَٰهُ بِغُلَٰمٍ
          حَلِيمٖ
          <span className="numberTheme"> (101) </span> فَلَمَّا بَلَغَ مَعَهُ
          ٱلسَّعۡيَ قَالَ يَٰبُنَيَّ إِنِّيٓ أَرَىٰ فِي ٱلۡمَنَامِ أَنِّيٓ
          أَذۡبَحُكَ فَٱنظُرۡ مَاذَا تَرَىٰۚ قَالَ يَٰٓأَبَتِ ٱفۡعَلۡ مَا
          تُؤۡمَرُۖ سَتَجِدُنِيٓ إِن شَآءَ ٱللَّهُ مِنَ ٱلصَّٰبِرِينَ
          <span className="numberTheme"> (102) </span> فَلَمَّآ أَسۡلَمَا
          وَتَلَّهُۥ لِلۡجَبِينِ
          <span className="numberTheme"> (103) </span> وَنَٰدَيۡنَٰهُ أَن
          يَٰٓإِبۡرَٰهِيمُ
          <span className="numberTheme"> (104) </span> قَدۡ صَدَّقۡتَ
          ٱلرُّءۡيَآۚ إِنَّا كَذَٰلِكَ نَجۡزِي ٱلۡمُحۡسِنِينَ
          <span className="numberTheme"> (105) </span>
          إِنَّ هَٰذَا لَهُوَ ٱلۡبَلَٰٓؤُاْ ٱلۡمُبِينُ
          <span className="numberTheme"> (106) </span> وَفَدَيۡنَٰهُ بِذِبۡحٍ
          عَظِيمٖ
          <span className="numberTheme"> (107) </span> وَتَرَكۡنَا عَلَيۡهِ فِي
          ٱلۡأٓخِرِينَ
          <span className="numberTheme"> (108) </span>
          سَلَٰمٌ عَلَىٰٓ إِبۡرَٰهِيمَ
          <span className="numberTheme"> (109) </span> كَذَٰلِكَ نَجۡزِي
          ٱلۡمُحۡسِنِينَ
          <span className="numberTheme"> (110) </span> إِنَّهُۥ مِنۡ عِبَادِنَا
          ٱلۡمُؤۡمِنِينَ
          <span className="numberTheme"> (111) </span> وَبَشَّرۡنَٰهُ
          بِإِسۡحَٰقَ نَبِيّٗا مِّنَ ٱلصَّٰلِحِينَ
          <span className="numberTheme"> (112) </span> وَبَٰرَكۡنَا عَلَيۡهِ
          وَعَلَىٰٓ إِسۡحَٰقَۚ وَمِن ذُرِّيَّتِهِمَا مُحۡسِنٞ وَظَالِمٞ
          لِّنَفۡسِهِۦ مُبِينٞ
          <span className="numberTheme"> (113) </span> وَلَقَدۡ مَنَنَّا عَلَىٰ
          مُوسَىٰ وَهَٰرُونَ
          <span className="numberTheme"> (114) </span> وَنَجَّيۡنَٰهُمَا
          وَقَوۡمَهُمَا مِنَ ٱلۡكَرۡبِ ٱلۡعَظِيمِ
          <span className="numberTheme"> (115) </span>
          وَنَصَرۡنَٰهُمۡ فَكَانُواْ هُمُ ٱلۡغَٰلِبِينَ
          <span className="numberTheme"> (116) </span> وَءَاتَيۡنَٰهُمَا
          ٱلۡكِتَٰبَ ٱلۡمُسۡتَبِينَ
          <span className="numberTheme"> (117) </span> وَهَدَيۡنَٰهُمَا
          ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ
          <span className="numberTheme"> (118) </span> وَتَرَكۡنَا عَلَيۡهِمَا
          فِي ٱلۡأٓخِرِينَ
          <span className="numberTheme"> (119) </span>
          سَلَٰمٌ عَلَىٰ مُوسَىٰ وَهَٰرُونَ
          <span className="numberTheme"> (120) </span> إِنَّا كَذَٰلِكَ نَجۡزِي
          ٱلۡمُحۡسِنِينَ
          <span className="numberTheme"> (121) </span> إِنَّهُمَا مِنۡ
          عِبَادِنَا ٱلۡمُؤۡمِنِينَ
          <span className="numberTheme"> (122) </span>
          وَإِنَّ إِلۡيَاسَ لَمِنَ ٱلۡمُرۡسَلِينَ
          <span className="numberTheme"> (123) </span> إِذۡ قَالَ لِقَوۡمِهِۦٓ
          أَلَا تَتَّقُونَ
          <span className="numberTheme"> (124) </span> أَتَدۡعُونَ بَعۡلٗا
          وَتَذَرُونَ أَحۡسَنَ ٱلۡخَٰلِقِينَ
          <span className="numberTheme"> (125) </span> ٱللَّهَ رَبَّكُمۡ وَرَبَّ
          ءَابَآئِكُمُ ٱلۡأَوَّلِينَ
          <span className="numberTheme"> (126) </span> فَكَذَّبُوهُ فَإِنَّهُمۡ
          لَمُحۡضَرُونَ
          <span className="numberTheme"> (127) </span>
          إِلَّا عِبَادَ ٱللَّهِ ٱلۡمُخۡلَصِينَ
          <span className="numberTheme"> (128) </span> وَتَرَكۡنَا عَلَيۡهِ فِي
          ٱلۡأٓخِرِينَ
          <span className="numberTheme"> (129) </span> سَلَٰمٌ عَلَىٰٓ إِلۡ
          يَاسِينَ
          <span className="numberTheme"> (130) </span> إِنَّا كَذَٰلِكَ نَجۡزِي
          ٱلۡمُحۡسِنِينَ
          <span className="numberTheme"> (131) </span> إِنَّهُۥ مِنۡ عِبَادِنَا
          ٱلۡمُؤۡمِنِينَ
          <span className="numberTheme"> (132) </span> وَإِنَّ لُوطٗا لَّمِنَ
          ٱلۡمُرۡسَلِينَ
          <span className="numberTheme"> (133) </span> إِذۡ نَجَّيۡنَٰهُ
          وَأَهۡلَهُۥٓ أَجۡمَعِينَ
          <span className="numberTheme"> (134) </span> إِلَّا عَجُوزٗا فِي
          ٱلۡغَٰبِرِينَ
          <span className="numberTheme"> (135) </span> ثُمَّ دَمَّرۡنَا
          ٱلۡأٓخَرِينَ
          <span className="numberTheme"> (136) </span> وَإِنَّكُمۡ لَتَمُرُّونَ
          عَلَيۡهِم مُّصۡبِحِينَ
          <span className="numberTheme"> (137) </span> وَبِٱلَّيۡلِۚ أَفَلَا
          تَعۡقِلُونَ
          <span className="numberTheme"> (138) </span> وَإِنَّ يُونُسَ لَمِنَ
          ٱلۡمُرۡسَلِينَ
          <span className="numberTheme"> (139) </span> إِذۡ أَبَقَ إِلَى
          ٱلۡفُلۡكِ ٱلۡمَشۡحُونِ
          <span className="numberTheme"> (140) </span> فَسَاهَمَ فَكَانَ مِنَ
          ٱلۡمُدۡحَضِينَ
          <span className="numberTheme"> (141) </span> فَٱلۡتَقَمَهُ ٱلۡحُوتُ
          وَهُوَ مُلِيمٞ
          <span className="numberTheme"> (142) </span>
          فَلَوۡلَآ أَنَّهُۥ كَانَ مِنَ ٱلۡمُسَبِّحِينَ
          <span className="numberTheme"> (143) </span> لَلَبِثَ فِي بَطۡنِهِۦٓ
          إِلَىٰ يَوۡمِ يُبۡعَثُونَ
          <span className="numberTheme"> (144) </span>
          <span className="partTheme"> ۞ </span>فَنَبَذۡنَٰهُ بِٱلۡعَرَآءِ
          وَهُوَ سَقِيمٞ
          <span className="numberTheme"> (145) </span> وَأَنۢبَتۡنَا عَلَيۡهِ
          شَجَرَةٗ مِّن يَقۡطِينٖ
          <span className="numberTheme"> (146) </span> وَأَرۡسَلۡنَٰهُ إِلَىٰ
          مِاْئَةِ أَلۡفٍ أَوۡ يَزِيدُونَ
          <span className="numberTheme"> (147) </span> فَـَٔامَنُواْ
          فَمَتَّعۡنَٰهُمۡ إِلَىٰ حِينٖ
          <span className="numberTheme"> (148) </span>
          فَٱسۡتَفۡتِهِمۡ أَلِرَبِّكَ ٱلۡبَنَاتُ وَلَهُمُ ٱلۡبَنُونَ
          <span className="numberTheme"> (149) </span> أَمۡ خَلَقۡنَا
          ٱلۡمَلَٰٓئِكَةَ إِنَٰثٗا وَهُمۡ شَٰهِدُونَ
          <span className="numberTheme"> (150) </span> أَلَآ إِنَّهُم مِّنۡ
          إِفۡكِهِمۡ لَيَقُولُونَ
          <span className="numberTheme"> (151) </span> وَلَدَ ٱللَّهُ
          وَإِنَّهُمۡ لَكَٰذِبُونَ
          <span className="numberTheme"> (152) </span> أَصۡطَفَى ٱلۡبَنَاتِ
          عَلَى ٱلۡبَنِينَ
          <span className="numberTheme"> (153) </span> مَا لَكُمۡ كَيۡفَ
          تَحۡكُمُونَ
          <span className="numberTheme"> (154) </span> أَفَلَا تَذَكَّرُونَ
          <span className="numberTheme"> (155) </span>
          أَمۡ لَكُمۡ سُلۡطَٰنٞ مُّبِينٞ
          <span className="numberTheme"> (156) </span> فَأۡتُواْ بِكِتَٰبِكُمۡ
          إِن كُنتُمۡ صَٰدِقِينَ
          <span className="numberTheme"> (157) </span> وَجَعَلُواْ بَيۡنَهُۥ
          وَبَيۡنَ ٱلۡجِنَّةِ نَسَبٗاۚ وَلَقَدۡ عَلِمَتِ ٱلۡجِنَّةُ إِنَّهُمۡ
          لَمُحۡضَرُونَ
          <span className="numberTheme"> (158) </span>
          سُبۡحَٰنَ ٱللَّهِ عَمَّا يَصِفُونَ
          <span className="numberTheme"> (159) </span> إِلَّا عِبَادَ ٱللَّهِ
          ٱلۡمُخۡلَصِينَ
          <span className="numberTheme"> (160) </span> فَإِنَّكُمۡ وَمَا
          تَعۡبُدُونَ
          <span className="numberTheme"> (161) </span> مَآ أَنتُمۡ عَلَيۡهِ
          بِفَٰتِنِينَ
          <span className="numberTheme"> (162) </span> إِلَّا مَنۡ هُوَ صَالِ
          ٱلۡجَحِيمِ
          <span className="numberTheme"> (163) </span>
          وَمَا مِنَّآ إِلَّا لَهُۥ مَقَامٞ مَّعۡلُومٞ
          <span className="numberTheme"> (164) </span> وَإِنَّا لَنَحۡنُ
          ٱلصَّآفُّونَ
          <span className="numberTheme"> (165) </span> وَإِنَّا لَنَحۡنُ
          ٱلۡمُسَبِّحُونَ
          <span className="numberTheme"> (166) </span> وَإِن كَانُواْ
          لَيَقُولُونَ
          <span className="numberTheme"> (167) </span> لَوۡ أَنَّ عِندَنَا
          ذِكۡرٗا مِّنَ ٱلۡأَوَّلِينَ
          <span className="numberTheme"> (168) </span> لَكُنَّا عِبَادَ ٱللَّهِ
          ٱلۡمُخۡلَصِينَ
          <span className="numberTheme"> (169) </span>
          فَكَفَرُواْ بِهِۦۖ فَسَوۡفَ يَعۡلَمُونَ
          <span className="numberTheme"> (170) </span> وَلَقَدۡ سَبَقَتۡ
          كَلِمَتُنَا لِعِبَادِنَا ٱلۡمُرۡسَلِينَ
          <span className="numberTheme"> (171) </span> إِنَّهُمۡ لَهُمُ
          ٱلۡمَنصُورُونَ
          <span className="numberTheme"> (172) </span> وَإِنَّ جُندَنَا لَهُمُ
          ٱلۡغَٰلِبُونَ
          <span className="numberTheme"> (173) </span>
          فَتَوَلَّ عَنۡهُمۡ حَتَّىٰ حِينٖ
          <span className="numberTheme"> (174) </span> وَأَبۡصِرۡهُمۡ فَسَوۡفَ
          يُبۡصِرُونَ
          <span className="numberTheme"> (175) </span> أَفَبِعَذَابِنَا
          يَسۡتَعۡجِلُونَ
          <span className="numberTheme"> (176) </span> فَإِذَا نَزَلَ
          بِسَاحَتِهِمۡ فَسَآءَ صَبَاحُ ٱلۡمُنذَرِينَ
          <span className="numberTheme"> (177) </span> وَتَوَلَّ عَنۡهُمۡ
          حَتَّىٰ حِينٖ
          <span className="numberTheme"> (178) </span> وَأَبۡصِرۡ فَسَوۡفَ
          يُبۡصِرُونَ
          <span className="numberTheme"> (179) </span>
          سُبۡحَٰنَ رَبِّكَ رَبِّ ٱلۡعِزَّةِ عَمَّا يَصِفُونَ
          <span className="numberTheme"> (180) </span> وَسَلَٰمٌ عَلَى
          ٱلۡمُرۡسَلِينَ
          <span className="numberTheme"> (181) </span> وَٱلۡحَمۡدُ لِلَّهِ رَبِّ
          ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (182) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default ThirtySeven;
