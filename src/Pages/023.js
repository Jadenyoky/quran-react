import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const TwentyThree = () => {
  return (
    <div>
      <Helmet>
        <title>023 - سورة المؤمنون</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة المؤمنون</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          قَدۡ أَفۡلَحَ ٱلۡمُؤۡمِنُونَ (1) ٱلَّذِينَ هُمۡ فِي صَلَاتِهِمۡ
          خَٰشِعُونَ (2) وَٱلَّذِينَ هُمۡ عَنِ ٱللَّغۡوِ مُعۡرِضُونَ (3)
          وَٱلَّذِينَ هُمۡ لِلزَّكَوٰةِ فَٰعِلُونَ (4) وَٱلَّذِينَ هُمۡ
          لِفُرُوجِهِمۡ حَٰفِظُونَ (5) إِلَّا عَلَىٰٓ أَزۡوَٰجِهِمۡ أَوۡ مَا
          مَلَكَتۡ أَيۡمَٰنُهُمۡ فَإِنَّهُمۡ غَيۡرُ مَلُومِينَ (6) فَمَنِ
          ٱبۡتَغَىٰ وَرَآءَ ذَٰلِكَ فَأُوْلَٰٓئِكَ هُمُ ٱلۡعَادُونَ (7)
          وَٱلَّذِينَ هُمۡ لِأَمَٰنَٰتِهِمۡ وَعَهۡدِهِمۡ رَٰعُونَ (8)
          وَٱلَّذِينَ هُمۡ عَلَىٰ صَلَوَٰتِهِمۡ يُحَافِظُونَ (9) أُوْلَٰٓئِكَ
          هُمُ ٱلۡوَٰرِثُونَ (10) ٱلَّذِينَ يَرِثُونَ ٱلۡفِرۡدَوۡسَ هُمۡ فِيهَا
          خَٰلِدُونَ (11) وَلَقَدۡ خَلَقۡنَا ٱلۡإِنسَٰنَ مِن سُلَٰلَةٖ مِّن
          طِينٖ (12) ثُمَّ جَعَلۡنَٰهُ نُطۡفَةٗ فِي قَرَارٖ مَّكِينٖ (13) ثُمَّ
          خَلَقۡنَا ٱلنُّطۡفَةَ عَلَقَةٗ فَخَلَقۡنَا ٱلۡعَلَقَةَ مُضۡغَةٗ
          فَخَلَقۡنَا ٱلۡمُضۡغَةَ عِظَٰمٗا فَكَسَوۡنَا ٱلۡعِظَٰمَ لَحۡمٗا ثُمَّ
          أَنشَأۡنَٰهُ خَلۡقًا ءَاخَرَۚ فَتَبَارَكَ ٱللَّهُ أَحۡسَنُ
          ٱلۡخَٰلِقِينَ (14) ثُمَّ إِنَّكُم بَعۡدَ ذَٰلِكَ لَمَيِّتُونَ (15)
          ثُمَّ إِنَّكُمۡ يَوۡمَ ٱلۡقِيَٰمَةِ تُبۡعَثُونَ (16) وَلَقَدۡ
          خَلَقۡنَا فَوۡقَكُمۡ سَبۡعَ طَرَآئِقَ وَمَا كُنَّا عَنِ ٱلۡخَلۡقِ
          غَٰفِلِينَ (17) وَأَنزَلۡنَا مِنَ ٱلسَّمَآءِ مَآءَۢ بِقَدَرٖ
          فَأَسۡكَنَّٰهُ فِي ٱلۡأَرۡضِۖ وَإِنَّا عَلَىٰ ذَهَابِۭ بِهِۦ
          لَقَٰدِرُونَ (18) فَأَنشَأۡنَا لَكُم بِهِۦ جَنَّٰتٖ مِّن نَّخِيلٖ
          وَأَعۡنَٰبٖ لَّكُمۡ فِيهَا فَوَٰكِهُ كَثِيرَةٞ وَمِنۡهَا تَأۡكُلُونَ
          (19) وَشَجَرَةٗ تَخۡرُجُ مِن طُورِ سَيۡنَآءَ تَنۢبُتُ بِٱلدُّهۡنِ
          وَصِبۡغٖ لِّلۡأٓكِلِينَ (20) وَإِنَّ لَكُمۡ فِي ٱلۡأَنۡعَٰمِ
          لَعِبۡرَةٗۖ نُّسۡقِيكُم مِّمَّا فِي بُطُونِهَا وَلَكُمۡ فِيهَا
          مَنَٰفِعُ كَثِيرَةٞ وَمِنۡهَا تَأۡكُلُونَ (21) وَعَلَيۡهَا وَعَلَى
          ٱلۡفُلۡكِ تُحۡمَلُونَ (22) وَلَقَدۡ أَرۡسَلۡنَا نُوحًا إِلَىٰ
          قَوۡمِهِۦ فَقَالَ يَٰقَوۡمِ ٱعۡبُدُواْ ٱللَّهَ مَا لَكُم مِّنۡ إِلَٰهٍ
          غَيۡرُهُۥٓۚ أَفَلَا تَتَّقُونَ (23) فَقَالَ ٱلۡمَلَؤُاْ ٱلَّذِينَ
          كَفَرُواْ مِن قَوۡمِهِۦ مَا هَٰذَآ إِلَّا بَشَرٞ مِّثۡلُكُمۡ يُرِيدُ
          أَن يَتَفَضَّلَ عَلَيۡكُمۡ وَلَوۡ شَآءَ ٱللَّهُ لَأَنزَلَ
          مَلَٰٓئِكَةٗ مَّا سَمِعۡنَا بِهَٰذَا فِيٓ ءَابَآئِنَا ٱلۡأَوَّلِينَ
          (24) إِنۡ هُوَ إِلَّا رَجُلُۢ بِهِۦ جِنَّةٞ فَتَرَبَّصُواْ بِهِۦ
          حَتَّىٰ حِينٖ (25) قَالَ رَبِّ ٱنصُرۡنِي بِمَا كَذَّبُونِ (26)
          فَأَوۡحَيۡنَآ إِلَيۡهِ أَنِ ٱصۡنَعِ ٱلۡفُلۡكَ بِأَعۡيُنِنَا
          وَوَحۡيِنَا فَإِذَا جَآءَ أَمۡرُنَا وَفَارَ ٱلتَّنُّورُ فَٱسۡلُكۡ
          فِيهَا مِن كُلّٖ زَوۡجَيۡنِ ٱثۡنَيۡنِ وَأَهۡلَكَ إِلَّا مَن سَبَقَ
          عَلَيۡهِ ٱلۡقَوۡلُ مِنۡهُمۡۖ وَلَا تُخَٰطِبۡنِي فِي ٱلَّذِينَ
          ظَلَمُوٓاْ إِنَّهُم مُّغۡرَقُونَ (27) فَإِذَا ٱسۡتَوَيۡتَ أَنتَ وَمَن
          مَّعَكَ عَلَى ٱلۡفُلۡكِ فَقُلِ ٱلۡحَمۡدُ لِلَّهِ ٱلَّذِي نَجَّىٰنَا
          مِنَ ٱلۡقَوۡمِ ٱلظَّٰلِمِينَ (28) وَقُل رَّبِّ أَنزِلۡنِي مُنزَلٗا
          مُّبَارَكٗا وَأَنتَ خَيۡرُ ٱلۡمُنزِلِينَ (29) إِنَّ فِي ذَٰلِكَ
          لَأٓيَٰتٖ وَإِن كُنَّا لَمُبۡتَلِينَ (30) ثُمَّ أَنشَأۡنَا مِنۢ
          بَعۡدِهِمۡ قَرۡنًا ءَاخَرِينَ (31) فَأَرۡسَلۡنَا فِيهِمۡ رَسُولٗا
          مِّنۡهُمۡ أَنِ ٱعۡبُدُواْ ٱللَّهَ مَا لَكُم مِّنۡ إِلَٰهٍ غَيۡرُهُۥٓۚ
          أَفَلَا تَتَّقُونَ (32) وَقَالَ ٱلۡمَلَأُ مِن قَوۡمِهِ ٱلَّذِينَ
          كَفَرُواْ وَكَذَّبُواْ بِلِقَآءِ ٱلۡأٓخِرَةِ وَأَتۡرَفۡنَٰهُمۡ فِي
          ٱلۡحَيَوٰةِ ٱلدُّنۡيَا مَا هَٰذَآ إِلَّا بَشَرٞ مِّثۡلُكُمۡ يَأۡكُلُ
          مِمَّا تَأۡكُلُونَ مِنۡهُ وَيَشۡرَبُ مِمَّا تَشۡرَبُونَ (33) وَلَئِنۡ
          أَطَعۡتُم بَشَرٗا مِّثۡلَكُمۡ إِنَّكُمۡ إِذٗا لَّخَٰسِرُونَ (34)
          أَيَعِدُكُمۡ أَنَّكُمۡ إِذَا مِتُّمۡ وَكُنتُمۡ تُرَابٗا وَعِظَٰمًا
          أَنَّكُم مُّخۡرَجُونَ (35) ۞هَيۡهَاتَ هَيۡهَاتَ لِمَا تُوعَدُونَ (36)
          إِنۡ هِيَ إِلَّا حَيَاتُنَا ٱلدُّنۡيَا نَمُوتُ وَنَحۡيَا وَمَا نَحۡنُ
          بِمَبۡعُوثِينَ (37) إِنۡ هُوَ إِلَّا رَجُلٌ ٱفۡتَرَىٰ عَلَى ٱللَّهِ
          كَذِبٗا وَمَا نَحۡنُ لَهُۥ بِمُؤۡمِنِينَ (38) قَالَ رَبِّ ٱنصُرۡنِي
          بِمَا كَذَّبُونِ (39) قَالَ عَمَّا قَلِيلٖ لَّيُصۡبِحُنَّ نَٰدِمِينَ
          (40) فَأَخَذَتۡهُمُ ٱلصَّيۡحَةُ بِٱلۡحَقِّ فَجَعَلۡنَٰهُمۡ غُثَآءٗۚ
          فَبُعۡدٗا لِّلۡقَوۡمِ ٱلظَّٰلِمِينَ (41) ثُمَّ أَنشَأۡنَا مِنۢ
          بَعۡدِهِمۡ قُرُونًا ءَاخَرِينَ (42) مَا تَسۡبِقُ مِنۡ أُمَّةٍ
          أَجَلَهَا وَمَا يَسۡتَـٔۡخِرُونَ (43) ثُمَّ أَرۡسَلۡنَا رُسُلَنَا
          تَتۡرَاۖ كُلَّ مَا جَآءَ أُمَّةٗ رَّسُولُهَا كَذَّبُوهُۖ
          فَأَتۡبَعۡنَا بَعۡضَهُم بَعۡضٗا وَجَعَلۡنَٰهُمۡ أَحَادِيثَۚ فَبُعۡدٗا
          لِّقَوۡمٖ لَّا يُؤۡمِنُونَ (44) ثُمَّ أَرۡسَلۡنَا مُوسَىٰ وَأَخَاهُ
          هَٰرُونَ بِـَٔايَٰتِنَا وَسُلۡطَٰنٖ مُّبِينٍ (45) إِلَىٰ فِرۡعَوۡنَ
          وَمَلَإِيْهِۦ فَٱسۡتَكۡبَرُواْ وَكَانُواْ قَوۡمًا عَالِينَ (46)
          فَقَالُوٓاْ أَنُؤۡمِنُ لِبَشَرَيۡنِ مِثۡلِنَا وَقَوۡمُهُمَا لَنَا
          عَٰبِدُونَ (47) فَكَذَّبُوهُمَا فَكَانُواْ مِنَ ٱلۡمُهۡلَكِينَ (48)
          وَلَقَدۡ ءَاتَيۡنَا مُوسَى ٱلۡكِتَٰبَ لَعَلَّهُمۡ يَهۡتَدُونَ (49)
          وَجَعَلۡنَا ٱبۡنَ مَرۡيَمَ وَأُمَّهُۥٓ ءَايَةٗ وَءَاوَيۡنَٰهُمَآ
          إِلَىٰ رَبۡوَةٖ ذَاتِ قَرَارٖ وَمَعِينٖ (50) يَٰٓأَيُّهَا ٱلرُّسُلُ
          كُلُواْ مِنَ ٱلطَّيِّبَٰتِ وَٱعۡمَلُواْ صَٰلِحًاۖ إِنِّي بِمَا
          تَعۡمَلُونَ عَلِيمٞ (51) وَإِنَّ هَٰذِهِۦٓ أُمَّتُكُمۡ أُمَّةٗ
          وَٰحِدَةٗ وَأَنَا۠ رَبُّكُمۡ فَٱتَّقُونِ (52) فَتَقَطَّعُوٓاْ
          أَمۡرَهُم بَيۡنَهُمۡ زُبُرٗاۖ كُلُّ حِزۡبِۭ بِمَا لَدَيۡهِمۡ فَرِحُونَ
          (53) فَذَرۡهُمۡ فِي غَمۡرَتِهِمۡ حَتَّىٰ حِينٍ (54) أَيَحۡسَبُونَ
          أَنَّمَا نُمِدُّهُم بِهِۦ مِن مَّالٖ وَبَنِينَ (55) نُسَارِعُ لَهُمۡ
          فِي ٱلۡخَيۡرَٰتِۚ بَل لَّا يَشۡعُرُونَ (56) إِنَّ ٱلَّذِينَ هُم مِّنۡ
          خَشۡيَةِ رَبِّهِم مُّشۡفِقُونَ (57) وَٱلَّذِينَ هُم بِـَٔايَٰتِ
          رَبِّهِمۡ يُؤۡمِنُونَ (58) وَٱلَّذِينَ هُم بِرَبِّهِمۡ لَا يُشۡرِكُونَ
          (59) وَٱلَّذِينَ يُؤۡتُونَ مَآ ءَاتَواْ وَّقُلُوبُهُمۡ وَجِلَةٌ
          أَنَّهُمۡ إِلَىٰ رَبِّهِمۡ رَٰجِعُونَ (60) أُوْلَٰٓئِكَ يُسَٰرِعُونَ
          فِي ٱلۡخَيۡرَٰتِ وَهُمۡ لَهَا سَٰبِقُونَ (61) وَلَا نُكَلِّفُ نَفۡسًا
          إِلَّا وُسۡعَهَاۚ وَلَدَيۡنَا كِتَٰبٞ يَنطِقُ بِٱلۡحَقِّ وَهُمۡ لَا
          يُظۡلَمُونَ (62) بَلۡ قُلُوبُهُمۡ فِي غَمۡرَةٖ مِّنۡ هَٰذَا وَلَهُمۡ
          أَعۡمَٰلٞ مِّن دُونِ ذَٰلِكَ هُمۡ لَهَا عَٰمِلُونَ (63) حَتَّىٰٓ
          إِذَآ أَخَذۡنَا مُتۡرَفِيهِم بِٱلۡعَذَابِ إِذَا هُمۡ يَجۡـَٔرُونَ
          (64) لَا تَجۡـَٔرُواْ ٱلۡيَوۡمَۖ إِنَّكُم مِّنَّا لَا تُنصَرُونَ (65)
          قَدۡ كَانَتۡ ءَايَٰتِي تُتۡلَىٰ عَلَيۡكُمۡ فَكُنتُمۡ عَلَىٰٓ
          أَعۡقَٰبِكُمۡ تَنكِصُونَ (66) مُسۡتَكۡبِرِينَ بِهِۦ سَٰمِرٗا
          تَهۡجُرُونَ (67) أَفَلَمۡ يَدَّبَّرُواْ ٱلۡقَوۡلَ أَمۡ جَآءَهُم مَّا
          لَمۡ يَأۡتِ ءَابَآءَهُمُ ٱلۡأَوَّلِينَ (68) أَمۡ لَمۡ يَعۡرِفُواْ
          رَسُولَهُمۡ فَهُمۡ لَهُۥ مُنكِرُونَ (69) أَمۡ يَقُولُونَ بِهِۦ
          جِنَّةُۢۚ بَلۡ جَآءَهُم بِٱلۡحَقِّ وَأَكۡثَرُهُمۡ لِلۡحَقِّ
          كَٰرِهُونَ (70) وَلَوِ ٱتَّبَعَ ٱلۡحَقُّ أَهۡوَآءَهُمۡ لَفَسَدَتِ
          ٱلسَّمَٰوَٰتُ وَٱلۡأَرۡضُ وَمَن فِيهِنَّۚ بَلۡ أَتَيۡنَٰهُم
          بِذِكۡرِهِمۡ فَهُمۡ عَن ذِكۡرِهِم مُّعۡرِضُونَ (71) أَمۡ تَسۡـَٔلُهُمۡ
          خَرۡجٗا فَخَرَاجُ رَبِّكَ خَيۡرٞۖ وَهُوَ خَيۡرُ ٱلرَّٰزِقِينَ (72)
          وَإِنَّكَ لَتَدۡعُوهُمۡ إِلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ (73) وَإِنَّ
          ٱلَّذِينَ لَا يُؤۡمِنُونَ بِٱلۡأٓخِرَةِ عَنِ ٱلصِّرَٰطِ لَنَٰكِبُونَ
          (74) ۞وَلَوۡ رَحِمۡنَٰهُمۡ وَكَشَفۡنَا مَا بِهِم مِّن ضُرّٖ
          لَّلَجُّواْ فِي طُغۡيَٰنِهِمۡ يَعۡمَهُونَ (75) وَلَقَدۡ أَخَذۡنَٰهُم
          بِٱلۡعَذَابِ فَمَا ٱسۡتَكَانُواْ لِرَبِّهِمۡ وَمَا يَتَضَرَّعُونَ (76)
          حَتَّىٰٓ إِذَا فَتَحۡنَا عَلَيۡهِم بَابٗا ذَا عَذَابٖ شَدِيدٍ إِذَا
          هُمۡ فِيهِ مُبۡلِسُونَ (77) وَهُوَ ٱلَّذِيٓ أَنشَأَ لَكُمُ ٱلسَّمۡعَ
          وَٱلۡأَبۡصَٰرَ وَٱلۡأَفۡـِٔدَةَۚ قَلِيلٗا مَّا تَشۡكُرُونَ (78) وَهُوَ
          ٱلَّذِي ذَرَأَكُمۡ فِي ٱلۡأَرۡضِ وَإِلَيۡهِ تُحۡشَرُونَ (79) وَهُوَ
          ٱلَّذِي يُحۡيِۦ وَيُمِيتُ وَلَهُ ٱخۡتِلَٰفُ ٱلَّيۡلِ وَٱلنَّهَارِۚ
          أَفَلَا تَعۡقِلُونَ (80) بَلۡ قَالُواْ مِثۡلَ مَا قَالَ ٱلۡأَوَّلُونَ
          (81) قَالُوٓاْ أَءِذَا مِتۡنَا وَكُنَّا تُرَابٗا وَعِظَٰمًا أَءِنَّا
          لَمَبۡعُوثُونَ (82) لَقَدۡ وُعِدۡنَا نَحۡنُ وَءَابَآؤُنَا هَٰذَا مِن
          قَبۡلُ إِنۡ هَٰذَآ إِلَّآ أَسَٰطِيرُ ٱلۡأَوَّلِينَ (83) قُل لِّمَنِ
          ٱلۡأَرۡضُ وَمَن فِيهَآ إِن كُنتُمۡ تَعۡلَمُونَ (84) سَيَقُولُونَ
          لِلَّهِۚ قُلۡ أَفَلَا تَذَكَّرُونَ (85) قُلۡ مَن رَّبُّ ٱلسَّمَٰوَٰتِ
          ٱلسَّبۡعِ وَرَبُّ ٱلۡعَرۡشِ ٱلۡعَظِيمِ (86) سَيَقُولُونَ لِلَّهِۚ قُلۡ
          أَفَلَا تَتَّقُونَ (87) قُلۡ مَنۢ بِيَدِهِۦ مَلَكُوتُ كُلِّ شَيۡءٖ
          وَهُوَ يُجِيرُ وَلَا يُجَارُ عَلَيۡهِ إِن كُنتُمۡ تَعۡلَمُونَ (88)
          سَيَقُولُونَ لِلَّهِۚ قُلۡ فَأَنَّىٰ تُسۡحَرُونَ (89) بَلۡ
          أَتَيۡنَٰهُم بِٱلۡحَقِّ وَإِنَّهُمۡ لَكَٰذِبُونَ (90) مَا ٱتَّخَذَ
          ٱللَّهُ مِن وَلَدٖ وَمَا كَانَ مَعَهُۥ مِنۡ إِلَٰهٍۚ إِذٗا لَّذَهَبَ
          كُلُّ إِلَٰهِۭ بِمَا خَلَقَ وَلَعَلَا بَعۡضُهُمۡ عَلَىٰ بَعۡضٖۚ
          سُبۡحَٰنَ ٱللَّهِ عَمَّا يَصِفُونَ (91) عَٰلِمِ ٱلۡغَيۡبِ
          وَٱلشَّهَٰدَةِ فَتَعَٰلَىٰ عَمَّا يُشۡرِكُونَ (92) قُل رَّبِّ إِمَّا
          تُرِيَنِّي مَا يُوعَدُونَ (93) رَبِّ فَلَا تَجۡعَلۡنِي فِي ٱلۡقَوۡمِ
          ٱلظَّٰلِمِينَ (94) وَإِنَّا عَلَىٰٓ أَن نُّرِيَكَ مَا نَعِدُهُمۡ
          لَقَٰدِرُونَ (95) ٱدۡفَعۡ بِٱلَّتِي هِيَ أَحۡسَنُ ٱلسَّيِّئَةَۚ نَحۡنُ
          أَعۡلَمُ بِمَا يَصِفُونَ (96) وَقُل رَّبِّ أَعُوذُ بِكَ مِنۡ هَمَزَٰتِ
          ٱلشَّيَٰطِينِ (97) وَأَعُوذُ بِكَ رَبِّ أَن يَحۡضُرُونِ (98) حَتَّىٰٓ
          إِذَا جَآءَ أَحَدَهُمُ ٱلۡمَوۡتُ قَالَ رَبِّ ٱرۡجِعُونِ (99)
          لَعَلِّيٓ أَعۡمَلُ صَٰلِحٗا فِيمَا تَرَكۡتُۚ كَلَّآۚ إِنَّهَا
          كَلِمَةٌ هُوَ قَآئِلُهَاۖ وَمِن وَرَآئِهِم بَرۡزَخٌ إِلَىٰ يَوۡمِ
          يُبۡعَثُونَ (100) فَإِذَا نُفِخَ فِي ٱلصُّورِ فَلَآ أَنسَابَ
          بَيۡنَهُمۡ يَوۡمَئِذٖ وَلَا يَتَسَآءَلُونَ (101) فَمَن ثَقُلَتۡ
          مَوَٰزِينُهُۥ فَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ (102) وَمَنۡ خَفَّتۡ
          مَوَٰزِينُهُۥ فَأُوْلَٰٓئِكَ ٱلَّذِينَ خَسِرُوٓاْ أَنفُسَهُمۡ فِي
          جَهَنَّمَ خَٰلِدُونَ (103) تَلۡفَحُ وُجُوهَهُمُ ٱلنَّارُ وَهُمۡ فِيهَا
          كَٰلِحُونَ (104) أَلَمۡ تَكُنۡ ءَايَٰتِي تُتۡلَىٰ عَلَيۡكُمۡ فَكُنتُم
          بِهَا تُكَذِّبُونَ (105) قَالُواْ رَبَّنَا غَلَبَتۡ عَلَيۡنَا
          شِقۡوَتُنَا وَكُنَّا قَوۡمٗا ضَآلِّينَ (106) رَبَّنَآ أَخۡرِجۡنَا
          مِنۡهَا فَإِنۡ عُدۡنَا فَإِنَّا ظَٰلِمُونَ (107) قَالَ ٱخۡسَـُٔواْ
          فِيهَا وَلَا تُكَلِّمُونِ (108) إِنَّهُۥ كَانَ فَرِيقٞ مِّنۡ عِبَادِي
          يَقُولُونَ رَبَّنَآ ءَامَنَّا فَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَا وَأَنتَ
          خَيۡرُ ٱلرَّٰحِمِينَ (109) فَٱتَّخَذۡتُمُوهُمۡ سِخۡرِيًّا حَتَّىٰٓ
          أَنسَوۡكُمۡ ذِكۡرِي وَكُنتُم مِّنۡهُمۡ تَضۡحَكُونَ (110) إِنِّي
          جَزَيۡتُهُمُ ٱلۡيَوۡمَ بِمَا صَبَرُوٓاْ أَنَّهُمۡ هُمُ ٱلۡفَآئِزُونَ
          (111) قَٰلَ كَمۡ لَبِثۡتُمۡ فِي ٱلۡأَرۡضِ عَدَدَ سِنِينَ (112)
          قَالُواْ لَبِثۡنَا يَوۡمًا أَوۡ بَعۡضَ يَوۡمٖ فَسۡـَٔلِ ٱلۡعَآدِّينَ
          (113) قَٰلَ إِن لَّبِثۡتُمۡ إِلَّا قَلِيلٗاۖ لَّوۡ أَنَّكُمۡ كُنتُمۡ
          تَعۡلَمُونَ (114) أَفَحَسِبۡتُمۡ أَنَّمَا خَلَقۡنَٰكُمۡ عَبَثٗا
          وَأَنَّكُمۡ إِلَيۡنَا لَا تُرۡجَعُونَ (115) فَتَعَٰلَى ٱللَّهُ
          ٱلۡمَلِكُ ٱلۡحَقُّۖ لَآ إِلَٰهَ إِلَّا هُوَ رَبُّ ٱلۡعَرۡشِ
          ٱلۡكَرِيمِ (116) وَمَن يَدۡعُ مَعَ ٱللَّهِ إِلَٰهًا ءَاخَرَ لَا
          بُرۡهَٰنَ لَهُۥ بِهِۦ فَإِنَّمَا حِسَابُهُۥ عِندَ رَبِّهِۦٓۚ إِنَّهُۥ
          لَا يُفۡلِحُ ٱلۡكَٰفِرُونَ (117) وَقُل رَّبِّ ٱغۡفِرۡ وَٱرۡحَمۡ
          وَأَنتَ خَيۡرُ ٱلرَّٰحِمِينَ (118)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default TwentyThree;