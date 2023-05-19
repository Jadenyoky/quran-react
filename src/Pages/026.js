import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const TwentySix = () => {
  return (
    <div>
      <Helmet>
        <title>026 - سورة الشعراء</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الشعراء</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          طسٓمٓ
          <span className="numberTheme"> (1) </span> تِلۡكَ ءَايَٰتُ ٱلۡكِتَٰبِ
          ٱلۡمُبِينِ
          <span className="numberTheme"> (2) </span> لَعَلَّكَ بَٰخِعٞ نَّفۡسَكَ
          أَلَّا يَكُونُواْ مُؤۡمِنِينَ
          <span className="numberTheme"> (3) </span> إِن نَّشَأۡ نُنَزِّلۡ
          عَلَيۡهِم مِّنَ ٱلسَّمَآءِ ءَايَةٗ فَظَلَّتۡ أَعۡنَٰقُهُمۡ لَهَا
          خَٰضِعِينَ
          <span className="numberTheme"> (4) </span> وَمَا يَأۡتِيهِم مِّن
          ذِكۡرٖ مِّنَ ٱلرَّحۡمَٰنِ مُحۡدَثٍ إِلَّا كَانُواْ عَنۡهُ مُعۡرِضِينَ
          <span className="numberTheme"> (5) </span> فَقَدۡ كَذَّبُواْ
          فَسَيَأۡتِيهِمۡ أَنۢبَٰٓؤُاْ مَا كَانُواْ بِهِۦ يَسۡتَهۡزِءُونَ
          <span className="numberTheme"> (6) </span>
          أَوَ لَمۡ يَرَوۡاْ إِلَى ٱلۡأَرۡضِ كَمۡ أَنۢبَتۡنَا فِيهَا مِن كُلِّ
          زَوۡجٖ كَرِيمٍ
          <span className="numberTheme"> (7) </span> إِنَّ فِي ذَٰلِكَ لَأٓيَةٗۖ
          وَمَا كَانَ أَكۡثَرُهُم مُّؤۡمِنِينَ
          <span className="numberTheme"> (8) </span> وَإِنَّ رَبَّكَ لَهُوَ
          ٱلۡعَزِيزُ ٱلرَّحِيمُ
          <span className="numberTheme"> (9) </span>
          وَإِذۡ نَادَىٰ رَبُّكَ مُوسَىٰٓ أَنِ ٱئۡتِ ٱلۡقَوۡمَ ٱلظَّٰلِمِينَ
          <span className="numberTheme"> (10) </span> قَوۡمَ فِرۡعَوۡنَۚ أَلَا
          يَتَّقُونَ
          <span className="numberTheme"> (11) </span> قَالَ رَبِّ إِنِّيٓ
          أَخَافُ أَن يُكَذِّبُونِ
          <span className="numberTheme"> (12) </span> وَيَضِيقُ صَدۡرِي وَلَا
          يَنطَلِقُ لِسَانِي فَأَرۡسِلۡ إِلَىٰ هَٰرُونَ
          <span className="numberTheme"> (13) </span> وَلَهُمۡ عَلَيَّ ذَنۢبٞ
          فَأَخَافُ أَن يَقۡتُلُونِ
          <span className="numberTheme"> (14) </span> قَالَ كَلَّاۖ فَٱذۡهَبَا
          بِـَٔايَٰتِنَآۖ إِنَّا مَعَكُم مُّسۡتَمِعُونَ
          <span className="numberTheme"> (15) </span> فَأۡتِيَا فِرۡعَوۡنَ
          فَقُولَآ إِنَّا رَسُولُ رَبِّ ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (16) </span> أَنۡ أَرۡسِلۡ مَعَنَا
          بَنِيٓ إِسۡرَٰٓءِيلَ
          <span className="numberTheme"> (17) </span> قَالَ أَلَمۡ نُرَبِّكَ
          فِينَا وَلِيدٗا وَلَبِثۡتَ فِينَا مِنۡ عُمُرِكَ سِنِينَ
          <span className="numberTheme"> (18) </span>
          وَفَعَلۡتَ فَعۡلَتَكَ ٱلَّتِي فَعَلۡتَ وَأَنتَ مِنَ ٱلۡكَٰفِرِينَ
          <span className="numberTheme"> (19) </span>
          قَالَ فَعَلۡتُهَآ إِذٗا وَأَنَا۠ مِنَ ٱلضَّآلِّينَ
          <span className="numberTheme"> (20) </span> فَفَرَرۡتُ مِنكُمۡ لَمَّا
          خِفۡتُكُمۡ فَوَهَبَ لِي رَبِّي حُكۡمٗا وَجَعَلَنِي مِنَ ٱلۡمُرۡسَلِينَ
          <span className="numberTheme"> (21) </span> وَتِلۡكَ نِعۡمَةٞ
          تَمُنُّهَا عَلَيَّ أَنۡ عَبَّدتَّ بَنِيٓ إِسۡرَٰٓءِيلَ
          <span className="numberTheme"> (22) </span> قَالَ فِرۡعَوۡنُ وَمَا
          رَبُّ ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (23) </span> قَالَ رَبُّ ٱلسَّمَٰوَٰتِ
          وَٱلۡأَرۡضِ وَمَا بَيۡنَهُمَآۖ إِن كُنتُم مُّوقِنِينَ
          <span className="numberTheme"> (24) </span> قَالَ لِمَنۡ حَوۡلَهُۥٓ
          أَلَا تَسۡتَمِعُونَ
          <span className="numberTheme"> (25) </span> قَالَ رَبُّكُمۡ وَرَبُّ
          ءَابَآئِكُمُ ٱلۡأَوَّلِينَ
          <span className="numberTheme"> (26) </span> قَالَ إِنَّ رَسُولَكُمُ
          ٱلَّذِيٓ أُرۡسِلَ إِلَيۡكُمۡ لَمَجۡنُونٞ
          <span className="numberTheme"> (27) </span> قَالَ رَبُّ ٱلۡمَشۡرِقِ
          وَٱلۡمَغۡرِبِ وَمَا بَيۡنَهُمَآۖ إِن كُنتُمۡ تَعۡقِلُونَ
          <span className="numberTheme"> (28) </span> قَالَ لَئِنِ ٱتَّخَذۡتَ
          إِلَٰهًا غَيۡرِي لَأَجۡعَلَنَّكَ مِنَ ٱلۡمَسۡجُونِينَ
          <span className="numberTheme"> (29) </span>
          قَالَ أَوَلَوۡ جِئۡتُكَ بِشَيۡءٖ مُّبِينٖ
          <span className="numberTheme"> (30) </span> قَالَ فَأۡتِ بِهِۦٓ إِن
          كُنتَ مِنَ ٱلصَّٰدِقِينَ
          <span className="numberTheme"> (31) </span> فَأَلۡقَىٰ عَصَاهُ فَإِذَا
          هِيَ ثُعۡبَانٞ مُّبِينٞ
          <span className="numberTheme"> (32) </span> وَنَزَعَ يَدَهُۥ فَإِذَا
          هِيَ بَيۡضَآءُ لِلنَّٰظِرِينَ
          <span className="numberTheme"> (33) </span> قَالَ لِلۡمَلَإِ
          حَوۡلَهُۥٓ إِنَّ هَٰذَا لَسَٰحِرٌ عَلِيمٞ
          <span className="numberTheme"> (34) </span> يُرِيدُ أَن يُخۡرِجَكُم
          مِّنۡ أَرۡضِكُم بِسِحۡرِهِۦ فَمَاذَا تَأۡمُرُونَ
          <span className="numberTheme"> (35) </span> قَالُوٓاْ أَرۡجِهۡ
          وَأَخَاهُ وَٱبۡعَثۡ فِي ٱلۡمَدَآئِنِ حَٰشِرِينَ
          <span className="numberTheme"> (36) </span> يَأۡتُوكَ بِكُلِّ سَحَّارٍ
          عَلِيمٖ
          <span className="numberTheme"> (37) </span>
          فَجُمِعَ ٱلسَّحَرَةُ لِمِيقَٰتِ يَوۡمٖ مَّعۡلُومٖ
          <span className="numberTheme"> (38) </span> وَقِيلَ لِلنَّاسِ هَلۡ
          أَنتُم مُّجۡتَمِعُونَ
          <span className="numberTheme"> (39) </span> لَعَلَّنَا نَتَّبِعُ
          ٱلسَّحَرَةَ إِن كَانُواْ هُمُ ٱلۡغَٰلِبِينَ
          <span className="numberTheme"> (40) </span> فَلَمَّا جَآءَ
          ٱلسَّحَرَةُ قَالُواْ لِفِرۡعَوۡنَ أَئِنَّ لَنَا لَأَجۡرًا إِن كُنَّا
          نَحۡنُ ٱلۡغَٰلِبِينَ
          <span className="numberTheme"> (41) </span> قَالَ نَعَمۡ وَإِنَّكُمۡ
          إِذٗا لَّمِنَ ٱلۡمُقَرَّبِينَ
          <span className="numberTheme"> (42) </span> قَالَ لَهُم مُّوسَىٰٓ
          أَلۡقُواْ مَآ أَنتُم مُّلۡقُونَ
          <span className="numberTheme"> (43) </span> فَأَلۡقَوۡاْ حِبَالَهُمۡ
          وَعِصِيَّهُمۡ وَقَالُواْ بِعِزَّةِ فِرۡعَوۡنَ إِنَّا لَنَحۡنُ
          ٱلۡغَٰلِبُونَ
          <span className="numberTheme"> (44) </span> فَأَلۡقَىٰ مُوسَىٰ عَصَاهُ
          فَإِذَا هِيَ تَلۡقَفُ مَا يَأۡفِكُونَ
          <span className="numberTheme"> (45) </span> فَأُلۡقِيَ ٱلسَّحَرَةُ
          سَٰجِدِينَ
          <span className="numberTheme"> (46) </span> قَالُوٓاْ ءَامَنَّا
          بِرَبِّ ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (47) </span> رَبِّ مُوسَىٰ وَهَٰرُونَ
          <span className="numberTheme"> (48) </span> قَالَ ءَامَنتُمۡ لَهُۥ
          قَبۡلَ أَنۡ ءَاذَنَ لَكُمۡۖ إِنَّهُۥ لَكَبِيرُكُمُ ٱلَّذِي عَلَّمَكُمُ
          ٱلسِّحۡرَ فَلَسَوۡفَ تَعۡلَمُونَۚ لَأُقَطِّعَنَّ أَيۡدِيَكُمۡ
          وَأَرۡجُلَكُم مِّنۡ خِلَٰفٖ وَلَأُصَلِّبَنَّكُمۡ أَجۡمَعِينَ
          <span className="numberTheme"> (49) </span> قَالُواْ لَا ضَيۡرَۖ
          إِنَّآ إِلَىٰ رَبِّنَا مُنقَلِبُونَ
          <span className="numberTheme"> (50) </span> إِنَّا نَطۡمَعُ أَن
          يَغۡفِرَ لَنَا رَبُّنَا خَطَٰيَٰنَآ أَن كُنَّآ أَوَّلَ
          ٱلۡمُؤۡمِنِينَ
          <span className="numberTheme"> (51) </span>
          <span className="partTheme"> ۞ </span>وَأَوۡحَيۡنَآ إِلَىٰ مُوسَىٰٓ
          أَنۡ أَسۡرِ بِعِبَادِيٓ إِنَّكُم مُّتَّبَعُونَ
          <span className="numberTheme"> (52) </span> فَأَرۡسَلَ فِرۡعَوۡنُ فِي
          ٱلۡمَدَآئِنِ حَٰشِرِينَ
          <span className="numberTheme"> (53) </span> إِنَّ هَٰٓؤُلَآءِ
          لَشِرۡذِمَةٞ قَلِيلُونَ
          <span className="numberTheme"> (54) </span> وَإِنَّهُمۡ لَنَا
          لَغَآئِظُونَ
          <span className="numberTheme"> (55) </span> وَإِنَّا لَجَمِيعٌ
          حَٰذِرُونَ
          <span className="numberTheme"> (56) </span> فَأَخۡرَجۡنَٰهُم مِّن
          جَنَّٰتٖ وَعُيُونٖ
          <span className="numberTheme"> (57) </span> وَكُنُوزٖ وَمَقَامٖ
          كَرِيمٖ
          <span className="numberTheme"> (58) </span> كَذَٰلِكَۖ
          وَأَوۡرَثۡنَٰهَا بَنِيٓ إِسۡرَٰٓءِيلَ
          <span className="numberTheme"> (59) </span> فَأَتۡبَعُوهُم
          مُّشۡرِقِينَ
          <span className="numberTheme"> (60) </span> فَلَمَّا تَرَٰٓءَا
          ٱلۡجَمۡعَانِ قَالَ أَصۡحَٰبُ مُوسَىٰٓ إِنَّا لَمُدۡرَكُونَ
          <span className="numberTheme"> (61) </span> قَالَ كَلَّآۖ إِنَّ
          مَعِيَ رَبِّي سَيَهۡدِينِ
          <span className="numberTheme"> (62) </span>
          فَأَوۡحَيۡنَآ إِلَىٰ مُوسَىٰٓ أَنِ ٱضۡرِب بِّعَصَاكَ ٱلۡبَحۡرَۖ
          فَٱنفَلَقَ فَكَانَ كُلُّ فِرۡقٖ كَٱلطَّوۡدِ ٱلۡعَظِيمِ
          <span className="numberTheme"> (63) </span>
          وَأَزۡلَفۡنَا ثَمَّ ٱلۡأٓخَرِينَ
          <span className="numberTheme"> (64) </span> وَأَنجَيۡنَا مُوسَىٰ وَمَن
          مَّعَهُۥٓ أَجۡمَعِينَ
          <span className="numberTheme"> (65) </span> ثُمَّ أَغۡرَقۡنَا
          ٱلۡأٓخَرِينَ
          <span className="numberTheme"> (66) </span> إِنَّ فِي ذَٰلِكَ
          لَأٓيَةٗۖ وَمَا كَانَ أَكۡثَرُهُم مُّؤۡمِنِينَ
          <span className="numberTheme"> (67) </span>
          وَإِنَّ رَبَّكَ لَهُوَ ٱلۡعَزِيزُ ٱلرَّحِيمُ
          <span className="numberTheme"> (68) </span> وَٱتۡلُ عَلَيۡهِمۡ نَبَأَ
          إِبۡرَٰهِيمَ
          <span className="numberTheme"> (69) </span> إِذۡ قَالَ لِأَبِيهِ
          وَقَوۡمِهِۦ مَا تَعۡبُدُونَ
          <span className="numberTheme"> (70) </span> قَالُواْ نَعۡبُدُ
          أَصۡنَامٗا فَنَظَلُّ لَهَا عَٰكِفِينَ
          <span className="numberTheme"> (71) </span> قَالَ هَلۡ يَسۡمَعُونَكُمۡ
          إِذۡ تَدۡعُونَ
          <span className="numberTheme"> (72) </span> أَوۡ يَنفَعُونَكُمۡ أَوۡ
          يَضُرُّونَ
          <span className="numberTheme"> (73) </span> قَالُواْ بَلۡ وَجَدۡنَآ
          ءَابَآءَنَا كَذَٰلِكَ يَفۡعَلُونَ
          <span className="numberTheme"> (74) </span> قَالَ أَفَرَءَيۡتُم مَّا
          كُنتُمۡ تَعۡبُدُونَ
          <span className="numberTheme"> (75) </span> أَنتُمۡ وَءَابَآؤُكُمُ
          ٱلۡأَقۡدَمُونَ
          <span className="numberTheme"> (76) </span>
          فَإِنَّهُمۡ عَدُوّٞ لِّيٓ إِلَّا رَبَّ ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (77) </span> ٱلَّذِي خَلَقَنِي فَهُوَ
          يَهۡدِينِ
          <span className="numberTheme"> (78) </span> وَٱلَّذِي هُوَ يُطۡعِمُنِي
          وَيَسۡقِينِ
          <span className="numberTheme"> (79) </span> وَإِذَا مَرِضۡتُ فَهُوَ
          يَشۡفِينِ
          <span className="numberTheme"> (80) </span> وَٱلَّذِي يُمِيتُنِي ثُمَّ
          يُحۡيِينِ
          <span className="numberTheme"> (81) </span> وَٱلَّذِيٓ أَطۡمَعُ أَن
          يَغۡفِرَ لِي خَطِيٓـَٔتِي يَوۡمَ ٱلدِّينِ
          <span className="numberTheme"> (82) </span> رَبِّ هَبۡ لِي حُكۡمٗا
          وَأَلۡحِقۡنِي بِٱلصَّٰلِحِينَ
          <span className="numberTheme"> (83) </span> وَٱجۡعَل لِّي لِسَانَ
          صِدۡقٖ فِي ٱلۡأٓخِرِينَ
          <span className="numberTheme"> (84) </span> وَٱجۡعَلۡنِي مِن وَرَثَةِ
          جَنَّةِ ٱلنَّعِيمِ
          <span className="numberTheme"> (85) </span> وَٱغۡفِرۡ لِأَبِيٓ
          إِنَّهُۥ كَانَ مِنَ ٱلضَّآلِّينَ
          <span className="numberTheme"> (86) </span> وَلَا تُخۡزِنِي يَوۡمَ
          يُبۡعَثُونَ
          <span className="numberTheme"> (87) </span> يَوۡمَ لَا يَنفَعُ مَالٞ
          وَلَا بَنُونَ
          <span className="numberTheme"> (88) </span> إِلَّا مَنۡ أَتَى ٱللَّهَ
          بِقَلۡبٖ سَلِيمٖ
          <span className="numberTheme"> (89) </span> وَأُزۡلِفَتِ ٱلۡجَنَّةُ
          لِلۡمُتَّقِينَ
          <span className="numberTheme"> (90) </span> وَبُرِّزَتِ ٱلۡجَحِيمُ
          لِلۡغَاوِينَ
          <span className="numberTheme"> (91) </span> وَقِيلَ لَهُمۡ أَيۡنَ مَا
          كُنتُمۡ تَعۡبُدُونَ
          <span className="numberTheme"> (92) </span> مِن دُونِ ٱللَّهِ هَلۡ
          يَنصُرُونَكُمۡ أَوۡ يَنتَصِرُونَ
          <span className="numberTheme"> (93) </span> فَكُبۡكِبُواْ فِيهَا هُمۡ
          وَٱلۡغَاوُۥنَ
          <span className="numberTheme"> (94) </span> وَجُنُودُ إِبۡلِيسَ
          أَجۡمَعُونَ
          <span className="numberTheme"> (95) </span> قَالُواْ وَهُمۡ فِيهَا
          يَخۡتَصِمُونَ
          <span className="numberTheme"> (96) </span> تَٱللَّهِ إِن كُنَّا لَفِي
          ضَلَٰلٖ مُّبِينٍ
          <span className="numberTheme"> (97) </span> إِذۡ نُسَوِّيكُم بِرَبِّ
          ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (98) </span> وَمَآ أَضَلَّنَآ إِلَّا
          ٱلۡمُجۡرِمُونَ
          <span className="numberTheme"> (99) </span> فَمَا لَنَا مِن شَٰفِعِينَ
          <span className="numberTheme"> (100) </span> وَلَا صَدِيقٍ حَمِيمٖ
          <span className="numberTheme"> (101) </span> فَلَوۡ أَنَّ لَنَا
          كَرَّةٗ فَنَكُونَ مِنَ ٱلۡمُؤۡمِنِينَ
          <span className="numberTheme"> (102) </span> إِنَّ فِي ذَٰلِكَ
          لَأٓيَةٗۖ وَمَا كَانَ أَكۡثَرُهُم مُّؤۡمِنِينَ
          <span className="numberTheme"> (103) </span> وَإِنَّ رَبَّكَ لَهُوَ
          ٱلۡعَزِيزُ ٱلرَّحِيمُ
          <span className="numberTheme"> (104) </span> كَذَّبَتۡ قَوۡمُ نُوحٍ
          ٱلۡمُرۡسَلِينَ
          <span className="numberTheme"> (105) </span> إِذۡ قَالَ لَهُمۡ
          أَخُوهُمۡ نُوحٌ أَلَا تَتَّقُونَ
          <span className="numberTheme"> (106) </span> إِنِّي لَكُمۡ رَسُولٌ
          أَمِينٞ
          <span className="numberTheme"> (107) </span> فَٱتَّقُواْ ٱللَّهَ
          وَأَطِيعُونِ
          <span className="numberTheme"> (108) </span> وَمَآ أَسۡـَٔلُكُمۡ
          عَلَيۡهِ مِنۡ أَجۡرٍۖ إِنۡ أَجۡرِيَ إِلَّا عَلَىٰ رَبِّ ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (109) </span> فَٱتَّقُواْ ٱللَّهَ
          وَأَطِيعُونِ
          <span className="numberTheme"> (110) </span>
          <span className="partTheme"> ۞ </span>قَالُوٓاْ أَنُؤۡمِنُ لَكَ
          وَٱتَّبَعَكَ ٱلۡأَرۡذَلُونَ
          <span className="numberTheme"> (111) </span> قَالَ وَمَا عِلۡمِي بِمَا
          كَانُواْ يَعۡمَلُونَ
          <span className="numberTheme"> (112) </span> إِنۡ حِسَابُهُمۡ إِلَّا
          عَلَىٰ رَبِّيۖ لَوۡ تَشۡعُرُونَ
          <span className="numberTheme"> (113) </span> وَمَآ أَنَا۠ بِطَارِدِ
          ٱلۡمُؤۡمِنِينَ
          <span className="numberTheme"> (114) </span> إِنۡ أَنَا۠ إِلَّا
          نَذِيرٞ مُّبِينٞ
          <span className="numberTheme"> (115) </span> قَالُواْ لَئِن لَّمۡ
          تَنتَهِ يَٰنُوحُ لَتَكُونَنَّ مِنَ ٱلۡمَرۡجُومِينَ
          <span className="numberTheme"> (116) </span> قَالَ رَبِّ إِنَّ قَوۡمِي
          كَذَّبُونِ
          <span className="numberTheme"> (117) </span> فَٱفۡتَحۡ بَيۡنِي
          وَبَيۡنَهُمۡ فَتۡحٗا وَنَجِّنِي وَمَن مَّعِيَ مِنَ ٱلۡمُؤۡمِنِينَ
          <span className="numberTheme"> (118) </span> فَأَنجَيۡنَٰهُ وَمَن
          مَّعَهُۥ فِي ٱلۡفُلۡكِ ٱلۡمَشۡحُونِ
          <span className="numberTheme"> (119) </span> ثُمَّ أَغۡرَقۡنَا بَعۡدُ
          ٱلۡبَاقِينَ
          <span className="numberTheme"> (120) </span> إِنَّ فِي ذَٰلِكَ
          لَأٓيَةٗۖ وَمَا كَانَ أَكۡثَرُهُم مُّؤۡمِنِينَ
          <span className="numberTheme"> (121) </span> وَإِنَّ رَبَّكَ لَهُوَ
          ٱلۡعَزِيزُ ٱلرَّحِيمُ
          <span className="numberTheme"> (122) </span> كَذَّبَتۡ عَادٌ
          ٱلۡمُرۡسَلِينَ
          <span className="numberTheme"> (123) </span> إِذۡ قَالَ لَهُمۡ
          أَخُوهُمۡ هُودٌ أَلَا تَتَّقُونَ
          <span className="numberTheme"> (124) </span> إِنِّي لَكُمۡ رَسُولٌ
          أَمِينٞ
          <span className="numberTheme"> (125) </span> فَٱتَّقُواْ ٱللَّهَ
          وَأَطِيعُونِ
          <span className="numberTheme"> (126) </span> وَمَآ أَسۡـَٔلُكُمۡ
          عَلَيۡهِ مِنۡ أَجۡرٍۖ إِنۡ أَجۡرِيَ إِلَّا عَلَىٰ رَبِّ ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (127) </span> أَتَبۡنُونَ بِكُلِّ رِيعٍ
          ءَايَةٗ تَعۡبَثُونَ
          <span className="numberTheme"> (128) </span> وَتَتَّخِذُونَ مَصَانِعَ
          لَعَلَّكُمۡ تَخۡلُدُونَ
          <span className="numberTheme"> (129) </span> وَإِذَا بَطَشۡتُم
          بَطَشۡتُمۡ جَبَّارِينَ
          <span className="numberTheme"> (130) </span> فَٱتَّقُواْ ٱللَّهَ
          وَأَطِيعُونِ
          <span className="numberTheme"> (131) </span> وَٱتَّقُواْ ٱلَّذِيٓ
          أَمَدَّكُم بِمَا تَعۡلَمُونَ
          <span className="numberTheme"> (132) </span> أَمَدَّكُم بِأَنۡعَٰمٖ
          وَبَنِينَ
          <span className="numberTheme"> (133) </span> وَجَنَّٰتٖ وَعُيُونٍ
          <span className="numberTheme"> (134) </span> إِنِّيٓ أَخَافُ
          عَلَيۡكُمۡ عَذَابَ يَوۡمٍ عَظِيمٖ
          <span className="numberTheme"> (135) </span> قَالُواْ سَوَآءٌ
          عَلَيۡنَآ أَوَعَظۡتَ أَمۡ لَمۡ تَكُن مِّنَ ٱلۡوَٰعِظِينَ
          <span className="numberTheme"> (136) </span> إِنۡ هَٰذَآ إِلَّا
          خُلُقُ ٱلۡأَوَّلِينَ
          <span className="numberTheme"> (137) </span> وَمَا نَحۡنُ
          بِمُعَذَّبِينَ
          <span className="numberTheme"> (138) </span> فَكَذَّبُوهُ
          فَأَهۡلَكۡنَٰهُمۡۚ إِنَّ فِي ذَٰلِكَ لَأٓيَةٗۖ وَمَا كَانَ أَكۡثَرُهُم
          مُّؤۡمِنِينَ
          <span className="numberTheme"> (139) </span> وَإِنَّ رَبَّكَ لَهُوَ
          ٱلۡعَزِيزُ ٱلرَّحِيمُ
          <span className="numberTheme"> (140) </span> كَذَّبَتۡ ثَمُودُ
          ٱلۡمُرۡسَلِينَ
          <span className="numberTheme"> (141) </span> إِذۡ قَالَ لَهُمۡ
          أَخُوهُمۡ صَٰلِحٌ أَلَا تَتَّقُونَ
          <span className="numberTheme"> (142) </span>
          إِنِّي لَكُمۡ رَسُولٌ أَمِينٞ
          <span className="numberTheme"> (143) </span> فَٱتَّقُواْ ٱللَّهَ
          وَأَطِيعُونِ
          <span className="numberTheme"> (144) </span> وَمَآ أَسۡـَٔلُكُمۡ
          عَلَيۡهِ مِنۡ أَجۡرٍۖ إِنۡ أَجۡرِيَ إِلَّا عَلَىٰ رَبِّ ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (145) </span> أَتُتۡرَكُونَ فِي مَا
          هَٰهُنَآ ءَامِنِينَ
          <span className="numberTheme"> (146) </span> فِي جَنَّٰتٖ وَعُيُونٖ
          <span className="numberTheme"> (147) </span> وَزُرُوعٖ وَنَخۡلٖ
          طَلۡعُهَا هَضِيمٞ
          <span className="numberTheme"> (148) </span> وَتَنۡحِتُونَ مِنَ
          ٱلۡجِبَالِ بُيُوتٗا فَٰرِهِينَ
          <span className="numberTheme"> (149) </span> فَٱتَّقُواْ ٱللَّهَ
          وَأَطِيعُونِ
          <span className="numberTheme"> (150) </span> وَلَا تُطِيعُوٓاْ أَمۡرَ
          ٱلۡمُسۡرِفِينَ
          <span className="numberTheme"> (151) </span> ٱلَّذِينَ يُفۡسِدُونَ فِي
          ٱلۡأَرۡضِ وَلَا يُصۡلِحُونَ
          <span className="numberTheme"> (152) </span> قَالُوٓاْ إِنَّمَآ أَنتَ
          مِنَ ٱلۡمُسَحَّرِينَ
          <span className="numberTheme"> (153) </span> مَآ أَنتَ إِلَّا بَشَرٞ
          مِّثۡلُنَا فَأۡتِ بِـَٔايَةٍ إِن كُنتَ مِنَ ٱلصَّٰدِقِينَ
          <span className="numberTheme"> (154) </span> قَالَ هَٰذِهِۦ نَاقَةٞ
          لَّهَا شِرۡبٞ وَلَكُمۡ شِرۡبُ يَوۡمٖ مَّعۡلُومٖ
          <span className="numberTheme"> (155) </span> وَلَا تَمَسُّوهَا
          بِسُوٓءٖ فَيَأۡخُذَكُمۡ عَذَابُ يَوۡمٍ عَظِيمٖ
          <span className="numberTheme"> (156) </span>
          فَعَقَرُوهَا فَأَصۡبَحُواْ نَٰدِمِينَ
          <span className="numberTheme"> (157) </span> فَأَخَذَهُمُ ٱلۡعَذَابُۚ
          إِنَّ فِي ذَٰلِكَ لَأٓيَةٗۖ وَمَا كَانَ أَكۡثَرُهُم مُّؤۡمِنِينَ
          <span className="numberTheme"> (158) </span>
          وَإِنَّ رَبَّكَ لَهُوَ ٱلۡعَزِيزُ ٱلرَّحِيمُ
          <span className="numberTheme"> (159) </span> كَذَّبَتۡ قَوۡمُ لُوطٍ
          ٱلۡمُرۡسَلِينَ
          <span className="numberTheme"> (160) </span> إِذۡ قَالَ لَهُمۡ
          أَخُوهُمۡ لُوطٌ أَلَا تَتَّقُونَ
          <span className="numberTheme"> (161) </span> إِنِّي لَكُمۡ رَسُولٌ
          أَمِينٞ
          <span className="numberTheme"> (162) </span> فَٱتَّقُواْ ٱللَّهَ
          وَأَطِيعُونِ
          <span className="numberTheme"> (163) </span> وَمَآ أَسۡـَٔلُكُمۡ
          عَلَيۡهِ مِنۡ أَجۡرٍۖ إِنۡ أَجۡرِيَ إِلَّا عَلَىٰ رَبِّ ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (164) </span> أَتَأۡتُونَ ٱلذُّكۡرَانَ
          مِنَ ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (165) </span> وَتَذَرُونَ مَا خَلَقَ
          لَكُمۡ رَبُّكُم مِّنۡ أَزۡوَٰجِكُمۚ بَلۡ أَنتُمۡ قَوۡمٌ عَادُونَ
          <span className="numberTheme"> (166) </span>
          قَالُواْ لَئِن لَّمۡ تَنتَهِ يَٰلُوطُ لَتَكُونَنَّ مِنَ ٱلۡمُخۡرَجِينَ
          <span className="numberTheme"> (167) </span> قَالَ إِنِّي لِعَمَلِكُم
          مِّنَ ٱلۡقَالِينَ
          <span className="numberTheme"> (168) </span> رَبِّ نَجِّنِي وَأَهۡلِي
          مِمَّا يَعۡمَلُونَ
          <span className="numberTheme"> (169) </span> فَنَجَّيۡنَٰهُ
          وَأَهۡلَهُۥٓ أَجۡمَعِينَ
          <span className="numberTheme"> (170) </span> إِلَّا عَجُوزٗا فِي
          ٱلۡغَٰبِرِينَ
          <span className="numberTheme"> (171) </span> ثُمَّ دَمَّرۡنَا
          ٱلۡأٓخَرِينَ
          <span className="numberTheme"> (172) </span> وَأَمۡطَرۡنَا عَلَيۡهِم
          مَّطَرٗاۖ فَسَآءَ مَطَرُ ٱلۡمُنذَرِينَ
          <span className="numberTheme"> (173) </span> إِنَّ فِي ذَٰلِكَ
          لَأٓيَةٗۖ وَمَا كَانَ أَكۡثَرُهُم مُّؤۡمِنِينَ
          <span className="numberTheme"> (174) </span> وَإِنَّ رَبَّكَ لَهُوَ
          ٱلۡعَزِيزُ ٱلرَّحِيمُ
          <span className="numberTheme"> (175) </span> كَذَّبَ أَصۡحَٰبُ
          لۡـَٔيۡكَةِ ٱلۡمُرۡسَلِينَ
          <span className="numberTheme"> (176) </span>
          إِذۡ قَالَ لَهُمۡ شُعَيۡبٌ أَلَا تَتَّقُونَ
          <span className="numberTheme"> (177) </span> إِنِّي لَكُمۡ رَسُولٌ
          أَمِينٞ
          <span className="numberTheme"> (178) </span> فَٱتَّقُواْ ٱللَّهَ
          وَأَطِيعُونِ
          <span className="numberTheme"> (179) </span> وَمَآ أَسۡـَٔلُكُمۡ
          عَلَيۡهِ مِنۡ أَجۡرٍۖ إِنۡ أَجۡرِيَ إِلَّا عَلَىٰ رَبِّ ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (180) </span>
          <span className="partTheme"> ۞ </span>أَوۡفُواْ ٱلۡكَيۡلَ وَلَا
          تَكُونُواْ مِنَ ٱلۡمُخۡسِرِينَ
          <span className="numberTheme"> (181) </span> وَزِنُواْ بِٱلۡقِسۡطَاسِ
          ٱلۡمُسۡتَقِيمِ
          <span className="numberTheme"> (182) </span>
          وَلَا تَبۡخَسُواْ ٱلنَّاسَ أَشۡيَآءَهُمۡ وَلَا تَعۡثَوۡاْ فِي
          ٱلۡأَرۡضِ مُفۡسِدِينَ
          <span className="numberTheme"> (183) </span> وَٱتَّقُواْ ٱلَّذِي
          خَلَقَكُمۡ وَٱلۡجِبِلَّةَ ٱلۡأَوَّلِينَ
          <span className="numberTheme"> (184) </span> قَالُوٓاْ إِنَّمَآ أَنتَ
          مِنَ ٱلۡمُسَحَّرِينَ
          <span className="numberTheme"> (185) </span> وَمَآ أَنتَ إِلَّا
          بَشَرٞ مِّثۡلُنَا وَإِن نَّظُنُّكَ لَمِنَ ٱلۡكَٰذِبِينَ
          <span className="numberTheme"> (186) </span> فَأَسۡقِطۡ عَلَيۡنَا
          كِسَفٗا مِّنَ ٱلسَّمَآءِ إِن كُنتَ مِنَ ٱلصَّٰدِقِينَ
          <span className="numberTheme"> (187) </span> قَالَ رَبِّيٓ أَعۡلَمُ
          بِمَا تَعۡمَلُونَ
          <span className="numberTheme"> (188) </span> فَكَذَّبُوهُ فَأَخَذَهُمۡ
          عَذَابُ يَوۡمِ ٱلظُّلَّةِۚ إِنَّهُۥ كَانَ عَذَابَ يَوۡمٍ عَظِيمٍ
          <span className="numberTheme"> (189) </span> إِنَّ فِي ذَٰلِكَ
          لَأٓيَةٗۖ وَمَا كَانَ أَكۡثَرُهُم مُّؤۡمِنِينَ
          <span className="numberTheme"> (190) </span>
          وَإِنَّ رَبَّكَ لَهُوَ ٱلۡعَزِيزُ ٱلرَّحِيمُ
          <span className="numberTheme"> (191) </span> وَإِنَّهُۥ لَتَنزِيلُ
          رَبِّ ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (192) </span> نَزَلَ بِهِ ٱلرُّوحُ
          ٱلۡأَمِينُ
          <span className="numberTheme"> (193) </span> عَلَىٰ قَلۡبِكَ لِتَكُونَ
          مِنَ ٱلۡمُنذِرِينَ
          <span className="numberTheme"> (194) </span> بِلِسَانٍ عَرَبِيّٖ
          مُّبِينٖ
          <span className="numberTheme"> (195) </span> وَإِنَّهُۥ لَفِي زُبُرِ
          ٱلۡأَوَّلِينَ
          <span className="numberTheme"> (196) </span>
          أَوَ لَمۡ يَكُن لَّهُمۡ ءَايَةً أَن يَعۡلَمَهُۥ عُلَمَٰٓؤُاْ بَنِيٓ
          إِسۡرَٰٓءِيلَ
          <span className="numberTheme"> (197) </span> وَلَوۡ نَزَّلۡنَٰهُ
          عَلَىٰ بَعۡضِ ٱلۡأَعۡجَمِينَ
          <span className="numberTheme"> (198) </span> فَقَرَأَهُۥ عَلَيۡهِم
          مَّا كَانُواْ بِهِۦ مُؤۡمِنِينَ
          <span className="numberTheme"> (199) </span>
          كَذَٰلِكَ سَلَكۡنَٰهُ فِي قُلُوبِ ٱلۡمُجۡرِمِينَ
          <span className="numberTheme"> (200) </span> لَا يُؤۡمِنُونَ بِهِۦ
          حَتَّىٰ يَرَوُاْ ٱلۡعَذَابَ ٱلۡأَلِيمَ
          <span className="numberTheme"> (201) </span> فَيَأۡتِيَهُم بَغۡتَةٗ
          وَهُمۡ لَا يَشۡعُرُونَ
          <span className="numberTheme"> (202) </span> فَيَقُولُواْ هَلۡ نَحۡنُ
          مُنظَرُونَ
          <span className="numberTheme"> (203) </span> أَفَبِعَذَابِنَا
          يَسۡتَعۡجِلُونَ
          <span className="numberTheme"> (204) </span> أَفَرَءَيۡتَ إِن
          مَّتَّعۡنَٰهُمۡ سِنِينَ
          <span className="numberTheme"> (205) </span> ثُمَّ جَآءَهُم مَّا
          كَانُواْ يُوعَدُونَ
          <span className="numberTheme"> (206) </span> مَآ أَغۡنَىٰ عَنۡهُم
          مَّا كَانُواْ يُمَتَّعُونَ
          <span className="numberTheme"> (207) </span> وَمَآ أَهۡلَكۡنَا مِن
          قَرۡيَةٍ إِلَّا لَهَا مُنذِرُونَ
          <span className="numberTheme"> (208) </span>
          ذِكۡرَىٰ وَمَا كُنَّا ظَٰلِمِينَ
          <span className="numberTheme"> (209) </span> وَمَا تَنَزَّلَتۡ بِهِ
          ٱلشَّيَٰطِينُ
          <span className="numberTheme"> (210) </span> وَمَا يَنۢبَغِي لَهُمۡ
          وَمَا يَسۡتَطِيعُونَ
          <span className="numberTheme"> (211) </span>
          إِنَّهُمۡ عَنِ ٱلسَّمۡعِ لَمَعۡزُولُونَ
          <span className="numberTheme"> (212) </span> فَلَا تَدۡعُ مَعَ ٱللَّهِ
          إِلَٰهًا ءَاخَرَ فَتَكُونَ مِنَ ٱلۡمُعَذَّبِينَ
          <span className="numberTheme"> (213) </span>
          وَأَنذِرۡ عَشِيرَتَكَ ٱلۡأَقۡرَبِينَ
          <span className="numberTheme"> (214) </span> وَٱخۡفِضۡ جَنَاحَكَ
          لِمَنِ ٱتَّبَعَكَ مِنَ ٱلۡمُؤۡمِنِينَ
          <span className="numberTheme"> (215) </span> فَإِنۡ عَصَوۡكَ فَقُلۡ
          إِنِّي بَرِيٓءٞ مِّمَّا تَعۡمَلُونَ
          <span className="numberTheme"> (216) </span> وَتَوَكَّلۡ عَلَى
          ٱلۡعَزِيزِ ٱلرَّحِيمِ
          <span className="numberTheme"> (217) </span> ٱلَّذِي يَرَىٰكَ حِينَ
          تَقُومُ
          <span className="numberTheme"> (218) </span> وَتَقَلُّبَكَ فِي
          ٱلسَّٰجِدِينَ
          <span className="numberTheme"> (219) </span> إِنَّهُۥ هُوَ ٱلسَّمِيعُ
          ٱلۡعَلِيمُ
          <span className="numberTheme"> (220) </span> هَلۡ أُنَبِّئُكُمۡ عَلَىٰ
          مَن تَنَزَّلُ ٱلشَّيَٰطِينُ
          <span className="numberTheme"> (221) </span> تَنَزَّلُ عَلَىٰ كُلِّ
          أَفَّاكٍ أَثِيمٖ
          <span className="numberTheme"> (222) </span> يُلۡقُونَ ٱلسَّمۡعَ
          وَأَكۡثَرُهُمۡ كَٰذِبُونَ
          <span className="numberTheme"> (223) </span> وَٱلشُّعَرَآءُ
          يَتَّبِعُهُمُ ٱلۡغَاوُۥنَ
          <span className="numberTheme"> (224) </span>
          أَلَمۡ تَرَ أَنَّهُمۡ فِي كُلِّ وَادٖ يَهِيمُونَ
          <span className="numberTheme"> (225) </span> وَأَنَّهُمۡ يَقُولُونَ
          مَا لَا يَفۡعَلُونَ
          <span className="numberTheme"> (226) </span> إِلَّا ٱلَّذِينَ
          ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ وَذَكَرُواْ ٱللَّهَ كَثِيرٗا
          وَٱنتَصَرُواْ مِنۢ بَعۡدِ مَا ظُلِمُواْۗ وَسَيَعۡلَمُ ٱلَّذِينَ
          ظَلَمُوٓاْ أَيَّ مُنقَلَبٖ يَنقَلِبُونَ
          <span className="numberTheme"> (227) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default TwentySix;
